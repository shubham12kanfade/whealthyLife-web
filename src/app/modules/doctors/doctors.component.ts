import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConsultationService } from 'src/app/services/consultation.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  show: boolean = false;
  aval: boolean = false;
  doctorList: any = [];

  constructor(public consultationService: ConsultationService,
    public userService: UserService,
    public router: Router
  ) {
    this.getScroll();
    this.getDoctorList();
  }

  getDoctorList() {
    this.consultationService.getDoctorlist().then(resData => {
      console.log("DoctorsComponent -> getDoctorList -> resData", resData);
      this.doctorList = resData.data;

    }).catch(error => {
      console.log("DoctorsComponent -> getDoctorList -> error", error)
    })
  }

  onConsultation(id) {
    var data = {
      doctor: id
    }
    this.consultationService.createSession(data).then(resData => {
      console.log("DoctorsComponent -> onConsultation -> resData", resData);
      this.router.navigate(['/video-conference'])
    }).catch(error => {
      console.log("DoctorsComponent -> onConsultation -> error", error);
    })
  }

  ngOnInit(): void {
  }

  showtime() {
    this.show = !this.show;
  }

  avaialableclick() {
    this.aval = !this.aval;
  }

  getScroll() {
    $(window).scroll(function () {
      var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    $(window).scroll(function () {
      var sticky = $('.sticky1'),
        scroll = $(window).scrollTop();

      if (scroll >= 100 && scroll <= 1600) sticky.addClass('fixed1');
      else sticky.removeClass('fixed1');
    });

    $(window).scroll(function () {
      console.log("DoctorsComponent -> constructor -> $(window).scrollTop()", $(window).scrollTop())
      if ($(window).scrollTop() >= 112) {
        $('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
      } else {
        $('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
      }
    });
  }
}

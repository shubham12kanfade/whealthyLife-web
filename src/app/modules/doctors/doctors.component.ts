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
  show: any;
  aval: boolean = false;
  doctorList: any = [];
  evningSlot: any = [];
  morningSlot: any = [];
  minDate = new Date();
  selectedSlot: any;
  docId: any;

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
      // this.docId = resData.data._id;
      console.log("DoctorsComponent -> getDoctorList -> this.docId", this.docId)
      
      // this.docId= this.doctorList._id;
      console.log("DoctorsComponent -> getDoctorList -> this.doctorList", this.doctorList);
    //   this.docId= this.doctorList._id;
    //   console.log("DoctorsComponent -> getDoctorList -> this.docId", this.docId)
    //5ecb7119a4c60c58792d9ebb
    }).catch(error => {
      console.log("DoctorsComponent -> getDoctorList -> error", error);
    })
  }


  // getProfile(id){
  //   this.router.navigate(['/doctor_profile/:id'])
  // }


  

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

  onSelectSlot(time) {
    this.selectedSlot = time;
  }



  ngOnInit(): void {
  }

  showtime(doctor) {
    this.show = doctor._id;
    console.log("DoctorsComponent -> showtime -> doctor", doctor);
    var session1Start = doctor.slots[0].session1Start.split(":");
    var session1End = doctor.slots[0].session1End.split(":");
    var session2Start = doctor.slots[0].session2Start.split(":");
    var session2End = doctor.slots[0].session2End.split(":");
    console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
    this.morningSlot = [];
    this.evningSlot = [];

    for (var i = parseInt(session1Start[0]); i < parseInt(session1End[0]); i++) {
      var hour = i < 10 ? '0' + i : i;
      if (i <= 13) {
        this.morningSlot.push({ label: hour + ':00', value: hour + ':00' });
        this.morningSlot.push({ label: hour + ':30', value: hour + ':30' });
      }
    }

    for (var i = parseInt(session2Start[0]); i < parseInt(session2End[0]); i++) {
      var hour = i < 10 ? '0' + i : i;
      if (i >= 13) {
        this.evningSlot.push({ label: hour + ':00', value: hour + ':00' });
        this.evningSlot.push({ label: hour + ':30', value: hour + ':30' });
      }
    }

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
      if ($(window).scrollTop() >= 112) {
        $('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
      } else {
        $('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
      }
    });

  }
}

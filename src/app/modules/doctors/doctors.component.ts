import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  show: boolean = false;
  aval: boolean = false;



  constructor() {
    $(window).scroll(function () {
      console.log("DoctorsComponent -> constructor -> $(window).scrollTop()", $(window).scrollTop())
      if ($(window).scrollTop() >= 112) {
        $('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
      } else {
        $('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
      }
    });

  
  }

  
  ngOnInit(): void {
  }
  showtime() {
    this.show = !this.show;
  }
  avaialableclick() {
    this.aval = !this.aval;
  }
}

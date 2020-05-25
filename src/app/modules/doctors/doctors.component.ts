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
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    $(window).scroll(function(){
      var sticky = $('.sticky1'),
          scroll = $(window).scrollTop();
          
      if (scroll >=100 && scroll <= 1600 ) sticky.addClass('fixed1');
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

  ngOnInit(): void {
  }
  showtime() {
    this.show = !this.show;
  }
  avaialableclick() {
    this.aval = !this.aval;
  }
}

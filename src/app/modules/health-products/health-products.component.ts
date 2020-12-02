import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-health-products',
  templateUrl: './health-products.component.html',
  styleUrls: ['./health-products.component.scss']
})
export class HealthProductsComponent implements OnInit {

  constructor() { 
    // $(window).scroll(function(){
    //   var sticky = $('.sticky'),
    //       scroll = $(window).scrollTop();
    
    //   if (scroll >= 100) sticky.addClass('fixed');
    //   else sticky.removeClass('fixed');
    // });

    // $(window).scroll(function () {
    //   console.log("HealthProductsComponent -> constructor -> $(window).scrollTop()", $(window).scrollTop())
    //   if ($(window).scrollTop() >= 110) {
    //     $('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
    //   } else {
    //     $('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
    //   }
    // });
  }

  ngOnInit(): void {
  }

}

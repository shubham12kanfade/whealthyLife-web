import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bookappoiment',
  templateUrl: './bookappoiment.component.html',
  styleUrls: ['./bookappoiment.component.scss']
})
export class BookappoimentComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1040: {
        items: 4
      }
    },
    nav: false
  };
 

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    // autoplaySpeed:100,
    margin: 10,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };

  slick: OwlOptions = {
    loop:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    navText: ["", ""],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1040: {
        items: 1
      }
    },

    nav: false
  };



  ngOnInit(): void {
  }

}

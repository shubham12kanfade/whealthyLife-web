import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-booktests',
  templateUrl: './booktests.component.html',
  styleUrls: ['./booktests.component.scss']
})
export class BooktestsComponent implements OnInit {
  f_list: any = [];
  constructor() {
    this.f_list.length = 9;
  }
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
        items: 7
      }
    },
    nav: false
  };


  customOptions2: OwlOptions = {
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
        items: 6
      }
    },
    nav: false
  };

  customOptions3: OwlOptions = {
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
        items: 3
      },
      1040: {
        items: 3
      }
    },
    nav: false
  };
  customOptions4: OwlOptions = {
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
        items: 6
      }
    },
    nav: false
  };





  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-chat-with-doctor',
  templateUrl: './chat-with-doctor.component.html',
  styleUrls: ['./chat-with-doctor.component.scss']
})
export class ChatWithDoctorComponent implements OnInit {
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
        items: 3
      },
      1040: {
        items: 3
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
        items: 2
      },
      940: {
        items: 2
      },
      1040: {
        items: 2
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

import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConsultService } from './../../services/consult.service';
@Component({
  selector: 'app-chat-with-doctor',
  templateUrl: './chat-with-doctor.component.html',
  styleUrls: ['./chat-with-doctor.component.scss']
})
export class ChatWithDoctorComponent implements OnInit {
  f_list: any = [];
  Offers: any;
  constructor( private ConsultService:ConsultService) {
    this.f_list.length = 9;
    this.ConsultService.getOffers().then((resData)=>{
    console.log("ChatWithDoctorComponent -> constructor -> resData", resData)
     this.Offers =resData.data
    }).catch((err)=>{
    console.log("ChatWithDoctorComponent -> constructor -> err", err)
      
    })
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
        items: 3
      },
      1040: {
        items: 3
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
        items: 3
      },
      1040: {
        items: 3
      }
    },
    nav: false
  };





  ngOnInit(): void {
  }
}

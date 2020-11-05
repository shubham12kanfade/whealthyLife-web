import { MedicineService } from './../../services/medicine.service';
import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  HelthCondition: any;

  constructor(private MedicineService:MedicineService) {
    this.MedicineService.getHelthCondtion().then((resData)=>{
    console.log("OrderComponent -> constructor -> resData", resData)
    
this.HelthCondition=resData.data

      
    }).catch((err)=>{
    console.log("OrderComponent -> constructor -> err", err)
      
    })
   }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: false,
    navSpeed: 300,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  
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


  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
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
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

  medicine: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],
    margin: 10,

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

  ngOnInit(): void {
  }

}

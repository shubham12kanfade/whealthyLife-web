import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { SelectCityComponent} from './select-city/select-city.component'

@Component({
  selector: 'app-booktests',
  templateUrl: './booktests.component.html',
  styleUrls: ['./booktests.component.scss']
})
export class BooktestsComponent implements OnInit {
  f_list: any = [];
  curosalArray :any[];
  health : boolean =true;
  curosalArray1:any[];



  constructor(public dialog: MatDialog) {
    this.f_list.length = 9;

    this.curosalArray=[
      {image : '../../../assets/booktests/img1.jpg' },
      {image : '../../../assets/booktests/img2.jpg' },
      {image : '../../../assets/booktests/img3.jpg' },
      {image : '../../../assets/booktests/img4.jpg' }
    ]

    this.curosalArray1=[
      {image : '../../../assets/booktests/img3.jpg' },
      {image : '../../../assets/booktests/img4.jpg' },
      {image : '../../../assets/booktests/img5.jpg' },
      {image : '../../../assets/booktests/img6.jpg' }
    ]
  }

  healthCheck(){
    this.health = !this.health;
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
        items: 4
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




  customOptions321: OwlOptions = {
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

  modalopen() {
    const dialogRef = this.dialog.open(SelectCityComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

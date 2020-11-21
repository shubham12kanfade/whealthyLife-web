import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';
import { SelectCityComponent} from './select-city/select-city.component'
import { promise } from 'protractor';

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
  AllLab: Promise<any>;
  Labid: any;
  Package: Promise<any>;




  constructor(public dialog: MatDialog,public mainService :MainService) {
    this.f_list.length = 9;



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



    // this.Labid = this.AllLab.__zone_symbol__value && this.AllLab.__zone_symbol__value.data && this.AllLab.__zone_symbol__value.data._id
    // console.log(": -----------------------------------------------------------");
    // console.log("BooktestsComponent -> constructor -> this.Labid", this.Labid);
    // console.log(": -----------------------------------------------------------");

    // this.getAllLab();
    this.getAllPackage();


  }

  // getAllLab(){
  //  this.mainService.getAllLab().then(resData => {

  //   this.AllLab = resData.data._id
  //   console.log(": -----------------------------------------------------------");
  //   console.log("BooktestsComponent -> getAllLab -> this.AllLab", this.AllLab);
  //   console.log(": -----------------------------------------------------------");
  //  })

  //   // this.Labid = this.AllLab.__zone_symbol__value && this.AllLab.__zone_symbol__value.data && this.AllLab.__zone_symbol__value.data._id
  //   // console.log(": ---------------------------------------------------------");
  //   // console.log("BooktestsComponent -> getAllLab -> this.Labid", this.Labid);
  //   // console.log(": ---------------------------------------------------------");

  // }

  getAllPackage(){
    this.mainService.getallPackage().then(PAckageData => {

      for(let i = 0; i < PAckageData.data.length; i++){
        this.Package = PAckageData.data
        console.log(": -----------------------------------------------------------------");
        console.log("BooktestsComponent -> getAllPackage -> this.Package", this.Package);
        console.log(": -----------------------------------------------------------------");

      }
    })

  }

  modalopen() {
    const dialogRef = this.dialog.open(SelectCityComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

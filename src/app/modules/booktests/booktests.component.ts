import { BookingService } from './../../services/booking.service';
import { LocationService } from "./../../services/location.service";
import { MainService } from "./../../services/main.service";
import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { MatDialog } from "@angular/material/dialog";
import { SelectCityComponent } from "./select-city/select-city.component";
import { promise } from "protractor";

@Component({
  selector: "app-booktests",
  templateUrl: "./booktests.component.html",
  styleUrls: ["./booktests.component.scss"],
})
export class BooktestsComponent implements OnInit {
  f_list: any = [];
  curosalArray: any[];
  health: boolean = true;
  curosalArray1: any[];
  AllLab: Promise<any>;
  Labid: any;
  Package: any=[];
  locatdata: { lat: number; lng: number };
  GetAll: any;
  Profile: any=[];

  constructor(
    public dialog: MatDialog,
    public mainService: MainService,
  private BookingService:BookingService
  ) {
    this.f_list.length = 9;

this.getAllTest();

  }
  healthCheck() {
    this.health = !this.health;
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1040: {
        items: 4,
      },
    },
    nav: false,
  };
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1040: {
        items: 6,
      },
    },
    nav: false,
  };
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
      1040: {
        items: 3,
      },
    },
    nav: false,
  };
  customOptions4: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
      1040: {
        items: 1,
      },
    },
    nav: false,
  };
  customOptions321: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
      1040: {
        items: 3,
      },
    },
    nav: false,
  };
  ngOnInit(): void {
    this.getAllPackage();
    this.getProfileAll();
  }
  getAllPackage() {
    this.mainService.getallPackage().then((PAckageData) => {
      for (let i = 0; i < PAckageData.data.length; i++) {
        this.Package[i] = PAckageData.data[i];
      }
    });
  }
  modalopen() {
    const dialogRef = this.dialog.open(SelectCityComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
getAllTest(){
  this.BookingService.getAllTestApi().then((resData)=>{
    this.GetAll=resData.data
  }).catch((err)=>{
  console.log("🚀 ~ file: booktests.component.ts ~ line 213 ~ BooktestsComponent ~ this.BookingService.getAllTestApi ~ err", err)

  })
}

getProfileAll()
{
  this.mainService.getAllProfile().then(ProfRes =>{

    for(let i = 0; i < ProfRes.data.length; i++){
      this.Profile[i] = ProfRes.data[i]
    }

  }).catch(err => {
    console.log("🚀 ~ file: booktests.component.ts ~ line 232 ~ BooktestsComponent ~ this.mainService.getAllProfile ~ err", err);
  })


}


}

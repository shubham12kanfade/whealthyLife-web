import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { FormControl } from '@angular/forms';
import { CurrentLocIpService } from './../../services/current-loc-ip.service';
import { BookingService } from './../../services/booking.service';
import { LocationService } from "./../../services/location.service";
import { MainService } from "./../../services/main.service";
import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { MatDialog } from "@angular/material/dialog";
import { SelectCityComponent } from "./select-city/select-city.component";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CustomerReviewService } from 'src/app/services/customer-review.service';
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
  Package: any = [];
  locatdata: { lat: number; lng: number };
  GetAll: any;
  Profile: any = [];
  Labdata: any = [];
  city: any;
  TestAll: any = [];
  TestId: any; review: any;
  search: any[];
  reg: FormGroup;
  options: any[];
  filteredOptions: any[];


  constructor(
    public dialog: MatDialog,
    public mainService: MainService,
    private BookingService: BookingService,
    public CRService: CustomerReviewService,
    public CurrentLocIpService: CurrentLocIpService,
    private formBuilder: FormBuilder
  ) {
    this.getCurrentLocation()
  }
  getCurrentLocation() {
    this.CurrentLocIpService.getData().then((resData) => {
      this.city = resData.city
      console.log("🚀 ~ file: booktests.component.ts ~ line 45 ~ BooktestsComponent ~ this.CurrentLocIpService.getData ~ this.city", this.city)
    }).catch((err) => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 62 ~ BooktestsComponent ~ this.CurrentLocIpService.getData ~ err", err)
    })
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
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
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
    nav: true
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
    navText: ["", ""], responsive: {
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
  ngOnInit() {

    this.reg = this.formBuilder.group({
      title: ['']});


      this.reg.valueChanges.subscribe((resData)=>{

      const data =this.reg.controls.title.value
const data2=data.toLowerCase()
this.filteredOptions=this.search.filter(option => option.name.toLowerCase().includes(data2))
console.log(this.filteredOptions)
      })







    this.getAllPackage();
    this.getProfileAll();
    this.getAllTest(this.city);
    this.getFetureLabs()
    this.getBookRev()
    this.getSearch()

  }




  getSearch() {
    this.search = []
    this.BookingService.searchAllProduct(this.city).then((resData) => {
      const data = resData?.data[0]?.tests
      // Pending package nd profile boz of api
      data.forEach(element => {
        const data2 = {
          name: element.title,
          id: element._id,
          type: 'test'
        }
        this.search.push(data2)
      });

      console.log("🚀 ~ file: booktests.component.ts ~ line 302 ~ BooktestsComponent ~ this.BookingService.searchAllProduct ~ this.search", this.search)

      this.options = this.search








    }).catch((err) => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 245 ~ BooktestsComponent ~ this.BookingService.searchAllProduct ~ err", err)

    })
  }
  getBookRev() {
    this.BookingService.getBookingPageRev().then((resData) => {
      this.review = resData?.data
    }).catch((err) => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 233 ~ BooktestsComponent ~ this.BookingService.getBookingPageRev ~ err", err)

    })
  }
  getFetureLabs() {
    this.CRService.getFeaturedLab().then(LabData => {
      for (let i = 0; i < LabData.data.length; i++) {
        this.Labdata[i] = LabData.data[i]
      }
    }).catch(error => {
      console.log("HomeComponent -> error", error);
    })
  }
  getAllPackage() {
    this.mainService.getallPackage().then((PAckageData) => {
      for (let i = 0; i < PAckageData.data.length; i++) {
        this.Package[i] = PAckageData.data[i];
      }
    });
  }
  modalopen() {
    const dialogRef = this.dialog.open(SelectCityComponent); dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    }); dialogRef.afterClosed().subscribe(result => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 262 ~ BooktestsComponent ~ dialogRef.afterClosed ~ result", result)
      console.log('The dialog was closed');
      this.city = result;
      this.getAllTest(this.city);
      this.getSearch()
    });
  }
  getAllTest(val) {
    this.BookingService.getAllTestApi(val).then((resData) => {
      this.GetAll = resData?.data[0]?.tests
      console.log("🚀 ~ file: booktests.component.ts ~ line 285 ~ BooktestsComponent ~ this.BookingService.getAllTestApi ~ this.GetAll", this.GetAll);
    }).catch((err) => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 213 ~ BooktestsComponent ~ this.BookingService.getAllTestApi ~ err", err)
    });
  } getProfileAll() {
    this.mainService.getAllProfile().then(ProfRes => {
      for (let i = 0; i < ProfRes.data.length; i++) {
        this.Profile[i] = ProfRes.data[i]
        console.log("🚀 -------------------------------------------------------------------------------------------------------------------------------------");
        console.log("🚀 ~ file: booktests.component.ts ~ line 308 ~ BooktestsComponent ~ this.mainService.getAllProfile ~ this.Profile[i]", this.Profile[i]);
        console.log("🚀 -------------------------------------------------------------------------------------------------------------------------------------"); this.mainService.getProfileById(this.Profile[i]._id).then(resProfile => {
        }).catch(err => {
          console.log("🚀 ~ file: booktests.component.ts ~ line 229 ~ BooktestsComponent ~ this.mainService.getProfileById ~ err", err);
        })
      }
    }).catch(err => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 232 ~ BooktestsComponent ~ this.mainService.getAllProfile ~ err", err);
    })
  }
}

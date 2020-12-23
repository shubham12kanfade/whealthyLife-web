import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CurrentLocIpService } from './../../services/current-loc-ip.service';
import { BookingService } from './../../services/booking.service';
import { MainService } from "./../../services/main.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SelectCityComponent } from "./select-city/select-city.component";
import { CustomerReviewService } from 'src/app/services/customer-review.service';
import { customOptions, customOptions2, customOptions321, customOptions4, customOptions3, customOptions1 } from './sliderComnfig';

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
  customOptions = customOptions;
  customOptions2 = customOptions2;
  customOptions321 = customOptions321;
  customOptions4 = customOptions4;
  customOptions3 = customOptions3;
  customOptions1 = customOptions1;
  labCities: any = [];

  constructor(
    public dialog: MatDialog,
    public mainService: MainService,
    private BookingService: BookingService,
    public CRService: CustomerReviewService,
    public CurrentLocIpService: CurrentLocIpService,
    private formBuilder: FormBuilder
  ) {
    this.getCurrentLocation();
    this.getAllLabCities();
  }
  getCurrentLocation() {
    this.CurrentLocIpService.getData().then((resData) => {
      this.city = resData.city;
      this.getAllTest(this.city);
    })
  }
  healthCheck() {
    this.health = !this.health;
  }

  ngOnInit() {
    this.reg = this.formBuilder.group({
      title: ['']
    });
    this.reg.valueChanges.subscribe((resData) => {

      const data = this.reg.controls.title.value
      const data2 = data.toLowerCase()
      this.filteredOptions = this.search.filter(option => option.name.toLowerCase().includes(data2))
      console.log(this.filteredOptions)
    })
    this.getAllPackage();
    this.getProfileAll();
    this.getFetureLabs()
    this.getBookRev()
    this.getSearch()
  }

  getSearch() {
    this.search = []
    this.BookingService.searchAllProduct(this.city).then((resData) => {
      const data = resData?.data[0]?.tests
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
    }).catch((err) => {
    });
  } getProfileAll() {
    this.mainService.getAllProfile().then(ProfRes => {
      for (let i = 0; i < ProfRes.data.length; i++) {
        this.Profile[i] = ProfRes.data[i]
      }
    }).catch(err => {
      console.log("🚀 ~ file: booktests.component.ts ~ line 232 ~ BooktestsComponent ~ this.mainService.getAllProfile ~ err", err);
    })
  }

  getAllLabCities() {
    this.BookingService.getAllLabsCity()
      .then((resData) => {
        console.log("resData", resData);
        this.labCities = resData.data
      }).catch((err) => {
        console.log("Error", err)
      })
  }
}
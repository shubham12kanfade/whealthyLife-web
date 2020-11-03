import { BookingPageService } from './../../../services/booking-page.service';
import { LocationService } from "./../../../services/location.service";
import { DoctorProfileService } from "./../../../services/doctor-profile.service";
import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedBackPopComponent } from '../feed-back-pop/feed-back-pop.component';
import csc from 'country-state-city';
import * as moment from 'moment';

@Component({
  selector: "app-doctor-profile",
  templateUrl: "./doctor-profile.component.html",
  styleUrls: ["./doctor-profile.component.scss"],
})
export class DoctorProfileComponent implements OnInit {
  active: String = "Info";
  id: any;
  profileData: any;
  city: any;
  state: any;
  Country: any;
  degree: any;
  slot: any;
  Awards: any;
  memberShip: any;
  currentDate: Date;
  date: Date;
  slot2: any;
  slot3: any;
  slot4: any;
  slot5: any;
  Qa: any;
  review: any;
  Star: any;

  constructor(
    public mainService: MainService,
    public activatedRoutes: ActivatedRoute,
    public DoctorProfile: DoctorProfileService,
    public LocationS: LocationService,
    public BookingPageService: BookingPageService, public dialog: MatDialog
  ) {

    this.currentDate = new Date();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FeedBackPopComponent, {
      width: '250px',
    });
  }
  getCitys(id) {
    const data = csc.getCityById(id)
    return data.name
  }
  getStates(id) {
    const data = csc.getStateById(id);
    return data.name
  }
  getCountrys(id) {
    const data = csc.getCountryById(id);
    return data.name
  }
  ngOnInit(): void {





    this.activatedRoutes.params.subscribe((params) => {
      this.id = params["id"];
      this.getProfileDetails();
    });
    this.getaword()
    this.getDocMember()
    this.BookingPageService.getDegree(this.id).then((resData) => {
      this.degree = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })


    this.BookingPageService.getDoctorSlotId(this.id, { date: this.currentDate }).then((resData) => {
      this.slot = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })

    const data1 = moment().add(1, 'days').format('L');
    this.BookingPageService.getDoctorSlotId(this.id, { date: data1 }).then((resData) => {
      this.slot2 = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })

    const data2 = moment().add(2, 'days').format('L');
    this.BookingPageService.getDoctorSlotId(this.id, { date: data2 }).then((resData) => {
      this.slot3 = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })



    const data3 = moment().add(3, 'days').format('L');
    this.BookingPageService.getDoctorSlotId(this.id, { date: data3 }).then((resData) => {
      this.slot4 = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })


    const data4 = moment().add(4, 'days').format('L');
    this.BookingPageService.getDoctorSlotId(this.id, { date: data4 }).then((resData) => {
      this.slot5 = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })


    this.BookingPageService.getQa(this.id).then((resData) => {
this.Qa=resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)

    })
this.BookingPageService.getReview(this.id).then((resData)=>{

this.review=resData.data
}).catch((err)=>{
console.log("err", err)
  
})
this.BookingPageService.getReview(this.id).then((resData)=>{
console.log("resData", resData)
this.Star=resData.data
}).catch((err)=>{
console.log("err", err)
  
})
  }
  getDocMember() {
    this.BookingPageService.getDroctorMember(this.id).then((resData) => {
      this.memberShip = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> getDocMember -> err", err)
    })
  }
  getaword() {
    this.BookingPageService.getDroctorAward(this.id).then((resData) => {
      this.Awards = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> getaword -> err", err)
    })
  }
  getProfileDetails() {
    const data = { findId: this.id }

    this.DoctorProfile.getDoctorProfile(data)
      .then((resData) => {
        this.profileData = resData.data;
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }
  activefn(val) {
    this.active = val;
  }


  TimeSlot(val) {
    this.date = new Date();
    this.date.setDate(this.date.getDate() + val);
    return this.date
  }

}

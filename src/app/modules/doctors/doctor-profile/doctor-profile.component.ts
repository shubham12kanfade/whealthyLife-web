import { BookingPageService } from './../../../services/booking-page.service';
import { LocationService } from "./../../../services/location.service";
import { DoctorProfileService } from "./../../../services/doctor-profile.service";
import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { ActivatedRoute } from "@angular/router";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
 
  constructor(
    public mainService: MainService,
    public activatedRoutes: ActivatedRoute,
    public DoctorProfile: DoctorProfileService,
    public LocationS: LocationService,
    public BookingPageService:BookingPageService
  ) { }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      this.id = params["id"];
      this.getProfileDetails();
    });

this.BookingPageService.getDegree(this.id).then((resData)=>{
console.log(" DoctorProfileComponent -> ngOnInit -> resData DoctorProfileComponent -> ngOnInit -> resData", resData)
this.degree=resData.data
}).catch((err)=>{
console.log("DoctorProfileComponent -> ngOnInit -> err", err)
  
})
this.BookingPageService.getDoctorSlotId(this.id).then((resData)=>{
console.log("DoctorProfileComponent -> ngOnInit -> resData", resData)
  this.slot=resData.data
}).catch((err)=>{
console.log("DoctorProfileComponent -> ngOnInit -> err", err)
  
})


  }

  getProfileDetails() {
const data={ findId:this.id}

    this.DoctorProfile.getDoctorProfile(data)
      .then((resData) => {
        
        this.profileData = resData.data;
        console.log("DoctorProfileComponent -> getProfileDetails -> profileData", this.profileData)
     
        this.getCountry()
     
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }

  getcity() {
    this.LocationS.getCity(this.profileData.location.state)
      .then((resData) => {
        this.city  =  resData.data.find(x=>x.id == this.profileData.location.city).name;
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }


  getState() {
    this.LocationS.getState( this.profileData.location.country)
      .then((resData) => {
        this.state  =  resData.data.find(x=>x.id == this.profileData.location.state).name;
         this.getcity()
      
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }
  getCountry() {
    this.LocationS.getCountry()
      .then((resData) => {
        this.Country=  resData.data.find(x=>x.id == this.profileData.location.country).name;
        this.getState();
       
       
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
}

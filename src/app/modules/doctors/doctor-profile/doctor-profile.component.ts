import { LocationService } from "./../../../services/location.service";
import { DoctorProfileService } from "./../../../services/doctor-profile.service";
import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { ActivatedRoute } from "@angular/router";

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
 
  constructor(
    public mainService: MainService,
    public activatedRoutes: ActivatedRoute,
    public DoctorProfile: DoctorProfileService,
    public LocationS: LocationService
  ) { }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      this.id = params["id"];
      this.getProfileDetails();
      console.log("DoctorProfileComponent -> ngOnInit -> this.id", this.id);
    });
  }

  getProfileDetails() {
    this.DoctorProfile.getDoctorProfile(this.id)
      .then((resData) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> resData",
          resData
        );
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

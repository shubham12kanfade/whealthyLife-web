import { Component, OnInit } from '@angular/core';
import { LocationService } from './../../services/location.service';
import { RegistrationService } from './../../services/registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {

  register = new FormGroup({
    mobileNumber: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
    firstName: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
    lastName: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),

  });
  locatdata: any;

  constructor(public rs:RegistrationService, public LocationService:LocationService)
  {
    this.getLocation();
    console.log("RegisterComponent -> onSubmit -> locatdata", this.locatdata)

  }

  getLocation() {
    this.LocationService.getLocation().subscribe((res: any) => {
      this.locatdata = res;

      console.log("HeaderComponent -> res", res)
    });
  }

  onSubmit() {

    console.log("RegisterComponent -> onSubmit -> register", this.register)

    console.log("RegisterComponent -> onSubmit -> locatdata", this.locatdata)

    const data = {
      ...this.register.value,
      designation: "Doctor",
      loginType: "Password",
      location:{
        address:this.locatdata.city,
        lat:this.locatdata.lat,
        lng: this.locatdata.lon
      },

    }


    this.rs.registarUser(data).then(resData => {
    console.log("RegisterComponent -> onSubmit -> resData", resData)

    }).catch(error => {
    console.log("RegisterComponent -> onSubmit -> error", error)

    })
    this.register.reset();

   }

  ngOnInit(): void {
  }

}

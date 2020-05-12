
import { LocationService } from './../../services/location.service';
import { RegistrationService } from './../../services/registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    mobileNumber: new FormControl(""),
    firstName: new FormControl(""),
    password: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),

  });
  locatdata: any;

  constructor(public rs:RegistrationService, public LocationService:LocationService, private router: Router)
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
      designation: "User",
      loginType: "Password",
      location:{
        address:this.locatdata.city,
        lat:this.locatdata.lat,
        lng: this.locatdata.lon
      },

    }


    this.rs.registarUser(data).then(resData => {
    console.log("RegisterComponent -> onSubmit -> resData", resData)

   if(resData.status=="SUCCESS"){

       this.router.navigate(['/login']);


   }

    }).catch(error => {
    console.log("RegisterComponent -> onSubmit -> error", error)

    })


    this.register.reset();

   }


  ngOnInit(): void {
  }

}

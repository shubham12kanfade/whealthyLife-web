import { LocationService } from './../../services/location.service';
import { RegistrationService } from './../../services/registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  register = new FormGroup({
    mobileNumber: new FormControl("", [Validators.required, Validators.pattern("[0-9]{10}")]),
    firstName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),


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
 
    
   
    console.log("RegisterComponent -> onSubmit -> locatdata", this.locatdata)

    const data = {
      ...this.register.value,
      designation: "User",
      email:"sunit@gmail.com",
      loginType: "Password",
      location:{
        address:this.locatdata.city,
        lat:this.locatdata.lat,
        lng: this.locatdata.lon
      },
      lastName:"deshmukh",
      
    }

    console.log("RegisterComponent -> onSubmit -> register", this.register)
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

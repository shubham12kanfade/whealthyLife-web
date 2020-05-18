
import { LocationService } from './../../services/location.service';
import { RegistrationService } from './../../services/registration.service';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './../../helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  submitted = false;
  
  locatdata: any;

  constructor(public rs:RegistrationService, public LocationService:LocationService, private router: Router, private formBuilder:FormBuilder )
  {
    this.getLocation();
    console.log("RegisterComponent -> onSubmit -> locatdata", this.locatdata)


  }
// convenience getter for easy access to form fields
get f() { return this.register.controls; }

  ngOnInit(): void {
   
    this.register = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     acceptTerms: [false, Validators.requiredTrue]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  });


  }

  getLocation() {
    this.LocationService.getLocation().subscribe((res: any) => {
      this.locatdata = res;

      console.log("HeaderComponent -> res", res)
    });
  }

  onSubmit() {
    this.submitted = true;

    console.log("RegisterComponent -> onSubmit -> register", this.register)

    console.log("RegisterComponent -> onSubmit -> locatdata", this.locatdata)
    if (this.register.invalid) {
      return;
  }
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


 

}

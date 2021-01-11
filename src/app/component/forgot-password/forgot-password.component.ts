import { Router } from '@angular/router';
import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
  

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit  {
  variable: boolean = false;

  ticks: number=0;
  private subscription: Subscription;
  hidden:boolean=true;
  hide: boolean=false;
  
  forgotPassword: FormGroup
  mobile: any;

  constructor(private RegistrationService:RegistrationService,private _snackBar: MatSnackBar,
    private Router:Router, public fb :FormBuilder) { 
    }

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
  
    this.forgotPassword = this.fb.group({
      forgot: [null,Validators.required]
    })

    this.timer();
  }

  timer(){
    let timer = TimerObservable.create(120, 800);
    this.subscription = timer.subscribe(t => {
      this.ticks = t;
      if(t>119){
        this.hide = true;  
        this.subscription.unsubscribe();
      }
      
    });
  }

  resendOTP(){
    let data ={
      email: this.forgotPassword.controls.forgot.value
    }
    console.log("file: forgot-password.component.ts ~ line 61 ~ ForgotPasswordComponent ~ resendOTP ~ data", data)
    this.RegistrationService.forOtp(data).then((reData)=>{
    console.log("file: forgot-password.component.ts ~ line 63 ~ ForgotPasswordComponent ~ this.RegistrationService.forOtp ~ reData", reData)
  
      this._snackBar.open(reData?.data?.message, '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['redMatch']
      });
    }).catch((err)=>{
        this._snackBar.open(err?.error?.message, '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ['redNoMatch']
        });
    })
    this.hide=false;
    this.timer();
  }

sub(){

  let data ={
    email: this.forgotPassword.controls.forgot.value
  }
  console.log("file: forgot-password.component.ts ~ line 88 ~ ForgotPasswordComponent ~ sub ~ data", data)

  this.RegistrationService.forOtp(data).then((reData)=>{
  console.log("file: forgot-password.component.ts ~ line 88 ~ ForgotPasswordComponent ~ this.RegistrationService.forOtp ~ reData", reData)

    this._snackBar.open(reData?.data?.message, '', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['redMatch']
    });
    this.Router.navigate(['verify_otp_reg/'+data.email])
  }).catch((err)=>{
      this._snackBar.open(err?.error?.message, '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['redNoMatch']
      });
    


  })
 
}


}

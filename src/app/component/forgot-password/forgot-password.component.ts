import { Router } from '@angular/router';
import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private RegistrationService:RegistrationService,private _snackBar: MatSnackBar,
    private Router:Router) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
  }
sub(val){

 


  this.RegistrationService.forOtp({email:val.value}).then((reData)=>{
    console.log("ForgotPasswordComponent -> sub -> reData", reData)

    this._snackBar.open(reData?.data?.message, '', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['redMatch']
    });
this.Router.navigate(['verify_otp_reg/'+val.value])
  }).catch((err)=>{
  console.log("ForgotPasswordComponent -> sub -> err", err)
    


    this._snackBar.open(err?.error?.message, '', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['redNoMatch']
    });
  


  })
 
}
}

import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cng-password',
  templateUrl: './cng-password.component.html',
  styleUrls: ['./cng-password.component.scss']
})
export class CngPasswordComponent implements OnInit {

 
  msgs: any = [];
  msgsWarn: any = [];
  otp: number;
  error: any = false;
  mobileNumber: any;

  constructor(public activateRouter: ActivatedRoute,
    public messageService: MessageService,
    public userService: UserService,
    public router: Router,
    public loginService: LoginService,
    public RegistrationService: RegistrationService,
    private _snackBar: MatSnackBar,) { }
    horizontalPosition: MatSnackBarHorizontalPosition = 'end';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit() {
    this.activateRouter.paramMap.subscribe((param: any) => {
      this.mobileNumber = param.params.data;
    })

  }

  onVerify() {
    if (this.otp.toString().trim().length === 4) {
      this.error = false;
      this.RegistrationService.CheckOtp({ email: this.mobileNumber, otp: this.otp })
        .then(resData => {
          if (resData.code == 200) {

            this._snackBar.open(resData?.data, '', {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              panelClass: ['redMatch']
            });


          }
        }).catch(error => {
          console.log("VerifyOtpComponent -> onVerify -> error", error)
          this._snackBar.open(error?.error?.message, '', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            panelClass: ['redNoMatch']
          });
        })
    }
  }

  validate() {
    if (this.otp.toString().trim().length === 4) {
      this.error = false;
    } else {
      this.error = 'Please enter correct otp'
    }
  }










}

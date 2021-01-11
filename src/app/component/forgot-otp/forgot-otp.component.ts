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
  selector: 'app-forgot-otp',
  templateUrl: './forgot-otp.component.html',
  styleUrls: ['./forgot-otp.component.scss']
})
export class ForgotOtpComponent implements OnInit {

  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 120,
    limit: 10
  }


  msgs: any = [];
  msgsWarn: any = [];
  otp: number;
  error: any = false;
  mobileNumber: any;
  OTPLen: any;

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


  public onInputChange(e) {
    console.log("file: forgot-otp.component.ts ~ line 51 ~ ForgotOtpComponent ~ onInputChange ~ e", e)
    this.otp = e;
    this.OTPLen =e
    console.log("file: verify-otp.component.ts ~ line 52 ~ VerifyOtpComponent ~ onInputChange ~ this.OTPLen", this.OTPLen)
    if(e.length == this.settings.length) {
      console.log("file: verify-otp.component.ts ~ line 56 ~ VerifyOtpComponent ~ onInputChange ~ e.length", e.length)
      // e will emit values entered as otp and,
      console.log('otp is', e);
    }else if(e == -1) {
      // if e == -1, timer has stopped
      console.log(e, 'resend button enables');

    }else if(e == -2) {
      // e == -2, button click handle
      console.log('resend otp');
      this.loginService.resendOtp({mobile:this.mobileNumber }).then(resend => {
        console.log("file: verify-otp.component.ts ~ line 99 ~ VerifyOtpComponent ~ this.loginService.resendOtp ~ resend", resend)
        if(resend.code == 200){
          this.showToast('success', 'OTP', resend.data.messgae);
          this.userService.addUserInfo(resend.data);
          this.router.navigate(["/verify_otp_reg/", this.mobileNumber ])
        }
      }).catch(error => {
          console.log("file: verify-otp.component.ts ~ line 68 ~ VerifyOtpComponent ~ this.loginService.resendOtp ~ error", error)
          if (error && error.error.code == 301) {
            this.showToast('error', 'OTP', error.error.message)
          } else {
            this.showToast('error', 'OTP', error.message)
          }
      })
    }
  }

  onVerify() {
    if (this.OTPLen.length === this.settings.length) {
      this.error = false;
      this.RegistrationService.CheckOtp({ email: this.mobileNumber, otp: this.otp })
        .then(resData => {
        console.log("file: forgot-otp.component.ts ~ line 89 ~ ForgotOtpComponent ~ onVerify ~ resData", resData)
          if (resData.code == 200) {

            this._snackBar.open(resData?.data, '', {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              panelClass: ['redMatch']
            });

            this.router.navigate(['PassCgn/'+this.mobileNumber+'/'+this.otp])
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
    if (this.otp === this.settings.length) {
      this.error = false;
    } else {
      this.error = 'Please enter correct otp'
    }
  }


  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ key: 'otperror', severity: type, summary: messageType, detail: message });
    });
  }







}

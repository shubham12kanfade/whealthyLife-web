import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 120,
    limit: 10
  }

 
  mobileNumber: any;
  msgs: any = [];
  msgsWarn: any = [];
  otp: number;
  error: any = false;
  timerOn = true;
  OTPLen: any;

  constructor(public activateRouter: ActivatedRoute,
    public messageService: MessageService,
    public userService: UserService,
    public router: Router,
    public loginService: LoginService) { }


  ngOnInit(): void {

    this.activateRouter.paramMap.subscribe((param: any) => {
      console.log("VerifyOtpComponent -> ngOnInit -> param", param.params.mobile);
      // this.show('success', 'You have successfully registered with Whealthy life');
      this.showWarn('warn', 'We have sent an otp on your registered Mobile Number, please verify .');
      setTimeout(() => {
        this.hideMsg();
      }, 3000);
      this.mobileNumber = param.params.mobile;
    })
  }

  public onInputChange(e) {
    console.log("file: verify-otp.component.ts ~ line 50 ~ VerifyOtpComponent ~ onInputChange ~ e", e)
    console.log(e);
    this.otp = e;
    this.OTPLen =e
    console.log("file: verify-otp.component.ts ~ line 52 ~ VerifyOtpComponent ~ onInputChange ~ this.otp", this.otp)
    if(e.length == this.settings.length) {
      console.log("file: verify-otp.component.ts ~ line 55 ~ VerifyOtpComponent ~ onInputChange ~ e.length", e.length)
      // e will emit values entered as otp and,
      console.log('otp is', e);
    }else if(e == -1) {
      // if e == -1, timer has stopped
      console.log(e, 'resend button enables');

    }else if(e == -2) {
      // e == -2, button click handle
      console.log('resend otp');
      this.loginService.resendOtp({mobile: this.mobileNumber}).then(resend => {
        console.log("file: verify-otp.component.ts ~ line 99 ~ VerifyOtpComponent ~ this.loginService.resendOtp ~ resend", resend)
        if(resend.code == 200){
          this.showToast('success', 'OTP', resend.data.messgae);
          this.userService.addUserInfo(resend.data);
          this.router.navigate(["/verify_otp", this.mobileNumber])
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
    if (this.OTPLen.length == this.settings.length) {
      this.error = false;
      this.loginService.verifyOtp({ mobile: this.mobileNumber, otp: this.otp })
        .then(resData => {
          if (resData.code == 200) {
            this.showToast('success', 'OTP', 'Mobile number verified successfully');
            this.userService.addUserInfo(resData.data);
            if(resData.data.designation == "Doctor")
            {
              this.router.navigate(["/Doctor"])
            }else{
              this.router.navigate(['/']);
            }
           
          }
        }).catch(error => {
          console.log("VerifyOtpComponent -> onVerify -> error", error)
          if (error && error.error.code == 301) {
            this.showToast('error', 'OTP', error.error.message)
          } else {
            this.showToast('error', 'OTP', error.message)
          }
        })
    } else {
      this.error = 'Please enter correct otp'
    }
  }

  validate() {
    if (this.otp === this.settings.length) {
      this.error = false;
    } else {
      this.error = 'Please enter correct otp'
    }
  }

  


  show(type, msg) {
    this.msgs.push({ severity: type, detail: msg });
  }

  showWarn(type, msg) {
    this.msgsWarn.push({ severity: type, detail: msg });
  }

  hideMsg() {
    this.msgs.length = 0;
  }

  hideMsgWarn() {
    this.msgsWarn.length = 0;
  }


  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ key: 'otperror', severity: type, summary: messageType, detail: message });
    });
  }

}

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
  mobileNumber: any;
  msgs: any = [];
  msgsWarn: any = [];
  otp: number;
  error: any = false;

  constructor(public activateRouter: ActivatedRoute,
    public messageService: MessageService,
    public userService: UserService,
    public router: Router,
    public loginService: LoginService) { }

  ngOnInit(): void {

    this.activateRouter.paramMap.subscribe((param: any) => {
      console.log("VerifyOtpComponent -> ngOnInit -> param", param.params.mobile);
      this.show('success', 'You have successfully registered with wealthy life');
      this.showWarn('warn', 'We have sent an email on your registered email, please verify your mail.');
      setTimeout(() => {
        this.hideMsg();
      }, 3000);
      this.mobileNumber = param.params.mobile;
    })
  }

  onVerify() {
    if (this.otp.toString().trim().length === 4) {
      this.error = false;
      this.loginService.verifyOtp({ mobile: this.mobileNumber, otp: this.otp })
        .then(resData => {
          if (resData.code == 200) {
            this.showToast('success', 'OTP', 'Mobile number verified successfully');
            this.userService.addUserInfo(resData.data);
            this.router.navigate(['/']);
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
    if (this.otp.toString().trim().length === 4) {
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

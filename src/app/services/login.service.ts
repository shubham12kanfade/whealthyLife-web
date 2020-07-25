import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public ApiCallService: ApiCallService) { }

  loginUser(data) {
    return this.ApiCallService.postData('authentication/login/', data);
  }
  loginSocial(data) {
    return this.ApiCallService.postData('authentication/login/with/social', data);
  }

  verifyOtp(data) {
    return this.ApiCallService.getData('authentication/verify/mobile/' + data.mobile + '/' + data.otp);
  }
}
  
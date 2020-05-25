import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public ApiCallService: ApiCallService) { }

  loginUser(data) {
    return this.ApiCallService.postData('api/v1/authentication/login/', data);
  }

  verifyOtp(data) {
    return this.ApiCallService.getData('api/v1/authentication/verify/mobile/' + data.mobile + '/' + data.otp);
  }
}
  
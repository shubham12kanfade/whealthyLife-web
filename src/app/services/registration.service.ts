import { ApiCallService } from './api/apicall.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public Ap:ApiCallService) { 

  }
  registarUser(data) {
    return this.Ap.postData('authentication/register', data);
  }
forOtp(data){
  return this.Ap.postData('authentication/forgot/password',data)
}
CheckOtp(data){
  return this.Ap.postData('authentication/verify/otp',data)
}
cgnPAss(data){
  return this.Ap.postData('authentication/update/password',data)
}

}

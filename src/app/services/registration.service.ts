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
}

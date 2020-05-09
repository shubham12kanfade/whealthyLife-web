import { ApiCallService } from './api/apicall.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public Ap:ApiCallService) { 

  }
  registarUser(data) {
    return this.Ap.postData('api/v1/authentication/register/', data);
  }
}

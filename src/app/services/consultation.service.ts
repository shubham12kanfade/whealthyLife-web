import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(public api: ApiCallService) {
  }


  getDoctorlist() {
    return this.api.getData('doctor/list/for/consultation');
  }

  endSession() {
    return this.api.getData('conference/end/session',);
  }

  createSession(data) {
    return this.api.postData('conference', data, true);
  }


  getDoctorSession() {
    return this.api.getData('conference/doctor');
  }

  getPatientSession() {
    return this.api.getData('conference/patient');
  }
}

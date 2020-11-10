import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(public api: ApiCallService) {
  }

getDoctorUsingId(id){
  
  return this.api.getData('doctor/specialization/by/specialization/'+id);
}
getDoctFree(){
  return this.api.getData('doctor/')
}

  getDoctorlist() {
    return this.api.getData('doctor/list/for/consultation');
  }

  endSession(data) {
    return this.api.postData('conference/end/session',data);
  }

  createSession(data) {
    return this.api.postData('conference/', data, true);
  }


  getDoctorSession() {
    return this.api.getData('conference/doctor');
  }

  getPatientSession() {
    return this.api.getData('conference/patient');
  }
}

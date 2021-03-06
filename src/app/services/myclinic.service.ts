import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class MyclinicService {

  constructor(public api: ApiCallService) { }


  getClinic(id){
    return this.api.getData('clinic/by/'+id);
  }

  postAddClinicLocation(data) {
    return this.api.postData('clinic/location/', data);
  }

  addClinic(data){
    return this.api.postData('clinic/',data);
  }

  getClinicLocation(id) {
    return this.api.getData('clinic/location/by/clinicId/'+id);
  }

}

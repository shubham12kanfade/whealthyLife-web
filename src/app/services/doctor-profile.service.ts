import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {

  constructor(public ApiCallService:ApiCallService) { }


getDoctorProfile(data){
 
    return this.ApiCallService.getData('doctor/profile/details/',data);
 
}

}

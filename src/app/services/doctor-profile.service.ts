import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService {

  constructor(public ApiCallService:ApiCallService) { }


getDoctorProfile(data){
console.log("DoctorProfileService -> getDoctorProfile -> data", data)
 
    return this.ApiCallService.postData('doctor/profile/details/',data);
 
}

getSlot(data){
    
return this.ApiCallService.getData('slots/by/'+data)
}

}

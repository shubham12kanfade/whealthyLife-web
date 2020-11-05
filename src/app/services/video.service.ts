import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(public ApiCallService :ApiCallService) { }

  postAppointmentSlot(data) {
    console.log("DoctorProfileService -> getDoctorProfile -> data", data)
    return this.ApiCallService.postData('appoinment/add/', data);
  }

}

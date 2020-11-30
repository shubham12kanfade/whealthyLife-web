import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private ApiCallService:ApiCallService) { }

addBooking(data){
  return this.ApiCallService.postData('appoinment/add', data)
}

getAllTestApi(city){
  return this.ApiCallService.getData('tests/labTest/by/'+city)
}
getAllLabsCity(){
  return this.ApiCallService.getData('lab/get/cities')
}
}

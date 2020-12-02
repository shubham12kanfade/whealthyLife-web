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
getBookingPageRev(){
  return this.ApiCallService.getData('customer/review/get/all/best')
}
searchAllProduct(city){
  return this.ApiCallService.getData('tests/labTest/by/'+city)
}

}

import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingPageService {

  constructor(public apiCallService:ApiCallService) {
   }
   PopularSearches()
   {
    return this.apiCallService.getData('specialisations/four')
   }

  getCarousel(data){
    return this.apiCallService.getData('customer/review/get/by/type/'+data)
  }
getDegree(id){
  return this.apiCallService.getData('doctor/qualification/by/'+id)
}
getDoctorSlotId(id){
  return this.apiCallService.getData('slots/by/'+id)
}

}

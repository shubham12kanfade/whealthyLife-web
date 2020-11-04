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
getDoctorSlotId(id,data){
  console.log("BookingPageService -> getDoctorSlotId -> data", data)
  return this.apiCallService.postData('slots/by/'+id,data)
}
getDroctorAward(id){
  return this.apiCallService.getData('doctor/award/by/'+id) 

}


getDroctorMember(id){
  return this.apiCallService.getData('doctor/membership/by/'+id) 

}
getQa(id){
  return this.apiCallService.getData('QA/by/doctor/'+id)
}
getReview(id){
  return this.apiCallService.getData('customer/review/get/by/doctor/'+id)
}
getAvgStar(id){
  return this.apiCallService.getData('doctor/averageStars/by/'+id)
}
}
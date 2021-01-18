import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {
  constructor(private ApiCallService:ApiCallService) { }
getTreatmentsbyId(data){
return this.ApiCallService.getData('treatment/get/all/by/doctor/'+data)
}
getTreatmentUsingSpecializetion(specialization){
  return this.ApiCallService.getData('treatment/get/all/by/'+specialization)
}

getTreatmentUsingSpecializetionsID(specialization){
  return this.ApiCallService.postData('treatment/get/by/specializations', specialization)
}

// getDoctorTreatmentbyid(data){
//   return this.ApiCallService.postData('treatment/get/all',data)
// }
addDoctorspec(data){
  return this.ApiCallService.postData('doctor/specialization/add',data)

}

newaddspecialization(data){
  return this.ApiCallService.postData('specialization/add',data)
}

addDoctorTreatment(data){
  return this.ApiCallService.postData('doctor/treatments/add',data)
}

getDoctreatment(){
  return this.ApiCallService.getData('doctor/treatments/all')
}

getAllTreatment(){
  return this.ApiCallService.getData('treatment/get/all')
}

}

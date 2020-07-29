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
}

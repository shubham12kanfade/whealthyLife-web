import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardAnalyticsService {

  constructor(public api : ApiCallService) { }

  getdashboard(id){
    return this.api.getData('appoinment/by/money/'+id);
  }



}

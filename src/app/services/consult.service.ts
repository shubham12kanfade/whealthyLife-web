import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(private ApiCallService:ApiCallService) {

   }
   getOffers(){
     return this.ApiCallService.getData('top/offer/get/membership/offers')
       }
}

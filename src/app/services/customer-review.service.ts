import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerReviewService {

  constructor(public API: ApiCallService) { }

  getCustomer(){
    return this.API.getData('customer/review/get/all/best')
  }

  getFeaturedLab(){
    return this.API.getData('lab/get/featured')
  }

  getOffers(){
    return this.API.getData('top/offer/getAll')
  }

}

import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private ApiCallService:ApiCallService) { }
  getHelthCondtion(){
   return this.ApiCallService.getData('product/catagories/getAll')
  }

  getcategory(){
    return this.ApiCallService.getData('product/by/catagory')
  }
}

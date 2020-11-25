import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  checkPackage = new BehaviorSubject(null);
  constructor(private ApiCallService:ApiCallService) { }
  getHelthCondtion(){
   return this.ApiCallService.getData('product/catagories/getAll/by/HealthCare')
  }

  getcategory(){
    return this.ApiCallService.getData('product/catagories/getAll/by/Featured')
  }


  getproductsdetail(){
    return this.ApiCallService.getData('product/popular/product')
  }


  getusersays(){
    return this.ApiCallService.getData('customer/review/get/by/type/AppUsers')
  }
  PostPackageInCart(data){
    this.checkPackage.next(null);

    return this.ApiCallService.postData('userCart',data)
  }
 getPackageInCart(){
  return this.ApiCallService.getData('userCart/package/userId')
 }
 DelePackageInCart(id){
  this.checkPackage.next(null);
  return this.ApiCallService.deleteData('userCart/'+id)

 }
}

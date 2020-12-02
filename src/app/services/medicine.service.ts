import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {

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


    return this.ApiCallService.postData('userCart',data)
  }
 getPackageInCart(){
  return this.ApiCallService.getData('userCart/package/userId')

 }
 DelePackageInCart(id){

  return this.ApiCallService.deleteData('userCart/'+id)

 }
}

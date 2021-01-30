import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';


@Injectable({
  providedIn: 'root'
})
export class MemberShipService {

  constructor(public api: ApiCallService) { }

  getmembership(){
    return this.api.getData('membership/get/all')
  }  

  BuyMemberShip(docId,memberid,amount){
    return this.api.getData('payment/buy/'+ docId + '/' +memberid + '/' +amount)
  }

}

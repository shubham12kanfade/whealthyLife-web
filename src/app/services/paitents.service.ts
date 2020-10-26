import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaitentsService {

  constructor(public API :ApiCallService) {  }

  getAllPaitent(id) {
    return this.API.getData('appoinment/get/by/time');
  }

}

import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(public Api: ApiCallService) { }

  getSpecialization(){
    return this.Api.getData('country/specialisations/');
  }


}

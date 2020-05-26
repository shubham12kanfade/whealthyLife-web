import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public api: ApiCallService) {
  }

  getProfile() {
    return this.api.getData('doctor/profile/details');
  }

  updateUserprofile(data) {
    return this.api.putData('doctor/update/my/profile', data);
  }


  getCountry() {
    return this.api.getData('country');
  }

  getState(countryId) {
    return this.api.getData('country/' + countryId + '/state');
  }

  getCity(countryId, stateId) {
    return this.api.getData('country/' + countryId + '/state/' + stateId + '/city');
  }

  getTimeZone() {
    return this.api.getData('country/time/zhone');
  }

  getSpeciality() {
    return this.api.getData('country/specialisations');
  }

  getProfileCompletion() {
    return this.api.getData('doctor/profile/percentage');
  }

}

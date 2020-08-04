import { Injectable } from '@angular/core';
import { ApiCallService } from './api/apicall.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public api: ApiCallService) {
  }

  getProfile() {
    return this.api.getData('doctor/profile/details', true);
  }

  updateUserprofile(data) {
    return this.api.putData('doctor/update/my/profile', data);
  }

  addTimeSlot(data) {
    return this.api.postData('slots/', data);
  }

  getTimeSlot() {
    return this.api.getData('slot');
  }

  getTimeSlotByUserId(id) {
    return this.api.getData('slot/' + id);
  }

  getCountry() {
    return this.api.getData('country');
  }

  getState(countryId) {
    return this.api.getData('country/' + countryId + '/state');
  }

  getCity(stateId) {
    return this.api.getData('country/state/' + stateId + '/city');
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

  getDegree(){
    return this.api.getData('qualification/get/all')
  }
}

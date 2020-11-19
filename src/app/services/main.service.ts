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
    return this.api.getData('qualification/get/all');
  }

  getLabs(){
    return this.api.getData('lab/get/all');
  }

  getProfilevalidation(id){
    return this.api.postData('doctor/profile/validity/by/',id);
  }

  addDegree(data){
    return this.api.postData('qualification/add',data);
  }

  addDoctorDegree(data){
    return this.api.postData('doctor/qualification/add',data);
  }

  getDoctorEducation(){
    return this.api.getData('doctor/qualification/all');
  }

  getAllClinic(){
    return this.api.getData('clinic/all');
  }

  getAddressByClinic(id){
    return this.api.getData('clinic/location/by/clinicId/'+id);
    // http://whealthylife.in:3311/api/v1/clinic/location/by/clinicId/:clinicId
  }

  getAllLab(){
    return this.api.getData('lab/get/all');
  }





}

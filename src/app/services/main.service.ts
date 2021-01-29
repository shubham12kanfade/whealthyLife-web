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

  addTimeSlot(data) {
    return this.api.postData('slots/', data);
  }

  getTimeSlot() {
    return this.api.getData('slot');
  }

  addclinic(data){
    return this.api.postData('clinic/',data)
  }

  addlocation(data){
    return this.api.postData('clinic/location/add/web/location',data)
  }

  addTime(data){
    return this.api.postData('clinic/timings/web/doctors/timing',data)
  }

  addTimingVisit(data){
    return this.api.postData('clinic/members/',data)
  }

  getDOCClinic(data){
    return this.api.postData('clinic/timings/clinic/details/',data);
  }

  getTimeSlotByUserId(id) {
    return this.api.getData('slot/' + id);
  }

  getCountry() {
    return this.api.getData('country');
  }

  getCountryId(countryId){
    return this.api.getData('country/country/'+countryId)
  }

  getState(countryId) {
    return this.api.getData('country/' + countryId + '/state');
  }

  getStateById(stateId){
    return this.api.getData('country/state/'+stateId)
  }

  getCity(stateId) {
    return this.api.getData('country/state/' + stateId + '/city');
  }

  getCityId(cityId){
    return this.api.getData('country/city/'+cityId)
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

  deleteClinicById(id){
    return this.api.deleteData('clinic/delete/by/'+id)
  }

  deleteLocationById(id){
    return this.api.deleteData('clinic/location/delete/by/'+id)
  }

  deleteTimeById(id){
    return this.api.deleteData('clinic/timings/delete/by/'+id)
  }

  getAddressByClinic(id){
    return this.api.getData('clinic/location/by/clinicId/'+id);
    // http://whealthylife.in:3311/api/v1/clinic/location/by/clinicId/:clinicId
  }

  getAllLab(){
    return this.api.getData('lab/get/all');
  }

  getPackageByLab(){
    return this.api.getData('labs/packages/by/labId/:id');
  }

  getallPackage(){
    return this.api.getData('labs/packages/all');
  }
getAllDtailsLabs(id)
{
  return this.api.getData('labs/packages/by/packageId/'+id)
}

getCustReview(id){
  return this.api.getData('customer/review/get/by/lab/:id'+id);
}

getAllProfile(){
  return this.api.getData('profile/all');
}

getProfileById(id){
  return this.api.getData('profile/by/profileId/'+id)
}

getTestById(id){
  return this.api.getData('tests/by/labTest/'+id)
}

getmembership(){
  return this.api.getData('membership/get/all')
}

validateMorSlot(data){
  return this.api.postData('slots/validate/morningSlot',data)
}

validateAfterSlot(data){
  return this.api.postData('slots/validate/afternoonSlot',data)
}

validateEveSlot(data){
  return this.api.postData('slots/validate/eveningSlot',data)
}

validatenightSlot(data){
  return this.api.postData('slots/validate/nightSlot',data)
}


}

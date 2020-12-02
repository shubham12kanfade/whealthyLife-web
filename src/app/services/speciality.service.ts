import { ApiCallService } from "./api/apicall.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpecialityService {
  constructor(public Api: ApiCallService) {}

  getSpecialization() {
    return this.Api.getData("specialization/get/all/");
  }
  getSpecializationAll() {
    return this.Api.getData("specialization/get/all");
  }

  getTestMaster() {
    return this.Api.getData("tests/all");
  }
  getTopSpec() {
    return this.Api.getData("specialization/get/top/counts");
  }
  getCount(){
    return this.Api.getData("doctor/all/counts")
  }
  
}

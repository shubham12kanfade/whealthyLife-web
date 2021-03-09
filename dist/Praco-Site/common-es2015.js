(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/booking-page.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/booking-page.service.ts ***!
  \**************************************************/
/*! exports provided: BookingPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageService", function() { return BookingPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class BookingPageService {
    constructor(apiCallService) {
        this.apiCallService = apiCallService;
    }
    PopularSearches() {
        return this.apiCallService.getData('specialisations/four');
    }
    getCarousel(data) {
        return this.apiCallService.getData('customer/review/get/by/type/' + data);
    }
    getDegree(id) {
        return this.apiCallService.getData('doctor/qualification/by/' + id);
    }
    getDoctorSlotId(id, data) {
        console.log("BookingPageService -> getDoctorSlotId -> data", data);
        return this.apiCallService.postData('slots/by/' + id, data);
    }
    getDoctorSlotId1(id, data) {
        console.log("BookingPageService -> getDoctorSlotId -> data", data);
        const fdggd = data._i;
        console.log("BookingPageService -> getDoctorSlotId1 -> fdggd ", fdggd);
        return this.apiCallService.postData('slots/by/' + id, data._i);
    }
    getDroctorAward(id) {
        return this.apiCallService.getData('doctor/award/by/' + id);
    }
    getDroctorMember(id) {
        return this.apiCallService.getData('doctor/membership/by/' + id);
    }
    getQa(id) {
        return this.apiCallService.getData('QA/by/doctor/' + id);
    }
    getReview(id) {
        return this.apiCallService.getData('customer/review/get/by/doctor/' + id);
    }
    getAvgStar(id) {
        return this.apiCallService.getData('doctor/averageStars/by/' + id);
    }
    getHf(id) {
        return this.apiCallService.getData('HF/HealthFeeds/by/' + id);
    }
}
BookingPageService.ɵfac = function BookingPageService_Factory(t) { return new (t || BookingPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
BookingPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingPageService, factory: BookingPageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/consultation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/consultation.service.ts ***!
  \**************************************************/
/*! exports provided: ConsultationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultationService", function() { return ConsultationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class ConsultationService {
    constructor(api) {
        this.api = api;
    }
    getDoctorUsingId(id) {
        return this.api.getData('doctor/specialization/by/specialization/' + id);
    }
    getDoctFree() {
        return this.api.getData('doctor/');
    }
    getDoctorlist() {
        return this.api.getData('doctor/list/for/consultation');
    }
    endSession(data) {
        return this.api.postData('conference/end/session', data);
    }
    createSession(data) {
        return this.api.postData('conference/', data, true);
    }
    getDoctorSession() {
        return this.api.getData('conference/doctor');
    }
    getPatientSession() {
        return this.api.getData('conference/patient');
    }
}
ConsultationService.ɵfac = function ConsultationService_Factory(t) { return new (t || ConsultationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
ConsultationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConsultationService, factory: ConsultationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/doctor-profile.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/doctor-profile.service.ts ***!
  \****************************************************/
/*! exports provided: DoctorProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProfileService", function() { return DoctorProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class DoctorProfileService {
    constructor(ApiCallService) {
        this.ApiCallService = ApiCallService;
    }
    getDoctorProfile(data) {
        console.log("DoctorProfileService -> getDoctorProfile -> data", data);
        return this.ApiCallService.postData('doctor/profile/details', data);
    }
    getSlot(data) {
        return this.ApiCallService.getData('slots/by/' + data);
    }
    getDoctorProfileid(data) {
        console.log("DoctorProfileService -> getDoctorProfile -> data" + data);
        return this.ApiCallService.getData('doctor/' + data);
    }
    getDocSlots(id) {
        return this.ApiCallService.getData('slots/' + id);
    }
}
DoctorProfileService.ɵfac = function DoctorProfileService_Factory(t) { return new (t || DoctorProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
DoctorProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DoctorProfileService, factory: DoctorProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");





class LocationService {
    constructor(http, ApiCall) {
        this.http = http;
        this.ApiCall = ApiCall;
    }
    getLocation() {
        // return this.http.get('http://ip-api.com/json/')
    }
    getCountry() {
        return this.ApiCall.getData('country/');
    }
    getState(countryId) {
        return this.ApiCall.getData('country/' + countryId + '/state/');
    }
    getCity(stateId) {
        console.log("LocationService -> getCity -> stateId", stateId);
        return this.ApiCall.getData('country/state/22/city/');
    }
    getPosition() {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
            navigator.geolocation.watchPosition((pos) => {
                observer.next(pos);
            }),
                () => {
                    console.log('Position is not available');
                },
                {
                    enableHighAccuracy: true
                };
        });
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"])); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class MainService {
    constructor(api) {
        this.api = api;
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
    addclinic(data) {
        return this.api.postData('clinic/', data);
    }
    addlocation(data) {
        return this.api.postData('clinic/location/add/web/location', data);
    }
    addTime(data) {
        return this.api.postData('clinic/timings/web/doctors/timing', data);
    }
    addTimingVisit(data) {
        return this.api.postData('clinic/members/', data);
    }
    getDOCClinic(data) {
        return this.api.postData('clinic/timings/clinic/details/', data);
    }
    getTimeSlotByUserId(id) {
        return this.api.getData('slot/' + id);
    }
    getCountry() {
        return this.api.getData('country');
    }
    getCountryId(countryId) {
        return this.api.getData('country/country/' + countryId);
    }
    getState(countryId) {
        return this.api.getData('country/' + countryId + '/state');
    }
    getStateById(stateId) {
        return this.api.getData('country/state/' + stateId);
    }
    getCity(stateId) {
        return this.api.getData('country/state/' + stateId + '/city');
    }
    getCityId(cityId) {
        return this.api.getData('country/city/' + cityId);
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
    getDegree() {
        return this.api.getData('qualification/get/all');
    }
    getLabs() {
        return this.api.getData('lab/get/all');
    }
    getProfilevalidation(id) {
        return this.api.postData('doctor/profile/validity/by/', id);
    }
    addDegree(data) {
        return this.api.postData('qualification/add', data);
    }
    addDoctorDegree(data) {
        return this.api.postData('doctor/qualification/add', data);
    }
    getDoctorEducation() {
        return this.api.getData('doctor/qualification/all');
    }
    getAllClinic() {
        return this.api.getData('clinic/all');
    }
    deleteClinicById(id) {
        return this.api.deleteData('clinic/delete/by/' + id);
    }
    deleteLocationById(id) {
        return this.api.deleteData('clinic/location/delete/by/' + id);
    }
    deleteTimeById(id) {
        return this.api.deleteData('clinic/timings/delete/by/' + id);
    }
    getAddressByClinic(id) {
        return this.api.getData('clinic/location/by/clinicId/' + id);
        // http://whealthylife.in:3311/api/v1/clinic/location/by/clinicId/:clinicId
    }
    getAllLab() {
        return this.api.getData('lab/get/all');
    }
    getPackageByLab() {
        return this.api.getData('labs/packages/by/labId/:id');
    }
    getallPackage() {
        return this.api.getData('labs/packages/all');
    }
    getAllDtailsLabs(id) {
        return this.api.getData('labs/packages/by/packageId/' + id);
    }
    getCustReview(id) {
        return this.api.getData('customer/review/get/by/lab/:id' + id);
    }
    getAllProfile() {
        return this.api.getData('profile/all');
    }
    getProfileById(id) {
        return this.api.getData('profile/by/profileId/' + id);
    }
    getTestById(id) {
        return this.api.getData('tests/by/labTest/' + id);
    }
    validateMorSlot(data) {
        return this.api.postData('slots/validate/morningSlot', data);
    }
    validateAfterSlot(data) {
        return this.api.postData('slots/validate/afternoonSlot', data);
    }
    validateEveSlot(data) {
        return this.api.postData('slots/validate/eveningSlot', data);
    }
    validatenightSlot(data) {
        return this.api.postData('slots/validate/nightSlot', data);
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/speciality.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/speciality.service.ts ***!
  \************************************************/
/*! exports provided: SpecialityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialityService", function() { return SpecialityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class SpecialityService {
    constructor(Api) {
        this.Api = Api;
    }
    getSpecialization() {
        return this.Api.getData("specialization/get/all/");
    }
    getSpecializationAll() {
        return this.Api.getData("specialization/get/all");
    }
    addSpecialization(data) {
        return this.Api.postData('doctor/specialization/add', data);
    }
    getTestMaster() {
        return this.Api.getData("tests/all");
    }
    getTopSpec() {
        return this.Api.getData("specialization/get/top/counts");
    }
    getCount() {
        return this.Api.getData("doctor/all/counts");
    }
    getDoctorSpecility() {
        return this.Api.getData('doctor/specialization/all');
    }
}
SpecialityService.ɵfac = function SpecialityService_Factory(t) { return new (t || SpecialityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
SpecialityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpecialityService, factory: SpecialityService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/treatments.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/treatments.service.ts ***!
  \************************************************/
/*! exports provided: TreatmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsService", function() { return TreatmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class TreatmentsService {
    constructor(ApiCallService) {
        this.ApiCallService = ApiCallService;
    }
    getTreatmentsbyId(data) {
        return this.ApiCallService.getData('treatment/get/all/by/doctor/' + data);
    }
    getTreatmentUsingSpecializetion(specialization) {
        return this.ApiCallService.getData('treatment/get/all/by/' + specialization);
    }
    getTreatmentUsingSpecializetionsID(specialization) {
        return this.ApiCallService.postData('treatment/get/by/specializations', specialization);
    }
    // getDoctorTreatmentbyid(data){
    //   return this.ApiCallService.postData('treatment/get/all',data)
    // }
    addDoctorspec(data) {
        return this.ApiCallService.postData('doctor/specialization/add', data);
    }
    newaddspecialization(data) {
        return this.ApiCallService.postData('specialization/add', data);
    }
    addDoctorTreatment(data) {
        return this.ApiCallService.postData('doctor/treatments/add', data);
    }
    getDoctreatment() {
        return this.ApiCallService.getData('doctor/treatments/all');
    }
    getAllTreatment() {
        return this.ApiCallService.getData('treatment/get/all');
    }
}
TreatmentsService.ɵfac = function TreatmentsService_Factory(t) { return new (t || TreatmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
TreatmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreatmentsService, factory: TreatmentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreatmentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
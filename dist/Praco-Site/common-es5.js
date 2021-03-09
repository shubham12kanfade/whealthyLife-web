function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/booking-page.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/booking-page.service.ts ***!
    \**************************************************/

  /*! exports provided: BookingPageService */

  /***/
  function srcAppServicesBookingPageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageService", function () {
      return BookingPageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var BookingPageService =
    /*#__PURE__*/
    function () {
      function BookingPageService(apiCallService) {
        _classCallCheck(this, BookingPageService);

        this.apiCallService = apiCallService;
      }

      _createClass(BookingPageService, [{
        key: "PopularSearches",
        value: function PopularSearches() {
          return this.apiCallService.getData('specialisations/four');
        }
      }, {
        key: "getCarousel",
        value: function getCarousel(data) {
          return this.apiCallService.getData('customer/review/get/by/type/' + data);
        }
      }, {
        key: "getDegree",
        value: function getDegree(id) {
          return this.apiCallService.getData('doctor/qualification/by/' + id);
        }
      }, {
        key: "getDoctorSlotId",
        value: function getDoctorSlotId(id, data) {
          console.log("BookingPageService -> getDoctorSlotId -> data", data);
          return this.apiCallService.postData('slots/by/' + id, data);
        }
      }, {
        key: "getDoctorSlotId1",
        value: function getDoctorSlotId1(id, data) {
          console.log("BookingPageService -> getDoctorSlotId -> data", data);
          var fdggd = data._i;
          console.log("BookingPageService -> getDoctorSlotId1 -> fdggd ", fdggd);
          return this.apiCallService.postData('slots/by/' + id, data._i);
        }
      }, {
        key: "getDroctorAward",
        value: function getDroctorAward(id) {
          return this.apiCallService.getData('doctor/award/by/' + id);
        }
      }, {
        key: "getDroctorMember",
        value: function getDroctorMember(id) {
          return this.apiCallService.getData('doctor/membership/by/' + id);
        }
      }, {
        key: "getQa",
        value: function getQa(id) {
          return this.apiCallService.getData('QA/by/doctor/' + id);
        }
      }, {
        key: "getReview",
        value: function getReview(id) {
          return this.apiCallService.getData('customer/review/get/by/doctor/' + id);
        }
      }, {
        key: "getAvgStar",
        value: function getAvgStar(id) {
          return this.apiCallService.getData('doctor/averageStars/by/' + id);
        }
      }, {
        key: "getHf",
        value: function getHf(id) {
          return this.apiCallService.getData('HF/HealthFeeds/by/' + id);
        }
      }]);

      return BookingPageService;
    }();

    BookingPageService.ɵfac = function BookingPageService_Factory(t) {
      return new (t || BookingPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    BookingPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookingPageService,
      factory: BookingPageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/consultation.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/consultation.service.ts ***!
    \**************************************************/

  /*! exports provided: ConsultationService */

  /***/
  function srcAppServicesConsultationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultationService", function () {
      return ConsultationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var ConsultationService =
    /*#__PURE__*/
    function () {
      function ConsultationService(api) {
        _classCallCheck(this, ConsultationService);

        this.api = api;
      }

      _createClass(ConsultationService, [{
        key: "getDoctorUsingId",
        value: function getDoctorUsingId(id) {
          return this.api.getData('doctor/specialization/by/specialization/' + id);
        }
      }, {
        key: "getDoctFree",
        value: function getDoctFree() {
          return this.api.getData('doctor/');
        }
      }, {
        key: "getDoctorlist",
        value: function getDoctorlist() {
          return this.api.getData('doctor/list/for/consultation');
        }
      }, {
        key: "endSession",
        value: function endSession(data) {
          return this.api.postData('conference/end/session', data);
        }
      }, {
        key: "createSession",
        value: function createSession(data) {
          return this.api.postData('conference/', data, true);
        }
      }, {
        key: "getDoctorSession",
        value: function getDoctorSession() {
          return this.api.getData('conference/doctor');
        }
      }, {
        key: "getPatientSession",
        value: function getPatientSession() {
          return this.api.getData('conference/patient');
        }
      }]);

      return ConsultationService;
    }();

    ConsultationService.ɵfac = function ConsultationService_Factory(t) {
      return new (t || ConsultationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    ConsultationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConsultationService,
      factory: ConsultationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/doctor-profile.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/doctor-profile.service.ts ***!
    \****************************************************/

  /*! exports provided: DoctorProfileService */

  /***/
  function srcAppServicesDoctorProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfileService", function () {
      return DoctorProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var DoctorProfileService =
    /*#__PURE__*/
    function () {
      function DoctorProfileService(ApiCallService) {
        _classCallCheck(this, DoctorProfileService);

        this.ApiCallService = ApiCallService;
      }

      _createClass(DoctorProfileService, [{
        key: "getDoctorProfile",
        value: function getDoctorProfile(data) {
          console.log("DoctorProfileService -> getDoctorProfile -> data", data);
          return this.ApiCallService.postData('doctor/profile/details', data);
        }
      }, {
        key: "getSlot",
        value: function getSlot(data) {
          return this.ApiCallService.getData('slots/by/' + data);
        }
      }, {
        key: "getDoctorProfileid",
        value: function getDoctorProfileid(data) {
          console.log("DoctorProfileService -> getDoctorProfile -> data" + data);
          return this.ApiCallService.getData('doctor/' + data);
        }
      }, {
        key: "getDocSlots",
        value: function getDocSlots(id) {
          return this.ApiCallService.getData('slots/' + id);
        }
      }]);

      return DoctorProfileService;
    }();

    DoctorProfileService.ɵfac = function DoctorProfileService_Factory(t) {
      return new (t || DoctorProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    DoctorProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DoctorProfileService,
      factory: DoctorProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/location.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/location.service.ts ***!
    \**********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var LocationService =
    /*#__PURE__*/
    function () {
      function LocationService(http, ApiCall) {
        _classCallCheck(this, LocationService);

        this.http = http;
        this.ApiCall = ApiCall;
      }

      _createClass(LocationService, [{
        key: "getLocation",
        value: function getLocation() {// return this.http.get('http://ip-api.com/json/')
        }
      }, {
        key: "getCountry",
        value: function getCountry() {
          return this.ApiCall.getData('country/');
        }
      }, {
        key: "getState",
        value: function getState(countryId) {
          return this.ApiCall.getData('country/' + countryId + '/state/');
        }
      }, {
        key: "getCity",
        value: function getCity(stateId) {
          console.log("LocationService -> getCity -> stateId", stateId);
          return this.ApiCall.getData('country/state/22/city/');
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            navigator.geolocation.watchPosition(function (pos) {
              observer.next(pos);
            }), function () {
              console.log('Position is not available');
            }, {
              enableHighAccuracy: true
            };
          });
        }
      }]);

      return LocationService;
    }();

    LocationService.ɵfac = function LocationService_Factory(t) {
      return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"]));
    };

    LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocationService,
      factory: LocationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/main.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/main.service.ts ***!
    \******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var MainService =
    /*#__PURE__*/
    function () {
      function MainService(api) {
        _classCallCheck(this, MainService);

        this.api = api;
      }

      _createClass(MainService, [{
        key: "getProfile",
        value: function getProfile() {
          return this.api.getData('doctor/profile/details');
        }
      }, {
        key: "updateUserprofile",
        value: function updateUserprofile(data) {
          return this.api.putData('doctor/update/my/profile', data);
        }
      }, {
        key: "addTimeSlot",
        value: function addTimeSlot(data) {
          return this.api.postData('slots/', data);
        }
      }, {
        key: "getTimeSlot",
        value: function getTimeSlot() {
          return this.api.getData('slot');
        }
      }, {
        key: "addclinic",
        value: function addclinic(data) {
          return this.api.postData('clinic/', data);
        }
      }, {
        key: "addlocation",
        value: function addlocation(data) {
          return this.api.postData('clinic/location/add/web/location', data);
        }
      }, {
        key: "addTime",
        value: function addTime(data) {
          return this.api.postData('clinic/timings/web/doctors/timing', data);
        }
      }, {
        key: "addTimingVisit",
        value: function addTimingVisit(data) {
          return this.api.postData('clinic/members/', data);
        }
      }, {
        key: "getDOCClinic",
        value: function getDOCClinic(data) {
          return this.api.postData('clinic/timings/clinic/details/', data);
        }
      }, {
        key: "getTimeSlotByUserId",
        value: function getTimeSlotByUserId(id) {
          return this.api.getData('slot/' + id);
        }
      }, {
        key: "getCountry",
        value: function getCountry() {
          return this.api.getData('country');
        }
      }, {
        key: "getCountryId",
        value: function getCountryId(countryId) {
          return this.api.getData('country/country/' + countryId);
        }
      }, {
        key: "getState",
        value: function getState(countryId) {
          return this.api.getData('country/' + countryId + '/state');
        }
      }, {
        key: "getStateById",
        value: function getStateById(stateId) {
          return this.api.getData('country/state/' + stateId);
        }
      }, {
        key: "getCity",
        value: function getCity(stateId) {
          return this.api.getData('country/state/' + stateId + '/city');
        }
      }, {
        key: "getCityId",
        value: function getCityId(cityId) {
          return this.api.getData('country/city/' + cityId);
        }
      }, {
        key: "getTimeZone",
        value: function getTimeZone() {
          return this.api.getData('country/time/zhone');
        }
      }, {
        key: "getSpeciality",
        value: function getSpeciality() {
          return this.api.getData('country/specialisations');
        }
      }, {
        key: "getProfileCompletion",
        value: function getProfileCompletion() {
          return this.api.getData('doctor/profile/percentage');
        }
      }, {
        key: "getDegree",
        value: function getDegree() {
          return this.api.getData('qualification/get/all');
        }
      }, {
        key: "getLabs",
        value: function getLabs() {
          return this.api.getData('lab/get/all');
        }
      }, {
        key: "getProfilevalidation",
        value: function getProfilevalidation(id) {
          return this.api.postData('doctor/profile/validity/by/', id);
        }
      }, {
        key: "addDegree",
        value: function addDegree(data) {
          return this.api.postData('qualification/add', data);
        }
      }, {
        key: "addDoctorDegree",
        value: function addDoctorDegree(data) {
          return this.api.postData('doctor/qualification/add', data);
        }
      }, {
        key: "getDoctorEducation",
        value: function getDoctorEducation() {
          return this.api.getData('doctor/qualification/all');
        }
      }, {
        key: "getAllClinic",
        value: function getAllClinic() {
          return this.api.getData('clinic/all');
        }
      }, {
        key: "deleteClinicById",
        value: function deleteClinicById(id) {
          return this.api.deleteData('clinic/delete/by/' + id);
        }
      }, {
        key: "deleteLocationById",
        value: function deleteLocationById(id) {
          return this.api.deleteData('clinic/location/delete/by/' + id);
        }
      }, {
        key: "deleteTimeById",
        value: function deleteTimeById(id) {
          return this.api.deleteData('clinic/timings/delete/by/' + id);
        }
      }, {
        key: "getAddressByClinic",
        value: function getAddressByClinic(id) {
          return this.api.getData('clinic/location/by/clinicId/' + id); // http://whealthylife.in:3311/api/v1/clinic/location/by/clinicId/:clinicId
        }
      }, {
        key: "getAllLab",
        value: function getAllLab() {
          return this.api.getData('lab/get/all');
        }
      }, {
        key: "getPackageByLab",
        value: function getPackageByLab() {
          return this.api.getData('labs/packages/by/labId/:id');
        }
      }, {
        key: "getallPackage",
        value: function getallPackage() {
          return this.api.getData('labs/packages/all');
        }
      }, {
        key: "getAllDtailsLabs",
        value: function getAllDtailsLabs(id) {
          return this.api.getData('labs/packages/by/packageId/' + id);
        }
      }, {
        key: "getCustReview",
        value: function getCustReview(id) {
          return this.api.getData('customer/review/get/by/lab/:id' + id);
        }
      }, {
        key: "getAllProfile",
        value: function getAllProfile() {
          return this.api.getData('profile/all');
        }
      }, {
        key: "getProfileById",
        value: function getProfileById(id) {
          return this.api.getData('profile/by/profileId/' + id);
        }
      }, {
        key: "getTestById",
        value: function getTestById(id) {
          return this.api.getData('tests/by/labTest/' + id);
        }
      }, {
        key: "validateMorSlot",
        value: function validateMorSlot(data) {
          return this.api.postData('slots/validate/morningSlot', data);
        }
      }, {
        key: "validateAfterSlot",
        value: function validateAfterSlot(data) {
          return this.api.postData('slots/validate/afternoonSlot', data);
        }
      }, {
        key: "validateEveSlot",
        value: function validateEveSlot(data) {
          return this.api.postData('slots/validate/eveningSlot', data);
        }
      }, {
        key: "validatenightSlot",
        value: function validatenightSlot(data) {
          return this.api.postData('slots/validate/nightSlot', data);
        }
      }]);

      return MainService;
    }();

    MainService.ɵfac = function MainService_Factory(t) {
      return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainService,
      factory: MainService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/speciality.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/speciality.service.ts ***!
    \************************************************/

  /*! exports provided: SpecialityService */

  /***/
  function srcAppServicesSpecialityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecialityService", function () {
      return SpecialityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var SpecialityService =
    /*#__PURE__*/
    function () {
      function SpecialityService(Api) {
        _classCallCheck(this, SpecialityService);

        this.Api = Api;
      }

      _createClass(SpecialityService, [{
        key: "getSpecialization",
        value: function getSpecialization() {
          return this.Api.getData("specialization/get/all/");
        }
      }, {
        key: "getSpecializationAll",
        value: function getSpecializationAll() {
          return this.Api.getData("specialization/get/all");
        }
      }, {
        key: "addSpecialization",
        value: function addSpecialization(data) {
          return this.Api.postData('doctor/specialization/add', data);
        }
      }, {
        key: "getTestMaster",
        value: function getTestMaster() {
          return this.Api.getData("tests/all");
        }
      }, {
        key: "getTopSpec",
        value: function getTopSpec() {
          return this.Api.getData("specialization/get/top/counts");
        }
      }, {
        key: "getCount",
        value: function getCount() {
          return this.Api.getData("doctor/all/counts");
        }
      }, {
        key: "getDoctorSpecility",
        value: function getDoctorSpecility() {
          return this.Api.getData('doctor/specialization/all');
        }
      }]);

      return SpecialityService;
    }();

    SpecialityService.ɵfac = function SpecialityService_Factory(t) {
      return new (t || SpecialityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    SpecialityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SpecialityService,
      factory: SpecialityService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/treatments.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/treatments.service.ts ***!
    \************************************************/

  /*! exports provided: TreatmentsService */

  /***/
  function srcAppServicesTreatmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreatmentsService", function () {
      return TreatmentsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var TreatmentsService =
    /*#__PURE__*/
    function () {
      function TreatmentsService(ApiCallService) {
        _classCallCheck(this, TreatmentsService);

        this.ApiCallService = ApiCallService;
      }

      _createClass(TreatmentsService, [{
        key: "getTreatmentsbyId",
        value: function getTreatmentsbyId(data) {
          return this.ApiCallService.getData('treatment/get/all/by/doctor/' + data);
        }
      }, {
        key: "getTreatmentUsingSpecializetion",
        value: function getTreatmentUsingSpecializetion(specialization) {
          return this.ApiCallService.getData('treatment/get/all/by/' + specialization);
        }
      }, {
        key: "getTreatmentUsingSpecializetionsID",
        value: function getTreatmentUsingSpecializetionsID(specialization) {
          return this.ApiCallService.postData('treatment/get/by/specializations', specialization);
        } // getDoctorTreatmentbyid(data){
        //   return this.ApiCallService.postData('treatment/get/all',data)
        // }

      }, {
        key: "addDoctorspec",
        value: function addDoctorspec(data) {
          return this.ApiCallService.postData('doctor/specialization/add', data);
        }
      }, {
        key: "newaddspecialization",
        value: function newaddspecialization(data) {
          return this.ApiCallService.postData('specialization/add', data);
        }
      }, {
        key: "addDoctorTreatment",
        value: function addDoctorTreatment(data) {
          return this.ApiCallService.postData('doctor/treatments/add', data);
        }
      }, {
        key: "getDoctreatment",
        value: function getDoctreatment() {
          return this.ApiCallService.getData('doctor/treatments/all');
        }
      }, {
        key: "getAllTreatment",
        value: function getAllTreatment() {
          return this.ApiCallService.getData('treatment/get/all');
        }
      }]);

      return TreatmentsService;
    }();

    TreatmentsService.ɵfac = function TreatmentsService_Factory(t) {
      return new (t || TreatmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    TreatmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TreatmentsService,
      factory: TreatmentsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreatmentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map
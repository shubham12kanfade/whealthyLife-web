(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["practice-details-practice-details-module"],{

/***/ "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/practice-details/practice-details-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PracticeDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeDetailsRoutingModule", function() { return PracticeDetailsRoutingModule; });
/* harmony import */ var _practice_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice-details.component */ "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '', component: _practice_details_component__WEBPACK_IMPORTED_MODULE_0__["PracticeDetailsComponent"]
    }
];
class PracticeDetailsRoutingModule {
}
PracticeDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PracticeDetailsRoutingModule });
PracticeDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PracticeDetailsRoutingModule_Factory(t) { return new (t || PracticeDetailsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PracticeDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PracticeDetailsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PracticeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeDetailsComponent", function() { return PracticeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PracticeDetailsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PracticeDetailsComponent.ɵfac = function PracticeDetailsComponent_Factory(t) { return new (t || PracticeDetailsComponent)(); };
PracticeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PracticeDetailsComponent, selectors: [["app-practice-details"]], decls: 103, vars: 0, consts: [[1, "card", "shadow", "mb-4"], [1, "row"], [1, "col-sm-12"], [1, "card-header"], [1, "col-sm-3", "first"], [1, "font-weight-bold", "text-primary"], [1, "card-body"], [1, "col-md-12", "col-sm-12"], [1, "col-md-2", "col-sm-2", "text-center"], [1, "avatar-wrapper", 2, "display", "flex", "align-items", "center"], ["src", "", 1, "profile-pic"], [1, "upload-button"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-up"], ["type", "file", "accept", "image/*", 1, "file-upload"], [1, "col-md-10", "col-sm-10", "ccla"], [1, "col-sm-4"], [1, "form-group"], ["for", "ClinicName"], ["type", "text", "id", "ClinicName", 1, "form-control"], ["for", "Specialization"], ["id", "Specialization", 1, "form-control"], ["for", "gstin"], ["type", "text", "id", "gstin", 1, "form-control"], ["for", "Contact"], ["type", "text", "id", "Contact", 1, "form-control"], ["for", "Email"], ["type", "email", "id", "Email", 1, "form-control"], ["for", "website"], ["type", "text", "id", "website", 1, "form-control"], [1, "col-sm-8"], ["type", "text", "id", "ClinicName", "placeholder", "Address Line 1", 1, "form-control"], ["for", "locality"], ["type", "text", "id", "locality", "placeholder", "Enter Locality", 1, "form-control"], ["for", "country"], ["id", "country", 1, "form-control"], ["for", "state"], ["id", "state", 1, "form-control"], ["for", "pincode"], ["type", "text", "id", "pincode", "placeholder", "enter pincode", 1, "form-control"], ["mat-raised-button", "", 1, "mat-button", "btn", "btnadd"]], template: function PracticeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Practice Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clinic Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Specialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Accupuncture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Physician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Audiologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ayurveda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "GSTIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Contact No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Locality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "America");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Norvey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Tamil Nadu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Madhya Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Bihar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 104px;\n  width: 105px;\n  margin: 50px auto;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 1px 1px 15px -5px black;\n  transition: all 0.3s ease;\n}\n.avatar-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.avatar-wrapper[_ngcontent-%COMP%]:hover   .profile-pic[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  transition: all 0.3s ease;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]:after {\n  font-family: FontAwesome;\n  content: \"\uF007\";\n  top: 0;\n  left: 0;\n  height: 10%;\n  width: 100%;\n  position: absolute;\n  font-size: 72px;\n  background: #ecf0f1;\n  color: #34495e;\n  text-align: center;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%]   .fa-arrow-circle-up[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 12px;\n  text-align: center;\n  opacity: 0;\n  transition: all 0.3s ease;\n  color: #34495e;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .upload-button[_ngcontent-%COMP%]:hover   .fa-arrow-circle-up[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.jumbotron[_ngcontent-%COMP%] {\n  margin-bottom: -21px;\n  background: white;\n  padding: 18px;\n}\n.btnwarn[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-right: 7%;\n  margin-top: 3%;\n}\n.mat-button[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n  width: 100px !important;\n  min-width: unset !important;\n  float: right;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvcHJhY3RpY2UtZGV0YWlscy9wcmFjdGljZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9zZXR0aW5ncy9wcmFjdGljZS1kZXRhaWxzL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yLWRhc2hib3JkXFxzZXR0aW5nc1xccHJhY3RpY2UtZGV0YWlsc1xccHJhY3RpY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDRyxZQUFBO0VBQ0gsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBREVEO0FDREM7RUFDQyxzQkFBQTtFQUNBLGVBQUE7QURHRjtBQ0RDO0VBQ0MsWUFBQTtBREdGO0FDREM7RUFDRyxZQUFBO0VBQ0YsV0FBQTtFQUNBLHlCQUFBO0FER0Y7QUNGRTtFQUNDLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQ1IsV0FBQTtFQUNTLFdBQUE7RUFDVCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREtIO0FDRkM7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQ1IsWUFBQTtFQUNBLFdBQUE7QURLRjtBQ0pFO0VBQ0Msa0JBQUE7RUFFQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBREtIO0FDSEU7RUFDQyxZQUFBO0FES0g7QUNEQTtFQUVDLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FER0Q7QUNpQkE7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRGREO0FDb0JBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7RUFDRSwyQkFBQTtFQUNDLFlBQUE7RUFDSCxlQUFBO0FEbEJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvcHJhY3RpY2UtZGV0YWlscy9wcmFjdGljZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmF2YXRhci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwNHB4O1xuICB3aWR0aDogMTA1cHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCAtNXB4IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmF2YXRhci13cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF2YXRhci13cmFwcGVyOmhvdmVyIC5wcm9maWxlLXBpYyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5hdmF0YXItd3JhcHBlciAucHJvZmlsZS1waWMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmF2YXRhci13cmFwcGVyIC5wcm9maWxlLXBpYzphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvgIdcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF2YXRhci13cmFwcGVyIC51cGxvYWQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXZhdGFyLXdyYXBwZXIgLnVwbG9hZC1idXR0b24gLmZhLWFycm93LWNpcmNsZS11cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiAjMzQ0OTVlO1xufVxuLmF2YXRhci13cmFwcGVyIC51cGxvYWQtYnV0dG9uOmhvdmVyIC5mYS1hcnJvdy1jaXJjbGUtdXAge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBtYXJnaW4tYm90dG9tOiAtMjFweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi5idG53YXJuIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNyU7XG4gIG1hcmdpbi10b3A6IDMlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIuYXZhdGFyLXdyYXBwZXJ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTA0cHg7XHJcbiAgICB3aWR0aDogMTA1cHg7XHJcblx0bWFyZ2luOiA1MHB4IGF1dG87XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym94LXNoYWRvdzogMXB4IDFweCAxNXB4IC01cHggYmxhY2s7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG5cdCY6aG92ZXJ7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHQmOmhvdmVyIC5wcm9maWxlLXBpY3tcclxuXHRcdG9wYWNpdHk6IC41O1xyXG5cdH1cclxuXHQucHJvZmlsZS1waWMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcblx0XHQmOmFmdGVye1xyXG5cdFx0XHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXFxmMDA3XCI7XHJcblx0XHRcdHRvcDogMDsgbGVmdDogMDtcclxuXHRcdFx0aGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGZvbnQtc2l6ZTogNzJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI2VjZjBmMTtcclxuXHRcdFx0Y29sb3I6ICMzNDQ5NWU7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblx0LnVwbG9hZC1idXR0b24ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwOyBsZWZ0OiAwO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHQuZmEtYXJyb3ctY2lyY2xlLXVwe1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdC8vIGZvbnQtc2l6ZTogODBweDtcclxuXHRcdFx0dG9wOiAxNXB4O1xyXG5cdFx0XHRsZWZ0OiAxMnB4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuXHRcdFx0Y29sb3I6ICMzNDQ5NWU7XHJcblx0XHR9XHJcblx0XHQmOmhvdmVyIC5mYS1hcnJvdy1jaXJjbGUtdXB7XHJcblx0XHRcdG9wYWNpdHk6IC45O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgLy8gaGVpZ2h0OiA0MCU7XHJcblx0bWFyZ2luLWJvdHRvbTogLTIxcHg7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0cGFkZGluZzogMThweDtcclxufVxyXG4uY2NsYXtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4vLyBsYWJlbHtcclxuLy8gXHRmb250LXNpemU6IDEuMjNyZW07XHJcbi8vIH1cclxuLy8gaW5wdXR7XHJcbi8vIFx0Zm9udC1zaXplOiAxLjIwcmVtO1xyXG4vLyB9XHJcbi8vICNTcGVjaWFsaXphdGlvbntcclxuLy8gXHRmb250LXNpemU6IDEuMjByZW07XHJcbi8vIH1cclxuLy8gI2NvdW50cnl7XHJcbi8vIFx0Zm9udC1zaXplOiAxLjIwcmVtO1xyXG4vLyB9XHJcbi8vICNzdGF0ZXtcclxuLy8gXHRmb250LXNpemU6IDEuMjByZW07XHJcbi8vIH1cclxuLmJ0bndhcm57XHJcblx0ZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcblx0bWFyZ2luLXJpZ2h0OiA3JTtcclxuXHRtYXJnaW4tdG9wOiAzJTtcclxufSBcclxuLy8gLnRleHR7XHJcbi8vIFx0Zm9udC1zaXplOiAxLjYwcmVtO1xyXG4vLyB9XHJcblxyXG4ubWF0LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICAgIHdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PracticeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-practice-details',
                templateUrl: './practice-details.component.html',
                styleUrls: ['./practice-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PracticeDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeDetailsModule", function() { return PracticeDetailsModule; });
/* harmony import */ var _practice_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice-details.component */ "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _practice_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./practice-details-routing.module */ "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details-routing.module.ts");





class PracticeDetailsModule {
}
PracticeDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PracticeDetailsModule });
PracticeDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PracticeDetailsModule_Factory(t) { return new (t || PracticeDetailsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _practice_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["PracticeDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PracticeDetailsModule, { declarations: [_practice_details_component__WEBPACK_IMPORTED_MODULE_0__["PracticeDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _practice_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["PracticeDetailsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PracticeDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_practice_details_component__WEBPACK_IMPORTED_MODULE_0__["PracticeDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _practice_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["PracticeDetailsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=practice-details-practice-details-module-es2015.js.map
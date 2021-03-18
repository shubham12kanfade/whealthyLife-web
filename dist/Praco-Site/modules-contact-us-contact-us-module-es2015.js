(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contact-us-contact-us-module"],{

/***/ "./src/app/modules/contact-us/contact-us-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/modules/contact-us/contact-us.component.ts");





const routes = [
    { path: '', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"] }
];
class ContactUsRoutingModule {
}
ContactUsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactUsRoutingModule });
ContactUsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactUsRoutingModule_Factory(t) { return new (t || ContactUsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/contact-us/contact-us.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/contact-us/contact-us.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us-routing.module */ "./src/app/modules/contact-us/contact-us-routing.module.ts");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/__ivy_ngcc__/fesm2015/ngx-captcha.js");






class ContactUsModule {
}
ContactUsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactUsModule });
ContactUsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ContactUsModule_Factory(t) { return new (t || ContactUsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactUsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            ngx_captcha__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactUsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactUsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        ngx_captcha__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactUsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactUsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    ngx_captcha__WEBPACK_IMPORTED_MODULE_4__["NgxCaptchaModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-contact-us-contact-us-module-es2015.js.map
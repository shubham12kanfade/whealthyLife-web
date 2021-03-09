(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-log-activity-log-module"],{

/***/ "./src/app/modules/doctor-dashbord/activity-log/activity-log-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/activity-log/activity-log-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ActivityLogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogRoutingModule", function() { return ActivityLogRoutingModule; });
/* harmony import */ var _activity_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-log.component */ "./src/app/modules/doctor-dashbord/activity-log/activity-log.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', component: _activity_log_component__WEBPACK_IMPORTED_MODULE_0__["ActivityLogComponent"] }
];
class ActivityLogRoutingModule {
}
ActivityLogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActivityLogRoutingModule });
ActivityLogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ActivityLogRoutingModule_Factory(t) { return new (t || ActivityLogRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActivityLogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActivityLogRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/activity-log/activity-log.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/activity-log/activity-log.component.ts ***!
  \********************************************************************************/
/*! exports provided: ActivityLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogComponent", function() { return ActivityLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ActivityLogComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ActivityLogComponent.ɵfac = function ActivityLogComponent_Factory(t) { return new (t || ActivityLogComponent)(); };
ActivityLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityLogComponent, selectors: [["app-activity-log"]], decls: 2, vars: 0, template: function ActivityLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "activity-log works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2FjdGl2aXR5LWxvZy9hY3Rpdml0eS1sb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-log',
                templateUrl: './activity-log.component.html',
                styleUrls: ['./activity-log.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/activity-log/activity-log.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/activity-log/activity-log.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ActivityLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogModule", function() { return ActivityLogModule; });
/* harmony import */ var _activity_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-log.component */ "./src/app/modules/doctor-dashbord/activity-log/activity-log.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-log-routing.module */ "./src/app/modules/doctor-dashbord/activity-log/activity-log-routing.module.ts");





class ActivityLogModule {
}
ActivityLogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ActivityLogModule });
ActivityLogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ActivityLogModule_Factory(t) { return new (t || ActivityLogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivityLogRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ActivityLogModule, { declarations: [_activity_log_component__WEBPACK_IMPORTED_MODULE_0__["ActivityLogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivityLogRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActivityLogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_activity_log_component__WEBPACK_IMPORTED_MODULE_0__["ActivityLogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _activity_log_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivityLogRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=activity-log-activity-log-module-es2015.js.map
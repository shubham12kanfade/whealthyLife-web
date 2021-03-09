(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printouts-printouts-module"],{

/***/ "./src/app/modules/doctor-dashbord/settings/printouts/printouts-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/printouts/printouts-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PrintoutsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintoutsRoutingModule", function() { return PrintoutsRoutingModule; });
/* harmony import */ var _printouts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printouts.component */ "./src/app/modules/doctor-dashbord/settings/printouts/printouts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '', component: _printouts_component__WEBPACK_IMPORTED_MODULE_0__["PrintoutsComponent"]
    }
];
class PrintoutsRoutingModule {
}
PrintoutsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PrintoutsRoutingModule });
PrintoutsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PrintoutsRoutingModule_Factory(t) { return new (t || PrintoutsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrintoutsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintoutsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/printouts/printouts.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/printouts/printouts.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PrintoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintoutsComponent", function() { return PrintoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrintoutsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PrintoutsComponent.ɵfac = function PrintoutsComponent_Factory(t) { return new (t || PrintoutsComponent)(); };
PrintoutsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintoutsComponent, selectors: [["app-printouts"]], decls: 2, vars: 0, template: function PrintoutsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "printouts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL3ByaW50b3V0cy9wcmludG91dHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintoutsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-printouts',
                templateUrl: './printouts.component.html',
                styleUrls: ['./printouts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/printouts/printouts.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/printouts/printouts.module.ts ***!
  \********************************************************************************/
/*! exports provided: PrintoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintoutsModule", function() { return PrintoutsModule; });
/* harmony import */ var _printouts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printouts.component */ "./src/app/modules/doctor-dashbord/settings/printouts/printouts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _printouts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printouts-routing.module */ "./src/app/modules/doctor-dashbord/settings/printouts/printouts-routing.module.ts");





class PrintoutsModule {
}
PrintoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PrintoutsModule });
PrintoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PrintoutsModule_Factory(t) { return new (t || PrintoutsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _printouts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrintoutsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrintoutsModule, { declarations: [_printouts_component__WEBPACK_IMPORTED_MODULE_0__["PrintoutsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _printouts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrintoutsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_printouts_component__WEBPACK_IMPORTED_MODULE_0__["PrintoutsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _printouts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrintoutsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=printouts-printouts-module-es2015.js.map
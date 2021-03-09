function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-health-medicineshealth-health-medicineshealth-module"], {
  /***/
  "./src/app/modules/health-medicineshealth/health-medicineshealth-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/health-medicineshealth/health-medicineshealth-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: HealthMedicineshealthRoutingModule */

  /***/
  function srcAppModulesHealthMedicineshealthHealthMedicineshealthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthMedicineshealthRoutingModule", function () {
      return HealthMedicineshealthRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _health_medicineshealth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./health-medicineshealth.component */
    "./src/app/modules/health-medicineshealth/health-medicineshealth.component.ts");

    var routes = [{
      path: '',
      component: _health_medicineshealth_component__WEBPACK_IMPORTED_MODULE_2__["HealthMedicineshealthComponent"]
    }];

    var HealthMedicineshealthRoutingModule = function HealthMedicineshealthRoutingModule() {
      _classCallCheck(this, HealthMedicineshealthRoutingModule);
    };

    HealthMedicineshealthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HealthMedicineshealthRoutingModule
    });
    HealthMedicineshealthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HealthMedicineshealthRoutingModule_Factory(t) {
        return new (t || HealthMedicineshealthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthMedicineshealthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthMedicineshealthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/health-medicineshealth/health-medicineshealth.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/health-medicineshealth/health-medicineshealth.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: HealthMedicineshealthModule */

  /***/
  function srcAppModulesHealthMedicineshealthHealthMedicineshealthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthMedicineshealthModule", function () {
      return HealthMedicineshealthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _health_medicineshealth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./health-medicineshealth-routing.module */
    "./src/app/modules/health-medicineshealth/health-medicineshealth-routing.module.ts");

    var HealthMedicineshealthModule = function HealthMedicineshealthModule() {
      _classCallCheck(this, HealthMedicineshealthModule);
    };

    HealthMedicineshealthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HealthMedicineshealthModule
    });
    HealthMedicineshealthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HealthMedicineshealthModule_Factory(t) {
        return new (t || HealthMedicineshealthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _health_medicineshealth_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthMedicineshealthRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthMedicineshealthModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _health_medicineshealth_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthMedicineshealthRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthMedicineshealthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _health_medicineshealth_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthMedicineshealthRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-health-medicineshealth-health-medicineshealth-module-es5.js.map
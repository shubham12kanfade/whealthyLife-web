function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/inventory/inventory-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/inventory/inventory-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: InventoryRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordInventoryInventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function () {
      return InventoryRoutingModule;
    });
    /* harmony import */


    var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./inventory.component */
    "./src/app/modules/doctor-dashbord/inventory/inventory.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _inventory_component__WEBPACK_IMPORTED_MODULE_0__["InventoryComponent"]
    }];

    var InventoryRoutingModule = function InventoryRoutingModule() {
      _classCallCheck(this, InventoryRoutingModule);
    };

    InventoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InventoryRoutingModule
    });
    InventoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InventoryRoutingModule_Factory(t) {
        return new (t || InventoryRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InventoryRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InventoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/inventory/inventory.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/inventory/inventory.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppModulesDoctorDashbordInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InventoryComponent =
    /*#__PURE__*/
    function () {
      function InventoryComponent() {
        _classCallCheck(this, InventoryComponent);
      }

      _createClass(InventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InventoryComponent;
    }();

    InventoryComponent.ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)();
    };

    InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      decls: 2,
      vars: 0,
      template: function InventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inventory works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory',
          templateUrl: './inventory.component.html',
          styleUrls: ['./inventory.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/inventory/inventory.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/inventory/inventory.module.ts ***!
    \***********************************************************************/

  /*! exports provided: InventoryModule */

  /***/
  function srcAppModulesDoctorDashbordInventoryInventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryModule", function () {
      return InventoryModule;
    });
    /* harmony import */


    var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./inventory.component */
    "./src/app/modules/doctor-dashbord/inventory/inventory.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inventory-routing.module */
    "./src/app/modules/doctor-dashbord/inventory/inventory-routing.module.ts");

    var InventoryModule = function InventoryModule() {
      _classCallCheck(this, InventoryModule);
    };

    InventoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InventoryModule
    });
    InventoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function InventoryModule_Factory(t) {
        return new (t || InventoryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InventoryModule, {
        declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_0__["InventoryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InventoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_0__["InventoryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=inventory-inventory-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/expenses/expenses-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/expenses/expenses-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ExpensesRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordExpensesExpensesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesRoutingModule", function () {
      return ExpensesRoutingModule;
    });
    /* harmony import */


    var _expenses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./expenses.component */
    "./src/app/modules/doctor-dashbord/expenses/expenses.component.ts");
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
      component: _expenses_component__WEBPACK_IMPORTED_MODULE_0__["ExpensesComponent"]
    }];

    var ExpensesRoutingModule = function ExpensesRoutingModule() {
      _classCallCheck(this, ExpensesRoutingModule);
    };

    ExpensesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ExpensesRoutingModule
    });
    ExpensesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ExpensesRoutingModule_Factory(t) {
        return new (t || ExpensesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExpensesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpensesRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/expenses/expenses.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/expenses/expenses.component.ts ***!
    \************************************************************************/

  /*! exports provided: ExpensesComponent */

  /***/
  function srcAppModulesDoctorDashbordExpensesExpensesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function () {
      return ExpensesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExpensesComponent =
    /*#__PURE__*/
    function () {
      function ExpensesComponent() {
        _classCallCheck(this, ExpensesComponent);
      }

      _createClass(ExpensesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpensesComponent;
    }();

    ExpensesComponent.ɵfac = function ExpensesComponent_Factory(t) {
      return new (t || ExpensesComponent)();
    };

    ExpensesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpensesComponent,
      selectors: [["app-expenses"]],
      decls: 2,
      vars: 0,
      template: function ExpensesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expenses works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2V4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpensesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expenses',
          templateUrl: './expenses.component.html',
          styleUrls: ['./expenses.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/expenses/expenses.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/expenses/expenses.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ExpensesModule */

  /***/
  function srcAppModulesDoctorDashbordExpensesExpensesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesModule", function () {
      return ExpensesModule;
    });
    /* harmony import */


    var _expenses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./expenses.component */
    "./src/app/modules/doctor-dashbord/expenses/expenses.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expenses-routing.module */
    "./src/app/modules/doctor-dashbord/expenses/expenses-routing.module.ts");

    var ExpensesModule = function ExpensesModule() {
      _classCallCheck(this, ExpensesModule);
    };

    ExpensesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ExpensesModule
    });
    ExpensesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ExpensesModule_Factory(t) {
        return new (t || ExpensesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _expenses_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpensesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExpensesModule, {
        declarations: [_expenses_component__WEBPACK_IMPORTED_MODULE_0__["ExpensesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _expenses_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpensesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpensesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_expenses_component__WEBPACK_IMPORTED_MODULE_0__["ExpensesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _expenses_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpensesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=expenses-expenses-module-es5.js.map
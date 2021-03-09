function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emails-emails-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/settings/emails/emails-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/emails/emails-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: EmailsRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsEmailsEmailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsRoutingModule", function () {
      return EmailsRoutingModule;
    });
    /* harmony import */


    var _emails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./emails.component */
    "./src/app/modules/doctor-dashbord/settings/emails/emails.component.ts");
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
      component: _emails_component__WEBPACK_IMPORTED_MODULE_0__["EmailsComponent"]
    }];

    var EmailsRoutingModule = function EmailsRoutingModule() {
      _classCallCheck(this, EmailsRoutingModule);
    };

    EmailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmailsRoutingModule
    });
    EmailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EmailsRoutingModule_Factory(t) {
        return new (t || EmailsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailsRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/settings/emails/emails.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/emails/emails.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EmailsComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsEmailsEmailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsComponent", function () {
      return EmailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmailsComponent =
    /*#__PURE__*/
    function () {
      function EmailsComponent() {
        _classCallCheck(this, EmailsComponent);
      }

      _createClass(EmailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmailsComponent;
    }();

    EmailsComponent.ɵfac = function EmailsComponent_Factory(t) {
      return new (t || EmailsComponent)();
    };

    EmailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailsComponent,
      selectors: [["app-emails"]],
      decls: 2,
      vars: 0,
      template: function EmailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "emails works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL2VtYWlscy9lbWFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emails',
          templateUrl: './emails.component.html',
          styleUrls: ['./emails.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/settings/emails/emails.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/emails/emails.module.ts ***!
    \**************************************************************************/

  /*! exports provided: EmailsModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsEmailsEmailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsModule", function () {
      return EmailsModule;
    });
    /* harmony import */


    var _emails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./emails.component */
    "./src/app/modules/doctor-dashbord/settings/emails/emails.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _emails_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./emails-routing.module */
    "./src/app/modules/doctor-dashbord/settings/emails/emails-routing.module.ts");

    var EmailsModule = function EmailsModule() {
      _classCallCheck(this, EmailsModule);
    };

    EmailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmailsModule
    });
    EmailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EmailsModule_Factory(t) {
        return new (t || EmailsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _emails_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailsModule, {
        declarations: [_emails_component__WEBPACK_IMPORTED_MODULE_0__["EmailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _emails_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_emails_component__WEBPACK_IMPORTED_MODULE_0__["EmailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _emails_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=emails-emails-module-es5.js.map
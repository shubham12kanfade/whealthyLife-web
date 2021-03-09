function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consent-forms-consent-forms-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ConsentFormsRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsConsentFormsConsentFormsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsentFormsRoutingModule", function () {
      return ConsentFormsRoutingModule;
    });
    /* harmony import */


    var _consent_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./consent-forms.component */
    "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.component.ts");
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
      component: _consent_forms_component__WEBPACK_IMPORTED_MODULE_0__["ConsentFormsComponent"]
    }];

    var ConsentFormsRoutingModule = function ConsentFormsRoutingModule() {
      _classCallCheck(this, ConsentFormsRoutingModule);
    };

    ConsentFormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ConsentFormsRoutingModule
    });
    ConsentFormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ConsentFormsRoutingModule_Factory(t) {
        return new (t || ConsentFormsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConsentFormsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConsentFormsRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ConsentFormsComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsConsentFormsConsentFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsentFormsComponent", function () {
      return ConsentFormsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConsentFormsComponent =
    /*#__PURE__*/
    function () {
      function ConsentFormsComponent() {
        _classCallCheck(this, ConsentFormsComponent);
      }

      _createClass(ConsentFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsentFormsComponent;
    }();

    ConsentFormsComponent.ɵfac = function ConsentFormsComponent_Factory(t) {
      return new (t || ConsentFormsComponent)();
    };

    ConsentFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsentFormsComponent,
      selectors: [["app-consent-forms"]],
      decls: 23,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "text-center"], [1, "mx-auto"], ["src", "../../../../../assets/img/consent_form_promo_icon.svg"], [1, "lead", "text-gray-900", "mb-5"], [1, "text-gray-700", "mb-0"], ["href", "#"], [1, "text-darkgray-700", "mb-5"], [1, "text-darkgray-700", "mb-0"]],
      template: function ConsentFormsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Consent Forms now available on the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WhealthyLife");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tab!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You can now create and store your own medical consent forms for your practice. Conveniently collect patient's signature on consent forms using the WhealthyLife Tab.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "To get started, please contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mail:support@WhealthyLife.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Call: 8880588999");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mx-auto[_ngcontent-%COMP%] {\n  margin-top: 15% !important;\n}\n\n.lead[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n.text-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvY29uc2VudC1mb3Jtcy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXGNvbnNlbnQtZm9ybXNcXGNvbnNlbnQtZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL2NvbnNlbnQtZm9ybXMvY29uc2VudC1mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvY29uc2VudC1mb3Jtcy9jb25zZW50LWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm14LWF1dG97XHJcbiAgICBtYXJnaW4tdG9wOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG4ubGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWNlbnRlciBwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyAgXHJcbn1cclxuLnRleHQtY2VudGVyIGF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iLCIubXgtYXV0byB7XG4gIG1hcmdpbi10b3A6IDE1JSAhaW1wb3J0YW50O1xufVxuXG4ubGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jZW50ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtY2VudGVyIGEge1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsentFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consent-forms',
          templateUrl: './consent-forms.component.html',
          styleUrls: ['./consent-forms.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: ConsentFormsModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsConsentFormsConsentFormsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsentFormsModule", function () {
      return ConsentFormsModule;
    });
    /* harmony import */


    var _consent_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./consent-forms.component */
    "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _consent_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./consent-forms-routing.module */
    "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms-routing.module.ts");

    var ConsentFormsModule = function ConsentFormsModule() {
      _classCallCheck(this, ConsentFormsModule);
    };

    ConsentFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ConsentFormsModule
    });
    ConsentFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ConsentFormsModule_Factory(t) {
        return new (t || ConsentFormsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _consent_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConsentFormsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ConsentFormsModule, {
        declarations: [_consent_forms_component__WEBPACK_IMPORTED_MODULE_0__["ConsentFormsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _consent_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConsentFormsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConsentFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_consent_forms_component__WEBPACK_IMPORTED_MODULE_0__["ConsentFormsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _consent_forms_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConsentFormsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=consent-forms-consent-forms-module-es5.js.map
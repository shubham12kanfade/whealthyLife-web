function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-booktests-booktests-module"], {
  /***/
  "./src/app/modules/booktests/booktests-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/booktests/booktests-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: BooktestsRoutingModule */

  /***/
  function srcAppModulesBooktestsBooktestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooktestsRoutingModule", function () {
      return BooktestsRoutingModule;
    });
    /* harmony import */


    var _pop_health_pop_health_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pop-health/pop-health.component */
    "./src/app/modules/booktests/pop-health/pop-health.component.ts");
    /* harmony import */


    var _booktests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./booktests.component */
    "./src/app/modules/booktests/booktests.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _select_city_select_city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./select-city/select-city.component */
    "./src/app/modules/booktests/select-city/select-city.component.ts");

    var routes = [{
      path: '',
      component: _booktests_component__WEBPACK_IMPORTED_MODULE_1__["BooktestsComponent"]
    }, {
      path: 'select-city',
      component: _select_city_select_city_component__WEBPACK_IMPORTED_MODULE_4__["SelectCityComponent"]
    }, {
      path: 'pop-health/:type/:id',
      component: _pop_health_pop_health_component__WEBPACK_IMPORTED_MODULE_0__["PopHealthComponent"]
    }];

    var BooktestsRoutingModule = function BooktestsRoutingModule() {
      _classCallCheck(this, BooktestsRoutingModule);
    };

    BooktestsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BooktestsRoutingModule
    });
    BooktestsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function BooktestsRoutingModule_Factory(t) {
        return new (t || BooktestsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BooktestsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BooktestsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/booktests/booktests.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/booktests/booktests.module.ts ***!
    \*******************************************************/

  /*! exports provided: BooktestsModule */

  /***/
  function srcAppModulesBooktestsBooktestsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooktestsModule", function () {
      return BooktestsModule;
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


    var _booktests_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./booktests-routing.module */
    "./src/app/modules/booktests/booktests-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _select_city_select_city_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./select-city/select-city.component */
    "./src/app/modules/booktests/select-city/select-city.component.ts");
    /* harmony import */


    var _pop_health_pop_health_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pop-health/pop-health.component */
    "./src/app/modules/booktests/pop-health/pop-health.component.ts");
    /* harmony import */


    var _pop_health_iso_iso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pop-health/iso/iso.component */
    "./src/app/modules/booktests/pop-health/iso/iso.component.ts");
    /* harmony import */


    var _pop_health_nabl_nabl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pop-health/nabl/nabl.component */
    "./src/app/modules/booktests/pop-health/nabl/nabl.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BooktestsModule = function BooktestsModule() {
      _classCallCheck(this, BooktestsModule);
    };

    BooktestsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BooktestsModule
    });
    BooktestsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BooktestsModule_Factory(t) {
        return new (t || BooktestsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _booktests_routing_module__WEBPACK_IMPORTED_MODULE_2__["BooktestsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BooktestsModule, {
        declarations: [_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_4__["SelectCityComponent"], _pop_health_pop_health_component__WEBPACK_IMPORTED_MODULE_5__["PopHealthComponent"], _pop_health_iso_iso_component__WEBPACK_IMPORTED_MODULE_6__["ISOComponent"], _pop_health_nabl_nabl_component__WEBPACK_IMPORTED_MODULE_7__["NABLComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _booktests_routing_module__WEBPACK_IMPORTED_MODULE_2__["BooktestsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooktestsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_select_city_select_city_component__WEBPACK_IMPORTED_MODULE_4__["SelectCityComponent"], _pop_health_pop_health_component__WEBPACK_IMPORTED_MODULE_5__["PopHealthComponent"], _pop_health_iso_iso_component__WEBPACK_IMPORTED_MODULE_6__["ISOComponent"], _pop_health_nabl_nabl_component__WEBPACK_IMPORTED_MODULE_7__["NABLComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _booktests_routing_module__WEBPACK_IMPORTED_MODULE_2__["BooktestsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/booktests/pop-health/iso/iso.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/booktests/pop-health/iso/iso.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ISOComponent */

  /***/
  function srcAppModulesBooktestsPopHealthIsoIsoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ISOComponent", function () {
      return ISOComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ISOComponent =
    /*#__PURE__*/
    function () {
      function ISOComponent() {
        _classCallCheck(this, ISOComponent);
      }

      _createClass(ISOComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ISOComponent;
    }();

    ISOComponent.ɵfac = function ISOComponent_Factory(t) {
      return new (t || ISOComponent)();
    };

    ISOComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ISOComponent,
      selectors: [["app-iso"]],
      decls: 8,
      vars: 1,
      consts: [[1, "mat-typography"], [1, "text"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function ISOComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ISO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ISO (International Organization for Standardization) is the world largest developer and publisher of International Standards. It is a non-governmental organization that forms a bridge between the public and private sectors. ISO 9001 is a certification of management and administrative procedures and does not entail technical competence. ISO 15189 is International Standards for Medical testing Laboratories. The first version was published in 2003, it was revised in 2007 and the third edition of the standard was published in 2012. While the standard is based on ISO/IEC 17025 and ISO 9001, it is a unique document that takes into consideration the specific requirements of the medical environment and the importance of the medical laboratory to patient care. Software solutions designed specifically for medical laboratories can aid in achieving ISO 15189 based accreditation. In particular, document control software can help by improving turnaround time (TAT) for document reviews, increasing efficiency of staff and improving overall quality. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rdGVzdHMvcG9wLWhlYWx0aC9pc28vQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxib29rdGVzdHNcXHBvcC1oZWFsdGhcXGlzb1xcaXNvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Jvb2t0ZXN0cy9wb3AtaGVhbHRoL2lzby9pc28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Rlc3RzL3BvcC1oZWFsdGgvaXNvL2lzby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ISOComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-iso',
          templateUrl: './iso.component.html',
          styleUrls: ['./iso.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/booktests/pop-health/nabl/nabl.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/booktests/pop-health/nabl/nabl.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NABLComponent */

  /***/
  function srcAppModulesBooktestsPopHealthNablNablComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NABLComponent", function () {
      return NABLComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NABLComponent =
    /*#__PURE__*/
    function () {
      function NABLComponent() {
        _classCallCheck(this, NABLComponent);
      }

      _createClass(NABLComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NABLComponent;
    }();

    NABLComponent.ɵfac = function NABLComponent_Factory(t) {
      return new (t || NABLComponent)();
    };

    NABLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NABLComponent,
      selectors: [["app-nabl"]],
      decls: 8,
      vars: 1,
      consts: [[1, "mat-typography"], [1, "text"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function NABLComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NABL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NABL is an autonomous body under the Department of Science and Technology, Government of India. The standards laid down by NABL are in accordance with ISO 15189:2012. To get accredited, a laboratory has to fulfil the parameters in ISO 15189, which is an International standard. Accreditation is a formal recognition of the technical competence of a lab in all aspects including its quality system management based on a third party assessment, following the latest national and international guidelines. The NABL accreditation is given in the disciplines like testing laboratories, medical laboratories and calibration laboratories. It is the highest level of accreditation for laboratories in India. Features of NABL accredited lab include external quality control, internal quality control, quality audits and confidentiality. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rdGVzdHMvcG9wLWhlYWx0aC9uYWJsL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcYm9va3Rlc3RzXFxwb3AtaGVhbHRoXFxuYWJsXFxuYWJsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Jvb2t0ZXN0cy9wb3AtaGVhbHRoL25hYmwvbmFibC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ib29rdGVzdHMvcG9wLWhlYWx0aC9uYWJsL25hYmwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NABLComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nabl',
          templateUrl: './nabl.component.html',
          styleUrls: ['./nabl.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/booktests/pop-health/pop-health.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/booktests/pop-health/pop-health.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PopHealthComponent */

  /***/
  function srcAppModulesBooktestsPopHealthPopHealthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopHealthComponent", function () {
      return PopHealthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iso_iso_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./iso/iso.component */
    "./src/app/modules/booktests/pop-health/iso/iso.component.ts");
    /* harmony import */


    var _nabl_nabl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nabl/nabl.component */
    "./src/app/modules/booktests/pop-health/nabl/nabl.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _services_medicine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../services/medicine.service */
    "./src/app/services/medicine.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

    function PopHealthComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (Includes ", ctx_r14.length, " Tests) ");
      }
    }

    function PopHealthComponent_div_179_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r18.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.title, "");
      }
    }

    function PopHealthComponent_div_179_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopHealthComponent_div_179_mat_expansion_panel_1_Template, 7, 2, "mat-expansion-panel", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.TestDetails);
      }
    }

    function PopHealthComponent_div_180_mat_expansion_panel_1_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var it_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, it_r22.title));
      }
    }

    function PopHealthComponent_div_180_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function PopHealthComponent_div_180_mat_expansion_panel_1_Template_mat_expansion_panel_opened_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.panelOpenState = true;
        })("closed", function PopHealthComponent_div_180_mat_expansion_panel_1_Template_mat_expansion_panel_closed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.panelOpenState = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-panel-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopHealthComponent_div_180_mat_expansion_panel_1_p_7_Template, 3, 3, "p", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r20.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20 == null ? null : item_r20.precaution, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r20.profileTests);
      }
    }

    function PopHealthComponent_div_180_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopHealthComponent_div_180_mat_expansion_panel_1_Template, 8, 3, "mat-expansion-panel", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.PProfile);
      }
    }

    var PopHealthComponent =
    /*#__PURE__*/
    function () {
      function PopHealthComponent(dialog, Router, MainService, MedicineService) {
        _classCallCheck(this, PopHealthComponent);

        this.dialog = dialog;
        this.Router = Router;
        this.MainService = MainService;
        this.MedicineService = MedicineService;
        this.labPack = [];
        this.panelOpenState = false;
      }

      _createClass(PopHealthComponent, [{
        key: "openDialog",
        value: function openDialog() {
          var dialogRef = this.dialog.open(_iso_iso_component__WEBPACK_IMPORTED_MODULE_1__["ISOComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "openDialog2",
        value: function openDialog2() {
          var dialogRef = this.dialog.open(_nabl_nabl_component__WEBPACK_IMPORTED_MODULE_2__["NABLComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.Router.params.subscribe(function (params) {
            console.log("PopHealthComponent -> ngOnInit -> params", params["id"]);
            _this.LabId = params["id"];
            _this.packType = params["type"];
          });

          if (this.packType == "package") {
            this.getPackagesApi();
          } else if (this.packType == "profile") {
            this.getProfileApi();
          } else if (this.packType == "test") {
            this.getTESTApi();
          }

          this.getRew();
        }
      }, {
        key: "getTESTApi",
        value: function getTESTApi() {
          var _this2 = this;

          this.MainService.getTestById(this.LabId).then(function (resData) {
            var _a, _b, _c, _d;

            _this2.labPack = resData.data;
            _this2.title = (_a = _this2.labPack[0].testId) === null || _a === void 0 ? void 0 : _a.title;
            _this2.length = _this2.labPack[0].length; // this.price = this.labPack[0].testId?.yourPrice

            _this2.mrp = _this2.labPack[0].mrp;
            _this2.offerPercent = _this2.labPack[0].discountOffer;
            _this2.lName = (_b = _this2.labPack[0].labId) === null || _b === void 0 ? void 0 : _b.name;
            _this2.lAbout = (_c = _this2.labPack[0].labId) === null || _c === void 0 ? void 0 : _c.about;
            _this2.discription = _this2.labPack[0].description;
            _this2.precaution = (_d = _this2.labPack[0].testId) === null || _d === void 0 ? void 0 : _d.precautions;
            _this2.discount = parseInt(_this2.mrp) * parseInt(_this2.offerPercent) / 100;
            _this2.price = parseInt(_this2.mrp) - _this2.discount;
          })["catch"](function (err) {
            console.log("🚀 ~ file: pop-health.component.ts ~ line 99 ~ PopHealthComponent ~ this.MainService.getTestById ~ err", err);
          });
        }
      }, {
        key: "getProfileApi",
        value: function getProfileApi() {
          var _this3 = this;

          this.TestDetails = [];
          this.MainService.getProfileById(this.LabId).then(function (resData) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

            _this3.labPack = resData.data;
            _this3.title = (_b = (_a = _this3.labPack) === null || _a === void 0 ? void 0 : _a.profile) === null || _b === void 0 ? void 0 : _b.title;
            _this3.length = (_d = (_c = _this3.labPack) === null || _c === void 0 ? void 0 : _c.profileTests) === null || _d === void 0 ? void 0 : _d.length;
            _this3.price = (_f = (_e = _this3.labPack) === null || _e === void 0 ? void 0 : _e.profile) === null || _f === void 0 ? void 0 : _f.yourPrice;
            _this3.mrp = (_h = (_g = _this3.labPack) === null || _g === void 0 ? void 0 : _g.profile) === null || _h === void 0 ? void 0 : _h.mrp;
            _this3.offerPercent = (_k = (_j = _this3.labPack) === null || _j === void 0 ? void 0 : _j.profile) === null || _k === void 0 ? void 0 : _k.offerPercent;
            _this3.lName = (_o = (_m = (_l = _this3.labPack) === null || _l === void 0 ? void 0 : _l.profile) === null || _m === void 0 ? void 0 : _m.labId) === null || _o === void 0 ? void 0 : _o.name;
            _this3.discription = (_q = (_p = _this3.labPack) === null || _p === void 0 ? void 0 : _p.profile) === null || _q === void 0 ? void 0 : _q.description;
            _this3.precaution = (_s = (_r = _this3.labPack) === null || _r === void 0 ? void 0 : _r.profile) === null || _s === void 0 ? void 0 : _s.precaution;
            _this3.PProfile = _this3.labPack.profileTests;

            _this3.labPack.profileTests.forEach(function (element) {
              var _a, _b;

              (_a = element) === null || _a === void 0 ? void 0 : _a.testId;

              _this3.TestDetails.push((_b = element) === null || _b === void 0 ? void 0 : _b.testId);
            });
          })["catch"](function (err) {
            console.log("🚀 ~ file: pop-health.component.ts ~ line 68 ~ PopHealthComponent ~ this.MainService.getDataFormProfile ~ err", err);
          });
        }
      }, {
        key: "getPackagesApi",
        value: function getPackagesApi() {
          var _this4 = this;

          this.MainService.getAllDtailsLabs(this.LabId).then(function (resData) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

            _this4.labPack = resData.data;
            _this4.title = (_b = (_a = _this4.labPack) === null || _a === void 0 ? void 0 : _a["package"]) === null || _b === void 0 ? void 0 : _b.title;
            _this4.length = (_d = (_c = _this4.labPack) === null || _c === void 0 ? void 0 : _c.packageProfiles) === null || _d === void 0 ? void 0 : _d.length;
            _this4.price = (_f = (_e = _this4.labPack) === null || _e === void 0 ? void 0 : _e["package"]) === null || _f === void 0 ? void 0 : _f.yourPrice;
            _this4.mrp = (_h = (_g = _this4.labPack) === null || _g === void 0 ? void 0 : _g["package"]) === null || _h === void 0 ? void 0 : _h.mrp;
            _this4.offerPercent = (_k = (_j = _this4.labPack) === null || _j === void 0 ? void 0 : _j["package"]) === null || _k === void 0 ? void 0 : _k.offerPercent;
            _this4.lName = (_o = (_m = (_l = _this4.labPack) === null || _l === void 0 ? void 0 : _l["package"]) === null || _m === void 0 ? void 0 : _m.labId) === null || _o === void 0 ? void 0 : _o.name;
            _this4.discription = (_q = (_p = _this4.labPack) === null || _p === void 0 ? void 0 : _p["package"]) === null || _q === void 0 ? void 0 : _q.description;
            _this4.precaution = (_s = (_r = _this4.labPack) === null || _r === void 0 ? void 0 : _r["package"]) === null || _s === void 0 ? void 0 : _s.precaution;
            _this4.PProfile = _this4.labPack.packageProfiles;
          })["catch"](function (err) {
            console.log("PopHealthComponent -> ngOnInit -> err", err);
          });
        }
      }, {
        key: "getRew",
        value: function getRew() {
          this.MainService.getCustReview(this.labPack.labId).then(function (ReviewRes) {});
        }
      }, {
        key: "AddTocart",
        value: function AddTocart(val2, val3) {
          var _this5 = this;

          console.log("PopHealthComponent -> AddTocart -> val2,val3", val2, val3);
          var data4;
          this.packType == 'test' ? data4 = {
            testId: this.LabId
          } : this.packType == 'profile' ? data4 = {
            profiledId: this.LabId
          } : this.packType == 'package' ? data4 = {
            packageId: this.LabId
          } : 'null';
          var data5 = Object.assign(Object.assign({}, data4), {
            ammount: val2,
            labId: val3,
            type: this.packType == 'test' ? 'Test' : this.packType == 'profile' ? 'Profile' : this.packType == 'package' ? 'Package' : 'Package'
          });
          this.MedicineService.PostPackageInCart(data5).then(function (resData) {
            _this5.MedicineService.Check(resData);
          })["catch"](function (err) {
            console.log("🚀 ~ file: pop-health.component.ts ~ line 156 ~ PopHealthComponent ~ this.MedicineService.PostPackageInCart ~ err", err);
          });
        }
      }]);

      return PopHealthComponent;
    }();

    PopHealthComponent.ɵfac = function PopHealthComponent_Factory(t) {
      return new (t || PopHealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_medicine_service__WEBPACK_IMPORTED_MODULE_6__["MedicineService"]));
    };

    PopHealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopHealthComponent,
      selectors: [["app-pop-health"]],
      decls: 276,
      vars: 16,
      consts: [[1, "container-fluid", "labdetailedSet", 2, "padding", "0px", "min-height", "660px"], [1, "container", "style-view"], [1, "row", "style-package-detail-wrapper", "tery"], [1, "col-lg-3", "style-provided-by-header", "tabSectionforLab"], [1, "style-desktop-view-4"], [1, "style-provided-package-by-wrapper"], [1, "style-lab-detail-wrapper"], [1, "sectionTabSet", "testDetails"], [1, "tabHeading", "activeSection"], [1, "sectionTabSet", "overview"], [1, "tabHeading"], [1, "sectionTabSet", "InterpretingResult"], [1, "sectionTabSet", "testInclude"], [1, "col-lg-6", "col-sm-12", "style-desktop-view"], [1, "row", "style-package-card-wrapper"], [1, "col-lg-12", "col-sm-12", "style-card-wrapper"], [1, "row", "style-margin-top", "style-margin-bottom"], [1, "col-lg-7", "col-sm-7"], [1, "style-test-package-name"], [1, "row", "style-include-tests"], [1, "col-lg-12", "col-sm-12"], ["class", "style-abbreviation", 4, "ngIf"], [1, "col-lg-6", "col-sm-5", "style-right-align"], [1, "row", "style-price-info", "style-display-inline"], [1, "col-lg-12", "col-sm-12", "text-right", "style-right-align", "style-payable-wrapper"], ["data-tip", "true", "data-for", "2763", "currentitem", "false", 1, "style-pointer"], [1, "style-opaque"], [1, "style-mrp"], [1, "text-right", "style-price-section"], [1, "style-discount-percent"], [1, "fa-stack", "style-info-icon"], [1, "fa", "fa-circle-thin", "fa-stack-2x"], [1, "fa", "fa-info", "fa-stack-1x"], ["data-id", "tooltip", 1, "react-component-tooltip", "place-right", "type-light", "style-tooltip", 2, "left", "733px", "top", "181px"], [1, "style-container"], [1, "style-description"], ["color", "#1aab2a"], [1, "row"], [1, "col-xs-6", "style-total-savings"], [1, "col-xs-6", "style-price"], [1, "col-xs-8", "col-lg-12", "col-sm-12", "style-lab-name"], ["href", "", 1, "button-text", "style-lab-link"], [1, "col-xs-12", "col-sm-12"], [1, "style-star-rating-font"], [1, "StarRating-rating-5-0", "StarRating-star-rating-card", "StarRating-desktop-view"], [1, "StarRating-star-icon"], ["aria-hidden", "true", 1, "fa", "fa-star", "StarRating-rating-star"], [1, "style-accreditation", "style-accreditation-desktop"], [1, "row", "style-margin-top-cart"], [1, "col-lg-12", "col-sm-12", "text-right-add", "style-add-to-card"], [1, "style-text-button", "style-desktop-view", 3, "click"], [1, "style-desktop-view-2"], [1, "style-header"], ["id", "Overview", 1, "row", "style-overview-block-wrapper"], [1, "col-xs-12", "style-packages-desc-wrapper"], [1, "style-sub-header"], [1, "style-text"], [1, "col-xs-12", "style-precautions-wrapper"], [1, "style-sub-header", "style-precautions-sub-header"], [1, "style-precautions"], [1, "row", "style-included-tests-wrapper"], [1, "style-included-tests"], [1, "col-xs-12", "col-sm-12", "style-accordion-wrapper"], ["id", "accordion", 1, "labTestCollapse"], [1, "card"], [1, "card-header"], ["data-toggle", "collapse", "href", "#collapseOne", 1, "card-link"], ["id", "collapseOne", "data-parent", "#accordion", 1, "collapse", "show"], [1, "card-body"], ["data-toggle", "collapse", "href", "#collapseTwo", 1, "collapsed", "card-link"], ["id", "collapseTwo", "data-parent", "#accordion", 1, "collapse"], ["data-toggle", "collapse", "href", "#collapseThree", 1, "collapsed", "card-link"], ["id", "collapseThree", "data-parent", "#accordion", 1, "collapse"], [4, "ngIf"], [1, "col-lg-3", "style-provided-by-header"], [1, "row", "style-name-img-wrapper"], [1, "col-lg-12", "col-sm-12", "style-lab-name-locality"], ["href", "/new-delhi/diagnostic-centers/1mglabs-95", 1, "style-lab-star"], [1, "style-lab-name"], [1, "style-hr-m-0"], [1, "style-star-wrapper"], [1, "StarRating-rating-5-0", "StarRating-star-rating", "StarRating-desktop-view"], [1, "style-hr-m"], [1, "style-accred-div"], [1, "style-desktop-view-5"], [1, "row", "style-logos"], [1, "col-lg-2", "col-xs-3", "style-logo-dimension", 3, "click"], ["role", "presentation", "src", "https://s3.ap-south-1.amazonaws.com/stag-1mg-auto-resize-image/pharmacy-production-rxs/2b6e1cd8-afac-4fe8-a88a-1ac5e3621633.png", 1, "style-logo-params", 2, "width", "50px", "height", "50px"], [1, "style-accreditation-aboutLab"], ["role", "presentation", "src", "https://s3.ap-south-1.amazonaws.com/stag-1mg-auto-resize-image/pharmacy-production-rxs/f2cf720d-6833-4133-af52-47619e3315a7.png", 1, "style__logo-params___1x1Mf", 2, "width", "50px", "height", "50px"], [1, "style-lab-description"], [1, "style-lab-detail-pad"], [1, "style-lab-detail"], ["href", "", 1, "style-know-more"], [1, "style-review-wrapper"], [1, "style-lab-detail-wrapper", "style-ser-reviews-wrapper"], [1, "Reviews-desktop-view"], [1, "Reviews-lab-review-container"], [1, "Reviews-review-box"], [1, "Reviews-review-init", 2, "background-color", "rgb(74, 163, 223)"], [1, "Reviews-review-remark"], [1, "Reviews-reviewer-name"], [1, "Reviews-reviewer-remark"], [1, "Reviews-review-init", 2, "background-color", "rgb(231, 76, 60)"], ["href", ""], [1, "style-lab-reviews-see-more"], [1, "style-top-bar"], [1, "style-top-head-"], [1, "style-flex-box", "style-stats-bar"], [1, "style-stats-num"], [1, "style-stats-text"], [1, "style-border-btm"], [1, "style-flex-box", "style-down-bar"], [1, "style-free-text", "style-f20"], [1, "style-input-box"], ["type", "tel", "id", "phoneNumber", "placeholder", "Enter Phone Number", "maxlength", "10", "autocomplete", "off", "value", "", "pattern", "[6-9]\\d{9}", "title", "Please enter valid 10 digits", "required", "", 1, "style-input-phone"], ["type", "submit", 1, "style-next-button"], [1, "style__cap-wrap___38IWm"], [1, "style-abbreviation"], ["hideToggle", "", "disabled", "", 4, "ngFor", "ngForOf"], ["hideToggle", "", "disabled", ""], [1, "text-black"], ["alt", "", 2, "width", "30px", "height", "30px", "border-radius", "50%", 3, "src"], [2, "padding-left", "10px"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [4, "ngFor", "ngForOf"]],
      template: function PopHealthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Test Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Interpreting Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tests Included");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PopHealthComponent_div_28_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u20B9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u20B9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " + 50% Coupon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Coupon code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "font", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " COMP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " applied. You have received an additional discount of 50%. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Total Savings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " \u20B99761 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " 4.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " ISO, NABL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopHealthComponent_Template_span_click_86_listener() {
            return ctx.AddTocart(ctx.price, ctx.labPack[0].labId._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " ADD TO CART ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h3", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Precautions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " (92 tests) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Complete Blood Count ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Differential leucocyte Count (includes 6 tests)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Absolute Monocyte Counts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "RDW SD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Red Blood Cell Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Platelet Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Packed Cell Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Hemoglobin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Total Leucocyte Count");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Red Cell Distribution Width");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Mean Corpuscular Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Mean Corpuscular Hemoglobin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Mean Corpuscular Hemoglobin Concentration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Mean Platelet Volume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Absolute Leucocyte Count (includes 6 tests)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Kidney Function Test ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Urea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Creatinine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Uric Acid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Liver Function Test ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Alanine Transaminase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Aspartate Aminotransferase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Protein Total, Serum (includes 4 tests)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Alkaline Phosphatase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Bilirubin (Total, Direct and Indirect) (includes 3 tests)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, PopHealthComponent_div_179_Template, 2, 1, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, PopHealthComponent_div_180_Template, 2, 1, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h2", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "hr", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " 4.9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "hr", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopHealthComponent_Template_div_click_206_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " ISO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopHealthComponent_Template_div_click_210_listener() {
            return ctx.openDialog2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " NABL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Know More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " User Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "hr", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " S ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Suraj Chauham ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Phlebo approached timely and reports also received timely. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " N ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Nilesh Wanjari ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Collection person was exellent in his work,painless collection,well groomed,i'm satisfied by your service. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " +more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " INDIA\u2019S LARGEST HEALTHCARE PLATFORM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " 150M+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Visitors ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " 25M+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Orders Delivered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " 1000+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Cities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Get the link to download App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "button", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Send Link ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.packType != "test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mrp, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.offerPercent, "% Off ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Overview of ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("How ", ctx.title, " helps you?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.discription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.precaution, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Package Tests Included in ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.packType == "profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.packType == "package");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.discription, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 116px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.col-xs-1[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-xs-2[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-xs-3[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-xs-4[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-xs-5[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-xs-6[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-xs-7[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-xs-8[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-xs-9[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-xs-10[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-xs-11[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-xs-12[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-lg-5[_ngcontent-%COMP%] {\n  width: 41.66666667%;\n}\n\n.style-card-wrapper[_ngcontent-%COMP%] {\n  height: 146px;\n  border-radius: 5px;\n  border: 0.5px solid rgba(117, 117, 117, 0.4);\n}\n\n.style-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.style-margin-top[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.style-mrp[_ngcontent-%COMP%], .style-test-package-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #4a4a4a;\n}\n\n.style-test-package-name[_ngcontent-%COMP%] {\n  margin: 0;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  display: block;\n  display: -webkit-box;\n  height: auto;\n  line-height: 20px;\n  text-overflow: ellipsis;\n}\n\n.style-include-tests[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  line-height: 0;\n}\n\n.style-abbreviation[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.style-abbreviation[_ngcontent-%COMP%], .style-opaque[_ngcontent-%COMP%] {\n  opacity: 0.87;\n  text-align: left;\n  color: #757575;\n  font-size: 14px;\n}\n\n.clearfix[_ngcontent-%COMP%]:after, .row[_ngcontent-%COMP%]:after, .ui-autocomplete[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  display: table;\n  content: \"\";\n  clear: both;\n}\n\n.style-abbreviation[_ngcontent-%COMP%], .style-opaque[_ngcontent-%COMP%] {\n  opacity: 0.87;\n  text-align: left;\n  color: #757575;\n  font-size: 14px;\n}\n\n.style-opaque[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  text-decoration: line-through;\n}\n\n.style-mrp[_ngcontent-%COMP%], .style-test-package-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #4a4a4a;\n}\n\n.style-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.style-display-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.style-price-info[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.style-payable-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-left: 298px;\n  margin-top: -33px;\n}\n\n.style-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.style-abbreviation[_ngcontent-%COMP%], .style-opaque[_ngcontent-%COMP%] {\n  opacity: 0.87;\n  text-align: left;\n  color: #757575;\n  font-size: 14px;\n}\n\n.style-opaque[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.style-price-section[_ngcontent-%COMP%] {\n  text-align: right;\n  display: inline-block;\n  margin-right: -322px;\n}\n\n.style-discount-percent[_ngcontent-%COMP%] {\n  color: #1aab2a;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px dashed #1aab2a;\n  background-color: rgba(26, 171, 42, 0.05);\n  padding: 3px;\n}\n\n.react-component-tooltip.place-top[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n.react-component-tooltip.type-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #222;\n}\n\n.react-component-tooltip[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n\n.react-component-tooltip.place-top[_ngcontent-%COMP%]:before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.react-component-tooltip[_ngcontent-%COMP%]:before, .react-component-tooltip[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.react-component-tooltip.type-dark.place-top[_ngcontent-%COMP%]:after {\n  border-top-color: #222;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n\n.react-component-tooltip.place-top[_ngcontent-%COMP%]:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  bottom: -6px;\n  left: 50%;\n  margin-left: -8px;\n}\n\n.react-component-tooltip[_ngcontent-%COMP%]:before, .react-component-tooltip[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.style-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.style-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.43;\n  text-align: left;\n  color: rgba(117, 117, 117, 0.87);\n}\n\n.style-total-savings[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: left;\n  color: #4a4a4a;\n  padding-right: 0;\n}\n\n.col-xs-6[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.style-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  text-align: right;\n  color: #4a4a4a;\n  padding-left: 0;\n}\n\n.style-desktop-view-2[_ngcontent-%COMP%]   .style-header[_ngcontent-%COMP%] {\n  opacity: 0.87;\n  font-size: 16px;\n  font-weight: 700;\n  color: #212121;\n  margin-left: -15px;\n  margin-top: 30px;\n}\n\n.style-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.style-desktop-view-2[_ngcontent-%COMP%]   .style-overview-block-wrapper[_ngcontent-%COMP%] {\n  margin-left: -15px;\n}\n\n.style-desktop-view-2[_ngcontent-%COMP%]   .style-sub-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 12px;\n}\n\n.style-sub-header[_ngcontent-%COMP%] {\n  text-align: left;\n  color: rgba(33, 33, 33, 0.87);\n}\n\n.style-desktop-view-2[_ngcontent-%COMP%]   .style-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.71;\n  padding-right: 50px;\n}\n\n.style-text[_ngcontent-%COMP%] {\n  text-align: left;\n  color: rgba(33, 33, 33, 0.87);\n  margin-top: 12px;\n}\n\n.style-desktop-view-2[_ngcontent-%COMP%]   .style-precautions[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.style-precautions[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #997b3d;\n  padding: 16px;\n  background-color: #fdf1d9;\n  text-align: justify;\n  width: 630px;\n}\n\n.style-desktop-view-2[_ngcontent-%COMP%]   .style-precautions[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.style-precautions[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #997b3d;\n  padding: 16px;\n  background-color: #fdf1d9;\n  text-align: justify;\n}\n\n.style-included-tests-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 25px;\n}\n\n.style-desktop-view[_ngcontent-%COMP%]   .style-header[_ngcontent-%COMP%] {\n  opacity: 0.87;\n  font-size: 16px;\n  font-weight: 700;\n  color: #212121;\n}\n\n.style-header[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.style-included-tests[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: #757575;\n}\n\n.style-desktop-view[_ngcontent-%COMP%]   .style-accordion-wrapper[_ngcontent-%COMP%] {\n  margin-left: -10px;\n}\n\n.style-accordion[_ngcontent-%COMP%] {\n  border: none;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-top: -10px;\n}\n\n.style-collapsible[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 1rem;\n  padding-left: 0;\n}\n\n.style-coll-style[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.style-desktop-view-3[_ngcontent-%COMP%]   .style-collapsible-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.style-collapsible-header[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #212121;\n  padding: 15px 1rem;\n  display: block;\n  border-bottom: none;\n}\n\n.style-collapsible-body[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  transition: height 0.25s ease-in;\n}\n\n.style-sub-coll-body[_ngcontent-%COMP%] {\n  padding: 0 15px 5px;\n  font-family: clear_sans_light_regular, sans-serif;\n  text-align: justify;\n  font-size: 12px;\n  color: rgba(117, 117, 117, 0.87);\n  margin-left: 15px;\n}\n\n.style-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.style-sub-title[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(117, 117, 117, 0.87);\n}\n\n.style-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.fa[_ngcontent-%COMP%], .style-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0);\n}\n\n.style-collapsible-body[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n  transition: height 0.25s ease-in;\n}\n\n.style-sub-coll-body[_ngcontent-%COMP%] {\n  padding: 0 15px 5px;\n  font-family: clear_sans_light_regular, sans-serif;\n  text-align: justify;\n  font-size: 12px;\n  color: rgba(117, 117, 117, 0.87);\n  margin-left: 15px;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: flow-root;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  z-index: 1;\n  padding-right: 289px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.style-provided-package-by-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  padding: 0 10px 10px;\n}\n\n.style-desktop-view-4[_ngcontent-%COMP%]   .style-lab-detail-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #fff;\n}\n\n.style-lab-detail-wrapper[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n\n.style-name-img-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.style-desktop-view-4[_ngcontent-%COMP%]   .style-lab-name-locality[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.style-lab-name-locality[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.style-desktop-view-4[_ngcontent-%COMP%]   .style-lab-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.style-lab-name[_ngcontent-%COMP%] {\n  letter-spacing: -0.5px;\n  color: #ff6f61;\n  font-size: 24px;\n  margin: 0;\n}\n\n.style-desktop-view-4[_ngcontent-%COMP%]   .style-star-wrapper[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  right: 17px;\n}\n\n.StarRating-rating-5-0[_ngcontent-%COMP%] {\n  background-color: #1aaa2a;\n}\n\n.StarRating-star-rating[_ngcontent-%COMP%] {\n  font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  display: inline-block;\n  color: #fff;\n  border-radius: 2px;\n  min-width: 34px;\n  padding: 2px;\n  display: inline-flex;\n  justify-content: space-evenly;\n  margin-left: 13rem;\n}\n\n.StarRating-star-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.StarRating-rating-star[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\n.style-hr-m-0[_ngcontent-%COMP%], .style-hr-m[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.style-accred-div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.style-desktop-view-5[_ngcontent-%COMP%]   .style-logos[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.style-logos[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.style-desktop-view-5[_ngcontent-%COMP%]   .style-logo-dimension[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.style-logo-dimension[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.style-desktop-view-5[_ngcontent-%COMP%]   .style-logo-params[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.style-accreditation-aboutLab[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n  color: #ff6f61;\n  margin-top: 5px;\n}\n\n.style-desktop-view[_ngcontent-%COMP%]   .style-lab-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 12px;\n  margin-bottom: 10px;\n}\n\n.style-lab-detail-pad[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.style-lab-detail[_ngcontent-%COMP%] {\n  line-height: 1.71;\n}\n\n.style-review-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.style-desktop-view[_ngcontent-%COMP%]   .style-lab-detail-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: #fff;\n}\n\n.style-lab-detail-wrapper[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n\n.style-desktop-view[_ngcontent-%COMP%]   .style-lab-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.style-lab-name[_ngcontent-%COMP%] {\n  letter-spacing: -0.5px;\n  color: #ff6f61;\n  font-size: 18px;\n  margin: 0;\n}\n\n.style-hr-m-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.style-hr-m-0[_ngcontent-%COMP%], .style-hr-m[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.Reviews-lab-review-container[_ngcontent-%COMP%] {\n  font-family: clear_sans_regular, sans-serif;\n}\n\n.Reviews-review-box[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 10px 0;\n}\n\n.Reviews-review-init[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  width: 32px;\n  height: 32px;\n  font-size: 14px;\n  line-height: 30px;\n  border-radius: 16px;\n  text-align: center;\n  color: #fff;\n  display: inline-block;\n  position: absolute;\n  top: 10px;\n}\n\n.Reviews-review-remark[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 5px;\n  width: 80%;\n  margin-left: 35px;\n}\n\n.Reviews-reviewer-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  text-align: left;\n  color: rgba(33, 33, 33, 0.87);\n  margin-bottom: 8px;\n}\n\n.Reviews-reviewer-remark[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: rgba(78, 78, 78, 0.87);\n}\n\n.style-desktop-view[_ngcontent-%COMP%]   .style-lab-reviews-see-more[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.style-lab-reviews-see-more[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  color: #ff6f61;\n  font-weight: 500;\n}\n\n.style-top-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.12);\n}\n\n.style-top-head-[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 24px 0;\n  margin: 0;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.style-flex-box[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.style-stats-bar[_ngcontent-%COMP%] {\n  color: #000;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n\n.style-stats-num[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.style-stats-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.style-border-btm[_ngcontent-%COMP%] {\n  height: 1px;\n  border: 1px solid #eaeaea;\n  z-index: 9999;\n  width: 90%;\n  margin: 24px auto;\n  left: 5%;\n}\n\n.style-down-bar[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n  background-color: #fff;\n  align-items: center;\n  justify-content: center;\n  overflow-x: hidden;\n}\n\n.style-f20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.style-free-text[_ngcontent-%COMP%] {\n  margin-right: 36px;\n  margin-top: -1rem;\n}\n\n.style-input-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  border: none;\n  display: inline-block;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:invalid {\n  outline: none;\n  box-shadow: none;\n  border: none;\n  color: #000;\n}\n\n.style-input-phone[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 300px;\n  border: none;\n  background-color: #f1f4f6;\n  padding-left: 15px;\n  vertical-align: middle;\n  color: #000;\n}\n\n.style-next-button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #ff6f61;\n  width: 112px;\n  height: 40px;\n  margin-left: 8px;\n  border: none;\n  vertical-align: middle;\n  color: #fff;\n}\n\n.style-box-wrap[_ngcontent-%COMP%], .style-cap-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  display: inline;\n  border: none;\n}\n\n.style-margin-top-cart[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.style-add-to-card[_ngcontent-%COMP%] {\n  margin-top: -26px;\n  margin-bottom: 24px;\n  margin-left: -9px;\n}\n\n.text-right-add[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.style-text-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #ff6f61;\n  cursor: pointer;\n}\n\n.style-city-searchbar-wrapper[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 46px;\n  margin-top: 92px;\n}\n\n.style-location-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  height: 46px;\n  background-color: #fff;\n}\n\n.style-wrapper[_ngcontent-%COMP%]   .style-desktop-view-search[_ngcontent-%COMP%] {\n  padding: 6px 0 15px 52px;\n}\n\n.style-cities-content[_ngcontent-%COMP%] {\n  max-height: 400px;\n  border-radius: 3px;\n}\n\n.text-left-search[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.style-input-field[_ngcontent-%COMP%] {\n  margin: 0;\n  position: relative;\n}\n\n.style-location-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n  color: #616161;\n  opacity: 0.8;\n  font-size: 16px;\n}\n\n.style-input-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border: none;\n}\n\n.style-input-field[_ngcontent-%COMP%]   .style-autocomplete-bar[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-left: 26px;\n  color: #212121;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.style-icon-detect[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  transform: translateZ(0);\n  transition: transform 0.2s ease;\n  display: inline-block;\n  position: absolute;\n  right: 8px;\n  height: 73%;\n  top: 50%;\n  transform: translate3d(0, -50%, 0);\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.style-hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.style-loader-city-detect[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.style-search-bar[_ngcontent-%COMP%] {\n  height: 46px;\n  background-color: #fff;\n}\n\n.style-bottom-middle[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.style-wrapper[_ngcontent-%COMP%]   .style-desktop-view-search[_ngcontent-%COMP%] {\n  padding-top: 6px;\n}\n\n.style-wrapper[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.style-labs-select[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  width: 29%;\n}\n\n.style-wrapper-s[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.style-desktop-view-s1[_ngcontent-%COMP%] {\n  background-color: #f1f4f6;\n}\n\n.style-select[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  height: 34px;\n  width: 100%;\n  border-radius: 3px;\n  background-color: #f1f4f6;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  font-family: Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\n  color: #a9a9a9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px 0 0 3px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.style-desktop-view-s1.style-select[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.style-desktop-view-s1[_ngcontent-%COMP%]   .style-filter[_ngcontent-%COMP%] {\n  max-width: calc(100% - 40px);\n}\n\n.style-filter[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 8px 15px 8px 14px;\n}\n\n.style-desktop-view-s1[_ngcontent-%COMP%]   .style-display-text[_ngcontent-%COMP%] {\n  max-width: 90%;\n  font-weight: 500;\n}\n\n.style-display-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  height: 17px;\n}\n\n.style-action[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n  padding: 8px 15px;\n  height: 100%;\n}\n\n.style-desktopStyle[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 2px;\n}\n\n.style-wrapper-s1[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -1px;\n}\n\n.style-fs-12[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.style-desktop-view-s2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #212121;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.style-input-s1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  padding: 7px 15px 8px;\n  font-family: Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\n  color: #757575;\n  border-radius: 0 3px 3px 0;\n  background-position: 98% 52%;\n}\n\n.fa-location[_ngcontent-%COMP%] {\n  content: \"/f601\";\n  font-family: \"FontAwesome\";\n}\n\n.style-lab-name[_ngcontent-%COMP%] {\n  line-height: 23px;\n  overflow: hidden;\n}\n\na.button-text.style-lab-link[_ngcontent-%COMP%] {\n  color: #3e3e3e;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.col-xs-12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.style-star-rating-font[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.StarRating-rating-5-0[_ngcontent-%COMP%] {\n  background-color: #1aaa2a;\n}\n\n.StarRating-star-rating-card[_ngcontent-%COMP%] {\n  font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  display: inline-block;\n  color: #fff;\n  border-radius: 2px;\n  min-width: 34px;\n  padding: 2px;\n  display: inline-flex;\n  justify-content: space-evenly;\n}\n\n.style-accreditation.style-accreditation-desktop[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: inline-block;\n  color: #757575;\n  margin-left: 5px;\n  opacity: 0.87;\n  text-align: left;\n}\n\n.fa-stack[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  line-height: 2em;\n  vertical-align: middle;\n  color: red;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rdGVzdHMvcG9wLWhlYWx0aC9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGJvb2t0ZXN0c1xccG9wLWhlYWx0aFxccG9wLWhlYWx0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ib29rdGVzdHMvcG9wLWhlYWx0aC9wb3AtaGVhbHRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnREUsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRE9BO0VBQ0UsZ0JBQUE7QUNKRjs7QURPQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSkY7O0FETUE7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBREtBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7OztFQUdFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBOztFQUVFLGFBQUE7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Q0EscUJBQUE7RUFDQSxxRUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUdBLDRCQUFBO0FDd0JGOztBRHJCQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUN3QkY7O0FEckJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ3dCRjs7QURyQkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN3QkY7O0FEckJBO0VBQ0UsV0FBQTtBQ3dCRjs7QURyQkE7RUFDRSxlQUFBO0FDd0JGOztBRHJCQTtFQUNFLHlCQUFBO0FDd0JGOztBRHJCQTtFQUNFLGlFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ3dCRjs7QURyQkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUN3QkY7O0FEckJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsZ0JBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsWUFBQTtBQzBCRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va3Rlc3RzL3BvcC1oZWFsdGgvcG9wLWhlYWx0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMTZweDtcclxufVxyXG5cclxuLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgd2lkdGg6IDExNzBweDtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4uY29sLXhzLTEsXHJcbi5jb2wtc20tMSxcclxuLmNvbC1tZC0xLFxyXG4uY29sLWxnLTEsXHJcbi5jb2wteHMtMixcclxuLmNvbC1zbS0yLFxyXG4uY29sLW1kLTIsXHJcbi5jb2wtbGctMixcclxuLmNvbC14cy0zLFxyXG4uY29sLXNtLTMsXHJcbi5jb2wtbWQtMyxcclxuLmNvbC1sZy0zLFxyXG4uY29sLXhzLTQsXHJcbi5jb2wtc20tNCxcclxuLmNvbC1tZC00LFxyXG4uY29sLWxnLTQsXHJcbi5jb2wteHMtNSxcclxuLmNvbC1zbS01LFxyXG4uY29sLW1kLTUsXHJcbi5jb2wtbGctNSxcclxuLmNvbC14cy02LFxyXG4uY29sLXNtLTYsXHJcbi5jb2wtbWQtNixcclxuLmNvbC1sZy02LFxyXG4uY29sLXhzLTcsXHJcbi5jb2wtc20tNyxcclxuLmNvbC1tZC03LFxyXG4uY29sLWxnLTcsXHJcbi5jb2wteHMtOCxcclxuLmNvbC1zbS04LFxyXG4uY29sLW1kLTgsXHJcbi5jb2wtbGctOCxcclxuLmNvbC14cy05LFxyXG4uY29sLXNtLTksXHJcbi5jb2wtbWQtOSxcclxuLmNvbC1sZy05LFxyXG4uY29sLXhzLTEwLFxyXG4uY29sLXNtLTEwLFxyXG4uY29sLW1kLTEwLFxyXG4uY29sLWxnLTEwLFxyXG4uY29sLXhzLTExLFxyXG4uY29sLXNtLTExLFxyXG4uY29sLW1kLTExLFxyXG4uY29sLWxnLTExLFxyXG4uY29sLXhzLTEyLFxyXG4uY29sLXNtLTEyLFxyXG4uY29sLW1kLTEyLFxyXG4uY29sLWxnLTEyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY29sLWxnLTUge1xyXG4gIHdpZHRoOiA0MS42NjY2NjY2NyU7XHJcbn1cclxuXHJcbi5zdHlsZS1jYXJkLXdyYXBwZXIge1xyXG4gIGhlaWdodDogMTQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgaHNsYSgwLCAwJSwgNDYlLCAwLjQpO1xyXG59XHJcblxyXG4uc3R5bGUtbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uc3R5bGUtbWFyZ2luLXRvcCB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLnN0eWxlLW1ycCxcclxuLnN0eWxlLXRlc3QtcGFja2FnZS1uYW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxufVxyXG4uc3R5bGUtdGVzdC1wYWNrYWdlLW5hbWUge1xyXG4gIG1hcmdpbjogMDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnN0eWxlLWluY2x1ZGUtdGVzdHMge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuLnN0eWxlLWFiYnJldmlhdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uc3R5bGUtYWJicmV2aWF0aW9uLFxyXG4uc3R5bGUtb3BhcXVlIHtcclxuICBvcGFjaXR5OiAwLjg3O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIsXHJcbi5yb3c6YWZ0ZXIsXHJcbi51aS1hdXRvY29tcGxldGUgPiBsaTphZnRlciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnN0eWxlLWFiYnJldmlhdGlvbixcclxuLnN0eWxlLW9wYXF1ZSB7XHJcbiAgb3BhY2l0eTogMC44NztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc3R5bGUtb3BhcXVlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi5zdHlsZS1tcnAsXHJcbi5zdHlsZS10ZXN0LXBhY2thZ2UtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM0YTRhNGE7XHJcbn1cclxuXHJcbi5zdHlsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdHlsZS1kaXNwbGF5LWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zdHlsZS1wcmljZS1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uc3R5bGUtcGF5YWJsZS13cmFwcGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDI5OHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zM3B4O1xyXG59XHJcblxyXG4uc3R5bGUtcG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3R5bGUtYWJicmV2aWF0aW9uLFxyXG4uc3R5bGUtb3BhcXVlIHtcclxuICBvcGFjaXR5OiAwLjg3O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zdHlsZS1vcGFxdWUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLnN0eWxlLXByaWNlLXNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IC0zMjJweDtcclxufVxyXG5cclxuLnN0eWxlLWRpc2NvdW50LXBlcmNlbnQge1xyXG4gIGNvbG9yOiAjMWFhYjJhO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMWFhYjJhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE3MSwgNDIsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLnJlYWN0LWNvbXBvbmVudC10b29sdGlwLnBsYWNlLXRvcCB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcC50eXBlLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGVmdDogLTk5OWVtO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcGFkZGluZzogOHB4IDIxcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcclxuICB0b3A6IC05OTllbTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXAucGxhY2UtdG9wOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogLThweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXA6YmVmb3JlLFxyXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnJlYWN0LWNvbXBvbmVudC10b29sdGlwLnR5cGUtZGFyay5wbGFjZS10b3A6YWZ0ZXIge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMyMjI7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogNnB4O1xyXG59XHJcblxyXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXAucGxhY2UtdG9wOmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogLTZweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbn1cclxuXHJcbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcDpiZWZvcmUsXHJcbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc3R5bGUtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDQ2JSwgMC44Nyk7XHJcbn1cclxuXHJcbi5zdHlsZS10b3RhbC1zYXZpbmdzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjNGE0YTRhO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb2wteHMtNiB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnN0eWxlLXByaWNlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtaGVhZGVyIHtcclxuICBvcGFjaXR5OiAwLjg3O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5zdHlsZS1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtb3ZlcnZpZXctYmxvY2std3JhcHBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG4uc3R5bGUtZGVza3RvcC12aWV3LTIgLnN0eWxlLXN1Yi1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5zdHlsZS1zdWItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuODcpO1xyXG59XHJcblxyXG4uc3R5bGUtZGVza3RvcC12aWV3LTIgLnN0eWxlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS43MTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5zdHlsZS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuODcpO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtcHJlY2F1dGlvbnMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc3R5bGUtcHJlY2F1dGlvbnMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzk5N2IzZDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYxZDk7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB3aWR0aDogNjMwcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtcHJlY2F1dGlvbnMge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uc3R5bGUtcHJlY2F1dGlvbnMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzk5N2IzZDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYxZDk7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnN0eWxlLWluY2x1ZGVkLXRlc3RzLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3AtdmlldyAuc3R5bGUtaGVhZGVyIHtcclxuICBvcGFjaXR5OiAwLjg3O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcbi5zdHlsZS1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zdHlsZS1pbmNsdWRlZC10ZXN0cyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXcgLnN0eWxlLWFjY29yZGlvbi13cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1hY2NvcmRpb24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1jb2xsYXBzaWJsZSB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gMCAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCA0NiUsIDAuNCk7XHJcbn1cclxuXHJcbi5zdHlsZS1jb2xsLXN0eWxlIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDQ2JSwgMC40KTtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy0zIC5zdHlsZS1jb2xsYXBzaWJsZS1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnN0eWxlLWNvbGxhcHNpYmxlLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzIxMjEyMTtcclxuICBwYWRkaW5nOiAxNXB4IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnN0eWxlLWNvbGxhcHNpYmxlLWJvZHkge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxufVxyXG5cclxuLnN0eWxlLXN1Yi1jb2xsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgMTVweCA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IGNsZWFyX3NhbnNfbGlnaHRfcmVndWxhciwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogaHNsYSgwLCAwJSwgNDYlLCAwLjg3KTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnN0eWxlLXBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0eWxlLXN1Yi10aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogaHNsYSgwLCAwJSwgNDYlLCAwLjg3KTtcclxufVxyXG5cclxuLnN0eWxlLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5mYSxcclxuLnN0eWxlLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG59XHJcblxyXG4uc3R5bGUtY29sbGFwc2libGUtYm9keSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG59XHJcblxyXG4uc3R5bGUtc3ViLWNvbGwtYm9keSB7XHJcbiAgcGFkZGluZzogMCAxNXB4IDVweDtcclxuICBmb250LWZhbWlseTogY2xlYXJfc2Fuc19saWdodF9yZWd1bGFyLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiBoc2xhKDAsIDAlLCA0NiUsIDAuODcpO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbG93LXJvb3Q7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcGFkZGluZy1yaWdodDogMjg5cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdHlsZS1wcm92aWRlZC1wYWNrYWdlLWJ5LXdyYXBwZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDEwcHggMTBweDtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy00IC5zdHlsZS1sYWItZGV0YWlsLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uc3R5bGUtbGFiLWRldGFpbC13cmFwcGVyIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5zdHlsZS1uYW1lLWltZy13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uc3R5bGUtZGVza3RvcC12aWV3LTQgLnN0eWxlLWxhYi1uYW1lLWxvY2FsaXR5IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5zdHlsZS1sYWItbmFtZS1sb2NhbGl0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy00IC5zdHlsZS1sYWItbmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN0eWxlLWxhYi1uYW1lIHtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gIGNvbG9yOiAjZmY2ZjYxO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXctNCAuc3R5bGUtc3Rhci13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG59XHJcblxyXG4uU3RhclJhdGluZy1yYXRpbmctNS0wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFhYTJhO1xyXG59XHJcbi5TdGFyUmF0aW5nLXN0YXItcmF0aW5nIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWluLXdpZHRoOiAzNHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXJnaW4tbGVmdDogMTNyZW07XHJcbn1cclxuXHJcbi5TdGFyUmF0aW5nLXN0YXItaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uU3RhclJhdGluZy1yYXRpbmctc3RhciB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLnN0eWxlLWhyLW0tMCxcclxuLnN0eWxlLWhyLW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1hY2NyZWQtZGl2IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3R5bGUtZGVza3RvcC12aWV3LTUgLnN0eWxlLWxvZ29zIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5zdHlsZS1sb2dvcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXctNSAuc3R5bGUtbG9nby1kaW1lbnNpb24ge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4uc3R5bGUtbG9nby1kaW1lbnNpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy01IC5zdHlsZS1sb2dvLXBhcmFtcyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLnN0eWxlLWFjY3JlZGl0YXRpb24tYWJvdXRMYWIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmNmY2MTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wLXZpZXcgLnN0eWxlLWxhYi1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN0eWxlLWxhYi1kZXRhaWwtcGFkIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3R5bGUtbGFiLWRldGFpbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbn1cclxuXHJcbi5zdHlsZS1yZXZpZXctd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3AtdmlldyAuc3R5bGUtbGFiLWRldGFpbC13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnN0eWxlLWxhYi1kZXRhaWwtd3JhcHBlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uc3R5bGUtZGVza3RvcC12aWV3IC5zdHlsZS1sYWItbmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN0eWxlLWxhYi1uYW1lIHtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gIGNvbG9yOiAjZmY2ZjYxO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdHlsZS1oci1tLTAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc3R5bGUtaHItbS0wLFxyXG4uc3R5bGUtaHItbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5SZXZpZXdzLWxhYi1yZXZpZXctY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogY2xlYXJfc2Fuc19yZWd1bGFyLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uUmV2aWV3cy1yZXZpZXctYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5SZXZpZXdzLXJldmlldy1pbml0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5SZXZpZXdzLXJldmlldy1yZW1hcmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4uUmV2aWV3cy1yZXZpZXdlci1uYW1lIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZ2JhKDMzLCAzMywgMzMsIDAuODcpO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLlJldmlld3MtcmV2aWV3ZXItcmVtYXJrIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmdiYSg3OCwgNzgsIDc4LCAwLjg3KTtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3AtdmlldyAuc3R5bGUtbGFiLXJldmlld3Mtc2VlLW1vcmUge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uc3R5bGUtbGFiLXJldmlld3Mtc2VlLW1vcmUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjZmY2ZjYxO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdHlsZS10b3AtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5zdHlsZS10b3AtaGVhZC0gaDIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAyNHB4IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc3R5bGUtZmxleC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnN0eWxlLXN0YXRzLWJhciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uc3R5bGUtc3RhdHMtbnVtIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc3R5bGUtc3RhdHMtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uc3R5bGUtYm9yZGVyLWJ0bSB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuLnN0eWxlLWRvd24tYmFyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uc3R5bGUtZjIwIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnN0eWxlLWZyZWUtdGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xyXG59XHJcblxyXG4uc3R5bGUtaW5wdXQtYm94IHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuaW5wdXQ6aW52YWxpZCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uc3R5bGUtaW5wdXQtcGhvbmUge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZjY7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5zdHlsZS1uZXh0LWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjE7XHJcbiAgd2lkdGg6IDExMnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3R5bGUtYm94LXdyYXAsXHJcbi5zdHlsZS1jYXAtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnN0eWxlLW1hcmdpbi10b3AtY2FydCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4uc3R5bGUtYWRkLXRvLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IC0yNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0LWFkZCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdHlsZS10ZXh0LWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNmZjZmNjE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3R5bGUtY2l0eS1zZWFyY2hiYXItd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgbWFyZ2luLXRvcDogOTJweDtcclxufVxyXG5cclxuLnN0eWxlLWxvY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zdHlsZS13cmFwcGVyIC5zdHlsZS1kZXNrdG9wLXZpZXctc2VhcmNoIHtcclxuICBwYWRkaW5nOiA2cHggMCAxNXB4IDUycHg7XHJcbn1cclxuXHJcbi5zdHlsZS1jaXRpZXMtY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udGV4dC1sZWZ0LXNlYXJjaCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnN0eWxlLWlucHV0LWZpZWxkIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3R5bGUtbG9jYXRpb24taWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNnB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICM2MTYxNjE7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnN0eWxlLWlucHV0LWZpZWxkIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnN0eWxlLWlucHV0LWZpZWxkIC5zdHlsZS1hdXRvY29tcGxldGUtYmFyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1pY29uLWRldGVjdCB7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogOHB4O1xyXG4gIGhlaWdodDogNzMlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdHlsZS1oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zdHlsZS1sb2FkZXItY2l0eS1kZXRlY3Qge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLnN0eWxlLXNlYXJjaC1iYXIge1xyXG4gIGhlaWdodDogNDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5zdHlsZS1ib3R0b20tbWlkZGxlIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3R5bGUtd3JhcHBlciAuc3R5bGUtZGVza3RvcC12aWV3LXNlYXJjaCB7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG4uc3R5bGUtd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc3R5bGUtbGFicy1zZWxlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMjklO1xyXG59XHJcblxyXG4uc3R5bGUtd3JhcHBlci1zIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy1zMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjRmNjtcclxufVxyXG4uc3R5bGUtc2VsZWN0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZjY7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogQ2xlYXIgU2FucywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNhOWE5YTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy1zMS5zdHlsZS1zZWxlY3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy1zMSAuc3R5bGUtZmlsdGVyIHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG59XHJcbi5zdHlsZS1maWx0ZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTRweDtcclxufVxyXG5cclxuLnN0eWxlLWRlc2t0b3Atdmlldy1zMSAuc3R5bGUtZGlzcGxheS10ZXh0IHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5zdHlsZS1kaXNwbGF5LXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE3cHg7XHJcbn1cclxuXHJcbi5zdHlsZS1hY3Rpb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zdHlsZS1kZXNrdG9wU3R5bGUge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLnN0eWxlLXdyYXBwZXItczEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuXHJcbi5zdHlsZS1mcy0xMiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc3R5bGUtZGVza3RvcC12aWV3LXMyIGlucHV0IHtcclxuICBjb2xvcjogIzIxMjEyMTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbn1cclxuLnN0eWxlLWlucHV0LXMxIGlucHV0IHtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgcGFkZGluZzogN3B4IDE1cHggOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBDbGVhciBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAvLyBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHU4bXNkZ2JqL2ltYWdlL3VwbG9hZC92MTU3Mjg1NTQ3My9zZWFyY2hfMl9nd3lqZWkuc3ZnKVxyXG4gIC8vICAgI2YxZjRmNiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTglIDUyJTtcclxufVxyXG5cclxuLmZhLWxvY2F0aW9uIHtcclxuICBjb250ZW50OiBcIi9mNjAxXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcclxufVxyXG5cclxuLnN0eWxlLWxhYi1uYW1lIHtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5hLmJ1dHRvbi10ZXh0LnN0eWxlLWxhYi1saW5rIHtcclxuICBjb2xvcjogIzNlM2UzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb2wteHMtMTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3R5bGUtc3Rhci1yYXRpbmctZm9udCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uU3RhclJhdGluZy1yYXRpbmctNS0wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFhYTJhO1xyXG59XHJcblxyXG4uU3RhclJhdGluZy1zdGFyLXJhdGluZy1jYXJkIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWluLXdpZHRoOiAzNHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnN0eWxlLWFjY3JlZGl0YXRpb24uc3R5bGUtYWNjcmVkaXRhdGlvbi1kZXNrdG9wIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgb3BhY2l0eTogMC44NztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZmEtc3RhY2sge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMTZweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbn1cblxuLmNvbC14cy0xLFxuLmNvbC1zbS0xLFxuLmNvbC1tZC0xLFxuLmNvbC1sZy0xLFxuLmNvbC14cy0yLFxuLmNvbC1zbS0yLFxuLmNvbC1tZC0yLFxuLmNvbC1sZy0yLFxuLmNvbC14cy0zLFxuLmNvbC1zbS0zLFxuLmNvbC1tZC0zLFxuLmNvbC1sZy0zLFxuLmNvbC14cy00LFxuLmNvbC1zbS00LFxuLmNvbC1tZC00LFxuLmNvbC1sZy00LFxuLmNvbC14cy01LFxuLmNvbC1zbS01LFxuLmNvbC1tZC01LFxuLmNvbC1sZy01LFxuLmNvbC14cy02LFxuLmNvbC1zbS02LFxuLmNvbC1tZC02LFxuLmNvbC1sZy02LFxuLmNvbC14cy03LFxuLmNvbC1zbS03LFxuLmNvbC1tZC03LFxuLmNvbC1sZy03LFxuLmNvbC14cy04LFxuLmNvbC1zbS04LFxuLmNvbC1tZC04LFxuLmNvbC1sZy04LFxuLmNvbC14cy05LFxuLmNvbC1zbS05LFxuLmNvbC1tZC05LFxuLmNvbC1sZy05LFxuLmNvbC14cy0xMCxcbi5jb2wtc20tMTAsXG4uY29sLW1kLTEwLFxuLmNvbC1sZy0xMCxcbi5jb2wteHMtMTEsXG4uY29sLXNtLTExLFxuLmNvbC1tZC0xMSxcbi5jb2wtbGctMTEsXG4uY29sLXhzLTEyLFxuLmNvbC1zbS0xMixcbi5jb2wtbWQtMTIsXG4uY29sLWxnLTEyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmNvbC1sZy01IHtcbiAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcbn1cblxuLnN0eWxlLWNhcmQtd3JhcHBlciB7XG4gIGhlaWdodDogMTQ2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDExNywgMTE3LCAxMTcsIDAuNCk7XG59XG5cbi5zdHlsZS1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN0eWxlLW1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uc3R5bGUtbXJwLFxuLnN0eWxlLXRlc3QtcGFja2FnZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzRhNGE0YTtcbn1cblxuLnN0eWxlLXRlc3QtcGFja2FnZS1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zdHlsZS1pbmNsdWRlLXRlc3RzIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBsaW5lLWhlaWdodDogMDtcbn1cblxuLnN0eWxlLWFiYnJldmlhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5zdHlsZS1hYmJyZXZpYXRpb24sXG4uc3R5bGUtb3BhcXVlIHtcbiAgb3BhY2l0eTogMC44NztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsZWFyZml4OmFmdGVyLFxuLnJvdzphZnRlcixcbi51aS1hdXRvY29tcGxldGUgPiBsaTphZnRlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnN0eWxlLWFiYnJldmlhdGlvbixcbi5zdHlsZS1vcGFxdWUge1xuICBvcGFjaXR5OiAwLjg3O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc3R5bGUtb3BhcXVlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnN0eWxlLW1ycCxcbi5zdHlsZS10ZXN0LXBhY2thZ2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG59XG5cbi5zdHlsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc3R5bGUtZGlzcGxheS1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdHlsZS1wcmljZS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnN0eWxlLXBheWFibGUtd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDI5OHB4O1xuICBtYXJnaW4tdG9wOiAtMzNweDtcbn1cblxuLnN0eWxlLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdHlsZS1hYmJyZXZpYXRpb24sXG4uc3R5bGUtb3BhcXVlIHtcbiAgb3BhY2l0eTogMC44NztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN0eWxlLW9wYXF1ZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLnN0eWxlLXByaWNlLXNlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IC0zMjJweDtcbn1cblxuLnN0eWxlLWRpc2NvdW50LXBlcmNlbnQge1xuICBjb2xvcjogIzFhYWIyYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzFhYWIyYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTcxLCA0MiwgMC4wNSk7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnJlYWN0LWNvbXBvbmVudC10b29sdGlwLnBsYWNlLXRvcCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXAudHlwZS1kYXJrIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG59XG5cbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxlZnQ6IC05OTllbTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogOHB4IDIxcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcbiAgdG9wOiAtOTk5ZW07XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXAucGxhY2UtdG9wOmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcDpiZWZvcmUsXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcC50eXBlLWRhcmsucGxhY2UtdG9wOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDZweDtcbn1cblxuLnJlYWN0LWNvbXBvbmVudC10b29sdGlwLnBsYWNlLXRvcDphZnRlciB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3R0b206IC02cHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5yZWFjdC1jb21wb25lbnQtdG9vbHRpcDpiZWZvcmUsXG4ucmVhY3QtY29tcG9uZW50LXRvb2x0aXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zdHlsZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdHlsZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZ2JhKDExNywgMTE3LCAxMTcsIDAuODcpO1xufVxuXG4uc3R5bGUtdG90YWwtc2F2aW5ncyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5jb2wteHMtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5zdHlsZS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtaGVhZGVyIHtcbiAgb3BhY2l0eTogMC44NztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzIxMjEyMTtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc3R5bGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0eWxlLWRlc2t0b3Atdmlldy0yIC5zdHlsZS1vdmVydmlldy1ibG9jay13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uc3R5bGUtZGVza3RvcC12aWV3LTIgLnN0eWxlLXN1Yi1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5zdHlsZS1zdWItaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC44Nyk7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5zdHlsZS10ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC44Nyk7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctMiAuc3R5bGUtcHJlY2F1dGlvbnMge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdHlsZS1wcmVjYXV0aW9ucyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM5OTdiM2Q7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGYxZDk7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA2MzBweDtcbn1cblxuLnN0eWxlLWRlc2t0b3Atdmlldy0yIC5zdHlsZS1wcmVjYXV0aW9ucyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnN0eWxlLXByZWNhdXRpb25zIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzk5N2IzZDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjFkOTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnN0eWxlLWluY2x1ZGVkLXRlc3RzLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uc3R5bGUtZGVza3RvcC12aWV3IC5zdHlsZS1oZWFkZXIge1xuICBvcGFjaXR5OiAwLjg3O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuXG4uc3R5bGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0eWxlLWluY2x1ZGVkLXRlc3RzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLnN0eWxlLWRlc2t0b3AtdmlldyAuc3R5bGUtYWNjb3JkaW9uLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5zdHlsZS1hY2NvcmRpb24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uc3R5bGUtY29sbGFwc2libGUge1xuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnN0eWxlLWNvbGwtc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctMyAuc3R5bGUtY29sbGFwc2libGUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc3R5bGUtY29sbGFwc2libGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIHBhZGRpbmc6IDE1cHggMXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5zdHlsZS1jb2xsYXBzaWJsZS1ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG59XG5cbi5zdHlsZS1zdWItY29sbC1ib2R5IHtcbiAgcGFkZGluZzogMCAxNXB4IDVweDtcbiAgZm9udC1mYW1pbHk6IGNsZWFyX3NhbnNfbGlnaHRfcmVndWxhciwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgxMTcsIDExNywgMTE3LCAwLjg3KTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5zdHlsZS1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3R5bGUtc3ViLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgxMTcsIDExNywgMTE3LCAwLjg3KTtcbn1cblxuLnN0eWxlLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmEsXG4uc3R5bGUtcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xufVxuXG4uc3R5bGUtY29sbGFwc2libGUtYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cyBlYXNlLWluO1xufVxuXG4uc3R5bGUtc3ViLWNvbGwtYm9keSB7XG4gIHBhZGRpbmc6IDAgMTVweCA1cHg7XG4gIGZvbnQtZmFtaWx5OiBjbGVhcl9zYW5zX2xpZ2h0X3JlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJnYmEoMTE3LCAxMTcsIDExNywgMC44Nyk7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDI4OXB4O1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN0eWxlLXByb3ZpZGVkLXBhY2thZ2UtYnktd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xufVxuXG4uc3R5bGUtZGVza3RvcC12aWV3LTQgLnN0eWxlLWxhYi1kZXRhaWwtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zdHlsZS1sYWItZGV0YWlsLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zdHlsZS1uYW1lLWltZy13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnN0eWxlLWRlc2t0b3Atdmlldy00IC5zdHlsZS1sYWItbmFtZS1sb2NhbGl0eSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5zdHlsZS1sYWItbmFtZS1sb2NhbGl0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctNCAuc3R5bGUtbGFiLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0eWxlLWxhYi1uYW1lIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgY29sb3I6ICNmZjZmNjE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3R5bGUtZGVza3RvcC12aWV3LTQgLnN0eWxlLXN0YXItd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICByaWdodDogMTdweDtcbn1cblxuLlN0YXJSYXRpbmctcmF0aW5nLTUtMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWFhMmE7XG59XG5cbi5TdGFyUmF0aW5nLXN0YXItcmF0aW5nIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWluLXdpZHRoOiAzNHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luLWxlZnQ6IDEzcmVtO1xufVxuXG4uU3RhclJhdGluZy1zdGFyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uU3RhclJhdGluZy1yYXRpbmctc3RhciB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5zdHlsZS1oci1tLTAsXG4uc3R5bGUtaHItbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc3R5bGUtYWNjcmVkLWRpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctNSAuc3R5bGUtbG9nb3Mge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uc3R5bGUtbG9nb3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctNSAuc3R5bGUtbG9nby1kaW1lbnNpb24ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zdHlsZS1sb2dvLWRpbWVuc2lvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0eWxlLWRlc2t0b3Atdmlldy01IC5zdHlsZS1sb2dvLXBhcmFtcyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4uc3R5bGUtYWNjcmVkaXRhdGlvbi1hYm91dExhYiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmNmY2MTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uc3R5bGUtZGVza3RvcC12aWV3IC5zdHlsZS1sYWItZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdHlsZS1sYWItZGV0YWlsLXBhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zdHlsZS1sYWItZGV0YWlsIHtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG59XG5cbi5zdHlsZS1yZXZpZXctd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXcgLnN0eWxlLWxhYi1kZXRhaWwtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zdHlsZS1sYWItZGV0YWlsLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXcgLnN0eWxlLWxhYi1uYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdHlsZS1sYWItbmFtZSB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIGNvbG9yOiAjZmY2ZjYxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0eWxlLWhyLW0tMCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0eWxlLWhyLW0tMCxcbi5zdHlsZS1oci1tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uUmV2aWV3cy1sYWItcmV2aWV3LWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBjbGVhcl9zYW5zX3JlZ3VsYXIsIHNhbnMtc2VyaWY7XG59XG5cbi5SZXZpZXdzLXJldmlldy1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uUmV2aWV3cy1yZXZpZXctaW5pdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG59XG5cbi5SZXZpZXdzLXJldmlldy1yZW1hcmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLlJldmlld3MtcmV2aWV3ZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC44Nyk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLlJldmlld3MtcmV2aWV3ZXItcmVtYXJrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmdiYSg3OCwgNzgsIDc4LCAwLjg3KTtcbn1cblxuLnN0eWxlLWRlc2t0b3AtdmlldyAuc3R5bGUtbGFiLXJldmlld3Mtc2VlLW1vcmUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zdHlsZS1sYWItcmV2aWV3cy1zZWUtbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZjZmNjE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdHlsZS10b3AtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnN0eWxlLXRvcC1oZWFkLSBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMjRweCAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnN0eWxlLWZsZXgtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0eWxlLXN0YXRzLWJhciB7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uc3R5bGUtc3RhdHMtbnVtIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc3R5bGUtc3RhdHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnN0eWxlLWJvcmRlci1idG0ge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyNHB4IGF1dG87XG4gIGxlZnQ6IDUlO1xufVxuXG4uc3R5bGUtZG93bi1iYXIge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnN0eWxlLWYyMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN0eWxlLWZyZWUtdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG59XG5cbi5zdHlsZS1pbnB1dC1ib3gge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dDpmb2N1cyxcbmlucHV0OmludmFsaWQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc3R5bGUtaW5wdXQtcGhvbmUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY2O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc3R5bGUtbmV4dC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZmNjE7XG4gIHdpZHRoOiAxMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc3R5bGUtYm94LXdyYXAsXG4uc3R5bGUtY2FwLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zdHlsZS1tYXJnaW4tdG9wLWNhcnQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5zdHlsZS1hZGQtdG8tY2FyZCB7XG4gIG1hcmdpbi10b3A6IC0yNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cblxuLnRleHQtcmlnaHQtYWRkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zdHlsZS10ZXh0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZjZmNjE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN0eWxlLWNpdHktc2VhcmNoYmFyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbi10b3A6IDkycHg7XG59XG5cbi5zdHlsZS1sb2NhdGlvbi1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnN0eWxlLXdyYXBwZXIgLnN0eWxlLWRlc2t0b3Atdmlldy1zZWFyY2gge1xuICBwYWRkaW5nOiA2cHggMCAxNXB4IDUycHg7XG59XG5cbi5zdHlsZS1jaXRpZXMtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi50ZXh0LWxlZnQtc2VhcmNoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0eWxlLWlucHV0LWZpZWxkIHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdHlsZS1sb2NhdGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3R5bGUtaW5wdXQtZmllbGQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnN0eWxlLWlucHV0LWZpZWxkIC5zdHlsZS1hdXRvY29tcGxldGUtYmFyIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLnN0eWxlLWljb24tZGV0ZWN0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIGhlaWdodDogNzMlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3R5bGUtaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdHlsZS1sb2FkZXItY2l0eS1kZXRlY3Qge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uc3R5bGUtc2VhcmNoLWJhciB7XG4gIGhlaWdodDogNDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnN0eWxlLWJvdHRvbS1taWRkbGUge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3R5bGUtd3JhcHBlciAuc3R5bGUtZGVza3RvcC12aWV3LXNlYXJjaCB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5zdHlsZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3R5bGUtbGFicy1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMjklO1xufVxuXG4uc3R5bGUtd3JhcHBlci1zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctczEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNGY2O1xufVxuXG4uc3R5bGUtc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY0ZjY7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBDbGVhciBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNhOWE5YTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnN0eWxlLWRlc2t0b3Atdmlldy1zMS5zdHlsZS1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdHlsZS1kZXNrdG9wLXZpZXctczEgLnN0eWxlLWZpbHRlciB7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG59XG5cbi5zdHlsZS1maWx0ZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDhweCAxNXB4IDhweCAxNHB4O1xufVxuXG4uc3R5bGUtZGVza3RvcC12aWV3LXMxIC5zdHlsZS1kaXNwbGF5LXRleHQge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0eWxlLWRpc3BsYXktdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxN3B4O1xufVxuXG4uc3R5bGUtYWN0aW9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN0eWxlLWRlc2t0b3BTdHlsZSB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5zdHlsZS13cmFwcGVyLXMxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5zdHlsZS1mcy0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN0eWxlLWRlc2t0b3Atdmlldy1zMiBpbnB1dCB7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuXG4uc3R5bGUtaW5wdXQtczEgaW5wdXQge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDdweCAxNXB4IDhweDtcbiAgZm9udC1mYW1pbHk6IENsZWFyIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzc1NzU3NTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk4JSA1MiU7XG59XG5cbi5mYS1sb2NhdGlvbiB7XG4gIGNvbnRlbnQ6IFwiL2Y2MDFcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbn1cblxuLnN0eWxlLWxhYi1uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEuYnV0dG9uLXRleHQuc3R5bGUtbGFiLWxpbmsge1xuICBjb2xvcjogIzNlM2UzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb2wteHMtMTIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0eWxlLXN0YXItcmF0aW5nLWZvbnQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5TdGFyUmF0aW5nLXJhdGluZy01LTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFhYTJhO1xufVxuXG4uU3RhclJhdGluZy1zdGFyLXJhdGluZy1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWluLXdpZHRoOiAzNHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnN0eWxlLWFjY3JlZGl0YXRpb24uc3R5bGUtYWNjcmVkaXRhdGlvbi1kZXNrdG9wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvcGFjaXR5OiAwLjg3O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZmEtc3RhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopHealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-pop-health",
          templateUrl: "./pop-health.component.html",
          styleUrls: ["./pop-health.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }, {
          type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_6__["MedicineService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-booktests-booktests-module-es5.js.map
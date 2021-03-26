function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-bookappoiment-bookappoiment-module"], {
  /***/
  "./src/app/modules/bookappoiment/bookappoiment-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/bookappoiment/bookappoiment-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: BookappoimentRoutingModule */

  /***/
  function srcAppModulesBookappoimentBookappoimentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookappoimentRoutingModule", function () {
      return BookappoimentRoutingModule;
    });
    /* harmony import */


    var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./patient-details/patient-details.component */
    "./src/app/modules/bookappoiment/patient-details/patient-details.component.ts");
    /* harmony import */


    var _bookappoiment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bookappoiment.component */
    "./src/app/modules/bookappoiment/bookappoiment.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _bookappoiment_component__WEBPACK_IMPORTED_MODULE_1__["BookappoimentComponent"]
    }, {
      path: 'book',
      component: _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_0__["PatientDetailsComponent"]
    }];

    var BookappoimentRoutingModule = function BookappoimentRoutingModule() {
      _classCallCheck(this, BookappoimentRoutingModule);
    };

    BookappoimentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BookappoimentRoutingModule
    });
    BookappoimentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function BookappoimentRoutingModule_Factory(t) {
        return new (t || BookappoimentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookappoimentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookappoimentRoutingModule, [{
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
  "./src/app/modules/bookappoiment/bookappoiment.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/bookappoiment/bookappoiment.component.ts ***!
    \******************************************************************/

  /*! exports provided: BookappoimentComponent */

  /***/
  function srcAppModulesBookappoimentBookappoimentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookappoimentComponent", function () {
      return BookappoimentComponent;
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


    var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var src_app_services_speciality_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/speciality.service */
    "./src/app/services/speciality.service.ts");
    /* harmony import */


    var _services_booking_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/booking-page.service */
    "./src/app/services/booking-page.service.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    var _c0 = ["search"];

    var _c1 = function _c1(a1) {
      return ["/doctors", a1];
    };

    function BookappoimentComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 107);
      }

      if (rf & 2) {
        var item_r362 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r362.value))("innerHTML", item_r362.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BookappoimentComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 108);
      }

      if (rf & 2) {
        var notFound_r363 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r363, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function BookappoimentComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r364 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r364._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r364.fullName, "");
      }
    }

    function BookappoimentComponent_170_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r365.review, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r365 == null ? null : item_r365.userId == null ? null : item_r365.userId.firstName) + " " + (item_r365 == null ? null : item_r365.userId == null ? null : item_r365.userId.lastName), " ");
      }
    }

    function BookappoimentComponent_170_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookappoimentComponent_170_ng_template_0_Template, 19, 2, "ng-template", 111);
      }
    }

    function BookappoimentComponent_226_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r368.review, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r368 == null ? null : item_r368.userId == null ? null : item_r368.userId.firstName) + " " + (item_r368 == null ? null : item_r368.userId == null ? null : item_r368.userId.lastName), " ");
      }
    }

    function BookappoimentComponent_226_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookappoimentComponent_226_ng_template_0_Template, 19, 2, "ng-template", 111);
      }
    }

    function BookappoimentComponent_277_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r371.review, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r371 == null ? null : item_r371.userId == null ? null : item_r371.userId.firstName) + " " + (item_r371 == null ? null : item_r371.userId == null ? null : item_r371.userId.lastName), " ");
      }
    }

    function BookappoimentComponent_277_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookappoimentComponent_277_ng_template_0_Template, 19, 2, "ng-template", 111);
      }
    }

    function BookappoimentComponent_358_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r374.review, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r374 == null ? null : item_r374.userId == null ? null : item_r374.userId.firstName) + " " + (item_r374 == null ? null : item_r374.userId == null ? null : item_r374.userId.lastName), " ");
      }
    }

    function BookappoimentComponent_358_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookappoimentComponent_358_ng_template_0_Template, 19, 2, "ng-template", 111);
      }
    }

    var _c2 = function _c2() {
      return ["./chatnow"];
    };

    var _c3 = function _c3() {
      return ["/order"];
    };

    var _c4 = function _c4() {
      return ["/consult"];
    };

    var BookappoimentComponent =
    /*#__PURE__*/
    function () {
      function BookappoimentComponent(router, mapsAPILoader, ngZone, speciality, BookingPageService) {
        var _this = this;

        _classCallCheck(this, BookappoimentComponent);

        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.speciality = speciality;
        this.BookingPageService = BookingPageService;
        this.keyword = 'name';
        this.countries = [];
        this.customOptionsOne = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          autoplay: false,
          navSpeed: 300,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            },
            1040: {
              items: 1
            }
          },
          nav: false
        };
        this.customOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 4
            },
            1040: {
              items: 4
            }
          },
          nav: false
        };
        this.customOptions1 = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 100,
          margin: 10,
          navSpeed: 100,
          navText: ['', ''],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 3
            },
            740: {
              items: 4
            },
            940: {
              items: 6
            }
          },
          nav: false
        };
        this.slick = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          autoplay: true,
          navSpeed: 300,
          navText: ["", ""],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            },
            1040: {
              items: 1
            }
          },
          nav: false
        };
        this.speciality.getCount().then(function (resData) {
          _this.Countdata = resData.data;
          console.log("BookappoimentComponent -> Countdata", _this.Countdata);
        })["catch"](function (err) {
          console.log("BookappoimentComponent -> err", err);
        });
        this.speciality.getTopSpec().then(function (resData) {
          _this.topFour = resData.data;
        })["catch"](function (err) {
          console.log("BookappoimentComponent -> err", err);
        });
        this.speciality.getSpecializationAll().then(function (resData) {
          _this.countries = [];
          var data = resData.data;
          data.forEach(function (element) {
            element.fullName;
            var data1 = {
              name: element.fullName,
              value: element._id
            };

            _this.countries.push(data1);
          }); //  resData.data
        })["catch"](function (error) {
          console.log("BookappoimentComponent -> error", error);
        });
        this.appointmentCarousel();
        this.chatCarousel();
        this.medicinesCarousel();
        this.HealthcareProvidersCarousel();
      }

      _createClass(BookappoimentComponent, [{
        key: "HealthcareProvidersCarousel",
        value: function HealthcareProvidersCarousel() {
          var _this2 = this;

          this.BookingPageService.getCarousel('HCProviders').then(function (resData) {
            _this2.HealthcareProvidersC = resData.data;
          })["catch"](function (err) {
            console.log("BookappoimentComponent -> appointmentCarousel -> err", err);
          });
        }
      }, {
        key: "medicinesCarousel",
        value: function medicinesCarousel() {
          var _this3 = this;

          this.BookingPageService.getCarousel('Medicine').then(function (resData) {
            _this3.MedicineC = resData.data;
          })["catch"](function (err) {
            console.log("BookappoimentComponent -> appointmentCarousel -> err", err);
          });
        }
      }, {
        key: "appointmentCarousel",
        value: function appointmentCarousel() {
          var _this4 = this;

          this.BookingPageService.getCarousel('Appoinment').then(function (resData) {
            _this4.appointmentC = resData.data;
          })["catch"](function (err) {
            console.log("BookappoimentComponent -> appointmentCarousel -> err", err);
          });
        }
      }, {
        key: "chatCarousel",
        value: function chatCarousel() {
          var _this5 = this;

          this.BookingPageService.getCarousel('Chat').then(function (resData) {
            _this5.ChatC = resData.data;
          })["catch"](function (err) {
            console.log("BookappoimentComponent -> appointmentCarousel -> err", err); // this.router.navigate(['/doctors']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectEvent",
        value: function selectEvent(item) {// this.router.navigate(['/doctors']);
        }
      }, {
        key: "onChangeSearch",
        value: function onChangeSearch(search) {}
      }, {
        key: "onFocused",
        value: function onFocused(e) {}
      }]);

      return BookappoimentComponent;
    }();

    BookappoimentComponent.ɵfac = function BookappoimentComponent_Factory(t) {
      return new (t || BookappoimentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_speciality_service__WEBPACK_IMPORTED_MODULE_3__["SpecialityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_page_service__WEBPACK_IMPORTED_MODULE_4__["BookingPageService"]));
    };

    BookappoimentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookappoimentComponent,
      selectors: [["app-bookappoiment"]],
      viewQuery: function BookappoimentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
        }
      },
      decls: 362,
      vars: 22,
      consts: [[1, "c-jumbo__banner", "mt-80"], [1, "c-jumbo__header_container"], ["data-qa-id", "jumbo-heading", 1, "c-jumbo__header"], ["data-qa-id", "jumbo-sub-heading", 1, "u-t-center", "u-t-white", "u-t-bold", "c-jumbo__subheading"], [1, "c-jumbo__omni_container"], [1, "c-omni-wrapper"], ["role", "button", 1, "c-omni__wrapper", "u-clearfix", "c-omni__wrapper--keyword", "dropdown"], [1, "c-omni-searchbox_wrapper", "dropdown"], [1, "c-omni-searchbox__icon"], [1, "icon-ic_search"], [1, ""], ["placeHolder", "Search  Clinics Heare !", "historyIdentifier", "countries", 1, "", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged", "inputFocused"], ["itemTemplate", ""], ["notFoundTemplate", ""], [1, "row", 2, "margin-top", "30px"], [1, "col-lg-12", 2, "display", "flex", "justify-content", "center"], [2, "color", "white"], ["class", " col-md-3 col-6", "style", "text-align: center;margin: 10px 0px;", 4, "ngFor", "ngForOf"], [1, "mydoctors-tab-new"], [1, "c-my-doctors"], [1, "row", "defOption"], [1, "container"], [1, "row"], [1, "col-6", "col-md-4", "col-lg-2"], ["data-qa-id", "consult-icon", 2, "text-decoration", "none", 3, "routerLink"], ["src", "../../../assets/img/Swati/BookAppointment/ChatWithDoctor.png", 1, "img-icon", 2, "width", "40px", "margin", "auto", "margin-top", "10px", "cursor", "pointer", "background-color", "aliceblue", "border-radius", "50%", "padding", "7px"], [2, "margin", "auto", "cursor", "pointer", "margin-top", "10px", "color", "white"], ["data-qa-id", "order-icon", 2, "text-decoration", "none", 3, "routerLink"], ["src", "../../../assets/img/Swati/BookAppointment/OrderMedicineIcon.png", 1, "img-icon", 2, "width", "40px", "margin", "auto", "margin-top", "10px", "cursor", "pointer", "background-color", "aliceblue", "border-radius", "50%", "padding", "7px"], ["data-qa-id", "drive-icon"], ["src", "../../../assets/img/Swati/BookAppointment/MedicalRecordIcon.png", 1, "img-icon", 2, "width", "40px", "margin", "auto", "margin-top", "10px", "cursor", "pointer", "background-color", "aliceblue", "border-radius", "50%", "padding", "7px"], ["data-qa-id", "lab-icon"], ["src", "../../../assets/img/Swati/BookAppointment/BookTestIcon.png", 1, "img-icon", 2, "width", "40px", "margin", "auto", "margin-top", "10px", "cursor", "pointer", "background-color", "aliceblue", "border-radius", "50%", "padding", "7px"], ["data-qa-id", "healthfeed-icon"], ["src", "../../../assets/img/Swati/BookAppointment/ReadArticlesIcon.png", 1, "img-icon", 2, "width", "40px", "margin", "auto", "margin-top", "10px", "cursor", "pointer", "background-color", "aliceblue", "border-radius", "50%", "padding", "7px"], ["data-qa-id", "providers-icon"], ["src", "../../../assets/img/Swati/BookAppointment/HealthCareProviderIcon.png", 1, "img-icon", 2, "width", "40px", "margin", "auto", "margin-top", "10px", "cursor", "pointer", "background-color", "aliceblue", "border-radius", "50%", "padding", "7px"], [2, "cursor", "pointer", "color", "white", "text-align", "center", "margin", "auto", "margin-top", "10px"], [2, "padding-top", "50px"], [1, "col-md-6", "col-12"], [2, "font-size", "22px"], [1, "c-list-item"], [1, "c-icon__img", 2, "margin-right", "10px"], ["src", "../../../assets/img/check-24px.svg"], ["data-qa-id", "security-cta", 1, "u-m-t-25", "u-d-inline-block"], ["href", "/company/security", "target", "_blank", 1, "c-button__redirect"], [1, "col-md-6", "col-12", 2, "text-align", "center"], ["src", "../../../assets/img/Swati/BookAppointment/DataSefety.png", "width", "250"], [1, "row", "mt-50", "mb-50"], [1, "col-md-6", "col-lg-3", "col-sm-6", "col-xs-12", "bookapo-box"], [1, "inner-box"], ["src", "../../../assets/img/Swati/BookAppointment/encryption.png", 2, "width", "100px", "height", "100px"], [1, "c-certificate__info"], ["src", "../../../assets/img/Swati/BookAppointment/Certified.png", 2, "width", "100px", "height", "100px"], ["src", "../../../assets/img/Swati/BookAppointment/HIPAA.png", 2, "width", "100px", "height", "100px"], ["src", "../../../assets/img/Swati/BookAppointment/DSCI.png", 2, "width", "100px", "height", "100px"], [1, "row", "mt-50"], [1, "col-lg-6", "col-md-6"], ["clas", "row"], [1, "col-lg-12"], [1, "c-icon__img"], ["data-qa-id", "book-cta", 1, "u-m-t-25", "u-d-inline-block"], ["href", "/bangalore/doctors", "target", "_blank", 1, "c-button__redirect"], [1, "col-lg-12", 2, "margin-top", "30px"], [1, "row", 2, "display", "flex", "justify-content", "space-between", "width", "100%", "position", "absolute", "top", "60px"], [2, "z-index", "9", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left", "fa-3x"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right", "fa-3x"], [1, "slick-track", 3, "options"], ["rex", ""], [4, "ngFor", "ngForOf"], [1, "col-md-6", "text-center"], [1, "rh5v-DefaultPlayer_component"], ["poster", "../../../assets/img/book.875ca26a3c4283c777660377e421e99b.png", "loading", "false", "autoplay", "", "loop", "", "width", "250", "height", "480", 1, "rh5v-DefaultPlayer_video"], ["src", "../../../assets/img/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm", "type", "video/webm"], [1, "col-md-6"], ["poster", "../../../assets/img/consult.15f1b416f3f4c9383b780757d7293d00.png", "loading", "false", "autoplay", "", "loop", "", "width", "250", "height", "480", 1, "rh5v-DefaultPlayer_video"], ["src", "../../../assets/img/consult.099446892618434cc8a038d7844c4380.webm", "type", "video/webm"], [1, "u-d-inline", "textc"], [1, "col-12"], [1, "c-list-item__icon", "c-icon__img"], [1, "u-t-bold"], ["data-qa-id", "consult-cta", 1, "u-m-t-25", "u-d-inline-block"], [1, "c-button__redirect", 3, "routerLink"], [1, "c-consult__doctors_online", "u-t-grey"], [1, "c-consult__doctors_pulse", "u-t-pulse", "left"], ["rex1", ""], [1, "col-md-12"], ["data-qa-id", "order-cta", 1, "u-m-t-25", "u-d-inline-block"], ["href", "/order?utm_source=WhealthyLife_home", "target", "_blank", 1, "c-button__redirect"], [1, "c-order__last_order_info"], [1, "u-t-circle"], [1, "u-t-triangle"], [1, "c-order__last_order_text"], ["rex2", ""], [1, "c-section__right"], ["height", "300px", "src", "../../../assets/img/Swati/BookAppointment/Medicines.png", 2, "max-width", "100%"], ["height", "250px", "src", "../../../assets/img/Swati/BookAppointment/MedicalRecords.png", 2, "max-width", "100%"], [1, "c-section__highlights"], [1, "c-section__highlights_title"], ["data-qa-id", "record-cta", 1, "u-m-t-25", "u-d-inline-block"], ["href", "//drive.WhealthyLife.com/login?utm_source=WhealthyLife_home", "target", "_blank", 1, "c-button__redirect"], [1, "row", "mt-80", "mb-50"], ["data-qa-id", "provider-cta", 1, "u-m-t-25", "u-d-inline-block"], ["href", "/providers?utm_source=WhealthyLife_home", "target", "_blank", 1, "c-button__redirect"], ["rex3", ""], ["src", "../../../assets/img/appoi-doctor.png", 1, "u-w-100"], ["routerLinkActive", "router-link-active", 3, "routerLink", "innerHTML"], [3, "innerHTML"], [1, "col-md-3", "col-6", 2, "text-align", "center", "margin", "10px 0px"], ["routerLinkActive", "router-link-active", "data-qa-id", "popular-search-item", 2, "color", "white", "cursor", "pointer", 3, "routerLink"], ["carouselSlide", "", "data-index", "-1", "tabindex", "-1", "class", "slick-slide slick-cloned", "style", "width: 420px"], [1, "card", "u-t-grey", 2, "word-wrap", "break-word", "text-align", "center"], [1, "c-testimonial__review_star", "u-m-b-10", "u-t-green", 2, "padding", "22px !important"], [2, "width", "50%", "display", "flex", "justify-content", "space-around", "margin", "auto"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star"], ["fill-rule", "evenodd", "d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"], [1, "c-testimonial__review_text", "u-t-regular"], [1, "icon-ic_user_system", "icon-user"], [1, "u-t-regular", "u-inline-middle", "u-m-l-10"]],
      template: function BookappoimentComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your home for health ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Find and Book ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ng-autocomplete", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function BookappoimentComponent_Template_ng_autocomplete_selected_13_listener($event) {
            return ctx.selectEvent($event);
          })("inputChanged", function BookappoimentComponent_Template_ng_autocomplete_inputChanged_13_listener($event) {
            return ctx.onChangeSearch($event);
          })("inputFocused", function BookappoimentComponent_Template_ng_autocomplete_inputFocused_13_listener($event) {
            return ctx.onFocused($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookappoimentComponent_ng_template_14_Template, 1, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BookappoimentComponent_ng_template_16_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Popular searches : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BookappoimentComponent_div_22_Template, 3, 4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Chat with a doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Order Medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "View medical records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Book test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Read articles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "For healthcare providers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Safety of your data is our");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " top priority. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Multi-level security checks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Multiple data backups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Stringent data privacy policies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Read more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "256-bit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ISO 27001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "certified");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "HIPAA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "compliant data centers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "DSCI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "member");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Instant appointment with doctors Guaranteed.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "3M+ Patient recommendations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "25M Patients/year");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Find me the right doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_164_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](169);

            return _r354.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_166_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](169);

            return _r354.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "owl-carousel-o", 68, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, BookappoimentComponent_170_Template, 1, 0, undefined, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "video", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "source", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "video", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "source", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Skip the waiting room. Chat with a doctor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Fees starting at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u20B999");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Verified doctors respond in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "5 minutes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "100% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Private and confidential");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Chat now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "span", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "41623");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " doctors online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_220_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](225);

            return _r356.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_222_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](225);

            return _r356.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "owl-carousel-o", 68, 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](226, BookappoimentComponent_226_Template, 1, 0, undefined, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h2", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Get all your medicines. Everytime. On time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Guaranteed availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Over ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " genuine medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Home delivery in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "24hrs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Order Medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Last order delivered ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " few seconds ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "ago in C V Raman Nagar, Bengaluru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_271_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](276);

            return _r358.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_273_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](276);

            return _r358.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "owl-carousel-o", 68, 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, BookappoimentComponent_277_Template, 1, 0, undefined, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h2", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "All your medical records ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " In one secure app. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "256-bit end to end encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Records are accessible only by you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Access your records across");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " 8000+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "centers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Find out more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h2", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Leading Healthcare Providers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Trust us for Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Get seen by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "patients on WhealthyLife.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "The most advanced software for clinics and hospitals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "State of the art business analytics for enterprises");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " Learn more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_352_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](357);

            return _r360.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookappoimentComponent_Template_div_click_354_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r377);

            var _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](357);

            return _r360.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "owl-carousel-o", 68, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](358, BookappoimentComponent_358_Template, 1, 0, undefined, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.countries)("searchKeyword", ctx.keyword)("itemTemplate", _r349)("notFoundTemplate", _r351);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topFour);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Countdata == null ? null : ctx.Countdata.totalDoctors, " Verified doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptionsOne);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointmentC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptionsOne);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ChatC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Countdata == null ? null : ctx.Countdata.medicineCount, "+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptionsOne);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.MedicineC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Countdata == null ? null : ctx.Countdata.petientsCount, "+ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptionsOne);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.HealthcareProvidersC);
        }
      },
      directives: [angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselSlideDirective"]],
      styles: ["@charset \"UTF-8\";\n@media screen and (max-width: 500) {\n  .textc[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n  }\n}\nvideo[_ngcontent-%COMP%] {\n  opacity: 100;\n  top: 1250px;\n  left: 390px;\n}\ninput.ng-untouched.ng-pristine.ng-valid[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  height: 50px !important;\n}\n.c-article-list__next_arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: rotate(-45deg) !important;\n}\n.c-article-list__prev_arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: rotate(45deg) !important;\n}\n.cfw[_ngcontent-%COMP%] {\n  background-color: #f0f0f5;\n}\n.u-bold[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.__react_component_tooltip[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip[_ngcontent-%COMP%]:before, .__react_component_tooltip[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.type-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #222;\n}\n.__react_component_tooltip.type-dark.place-top[_ngcontent-%COMP%]:after {\n  border-top-color: #222;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.place-top[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.__react_component_tooltip.place-top[_ngcontent-%COMP%]:before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-top[_ngcontent-%COMP%]:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  bottom: -6px;\n  left: 50%;\n  margin-left: -8px;\n}\n\n\nfooter[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  line-height: 1;\n  text-align: left;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #f0f0f5;\n  font-family: Camphor, verdana !important;\n  color: #414146;\n}\n.u-t-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.u-d-inline[_ngcontent-%COMP%] {\n  display: inline;\n}\n.rh5v-Overlay_component[_ngcontent-%COMP%], .u-d-hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.u-f-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.u-f-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.c-button__redirect[_ngcontent-%COMP%], .c-footer__column[_ngcontent-%COMP%], .c-nav__logo[_ngcontent-%COMP%], .u-d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.u-t-green[_ngcontent-%COMP%] {\n  color: #00a500;\n}\n.u-t-grey[_ngcontent-%COMP%] {\n  color: #787887;\n}\n.u-t-regular[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.u-inline-middle[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.c-nav[_ngcontent-%COMP%], .u-fill-white[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.u-t-pulse[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #0ba114;\n  box-shadow: 0 0 0 rgba(40, 190, 240, 0.4);\n  -webkit-animation: pulse 1.2s infinite;\n          animation: pulse 1.2s infinite;\n}\n.c-button__redirect[_ngcontent-%COMP%], .u-t-pulse[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.u-round-corner[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n.u-t-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10em;\n  background: #c5e6f3;\n}\n.u-t-circle[_ngcontent-%COMP%], .u-t-circle[_ngcontent-%COMP%]   .u-t-triangle[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n}\n.u-t-circle[_ngcontent-%COMP%]   .u-t-triangle[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-animation: keyframes-rotation 2s infinite linear;\n          animation: keyframes-rotation 2s infinite linear;\n  border-radius: 50%;\n}\n.u-t-circle[_ngcontent-%COMP%]   .u-t-triangle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  top: 0;\n  background: linear-gradient(-90deg, rgba(197, 230, 243, 0.79), transparent), linear-gradient(180deg, #0ba114 0, rgba(0, 58, 52, 0));\n  transform: rotate(90deg);\n  position: absolute;\n  border-top: 1px solid #0ba114;\n}\n.c-article-card__body[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.c-jumbo__header_container[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.c-section__highlights_title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.c-jumbo__subheading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.c-testimonial__review_text[_ngcontent-%COMP%], .u-m-b-10[_ngcontent-%COMP%] {\n  padding: 0px 23px;\n  margin-bottom: 10px;\n}\n.u-m-b-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.c-order__last_order_info[_ngcontent-%COMP%], .u-m-t-25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.c-testimonial-list[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.u-m-l-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.c-section__container[_ngcontent-%COMP%], .c-section__content[_ngcontent-%COMP%], .c-section__right[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.c-section__container[_ngcontent-%COMP%] {\n  padding: 0 100px;\n}\n.c-button__redirect[_ngcontent-%COMP%] {\n  padding: 0 25px;\n}\n.c-icon[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-bottom: 3mm;\n  padding: 0 30px;\n}\n.icon-user[_ngcontent-%COMP%]:before {\n  padding: 5px;\n}\n.c-section__content[_ngcontent-%COMP%] {\n  max-width: 1180px;\n}\n.u-w-50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.c-navbar[_ngcontent-%COMP%], .c-section__container[_ngcontent-%COMP%], .u-w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.c-certificate[_ngcontent-%COMP%], .c-footer__column[_ngcontent-%COMP%], .c-order__last_order_info[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.c-nav__logo[_ngcontent-%COMP%], .c-section__container[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.c-button__redirect[_ngcontent-%COMP%], .c-certificate[_ngcontent-%COMP%], .c-footer__copyright[_ngcontent-%COMP%], .c-section__right[_ngcontent-%COMP%], .u-t-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.c-list-item__icon[_ngcontent-%COMP%] {\n  color: #0ba114;\n}\n.u-title-font[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.u-base-font[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.c-section__content[_ngcontent-%COMP%], .u-clearfix[_ngcontent-%COMP%] {\n  *zoom: 1;\n}\n.c-section__content[_ngcontent-%COMP%]:after, .c-section__content[_ngcontent-%COMP%]:before, .u-clearfix[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:before {\n  content: \" \";\n}\n.u-border-white[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n}\n.c-button__redirect[_ngcontent-%COMP%] {\n  line-height: 38px;\n  width: auto;\n  height: 40px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #0ba114;\n  border: 1px solid #0ba114;\n  border-radius: 2px;\n  box-sizing: border-box;\n  text-decoration: none;\n  outline: 0;\n  font-weight: 400;\n}\n.c-offer-tag[_ngcontent-%COMP%] {\n  background-color: #00a500;\n  font-size: 12px;\n  padding: 1px 5px;\n  position: absolute;\n  right: 8px;\n  border: 0;\n}\n.c-icon-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n  \n  padding: 20px 0;\n  background-color: #0ba114;\n  text-align: center;\n}\n.c-icon-list__list_wrapper[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0 auto;\n  display: inline-block;\n}\n.c-icon[_ngcontent-%COMP%] {\n  float: left;\n  text-align: center;\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.c-icon[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #4a5387;\n}\n.c-icon[_ngcontent-%COMP%]:hover   .tab-icon[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n}\n.c-icon[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.c-icon__img[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-out;\n}\n.c-icon[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #b8bbd9;\n  font-size: 14px;\n  text-decoration: none;\n  line-height: 28px;\n}\n.c-icon[_ngcontent-%COMP%]   .tab-offer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: block;\n}\n.c-jumbo[_ngcontent-%COMP%] {\n  background-color: #28328c;\n}\n.c-jumbo__banner[_ngcontent-%COMP%] {\n  background: url('homepage.06859593240c3efd483fe48951cfe6ff.png') top no-repeat !important;\n  min-height: 460px;\n  background-attachment: fixed;\n  background-position-y: 60px;\n}\n.c-jumbo__header_container[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n.c-jumbo__header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n  color: #fff;\n  font-weight: 400;\n}\n.c-jumbo__subheading[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.c-my-doctors[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 0 1em;\n  padding-top: 50px;\n  text-align: center;\n}\n.c-omni-wrapper[_ngcontent-%COMP%] {\n  width: 785px;\n  margin: 0 auto;\n  z-index: 1;\n  position: relative;\n}\n.c-popular-searches[_ngcontent-%COMP%] {\n  color: #8d93b3;\n  font-size: 14px;\n  padding: 15px 0;\n  position: relative;\n  width: 785px;\n  margin: 0 auto;\n}\n.c-popular-searches__item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.c-media-list[_ngcontent-%COMP%] {\n  background: url(//www.WhealthyLifestatic.com/web-assets/home/assets/images/logo_india.6ae037c11f3c08c0f974ad35d22cdc55.png) top no-repeat;\n  height: 40px;\n  background-size: 200px;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  opacity: 0.4;\n}\n.c-media-list.fortune[_ngcontent-%COMP%] {\n  background-position: -45px -10px;\n  width: 116px;\n  margin-left: 0;\n}\n.c-media-list[_ngcontent-%COMP%]:not(.hospital-logo-image) {\n  cursor: pointer;\n}\n.c-media-list[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 25px;\n}\n.c-media-list.tech-crunch[_ngcontent-%COMP%] {\n  background-position: -31px -70px;\n  width: 137px;\n}\n.c-media-list.forbes[_ngcontent-%COMP%] {\n  background-position: -62px -129px;\n  width: 78px;\n}\n.c-media-list.economic[_ngcontent-%COMP%] {\n  background-position: -9px -187px;\n  width: 184px;\n}\n.c-media-list.wall-street[_ngcontent-%COMP%] {\n  background-position: -13px -248px;\n  width: 175px;\n}\n.c-media-list.times[_ngcontent-%COMP%] {\n  background-position: -47px -305px;\n  width: 105px;\n}\n.c-media-list[_ngcontent-%COMP%]:not(.hospital-logo-image):hover {\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n  opacity: 1;\n}\n.customer-logo-footer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 1000px;\n  margin: 0 auto;\n  padding-top: 20px;\n}\n.c-consult__doctors_online[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 10px;\n  line-height: 12px;\n}\n.c-consult__doctors_pulse[_ngcontent-%COMP%] {\n  margin: 1px 10px 0 0;\n}\n.c-download__section-pic[_ngcontent-%COMP%] {\n  width: 300px;\n  padding-bottom: 18px;\n}\n.c-download__list[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  margin-left: -5px;\n}\n.c-download__app_links[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-right: 15px;\n}\n.c-country-list[_ngcontent-%COMP%] {\n  text-align: center;\n  border-top: 1px solid #e0e0e5;\n  padding: 15px 0;\n  background: #f0f0f5;\n}\n.c-country-list__wrapper[_ngcontent-%COMP%] {\n  width: auto;\n  display: inline-block;\n  margin-top: 5px;\n}\n.c-country-list__link[_ngcontent-%COMP%] {\n  float: left;\n}\n.c-country-list__wrapper[_ngcontent-%COMP%]   .c-country-list__link[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 60px;\n}\n.c-country-list__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #414146;\n}\n.c-country-list__flag[_ngcontent-%COMP%] {\n  width: 35px;\n  display: inline-block;\n  height: 15px;\n  position: relative;\n}\n.c-country-list__flag[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 25px;\n  height: 20px;\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  background-image: url(//www.WhealthyLifestatic.com/web-assets/home/assets/images/flags_small.05856764a38c842407c9770c6987b52d.svg);\n  background-repeat: no-repeat;\n}\n.c-country-list__name[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 18px;\n}\n.c-country-list__flag_singapore[_ngcontent-%COMP%]:before {\n  background-position: -3px -52px;\n}\n.c-country-list__flag_philippines[_ngcontent-%COMP%]:before {\n  background-position: -3px -27px;\n}\n.c-country-list__flag_indonesia[_ngcontent-%COMP%]:before {\n  background-position: -3px -103px;\n}\n.c-country-list__flag_brazil[_ngcontent-%COMP%]:before {\n  background-position: -3px -172px;\n}\n.c-article-card[_ngcontent-%COMP%] {\n  width: 333.33px;\n}\n.c-article-card__container[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #414146;\n}\n.c-article-card__body[_ngcontent-%COMP%] {\n  border: 1px solid #dedee8;\n  border-radius: 4px;\n  line-height: 1.5;\n  min-height: 350px;\n  box-shadow: 0 1px 4px 0 #e0e0e5;\n  transition: transform 0.3s ease-out;\n}\n.c-article-card__image-wrapper[_ngcontent-%COMP%] {\n  height: 175px;\n  overflow: hidden;\n}\n.c-article-card__image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 311px;\n  border-radius: 4px 4px 0 0;\n  min-height: 100%;\n}\n.c-article-card_details[_ngcontent-%COMP%] {\n  padding: 8px 15px 15px;\n}\n.c-article-card_author[_ngcontent-%COMP%] {\n  color: #787887;\n}\n.c-article-card__body[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.c-article-card_bullet[_ngcontent-%COMP%] {\n  font-size: 13px;\n  display: inline-block;\n  color: #787887;\n  margin: -1px 0;\n  margin-left: 5px;\n  vertical-align: 1px;\n}\n.c-article-list__prev_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: -77px;\n  margin-top: -45px;\n  font-size: 60px;\n}\n.c-article-list__arrow[_ngcontent-%COMP%] {\n  color: #b4b4be;\n}\n.c-article-list__next_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -77px;\n  margin-top: -45px;\n  font-size: 60px;\n}\n.c-article-list__prev_arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: rotate(90deg);\n}\n.c-article-list__next_arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transform: rotate(-90deg);\n}\n.c-healthfeed[_ngcontent-%COMP%] {\n  padding: 35px 0;\n}\n.c-healthfeed__header[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 40px;\n}\n.c-healthfeed__articles_wrapper[_ngcontent-%COMP%] {\n  width: 1000px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 370px;\n}\n.c-order__last_order_info[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 285px;\n  padding-left: 15px;\n}\n.c-order__last_order_text[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  display: inline-block;\n  line-height: 1.5;\n  margin-top: -5px;\n  vertical-align: middle;\n}\n.c-order__last_order_info[_ngcontent-%COMP%]   .u-t-circle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.c-provider-logo[_ngcontent-%COMP%] {\n  background: url(//www.WhealthyLifestatic.com/web-assets/home/assets/images/logo_india.6ae037c11f3c08c0f974ad35d22cdc55.png) top no-repeat;\n  height: 40px;\n  background-size: 200px;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  opacity: 0.4;\n}\n.c-provider-logo__suguna[_ngcontent-%COMP%] {\n  background-position: 81px -367px;\n  width: 320px;\n}\n.c-provider-logo__pratiksha[_ngcontent-%COMP%] {\n  background-position: -1px -420px;\n  width: 245px;\n}\n.c-provider-logo__nmc[_ngcontent-%COMP%] {\n  background-position: -25px -481px;\n  width: 210px;\n}\n.c-provider-logo__vps[_ngcontent-%COMP%] {\n  background-position: -70px -599px;\n  width: 156px;\n}\n.c-certificate[_ngcontent-%COMP%] {\n  width: 23%;\n}\n.c-certificate__info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.c-certificate-list[_ngcontent-%COMP%] {\n  width: 925px;\n  padding-top: 50px;\n  margin: 0 auto;\n}\n[class*=\" icon-ic_\"][_ngcontent-%COMP%]:before, [class^=icon-ic_][_ngcontent-%COMP%]:before {\n  font-family: Camphor, verdana !important;\n  font-style: normal;\n  font-weight: 400;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: 0.2em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em;\n  margin-left: 0.2em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-ic_done_badge[_ngcontent-%COMP%]:before {\n  content: \"\uE800\";\n}\n.icon-ic_done_open_system[_ngcontent-%COMP%]:before {\n  content: \"\uE9A8\";\n}\n.icon-ic_star_solid[_ngcontent-%COMP%]:before {\n  content: \"\uE934\";\n}\n.icon-ic_user_system[_ngcontent-%COMP%]:before {\n  content: \"\uE91E\";\n}\n.icon-ic_back_cheveron[_ngcontent-%COMP%]:before {\n  content: \"\uE94E\";\n}\n.icon-ic_next_cheveron[_ngcontent-%COMP%]:before {\n  content: \"\uE93C\";\n}\n.icon-ic_down_cheveron[_ngcontent-%COMP%]:before {\n  content: \"\uE947\";\n}\n.icon-ic_drawer_system[_ngcontent-%COMP%]:before {\n  content: \"\uE946\";\n}\n.icon-ic_dropdown[_ngcontent-%COMP%]:before {\n  content: \"\uE99C\";\n}\n.icon-ic_chat[_ngcontent-%COMP%]:before {\n  content: \"\uE921\";\n}\n.icon-ic_cart[_ngcontent-%COMP%]:before {\n  content: \"\uE920\";\n}\n.icon-ic_records_3[_ngcontent-%COMP%]:before {\n  content: \"\uE96F\";\n}\n.icon-ic_lab_home[_ngcontent-%COMP%]:before {\n  content: \"\uE9B4\";\n}\n.icon-ic_read[_ngcontent-%COMP%]:before {\n  content: \"\uE971\";\n}\n.icon-ic_briefcase[_ngcontent-%COMP%]:before {\n  content: \"\uE929\";\n}\n.icon-ic_clinic[_ngcontent-%COMP%]:before {\n  content: \"\uE922\";\n}\n.icon-ic_location[_ngcontent-%COMP%]:before {\n  content: \"\uE984\";\n}\n.icon-ic_gps_system[_ngcontent-%COMP%]:before {\n  content: \"\uE9BA\";\n}\n.icon-ic_search[_ngcontent-%COMP%]:before {\n  content: \"\uE966\";\n}\n.icon-ic_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE8EE\";\n}\n.c-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 2;\n}\n.c-nav[_ngcontent-%COMP%] {\n  height: 102px;\n}\n.c-nav__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 16px 0 12px 50px;\n}\n.c-nav__menu[_ngcontent-%COMP%], .c-nav__wrapper[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d8d8d8;\n}\n.c-nav__menu[_ngcontent-%COMP%] {\n  height: 42px;\n  background-color: #fafafa;\n}\n.c-nav__logo[_ngcontent-%COMP%] {\n  background: url(https://nav.WhealthyLife.com/8.0.26/consumer/images/WhealthyLife.svg) no-repeat;\n  height: 23px;\n  width: 100px;\n  margin: 3px 0 0;\n}\n.c-footer[_ngcontent-%COMP%] {\n  min-width: 1200px;\n  background-color: #28328c;\n  padding: 48px 0;\n  color: #fff;\n  font-size: 14px;\n}\n.c-footer__wrapper[_ngcontent-%COMP%] {\n  width: 1180px;\n  margin: auto;\n}\n.c-footer__content[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.c-footer__logo[_ngcontent-%COMP%] {\n  margin: 28px 0;\n}\n.c-footer__title[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.c-footer__row[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.c-footer__item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n  display: block;\n}\n.c-footer__item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.c-footer__column[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 18.9%;\n  line-height: 20px;\n}\n.c-footer__column[_ngcontent-%COMP%]:last-child {\n  width: auto;\n}\n.c-copyright[_ngcontent-%COMP%] {\n  color: #b8bbd9;\n}\n.slick-slider[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.slick-list[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.slick-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.slick-list[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.slick-slider[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n}\n.slick-track[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-track[_ngcontent-%COMP%]:after, .slick-track[_ngcontent-%COMP%]:before {\n  display: table;\n  content: \"\";\n}\n.slick-track[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.slick-slide[_ngcontent-%COMP%] {\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n.slick-initialized[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%] {\n  display: block;\n}\n.c-home[_ngcontent-%COMP%] {\n  margin-top: 102px;\n  min-width: 1180px;\n}\n.c-omni-searchbox_wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.c-omni-searchbox__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  width: 30px;\n  transform: translateY(-50%);\n}\n.c-omni-searchbox[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Camphor, verdana !important;\n  font-size: inherit;\n  line-height: 1.4;\n  padding: 6px 20px 5px 30px;\n  color: inherit;\n  border-radius: 2px;\n  border: 1px solid;\n  border-color: #b4b4be;\n  cursor: pointer;\n  outline: 0;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-appearance: none;\n  background: #fff;\n}\n.c-omni-searchbox[_ngcontent-%COMP%]:active, .c-omni-searchbox[_ngcontent-%COMP%]:focus {\n  border-color: #787887;\n}\n.c-omni-searchbox--large[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.c-omni-searchbox__button[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  height: 100%;\n  padding: 0 5px;\n  border-radius: 2px;\n  background: #f0f0f5;\n  transform: translateZ(0);\n  transition: transform 0.2s ease;\n  display: table;\n}\n.c-omni-searchbox__button-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n  height: 70%;\n  top: 50%;\n  transform: translate3d(0, -50%, 0);\n  overflow: hidden;\n}\n.c-omni-searchbox__button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #787887;\n  font-size: 16px;\n}\n.c-omni-searchbox__button__text[_ngcontent-%COMP%] {\n  top: 1px;\n}\n.c-omni-searchbox__button__text[_ngcontent-%COMP%], .c-omni-searchbox__button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n}\n.c-section__content[_ngcontent-%COMP%]:after, .c-section__content[_ngcontent-%COMP%]:before, .u-clearfix[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: table;\n}\n.c-section__content[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.c-section__content[_ngcontent-%COMP%], .u-clearfix[_ngcontent-%COMP%] {\n  zoom: 1;\n}\n.c-omni[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #414146;\n  font-size: 14px;\n  line-height: 1.4;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n       text-size-adjust: 100%;\n}\n.c-omni__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n.c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper--locality[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper--locality[_ngcontent-%COMP%]   .c-omni-searchbox[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper--keyword[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper--keyword[_ngcontent-%COMP%]   .c-omni-searchbox[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left: 0;\n}\n\n@media all {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-items.hover-dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   .product-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .u-d-item[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .u-d-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%] {\n    width: 100%;\n    z-index: 2000;\n    top: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .btn-border[_ngcontent-%COMP%] {\n    display: inline-block;\n    border-radius: 3px;\n    border: 1px solid #414146;\n    background-color: transparent;\n    padding: 5px 20px;\n    cursor: pointer;\n    color: #414146 !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .btn-border[_ngcontent-%COMP%]:hover {\n    background-color: transparent;\n    border: 1px solid #0ba114;\n    color: #0ba114 !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]:before {\n    content: \" \";\n    display: table;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]:after {\n    content: \" \";\n    display: table;\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   [class^=icon-][_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   [class*=\" icon-\"][_ngcontent-%COMP%] {\n    font-family: \"practicon\" !important;\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    width: auto;\n    height: auto;\n    background: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    height: 60px;\n    background-color: #fff;\n    font-family: \"Camphor\", \"Open Sans\", sans-serif;\n    padding: 12px 0;\n    color: #414146;\n    box-sizing: border-box;\n    border-bottom: 1px solid rgba(216, 216, 216, 0.5);\n    border-radius: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    cursor: auto;\n    display: block;\n    width: 100%;\n    height: 100%;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 50px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .overlay_layer[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 100;\n    visibility: hidden;\n    opacity: 0;\n    transition: all 0.3s ease-out;\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%] {\n    padding: 0;\n    line-height: 60px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 0;\n    top: 60px;\n    z-index: 1000;\n    background: #fff;\n    overflow-x: hidden;\n    overflow-y: auto;\n    transition: 0.1s;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:first-of-type {\n    margin-top: 5px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%]   .nav-login-mobile.btn-border[_ngcontent-%COMP%] {\n    height: 30px;\n    color: #0ba114 !important;\n    padding: 5px 12px 8px 12px;\n    border-radius: 3px;\n    border: solid 1px #0ba114;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%] {\n    font-family: \"Camphor\";\n    font-weight: 400;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:focus, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:focus, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::-moz-selection {\n    color: transparent;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::-webkit-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::-webkit-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::-webkit-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::-moz-selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::selection, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::-webkit-selection {\n    color: transparent;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 100%;\n    vertical-align: top;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    width: 252px;\n    box-sizing: border-box;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%]::before {\n    line-height: 35px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .WhealthyLife-logo[_ngcontent-%COMP%] {\n    line-height: 35px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%] {\n    width: 48%;\n    position: relative;\n    left: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%] {\n    float: right;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 24px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-items.hover-dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #414146;\n    line-height: 35px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]:last-child {\n    margin-right: 0px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100%;\n    background-color: #fff;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    min-height: auto;\n    width: 100%;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #414146;\n    display: block;\n    padding: 8px 0;\n    clear: both;\n    position: relative;\n    cursor: pointer;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%] {\n    margin: 0;\n    max-width: 100%;\n    box-sizing: border-box;\n    vertical-align: top;\n    display: block;\n    clear: both;\n    padding: 0 0 0 24px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n    width: 25px;\n    display: table-cell;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   .product-block[_ngcontent-%COMP%] {\n    width: 98%;\n    display: table-cell;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   .product-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    color: #414146;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin: 0 15px 0 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: #0ba114;\n    font-weight: 400;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i.ic[_ngcontent-%COMP%] {\n    color: #0ba114;\n    font-weight: 400;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    color: #0ba114;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .product-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i.ic[_ngcontent-%COMP%] {\n    color: #0ba114;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .WhealthyLife_logo_new[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .downarrow[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    display: inline-block;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .WhealthyLife_logo_new[_ngcontent-%COMP%] {\n    background: url(https://www.WhealthyLifestatic.com/nav/8.0.32/consumer/images/WhealthyLife.svg) no-repeat;\n    height: 23px;\n    width: 100px;\n    margin: -3px 0 0 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 30px;\n    color: #414146;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .ic.icon-ic_done_badge[_ngcontent-%COMP%] {\n    color: #9f3bff;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .downarrow[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 30px;\n    padding: 0 5px;\n    cursor: pointer;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    padding: 18px 0 0 30px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .appdownload-block[_ngcontent-%COMP%] {\n    margin: auto;\n    display: inline-block;\n    color: #0ba114;\n    border: 1px solid #0ba114;\n    text-align: center;\n    padding: 9px 20px;\n    font-weight: 400;\n    border-radius: 3px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .appdownload-block[_ngcontent-%COMP%]:hover {\n    color: #fff !important;\n    background: #0ba114 !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n    float: right;\n    background: #ff7800;\n    padding: 2px 5px;\n    font-size: 10px;\n    box-sizing: content-box;\n    color: white;\n    vertical-align: middle;\n    display: inline;\n    line-height: 12px;\n    border-radius: 2px;\n    margin-top: 10px;\n    text-transform: uppercase;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n    line-height: 35px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-dropdown[_ngcontent-%COMP%] {\n    cursor: auto;\n    overflow: hidden;\n    position: absolute;\n    right: 0;\n    z-index: -1;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n    background-color: #fff;\n    color: #414146;\n    padding: 5px 0;\n    margin-top: 4px;\n    width: 223px;\n    border-radius: 2px;\n    border: solid 1px #f0f0f5;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.11);\n    transition: all 0.1s ease-out;\n  }\n}\n@media only screen and (min-width: 981px) and (max-width: 1020px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    width: 17%;\n  }\n}\n@media only screen and (min-width: 990px) and (max-width: 1070px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%] {\n    width: 44%;\n  }\n}\n@media only screen and (max-width: 980px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 801px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.desktop[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%] {\n    background-color: #fafafa;\n    display: block !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%]   .overlay_layer[_ngcontent-%COMP%] {\n    top: 60px !important;\n    background: transparent;\n    height: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n    margin-top: -4px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 24px;\n    margin-top: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    width: 100px;\n    z-index: 30;\n    margin: auto;\n    margin-left: 10px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .WhealthyLife_logo_new[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid.new_logo_wrap[_ngcontent-%COMP%] {\n    height: 23px !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .nav-items.dropdown-toggle[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 0 0 15px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%] {\n    padding: 0 0 0 10px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%] {\n    color: #14bef0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n    padding: 11px 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:focus {\n    background: #f4f4f4;\n    outline: none;\n    border: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n    background: #f4f4f4;\n    outline: none;\n    border: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n    color: #14bef0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i.ic[_ngcontent-%COMP%] {\n    color: #14bef0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    color: #414146;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .product-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i.ic[_ngcontent-%COMP%] {\n    color: #414146;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 25px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .downarrow[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .secondary-navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 800px) and (max-width: 800px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%] {\n    background-color: #fafafa;\n    display: block !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar.mobile[_ngcontent-%COMP%]   .overlay_layer[_ngcontent-%COMP%] {\n    top: 60px !important;\n    background: transparent;\n    height: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n    margin-top: -4px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-left[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 24px;\n    margin-top: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    width: 100px;\n    z-index: 30;\n    margin: auto;\n    margin-left: 10px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .WhealthyLife_logo_new[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-mid.new_logo_wrap[_ngcontent-%COMP%] {\n    height: 23px !important;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   .nav-items.dropdown-toggle[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0 0 0 15px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%] {\n    padding: 0 0 0 10px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%] {\n    color: #0ba114;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n    padding: 11px 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:focus {\n    background: #f4f4f4;\n    outline: none;\n    border: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:focus   a[_ngcontent-%COMP%] {\n    background: #f4f4f4;\n    outline: none;\n    border: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n    color: #0ba114;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink.selected[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i.ic[_ngcontent-%COMP%] {\n    color: #0ba114;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    color: #414146;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .product-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navlist[_ngcontent-%COMP%]   .navlink[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i.ic[_ngcontent-%COMP%] {\n    color: #414146;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 25px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .downarrow[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .secondary-navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .secondary-navigation__wrapper__promo-space[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .secondary-navigation__wrapper__product-links[_ngcontent-%COMP%], .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .secondary-navigation__wrapper__helpful-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .WhealthyLife_GlobalNavigation[_ngcontent-%COMP%]   .mobile.navbar[_ngcontent-%COMP%]   .nav-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 6px;\n  }\n}\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(30, 190, 240, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(30, 190, 240, 0);\n  }\n  to {\n    box-shadow: 0 0 0 0 rgba(30, 190, 240, 0);\n  }\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(30, 190, 240, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(30, 190, 240, 0);\n  }\n  to {\n    box-shadow: 0 0 0 0 rgba(30, 190, 240, 0);\n  }\n}\n@-webkit-keyframes keyframes-rotation {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes keyframes-rotation {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes tada {\n  0% {\n    transform: scale(1);\n    color: #28328c;\n    opacity: 1;\n  }\n  2.5%, 5% {\n    transform: scale(0.9) rotate(-8deg);\n  }\n  7.5%, 12.5%, 17.5% {\n    transform: scale(1.2) rotate(8deg);\n  }\n  10%, 15% {\n    transform: scale(1.2) rotate(-8deg);\n  }\n  20%, 25% {\n    transform: scale(1) rotate(0);\n  }\n  25% {\n    color: #28328c;\n    opacity: 1;\n  }\n  30% {\n    color: #626262;\n    opacity: 0.3;\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1);\n    color: #28328c;\n    opacity: 1;\n  }\n  2.5%, 5% {\n    transform: scale(0.9) rotate(-8deg);\n  }\n  7.5%, 12.5%, 17.5% {\n    transform: scale(1.2) rotate(8deg);\n  }\n  10%, 15% {\n    transform: scale(1.2) rotate(-8deg);\n  }\n  20%, 25% {\n    transform: scale(1) rotate(0);\n  }\n  25% {\n    color: #28328c;\n    opacity: 1;\n  }\n  30% {\n    color: #626262;\n    opacity: 0.3;\n  }\n}\n.mt-150[_ngcontent-%COMP%] {\n  margin-top: 150px;\n}\n.mt-100[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.mt-80[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n.mt-50[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.mt-57[_ngcontent-%COMP%] {\n  margin-top: 57px;\n}\n.mt-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mb-150[_ngcontent-%COMP%] {\n  margin-bottom: 150px;\n}\n.mb-100[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.mb-50[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.mb-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.book-opp[_ngcontent-%COMP%]   .img-icon[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 5px;\n  border-radius: 50%;\n}\n.margin_120_95[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  padding-bottom: 95px;\n  margin: 0 auto;\n}\n.book-appoiment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 23px;\n  font-weight: 400;\n}\n.book-appoiment[_ngcontent-%COMP%]   .c-icon__img[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.bookapo-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ececec;\n  transition: all 0.3s ease;\n  padding: 25px 15px 25px;\n  margin-bottom: 20px;\n  text-align: center;\n  cursor: pointer;\n}\n.bookapo-box[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 50px 30px -40px #00000085;\n}\n.bookapo-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #179cc3;\n}\n.bookapo-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #808080;\n}\nvideo[_ngcontent-%COMP%] {\n  position: relative !important;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.c-popular-searches[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 10px;\n}\n.c-popular-searches[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0px;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .c-icon[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    margin: 30px 0;\n  }\n\n  .c-icon[_ngcontent-%COMP%]:not(:last-child) {\n    border-right: 0;\n  }\n\n  *[_ngcontent-%COMP%] {\n    vertical-align: middle !important;\n  }\n\n  .c-offer-tag[_ngcontent-%COMP%] {\n    background-color: #00a500;\n    font-size: 12px;\n    padding: 1px 5px;\n    position: absolute;\n    border: 0;\n    right: 40px;\n  }\n\n  .c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper--keyword[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .c-omni-container--desktop[_ngcontent-%COMP%]   .c-omni__wrapper--locality[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .c-omni-wrapper[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n    z-index: 1;\n    position: relative;\n  }\n\n  .c-popular-searches__item[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .c-popular-searches[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.prev-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: -7px;\n}\n.next-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: -7px;\n}\n.rh5v-DefaultPlayer_component[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n@media (max-width: 450px) {\n  .mt-57[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n.defOption[_ngcontent-%COMP%] {\n  margin-top: 2.2rem;\n  background: linear-gradient(#45a29e, #3daaa4);\n  padding-top: 5px;\n  padding-bottom: 10px;\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rYXBwb2ltZW50L2Jvb2thcHBvaW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYm9va2FwcG9pbWVudC9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGJvb2thcHBvaW1lbnRcXGJvb2thcHBvaW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWY7RUFDQztJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFREVGO0FBQ0Y7QUNHQztFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRERKO0FDR0E7RUFDRSwyQkFBQTtFQUNBLHVCQUFBO0FEQUY7QUNFQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBRENGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QURFRjtBQ0FBO0VBQ0UseUJBQUE7QURHRjtBQ0FBO0VBQ0UsZ0JBQUE7QURHRjtBQ0RBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBOztFQUVFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FES0Y7QUNIQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBRE1GO0FDSkE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QURPRjtBQ0xBO0VBQ0UsaUJBQUE7QURRRjtBQ05BO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QURTRjtBQ1BBO0VBQ0Usa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFlB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O0VBQ0EsT0FBQTtBRHNRRjtBQ25RQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRHNRRjtBQ3BRQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBRHVRRjtBQ3BRQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VEdVFGOztFQ3JRQTtJQUNFLGVBQUE7RUR3UUY7O0VDdFFBO0lBQ0UsaUNBQUE7RUR5UUY7O0VDdlFBO0lBQ0UseUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VEMFFGOztFQ3hRQTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFRDJRRjs7RUN6UUE7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7RUQ0UUY7O0VDMVFBO0lBQ0UsVUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUQ2UUY7O0VDMVFBO0lBQ0UsV0FBQTtFRDZRRjs7RUMxUUE7SUFDRSxXQUFBO0VENlFGO0FBQ0Y7QUMxUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FENFFGO0FDelFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBRDRRRjtBQ3pRQTtFQUNFLG9CQUFBO0FENFFGO0FDelFBO0VBQ0U7SUFDRSxnQkFBQTtFRDRRRjtBQUNGO0FDMVFBO0VBQ0Usa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBRDRRRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9va2FwcG9pbWVudC9ib29rYXBwb2ltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwKSB7XG4gIC50ZXh0YyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG52aWRlbyB7XG4gIG9wYWNpdHk6IDEwMDtcbiAgdG9wOiAxMjUwcHg7XG4gIGxlZnQ6IDM5MHB4O1xufVxuXG5pbnB1dC5uZy11bnRvdWNoZWQubmctcHJpc3RpbmUubmctdmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4uYy1hcnRpY2xlLWxpc3RfX25leHRfYXJyb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgIWltcG9ydGFudDtcbn1cblxuLmMtYXJ0aWNsZS1saXN0X19wcmV2X2Fycm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcbn1cblxuLmNmdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XG59XG5cbi51LWJvbGQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vKiEgQ1NTIFVzZWQgZnJvbTogRW1iZWRkZWQgKi9cbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGVmdDogLTk5OWVtO1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiA4cHggMjFweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xuICB0b3A6IC05OTllbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwOmJlZm9yZSxcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC50eXBlLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cblxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAudHlwZS1kYXJrLnBsYWNlLXRvcDphZnRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyMjI7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiA2cHg7XG59XG5cbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnBsYWNlLXRvcCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5wbGFjZS10b3A6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAucGxhY2UtdG9wOmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogLTZweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cblxuLyohIENTUyBVc2VkIGZvbnRmYWNlcyAqL1xuLyohIENTUyBVc2VkIGZyb206IEVtYmVkZGVkICovXG5mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcbiAgZm9udC1mYW1pbHk6IENhbXBob3IsIHZlcmRhbmEgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MTQxNDY7XG59XG5cbi51LXQtd2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnUtZC1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5yaDV2LU92ZXJsYXlfY29tcG9uZW50LFxuLnUtZC1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnUtZi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnUtZi1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jLWJ1dHRvbl9fcmVkaXJlY3QsXG4uYy1mb290ZXJfX2NvbHVtbixcbi5jLW5hdl9fbG9nbyxcbi51LWQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udS10LWdyZWVuIHtcbiAgY29sb3I6ICMwMGE1MDA7XG59XG5cbi51LXQtZ3JleSB7XG4gIGNvbG9yOiAjNzg3ODg3O1xufVxuXG4udS10LXJlZ3VsYXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51LWlubGluZS1taWRkbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jLW5hdixcbi51LWZpbGwtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udS10LXB1bHNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwYmExMTQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoNDAsIDE5MCwgMjQwLCAwLjQpO1xuICBhbmltYXRpb246IHB1bHNlIDEuMnMgaW5maW5pdGU7XG59XG5cbi5jLWJ1dHRvbl9fcmVkaXJlY3QsXG4udS10LXB1bHNlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udS1yb3VuZC1jb3JuZXIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi51LXQtY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMGVtO1xuICBiYWNrZ3JvdW5kOiAjYzVlNmYzO1xufVxuXG4udS10LWNpcmNsZSxcbi51LXQtY2lyY2xlIC51LXQtdHJpYW5nbGUge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udS10LWNpcmNsZSAudS10LXRyaWFuZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGtleWZyYW1lcy1yb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnUtdC1jaXJjbGUgLnUtdC10cmlhbmdsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgcmdiYSgxOTcsIDIzMCwgMjQzLCAwLjc5KSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMGJhMTE0IDAsIHJnYmEoMCwgNTgsIDUyLCAwKSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzBiYTExNDtcbn1cblxuLmMtYXJ0aWNsZS1jYXJkX19ib2R5IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uYy1qdW1ib19faGVhZGVyX2NvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jLXNlY3Rpb25fX2hpZ2hsaWdodHNfdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYy1qdW1ib19fc3ViaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jLXRlc3RpbW9uaWFsX19yZXZpZXdfdGV4dCxcbi51LW0tYi0xMCB7XG4gIHBhZGRpbmc6IDBweCAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udS1tLWItNSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmMtb3JkZXJfX2xhc3Rfb3JkZXJfaW5mbyxcbi51LW0tdC0yNSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jLXRlc3RpbW9uaWFsLWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udS1tLWwtMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmMtc2VjdGlvbl9fY29udGFpbmVyLFxuLmMtc2VjdGlvbl9fY29udGVudCxcbi5jLXNlY3Rpb25fX3JpZ2h0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jLXNlY3Rpb25fX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTAwcHg7XG59XG5cbi5jLWJ1dHRvbl9fcmVkaXJlY3Qge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5jLWljb24gPiBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogM21tO1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi5pY29uLXVzZXI6YmVmb3JlIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYy1zZWN0aW9uX19jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG59XG5cbi51LXctNTAge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYy1uYXZiYXIsXG4uYy1zZWN0aW9uX19jb250YWluZXIsXG4udS13LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYy1jZXJ0aWZpY2F0ZSxcbi5jLWZvb3Rlcl9fY29sdW1uLFxuLmMtb3JkZXJfX2xhc3Rfb3JkZXJfaW5mbyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jLW5hdl9fbG9nbyxcbi5jLXNlY3Rpb25fX2NvbnRhaW5lciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jLWJ1dHRvbl9fcmVkaXJlY3QsXG4uYy1jZXJ0aWZpY2F0ZSxcbi5jLWZvb3Rlcl9fY29weXJpZ2h0LFxuLmMtc2VjdGlvbl9fcmlnaHQsXG4udS10LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmMtbGlzdC1pdGVtX19pY29uIHtcbiAgY29sb3I6ICMwYmExMTQ7XG59XG5cbi51LXRpdGxlLWZvbnQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51LWJhc2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmMtc2VjdGlvbl9fY29udGVudCxcbi51LWNsZWFyZml4IHtcbiAgKnpvb206IDE7XG59XG5cbi5jLXNlY3Rpb25fX2NvbnRlbnQ6YWZ0ZXIsXG4uYy1zZWN0aW9uX19jb250ZW50OmJlZm9yZSxcbi51LWNsZWFyZml4OmFmdGVyLFxuLnUtY2xlYXJmaXg6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG59XG5cbi51LWJvcmRlci13aGl0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5jLWJ1dHRvbl9fcmVkaXJlY3Qge1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiYTExNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBiYTExNDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jLW9mZmVyLXRhZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3JkZXI6IDA7XG59XG5cbi5jLWljb24tbGlzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIGhlaWdodDogODBweDsgKi9cbiAgcGFkZGluZzogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJhMTE0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jLWljb24tbGlzdF9fbGlzdF93cmFwcGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jLWljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jLWljb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YTUzODc7XG59XG5cbi5jLWljb246aG92ZXIgLnRhYi1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4uYy1pY29uOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmMtaWNvbl9faW1nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5jLWljb24gPiBzcGFuIHtcbiAgY29sb3I6ICNiOGJiZDk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmMtaWNvbiAudGFiLW9mZmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jLWp1bWJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzI4Yztcbn1cblxuLmMtanVtYm9fX2Jhbm5lciB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hvbWVwYWdlLjA2ODU5NTkzMjQwYzNlZmQ0ODNmZTQ4OTUxY2ZlNmZmLnBuZykgdG9wIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA2MHB4O1xufVxuXG4uYy1qdW1ib19faGVhZGVyX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uYy1qdW1ib19faGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYy1qdW1ib19fc3ViaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmMtbXktZG9jdG9ycyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxZW07XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jLW9tbmktd3JhcHBlciB7XG4gIHdpZHRoOiA3ODVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmMtcG9wdWxhci1zZWFyY2hlcyB7XG4gIGNvbG9yOiAjOGQ5M2IzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzg1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYy1wb3B1bGFyLXNlYXJjaGVzX19pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYy1tZWRpYS1saXN0IHtcbiAgYmFja2dyb3VuZDogdXJsKC8vd3d3LldoZWFsdGh5TGlmZXN0YXRpYy5jb20vd2ViLWFzc2V0cy9ob21lL2Fzc2V0cy9pbWFnZXMvbG9nb19pbmRpYS42YWUwMzdjMTFmM2MwOGMwZjk3NGFkMzVkMjJjZGM1NS5wbmcpIHRvcCBuby1yZXBlYXQ7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmMtbWVkaWEtbGlzdC5mb3J0dW5lIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ1cHggLTEwcHg7XG4gIHdpZHRoOiAxMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5jLW1lZGlhLWxpc3Q6bm90KC5ob3NwaXRhbC1sb2dvLWltYWdlKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmMtbWVkaWEtbGlzdDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uYy1tZWRpYS1saXN0LnRlY2gtY3J1bmNoIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTcwcHg7XG4gIHdpZHRoOiAxMzdweDtcbn1cblxuLmMtbWVkaWEtbGlzdC5mb3JiZXMge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjJweCAtMTI5cHg7XG4gIHdpZHRoOiA3OHB4O1xufVxuXG4uYy1tZWRpYS1saXN0LmVjb25vbWljIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTlweCAtMTg3cHg7XG4gIHdpZHRoOiAxODRweDtcbn1cblxuLmMtbWVkaWEtbGlzdC53YWxsLXN0cmVldCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xM3B4IC0yNDhweDtcbiAgd2lkdGg6IDE3NXB4O1xufVxuXG4uYy1tZWRpYS1saXN0LnRpbWVzIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ3cHggLTMwNXB4O1xuICB3aWR0aDogMTA1cHg7XG59XG5cbi5jLW1lZGlhLWxpc3Q6bm90KC5ob3NwaXRhbC1sb2dvLWltYWdlKTpob3ZlciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY3VzdG9tZXItbG9nby1mb290ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jLWNvbnN1bHRfX2RvY3RvcnNfb25saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uYy1jb25zdWx0X19kb2N0b3JzX3B1bHNlIHtcbiAgbWFyZ2luOiAxcHggMTBweCAwIDA7XG59XG5cbi5jLWRvd25sb2FkX19zZWN0aW9uLXBpYyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5jLWRvd25sb2FkX19saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi5jLWRvd25sb2FkX19hcHBfbGlua3MgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jLWNvdW50cnktbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTU7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYmFja2dyb3VuZDogI2YwZjBmNTtcbn1cblxuLmMtY291bnRyeS1saXN0X193cmFwcGVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYy1jb3VudHJ5LWxpc3RfX2xpbmsge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmMtY291bnRyeS1saXN0X193cmFwcGVyIC5jLWNvdW50cnktbGlzdF9fbGluazpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4uYy1jb3VudHJ5LWxpc3RfX2xpbmsgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0MTQxNDY7XG59XG5cbi5jLWNvdW50cnktbGlzdF9fZmxhZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYy1jb3VudHJ5LWxpc3RfX2ZsYWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMnB4O1xuICB0b3A6IC0ycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvL3d3dy5XaGVhbHRoeUxpZmVzdGF0aWMuY29tL3dlYi1hc3NldHMvaG9tZS9hc3NldHMvaW1hZ2VzL2ZsYWdzX3NtYWxsLjA1ODU2NzY0YTM4Yzg0MjQwN2M5NzcwYzY5ODdiNTJkLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jLWNvdW50cnktbGlzdF9fbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5jLWNvdW50cnktbGlzdF9fZmxhZ19zaW5nYXBvcmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTNweCAtNTJweDtcbn1cblxuLmMtY291bnRyeS1saXN0X19mbGFnX3BoaWxpcHBpbmVzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zcHggLTI3cHg7XG59XG5cbi5jLWNvdW50cnktbGlzdF9fZmxhZ19pbmRvbmVzaWE6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTNweCAtMTAzcHg7XG59XG5cbi5jLWNvdW50cnktbGlzdF9fZmxhZ19icmF6aWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTNweCAtMTcycHg7XG59XG5cbi5jLWFydGljbGUtY2FyZCB7XG4gIHdpZHRoOiAzMzMuMzNweDtcbn1cblxuLmMtYXJ0aWNsZS1jYXJkX19jb250YWluZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNDE0MTQ2O1xufVxuXG4uYy1hcnRpY2xlLWNhcmRfX2JvZHkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWU4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCAjZTBlMGU1O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbn1cblxuLmMtYXJ0aWNsZS1jYXJkX19pbWFnZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmMtYXJ0aWNsZS1jYXJkX19pbWFnZS13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAzMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jLWFydGljbGUtY2FyZF9kZXRhaWxzIHtcbiAgcGFkZGluZzogOHB4IDE1cHggMTVweDtcbn1cblxuLmMtYXJ0aWNsZS1jYXJkX2F1dGhvciB7XG4gIGNvbG9yOiAjNzg3ODg3O1xufVxuXG4uYy1hcnRpY2xlLWNhcmRfX2JvZHk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG4uYy1hcnRpY2xlLWNhcmRfYnVsbGV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNzg3ODg3O1xuICBtYXJnaW46IC0xcHggMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IDFweDtcbn1cblxuLmMtYXJ0aWNsZS1saXN0X19wcmV2X2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTc3cHg7XG4gIG1hcmdpbi10b3A6IC00NXB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5jLWFydGljbGUtbGlzdF9fYXJyb3cge1xuICBjb2xvcjogI2I0YjRiZTtcbn1cblxuLmMtYXJ0aWNsZS1saXN0X19uZXh0X2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IC03N3B4O1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4uYy1hcnRpY2xlLWxpc3RfX3ByZXZfYXJyb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmMtYXJ0aWNsZS1saXN0X19uZXh0X2Fycm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4uYy1oZWFsdGhmZWVkIHtcbiAgcGFkZGluZzogMzVweCAwO1xufVxuXG4uYy1oZWFsdGhmZWVkX19oZWFkZXIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jLWhlYWx0aGZlZWRfX2FydGljbGVzX3dyYXBwZXIge1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAzNzBweDtcbn1cblxuLmMtb3JkZXJfX2xhc3Rfb3JkZXJfaW5mbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI4NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jLW9yZGVyX19sYXN0X29yZGVyX3RleHQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmMtb3JkZXJfX2xhc3Rfb3JkZXJfaW5mbyAudS10LWNpcmNsZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmMtcHJvdmlkZXItbG9nbyB7XG4gIGJhY2tncm91bmQ6IHVybCgvL3d3dy5XaGVhbHRoeUxpZmVzdGF0aWMuY29tL3dlYi1hc3NldHMvaG9tZS9hc3NldHMvaW1hZ2VzL2xvZ29faW5kaWEuNmFlMDM3YzExZjNjMDhjMGY5NzRhZDM1ZDIyY2RjNTUucG5nKSB0b3Agbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5jLXByb3ZpZGVyLWxvZ29fX3N1Z3VuYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDgxcHggLTM2N3B4O1xuICB3aWR0aDogMzIwcHg7XG59XG5cbi5jLXByb3ZpZGVyLWxvZ29fX3ByYXRpa3NoYSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xcHggLTQyMHB4O1xuICB3aWR0aDogMjQ1cHg7XG59XG5cbi5jLXByb3ZpZGVyLWxvZ29fX25tYyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNXB4IC00ODFweDtcbiAgd2lkdGg6IDIxMHB4O1xufVxuXG4uYy1wcm92aWRlci1sb2dvX192cHMge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzBweCAtNTk5cHg7XG4gIHdpZHRoOiAxNTZweDtcbn1cblxuLmMtY2VydGlmaWNhdGUge1xuICB3aWR0aDogMjMlO1xufVxuXG4uYy1jZXJ0aWZpY2F0ZV9faW5mbyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jLWNlcnRpZmljYXRlLWxpc3Qge1xuICB3aWR0aDogOTI1cHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuW2NsYXNzKj1cIiBpY29uLWljX1wiXTpiZWZvcmUsXG5bY2xhc3NePWljb24taWNfXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogQ2FtcGhvciwgdmVyZGFuYSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNwZWFrOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjJlbTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5pY29uLWljX2RvbmVfYmFkZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuoIBcIjtcbn1cblxuLmljb24taWNfZG9uZV9vcGVuX3N5c3RlbTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6mqFwiO1xufVxuXG4uaWNvbi1pY19zdGFyX3NvbGlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qS0XCI7XG59XG5cbi5pY29uLWljX3VzZXJfc3lzdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSeXCI7XG59XG5cbi5pY29uLWljX2JhY2tfY2hldmVyb246YmVmb3JlIHtcbiAgY29udGVudDogXCLupY5cIjtcbn1cblxuLmljb24taWNfbmV4dF9jaGV2ZXJvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kvFwiO1xufVxuXG4uaWNvbi1pY19kb3duX2NoZXZlcm9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qWHXCI7XG59XG5cbi5pY29uLWljX2RyYXdlcl9zeXN0ZW06YmVmb3JlIHtcbiAgY29udGVudDogXCLupYZcIjtcbn1cblxuLmljb24taWNfZHJvcGRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLuppxcIjtcbn1cblxuLmljb24taWNfY2hhdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6koVwiO1xufVxuXG4uaWNvbi1pY19jYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSgXCI7XG59XG5cbi5pY29uLWljX3JlY29yZHNfMzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6lr1wiO1xufVxuXG4uaWNvbi1pY19sYWJfaG9tZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6mtFwiO1xufVxuXG4uaWNvbi1pY19yZWFkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qWxXCI7XG59XG5cbi5pY29uLWljX2JyaWVmY2FzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kqVwiO1xufVxuXG4uaWNvbi1pY19jbGluaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupKJcIjtcbn1cblxuLmljb24taWNfbG9jYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLupoRcIjtcbn1cblxuLmljb24taWNfZ3BzX3N5c3RlbTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6mulwiO1xufVxuXG4uaWNvbi1pY19zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCLupaZcIjtcbn1cblxuLmljb24taWNfcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuo65cIjtcbn1cblxuLmMtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jLW5hdiB7XG4gIGhlaWdodDogMTAycHg7XG59XG5cbi5jLW5hdl9fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweCAwIDEycHggNTBweDtcbn1cblxuLmMtbmF2X19tZW51LFxuLmMtbmF2X193cmFwcGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG59XG5cbi5jLW5hdl9fbWVudSB7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmMtbmF2X19sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbmF2LldoZWFsdGh5TGlmZS5jb20vOC4wLjI2L2NvbnN1bWVyL2ltYWdlcy9XaGVhbHRoeUxpZmUuc3ZnKSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjNweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDNweCAwIDA7XG59XG5cbi5jLWZvb3RlciB7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMjhjO1xuICBwYWRkaW5nOiA0OHB4IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jLWZvb3Rlcl9fd3JhcHBlciB7XG4gIHdpZHRoOiAxMTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmMtZm9vdGVyX19jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLmMtZm9vdGVyX19sb2dvIHtcbiAgbWFyZ2luOiAyOHB4IDA7XG59XG5cbi5jLWZvb3Rlcl9fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmMtZm9vdGVyX19yb3cge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYy1mb290ZXJfX2l0ZW0ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmMtZm9vdGVyX19pdGVtOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jLWZvb3Rlcl9fY29sdW1uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTguOSU7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uYy1mb290ZXJfX2NvbHVtbjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jLWNvcHlyaWdodCB7XG4gIGNvbG9yOiAjYjhiYmQ5O1xufVxuXG4uc2xpY2stc2xpZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2xpY2stbGlzdCxcbi5zbGljay1zbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpY2stbGlzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNsaWNrLWxpc3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0LFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2sge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5zbGljay10cmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNsaWNrLXRyYWNrOmFmdGVyLFxuLnNsaWNrLXRyYWNrOmJlZm9yZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uc2xpY2stdHJhY2s6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnNsaWNrLXNsaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG4uc2xpY2stc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmMtaG9tZSB7XG4gIG1hcmdpbi10b3A6IDEwMnB4O1xuICBtaW4td2lkdGg6IDExODBweDtcbn1cblxuLmMtb21uaS1zZWFyY2hib3hfd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmMtb21uaS1zZWFyY2hib3hfX2ljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmMtb21uaS1zZWFyY2hib3gge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IENhbXBob3IsIHZlcmRhbmEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBwYWRkaW5nOiA2cHggMjBweCA1cHggMzBweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2I0YjRiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiAwO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmMtb21uaS1zZWFyY2hib3g6YWN0aXZlLFxuLmMtb21uaS1zZWFyY2hib3g6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM3ODc4ODc7XG59XG5cbi5jLW9tbmktc2VhcmNoYm94LS1sYXJnZSB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmMtb21uaS1zZWFyY2hib3hfX2J1dHRvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmNTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmMtb21uaS1zZWFyY2hib3hfX2J1dHRvbi1jb250YWluZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgaGVpZ2h0OiA3MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYy1vbW5pLXNlYXJjaGJveF9fYnV0dG9uIGkge1xuICBjb2xvcjogIzc4Nzg4NztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYy1vbW5pLXNlYXJjaGJveF9fYnV0dG9uX190ZXh0IHtcbiAgdG9wOiAxcHg7XG59XG5cbi5jLW9tbmktc2VhcmNoYm94X19idXR0b25fX3RleHQsXG4uYy1vbW5pLXNlYXJjaGJveF9fYnV0dG9uIGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jLXNlY3Rpb25fX2NvbnRlbnQ6YWZ0ZXIsXG4uYy1zZWN0aW9uX19jb250ZW50OmJlZm9yZSxcbi51LWNsZWFyZml4OmFmdGVyLFxuLnUtY2xlYXJmaXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jLXNlY3Rpb25fX2NvbnRlbnQ6YWZ0ZXIsXG4udS1jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uYy1zZWN0aW9uX19jb250ZW50LFxuLnUtY2xlYXJmaXgge1xuICB6b29tOiAxO1xufVxuXG4uYy1vbW5pIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNDE0MTQ2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG4uYy1vbW5pX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyLS1sb2NhbGl0eSB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5jLW9tbmktY29udGFpbmVyLS1kZXNrdG9wIC5jLW9tbmlfX3dyYXBwZXItLWxvY2FsaXR5IC5jLW9tbmktc2VhcmNoYm94IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyLS1rZXl3b3JkIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmMtb21uaS1jb250YWluZXItLWRlc2t0b3AgLmMtb21uaV9fd3JhcHBlci0ta2V5d29yZCAuYy1vbW5pLXNlYXJjaGJveCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4vKiEgQ1NTIFVzZWQgZnJvbTogaHR0cHM6Ly93d3cuV2hlYWx0aHlMaWZlc3RhdGljLmNvbS9uYXYvOC4wLjMyL2NvbnN1bWVyL2Nzcy9XaGVhbHRoeUxpZmVuYXYuY3NzIDsgbWVkaWE9YWxsICovXG5AbWVkaWEgYWxsIHtcbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgYSxcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtaXRlbXMuaG92ZXItZGFyayBhLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QsXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluayAucHJvZHVjdC1ibG9jayBkaXYsXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAudS1kLWl0ZW0sXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAudS1kLWl0ZW0gYSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDIwMDA7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0LFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQsXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LXJpZ2h0IHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAudGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLmJ0bi1ib3JkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQxNDE0NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM0MTQxNDYgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAuYnRuLWJvcmRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBiYTExNDtcbiAgICBjb2xvcjogIzBiYTExNCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIFtjbGFzc149aWNvbi1dLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIFtjbGFzcyo9XCIgaWNvbi1cIl0ge1xuICAgIGZvbnQtZmFtaWx5OiBcInByYWN0aWNvblwiICFpbXBvcnRhbnQ7XG4gICAgc3BlYWs6IG5vbmU7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogXCJDYW1waG9yXCIsIFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIGNvbG9yOiAjNDE0MTQ2O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE2LCAyMTYsIDIxNiwgMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC53cmFwcGVyIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5vdmVybGF5X2xheWVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSAub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHRvcDogNjBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogMC4xcztcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSAub3ZlcmxheSAubmF2bGlzdCAubmF2bGluazpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5tb2JpbGUgLm5hdi1sb2dpbi1tb2JpbGUuYnRuLWJvcmRlciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjMGJhMTE0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4IDEycHggOHB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMwYmExMTQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIkNhbXBob3JcIjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBhOmZvY3VzLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgaTpmb2N1cyxcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGRpdjpmb2N1cyxcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIHNwYW46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGE6Oi1tb3otc2VsZWN0aW9uLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgYTo6c2VsZWN0aW9uLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgYTo6LXdlYmtpdC1zZWxlY3Rpb24sXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBpOjotbW96LXNlbGVjdGlvbixcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGk6OnNlbGVjdGlvbixcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGk6Oi13ZWJraXQtc2VsZWN0aW9uLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgZGl2OjotbW96LXNlbGVjdGlvbixcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGRpdjo6c2VsZWN0aW9uLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgZGl2Ojotd2Via2l0LXNlbGVjdGlvbixcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIHNwYW46Oi1tb3otc2VsZWN0aW9uLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgc3Bhbjo6c2VsZWN0aW9uLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgc3Bhbjo6LXdlYmtpdC1zZWxlY3Rpb24ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCxcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1yaWdodCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyNTJweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IC5pYzo6YmVmb3JlIHtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCAuV2hlYWx0aHlMaWZlLWxvZ28ge1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1pdGVtcy5ob3Zlci1kYXJrIGEge1xuICAgIGNvbG9yOiAjNDE0MTQ2O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1pdGVtczpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCBhIHtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHBhZGRpbmc6IDAgMCAwIDI0cHg7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rIC5pY29uLXdyYXAge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluayAucHJvZHVjdC1ibG9jayB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgLnByb2R1Y3QtYmxvY2sgZGl2IHtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rIGEgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsuc2VsZWN0ZWQgPiBhIHtcbiAgICBjb2xvcjogIzBiYTExNDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsuc2VsZWN0ZWQgPiBhIGkuaWMge1xuICAgIGNvbG9yOiAjMGJhMTE0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluazpob3ZlciBhIHtcbiAgICBjb2xvcjogIzBiYTExNDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEgLnByb2R1Y3QtYmxvY2sgZGl2OmZpcnN0LWNoaWxkLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6aG92ZXIgYSBpLmljIHtcbiAgICBjb2xvcjogIzBiYTExNDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5XaGVhbHRoeUxpZmVfbG9nb19uZXcsXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaWMsXG4uV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaGFtYnVyZ2VyLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25hcnJvdyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuV2hlYWx0aHlMaWZlX2xvZ29fbmV3IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuV2hlYWx0aHlMaWZlc3RhdGljLmNvbS9uYXYvOC4wLjMyL2NvbnN1bWVyL2ltYWdlcy9XaGVhbHRoeUxpZmUuc3ZnKSBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IC0zcHggMCAwIDA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaWMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5pYy5pY29uLWljX2RvbmVfYmFkZ2Uge1xuICAgIGNvbG9yOiAjOWYzYmZmO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmhhbWJ1cmdlciB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaGFtYnVyZ2VyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZG93bmFycm93IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25sb2FkIHtcbiAgICBwYWRkaW5nOiAxOHB4IDAgMCAzMHB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25sb2FkIC5hcHBkb3dubG9hZC1ibG9jayB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzBiYTExNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGJhMTE0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5kb3dubG9hZCAuYXBwZG93bmxvYWQtYmxvY2s6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogIzBiYTExNCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uZXcge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZmY3ODAwO1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtZHJvcGRvd24ge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgd2lkdGg6IDIyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZjBmMGY1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MXB4KSBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCB7XG4gICAgd2lkdGg6IDE3JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkgYW5kIChtYXgtd2lkdGg6IDEwNzBweCkge1xuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LW1pZCB7XG4gICAgd2lkdGg6IDQ0JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5tb2JpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSAub3ZlcmxheV9sYXllciB7XG4gICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCAuaWMge1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQgLmhhbWJ1cmdlciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LW1pZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHotaW5kZXg6IDMwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQgYSAuV2hlYWx0aHlMaWZlX2xvZ29fbmV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkLm5ld19sb2dvX3dyYXAge1xuICAgIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1yaWdodCAubmF2LWl0ZW1zLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgMTVweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5vdmVybGF5IHtcbiAgICB0b3A6IDBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjMTRiZWYwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDExcHggMDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6Zm9jdXMgYSB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rLnNlbGVjdGVkOmhvdmVyID4gYSB7XG4gICAgY29sb3I6ICMxNGJlZjA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZDpob3ZlciA+IGEgaS5pYyB7XG4gICAgY29sb3I6ICMxNGJlZjA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluazpob3ZlciBhIHtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEgLnByb2R1Y3QtYmxvY2sgZGl2OmZpcnN0LWNoaWxkLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6aG92ZXIgYSBpLmljIHtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5pYyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25hcnJvdyB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5kb3dubG9hZCB7XG4gICAgcGFkZGluZzogMThweCAxNnB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5zZWNvbmRhcnktbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5tb2JpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSAub3ZlcmxheV9sYXllciB7XG4gICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCAuaWMge1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQgLmhhbWJ1cmdlciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LW1pZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHotaW5kZXg6IDMwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQgYSAuV2hlYWx0aHlMaWZlX2xvZ29fbmV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkLm5ld19sb2dvX3dyYXAge1xuICAgIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1yaWdodCAubmF2LWl0ZW1zLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgMTVweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5vdmVybGF5IHtcbiAgICB0b3A6IDBweDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rIHtcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjMGJhMTE0O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDExcHggMDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6Zm9jdXMgYSB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rLnNlbGVjdGVkOmhvdmVyID4gYSB7XG4gICAgY29sb3I6ICMwYmExMTQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZDpob3ZlciA+IGEgaS5pYyB7XG4gICAgY29sb3I6ICMwYmExMTQ7XG4gIH1cblxuICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluazpob3ZlciBhIHtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEgLnByb2R1Y3QtYmxvY2sgZGl2OmZpcnN0LWNoaWxkLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6aG92ZXIgYSBpLmljIHtcbiAgICBjb2xvcjogIzQxNDE0NjtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5pYyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25hcnJvdyB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5kb3dubG9hZCB7XG4gICAgcGFkZGluZzogMThweCAxNnB4O1xuICB9XG5cbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5zZWNvbmRhcnktbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAuc2Vjb25kYXJ5LW5hdmlnYXRpb25fX3dyYXBwZXJfX3Byb21vLXNwYWNlLFxuLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5zZWNvbmRhcnktbmF2aWdhdGlvbl9fd3JhcHBlcl9fcHJvZHVjdC1saW5rcyxcbi5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAuc2Vjb25kYXJ5LW5hdmlnYXRpb25fX3dyYXBwZXJfX2hlbHBmdWwtbGlua3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm92ZXJsYXkge1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5tb2JpbGUubmF2YmFyIC5uYXYtcmlnaHQgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDMwLCAxOTAsIDI0MCwgMC40KTtcbiAgfVxuICA3MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgzMCwgMTkwLCAyNDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMzAsIDE5MCwgMjQwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBrZXlmcmFtZXMtcm90YXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgfVxufVxuQGtleWZyYW1lcyB0YWRhIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGNvbG9yOiAjMjgzMjhjO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMi41JSwgNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHJvdGF0ZSgtOGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHJvdGF0ZSgtOGRlZyk7XG4gIH1cbiAgNy41JSwgMTIuNSUsIDE3LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoOGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg4ZGVnKTtcbiAgfVxuICAxMCUsIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlKC04ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlKC04ZGVnKTtcbiAgfVxuICAyMCUsIDI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcbiAgfVxuICAyNSUge1xuICAgIGNvbG9yOiAjMjgzMjhjO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMzAlIHtcbiAgICBjb2xvcjogIzYyNjI2MjtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbi5tdC0xNTAge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLm10LTEwMCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4ubXQtODAge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtNTcge1xuICBtYXJnaW4tdG9wOiA1N3B4O1xufVxuXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWItMTUwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5tYi0xMDAge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLm1iLTUwIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLm1iLTMwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJvb2stb3BwIC5pbWctaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubWFyZ2luXzEyMF85NSB7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDk1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYm9vay1hcHBvaW1lbnQgaDIge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5ib29rLWFwcG9pbWVudCAuYy1pY29uX19pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmJvb2thcG8tYm94IC5pbm5lci1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwYWRkaW5nOiAyNXB4IDE1cHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib29rYXBvLWJveCAuaW5uZXItYm94OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICBib3gtc2hhZG93OiAwIDUwcHggMzBweCAtNDBweCAjMDAwMDAwODU7XG59XG5cbi5ib29rYXBvLWJveCBoMyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMxNzljYzM7XG59XG5cbi5ib29rYXBvLWJveCBoNSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG5cbnZpZGVvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jLXBvcHVsYXItc2VhcmNoZXMgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYy1wb3B1bGFyLXNlYXJjaGVzIHVsIGxpIGEge1xuICBtYXJnaW46IDAgMTBweCAwIDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYy1pY29uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMzBweCAwO1xuICB9XG5cbiAgLmMtaWNvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gIH1cblxuICAqIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYy1vZmZlci10YWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDFweCA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICByaWdodDogNDBweDtcbiAgfVxuXG4gIC5jLW9tbmktY29udGFpbmVyLS1kZXNrdG9wIC5jLW9tbmlfX3dyYXBwZXItLWtleXdvcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyLS1sb2NhbGl0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jLW9tbmktd3JhcHBlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jLXBvcHVsYXItc2VhcmNoZXNfX2l0ZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgLmMtcG9wdWxhci1zZWFyY2hlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5wcmV2LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTdweDtcbn1cblxuLm5leHQtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogLTdweDtcbn1cblxuLnJoNXYtRGVmYXVsdFBsYXllcl9jb21wb25lbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5tdC01NyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuLmRlZk9wdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIuMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0NWEyOWUsICMzZGFhYTQpO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59IiwiIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwKXtcclxuICAudGV4dGN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gfVxyXG4gXHJcblxyXG4gXHJcbiB2aWRlbyB7XHJcbiAgICBvcGFjaXR5OiAxMDA7XHJcbiAgICB0b3A6IDEyNTBweDtcclxuICAgIGxlZnQ6IDM5MHB4O1xyXG59XHJcbmlucHV0Lm5nLXVudG91Y2hlZC5uZy1wcmlzdGluZS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jLWFydGljbGUtbGlzdF9fbmV4dF9hcnJvdyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgIWltcG9ydGFudDtcclxufVxyXG4uYy1hcnRpY2xlLWxpc3RfX3ByZXZfYXJyb3cge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcclxufVxyXG4uY2Z3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGY1O1xyXG59XHJcblxyXG4udS1ib2xkIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi8qISBDU1MgVXNlZCBmcm9tOiBFbWJlZGRlZCAqL1xyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGVmdDogLTk5OWVtO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcGFkZGluZzogOHB4IDIxcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcclxuICB0b3A6IC05OTllbTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwOmJlZm9yZSxcclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC50eXBlLWRhcmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAudHlwZS1kYXJrLnBsYWNlLXRvcDphZnRlciB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzIyMjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItdG9wLXdpZHRoOiA2cHg7XHJcbn1cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAucGxhY2UtdG9wIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5wbGFjZS10b3A6YmVmb3JlIHtcclxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm90dG9tOiAtOHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAucGxhY2UtdG9wOmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvdHRvbTogLTZweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbn1cclxuLyohIENTUyBVc2VkIGZvbnRmYWNlcyAqL1xyXG5cclxuLyohIENTUyBVc2VkIGZyb206IEVtYmVkZGVkICovXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XHJcbiAgZm9udC1mYW1pbHk6IENhbXBob3IsIHZlcmRhbmEgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzQxNDE0NjtcclxufVxyXG4vLyAqe3RvcDphdXRvOy1vLWJveC1zaXppbmc6Ym9yZGVyLWJveDstbXMtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdXRsaW5lOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO2ZvbnQtc2l6ZToxMDAlO2ZvbnQ6aW5oZXJpdDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt9XHJcbi8vIC5jLWNvcHlyaWdodCwuYy1mb290ZXJfX3RpdGxlLC51LXQtYm9sZHtmb250LXdlaWdodDo3MDA7fVxyXG4udS10LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4udS1kLWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5yaDV2LU92ZXJsYXlfY29tcG9uZW50LFxyXG4udS1kLWhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnUtZi1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi51LWYtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmMtYnV0dG9uX19yZWRpcmVjdCxcclxuLmMtZm9vdGVyX19jb2x1bW4sXHJcbi5jLW5hdl9fbG9nbyxcclxuLnUtZC1pbmxpbmUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnUtdC1ncmVlbiB7XHJcbiAgY29sb3I6ICMwMGE1MDA7XHJcbn1cclxuLnUtdC1ncmV5IHtcclxuICBjb2xvcjogIzc4Nzg4NztcclxufVxyXG4udS10LXJlZ3VsYXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udS1pbmxpbmUtbWlkZGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uYy1uYXYsXHJcbi51LWZpbGwtd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi51LXQtcHVsc2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGJhMTE0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSg0MCwgMTkwLCAyNDAsIDAuNCk7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDEuMnMgaW5maW5pdGU7XHJcbn1cclxuLmMtYnV0dG9uX19yZWRpcmVjdCxcclxuLnUtdC1wdWxzZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi51LXJvdW5kLWNvcm5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi51LXQtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBlbTtcclxuICBiYWNrZ3JvdW5kOiAjYzVlNmYzO1xyXG59XHJcbi51LXQtY2lyY2xlLFxyXG4udS10LWNpcmNsZSAudS10LXRyaWFuZ2xlIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udS10LWNpcmNsZSAudS10LXRyaWFuZ2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uOiBrZXlmcmFtZXMtcm90YXRpb24gMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4udS10LWNpcmNsZSAudS10LXRyaWFuZ2xlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMTk3LCAyMzAsIDI0MywgMC43OSksIHRyYW5zcGFyZW50KSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMGJhMTE0IDAsIHJnYmEoMCwgNTgsIDUyLCAwKSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzBiYTExNDtcclxufVxyXG4uYy1hcnRpY2xlLWNhcmRfX2JvZHkge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uYy1qdW1ib19faGVhZGVyX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uYy1zZWN0aW9uX19oaWdobGlnaHRzX3RpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jLWp1bWJvX19zdWJoZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jLXRlc3RpbW9uaWFsX19yZXZpZXdfdGV4dCxcclxuLnUtbS1iLTEwIHtcclxuICBwYWRkaW5nOiAwcHggMjNweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi51LW0tYi01IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmMtb3JkZXJfX2xhc3Rfb3JkZXJfaW5mbyxcclxuLnUtbS10LTI1IHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5jLXRlc3RpbW9uaWFsLWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnUtbS1sLTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYy1zZWN0aW9uX19jb250YWluZXIsXHJcbi5jLXNlY3Rpb25fX2NvbnRlbnQsXHJcbi5jLXNlY3Rpb25fX3JpZ2h0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYy1zZWN0aW9uX19jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTAwcHg7XHJcbn1cclxuLmMtYnV0dG9uX19yZWRpcmVjdCB7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbi5jLWljb24gPiBzcGFuIHtcclxuICBtYXJnaW4tYm90dG9tOiAzbW07XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG59XHJcblxyXG4uaWNvbi11c2VyOmJlZm9yZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jLXNlY3Rpb25fX2NvbnRlbnQge1xyXG4gIG1heC13aWR0aDogMTE4MHB4O1xyXG59XHJcbi51LXctNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLmMtbmF2YmFyLFxyXG4uYy1zZWN0aW9uX19jb250YWluZXIsXHJcbi51LXctMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYy1jZXJ0aWZpY2F0ZSxcclxuLmMtZm9vdGVyX19jb2x1bW4sXHJcbi5jLW9yZGVyX19sYXN0X29yZGVyX2luZm8ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLmMtbmF2X19sb2dvLFxyXG4uYy1zZWN0aW9uX19jb250YWluZXIge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmMtYnV0dG9uX19yZWRpcmVjdCxcclxuLmMtY2VydGlmaWNhdGUsXHJcbi5jLWZvb3Rlcl9fY29weXJpZ2h0LFxyXG4uYy1zZWN0aW9uX19yaWdodCxcclxuLnUtdC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYy1saXN0LWl0ZW1fX2ljb24ge1xyXG4gICAgY29sb3I6ICMwYmExMTQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8vIC5jLWxpc3QtaXRlbSB7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAvLyB9XHJcbn1cclxuXHJcbi8vIC5jLWxpc3QtaXRlbSB7XHJcbi8vICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vIH1cclxuLnUtdGl0bGUtZm9udCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi51LWJhc2UtZm9udCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jLXNlY3Rpb25fX2NvbnRlbnQsXHJcbi51LWNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxufVxyXG4uYy1zZWN0aW9uX19jb250ZW50OmFmdGVyLFxyXG4uYy1zZWN0aW9uX19jb250ZW50OmJlZm9yZSxcclxuLnUtY2xlYXJmaXg6YWZ0ZXIsXHJcbi51LWNsZWFyZml4OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuLnUtYm9yZGVyLXdoaXRlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5jLWJ1dHRvbl9fcmVkaXJlY3Qge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiYTExNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYmExMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLy8gLmMtZnVsbC13aWR0aHtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTp0YWJsZTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NjUwcHg7aGVpZ2h0OmNhbGMoMTAwdmggLSAxMDJweCk7fVxyXG4vLyAuYy1saXN0LWl0ZW17bGluZS1oZWlnaHQ6MS40O2NvbG9yOiM3ODc4ODc7fVxyXG4vLyAuYy1saXN0LWl0ZW1fX2ljb257Zm9udC1zaXplOjI0cHg7dmVydGljYWwtYWxpZ246LTNweDt9XHJcbi8vIC5jLXNlY3Rpb25fX2NvbnRhaW5lcntkaXNwbGF5OnRhYmxlLWNlbGw7fVxyXG4vLyAuYy1zZWN0aW9uX19oaWdobGlnaHRzX3RpdGxle2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjt9XHJcbi8vIC5jLXRlc3RpbW9uaWFsX19yZXZpZXdfdGV4dHtsaW5lLWhlaWdodDoxLjU7fVxyXG4vLyAuaWNvbi11c2VyOmJlZm9yZXtib3JkZXItcmFkaXVzOjUwJTtmb250LXNpemU6MTRweDtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTU7Y29sb3I6Izc4Nzg4Nzt9XHJcbi8vIC5jLXRlc3RpbW9uaWFsLWxpc3R7d2lkdGg6NDIwcHghaW1wb3J0YW50O31cclxuLy8gLmMtdGVzdGltb25pYWwtbGlzdF9fbmV4dF9hcnJvd3tyaWdodDotMjVweDt9XHJcbi8vIC5jLXRlc3RpbW9uaWFsLWxpc3RfX3ByZXZfYXJyb3d7bGVmdDotNDNweDt9XHJcbi8vIC5jLXRlc3RpbW9uaWFsLWxpc3RfX2Fycm93e2ZvbnQtc2l6ZToyNHB4O2NvbG9yOiNiNGI0YmU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NDAlO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtwYWRkaW5nOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO31cclxuLy8gLmMtb2ZmZXItdGFne2JhY2tncm91bmQtY29sb3I6IzAwYTUwMDtmb250LXNpemU6MTJweDtwYWRkaW5nOjNweCA1cHg7fVxyXG4vLyAuYy1pY29uLWxpc3R7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDo4MHB4O3BhZGRpbmc6MTdweCAwO2JhY2tncm91bmQtY29sb3I6IzFkMjg2OTt0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbi5jLW9mZmVyLXRhZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogMXB4IDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5jLWljb24tbGlzdCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogaGVpZ2h0OiA4MHB4OyAqL1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiYTExNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYy1pY29uLWxpc3RfX2xpc3Rfd3JhcHBlciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jLWljb24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5jLWljb246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRhNTM4NztcclxufVxyXG4uYy1pY29uOmhvdmVyIC50YWItaWNvbiB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcbi5jLWljb246aG92ZXIgc3BhbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmMtaWNvbl9faW1nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxufVxyXG4uYy1pY29uID4gc3BhbiB7XHJcbiAgY29sb3I6ICNiOGJiZDk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4uYy1pY29uIC50YWItb2ZmZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRhYi1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmMtanVtYm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMyOGM7XHJcbn1cclxuLmMtanVtYm9fX2Jhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZXBhZ2UuMDY4NTk1OTMyNDBjM2VmZDQ4M2ZlNDg5NTFjZmU2ZmYucG5nKVxyXG4gICAgdG9wIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDQ2MHB4O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA2MHB4O1xyXG59XHJcbi5jLWp1bWJvX19oZWFkZXJfY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4uYy1qdW1ib19faGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmMtanVtYm9fX3N1YmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uYy1teS1kb2N0b3JzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jLW9tbmktd3JhcHBlciB7XHJcbiAgd2lkdGg6IDc4NXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jLXBvcHVsYXItc2VhcmNoZXMge1xyXG4gIGNvbG9yOiAjOGQ5M2IzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3ODVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gLmMtcG9wdWxhci1zZWFyY2hlc19faXRlbXttYXJnaW4tbGVmdDoyNXB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiM4ZDkzYjM7dGV4dC1kZWNvcmF0aW9uOm5vbmU7fVxyXG5cclxuLmMtcG9wdWxhci1zZWFyY2hlc19faXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmMtbWVkaWEtbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC8vd3d3LldoZWFsdGh5TGlmZXN0YXRpYy5jb20vd2ViLWFzc2V0cy9ob21lL2Fzc2V0cy9pbWFnZXMvbG9nb19pbmRpYS42YWUwMzdjMTFmM2MwOGMwZjk3NGFkMzVkMjJjZGM1NS5wbmcpXHJcbiAgICB0b3Agbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG4uYy1tZWRpYS1saXN0LmZvcnR1bmUge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00NXB4IC0xMHB4O1xyXG4gIHdpZHRoOiAxMTZweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4uYy1tZWRpYS1saXN0Om5vdCguaG9zcGl0YWwtbG9nby1pbWFnZSkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYy1tZWRpYS1saXN0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4uYy1tZWRpYS1saXN0LnRlY2gtY3J1bmNoIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNzBweDtcclxuICB3aWR0aDogMTM3cHg7XHJcbn1cclxuLmMtbWVkaWEtbGlzdC5mb3JiZXMge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02MnB4IC0xMjlweDtcclxuICB3aWR0aDogNzhweDtcclxufVxyXG4uYy1tZWRpYS1saXN0LmVjb25vbWljIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IC0xODdweDtcclxuICB3aWR0aDogMTg0cHg7XHJcbn1cclxuLmMtbWVkaWEtbGlzdC53YWxsLXN0cmVldCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzcHggLTI0OHB4O1xyXG4gIHdpZHRoOiAxNzVweDtcclxufVxyXG4uYy1tZWRpYS1saXN0LnRpbWVzIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDdweCAtMzA1cHg7XHJcbiAgd2lkdGg6IDEwNXB4O1xyXG59XHJcbi5jLW1lZGlhLWxpc3Q6bm90KC5ob3NwaXRhbC1sb2dvLWltYWdlKTpob3ZlciB7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uY3VzdG9tZXItbG9nby1mb290ZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uYy1jb25zdWx0X19kb2N0b3JzX29ubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG4uYy1jb25zdWx0X19kb2N0b3JzX3B1bHNlIHtcclxuICBtYXJnaW46IDFweCAxMHB4IDAgMDtcclxufVxyXG4uYy1kb3dubG9hZF9fc2VjdGlvbi1waWMge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxufVxyXG4uYy1kb3dubG9hZF9fbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG4uYy1kb3dubG9hZF9fYXBwX2xpbmtzIGltZyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uYy1jb3VudHJ5LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlNTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2YwZjBmNTtcclxufVxyXG4uYy1jb3VudHJ5LWxpc3RfX3dyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmMtY291bnRyeS1saXN0X19saW5rIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uYy1jb3VudHJ5LWxpc3RfX3dyYXBwZXIgLmMtY291bnRyeS1saXN0X19saW5rOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG4uYy1jb3VudHJ5LWxpc3RfX2xpbmsgYSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDE0MTQ2O1xyXG59XHJcbi5jLWNvdW50cnktbGlzdF9fZmxhZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmMtY291bnRyeS1saXN0X19mbGFnOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0ycHg7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvL3d3dy5XaGVhbHRoeUxpZmVzdGF0aWMuY29tL3dlYi1hc3NldHMvaG9tZS9hc3NldHMvaW1hZ2VzL2ZsYWdzX3NtYWxsLjA1ODU2NzY0YTM4Yzg0MjQwN2M5NzcwYzY5ODdiNTJkLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uYy1jb3VudHJ5LWxpc3RfX25hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5jLWNvdW50cnktbGlzdF9fZmxhZ19zaW5nYXBvcmU6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtM3B4IC01MnB4O1xyXG59XHJcbi5jLWNvdW50cnktbGlzdF9fZmxhZ19waGlsaXBwaW5lczpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zcHggLTI3cHg7XHJcbn1cclxuLmMtY291bnRyeS1saXN0X19mbGFnX2luZG9uZXNpYTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zcHggLTEwM3B4O1xyXG59XHJcbi5jLWNvdW50cnktbGlzdF9fZmxhZ19icmF6aWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtM3B4IC0xNzJweDtcclxufVxyXG4uYy1hcnRpY2xlLWNhcmQge1xyXG4gIHdpZHRoOiAzMzMuMzNweDtcclxufVxyXG4uYy1hcnRpY2xlLWNhcmRfX2NvbnRhaW5lciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDE0MTQ2O1xyXG59XHJcbi5jLWFydGljbGUtY2FyZF9fYm9keSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVlODtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCAjZTBlMGU1O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xyXG59XHJcbi5jLWFydGljbGUtY2FyZF9faW1hZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jLWFydGljbGUtY2FyZF9faW1hZ2Utd3JhcHBlciBpbWcge1xyXG4gIHdpZHRoOiAzMTFweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5jLWFydGljbGUtY2FyZF9kZXRhaWxzIHtcclxuICBwYWRkaW5nOiA4cHggMTVweCAxNXB4O1xyXG59XHJcbi5jLWFydGljbGUtY2FyZF9hdXRob3Ige1xyXG4gIGNvbG9yOiAjNzg3ODg3O1xyXG59XHJcbi5jLWFydGljbGUtY2FyZF9fYm9keTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG4uYy1hcnRpY2xlLWNhcmRfYnVsbGV0IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjNzg3ODg3O1xyXG4gIG1hcmdpbjogLTFweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IDFweDtcclxufVxyXG4uYy1hcnRpY2xlLWxpc3RfX3ByZXZfYXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAtNzdweDtcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuLmMtYXJ0aWNsZS1saXN0X19hcnJvdyB7XHJcbiAgY29sb3I6ICNiNGI0YmU7XHJcbn1cclxuLmMtYXJ0aWNsZS1saXN0X19uZXh0X2Fycm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IC03N3B4O1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4uYy1hcnRpY2xlLWxpc3RfX3ByZXZfYXJyb3cge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLmMtYXJ0aWNsZS1saXN0X19uZXh0X2Fycm93IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxufVxyXG4uYy1oZWFsdGhmZWVkIHtcclxuICBwYWRkaW5nOiAzNXB4IDA7XHJcbn1cclxuLmMtaGVhbHRoZmVlZF9faGVhZGVyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uYy1oZWFsdGhmZWVkX19hcnRpY2xlc193cmFwcGVyIHtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAzNzBweDtcclxufVxyXG4uYy1vcmRlcl9fbGFzdF9vcmRlcl9pbmZvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDI4NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4uYy1vcmRlcl9fbGFzdF9vcmRlcl90ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5jLW9yZGVyX19sYXN0X29yZGVyX2luZm8gLnUtdC1jaXJjbGUge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uYy1wcm92aWRlci1sb2dvIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLy93d3cuV2hlYWx0aHlMaWZlc3RhdGljLmNvbS93ZWItYXNzZXRzL2hvbWUvYXNzZXRzL2ltYWdlcy9sb2dvX2luZGlhLjZhZTAzN2MxMWYzYzA4YzBmOTc0YWQzNWQyMmNkYzU1LnBuZylcclxuICAgIHRvcCBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbi5jLXByb3ZpZGVyLWxvZ29fX3N1Z3VuYSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogODFweCAtMzY3cHg7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG59XHJcbi5jLXByb3ZpZGVyLWxvZ29fX3ByYXRpa3NoYSB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtNDIwcHg7XHJcbiAgd2lkdGg6IDI0NXB4O1xyXG59XHJcbi5jLXByb3ZpZGVyLWxvZ29fX25tYyB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI1cHggLTQ4MXB4O1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG4uYy1wcm92aWRlci1sb2dvX192cHMge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC03MHB4IC01OTlweDtcclxuICB3aWR0aDogMTU2cHg7XHJcbn1cclxuLmMtY2VydGlmaWNhdGUge1xyXG4gIHdpZHRoOiAyMyU7XHJcbn1cclxuLmMtY2VydGlmaWNhdGVfX2luZm8ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmMtY2VydGlmaWNhdGUtbGlzdCB7XHJcbiAgd2lkdGg6IDkyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbltjbGFzcyo9XCIgaWNvbi1pY19cIl06YmVmb3JlLFxyXG5bY2xhc3NePVwiaWNvbi1pY19cIl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogQ2FtcGhvciwgdmVyZGFuYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHNwZWFrOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjJlbTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbi5pY29uLWljX2RvbmVfYmFkZ2U6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcRTgwMFwiO1xyXG59XHJcbi5pY29uLWljX2RvbmVfb3Blbl9zeXN0ZW06YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcRTlBOFwiO1xyXG59XHJcbi5pY29uLWljX3N0YXJfc29saWQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcRTkzNFwiO1xyXG59XHJcbi5pY29uLWljX3VzZXJfc3lzdGVtOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5MUVcIjtcclxufVxyXG4uaWNvbi1pY19iYWNrX2NoZXZlcm9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5NEVcIjtcclxufVxyXG4uaWNvbi1pY19uZXh0X2NoZXZlcm9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5M0NcIjtcclxufVxyXG4uaWNvbi1pY19kb3duX2NoZXZlcm9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5NDdcIjtcclxufVxyXG4uaWNvbi1pY19kcmF3ZXJfc3lzdGVtOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5NDZcIjtcclxufVxyXG4uaWNvbi1pY19kcm9wZG93bjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxFOTlDXCI7XHJcbn1cclxuLmljb24taWNfY2hhdDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxFOTIxXCI7XHJcbn1cclxuLmljb24taWNfY2FydDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxFOTIwXCI7XHJcbn1cclxuLmljb24taWNfcmVjb3Jkc18zOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5NkZcIjtcclxufVxyXG4uaWNvbi1pY19sYWJfaG9tZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxFOUI0XCI7XHJcbn1cclxuLmljb24taWNfcmVhZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxFOTcxXCI7XHJcbn1cclxuLmljb24taWNfYnJpZWZjYXNlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5MjlcIjtcclxufVxyXG4uaWNvbi1pY19jbGluaWM6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcRTkyMlwiO1xyXG59XHJcbi5pY29uLWljX2xvY2F0aW9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5ODRcIjtcclxufVxyXG4uaWNvbi1pY19ncHNfc3lzdGVtOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU5QkFcIjtcclxufVxyXG4uaWNvbi1pY19zZWFyY2g6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcRTk2NlwiO1xyXG59XHJcbi5pY29uLWljX3Bob25lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXEU4RUVcIjtcclxufVxyXG4uYy1uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uYy1uYXYge1xyXG4gIGhlaWdodDogMTAycHg7XHJcbn1cclxuLmMtbmF2X193cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTZweCAwIDEycHggNTBweDtcclxufVxyXG4uYy1uYXZfX21lbnUsXHJcbi5jLW5hdl9fd3JhcHBlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbn1cclxuLmMtbmF2X19tZW51IHtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4uYy1uYXZfX2xvZ28ge1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL25hdi5XaGVhbHRoeUxpZmUuY29tLzguMC4yNi9jb25zdW1lci9pbWFnZXMvV2hlYWx0aHlMaWZlLnN2ZylcclxuICAgIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogM3B4IDAgMDtcclxufVxyXG4uYy1mb290ZXIge1xyXG4gIG1pbi13aWR0aDogMTIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMyOGM7XHJcbiAgcGFkZGluZzogNDhweCAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYy1mb290ZXJfX3dyYXBwZXIge1xyXG4gIHdpZHRoOiAxMTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jLWZvb3Rlcl9fY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG4uYy1mb290ZXJfX2xvZ28ge1xyXG4gIG1hcmdpbjogMjhweCAwO1xyXG59XHJcbi5jLWZvb3Rlcl9fdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmMtZm9vdGVyX19yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmMtZm9vdGVyX19pdGVtIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmMtZm9vdGVyX19pdGVtOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYy1mb290ZXJfX2NvbHVtbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxOC45JTtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4uYy1mb290ZXJfX2NvbHVtbjpsYXN0LWNoaWxkIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uYy1jb3B5cmlnaHQge1xyXG4gIGNvbG9yOiAjYjhiYmQ5O1xyXG59XHJcbi5zbGljay1zbGlkZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc2xpY2stbGlzdCxcclxuLnNsaWNrLXNsaWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zbGljay1saXN0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zbGljay1saXN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5zbGljay1zbGlkZXIgLnNsaWNrLWxpc3QsXHJcbi5zbGljay1zbGlkZXIgLnNsaWNrLXRyYWNrIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuLnNsaWNrLXRyYWNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5zbGljay10cmFjazphZnRlcixcclxuLnNsaWNrLXRyYWNrOmJlZm9yZSB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG4uc2xpY2stdHJhY2s6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5zbGljay1zbGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG59XHJcbi5zbGljay1zbGlkZSBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jLWhvbWUge1xyXG4gIG1hcmdpbi10b3A6IDEwMnB4O1xyXG4gIG1pbi13aWR0aDogMTE4MHB4O1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94X3dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYy1vbW5pLXNlYXJjaGJveF9faWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogQ2FtcGhvciwgdmVyZGFuYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIHBhZGRpbmc6IDZweCAyMHB4IDVweCAzMHB4O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICNiNGI0YmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmMtb21uaS1zZWFyY2hib3g6YWN0aXZlLFxyXG4uYy1vbW5pLXNlYXJjaGJveDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzg3ODg3O1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94LS1sYXJnZSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94X19idXR0b24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjZjBmMGY1O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94X19idXR0b24tY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94X19idXR0b24gaSB7XHJcbiAgY29sb3I6ICM3ODc4ODc7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94X19idXR0b25fX3RleHQge1xyXG4gIHRvcDogMXB4O1xyXG59XHJcbi5jLW9tbmktc2VhcmNoYm94X19idXR0b25fX3RleHQsXHJcbi5jLW9tbmktc2VhcmNoYm94X19idXR0b24gaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uYy1zZWN0aW9uX19jb250ZW50OmFmdGVyLFxyXG4uYy1zZWN0aW9uX19jb250ZW50OmJlZm9yZSxcclxuLnUtY2xlYXJmaXg6YWZ0ZXIsXHJcbi51LWNsZWFyZml4OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4uYy1zZWN0aW9uX19jb250ZW50OmFmdGVyLFxyXG4udS1jbGVhcmZpeDphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLmMtc2VjdGlvbl9fY29udGVudCxcclxuLnUtY2xlYXJmaXgge1xyXG4gIHpvb206IDE7XHJcbn1cclxuLmMtb21uaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM0MTQxNDY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxufVxyXG4uYy1vbW5pX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmMtb21uaS1jb250YWluZXItLWRlc2t0b3AgLmMtb21uaV9fd3JhcHBlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyLS1sb2NhbGl0eSB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4uYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyLS1sb2NhbGl0eSAuYy1vbW5pLXNlYXJjaGJveCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuLmMtb21uaS1jb250YWluZXItLWRlc2t0b3AgLmMtb21uaV9fd3JhcHBlci0ta2V5d29yZCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4uYy1vbW5pLWNvbnRhaW5lci0tZGVza3RvcCAuYy1vbW5pX193cmFwcGVyLS1rZXl3b3JkIC5jLW9tbmktc2VhcmNoYm94IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbn1cclxuLyohIENTUyBVc2VkIGZyb206IGh0dHBzOi8vd3d3LldoZWFsdGh5TGlmZXN0YXRpYy5jb20vbmF2LzguMC4zMi9jb25zdW1lci9jc3MvV2hlYWx0aHlMaWZlbmF2LmNzcyA7IG1lZGlhPWFsbCAqL1xyXG5AbWVkaWEgYWxsIHtcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGEsXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWl0ZW1zLmhvdmVyLWRhcmsgYSxcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0LFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgLnByb2R1Y3QtYmxvY2sgZGl2LFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLnUtZC1pdGVtLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLnUtZC1pdGVtIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCxcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1yaWdodCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC50ZXh0LWxlZnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5idG4tYm9yZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MTQxNDY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNDE0MTQ2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLmJ0bi1ib3JkZXI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYmExMTQ7XHJcbiAgICAgICAgY29sb3I6ICMwYmExMTQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiBbY2xhc3NePVwiaWNvbi1cIl0sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwicHJhY3RpY29uXCIgIWltcG9ydGFudDtcclxuICAgICAgICBzcGVhazogbm9uZTtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhbXBob3JcIiwgXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgICAgY29sb3I6ICM0MTQxNDY7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTYsIDIxNiwgMjE2LCAwLjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLndyYXBwZXIge1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm92ZXJsYXlfbGF5ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIC5vdmVybGF5IC5uYXZsaXN0IC5uYXZsaW5rOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSAubmF2LWxvZ2luLW1vYmlsZS5idG4tYm9yZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwYmExMTQgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTJweCA4cHggMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzBiYTExNDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FtcGhvclwiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGE6Zm9jdXMsXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBpOmZvY3VzLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgZGl2OmZvY3VzLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgc3Bhbjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgYTo6LW1vei1zZWxlY3Rpb24sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBhOjpzZWxlY3Rpb24sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBhOjotd2Via2l0LXNlbGVjdGlvbixcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIGk6Oi1tb3otc2VsZWN0aW9uLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgaTo6c2VsZWN0aW9uLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgaTo6LXdlYmtpdC1zZWxlY3Rpb24sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBkaXY6Oi1tb3otc2VsZWN0aW9uLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgZGl2OjpzZWxlY3Rpb24sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBkaXY6Oi13ZWJraXQtc2VsZWN0aW9uLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgc3Bhbjo6LW1vei1zZWxlY3Rpb24sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBzcGFuOjpzZWxlY3Rpb24sXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciBzcGFuOjotd2Via2l0LXNlbGVjdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0LFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQsXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LXJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDI1MnB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQgLmljOjpiZWZvcmUge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IC5XaGVhbHRoeUxpZmUtbG9nbyB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LW1pZCB7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtcmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtaXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWl0ZW1zLmhvdmVyLWRhcmsgYSB7XHJcbiAgICAgICAgY29sb3I6ICM0MTQxNDY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWl0ZW1zOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IGEge1xyXG4gICAgICAgIGNvbG9yOiAjNDE0MTQ2O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluayB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMjRweDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rLnNlbGVjdGVkOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgLmljb24td3JhcCB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rIC5wcm9kdWN0LWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluayAucHJvZHVjdC1ibG9jayBkaXYge1xyXG4gICAgICAgIGNvbG9yOiAjNDE0MTQ2O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgYSBpIHtcclxuICAgICAgICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZCA+IGEge1xyXG4gICAgICAgIGNvbG9yOiAjMGJhMTE0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZCA+IGEgaS5pYyB7XHJcbiAgICAgICAgY29sb3I6ICMwYmExMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMGJhMTE0O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6aG92ZXIgYSAucHJvZHVjdC1ibG9jayBkaXY6Zmlyc3QtY2hpbGQsXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluazpob3ZlciBhIGkuaWMge1xyXG4gICAgICAgIGNvbG9yOiAjMGJhMTE0O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLldoZWFsdGh5TGlmZV9sb2dvX25ldyxcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5pYyxcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5oYW1idXJnZXIsXHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZG93bmFycm93IHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5XaGVhbHRoeUxpZmVfbG9nb19uZXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5XaGVhbHRoeUxpZmVzdGF0aWMuY29tL25hdi84LjAuMzIvY29uc3VtZXIvaW1hZ2VzL1doZWFsdGh5TGlmZS5zdmcpIG5vLXJlcGVhdDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogLTNweCAwIDAgMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5pYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDE0MTQ2O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmljLmljb24taWNfZG9uZV9iYWRnZSB7XHJcbiAgICAgICAgY29sb3I6ICM5ZjNiZmY7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaGFtYnVyZ2VyIHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5oYW1idXJnZXI6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5kb3duYXJyb3cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZG93bmxvYWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMCAwIDMwcHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZG93bmxvYWQgLmFwcGRvd25sb2FkLWJsb2NrIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjMGJhMTE0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYmExMTQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25sb2FkIC5hcHBkb3dubG9hZC1ibG9jazpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMGJhMTE0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5ldyB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjc4MDA7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1kcm9wZG93biB7XHJcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjNDE0MTQ2O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB3aWR0aDogMjIzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmMGYwZjU7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIwcHgpIHtcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCB7XHJcbiAgICAgIHdpZHRoOiAxNyU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDcwcHgpIHtcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIHtcclxuICAgICAgd2lkdGg6IDQ0JTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LW1pZCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLm1vYmlsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLmRlc2t0b3Age1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyLmRlc2t0b3Age1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhci5tb2JpbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIC5vdmVybGF5X2xheWVyIHtcclxuICAgICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LWxlZnQgLmljIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCAuaGFtYnVyZ2VyIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIHotaW5kZXg6IDMwO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIGEgLldoZWFsdGh5TGlmZV9sb2dvX25ldyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkLm5ld19sb2dvX3dyYXAge1xyXG4gICAgICBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvblxyXG4gICAgICAubmF2YmFyXHJcbiAgICAgIC5uYXYtcmlnaHRcclxuICAgICAgLm5hdi1pdGVtcy5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5vdmVybGF5IHtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluayB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZCB7XHJcbiAgICAgIGNvbG9yOiAjMTRiZWYwO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmZvY3VzIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6Zm9jdXMgYSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvblxyXG4gICAgICAubmF2YmFyXHJcbiAgICAgIC5uYXZsaXN0XHJcbiAgICAgIC5uYXZsaW5rLnNlbGVjdGVkOmhvdmVyXHJcbiAgICAgID4gYSB7XHJcbiAgICAgIGNvbG9yOiAjMTRiZWYwO1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uXHJcbiAgICAgIC5uYXZiYXJcclxuICAgICAgLm5hdmxpc3RcclxuICAgICAgLm5hdmxpbmsuc2VsZWN0ZWQ6aG92ZXJcclxuICAgICAgPiBhXHJcbiAgICAgIGkuaWMge1xyXG4gICAgICBjb2xvcjogIzE0YmVmMDtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEge1xyXG4gICAgICBjb2xvcjogIzQxNDE0NjtcclxuICAgIH1cclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvblxyXG4gICAgICAubmF2YmFyXHJcbiAgICAgIC5uYXZsaXN0XHJcbiAgICAgIC5uYXZsaW5rOmhvdmVyXHJcbiAgICAgIGFcclxuICAgICAgLnByb2R1Y3QtYmxvY2tcclxuICAgICAgZGl2OmZpcnN0LWNoaWxkLFxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6aG92ZXIgYSBpLmljIHtcclxuICAgICAgY29sb3I6ICM0MTQxNDY7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaWMge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25hcnJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZG93bmxvYWQge1xyXG4gICAgICBwYWRkaW5nOiAxOHB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLnNlY29uZGFyeS1uYXZpZ2F0aW9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIuZGVza3RvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIubW9iaWxlIC5vdmVybGF5X2xheWVyIHtcclxuICAgICAgICAgICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1sZWZ0IC5pYyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbGVmdCAuaGFtYnVyZ2VyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMzA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXYtbWlkIGEgLldoZWFsdGh5TGlmZV9sb2dvX25ldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdi1taWQubmV3X2xvZ29fd3JhcCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2LXJpZ2h0IC5uYXYtaXRlbXMuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzBiYTExNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbmsgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLm5hdmxpc3QgLm5hdmxpbms6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmZvY3VzIGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rLnNlbGVjdGVkOmhvdmVyID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGJhMTE0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluay5zZWxlY3RlZDpob3ZlciA+IGEgaS5pYyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGJhMTE0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAubmF2bGlzdCAubmF2bGluazpob3ZlciBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0MTQxNDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEgLnByb2R1Y3QtYmxvY2sgZGl2OmZpcnN0LWNoaWxkLFxyXG4gICAgICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5uYXZsaXN0IC5uYXZsaW5rOmhvdmVyIGEgaS5pYyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDE0MTQ2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuaWMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLm5hdmJhciAuZG93bmFycm93IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5uYXZiYXIgLmRvd25sb2FkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMThweCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLnNlY29uZGFyeS1uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5zZWNvbmRhcnktbmF2aWdhdGlvbl9fd3JhcHBlcl9fcHJvbW8tc3BhY2UsXHJcbiAgICAgICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5zZWNvbmRhcnktbmF2aWdhdGlvbl9fd3JhcHBlcl9fcHJvZHVjdC1saW5rcyxcclxuICAgICAgICAuV2hlYWx0aHlMaWZlX0dsb2JhbE5hdmlnYXRpb24gLnNlY29uZGFyeS1uYXZpZ2F0aW9uX193cmFwcGVyX19oZWxwZnVsLWxpbmtzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5XaGVhbHRoeUxpZmVfR2xvYmFsTmF2aWdhdGlvbiAubmF2YmFyIC5vdmVybGF5IHtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLldoZWFsdGh5TGlmZV9HbG9iYWxOYXZpZ2F0aW9uIC5tb2JpbGUubmF2YmFyIC5uYXYtcmlnaHQgYSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgzMCwgMTkwLCAyNDAsIDAuNCk7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMzAsIDE5MCwgMjQwLCAwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDMwLCAxOTAsIDI0MCwgMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMga2V5ZnJhbWVzLXJvdGF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHRhZGEge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBjb2xvcjogIzI4MzI4YztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDIuNSUsXHJcbiAgNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSkgcm90YXRlKC04ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSByb3RhdGUoLThkZWcpO1xyXG4gIH1cclxuICA3LjUlLFxyXG4gIDEyLjUlLFxyXG4gIDE3LjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg4ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoOGRlZyk7XHJcbiAgfVxyXG4gIDEwJSxcclxuICAxNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlKC04ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoLThkZWcpO1xyXG4gIH1cclxuICAyMCUsXHJcbiAgMjUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGNvbG9yOiAjMjgzMjhjO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIGNvbG9yOiAjNjI2MjYyO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxufVxyXG5cclxuLm10LTE1MCB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLm10LTEwMCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLm10LTgwIHtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5tdC01MCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ubXQtNTcge1xyXG4gIG1hcmdpbi10b3A6IDU3cHg7XHJcbn1cclxuLm10LTMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5tYi0xNTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG59XHJcbi5tYi0xMDAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcbi5tYi01MCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4ubWItMzAge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmJvb2stb3BwIC5pbWctaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5tYXJnaW5fMTIwXzk1IHtcclxuICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDk1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5ib29rLWFwcG9pbWVudCBoMiB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5ib29rLWFwcG9pbWVudCAuYy1pY29uX19pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uYm9va2Fwby1ib3ggLmlubmVyLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcGFkZGluZzogMjVweCAxNXB4IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm9va2Fwby1ib3ggLmlubmVyLWJveDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNTBweCAzMHB4IC00MHB4ICMwMDAwMDA4NTtcclxufVxyXG5cclxuLmJvb2thcG8tYm94IGgzIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICMxNzljYzM7XHJcbn1cclxuLmJvb2thcG8tYm94IGg1IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MDgwODA7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmMtcG9wdWxhci1zZWFyY2hlcyB1bCBsaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jLXBvcHVsYXItc2VhcmNoZXMgdWwgbGkgYSB7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jLWljb24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgfVxyXG4gIC5jLWljb246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgfVxyXG4gICoge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYy1vZmZlci10YWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDFweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICByaWdodDogNDBweDtcclxuICB9XHJcbiAgLmMtb21uaS1jb250YWluZXItLWRlc2t0b3AgLmMtb21uaV9fd3JhcHBlci0ta2V5d29yZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5jLW9tbmktY29udGFpbmVyLS1kZXNrdG9wIC5jLW9tbmlfX3dyYXBwZXItLWxvY2FsaXR5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmMtb21uaS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuYy1wb3B1bGFyLXNlYXJjaGVzX19pdGVtIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmMtcG9wdWxhci1zZWFyY2hlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5wcmV2LWFycm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogLTdweDtcclxufVxyXG5cclxuLm5leHQtYXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogLTdweDtcclxufVxyXG5cclxuLnJoNXYtRGVmYXVsdFBsYXllcl9jb21wb25lbnQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAubXQtNTcge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuLmRlZk9wdGlvbntcclxuICBtYXJnaW4tdG9wOiAyLjJyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0NWEyOWUsICMzZGFhYTQpO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookappoimentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bookappoiment',
          templateUrl: './bookappoiment.component.html',
          styleUrls: ['./bookappoiment.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: src_app_services_speciality_service__WEBPACK_IMPORTED_MODULE_3__["SpecialityService"]
        }, {
          type: _services_booking_page_service__WEBPACK_IMPORTED_MODULE_4__["BookingPageService"]
        }];
      }, {
        searchElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['search']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/bookappoiment/bookappoiment.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/bookappoiment/bookappoiment.module.ts ***!
    \***************************************************************/

  /*! exports provided: BookappoimentModule */

  /***/
  function srcAppModulesBookappoimentBookappoimentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookappoimentModule", function () {
      return BookappoimentModule;
    });
    /* harmony import */


    var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./patient-details/patient-details.component */
    "./src/app/modules/bookappoiment/patient-details/patient-details.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _bookappoiment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bookappoiment.component */
    "./src/app/modules/bookappoiment/bookappoiment.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _bookappoiment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookappoiment-routing.module */
    "./src/app/modules/bookappoiment/bookappoiment-routing.module.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");

    var BookappoimentModule = function BookappoimentModule() {
      _classCallCheck(this, BookappoimentModule);
    };

    BookappoimentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: BookappoimentModule
    });
    BookappoimentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function BookappoimentModule_Factory(t) {
        return new (t || BookappoimentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _bookappoiment_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookappoimentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BookappoimentModule, {
        declarations: [_bookappoiment_component__WEBPACK_IMPORTED_MODULE_2__["BookappoimentComponent"], _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_0__["PatientDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _bookappoiment_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookappoimentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BookappoimentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_bookappoiment_component__WEBPACK_IMPORTED_MODULE_2__["BookappoimentComponent"], _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_0__["PatientDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _bookappoiment_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookappoimentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/bookappoiment/patient-details/patient-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/bookappoiment/patient-details/patient-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PatientDetailsComponent */

  /***/
  function srcAppModulesBookappoimentPatientDetailsPatientDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDetailsComponent", function () {
      return PatientDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PatientDetailsComponent_div_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide following information about sunitdk11@gmail.com:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Your Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r347.emailbook);
      }
    }

    function PatientDetailsComponent_div_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please provide following information: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Patient's Full Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Patient's Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Patient's Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r348.elsebook);
      }
    }

    var PatientDetailsComponent =
    /*#__PURE__*/
    function () {
      function PatientDetailsComponent() {
        _classCallCheck(this, PatientDetailsComponent);

        this.emailbook = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
            value: '+918668206158',
            disabled: true
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.elsebook = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
            value: '+918668206158',
            disabled: true
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          patientmobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          patientemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.email = true;
        console.log("PatientDetailsComponent -> constructor -> emailbook", this.emailbook);
        console.log("PatientDetailsComponent -> constructor -> elsebook", this.elsebook);
      }

      _createClass(PatientDetailsComponent, [{
        key: "handleChange",
        value: function handleChange(evt) {
          var target = evt.target;

          if (target.checked) {
            this.email = true;
            console.log("PatientDetailsComponent -> handleChange -> check");
          }
        }
      }, {
        key: "handleChange2",
        value: function handleChange2(evt) {
          var target = evt.target;

          if (target.checked) {
            this.email = false;
            console.log("PatientDetailsComponent -> handleChange -> else");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientDetailsComponent;
    }();

    PatientDetailsComponent.ɵfac = function PatientDetailsComponent_Factory(t) {
      return new (t || PatientDetailsComponent)();
    };

    PatientDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientDetailsComponent,
      selectors: [["app-patient-details"]],
      decls: 122,
      vars: 3,
      consts: [[1, "hbg", "pt-5"], [1, "row", "pt-5"], [1, "container"], [1, "col-sm-12", "col-md-6"], [1, "c-appointment-info", "u-round-corner", "u-b-shadow", "u-fill--white"], [1, "c-appointment-info__row", "u-cushion", "u-title-font", "u-bold"], [1, "u-cushion", "c-appointment-info__row"], [1, "pure-g", "u-large-font", "u-spacer--small-bottom"], [1, "pure-u-1-2"], [1, "icon-ic_calendar"], [1, "u-bold"], [1, "pure-u-1-2", "u-t-right"], [1, "icon-ic_time"], [1, "u-t-capitalize"], ["href", "#", 1, "u-color--primary", "u-bold"], [1, "c-appointment-info__doctor", "c-appointment-info__row", "u-cushion"], [1, "c-doctor-info-card"], [1, "u-d-inlineblock", 2, "height", "110px", "width", "100px"], ["src", "../../../../assets/img/user.jpeg"], [1, "u-d-inlineblock", "u-valign-top", "u-cushion--horizontal", "u-grey_3-text", "c-doctor-info-card__right"], [1, "u-large-font", "u-bold"], [1, "c-appointment-info__practice", "c-appointment-info__row", "u-cushion"], [1, "c-practice-info-card"], ["src", "../../../../assets/img/default_clinic.webp"], [1, "u-d-inlineblock", "u-valign-top", "u-cushion--horizontal", "u-grey_3-text", "c-practice-info-card__right"], ["target", "_blank", "href", "//maps.google.com/maps?f=d&daddr=12.906617,77.64894(S%20R%20Clinic)&hl=undefined", 1, "u-color--primary", "u-bold"], [1, "c-appointment-form-new"], [1, "c-appointment-form-new__title"], [1, "c-patient-list__title"], [1, "o-radio"], [1, "u-spacer--vertical", "c-patient-list__container"], [1, "c-patient-list__item"], [1, "o-radio__label"], ["type", "radio", "name", "patient_list", 3, "checked", "change"], [1, "o-radio__checkmark"], ["type", "radio", "name", "patient_list", 3, "change"], ["class", "", 4, "ngIf"], [4, "ngIf"], [1, "c-appointment-form-new__whatsapp"], [1, "o-checkbox"], ["type", "checkbox", "id", "whatsapp", "value", "on"], ["for", "whatsapp"], [1, "o-checkbox__checkmark", "icon-ic_checkbox_selected_system", "o-checkbox__checkmark--checked"], [1, "o-checkbox__label"], ["src", "../../../../assets/img/whatsapp.svg", "height", "24", 1, "c-appointment-form-new__whatsapp-logo"], [1, "c-appointment-form-new__whatsapp-text"], [1, "inspectlet-sensitive"], [1, "c-appointment-form__button"], [1, "c-btn--dark"], [1, "u-smallest-font"], [1, "u-spacer--medium-vertical"], [1, "pure-u-1-24"], [1, "pure-u-23-24"], ["href", "#", "target", "_blank", 1, "u-t-link"], [1, ""], [1, "u-spacer--medium-bottom", "u-bold", "inspectlet-sensitive"], [1, "u-spacer--medium-bottom"], [3, "formGroup"], [1, "o-textbox"], [1, "o-textbox__label"], [1, "u-light-red-text"], ["type", "text", "value", "sunitdk11@gmail.com", "placeholder", "Enter Your Full Name", "formControlName", "fullname", 1, "inspectlet-sensitive"], [1, "o-textbox", "o-textbox--disabled"], ["type", "text", "formControlName", "mobile", 1, "inspectlet-sensitive"], [1, "icon-ic_lock", "o-textbox__lock"], ["type", "text", "value", "", "formControlName", "email", "placeholder", "Enter Your Email ID (Optional)", 1, "inspectlet-sensitive"], ["type", "text", "value", "", "placeholder", "Enter Patient's Full Name", "formControlName", "fullname", 1, "inspectlet-sensitive"], ["type", "text", "value", "", "formControlName", "patientmobile", "placeholder", "Enter Patient's Mobile Number", 1, "inspectlet-sensitive"], ["type", "text", "placeholder", "Enter Patient's Email ID (Optional)", "formControlName", "patientemail", 1, "inspectlet-sensitive"]],
      template: function PatientDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In-clinic Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " On ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "May 04, 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " at ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "09:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change Date & Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Dr. Regina Joseph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "MBBS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MD - General Medicine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "General Physician");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "General Practitioner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Consultant Physician");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "S R Clinic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Basement, GRS Plaza ,Parangi Palya, HSR Layout, Sector 2, Bangalore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Get Directions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Go back to my results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Patient Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "This appointment is for:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "sunitdk11@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientDetailsComponent_Template_input_change_82_listener($event) {
            return ctx.handleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Someone Else ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PatientDetailsComponent_Template_input_change_87_listener($event) {
            return ctx.handleChange2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, PatientDetailsComponent_div_89_Template, 25, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, PatientDetailsComponent_div_90_Template, 32, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Get updates on WhatsApp number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "+918668206158");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Updates will be sent to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "+918668206158");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "By booking this appointment, you agree to WhealthyLife\u2019s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Terms and Conditions. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.email);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".hbg[_ngcontent-%COMP%] {\n  background-color: #f0f0f5;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  height: 120px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.padingnone[_ngcontent-%COMP%] {\n  padding: 0 20px 0 20px;\n}\n\n.tcolor[_ngcontent-%COMP%] {\n  color: #14bef0;\n  cursor: pointer;\n}\n\n.c-patient-list__item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b4b4be;\n}\n\nc-appointment-page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 30px auto 0;\n}\n\n.pure-g[_ngcontent-%COMP%] {\n  letter-spacing: -0.31em;\n  *letter-spacing: normal;\n  *word-spacing: -0.43em;\n  text-rendering: optimizespeed;\n  flex-flow: row wrap;\n  display: -ms-flexbox;\n  -ms-align-content: flex-start;\n  align-content: flex-start;\n}\n\n.c-appointment-page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 30px auto 0;\n}\n\n.pure-u-1-2[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%] {\n  width: 50%;\n  *width: 49.969%;\n}\n\n.pure-u[_ngcontent-%COMP%], .pure-u-1[_ngcontent-%COMP%], .pure-u-1-1[_ngcontent-%COMP%], .pure-u-1-2[_ngcontent-%COMP%], .pure-u-1-3[_ngcontent-%COMP%], .pure-u-1-4[_ngcontent-%COMP%], .pure-u-1-5[_ngcontent-%COMP%], .pure-u-1-6[_ngcontent-%COMP%], .pure-u-1-8[_ngcontent-%COMP%], .pure-u-1-12[_ngcontent-%COMP%], .pure-u-1-24[_ngcontent-%COMP%], .pure-u-2-3[_ngcontent-%COMP%], .pure-u-2-5[_ngcontent-%COMP%], .pure-u-2-24[_ngcontent-%COMP%], .pure-u-3-4[_ngcontent-%COMP%], .pure-u-3-5[_ngcontent-%COMP%], .pure-u-3-8[_ngcontent-%COMP%], .pure-u-3-24[_ngcontent-%COMP%], .pure-u-4-5[_ngcontent-%COMP%], .pure-u-4-24[_ngcontent-%COMP%], .pure-u-5-5[_ngcontent-%COMP%], .pure-u-5-6[_ngcontent-%COMP%], .pure-u-5-8[_ngcontent-%COMP%], .pure-u-5-12[_ngcontent-%COMP%], .pure-u-5-24[_ngcontent-%COMP%], .pure-u-6-24[_ngcontent-%COMP%], .pure-u-7-8[_ngcontent-%COMP%], .pure-u-7-12[_ngcontent-%COMP%], .pure-u-7-24[_ngcontent-%COMP%], .pure-u-8-24[_ngcontent-%COMP%], .pure-u-9-24[_ngcontent-%COMP%], .pure-u-10-24[_ngcontent-%COMP%], .pure-u-11-12[_ngcontent-%COMP%], .pure-u-11-24[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%], .pure-u-13-24[_ngcontent-%COMP%], .pure-u-14-24[_ngcontent-%COMP%], .pure-u-15-24[_ngcontent-%COMP%], .pure-u-16-24[_ngcontent-%COMP%], .pure-u-17-24[_ngcontent-%COMP%], .pure-u-18-24[_ngcontent-%COMP%], .pure-u-19-24[_ngcontent-%COMP%], .pure-u-20-24[_ngcontent-%COMP%], .pure-u-21-24[_ngcontent-%COMP%], .pure-u-22-24[_ngcontent-%COMP%], .pure-u-23-24[_ngcontent-%COMP%], .pure-u-24-24[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n}\n\n.c-appointment-otp__separator[_ngcontent-%COMP%], .c-consult[_ngcontent-%COMP%], .u-fill--white[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.c-appointment-form__input[_ngcontent-%COMP%], .c-appointment-form__payment__card[_ngcontent-%COMP%], .c-appointment-otp__input[_ngcontent-%COMP%], .c-selection-info__alert[_ngcontent-%COMP%], .u-round-corner[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.u-b-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px 1px rgba(110, 110, 110, 0.14);\n}\n\n.c-appointment-info[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.c-selection-info__card[_ngcontent-%COMP%], .c-selection-slot-block[_ngcontent-%COMP%], .u-cushion[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.c-appointment-form-new__title[_ngcontent-%COMP%], .c-appointment-form__payment__card__discount-banner[_ngcontent-%COMP%], .c-appointment-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .c-appointment-otp__separator[_ngcontent-%COMP%], .c-btn[_ngcontent-%COMP%], .c-btn--dark[_ngcontent-%COMP%], .c-btn--dark-auto[_ngcontent-%COMP%], .c-btn--dark-fitX[_ngcontent-%COMP%], .c-btn--dark-fitY[_ngcontent-%COMP%], .c-btn--dark.disabled[_ngcontent-%COMP%], .c-btn--disabled[_ngcontent-%COMP%], .c-btn--disabled-auto[_ngcontent-%COMP%], .c-btn--green[_ngcontent-%COMP%], .c-btn--green.disabled[_ngcontent-%COMP%], .c-btn--light[_ngcontent-%COMP%], .c-btn--light-auto[_ngcontent-%COMP%], .c-consult__title[_ngcontent-%COMP%], .c-patient-list__title[_ngcontent-%COMP%], .disabled.c-btn--dark-auto[_ngcontent-%COMP%], .disabled.c-btn--dark-fitX[_ngcontent-%COMP%], .disabled.c-btn--dark-fitY[_ngcontent-%COMP%], .u-bold[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.c-selection-info__card[_ngcontent-%COMP%], .c-selection-slot-block[_ngcontent-%COMP%], .u-cushion[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\n\nuser[_ngcontent-%COMP%]   agent[_ngcontent-%COMP%]   stylesheet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.pure-u[_ngcontent-%COMP%], .pure-u-1[_ngcontent-%COMP%], .pure-u-1-1[_ngcontent-%COMP%], .pure-u-1-2[_ngcontent-%COMP%], .pure-u-1-3[_ngcontent-%COMP%], .pure-u-1-4[_ngcontent-%COMP%], .pure-u-1-5[_ngcontent-%COMP%], .pure-u-1-6[_ngcontent-%COMP%], .pure-u-1-8[_ngcontent-%COMP%], .pure-u-1-12[_ngcontent-%COMP%], .pure-u-1-24[_ngcontent-%COMP%], .pure-u-2-3[_ngcontent-%COMP%], .pure-u-2-5[_ngcontent-%COMP%], .pure-u-2-24[_ngcontent-%COMP%], .pure-u-3-4[_ngcontent-%COMP%], .pure-u-3-5[_ngcontent-%COMP%], .pure-u-3-8[_ngcontent-%COMP%], .pure-u-3-24[_ngcontent-%COMP%], .pure-u-4-5[_ngcontent-%COMP%], .pure-u-4-24[_ngcontent-%COMP%], .pure-u-5-5[_ngcontent-%COMP%], .pure-u-5-6[_ngcontent-%COMP%], .pure-u-5-8[_ngcontent-%COMP%], .pure-u-5-12[_ngcontent-%COMP%], .pure-u-5-24[_ngcontent-%COMP%], .pure-u-6-24[_ngcontent-%COMP%], .pure-u-7-8[_ngcontent-%COMP%], .pure-u-7-12[_ngcontent-%COMP%], .pure-u-7-24[_ngcontent-%COMP%], .pure-u-8-24[_ngcontent-%COMP%], .pure-u-9-24[_ngcontent-%COMP%], .pure-u-10-24[_ngcontent-%COMP%], .pure-u-11-12[_ngcontent-%COMP%], .pure-u-11-24[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%], .pure-u-13-24[_ngcontent-%COMP%], .pure-u-14-24[_ngcontent-%COMP%], .pure-u-15-24[_ngcontent-%COMP%], .pure-u-16-24[_ngcontent-%COMP%], .pure-u-17-24[_ngcontent-%COMP%], .pure-u-18-24[_ngcontent-%COMP%], .pure-u-19-24[_ngcontent-%COMP%], .pure-u-20-24[_ngcontent-%COMP%], .pure-u-21-24[_ngcontent-%COMP%], .pure-u-22-24[_ngcontent-%COMP%], .pure-u-23-24[_ngcontent-%COMP%], .pure-u-24-24[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n}\n\n.u-spacer--small-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n\n.u-large-font[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.pure-g[_ngcontent-%COMP%] {\n  letter-spacing: -0.31em;\n  *letter-spacing: normal;\n  *word-spacing: -0.43em;\n  text-rendering: optimizespeed;\n  flex-flow: row wrap;\n  display: -ms-flexbox;\n  -ms-align-content: flex-start;\n  align-content: flex-start;\n}\n\n.pure-u-1-2[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%] {\n  width: 50%;\n  *width: 49.969%;\n}\n\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\n\nuser[_ngcontent-%COMP%]   agent[_ngcontent-%COMP%]   stylesheet[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\n\n.u-t-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.pure-u-1-2[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%] {\n  width: 50%;\n  *width: 49.969%;\n}\n\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before {\n  box-sizing: inherit;\n}\n\nuser[_ngcontent-%COMP%]   agent[_ngcontent-%COMP%]   stylesheet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.c-appointment-info__row[_ngcontent-%COMP%]    + .c-appointment-info__row[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e5;\n}\n\n.c-selection-info__card[_ngcontent-%COMP%], .c-selection-slot-block[_ngcontent-%COMP%], .u-cushion[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.c-appointment-form-new__whatsapp-logo[_ngcontent-%COMP%], .c-appointment-form-new__whatsapp-text[_ngcontent-%COMP%], .c-selection-info__card[_ngcontent-%COMP%], .u-d-inlineblock[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.c-doctor-info-card__right[_ngcontent-%COMP%], .c-practice-info-card__right[_ngcontent-%COMP%] {\n  width: 310px;\n}\n\n.u-valign-top[_ngcontent-%COMP%] {\n  vertical-align: top;\n  vertical-align: -webkit-baseline-top;\n}\n\n.c-appointment-form-new__whatsapp-logo[_ngcontent-%COMP%], .c-appointment-form-new__whatsapp-text[_ngcontent-%COMP%], .c-selection-info__card[_ngcontent-%COMP%], .u-d-inlineblock[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.u-cushion--horizontal[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n\n.c-appointment-form__payment__card__radio[_ngcontent-%COMP%], .o-select__arrow[_ngcontent-%COMP%], .o-textbox__lock[_ngcontent-%COMP%], .u-grey_3-text[_ngcontent-%COMP%] {\n  color: #787887;\n}\n\n.c-appointment-info__row[_ngcontent-%COMP%]    + .c-appointment-info__row[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e5;\n}\n\n.c-selection-info__card[_ngcontent-%COMP%], .c-selection-slot-block[_ngcontent-%COMP%], .u-cushion[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.c-appointment-form-new__whatsapp-logo[_ngcontent-%COMP%], .c-appointment-form-new__whatsapp-text[_ngcontent-%COMP%], .c-selection-info__card[_ngcontent-%COMP%], .u-d-inlineblock[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.c-doctor-info-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .c-practice-info-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  width: 100px;\n  max-height: 110px;\n}\n\n.c-doctor-info-card__right[_ngcontent-%COMP%], .c-practice-info-card__right[_ngcontent-%COMP%] {\n  width: 310px;\n}\n\n.pure-u-1-2[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%] {\n  width: 50%;\n  *width: 49.969%;\n}\n\n.pure-u[_ngcontent-%COMP%], .pure-u-1[_ngcontent-%COMP%], .pure-u-1-1[_ngcontent-%COMP%], .pure-u-1-2[_ngcontent-%COMP%], .pure-u-1-3[_ngcontent-%COMP%], .pure-u-1-4[_ngcontent-%COMP%], .pure-u-1-5[_ngcontent-%COMP%], .pure-u-1-6[_ngcontent-%COMP%], .pure-u-1-8[_ngcontent-%COMP%], .pure-u-1-12[_ngcontent-%COMP%], .pure-u-1-24[_ngcontent-%COMP%], .pure-u-2-3[_ngcontent-%COMP%], .pure-u-2-5[_ngcontent-%COMP%], .pure-u-2-24[_ngcontent-%COMP%], .pure-u-3-4[_ngcontent-%COMP%], .pure-u-3-5[_ngcontent-%COMP%], .pure-u-3-8[_ngcontent-%COMP%], .pure-u-3-24[_ngcontent-%COMP%], .pure-u-4-5[_ngcontent-%COMP%], .pure-u-4-24[_ngcontent-%COMP%], .pure-u-5-5[_ngcontent-%COMP%], .pure-u-5-6[_ngcontent-%COMP%], .pure-u-5-8[_ngcontent-%COMP%], .pure-u-5-12[_ngcontent-%COMP%], .pure-u-5-24[_ngcontent-%COMP%], .pure-u-6-24[_ngcontent-%COMP%], .pure-u-7-8[_ngcontent-%COMP%], .pure-u-7-12[_ngcontent-%COMP%], .pure-u-7-24[_ngcontent-%COMP%], .pure-u-8-24[_ngcontent-%COMP%], .pure-u-9-24[_ngcontent-%COMP%], .pure-u-10-24[_ngcontent-%COMP%], .pure-u-11-12[_ngcontent-%COMP%], .pure-u-11-24[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%], .pure-u-13-24[_ngcontent-%COMP%], .pure-u-14-24[_ngcontent-%COMP%], .pure-u-15-24[_ngcontent-%COMP%], .pure-u-16-24[_ngcontent-%COMP%], .pure-u-17-24[_ngcontent-%COMP%], .pure-u-18-24[_ngcontent-%COMP%], .pure-u-19-24[_ngcontent-%COMP%], .pure-u-20-24[_ngcontent-%COMP%], .pure-u-21-24[_ngcontent-%COMP%], .pure-u-22-24[_ngcontent-%COMP%], .pure-u-23-24[_ngcontent-%COMP%], .pure-u-24-24[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n}\n\n.c-appointment-form-new__title[_ngcontent-%COMP%], .c-appointment-form__payment[_ngcontent-%COMP%], .u-spacer--large-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.c-appointment-form-new__title[_ngcontent-%COMP%], .c-appointment-form__payment__card__discount-banner[_ngcontent-%COMP%], .c-appointment-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .c-appointment-otp__separator[_ngcontent-%COMP%], .c-btn[_ngcontent-%COMP%], .c-btn--dark[_ngcontent-%COMP%], .c-btn--dark-auto[_ngcontent-%COMP%], .c-btn--dark-fitX[_ngcontent-%COMP%], .c-btn--dark-fitY[_ngcontent-%COMP%], .c-btn--dark.disabled[_ngcontent-%COMP%], .c-btn--disabled[_ngcontent-%COMP%], .c-btn--disabled-auto[_ngcontent-%COMP%], .c-btn--green[_ngcontent-%COMP%], .c-btn--green.disabled[_ngcontent-%COMP%], .c-btn--light[_ngcontent-%COMP%], .c-btn--light-auto[_ngcontent-%COMP%], .c-consult__title[_ngcontent-%COMP%], .c-patient-list__title[_ngcontent-%COMP%], .disabled.c-btn--dark-auto[_ngcontent-%COMP%], .disabled.c-btn--dark-fitX[_ngcontent-%COMP%], .disabled.c-btn--dark-fitY[_ngcontent-%COMP%], .u-bold[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.c-appointment-form-new__title[_ngcontent-%COMP%], .c-consult__title[_ngcontent-%COMP%], .u-jumbo-font[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.c-appointment-form-new__whatsapp[_ngcontent-%COMP%], .c-appointment-form__payment__card[_ngcontent-%COMP%], .c-patient-list__title[_ngcontent-%COMP%], .u-spacer--bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.c-patient-list__container[_ngcontent-%COMP%] {\n  border: 1px solid #b4b4be;\n  border-radius: 4px;\n}\n\n.c-selection-info__alert[_ngcontent-%COMP%], .c-selection-slot-block[_ngcontent-%COMP%], .u-spacer--vertical[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.c-appointment-form__payment__card[_ngcontent-%COMP%], .c-patient-list__container[_ngcontent-%COMP%], .c-selection-info__card[_ngcontent-%COMP%], .c-selection-slot-block[_ngcontent-%COMP%], .u-white-background[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.c-patient-list__item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #b4b4be;\n}\n\n.c-patient-list__item[_ngcontent-%COMP%], .c-selection-info__alert[_ngcontent-%COMP%], .u-cushion--medium[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.o-radio__label[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\n.o-radio__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], option[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Camphor, verdana !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  outline: none;\n}\n\ninput[type=radio i][_ngcontent-%COMP%] {\n  background-color: initial;\n  cursor: default;\n  -webkit-appearance: radio;\n  box-sizing: border-box;\n  margin: 3px 3px 0px 5px;\n  padding: initial;\n  border: initial;\n}\n\nuser[_ngcontent-%COMP%]   agent[_ngcontent-%COMP%]   stylesheet[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-writing-mode: horizontal-tb !important;\n  text-rendering: auto;\n  color: -internal-light-dark-color(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-appearance: textfield;\n  background-color: -internal-light-dark-color(white, black);\n  -webkit-rtl-ordering: logical;\n  cursor: text;\n  margin: 0em;\n  font: 400 13.3333px Arial;\n  padding: 1px 0px;\n  border-width: 2px;\n  border-style: inset;\n  border-color: initial;\n  -o-border-image: initial;\n     border-image: initial;\n}\n\n.o-radio__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .o-radio__checkmark[_ngcontent-%COMP%] {\n  border: 2px solid #14bef0;\n}\n\n.o-radio__checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1px;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  border: 1px solid silver;\n  border-radius: 50%;\n  background-color: #fff;\n  box-sizing: border-box;\n}\n\n.o-radio__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .o-radio__checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n.o-radio__checkmark[_ngcontent-%COMP%]:after {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 8px;\n  height: 8px;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background: #14bef0;\n  content: \"\";\n}\n\n.u-spacer--medium-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.u-spacer--medium-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n\n.c-appointment-form-new__title[_ngcontent-%COMP%], .c-appointment-form__payment__card__discount-banner[_ngcontent-%COMP%], .c-appointment-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .c-appointment-otp__separator[_ngcontent-%COMP%], .c-btn[_ngcontent-%COMP%], .c-btn--dark[_ngcontent-%COMP%], .c-btn--dark-auto[_ngcontent-%COMP%], .c-btn--dark-fitX[_ngcontent-%COMP%], .c-btn--dark-fitY[_ngcontent-%COMP%], .c-btn--dark.disabled[_ngcontent-%COMP%], .c-btn--disabled[_ngcontent-%COMP%], .c-btn--disabled-auto[_ngcontent-%COMP%], .c-btn--green[_ngcontent-%COMP%], .c-btn--green.disabled[_ngcontent-%COMP%], .c-btn--light[_ngcontent-%COMP%], .c-btn--light-auto[_ngcontent-%COMP%], .c-consult__title[_ngcontent-%COMP%], .c-patient-list__title[_ngcontent-%COMP%], .disabled.c-btn--dark-auto[_ngcontent-%COMP%], .disabled.c-btn--dark-fitX[_ngcontent-%COMP%], .disabled.c-btn--dark-fitY[_ngcontent-%COMP%], .u-bold[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.u-spacer--medium-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.u-spacer--medium-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n\n.u-spacer--medium-vertical[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.u-spacer--medium-vertical[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.o-checkbox__grouplabel[_ngcontent-%COMP%], .o-date__label[_ngcontent-%COMP%], .o-form__label[_ngcontent-%COMP%], .o-radio__grouplabel[_ngcontent-%COMP%], .o-select__label[_ngcontent-%COMP%], .o-textarea__label[_ngcontent-%COMP%], .o-textbox__label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.o-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #b4b4be;\n  border-radius: 2px;\n  outline: none;\n  background-color: #fff;\n  color: #414146;\n  font-size: 14px;\n}\n\n.c-appointment-form-new__whatsapp[_ngcontent-%COMP%], .c-appointment-form__payment__card[_ngcontent-%COMP%], .c-patient-list__title[_ngcontent-%COMP%], .u-spacer--bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.o-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput[type=checkbox i][_ngcontent-%COMP%] {\n  background-color: initial;\n  cursor: default;\n  -webkit-appearance: checkbox;\n  box-sizing: border-box;\n  margin: 3px 3px 3px 4px;\n  padding: initial;\n  border: initial;\n}\n\nuser[_ngcontent-%COMP%]   agent[_ngcontent-%COMP%]   stylesheet[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-writing-mode: horizontal-tb !important;\n  text-rendering: auto;\n  color: -internal-light-dark-color(black, white);\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  display: inline-block;\n  text-align: start;\n  -webkit-appearance: textfield;\n  background-color: -internal-light-dark-color(white, black);\n  -webkit-rtl-ordering: logical;\n  cursor: text;\n  margin: 0em;\n  font: 400 13.3333px Arial;\n  padding: 1px 0px;\n  border-width: 2px;\n  border-style: inset;\n  border-color: initial;\n  -o-border-image: initial;\n     border-image: initial;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], option[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Camphor, verdana !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.o-checkbox__checkmark--checked[_ngcontent-%COMP%] {\n  color: #14bef0;\n}\n\n.o-checkbox__checkmark[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  color: #b4b4be;\n  font-size: 20px;\n}\n\n.pure-u[_ngcontent-%COMP%], .pure-u-1[_ngcontent-%COMP%], .pure-u-1-1[_ngcontent-%COMP%], .pure-u-1-2[_ngcontent-%COMP%], .pure-u-1-3[_ngcontent-%COMP%], .pure-u-1-4[_ngcontent-%COMP%], .pure-u-1-5[_ngcontent-%COMP%], .pure-u-1-6[_ngcontent-%COMP%], .pure-u-1-8[_ngcontent-%COMP%], .pure-u-1-12[_ngcontent-%COMP%], .pure-u-1-24[_ngcontent-%COMP%], .pure-u-2-3[_ngcontent-%COMP%], .pure-u-2-5[_ngcontent-%COMP%], .pure-u-2-24[_ngcontent-%COMP%], .pure-u-3-4[_ngcontent-%COMP%], .pure-u-3-5[_ngcontent-%COMP%], .pure-u-3-8[_ngcontent-%COMP%], .pure-u-3-24[_ngcontent-%COMP%], .pure-u-4-5[_ngcontent-%COMP%], .pure-u-4-24[_ngcontent-%COMP%], .pure-u-5-5[_ngcontent-%COMP%], .pure-u-5-6[_ngcontent-%COMP%], .pure-u-5-8[_ngcontent-%COMP%], .pure-u-5-12[_ngcontent-%COMP%], .pure-u-5-24[_ngcontent-%COMP%], .pure-u-6-24[_ngcontent-%COMP%], .pure-u-7-8[_ngcontent-%COMP%], .pure-u-7-12[_ngcontent-%COMP%], .pure-u-7-24[_ngcontent-%COMP%], .pure-u-8-24[_ngcontent-%COMP%], .pure-u-9-24[_ngcontent-%COMP%], .pure-u-10-24[_ngcontent-%COMP%], .pure-u-11-12[_ngcontent-%COMP%], .pure-u-11-24[_ngcontent-%COMP%], .pure-u-12-24[_ngcontent-%COMP%], .pure-u-13-24[_ngcontent-%COMP%], .pure-u-14-24[_ngcontent-%COMP%], .pure-u-15-24[_ngcontent-%COMP%], .pure-u-16-24[_ngcontent-%COMP%], .pure-u-17-24[_ngcontent-%COMP%], .pure-u-18-24[_ngcontent-%COMP%], .pure-u-19-24[_ngcontent-%COMP%], .pure-u-20-24[_ngcontent-%COMP%], .pure-u-21-24[_ngcontent-%COMP%], .pure-u-22-24[_ngcontent-%COMP%], .pure-u-23-24[_ngcontent-%COMP%], .pure-u-24-24[_ngcontent-%COMP%] {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n}\n\n.c-appointment-form-new__title[_ngcontent-%COMP%], .c-appointment-form__payment__card__discount-banner[_ngcontent-%COMP%], .c-appointment-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .c-appointment-otp__separator[_ngcontent-%COMP%], .c-btn[_ngcontent-%COMP%], .c-btn--dark[_ngcontent-%COMP%], .c-btn--dark-auto[_ngcontent-%COMP%], .c-btn--dark-fitX[_ngcontent-%COMP%], .c-btn--dark-fitY[_ngcontent-%COMP%], .c-btn--dark.disabled[_ngcontent-%COMP%], .c-btn--disabled[_ngcontent-%COMP%], .c-btn--disabled-auto[_ngcontent-%COMP%], .c-btn--green[_ngcontent-%COMP%], .c-btn--green.disabled[_ngcontent-%COMP%], .c-btn--light[_ngcontent-%COMP%], .c-btn--light-auto[_ngcontent-%COMP%], .c-consult__title[_ngcontent-%COMP%], .c-patient-list__title[_ngcontent-%COMP%], .disabled.c-btn--dark-auto[_ngcontent-%COMP%], .disabled.c-btn--dark-fitX[_ngcontent-%COMP%], .disabled.c-btn--dark-fitY[_ngcontent-%COMP%], .u-bold[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.c-btn--dark[_ngcontent-%COMP%], .c-btn--dark-auto[_ngcontent-%COMP%], .c-btn--dark-fitX[_ngcontent-%COMP%], .c-btn--dark-fitY[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 4px 0 8px;\n  width: 100%;\n  background-color: #14bef0;\n  border: 1px solid #14bef0;\n}\n\n.c-btn[_ngcontent-%COMP%], .c-btn--dark[_ngcontent-%COMP%], .c-btn--dark-auto[_ngcontent-%COMP%], .c-btn--dark-fitX[_ngcontent-%COMP%], .c-btn--dark-fitY[_ngcontent-%COMP%], .c-btn--dark.disabled[_ngcontent-%COMP%], .c-btn--disabled[_ngcontent-%COMP%], .c-btn--disabled-auto[_ngcontent-%COMP%], .c-btn--green[_ngcontent-%COMP%], .c-btn--green.disabled[_ngcontent-%COMP%], .c-btn--light[_ngcontent-%COMP%], .c-btn--light-auto[_ngcontent-%COMP%], .disabled.c-btn--dark-auto[_ngcontent-%COMP%], .disabled.c-btn--dark-fitX[_ngcontent-%COMP%], .disabled.c-btn--dark-fitY[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  height: 30px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], option[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Camphor, verdana !important;\n}\n\n.u-light-red-text[_ngcontent-%COMP%] {\n  color: #ff2c00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rYXBwb2ltZW50L3BhdGllbnQtZGV0YWlscy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGJvb2thcHBvaW1lbnRcXHBhdGllbnQtZGV0YWlsc1xccGF0aWVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Jvb2thcHBvaW1lbnQvcGF0aWVudC1kZXRhaWxzL3BhdGllbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtHQUNBLHNCQUFBO0dBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7O0VBRUksVUFBQTtHQUNBLGNBQUE7QUNBSjs7QURHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQ0kscUJBQUE7R0FDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FER0E7OztFQUdJLHNCQUFBO0FDQUo7O0FER0E7Ozs7O0VBS0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLG1EQUFBO0FDQUo7O0FER0E7RUFFSSxtQkFBQTtBQ0RKOztBRElBOzs7RUFHSSxh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O0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO0FDUEo7O0FEVUE7Ozs7O0VBS0ssd0NBQUE7QUNQTDs7QURVQTtFQUNJLGFBQUE7QUNQSjs7QURVQTtFQUNJLGNBQUE7QUNQSjs7QURVQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNQSjs7QURVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQ0kscUJBQUE7R0FDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDUEo7O0FEZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQkksZ0JBQUE7QUNaSjs7QURlQTs7OztFQUlJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDWko7O0FEZUE7Ozs7Ozs7Ozs7Ozs7OztFQWVJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURlQTs7Ozs7RUFLSyx3Q0FBQTtBQ1pMOztBRGVBO0VBQ0ksY0FBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ib29rYXBwb2ltZW50L3BhdGllbnQtZGV0YWlscy9wYXRpZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5wYWRpbmdub25lIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XHJcbn1cclxuXHJcbi50Y29sb3Ige1xyXG4gICAgY29sb3I6ICMxNGJlZjA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jLXBhdGllbnQtbGlzdF9faXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I0YjRiZTtcclxufVxyXG5cclxuYy1hcHBvaW50bWVudC1wYWdlIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG59XHJcblxyXG4ucHVyZS1nIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtLjMxZW07XHJcbiAgICAqbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICp3b3JkLXNwYWNpbmc6IC0uNDNlbTtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZXNwZWVkO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4vLyBkaXJlY3Qgc2Nzc1xyXG4uYy1hcHBvaW50bWVudC1wYWdlIHtcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG59XHJcblxyXG4ucHVyZS11LTEtMixcclxuLnB1cmUtdS0xMi0yNCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgKndpZHRoOiA0OS45NjklO1xyXG59XHJcblxyXG4ucHVyZS11LFxyXG4ucHVyZS11LTEsXHJcbi5wdXJlLXUtMS0xLFxyXG4ucHVyZS11LTEtMixcclxuLnB1cmUtdS0xLTMsXHJcbi5wdXJlLXUtMS00LFxyXG4ucHVyZS11LTEtNSxcclxuLnB1cmUtdS0xLTYsXHJcbi5wdXJlLXUtMS04LFxyXG4ucHVyZS11LTEtMTIsXHJcbi5wdXJlLXUtMS0yNCxcclxuLnB1cmUtdS0yLTMsXHJcbi5wdXJlLXUtMi01LFxyXG4ucHVyZS11LTItMjQsXHJcbi5wdXJlLXUtMy00LFxyXG4ucHVyZS11LTMtNSxcclxuLnB1cmUtdS0zLTgsXHJcbi5wdXJlLXUtMy0yNCxcclxuLnB1cmUtdS00LTUsXHJcbi5wdXJlLXUtNC0yNCxcclxuLnB1cmUtdS01LTUsXHJcbi5wdXJlLXUtNS02LFxyXG4ucHVyZS11LTUtOCxcclxuLnB1cmUtdS01LTEyLFxyXG4ucHVyZS11LTUtMjQsXHJcbi5wdXJlLXUtNi0yNCxcclxuLnB1cmUtdS03LTgsXHJcbi5wdXJlLXUtNy0xMixcclxuLnB1cmUtdS03LTI0LFxyXG4ucHVyZS11LTgtMjQsXHJcbi5wdXJlLXUtOS0yNCxcclxuLnB1cmUtdS0xMC0yNCxcclxuLnB1cmUtdS0xMS0xMixcclxuLnB1cmUtdS0xMS0yNCxcclxuLnB1cmUtdS0xMi0yNCxcclxuLnB1cmUtdS0xMy0yNCxcclxuLnB1cmUtdS0xNC0yNCxcclxuLnB1cmUtdS0xNS0yNCxcclxuLnB1cmUtdS0xNi0yNCxcclxuLnB1cmUtdS0xNy0yNCxcclxuLnB1cmUtdS0xOC0yNCxcclxuLnB1cmUtdS0xOS0yNCxcclxuLnB1cmUtdS0yMC0yNCxcclxuLnB1cmUtdS0yMS0yNCxcclxuLnB1cmUtdS0yMi0yNCxcclxuLnB1cmUtdS0yMy0yNCxcclxuLnB1cmUtdS0yNC0yNCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAqZGlzcGxheTogaW5saW5lO1xyXG4gICAgem9vbTogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxufVxyXG5cclxuLmMtYXBwb2ludG1lbnQtb3RwX19zZXBhcmF0b3IsXHJcbi5jLWNvbnN1bHQsXHJcbi51LWZpbGwtLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm1fX2lucHV0LFxyXG4uYy1hcHBvaW50bWVudC1mb3JtX19wYXltZW50X19jYXJkLFxyXG4uYy1hcHBvaW50bWVudC1vdHBfX2lucHV0LFxyXG4uYy1zZWxlY3Rpb24taW5mb19fYWxlcnQsXHJcbi51LXJvdW5kLWNvcm5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi51LWItc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggaHNsYSgwLCAwJSwgNDMlLCAuMTQpO1xyXG59XHJcblxyXG4uYy1hcHBvaW50bWVudC1pbmZvIHtcclxuICAgIC8vIHdpZHRoOiA0NDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jLXNlbGVjdGlvbi1pbmZvX19jYXJkLFxyXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcclxuLnUtY3VzaGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fdGl0bGUsXHJcbi5jLWFwcG9pbnRtZW50LWZvcm1fX3BheW1lbnRfX2NhcmRfX2Rpc2NvdW50LWJhbm5lcixcclxuLmMtYXBwb2ludG1lbnQtZm9ybSBhLFxyXG4uYy1hcHBvaW50bWVudC1vdHBfX3NlcGFyYXRvcixcclxuLmMtYnRuLFxyXG4uYy1idG4tLWRhcmssXHJcbi5jLWJ0bi0tZGFyay1hdXRvLFxyXG4uYy1idG4tLWRhcmstZml0WCxcclxuLmMtYnRuLS1kYXJrLWZpdFksXHJcbi5jLWJ0bi0tZGFyay5kaXNhYmxlZCxcclxuLmMtYnRuLS1kaXNhYmxlZCxcclxuLmMtYnRuLS1kaXNhYmxlZC1hdXRvLFxyXG4uYy1idG4tLWdyZWVuLFxyXG4uYy1idG4tLWdyZWVuLmRpc2FibGVkLFxyXG4uYy1idG4tLWxpZ2h0LFxyXG4uYy1idG4tLWxpZ2h0LWF1dG8sXHJcbi5jLWNvbnN1bHRfX3RpdGxlLFxyXG4uYy1wYXRpZW50LWxpc3RfX3RpdGxlLFxyXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstYXV0byxcclxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFgsXHJcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRZLFxyXG4udS1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jLXNlbGVjdGlvbi1pbmZvX19jYXJkLFxyXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcclxuLnUtY3VzaGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4qLFxyXG4gOmFmdGVyLFxyXG4gOmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG51c2VyIGFnZW50IHN0eWxlc2hlZXQgZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHVyZS11LFxyXG4ucHVyZS11LTEsXHJcbi5wdXJlLXUtMS0xLFxyXG4ucHVyZS11LTEtMixcclxuLnB1cmUtdS0xLTMsXHJcbi5wdXJlLXUtMS00LFxyXG4ucHVyZS11LTEtNSxcclxuLnB1cmUtdS0xLTYsXHJcbi5wdXJlLXUtMS04LFxyXG4ucHVyZS11LTEtMTIsXHJcbi5wdXJlLXUtMS0yNCxcclxuLnB1cmUtdS0yLTMsXHJcbi5wdXJlLXUtMi01LFxyXG4ucHVyZS11LTItMjQsXHJcbi5wdXJlLXUtMy00LFxyXG4ucHVyZS11LTMtNSxcclxuLnB1cmUtdS0zLTgsXHJcbi5wdXJlLXUtMy0yNCxcclxuLnB1cmUtdS00LTUsXHJcbi5wdXJlLXUtNC0yNCxcclxuLnB1cmUtdS01LTUsXHJcbi5wdXJlLXUtNS02LFxyXG4ucHVyZS11LTUtOCxcclxuLnB1cmUtdS01LTEyLFxyXG4ucHVyZS11LTUtMjQsXHJcbi5wdXJlLXUtNi0yNCxcclxuLnB1cmUtdS03LTgsXHJcbi5wdXJlLXUtNy0xMixcclxuLnB1cmUtdS03LTI0LFxyXG4ucHVyZS11LTgtMjQsXHJcbi5wdXJlLXUtOS0yNCxcclxuLnB1cmUtdS0xMC0yNCxcclxuLnB1cmUtdS0xMS0xMixcclxuLnB1cmUtdS0xMS0yNCxcclxuLnB1cmUtdS0xMi0yNCxcclxuLnB1cmUtdS0xMy0yNCxcclxuLnB1cmUtdS0xNC0yNCxcclxuLnB1cmUtdS0xNS0yNCxcclxuLnB1cmUtdS0xNi0yNCxcclxuLnB1cmUtdS0xNy0yNCxcclxuLnB1cmUtdS0xOC0yNCxcclxuLnB1cmUtdS0xOS0yNCxcclxuLnB1cmUtdS0yMC0yNCxcclxuLnB1cmUtdS0yMS0yNCxcclxuLnB1cmUtdS0yMi0yNCxcclxuLnB1cmUtdS0yMy0yNCxcclxuLnB1cmUtdS0yNC0yNCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAqZGlzcGxheTogaW5saW5lO1xyXG4gICAgem9vbTogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxufVxyXG5cclxuLnUtc3BhY2VyLS1zbWFsbC1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4udS1sYXJnZS1mb250IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnB1cmUtZyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLS4zMWVtO1xyXG4gICAgKmxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAqd29yZC1zcGFjaW5nOiAtLjQzZW07XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVzcGVlZDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnB1cmUtdS0xLTIsXHJcbi5wdXJlLXUtMTItMjQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgICp3aWR0aDogNDkuOTY5JTtcclxufVxyXG5cclxuKixcclxuIDphZnRlcixcclxuIDpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxudXNlciBhZ2VudCBzdHlsZXNoZWV0IGkge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4qLFxyXG4gOmFmdGVyLFxyXG4gOmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4udS10LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucHVyZS11LTEtMixcclxuLnB1cmUtdS0xMi0yNCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgKndpZHRoOiA0OS45NjklO1xyXG59XHJcblxyXG5lbGVtZW50LnN0eWxlIHt9XHJcblxyXG4qLFxyXG4gOmFmdGVyLFxyXG4gOmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG51c2VyIGFnZW50IHN0eWxlc2hlZXQgZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYy1hcHBvaW50bWVudC1pbmZvX19yb3crLmMtYXBwb2ludG1lbnQtaW5mb19fcm93IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGU1O1xyXG59XHJcblxyXG4uYy1zZWxlY3Rpb24taW5mb19fY2FyZCxcclxuLmMtc2VsZWN0aW9uLXNsb3QtYmxvY2ssXHJcbi51LWN1c2hpb24ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3doYXRzYXBwLWxvZ28sXHJcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcC10ZXh0LFxyXG4uYy1zZWxlY3Rpb24taW5mb19fY2FyZCxcclxuLnUtZC1pbmxpbmVibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jLWRvY3Rvci1pbmZvLWNhcmRfX3JpZ2h0LFxyXG4uYy1wcmFjdGljZS1pbmZvLWNhcmRfX3JpZ2h0IHtcclxuICAgIHdpZHRoOiAzMTBweDtcclxufVxyXG5cclxuLnUtdmFsaWduLXRvcCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtdG9wO1xyXG59XHJcblxyXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fd2hhdHNhcHAtbG9nbyxcclxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3doYXRzYXBwLXRleHQsXHJcbi5jLXNlbGVjdGlvbi1pbmZvX19jYXJkLFxyXG4udS1kLWlubGluZWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnUtY3VzaGlvbi0taG9yaXpvbnRhbCB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm1fX3BheW1lbnRfX2NhcmRfX3JhZGlvLFxyXG4uby1zZWxlY3RfX2Fycm93LFxyXG4uby10ZXh0Ym94X19sb2NrLFxyXG4udS1ncmV5XzMtdGV4dCB7XHJcbiAgICBjb2xvcjogIzc4Nzg4NztcclxufVxyXG5cclxuLmMtYXBwb2ludG1lbnQtaW5mb19fcm93Ky5jLWFwcG9pbnRtZW50LWluZm9fX3JvdyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlNTtcclxufVxyXG5cclxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXHJcbi5jLXNlbGVjdGlvbi1zbG90LWJsb2NrLFxyXG4udS1jdXNoaW9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcC1sb2dvLFxyXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fd2hhdHNhcHAtdGV4dCxcclxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXHJcbi51LWQtaW5saW5lYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYy1kb2N0b3ItaW5mby1jYXJkIGltZyxcclxuLmMtcHJhY3RpY2UtaW5mby1jYXJkIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuLmMtZG9jdG9yLWluZm8tY2FyZF9fcmlnaHQsXHJcbi5jLXByYWN0aWNlLWluZm8tY2FyZF9fcmlnaHQge1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG59XHJcblxyXG4ucHVyZS11LTEtMixcclxuLnB1cmUtdS0xMi0yNCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgKndpZHRoOiA0OS45NjklO1xyXG59XHJcblxyXG4ucHVyZS11LFxyXG4ucHVyZS11LTEsXHJcbi5wdXJlLXUtMS0xLFxyXG4ucHVyZS11LTEtMixcclxuLnB1cmUtdS0xLTMsXHJcbi5wdXJlLXUtMS00LFxyXG4ucHVyZS11LTEtNSxcclxuLnB1cmUtdS0xLTYsXHJcbi5wdXJlLXUtMS04LFxyXG4ucHVyZS11LTEtMTIsXHJcbi5wdXJlLXUtMS0yNCxcclxuLnB1cmUtdS0yLTMsXHJcbi5wdXJlLXUtMi01LFxyXG4ucHVyZS11LTItMjQsXHJcbi5wdXJlLXUtMy00LFxyXG4ucHVyZS11LTMtNSxcclxuLnB1cmUtdS0zLTgsXHJcbi5wdXJlLXUtMy0yNCxcclxuLnB1cmUtdS00LTUsXHJcbi5wdXJlLXUtNC0yNCxcclxuLnB1cmUtdS01LTUsXHJcbi5wdXJlLXUtNS02LFxyXG4ucHVyZS11LTUtOCxcclxuLnB1cmUtdS01LTEyLFxyXG4ucHVyZS11LTUtMjQsXHJcbi5wdXJlLXUtNi0yNCxcclxuLnB1cmUtdS03LTgsXHJcbi5wdXJlLXUtNy0xMixcclxuLnB1cmUtdS03LTI0LFxyXG4ucHVyZS11LTgtMjQsXHJcbi5wdXJlLXUtOS0yNCxcclxuLnB1cmUtdS0xMC0yNCxcclxuLnB1cmUtdS0xMS0xMixcclxuLnB1cmUtdS0xMS0yNCxcclxuLnB1cmUtdS0xMi0yNCxcclxuLnB1cmUtdS0xMy0yNCxcclxuLnB1cmUtdS0xNC0yNCxcclxuLnB1cmUtdS0xNS0yNCxcclxuLnB1cmUtdS0xNi0yNCxcclxuLnB1cmUtdS0xNy0yNCxcclxuLnB1cmUtdS0xOC0yNCxcclxuLnB1cmUtdS0xOS0yNCxcclxuLnB1cmUtdS0yMC0yNCxcclxuLnB1cmUtdS0yMS0yNCxcclxuLnB1cmUtdS0yMi0yNCxcclxuLnB1cmUtdS0yMy0yNCxcclxuLnB1cmUtdS0yNC0yNCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAqZGlzcGxheTogaW5saW5lO1xyXG4gICAgem9vbTogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxufVxyXG5cclxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXcge1xyXG4gICAgLy8gd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fdGl0bGUsXHJcbi5jLWFwcG9pbnRtZW50LWZvcm1fX3BheW1lbnQsXHJcbi51LXNwYWNlci0tbGFyZ2UtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X190aXRsZSxcclxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZF9fZGlzY291bnQtYmFubmVyLFxyXG4uYy1hcHBvaW50bWVudC1mb3JtIGEsXHJcbi5jLWFwcG9pbnRtZW50LW90cF9fc2VwYXJhdG9yLFxyXG4uYy1idG4sXHJcbi5jLWJ0bi0tZGFyayxcclxuLmMtYnRuLS1kYXJrLWF1dG8sXHJcbi5jLWJ0bi0tZGFyay1maXRYLFxyXG4uYy1idG4tLWRhcmstZml0WSxcclxuLmMtYnRuLS1kYXJrLmRpc2FibGVkLFxyXG4uYy1idG4tLWRpc2FibGVkLFxyXG4uYy1idG4tLWRpc2FibGVkLWF1dG8sXHJcbi5jLWJ0bi0tZ3JlZW4sXHJcbi5jLWJ0bi0tZ3JlZW4uZGlzYWJsZWQsXHJcbi5jLWJ0bi0tbGlnaHQsXHJcbi5jLWJ0bi0tbGlnaHQtYXV0byxcclxuLmMtY29uc3VsdF9fdGl0bGUsXHJcbi5jLXBhdGllbnQtbGlzdF9fdGl0bGUsXHJcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1hdXRvLFxyXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstZml0WCxcclxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFksXHJcbi51LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3RpdGxlLFxyXG4uYy1jb25zdWx0X190aXRsZSxcclxuLnUtanVtYm8tZm9udCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcCxcclxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZCxcclxuLmMtcGF0aWVudC1saXN0X190aXRsZSxcclxuLnUtc3BhY2VyLS1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmMtcGF0aWVudC1saXN0X19jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmMtc2VsZWN0aW9uLWluZm9fX2FsZXJ0LFxyXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcclxuLnUtc3BhY2VyLS12ZXJ0aWNhbCB7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZCxcclxuLmMtcGF0aWVudC1saXN0X19jb250YWluZXIsXHJcbi5jLXNlbGVjdGlvbi1pbmZvX19jYXJkLFxyXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcclxuLnUtd2hpdGUtYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYy1wYXRpZW50LWxpc3RfX2l0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNGI0YmU7XHJcbn1cclxuXHJcbi5jLXBhdGllbnQtbGlzdF9faXRlbSxcclxuLmMtc2VsZWN0aW9uLWluZm9fX2FsZXJ0LFxyXG4udS1jdXNoaW9uLS1tZWRpdW0ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm8tcmFkaW9fX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uby1yYWRpb19fbGFiZWwgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCxcclxub3B0aW9uLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICAgICBmb250LWZhbWlseTogQ2FtcGhvcix2ZXJkYW5hICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiIGldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogM3B4IDNweCAwcHggNXB4O1xyXG4gICAgcGFkZGluZzogaW5pdGlhbDtcclxuICAgIGJvcmRlcjogaW5pdGlhbDtcclxufVxyXG5cclxudXNlciBhZ2VudCBzdHlsZXNoZWV0IGlucHV0IHtcclxuICAgIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIGNvbG9yOiAtaW50ZXJuYWwtbGlnaHQtZGFyay1jb2xvcihibGFjaywgd2hpdGUpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0ZXh0LWluZGVudDogMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmstY29sb3Iod2hpdGUsIGJsYWNrKTtcclxuICAgIC13ZWJraXQtcnRsLW9yZGVyaW5nOiBsb2dpY2FsO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgbWFyZ2luOiAwZW07XHJcbiAgICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xyXG4gICAgcGFkZGluZzogMXB4IDBweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcclxuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxufVxyXG5cclxuLm8tcmFkaW9fX2xhYmVsIGlucHV0OmNoZWNrZWR+Lm8tcmFkaW9fX2NoZWNrbWFyayB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTRiZWYwO1xyXG59XHJcblxyXG4uby1yYWRpb19fY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5vLXJhZGlvX19sYWJlbCBpbnB1dDpjaGVja2Vkfi5vLXJhZGlvX19jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5vLXJhZGlvX19jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTRiZWYwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLnUtc3BhY2VyLS1tZWRpdW0tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi51LXNwYWNlci0tbWVkaXVtLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fdGl0bGUsXHJcbi5jLWFwcG9pbnRtZW50LWZvcm1fX3BheW1lbnRfX2NhcmRfX2Rpc2NvdW50LWJhbm5lcixcclxuLmMtYXBwb2ludG1lbnQtZm9ybSBhLFxyXG4uYy1hcHBvaW50bWVudC1vdHBfX3NlcGFyYXRvcixcclxuLmMtYnRuLFxyXG4uYy1idG4tLWRhcmssXHJcbi5jLWJ0bi0tZGFyay1hdXRvLFxyXG4uYy1idG4tLWRhcmstZml0WCxcclxuLmMtYnRuLS1kYXJrLWZpdFksXHJcbi5jLWJ0bi0tZGFyay5kaXNhYmxlZCxcclxuLmMtYnRuLS1kaXNhYmxlZCxcclxuLmMtYnRuLS1kaXNhYmxlZC1hdXRvLFxyXG4uYy1idG4tLWdyZWVuLFxyXG4uYy1idG4tLWdyZWVuLmRpc2FibGVkLFxyXG4uYy1idG4tLWxpZ2h0LFxyXG4uYy1idG4tLWxpZ2h0LWF1dG8sXHJcbi5jLWNvbnN1bHRfX3RpdGxlLFxyXG4uYy1wYXRpZW50LWxpc3RfX3RpdGxlLFxyXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstYXV0byxcclxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFgsXHJcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRZLFxyXG4udS1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi51LXNwYWNlci0tbWVkaXVtLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udS1zcGFjZXItLW1lZGl1bS1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLnUtc3BhY2VyLS1tZWRpdW0tdmVydGljYWwge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi51LXNwYWNlci0tbWVkaXVtLXZlcnRpY2FsIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uby1jaGVja2JveF9fZ3JvdXBsYWJlbCxcclxuLm8tZGF0ZV9fbGFiZWwsXHJcbi5vLWZvcm1fX2xhYmVsLFxyXG4uby1yYWRpb19fZ3JvdXBsYWJlbCxcclxuLm8tc2VsZWN0X19sYWJlbCxcclxuLm8tdGV4dGFyZWFfX2xhYmVsLFxyXG4uby10ZXh0Ym94X19sYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5vLXRleHRib3ggaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0MTQxNDY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcCxcclxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZCxcclxuLmMtcGF0aWVudC1saXN0X190aXRsZSxcclxuLnUtc3BhY2VyLS1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm8tY2hlY2tib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIiBpXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjaGVja2JveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDNweCAzcHggM3B4IDRweDtcclxuICAgIHBhZGRpbmc6IGluaXRpYWw7XHJcbiAgICBib3JkZXI6IGluaXRpYWw7XHJcbn1cclxuXHJcbnVzZXIgYWdlbnQgc3R5bGVzaGVldCBpbnB1dCB7XHJcbiAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmstY29sb3IoYmxhY2ssIHdoaXRlKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDBweDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrLWNvbG9yKHdoaXRlLCBibGFjayk7XHJcbiAgICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgZm9udDogNDAwIDEzLjMzMzNweCBBcmlhbDtcclxuICAgIHBhZGRpbmc6IDFweCAwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbm9wdGlvbixcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICAgZm9udC1mYW1pbHk6IENhbXBob3IsdmVyZGFuYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uby1jaGVja2JveF9fY2hlY2ttYXJrLS1jaGVja2VkIHtcclxuICAgIGNvbG9yOiAjMTRiZWYwO1xyXG59XHJcblxyXG4uby1jaGVja2JveF9fY2hlY2ttYXJrIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogI2I0YjRiZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnB1cmUtdSxcclxuLnB1cmUtdS0xLFxyXG4ucHVyZS11LTEtMSxcclxuLnB1cmUtdS0xLTIsXHJcbi5wdXJlLXUtMS0zLFxyXG4ucHVyZS11LTEtNCxcclxuLnB1cmUtdS0xLTUsXHJcbi5wdXJlLXUtMS02LFxyXG4ucHVyZS11LTEtOCxcclxuLnB1cmUtdS0xLTEyLFxyXG4ucHVyZS11LTEtMjQsXHJcbi5wdXJlLXUtMi0zLFxyXG4ucHVyZS11LTItNSxcclxuLnB1cmUtdS0yLTI0LFxyXG4ucHVyZS11LTMtNCxcclxuLnB1cmUtdS0zLTUsXHJcbi5wdXJlLXUtMy04LFxyXG4ucHVyZS11LTMtMjQsXHJcbi5wdXJlLXUtNC01LFxyXG4ucHVyZS11LTQtMjQsXHJcbi5wdXJlLXUtNS01LFxyXG4ucHVyZS11LTUtNixcclxuLnB1cmUtdS01LTgsXHJcbi5wdXJlLXUtNS0xMixcclxuLnB1cmUtdS01LTI0LFxyXG4ucHVyZS11LTYtMjQsXHJcbi5wdXJlLXUtNy04LFxyXG4ucHVyZS11LTctMTIsXHJcbi5wdXJlLXUtNy0yNCxcclxuLnB1cmUtdS04LTI0LFxyXG4ucHVyZS11LTktMjQsXHJcbi5wdXJlLXUtMTAtMjQsXHJcbi5wdXJlLXUtMTEtMTIsXHJcbi5wdXJlLXUtMTEtMjQsXHJcbi5wdXJlLXUtMTItMjQsXHJcbi5wdXJlLXUtMTMtMjQsXHJcbi5wdXJlLXUtMTQtMjQsXHJcbi5wdXJlLXUtMTUtMjQsXHJcbi5wdXJlLXUtMTYtMjQsXHJcbi5wdXJlLXUtMTctMjQsXHJcbi5wdXJlLXUtMTgtMjQsXHJcbi5wdXJlLXUtMTktMjQsXHJcbi5wdXJlLXUtMjAtMjQsXHJcbi5wdXJlLXUtMjEtMjQsXHJcbi5wdXJlLXUtMjItMjQsXHJcbi5wdXJlLXUtMjMtMjQsXHJcbi5wdXJlLXUtMjQtMjQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgKmRpc3BsYXk6IGlubGluZTtcclxuICAgIHpvb206IDE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm1fX2J1dHRvbixcclxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudCB7XHJcbiAgICAvLyB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X190aXRsZSxcclxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZF9fZGlzY291bnQtYmFubmVyLFxyXG4uYy1hcHBvaW50bWVudC1mb3JtIGEsXHJcbi5jLWFwcG9pbnRtZW50LW90cF9fc2VwYXJhdG9yLFxyXG4uYy1idG4sXHJcbi5jLWJ0bi0tZGFyayxcclxuLmMtYnRuLS1kYXJrLWF1dG8sXHJcbi5jLWJ0bi0tZGFyay1maXRYLFxyXG4uYy1idG4tLWRhcmstZml0WSxcclxuLmMtYnRuLS1kYXJrLmRpc2FibGVkLFxyXG4uYy1idG4tLWRpc2FibGVkLFxyXG4uYy1idG4tLWRpc2FibGVkLWF1dG8sXHJcbi5jLWJ0bi0tZ3JlZW4sXHJcbi5jLWJ0bi0tZ3JlZW4uZGlzYWJsZWQsXHJcbi5jLWJ0bi0tbGlnaHQsXHJcbi5jLWJ0bi0tbGlnaHQtYXV0byxcclxuLmMtY29uc3VsdF9fdGl0bGUsXHJcbi5jLXBhdGllbnQtbGlzdF9fdGl0bGUsXHJcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1hdXRvLFxyXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstZml0WCxcclxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFksXHJcbi51LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmMtYnRuLS1kYXJrLFxyXG4uYy1idG4tLWRhcmstYXV0byxcclxuLmMtYnRuLS1kYXJrLWZpdFgsXHJcbi5jLWJ0bi0tZGFyay1maXRZIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNHB4IDAgOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiZWYwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE0YmVmMDtcclxufVxyXG5cclxuLmMtYnRuLFxyXG4uYy1idG4tLWRhcmssXHJcbi5jLWJ0bi0tZGFyay1hdXRvLFxyXG4uYy1idG4tLWRhcmstZml0WCxcclxuLmMtYnRuLS1kYXJrLWZpdFksXHJcbi5jLWJ0bi0tZGFyay5kaXNhYmxlZCxcclxuLmMtYnRuLS1kaXNhYmxlZCxcclxuLmMtYnRuLS1kaXNhYmxlZC1hdXRvLFxyXG4uYy1idG4tLWdyZWVuLFxyXG4uYy1idG4tLWdyZWVuLmRpc2FibGVkLFxyXG4uYy1idG4tLWxpZ2h0LFxyXG4uYy1idG4tLWxpZ2h0LWF1dG8sXHJcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1hdXRvLFxyXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstZml0WCxcclxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbm9wdGlvbixcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICAgZm9udC1mYW1pbHk6IENhbXBob3IsdmVyZGFuYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udS1saWdodC1yZWQtdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmMmMwMDtcclxufVxyXG4iLCIuaGJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFkaW5nbm9uZSB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG59XG5cbi50Y29sb3Ige1xuICBjb2xvcjogIzE0YmVmMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYy1wYXRpZW50LWxpc3RfX2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I0YjRiZTtcbn1cblxuYy1hcHBvaW50bWVudC1wYWdlIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbn1cblxuLnB1cmUtZyB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zMWVtO1xuICAqbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgKndvcmQtc3BhY2luZzogLTAuNDNlbTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplc3BlZWQ7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYy1hcHBvaW50bWVudC1wYWdlIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbn1cblxuLnB1cmUtdS0xLTIsXG4ucHVyZS11LTEyLTI0IHtcbiAgd2lkdGg6IDUwJTtcbiAgKndpZHRoOiA0OS45NjklO1xufVxuXG4ucHVyZS11LFxuLnB1cmUtdS0xLFxuLnB1cmUtdS0xLTEsXG4ucHVyZS11LTEtMixcbi5wdXJlLXUtMS0zLFxuLnB1cmUtdS0xLTQsXG4ucHVyZS11LTEtNSxcbi5wdXJlLXUtMS02LFxuLnB1cmUtdS0xLTgsXG4ucHVyZS11LTEtMTIsXG4ucHVyZS11LTEtMjQsXG4ucHVyZS11LTItMyxcbi5wdXJlLXUtMi01LFxuLnB1cmUtdS0yLTI0LFxuLnB1cmUtdS0zLTQsXG4ucHVyZS11LTMtNSxcbi5wdXJlLXUtMy04LFxuLnB1cmUtdS0zLTI0LFxuLnB1cmUtdS00LTUsXG4ucHVyZS11LTQtMjQsXG4ucHVyZS11LTUtNSxcbi5wdXJlLXUtNS02LFxuLnB1cmUtdS01LTgsXG4ucHVyZS11LTUtMTIsXG4ucHVyZS11LTUtMjQsXG4ucHVyZS11LTYtMjQsXG4ucHVyZS11LTctOCxcbi5wdXJlLXUtNy0xMixcbi5wdXJlLXUtNy0yNCxcbi5wdXJlLXUtOC0yNCxcbi5wdXJlLXUtOS0yNCxcbi5wdXJlLXUtMTAtMjQsXG4ucHVyZS11LTExLTEyLFxuLnB1cmUtdS0xMS0yNCxcbi5wdXJlLXUtMTItMjQsXG4ucHVyZS11LTEzLTI0LFxuLnB1cmUtdS0xNC0yNCxcbi5wdXJlLXUtMTUtMjQsXG4ucHVyZS11LTE2LTI0LFxuLnB1cmUtdS0xNy0yNCxcbi5wdXJlLXUtMTgtMjQsXG4ucHVyZS11LTE5LTI0LFxuLnB1cmUtdS0yMC0yNCxcbi5wdXJlLXUtMjEtMjQsXG4ucHVyZS11LTIyLTI0LFxuLnB1cmUtdS0yMy0yNCxcbi5wdXJlLXUtMjQtMjQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbn1cblxuLmMtYXBwb2ludG1lbnQtb3RwX19zZXBhcmF0b3IsXG4uYy1jb25zdWx0LFxuLnUtZmlsbC0td2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYy1hcHBvaW50bWVudC1mb3JtX19pbnB1dCxcbi5jLWFwcG9pbnRtZW50LWZvcm1fX3BheW1lbnRfX2NhcmQsXG4uYy1hcHBvaW50bWVudC1vdHBfX2lucHV0LFxuLmMtc2VsZWN0aW9uLWluZm9fX2FsZXJ0LFxuLnUtcm91bmQtY29ybmVyIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udS1iLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjE0KTtcbn1cblxuLmMtYXBwb2ludG1lbnQtaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jLXNlbGVjdGlvbi1pbmZvX19jYXJkLFxuLmMtc2VsZWN0aW9uLXNsb3QtYmxvY2ssXG4udS1jdXNoaW9uIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3RpdGxlLFxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZF9fZGlzY291bnQtYmFubmVyLFxuLmMtYXBwb2ludG1lbnQtZm9ybSBhLFxuLmMtYXBwb2ludG1lbnQtb3RwX19zZXBhcmF0b3IsXG4uYy1idG4sXG4uYy1idG4tLWRhcmssXG4uYy1idG4tLWRhcmstYXV0byxcbi5jLWJ0bi0tZGFyay1maXRYLFxuLmMtYnRuLS1kYXJrLWZpdFksXG4uYy1idG4tLWRhcmsuZGlzYWJsZWQsXG4uYy1idG4tLWRpc2FibGVkLFxuLmMtYnRuLS1kaXNhYmxlZC1hdXRvLFxuLmMtYnRuLS1ncmVlbixcbi5jLWJ0bi0tZ3JlZW4uZGlzYWJsZWQsXG4uYy1idG4tLWxpZ2h0LFxuLmMtYnRuLS1saWdodC1hdXRvLFxuLmMtY29uc3VsdF9fdGl0bGUsXG4uYy1wYXRpZW50LWxpc3RfX3RpdGxlLFxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWF1dG8sXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstZml0WCxcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRZLFxuLnUtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jLXNlbGVjdGlvbi1pbmZvX19jYXJkLFxuLmMtc2VsZWN0aW9uLXNsb3QtYmxvY2ssXG4udS1jdXNoaW9uIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuKixcbjphZnRlcixcbjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG51c2VyIGFnZW50IHN0eWxlc2hlZXQgZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wdXJlLXUsXG4ucHVyZS11LTEsXG4ucHVyZS11LTEtMSxcbi5wdXJlLXUtMS0yLFxuLnB1cmUtdS0xLTMsXG4ucHVyZS11LTEtNCxcbi5wdXJlLXUtMS01LFxuLnB1cmUtdS0xLTYsXG4ucHVyZS11LTEtOCxcbi5wdXJlLXUtMS0xMixcbi5wdXJlLXUtMS0yNCxcbi5wdXJlLXUtMi0zLFxuLnB1cmUtdS0yLTUsXG4ucHVyZS11LTItMjQsXG4ucHVyZS11LTMtNCxcbi5wdXJlLXUtMy01LFxuLnB1cmUtdS0zLTgsXG4ucHVyZS11LTMtMjQsXG4ucHVyZS11LTQtNSxcbi5wdXJlLXUtNC0yNCxcbi5wdXJlLXUtNS01LFxuLnB1cmUtdS01LTYsXG4ucHVyZS11LTUtOCxcbi5wdXJlLXUtNS0xMixcbi5wdXJlLXUtNS0yNCxcbi5wdXJlLXUtNi0yNCxcbi5wdXJlLXUtNy04LFxuLnB1cmUtdS03LTEyLFxuLnB1cmUtdS03LTI0LFxuLnB1cmUtdS04LTI0LFxuLnB1cmUtdS05LTI0LFxuLnB1cmUtdS0xMC0yNCxcbi5wdXJlLXUtMTEtMTIsXG4ucHVyZS11LTExLTI0LFxuLnB1cmUtdS0xMi0yNCxcbi5wdXJlLXUtMTMtMjQsXG4ucHVyZS11LTE0LTI0LFxuLnB1cmUtdS0xNS0yNCxcbi5wdXJlLXUtMTYtMjQsXG4ucHVyZS11LTE3LTI0LFxuLnB1cmUtdS0xOC0yNCxcbi5wdXJlLXUtMTktMjQsXG4ucHVyZS11LTIwLTI0LFxuLnB1cmUtdS0yMS0yNCxcbi5wdXJlLXUtMjItMjQsXG4ucHVyZS11LTIzLTI0LFxuLnB1cmUtdS0yNC0yNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xufVxuXG4udS1zcGFjZXItLXNtYWxsLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLnUtbGFyZ2UtZm9udCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnB1cmUtZyB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zMWVtO1xuICAqbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgKndvcmQtc3BhY2luZzogLTAuNDNlbTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplc3BlZWQ7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucHVyZS11LTEtMixcbi5wdXJlLXUtMTItMjQge1xuICB3aWR0aDogNTAlO1xuICAqd2lkdGg6IDQ5Ljk2OSU7XG59XG5cbiosXG46YWZ0ZXIsXG46YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxudXNlciBhZ2VudCBzdHlsZXNoZWV0IGkge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiosXG46YWZ0ZXIsXG46YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLnUtdC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHVyZS11LTEtMixcbi5wdXJlLXUtMTItMjQge1xuICB3aWR0aDogNTAlO1xuICAqd2lkdGg6IDQ5Ljk2OSU7XG59XG5cbiosXG46YWZ0ZXIsXG46YmVmb3JlIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxudXNlciBhZ2VudCBzdHlsZXNoZWV0IGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYy1hcHBvaW50bWVudC1pbmZvX19yb3cgKyAuYy1hcHBvaW50bWVudC1pbmZvX19yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlNTtcbn1cblxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcbi51LWN1c2hpb24ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fd2hhdHNhcHAtbG9nbyxcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcC10ZXh0LFxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXG4udS1kLWlubGluZWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYy1kb2N0b3ItaW5mby1jYXJkX19yaWdodCxcbi5jLXByYWN0aWNlLWluZm8tY2FyZF9fcmlnaHQge1xuICB3aWR0aDogMzEwcHg7XG59XG5cbi51LXZhbGlnbi10b3Age1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS10b3A7XG59XG5cbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcC1sb2dvLFxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3doYXRzYXBwLXRleHQsXG4uYy1zZWxlY3Rpb24taW5mb19fY2FyZCxcbi51LWQtaW5saW5lYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi51LWN1c2hpb24tLWhvcml6b250YWwge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5jLWFwcG9pbnRtZW50LWZvcm1fX3BheW1lbnRfX2NhcmRfX3JhZGlvLFxuLm8tc2VsZWN0X19hcnJvdyxcbi5vLXRleHRib3hfX2xvY2ssXG4udS1ncmV5XzMtdGV4dCB7XG4gIGNvbG9yOiAjNzg3ODg3O1xufVxuXG4uYy1hcHBvaW50bWVudC1pbmZvX19yb3cgKyAuYy1hcHBvaW50bWVudC1pbmZvX19yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlNTtcbn1cblxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcbi51LWN1c2hpb24ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fd2hhdHNhcHAtbG9nbyxcbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X193aGF0c2FwcC10ZXh0LFxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXG4udS1kLWlubGluZWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYy1kb2N0b3ItaW5mby1jYXJkIGltZyxcbi5jLXByYWN0aWNlLWluZm8tY2FyZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTEwcHg7XG59XG5cbi5jLWRvY3Rvci1pbmZvLWNhcmRfX3JpZ2h0LFxuLmMtcHJhY3RpY2UtaW5mby1jYXJkX19yaWdodCB7XG4gIHdpZHRoOiAzMTBweDtcbn1cblxuLnB1cmUtdS0xLTIsXG4ucHVyZS11LTEyLTI0IHtcbiAgd2lkdGg6IDUwJTtcbiAgKndpZHRoOiA0OS45NjklO1xufVxuXG4ucHVyZS11LFxuLnB1cmUtdS0xLFxuLnB1cmUtdS0xLTEsXG4ucHVyZS11LTEtMixcbi5wdXJlLXUtMS0zLFxuLnB1cmUtdS0xLTQsXG4ucHVyZS11LTEtNSxcbi5wdXJlLXUtMS02LFxuLnB1cmUtdS0xLTgsXG4ucHVyZS11LTEtMTIsXG4ucHVyZS11LTEtMjQsXG4ucHVyZS11LTItMyxcbi5wdXJlLXUtMi01LFxuLnB1cmUtdS0yLTI0LFxuLnB1cmUtdS0zLTQsXG4ucHVyZS11LTMtNSxcbi5wdXJlLXUtMy04LFxuLnB1cmUtdS0zLTI0LFxuLnB1cmUtdS00LTUsXG4ucHVyZS11LTQtMjQsXG4ucHVyZS11LTUtNSxcbi5wdXJlLXUtNS02LFxuLnB1cmUtdS01LTgsXG4ucHVyZS11LTUtMTIsXG4ucHVyZS11LTUtMjQsXG4ucHVyZS11LTYtMjQsXG4ucHVyZS11LTctOCxcbi5wdXJlLXUtNy0xMixcbi5wdXJlLXUtNy0yNCxcbi5wdXJlLXUtOC0yNCxcbi5wdXJlLXUtOS0yNCxcbi5wdXJlLXUtMTAtMjQsXG4ucHVyZS11LTExLTEyLFxuLnB1cmUtdS0xMS0yNCxcbi5wdXJlLXUtMTItMjQsXG4ucHVyZS11LTEzLTI0LFxuLnB1cmUtdS0xNC0yNCxcbi5wdXJlLXUtMTUtMjQsXG4ucHVyZS11LTE2LTI0LFxuLnB1cmUtdS0xNy0yNCxcbi5wdXJlLXUtMTgtMjQsXG4ucHVyZS11LTE5LTI0LFxuLnB1cmUtdS0yMC0yNCxcbi5wdXJlLXUtMjEtMjQsXG4ucHVyZS11LTIyLTI0LFxuLnB1cmUtdS0yMy0yNCxcbi5wdXJlLXUtMjQtMjQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbn1cblxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3RpdGxlLFxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudCxcbi51LXNwYWNlci0tbGFyZ2UtYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3RpdGxlLFxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZF9fZGlzY291bnQtYmFubmVyLFxuLmMtYXBwb2ludG1lbnQtZm9ybSBhLFxuLmMtYXBwb2ludG1lbnQtb3RwX19zZXBhcmF0b3IsXG4uYy1idG4sXG4uYy1idG4tLWRhcmssXG4uYy1idG4tLWRhcmstYXV0byxcbi5jLWJ0bi0tZGFyay1maXRYLFxuLmMtYnRuLS1kYXJrLWZpdFksXG4uYy1idG4tLWRhcmsuZGlzYWJsZWQsXG4uYy1idG4tLWRpc2FibGVkLFxuLmMtYnRuLS1kaXNhYmxlZC1hdXRvLFxuLmMtYnRuLS1ncmVlbixcbi5jLWJ0bi0tZ3JlZW4uZGlzYWJsZWQsXG4uYy1idG4tLWxpZ2h0LFxuLmMtYnRuLS1saWdodC1hdXRvLFxuLmMtY29uc3VsdF9fdGl0bGUsXG4uYy1wYXRpZW50LWxpc3RfX3RpdGxlLFxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWF1dG8sXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstZml0WCxcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRZLFxuLnUtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jLWFwcG9pbnRtZW50LWZvcm0tbmV3X190aXRsZSxcbi5jLWNvbnN1bHRfX3RpdGxlLFxuLnUtanVtYm8tZm9udCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmMtYXBwb2ludG1lbnQtZm9ybS1uZXdfX3doYXRzYXBwLFxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZCxcbi5jLXBhdGllbnQtbGlzdF9fdGl0bGUsXG4udS1zcGFjZXItLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jLXBhdGllbnQtbGlzdF9fY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYy1zZWxlY3Rpb24taW5mb19fYWxlcnQsXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcbi51LXNwYWNlci0tdmVydGljYWwge1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmMtYXBwb2ludG1lbnQtZm9ybV9fcGF5bWVudF9fY2FyZCxcbi5jLXBhdGllbnQtbGlzdF9fY29udGFpbmVyLFxuLmMtc2VsZWN0aW9uLWluZm9fX2NhcmQsXG4uYy1zZWxlY3Rpb24tc2xvdC1ibG9jayxcbi51LXdoaXRlLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYy1wYXRpZW50LWxpc3RfX2l0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I0YjRiZTtcbn1cblxuLmMtcGF0aWVudC1saXN0X19pdGVtLFxuLmMtc2VsZWN0aW9uLWluZm9fX2FsZXJ0LFxuLnUtY3VzaGlvbi0tbWVkaXVtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm8tcmFkaW9fX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uby1yYWRpb19fbGFiZWwgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxub3B0aW9uLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogQ2FtcGhvciwgdmVyZGFuYSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9cmFkaW8gaV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogcmFkaW87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogM3B4IDNweCAwcHggNXB4O1xuICBwYWRkaW5nOiBpbml0aWFsO1xuICBib3JkZXI6IGluaXRpYWw7XG59XG5cbnVzZXIgYWdlbnQgc3R5bGVzaGVldCBpbnB1dCB7XG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmstY29sb3IoYmxhY2ssIHdoaXRlKTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LWluZGVudDogMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrLWNvbG9yKHdoaXRlLCBibGFjayk7XG4gIC13ZWJraXQtcnRsLW9yZGVyaW5nOiBsb2dpY2FsO1xuICBjdXJzb3I6IHRleHQ7XG4gIG1hcmdpbjogMGVtO1xuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG59XG5cbi5vLXJhZGlvX19sYWJlbCBpbnB1dDpjaGVja2VkIH4gLm8tcmFkaW9fX2NoZWNrbWFyayB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNGJlZjA7XG59XG5cbi5vLXJhZGlvX19jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm8tcmFkaW9fX2xhYmVsIGlucHV0OmNoZWNrZWQgfiAuby1yYWRpb19fY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vLXJhZGlvX19jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMTRiZWYwO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4udS1zcGFjZXItLW1lZGl1bS1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udS1zcGFjZXItLW1lZGl1bS1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fdGl0bGUsXG4uYy1hcHBvaW50bWVudC1mb3JtX19wYXltZW50X19jYXJkX19kaXNjb3VudC1iYW5uZXIsXG4uYy1hcHBvaW50bWVudC1mb3JtIGEsXG4uYy1hcHBvaW50bWVudC1vdHBfX3NlcGFyYXRvcixcbi5jLWJ0bixcbi5jLWJ0bi0tZGFyayxcbi5jLWJ0bi0tZGFyay1hdXRvLFxuLmMtYnRuLS1kYXJrLWZpdFgsXG4uYy1idG4tLWRhcmstZml0WSxcbi5jLWJ0bi0tZGFyay5kaXNhYmxlZCxcbi5jLWJ0bi0tZGlzYWJsZWQsXG4uYy1idG4tLWRpc2FibGVkLWF1dG8sXG4uYy1idG4tLWdyZWVuLFxuLmMtYnRuLS1ncmVlbi5kaXNhYmxlZCxcbi5jLWJ0bi0tbGlnaHQsXG4uYy1idG4tLWxpZ2h0LWF1dG8sXG4uYy1jb25zdWx0X190aXRsZSxcbi5jLXBhdGllbnQtbGlzdF9fdGl0bGUsXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstYXV0byxcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRYLFxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFksXG4udS1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnUtc3BhY2VyLS1tZWRpdW0tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnUtc3BhY2VyLS1tZWRpdW0tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLnUtc3BhY2VyLS1tZWRpdW0tdmVydGljYWwge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnUtc3BhY2VyLS1tZWRpdW0tdmVydGljYWwge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLm8tY2hlY2tib3hfX2dyb3VwbGFiZWwsXG4uby1kYXRlX19sYWJlbCxcbi5vLWZvcm1fX2xhYmVsLFxuLm8tcmFkaW9fX2dyb3VwbGFiZWwsXG4uby1zZWxlY3RfX2xhYmVsLFxuLm8tdGV4dGFyZWFfX2xhYmVsLFxuLm8tdGV4dGJveF9fbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5vLXRleHRib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I0YjRiZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzQxNDE0NjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fd2hhdHNhcHAsXG4uYy1hcHBvaW50bWVudC1mb3JtX19wYXltZW50X19jYXJkLFxuLmMtcGF0aWVudC1saXN0X190aXRsZSxcbi51LXNwYWNlci0tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm8tY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3ggaV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogY2hlY2tib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogM3B4IDNweCAzcHggNHB4O1xuICBwYWRkaW5nOiBpbml0aWFsO1xuICBib3JkZXI6IGluaXRpYWw7XG59XG5cbnVzZXIgYWdlbnQgc3R5bGVzaGVldCBpbnB1dCB7XG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBjb2xvcjogLWludGVybmFsLWxpZ2h0LWRhcmstY29sb3IoYmxhY2ssIHdoaXRlKTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB0ZXh0LWluZGVudDogMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IC1pbnRlcm5hbC1saWdodC1kYXJrLWNvbG9yKHdoaXRlLCBibGFjayk7XG4gIC13ZWJraXQtcnRsLW9yZGVyaW5nOiBsb2dpY2FsO1xuICBjdXJzb3I6IHRleHQ7XG4gIG1hcmdpbjogMGVtO1xuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xuICBwYWRkaW5nOiAxcHggMHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxub3B0aW9uLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogQ2FtcGhvciwgdmVyZGFuYSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5vLWNoZWNrYm94X19jaGVja21hcmstLWNoZWNrZWQge1xuICBjb2xvcjogIzE0YmVmMDtcbn1cblxuLm8tY2hlY2tib3hfX2NoZWNrbWFyayB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjYjRiNGJlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wdXJlLXUsXG4ucHVyZS11LTEsXG4ucHVyZS11LTEtMSxcbi5wdXJlLXUtMS0yLFxuLnB1cmUtdS0xLTMsXG4ucHVyZS11LTEtNCxcbi5wdXJlLXUtMS01LFxuLnB1cmUtdS0xLTYsXG4ucHVyZS11LTEtOCxcbi5wdXJlLXUtMS0xMixcbi5wdXJlLXUtMS0yNCxcbi5wdXJlLXUtMi0zLFxuLnB1cmUtdS0yLTUsXG4ucHVyZS11LTItMjQsXG4ucHVyZS11LTMtNCxcbi5wdXJlLXUtMy01LFxuLnB1cmUtdS0zLTgsXG4ucHVyZS11LTMtMjQsXG4ucHVyZS11LTQtNSxcbi5wdXJlLXUtNC0yNCxcbi5wdXJlLXUtNS01LFxuLnB1cmUtdS01LTYsXG4ucHVyZS11LTUtOCxcbi5wdXJlLXUtNS0xMixcbi5wdXJlLXUtNS0yNCxcbi5wdXJlLXUtNi0yNCxcbi5wdXJlLXUtNy04LFxuLnB1cmUtdS03LTEyLFxuLnB1cmUtdS03LTI0LFxuLnB1cmUtdS04LTI0LFxuLnB1cmUtdS05LTI0LFxuLnB1cmUtdS0xMC0yNCxcbi5wdXJlLXUtMTEtMTIsXG4ucHVyZS11LTExLTI0LFxuLnB1cmUtdS0xMi0yNCxcbi5wdXJlLXUtMTMtMjQsXG4ucHVyZS11LTE0LTI0LFxuLnB1cmUtdS0xNS0yNCxcbi5wdXJlLXUtMTYtMjQsXG4ucHVyZS11LTE3LTI0LFxuLnB1cmUtdS0xOC0yNCxcbi5wdXJlLXUtMTktMjQsXG4ucHVyZS11LTIwLTI0LFxuLnB1cmUtdS0yMS0yNCxcbi5wdXJlLXUtMjItMjQsXG4ucHVyZS11LTIzLTI0LFxuLnB1cmUtdS0yNC0yNCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xufVxuXG4uYy1hcHBvaW50bWVudC1mb3JtLW5ld19fdGl0bGUsXG4uYy1hcHBvaW50bWVudC1mb3JtX19wYXltZW50X19jYXJkX19kaXNjb3VudC1iYW5uZXIsXG4uYy1hcHBvaW50bWVudC1mb3JtIGEsXG4uYy1hcHBvaW50bWVudC1vdHBfX3NlcGFyYXRvcixcbi5jLWJ0bixcbi5jLWJ0bi0tZGFyayxcbi5jLWJ0bi0tZGFyay1hdXRvLFxuLmMtYnRuLS1kYXJrLWZpdFgsXG4uYy1idG4tLWRhcmstZml0WSxcbi5jLWJ0bi0tZGFyay5kaXNhYmxlZCxcbi5jLWJ0bi0tZGlzYWJsZWQsXG4uYy1idG4tLWRpc2FibGVkLWF1dG8sXG4uYy1idG4tLWdyZWVuLFxuLmMtYnRuLS1ncmVlbi5kaXNhYmxlZCxcbi5jLWJ0bi0tbGlnaHQsXG4uYy1idG4tLWxpZ2h0LWF1dG8sXG4uYy1jb25zdWx0X190aXRsZSxcbi5jLXBhdGllbnQtbGlzdF9fdGl0bGUsXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstYXV0byxcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRYLFxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFksXG4udS1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmMtYnRuLS1kYXJrLFxuLmMtYnRuLS1kYXJrLWF1dG8sXG4uYy1idG4tLWRhcmstZml0WCxcbi5jLWJ0bi0tZGFyay1maXRZIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDRweCAwIDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGJlZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNGJlZjA7XG59XG5cbi5jLWJ0bixcbi5jLWJ0bi0tZGFyayxcbi5jLWJ0bi0tZGFyay1hdXRvLFxuLmMtYnRuLS1kYXJrLWZpdFgsXG4uYy1idG4tLWRhcmstZml0WSxcbi5jLWJ0bi0tZGFyay5kaXNhYmxlZCxcbi5jLWJ0bi0tZGlzYWJsZWQsXG4uYy1idG4tLWRpc2FibGVkLWF1dG8sXG4uYy1idG4tLWdyZWVuLFxuLmMtYnRuLS1ncmVlbi5kaXNhYmxlZCxcbi5jLWJ0bi0tbGlnaHQsXG4uYy1idG4tLWxpZ2h0LWF1dG8sXG4uZGlzYWJsZWQuYy1idG4tLWRhcmstYXV0byxcbi5kaXNhYmxlZC5jLWJ0bi0tZGFyay1maXRYLFxuLmRpc2FibGVkLmMtYnRuLS1kYXJrLWZpdFkge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRpb24sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCB2ZXJkYW5hICFpbXBvcnRhbnQ7XG59XG5cbi51LWxpZ2h0LXJlZC10ZXh0IHtcbiAgY29sb3I6ICNmZjJjMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-details',
          templateUrl: './patient-details.component.html',
          styleUrls: ['./patient-details.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-bookappoiment-bookappoiment-module-es5.js.map
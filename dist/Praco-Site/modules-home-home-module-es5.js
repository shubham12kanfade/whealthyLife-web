function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
  /***/
  "./src/app/modules/home/home-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/home/home-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppModulesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
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
      component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
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
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var country_state_city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! country-state-city */
    "./node_modules/country-state-city/dist/index.js");
    /* harmony import */


    var country_state_city__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_speciality_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/speciality.service */
    "./src/app/services/speciality.service.ts");
    /* harmony import */


    var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _services_customer_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/customer-review.service */
    "./src/app/services/customer-review.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    function HomeComponent_div_88_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Powered by WhealthyLife");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Online reports in 24 hrs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "NABL, CAP accredited");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "% off");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "999 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "View More");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r90.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r90.subHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r90.discription);
      }
    }

    function HomeComponent_div_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_88_div_2_Template, 33, 3, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_88_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r91.showmoreFun();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Packages");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r81.labs);
      }
    }

    function HomeComponent_div_89_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Powered by WhealthyLife");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Online reports in 24 hrs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "NABL, CAP accredited");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "% off");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "999 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "View More");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r94.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r94.subHeading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r94.discription);
      }
    }

    function HomeComponent_div_89_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_89_div_2_Template, 33, 3, "div", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_89_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r95.showmoreFun();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Packages");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r82.labs);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function HomeComponent_124_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var Specialitss_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, "/doctors/" + Specialitss_r97._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", Specialitss_r97.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Specialitss_r97.fullName, " ");
      }
    }

    function HomeComponent_124_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_124_ng_template_0_Template, 5, 5, "ng-template", 122);
      }
    }

    function HomeComponent_div_154_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r101 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r101 == null ? null : item_r101.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r101 == null ? null : item_r101.descriptiitem == null ? null : item_r101.descriptiitem.userId == null ? null : item_r101.descriptiitem.userId.firstNameon, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r101.buttonText);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r101.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_154_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_154_div_1_Template, 12, 4, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_154_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r103.showmoreFun();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Packages");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r85.offerData, 0, 4));
      }
    }

    function HomeComponent_div_155_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r106 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r106 == null ? null : item_r106.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r106 == null ? null : item_r106.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r106 == null ? null : item_r106.buttonText);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r106 == null ? null : item_r106.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_155_Template(rf, ctx) {
      if (rf & 1) {
        var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_155_div_1_Template, 12, 4, "div", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_155_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r107.showmoreFun();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Packages");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r86.offerData, 4, 8));
      }
    }

    function HomeComponent_section_156_div_9_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r112.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_section_156_div_9_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_section_156_div_9_2_ng_template_0_Template, 2, 1, "ng-template", 142);
      }
    }

    function HomeComponent_section_156_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "owl-carousel-o", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_section_156_div_9_2_Template, 1, 0, undefined, 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r109.customOptions1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r109.Labdata);
      }
    }

    function HomeComponent_section_156_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r116 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r116.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_section_156_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Featured Labs");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_section_156_div_9_Template, 3, 2, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_section_156_div_11_Template, 4, 1, "div", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r87.Labdata.length > 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r87.Labdata);
      }
    }

    function HomeComponent_section_157_ng_template_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FirstName LastName");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Designation");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r121 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r121.review, " ");
      }
    }

    function HomeComponent_section_157_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_section_157_ng_template_7_div_2_Template, 10, 1, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r119.reviewdata);
      }
    }

    function HomeComponent_section_157_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Our Happy Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "owl-carousel-o", 61, 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_section_157_ng_template_7_Template, 3, 1, "ng-template", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_section_157_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124);

          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return _r118.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_section_157_Template_div_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124);

          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          return _r118.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r88.customOptions5);
      }
    }

    var _c1 = function _c1() {
      return ["/bookappointment"];
    };

    var _c2 = function _c2() {
      return ["/booktests"];
    };

    var _c3 = function _c3() {
      return ["/"];
    };

    var _c4 = function _c4() {
      return ["/order"];
    };

    var _c5 = function _c5() {
      return ["/SamplePickup"];
    };

    var _c6 = function _c6() {
      return ["/ViewReport"];
    };

    var _c7 = function _c7() {
      return ["/DoctorConsulation"];
    };

    var _c8 = function _c8() {
      return ["/PricesGuaranted"];
    };

    var _c9 = function _c9() {
      return ["bookappointment"];
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(SpecialityService, MainService, CRService) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.SpecialityService = SpecialityService;
        this.MainService = MainService;
        this.CRService = CRService;
        this.Specialit = [];
        this.labs = [];
        this.india = 101;
        this.showmore = true;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.test = [];
        this.options = ["ASD", "sddcbsda", "sjkbcjbc"];
        this.searchData = []; // review: any = []

        this.reviewdata = [];
        this.Labdata = [];
        this.offerData = [];
        this.showmore1 = true; // showmoreFun1(){
        //   this.showmore1 =! this.showmore1
        // }

        this.customOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          autoplay: false,
          navSpeed: 300,
          navText: ["", ""],
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
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: false,
          autoplay: true,
          // autoplaySpeed:100,
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
          nav: true
        }; // customOptions2: OwlOptions = {
        //   loop: true,
        //   mouseDrag: true,
        //   touchDrag: false,
        //   pullDrag: false,
        //   dots: true,
        //   autoplay: true,
        //   autoplaySpeed:100,
        //   margin: 10,
        //   navSpeed: 100,
        //   navText: ['', ''],
        //   responsive: {
        //     0: {
        //       items: 1
        //     },
        //     400: {
        //       items: 3
        //     },
        //     740: {
        //       items: 4
        //     },
        //     940: {
        //       items: 6
        //     }
        //   },
        //   nav: true
        // };

        this.customOptions5 = {
          loop: true,
          mouseDrag: true,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          autoplay: true,
          margin: 10,
          navSpeed: 700,
          navText: ['', ''],
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
            }
          },
          nav: false
        };
        SpecialityService.getSpecialization().then(function (resData) {
          _this.Specialit = resData.data;
          console.log("HomeComponent -> this.Specialit", _this.Specialit);
        })["catch"](function (error) {
          console.log("HomeComponent -> constructor -> error", error);
        });
        MainService.getLabs().then(function (resData) {
          _this.labs = resData.data;
        })["catch"](function (eror) {
          console.log("HomeComponent -> eror", eror);
        });
        this.countryList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getAllCountries();
        this.stateList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getStatesOfCountry("101");
        SpecialityService.getTestMaster().then(function (testdata) {
          testdata.data.map(function (ele) {
            _this.searchData = ele.fullName;
          });
        })["catch"](function (err) {
          console.log("HomeComponent -> err", err);
        });
        this.CRService.getCustomer().then(function (resData) {
          for (var i = 0; i < resData.data.length; i++) {
            _this.reviewdata[i] = resData.data[i];
          }
        })["catch"](function (error) {
          console.log("HomeComponent -> error", error);
        });
        this.CRService.getFeaturedLab().then(function (LabData) {
          for (var i = 0; i < LabData.data.length; i++) {
            _this.Labdata[i] = LabData.data[i];
          }
        })["catch"](function (error) {
          console.log("HomeComponent -> error", error);
        });
        this.CRService.getOffers().then(function (OfferData) {
          for (var i = 0; i < OfferData.data.length; i++) {
            _this.offerData[i] = OfferData.data[i];
          }
        })["catch"](function (error) {
          console.log("HomeComponent -> error", error);
        });
      }

      _createClass(HomeComponent, [{
        key: "getStateList",
        value: function getStateList(event) {}
      }, {
        key: "getCityList",
        value: function getCityList(event) {
          this.cityList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getCitiesOfState(event.target.value);
        }
      }, {
        key: "showmoreFun",
        value: function showmoreFun() {
          this.showmore = !this.showmore;
        }
      }, {
        key: "getPassedData",
        value: function getPassedData(data) {
          this.activeSlides = data;
          console.log(this.activeSlides);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.LabAll();
        }
      }, {
        key: "LabAll",
        value: function LabAll() {
          this.MainService.getAllLab().then(function (LabRes) {
            console.log(": -----------------------------------------");
            console.log("HomeComponent -> LabAll -> LabRes", LabRes);
            console.log(": -----------------------------------------");
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_speciality_service__WEBPACK_IMPORTED_MODULE_3__["SpecialityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_review_service__WEBPACK_IMPORTED_MODULE_5__["CustomerReviewService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 221,
      vars: 28,
      consts: [[1, "hero_home", "version_1"], [1, "col-12"], [1, "row", "flecs1"], [1, "head1"], [1, "row", "mar-30"], [1, "flec1"], [1, "wid-80"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Type test name and select from option", 1, "form-control", "adj-mar"], [1, "wid-25"], [1, "btn", "btn-danger", "btnn"], [1, "row", 2, "margin-top", "50px !important"], [1, "col-lg-6", "offset-lg-3", "col-12", 2, "display", "flex", "justify-content", "space-evenly", "flex-wrap", "wrap", "width", "100%"], [1, "row", "hov"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "col-6", "hov2", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/Appointment.svg ", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], [1, "sub-title", 2, "cursor", "pointer"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "col-6", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/LabTest.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], ["src", "../../../assets/img/Swati/OnlineReport.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "offset-lg-2", "col-6", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/Medicine.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/TrackOrder.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], [1, "bottom-sec"], [1, "container"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-xs-12"], ["routerLinkActive", "router-link-active", 1, "opt", 3, "routerLink"], [1, "division", 2, "display", "flex", "align-items", "center"], ["src", "../../../assets/img/Swati/SamplePickup.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], [1, "mb-0"], ["src", "../../../assets/img/Swati/ReportOnline.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], ["src", "../../../assets/img/Swati/DoctorConsulation.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], ["src", "../../../assets/img/Swati/BestPrices.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], [1, "first-sec"], [1, "container", "margin_120_95", "pt-pb-80"], [1, "col-md-6"], ["data-aos", "fade-right", 1, "main_title"], [1, "h2txt", "mainSectionTitle"], [2, "color", "cornflowerblue"], [2, "font-family", "Verdana, Geneva, Tahoma, sans-serif !important"], ["routerLinkActive", "router-link-active", 1, "btn-main", "mt-3", 3, "routerLink"], ["src", "../../../assets/img/Swati/BookAppointment.jpg", "alt", "WhealthyLife", "data-aos", "fade-left", 1, "img-fluid"], [1, "home-package"], [1, "container-fluid", "margin_60_35", "pt-pb-80"], ["data-aos", "fade-down", 1, "main_title", "mb-5", "mainSectionTitle"], [2, "text-align", "center !important"], ["class", "mx-auto packs", 4, "ngIf"], [1, "third-sec"], [1, "container", "margin_60_35", "pt-pb-80"], ["data-aos", "fade-right", 1, "pic-middle"], ["src", "../../../assets/img/Swati/MedicalRecord.jpg", "alt", "WhealthyLife", 1, "img-fluid"], ["data-aos", "fade-left", 1, "h2txt", "info", "mainSectionTitle"], [1, "h2"], ["href", "#", 1, "btn-main"], [1, "topCategoriesSect"], [1, "container", "mainSectionTitle", "pt-pb-80"], [1, "row", 2, "display", "flex", "justify-content", "space-between", "width", "100%", "position", "absolute", "top", "45%"], [2, "z-index", "9", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left", "fa-3x"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right", "fa-3x"], [3, "options"], ["review1", ""], [4, "ngFor", "ngForOf"], [1, "clients"], ["data-aos", "fade-right", 1, "info", "mainSectionTitle"], ["src", "../../../assets/img/Swati/HealthCareProvider.png", "alt", "WhealthyLife", "data-aos", "fade-left", 1, "img-fluid"], [1, "v-packages", "deal-offer"], [1, "container", "margin_60_35", "mainSectionTitle", "pt-pb-80"], [1, "title-left"], ["class", "row", 4, "ngIf"], ["class", "lab-slide", 4, "ngIf"], [4, "ngIf"], [1, "app-download-sec"], [1, "col-md-6", "col-12", "d-none", "d-md-block"], ["data-aos", "fade-right", 1, "pic-middle", "aos-init", "aos-animate"], ["src", "../assets/imag/app-screen1.png", "alt", "WhealthyLife", 1, "img-fluid", 2, "max-width", "60%"], [1, "col-md-6", "col-12"], ["data-aos", "fade-left", 1, "info", "aos-init", "aos-animate"], [1, "appDownload"], ["href", "#", 1, "app"], ["src", "../assets/img/1_EiZrcN_DIapbZaxutxbZRA.png", "alt", "app"], ["src", "./../../../assets/img/app-store.e30d53a6.png", "alt", "app", 2, "margin-top", "3px"], ["id", "myModal", 1, "modal"], [1, "modal-dialog", "modal-lg", "fixed"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row", "ss"], [1, "col-sm-4"], [1, "pharmacyimg"], ["src", "../assets/img/pharmacy.gif", 2, "height", "300px"], [1, "col-sm-8"], [1, "lb"], [1, "pharmacy"], [1, "btn", "btn-danger", "btn-lg", "bbt"], [1, "labsimg"], ["src", "../assets/img/labs.gif", 2, "height", "100px"], [1, "labs"], [1, "mx-auto", "packs"], [1, "form-row"], ["class", "col-md-3 col-sm-6 col-12", "data-aos", "fade-right", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", 1, "text-center", "mt-3", "mb-3"], [1, "btn-main", 3, "click"], ["data-aos", "fade-right", 1, "col-md-3", "col-sm-6", "col-12"], [1, "adj2", "p-single", "equal-height"], [1, "p-head"], [1, "p-body"], [1, "sec-content", 2, "height", "70px"], ["src", "../assets/img/micro.svg", "alt", "icon", 1, "icon-left"], [1, "sec-content-ul"], ["classs", "truncate-overflow"], [1, "truncate"], [1, "sec-content", "mini"], ["src", "../assets/img/stethoscope.svg", "alt", "icon", 1, "icon-left"], [1, "p-footer", 2, "display", "flex", "justify-content", "space-between", "height", "70px", "align-items", "center"], [1, "tag"], [1, "price"], [1, "fa", "fa-inr"], ["href", "#", 1, "btn-border"], ["carouselSlide", ""], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "card", 2, "height", "auto", "width", "100%"], ["onerror", "this.src='../../../assets/imag/doctor.png'", 2, "height", "auto", "width", "250px", 3, "src"], [1, "specialityName"], ["class", "col-md-3", "data-aos", "fade-right", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", 1, "text-center", "mt-3", "mb-3", 2, "display", "flex", "justify-content", "center", "width", "100%"], ["data-aos", "fade-right", 1, "col-md-3"], [1, "checkup-visual-containers"], ["href", "#"], [1, "text-info"], ["alt", "checkup", "onerror", "this.src='../../../assets/img/Empty Cart.png'", 3, "src"], [1, "lab-slide"], [1, "main_title"], [1, "col-md-12"], [2, "text-align", "center !important", "margin-bottom", "0px !important"], [1, "swiper-container", "mb-3"], [1, "swiper-wrapper"], ["class", "col-3", "style", "margin: 10px", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center"], ["carouselSlide", "", "style", "margin: 10px; border: 1px solid"], [1, "card"], ["alt", "logo-client", "onerror", "this.src='../../../assets/imag/Doctor-And-Patient.png'", 2, "height", "auto", 3, "src"], [1, "col-3", 2, "margin", "10px"], ["alt", "logo-client", "onerror", "this.src='../../../assets/imag/Doctor-And-Patient.png'", 2, "height", "250px", "width", "250px", "box-shadow", "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", 3, "src"], ["review", ""], [1, "row", "prev-next"], [1, "lhs", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-left"], ["fill-rule", "evenodd", "d", "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], [1, "rhs", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-right"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], [1, "pr-2", "pl-2"], [1, "carousel-inner", "testimonialSlider"], ["class", "item carousel-item active", 4, "ngFor", "ngForOf"], [1, "item", "carousel-item", "active"], [1, "testimonial"], [1, "overview", "mt-5"], ["src", "../../../assets/images/unknownUser.png"], [1, "userName"], [1, "userDesignation"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Diagnostic Tests at your Doorstep!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Book Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lab Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Online Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Order Medicine");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Track Your Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Free Home Sample Pickup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "View Reports Online");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Free Doctor Consultation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Best Prices Guaranteed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "section", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "strong", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Book an appointment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " with our doctors for free ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h3", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Enjoy peace of mind while giving sample with heighly skilled & friendly technicians at home or office ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Book an Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "section", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Affordable full body ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "health checkups");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " at home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, HomeComponent_div_88_Template, 6, 1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, HomeComponent_div_89_Template, 6, 1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "section", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h2", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " All your medical records");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "In one secure app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "256-bit end to end encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Records are accessible only by you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Access your records across 8000+ centers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Find out more");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "section", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Top Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_118_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r126);

            var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123);

            return _r83.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_120_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r126);

            var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](123);

            return _r83.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "owl-carousel-o", 61, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, HomeComponent_124_Template, 1, 0, undefined, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "section", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " Leading Healthcare Providers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Trust us for Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Get seen by 25M+ patients on WhealthyLife");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "The most advanced software for clinics and hospitals");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "State of the art business analytics for enterprises");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "section", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Top deals and offers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Hand-picked deals for a healthier you");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](154, HomeComponent_div_154_Template, 6, 5, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](155, HomeComponent_div_155_Template, 6, 5, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, HomeComponent_section_156_Template, 15, 2, "section", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](157, HomeComponent_section_157_Template, 15, 1, "section", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "section", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Download the WhealthyLife app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Book appointments and lab tests");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Order medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Consult doctors online");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Set medicine reminders");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Store health records");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Read health tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "ul", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "h4", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Didn't find what you are looking for?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "button", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " \xD7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "img", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "p", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Get up to 18% off on allopathy medicines.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, " Also, earn up to \u20B9500 with Paytm, \u20B9300 Amazon Pay & more* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Order Medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "p", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Flat 20% off on lab tests");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, " and health checkups* ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Lab Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showmore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showmore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Specialit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showmore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showmore);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Labdata);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reviewdata);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselSlideDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]],
      styles: ["@charset \"UTF-8\";\n.truncate[_ngcontent-%COMP%] {\n  display: block;\n  display: -webkit-box;\n  max-width: 200px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pharmacyimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px !important;\n  width: 100% !important;\n}\n.btnn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  background-color: #d81730;\n}\n.flecs1[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  display: flex;\n  justify-content: center;\n}\n.flecs2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.marTop-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.opt[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n}\n.head1[_ngcontent-%COMP%] {\n  z-index: 999;\n  color: #ffffff;\n  font-size: 45px;\n  font-weight: 500;\n}\ninput#exampleInputEmail1[_ngcontent-%COMP%] {\n  height: 45px;\n  border-radius: 5px 0px 0px 5px;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.sub-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.mar-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mar-50[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.flec1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 0% 30%;\n  justify-content: center;\n}\n.wid-80[_ngcontent-%COMP%] {\n  width: 75% !important;\n  height: 30px;\n}\n.wid-25[_ngcontent-%COMP%] {\n  width: 25% !important;\n  height: 30px;\n}\n.changes12[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-bottom: 30px;\n  flex-grow: 1;\n}\n.hov2[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\n  flex-grow: 2;\n  display: flex;\n  flex-grow: 2;\n  transition: ease-in;\n  padding: -30px !important;\n}\n@media screen and (max-width: 767.98px) {\n  .wid-80[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 100px !important;\n  }\n\n  .adj-mar[_ngcontent-%COMP%] {\n    border-radius: 5px !important;\n    margin-bottom: 15px !important;\n    margin-top: -30px !important;\n  }\n\n  .wid-25[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: flex;\n    justify-content: center;\n  }\n\n  .flec1[_ngcontent-%COMP%] {\n    display: block;\n    margin: 10%;\n  }\n\n  .head1[_ngcontent-%COMP%] {\n    z-index: 999;\n    color: #ffffff;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 30px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n  }\n}\n.ng-autocomplete[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  display: table;\n  margin: 0 auto;\n}\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.adj[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  z-index: 2;\n}\n.adj2[_ngcontent-%COMP%] {\n  height: 371px !important;\n}\n#custom-search-input[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\n  width: 77.7%;\n  padding-left: inherit;\n}\n#custom-search-input[_ngcontent-%COMP%]   .btn_search[_ngcontent-%COMP%] {\n  margin-top: 11px;\n}\n.labsimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px !important;\n  width: 100% !important;\n}\n.modal-content[_ngcontent-%COMP%] {\n  height: 85%;\n}\n.pharmacy[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 22px;\n}\n.labs[_ngcontent-%COMP%] {\n  color: red;\n}\n.lb[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: black !important;\n  font-weight: 800;\n}\nhr[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n.bbt[_ngcontent-%COMP%] {\n  width: 170px;\n  margin-left: 30%;\n  margin-bottom: 9px;\n  margin-top: 35px;\n  height: 56px;\n  float: right;\n  margin-right: 10px;\n  font-size: 18px;\n}\n#custom-search-input[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n#custom-search-input[_ngcontent-%COMP%] {\n  margin: 0;\n  top: 0 !important;\n  padding: 0;\n  width: 911px;\n  margin: auto;\n  position: relative;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.search-deivde[_ngcontent-%COMP%] {\n  border-left: 3px solid !important;\n  padding-left: 10px;\n}\n.btn-main[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 30px !important;\n  background-color: #45A29E;\n  cursor: pointer;\n  color: white !important;\n  text-align: center;\n  line-height: 1.5;\n  font-size: 16px;\n  font-weight: 400;\n  display: inline-block;\n  z-index: 1;\n  position: ab;\n}\n.categories[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  cursor: pointer;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0880c4;\n  margin: 0 3px;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #000;\n  margin: 0 3px;\n}\n.fixed[_ngcontent-%COMP%] {\n  top: 13%;\n  width: 95%;\n}\n@media (max-width: 786px) {\n  .lb[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .pharmacy[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .pharmacyimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 98px !important;\n    width: 76% !important;\n  }\n\n  .labsimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 93px !important;\n    width: 76% !important;\n  }\n\n  .bbt[_ngcontent-%COMP%] {\n    width: 152px;\n    margin-bottom: 9px;\n    margin-top: 17px;\n    height: 44px;\n    font-size: 15px;\n    float: right;\n    margin-right: 10px;\n  }\n}\n@media (max-width: 575px) {\n  .pharmacyimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 98px !important;\n    width: 48% !important;\n    margin: 0px 22%;\n  }\n\n  .labsimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 93px !important;\n    width: 48% !important;\n    margin: 0px 22%;\n  }\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1.5rem -1rem -1rem auto;\n  font-size: 29px;\n}\n.lhs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54%;\n  z-index: 999;\n  left: 16px;\n  font-size: 10px;\n}\n.rhs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54%;\n  z-index: 999;\n  right: 16px;\n  font-size: 10px;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f1f3ff;\n  margin: 0 3px;\n}\n@media (max-width: 768px) {\n  .lab-slide[_ngcontent-%COMP%]   .main_title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-bottom: 5px;\n    font-size: 22px;\n    font-weight: 300;\n  }\n}\n.app-download-sec[_ngcontent-%COMP%]   .pic-middle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 151px;\n}\n.app-download-sec[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.testimonial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.h2-size[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.container.margin_120_95[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.deal-offer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.deal-offer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.element[_ngcontent-%COMP%]:before {\n  content: \"\uF000\";\n  font-family: Camphor, verdana;\n}\ndiv#myCarousel[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.item.carousel-item.active.ng-star-inserted[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Camphor, Verdana !important;\n  font-size: 15px;\n}\np.testimonial[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  font-family: Camphor, Verdana !important;\n}\n.title-left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.h2txt[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: left;\n  margin-right: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsY0FBQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBREVKO0FDRUU7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNHQTtFQUNNLFdBQUE7RUFDQSxZQUFBO0VBR0EseUJBQUE7QURGTjtBQ0tBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QURGRjtBQ0tBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FERkY7QUNNQTtFQUNFLGdCQUFBO0FESEY7QUNNQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FESEY7QUNNQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBREhGO0FDTUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QURIRjtBQ01BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFBZ0IsZ0JBQUE7RUFDaEIsZUFBQTtBREZGO0FDS0E7RUFDQyxnQkFBQTtBREZEO0FDTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBREhGO0FDTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBREhGO0FDTUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QURIRjtBQ01BO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FESEY7QUNVQztFQUVDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURSRjtBQ1dBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsK0JBQUE7RURSRjs7RUNZQTtJQUVFLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSw0QkFBQTtFRFZGOztFQ2FBO0lBQ0Usc0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RURWRjs7RUNhQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VEVkY7O0VDYUE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RURWRjtBQUNGO0FDYUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRFhGO0FDa0JBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QURmRjtBQ21CQTtFQUNFLFdBQUE7QURoQkY7QUM4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FEM0JGO0FDOEJBO0VBQ0Usd0JBQUE7QUQzQkY7QUM2QkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUQxQkY7QUM2QkE7RUFDRSxnQkFBQTtBRDFCRjtBQzhCRTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7QUQzQko7QUMrQkE7RUFDRSxXQUFBO0FENUJGO0FDK0JBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUQ1QkY7QUMrQkE7RUFDRSxVQUFBO0FENUJGO0FDK0JBO0VBQ0UsZUFBQTtBRDVCRjtBQytCQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUQ1QkY7QUMrQkE7RUFDRSxpQkFBQTtBRDVCRjtBQytCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRDVCRjtBQytCQTtFQUNFLDBCQUFBO0FENUJGO0FDK0JBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUQ1QkY7QUNvQ0E7RUFFRSxxQkFBQTtBRGxDRjtBQ3FDQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QURsQ0Y7QUNxQ0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRGxDRjtBQ3FDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEbENGO0FDcUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURsQ0Y7QUNxQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRGxDRjtBQ29DQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FEakNGO0FDb0NBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QURqQ0Y7QUNvQ0E7RUFDRTtJQUNFLGVBQUE7RURqQ0Y7O0VDbUNBO0lBQ0UsZUFBQTtFRGhDRjs7RUNrQ0E7SUFDRSx1QkFBQTtJQUNBLHFCQUFBO0VEL0JGOztFQ2lDQTtJQUNFLHVCQUFBO0lBQ0EscUJBQUE7RUQ5QkY7O0VDZ0NBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFRDdCRjtBQUNGO0FDZ0NBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtFRDlCRjs7RUNnQ0E7SUFDRSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtFRDdCRjtBQUNGO0FDZ0NBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUQ5QkY7QUNpQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUQ5QkY7QUNpQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQ5QkY7QUNpQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRDlCRjtBQ2lDQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFRDlCRjtBQUNGO0FDaUNBO0VBQ0UsZ0JBQUE7QUQvQkY7QUNrQ0E7RUFDRSxlQUFBO0FEL0JGO0FDa0NBO0VBQ0UsZ0JBQUE7QUQvQkY7QUNrQ0E7RUFDRSxpQkFBQTtBRC9CRjtBQ2tDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUQvQkY7QUNrQ0E7RUFDRSxrQkFBQTtBRC9CRjtBQ2tDQTtFQUNFLGdCQUFBO0FEL0JGO0FDa0NBO0VBQ0UsZUFBQTtBRC9CRjtBQ2tDQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBRC9CRjtBQ2tDQTtFQUNFLHVCQUFBO0FEL0JGO0FDa0NBO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7QUQvQkY7QUNrQ0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FEL0JGO0FDa0NBO0VBQ0Usa0JBQUE7QUQvQkY7QUNrQ0E7RUFDQyxnREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUQvQkQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50cnVuY2F0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnBoYXJtYWN5aW1nIGltZyB7XG4gIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmJ0bm4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgxNzMwO1xufVxuXG4uZmxlY3MxIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxlY3MyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm1hclRvcC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5vcHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmhlYWQxIHtcbiAgei1pbmRleDogOTk5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pbnB1dCNleGFtcGxlSW5wdXRFbWFpbDEge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWItdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFyLTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm1hci01MCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmxlYzEge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwJSAzMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2lkLTgwIHtcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi53aWQtMjUge1xuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNoYW5nZXMxMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uaG92MiA+IGltZzpob3ZlciB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAyO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluO1xuICBwYWRkaW5nOiAtMzBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAud2lkLTgwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFkai1tYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLndpZC0yNSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZsZWMxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwJTtcbiAgfVxuXG4gIC5oZWFkMSB7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmctYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMjtcbn1cblxuLmFkajIge1xuICBoZWlnaHQ6IDM3MXB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IC5zZWFyY2gtcXVlcnkge1xuICB3aWR0aDogNzcuNyU7XG4gIHBhZGRpbmctbGVmdDogaW5oZXJpdDtcbn1cblxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgLmJ0bl9zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG4ubGFic2ltZyBpbWcge1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi5waGFybWFjeSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxhYnMge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubGIge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uYmJ0IHtcbiAgd2lkdGg6IDE3MHB4O1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIGhlaWdodDogNTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDkxMXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNlYXJjaC1kZWl2ZGUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmJ0bi1tYWluIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1QTI5RTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFiO1xufVxuXG4uY2F0ZWdvcmllcyBoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jYXRlZ29yaWVzIC5wcmV2LW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhdGVnb3JpZXMgLnByZXYtbmV4dCBpIHtcbiAgY29sb3I6ICMwODgwYzQ7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbi5jYXRlZ29yaWVzIC5wcmV2LW5leHQgaTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDAgM3B4O1xufVxuXG4uZml4ZWQge1xuICB0b3A6IDEzJTtcbiAgd2lkdGg6IDk1JTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7XG4gIC5sYiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLnBoYXJtYWN5IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAucGhhcm1hY3lpbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDk4cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGFic2ltZyBpbWcge1xuICAgIGhlaWdodDogOTNweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iYnQge1xuICAgIHdpZHRoOiAxNTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAucGhhcm1hY3lpbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDk4cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDglICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggMjIlO1xuICB9XG5cbiAgLmxhYnNpbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDkzcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDglICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggMjIlO1xuICB9XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAtMS41cmVtIC0xcmVtIC0xcmVtIGF1dG87XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLmxocyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucmhzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU0JTtcbiAgei1pbmRleDogOTk5O1xuICByaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2F0ZWdvcmllcyAucHJldi1uZXh0IGkge1xuICBjb2xvcjogI2YxZjNmZjtcbiAgbWFyZ2luOiAwIDNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sYWItc2xpZGUgLm1haW5fdGl0bGUgaDIgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn1cbi5hcHAtZG93bmxvYWQtc2VjIC5waWMtbWlkZGxlIGltZyB7XG4gIG1heC13aWR0aDogMTUxcHg7XG59XG5cbi5hcHAtZG93bmxvYWQtc2VjIC5pbmZvIGgyIHtcbiAgZm9udC1zaXplOiAyOXB4O1xufVxuXG4udGVzdGltb25pYWwgaDEge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuXG4uaDItc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY29udGFpbmVyLm1hcmdpbl8xMjBfOTUge1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG5cbi5jb250YWluZXIgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZWFsLW9mZmVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cblxuLmRlYWwtb2ZmZXIgaDQge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5lbGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CAXCI7XG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCB2ZXJkYW5hO1xufVxuXG5kaXYjbXlDYXJvdXNlbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS5jYXJvdXNlbC1pdGVtLmFjdGl2ZS5uZy1zdGFyLWluc2VydGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQ2FtcGhvciwgVmVyZGFuYSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnAudGVzdGltb25pYWwge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogQ2FtcGhvciwgVmVyZGFuYSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtbGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmgydHh0IHtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59IiwiLnRydW5jYXRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5waGFybWFjeWltZyB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRubntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjZDgxNzMwO1xyXG4gICAgICAvLyBib3JkZXItcmFkaXVzOjBweCA1cHggNXB4IDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MTczMDsgXHJcbn1cclxuXHJcbi5mbGVjczEge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGVjczIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFyVG9wLTMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ub3B0e1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkMXtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlucHV0I2V4YW1wbGVJbnB1dEVtYWlsMSB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFyLTMwe1xyXG4gbWFyZ2luLXRvcDozMHB4O1xyXG4vLyAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFyLTUwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsZWMxIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCUgMzAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud2lkLTgwIHtcclxuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ud2lkLTI1IHtcclxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2hhbmdlczEye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi8vIC5jaGFuZ2VzMTI6aG92ZXJ7XHJcbi8vICAgZmxleC1ncm93OiAzO1xyXG4vLyB9XHJcblxyXG4gLmhvdjIgPmltZzpob3ZlcntcclxuICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbjtcclxuICBwYWRkaW5nOiAtMzBweCAhaW1wb3J0YW50IDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAud2lkLTgwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG5cclxuICAuYWRqLW1hcntcclxuICAgIC8vIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53aWQtMjUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mbGVjMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQxIHtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLm5nLWF1dG9jb21wbGV0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gLmN1c3RvbS1zZWFyY2gtaW5wdXRbX25nY29udGVudC1nZmQtYzEyMl0gaW5wdXRbdHlwZT1zdWJtaXRdW19uZ2NvbnRlbnQtZ2ZkLWMxMjJdIHtcclxuLy8gICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZmY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAuZXhhbXBsZS1mb3JtIHtcclxuLy8gICBtaW4td2lkdGg6IDkwcHg7XHJcbi8vICAgbWF4LXdpZHRoOiA1MDBweDtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgZm9udC1zaXplOiBzbWFsbDtcclxuLy8gfVxyXG5cclxuLmFkaiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYWRqMiB7XHJcbiAgaGVpZ2h0OiAzNzFweCAhaW1wb3J0YW50O1xyXG59XHJcbiNjdXN0b20tc2VhcmNoLWlucHV0IC5zZWFyY2gtcXVlcnkge1xyXG4gIHdpZHRoOiA3Ny43JTtcclxuICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWlucHV0IC5idG5fc2VhcmNoIHtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59XHJcblxyXG4ubGFic2ltZyB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5waGFybWFjeSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5sYWJzIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubGIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbi5iYnQge1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2N1c3RvbS1zZWFyY2gtaW5wdXQgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWlucHV0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogOTExcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLy8gLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB0b3A6IDQxcHg7XHJcbi8vIH1cclxuXHJcbmEge1xyXG4gIC8vIGNvbG9yOiAjMzM3YWI3O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1kZWl2ZGUge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tbWFpbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NUEyOUU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYjtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgaDIge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyAucHJldi1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgLnByZXYtbmV4dCBpIHtcclxuICBjb2xvcjogIzA4ODBjNDtcclxuICBtYXJnaW46IDAgM3B4O1xyXG59XHJcbi5jYXRlZ29yaWVzIC5wcmV2LW5leHQgaTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG5cclxuLmZpeGVkIHtcclxuICB0b3A6IDEzJTtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHtcclxuICAubGIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAucGhhcm1hY3kge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAucGhhcm1hY3lpbWcgaW1nIHtcclxuICAgIGhlaWdodDogOThweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGFic2ltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiA5M3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5iYnQge1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5waGFybWFjeWltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiA5OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDglICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAyMiU7XHJcbiAgfVxyXG4gIC5sYWJzaW1nIGltZyB7XHJcbiAgICBoZWlnaHQ6IDkzcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA0OCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDIyJTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAtMS41cmVtIC0xcmVtIC0xcmVtIGF1dG87XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG59XHJcblxyXG4ubGhzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ucmhzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgLnByZXYtbmV4dCBpIHtcclxuICBjb2xvcjogI2YxZjNmZjtcclxuICBtYXJnaW46IDAgM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubGFiLXNsaWRlIC5tYWluX3RpdGxlIGgyIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwLWRvd25sb2FkLXNlYyAucGljLW1pZGRsZSBpbWcge1xyXG4gIG1heC13aWR0aDogMTUxcHg7XHJcbn1cclxuXHJcbi5hcHAtZG93bmxvYWQtc2VjIC5pbmZvIGgyIHtcclxuICBmb250LXNpemU6IDI5cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbCBoMSB7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuLmgyLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyLm1hcmdpbl8xMjBfOTUge1xyXG4gIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWFsLW9mZmVyIGgxIHtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcblxyXG4uZGVhbC1vZmZlciBoNCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uZWxlbWVudDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDAwXCI7XHJcbiAgZm9udC1mYW1pbHk6IENhbXBob3IsIHZlcmRhbmE7XHJcbn1cclxuXHJcbmRpdiNteUNhcm91c2VsIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0uY2Fyb3VzZWwtaXRlbS5hY3RpdmUubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCBWZXJkYW5hICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5wLnRlc3RpbW9uaWFsIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCBWZXJkYW5hICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZS1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oMnR4dHtcclxuIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_speciality_service__WEBPACK_IMPORTED_MODULE_3__["SpecialityService"]
        }, {
          type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _services_customer_review_service__WEBPACK_IMPORTED_MODULE_5__["CustomerReviewService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/modules/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-home-home-module-es5.js.map
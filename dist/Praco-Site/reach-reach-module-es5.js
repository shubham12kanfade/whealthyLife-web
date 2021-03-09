function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reach-reach-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/reach/reach-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/reach/reach-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ReachRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordReachReachRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReachRoutingModule", function () {
      return ReachRoutingModule;
    });
    /* harmony import */


    var _reach_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./reach.component */
    "./src/app/modules/doctor-dashbord/reach/reach.component.ts");
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
      component: _reach_component__WEBPACK_IMPORTED_MODULE_0__["ReachComponent"]
    }];

    var ReachRoutingModule = function ReachRoutingModule() {
      _classCallCheck(this, ReachRoutingModule);
    };

    ReachRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ReachRoutingModule
    });
    ReachRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ReachRoutingModule_Factory(t) {
        return new (t || ReachRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReachRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReachRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/reach/reach.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/reach/reach.component.ts ***!
    \******************************************************************/

  /*! exports provided: ReachComponent */

  /***/
  function srcAppModulesDoctorDashbordReachReachComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReachComponent", function () {
      return ReachComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReachComponent =
    /*#__PURE__*/
    function () {
      function ReachComponent() {
        _classCallCheck(this, ReachComponent);
      }

      _createClass(ReachComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReachComponent;
    }();

    ReachComponent.ɵfac = function ReachComponent_Factory(t) {
      return new (t || ReachComponent)();
    };

    ReachComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReachComponent,
      selectors: [["app-reach"]],
      decls: 83,
      vars: 0,
      consts: [[1, "container"], [1, "row", 2, "background-color", "#2b3d8d"], [1, "col-sm-12", "col-md-6", "p-5"], [1, "text-white", "font-weight-bold", "sizefont", "pt-5"], [1, "secondheading", "text-white"], [1, "row", 2, "margin-top", "28px"], [1, "sign-up-now-button", "get-in-touch-btn", "reach-btn-orange"], [1, "tell-me-more-button", "buy-practo-reach", "reach-btn-orange"], ["alt", "WhealthyLife Reach", "title", "WhealthyLife Reach", 1, "provider_illustration", "reach", "i1", "p-5", 2, "color", "#f0f0f5"], [1, "row", "border", 2, "background-color", "#f0f0f5"], [1, "m-auto", "pt-5", 2, "height", "300px"], ["data-keepplaying", "", "loop", "true", "width", "420", "height", "280", "autoplay", "", 1, ""], ["src", "https://www.practo.com/bundles/practopractoapp/images/booklet-animation.mp4", "type", "video/mp4"], [1, "text-dark", "font-weight-bold", "sizefont", "pt-5"], [1, "secondheading", "text-dark"], [1, "row", "border", 2, "background-color", "white"], ["alt", "WhealthyLife Reach", "title", "WhealthyLife Reach", 1, "provider_illustration", "reach", "i2"], ["alt", "WhealthyLife Reach", "title", "WhealthyLife Reach", 1, "provider_illustration", "reach", "i3"], [1, "secondheading", "text-dark", "line-h"], [1, "text-dark", "pt-5"], [1, "secondheading2", "text-dark"], [1, "pt-5", "text-dark"], [1, "text-dark"], ["alt", "WhealthyLife Reach", "title", "WhealthyLife Reach", 1, "provider_illustration", "reach", "i4"], ["src", "https://www.practo.com/bundles/practopractoapp/images/reach_dashboard.png", "alt", "", 1, "img"]],
      template: function ReachComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Make your practice visible to millions of users on whealthylife.in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " WhealthyLife Reach is an ad slot for clinics and hospitals for getting better visibility on whealthylife.in. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Free Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buy WhealthyLife Reach");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "video", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Here\u2019s how your WhealthyLife Reach ad will look ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Here\u2019s how your WhealthyLife Reach ad will look Your WhealthyLife Reach ad appears on all the prime positions on WhealthyLife listing pages \u2014 desktop, mobile web and app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Who can use Reach?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Only clinics, hospitals and medical health establishments can subscribe to WhealthyLife Reach ad slots in accordance with MCI regulation 7.12.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Note: Doctors cannot purchase WhealthyLife Reach.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Here\u2019s how your WhealthyLife Reach ad will look ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "- Make your practice visible to millions of users on whealthylife.in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " - Get instant SMS alerts on every patient call ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " - Showcase special offers and services of your practice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Target your audience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "By locality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Choose your ad placement by selecting multiple localities closest to your practice location.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "By keywords");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Select keywords that are the most relevant to your practice \u2014 symptoms, services and speciality. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "e.g.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " A clinic that specialises in diabetes treatment can choose keywords like endocrinologist, sugar disease etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Get updates on your ad\u2019s performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Reach Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Track the performance of your WhealthyLife Reach subscription from anywhere (WhealthyLife website or app) through WhealthyLife Reach dashboard. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Email Updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " We\u2019ll notify you about your WhealthyLife Reach subscription activity and number of views through weekly emails. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sizefont[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.secondheading[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 40px;\n  font-weight: normal;\n}\n\n.secondheading2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: 20px;\n  font-weight: normal;\n}\n\n.sign-up-now-button[_ngcontent-%COMP%] {\n  border: 1px solid #ffa000;\n  font-size: 15px;\n  line-height: 15px;\n  font-weight: bold;\n  color: #FFF;\n  background-color: #ffa000;\n  padding: 10px 22px;\n  border-radius: 3px;\n  float: left;\n  cursor: pointer;\n}\n\n.reach-btn-orange[_ngcontent-%COMP%]:hover {\n  background-color: #f59a00 !important;\n}\n\n.tell-me-more-button[_ngcontent-%COMP%] {\n  border: 1px solid #ffa000;\n  font-size: 15px;\n  line-height: 15px;\n  font-weight: bold;\n  color: #FFF;\n  background-color: #ffa000;\n  padding: 10px 22px;\n  border-radius: 3px;\n  float: left;\n  cursor: pointer;\n  margin-left: 15px;\n}\n\n.provider_illustration.reach.i1[_ngcontent-%COMP%] {\n  background-position: -37px -140px;\n  width: 400px;\n  height: 400px;\n}\n\n.provider_illustration.reach[_ngcontent-%COMP%] {\n  background: url(https://www.practo.com/bundles/practopractoapp/images/provider_reach.svg) no-repeat;\n  display: block;\n}\n\n.provider_illustration.reach.i2[_ngcontent-%COMP%] {\n  background-position: -116px -625px;\n  width: 457px;\n  height: 210px;\n  float: right;\n}\n\n.provider_illustration.reach.i3[_ngcontent-%COMP%] {\n  background-position: -90px -1018px;\n  width: 400px;\n  height: 400px;\n  float: right;\n}\n\n.line-h[_ngcontent-%COMP%] {\n  line-height: 2;\n}\n\n.provider_illustration.reach.i4[_ngcontent-%COMP%] {\n  background-position: -70px -1536px;\n  width: 400px;\n  height: 400px;\n  float: right;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 325px;\n  width: 470px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcmVhY2gvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHJlYWNoXFxyZWFjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvcmVhY2gvcmVhY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLG1HQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3JlYWNoL3JlYWNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemVmb250IHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLnNlY29uZGhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWNvbmRoZWFkaW5nMiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNpZ24tdXAtbm93LWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVhY2gtYnRuLW9yYW5nZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5YTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZWxsLW1lLW1vcmUtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmEwMDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnByb3ZpZGVyX2lsbHVzdHJhdGlvbi5yZWFjaC5pMSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzdweCAtMTQwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ucHJvdmlkZXJfaWxsdXN0cmF0aW9uLnJlYWNoIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5wcmFjdG8uY29tL2J1bmRsZXMvcHJhY3RvcHJhY3RvYXBwL2ltYWdlcy9wcm92aWRlcl9yZWFjaC5zdmcpIG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvdmlkZXJfaWxsdXN0cmF0aW9uLnJlYWNoLmkyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTZweCAtNjI1cHg7XHJcbiAgICB3aWR0aDogNDU3cHg7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvdmlkZXJfaWxsdXN0cmF0aW9uLnJlYWNoLmkzIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MHB4IC0xMDE4cHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubGluZS1oIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG4ucHJvdmlkZXJfaWxsdXN0cmF0aW9uLnJlYWNoLmk0IHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC03MHB4IC0xNTM2cHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIGhlaWdodDogMzI1cHg7XHJcbiAgICB3aWR0aDogNDcwcHg7XHJcbn0iLCIuc2l6ZWZvbnQge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5zZWNvbmRoZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc2Vjb25kaGVhZGluZzIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5zaWduLXVwLW5vdy1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhMDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVhY2gtYnRuLW9yYW5nZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTlhMDAgIWltcG9ydGFudDtcbn1cblxuLnRlbGwtbWUtbW9yZS1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhMDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnByb3ZpZGVyX2lsbHVzdHJhdGlvbi5yZWFjaC5pMSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zN3B4IC0xNDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4ucHJvdmlkZXJfaWxsdXN0cmF0aW9uLnJlYWNoIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LnByYWN0by5jb20vYnVuZGxlcy9wcmFjdG9wcmFjdG9hcHAvaW1hZ2VzL3Byb3ZpZGVyX3JlYWNoLnN2Zykgbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb3ZpZGVyX2lsbHVzdHJhdGlvbi5yZWFjaC5pMiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTZweCAtNjI1cHg7XG4gIHdpZHRoOiA0NTdweDtcbiAgaGVpZ2h0OiAyMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvdmlkZXJfaWxsdXN0cmF0aW9uLnJlYWNoLmkzIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwcHggLTEwMThweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5saW5lLWgge1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxuLnByb3ZpZGVyX2lsbHVzdHJhdGlvbi5yZWFjaC5pNCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC03MHB4IC0xNTM2cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaW1nIHtcbiAgaGVpZ2h0OiAzMjVweDtcbiAgd2lkdGg6IDQ3MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReachComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reach',
          templateUrl: './reach.component.html',
          styleUrls: ['./reach.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/reach/reach.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/reach/reach.module.ts ***!
    \***************************************************************/

  /*! exports provided: ReachModule */

  /***/
  function srcAppModulesDoctorDashbordReachReachModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReachModule", function () {
      return ReachModule;
    });
    /* harmony import */


    var _reach_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./reach.component */
    "./src/app/modules/doctor-dashbord/reach/reach.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _reach_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reach-routing.module */
    "./src/app/modules/doctor-dashbord/reach/reach-routing.module.ts");

    var ReachModule = function ReachModule() {
      _classCallCheck(this, ReachModule);
    };

    ReachModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ReachModule
    });
    ReachModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ReachModule_Factory(t) {
        return new (t || ReachModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reach_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReachRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReachModule, {
        declarations: [_reach_component__WEBPACK_IMPORTED_MODULE_0__["ReachComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reach_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReachRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReachModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_reach_component__WEBPACK_IMPORTED_MODULE_0__["ReachComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reach_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReachRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=reach-reach-module-es5.js.map
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integrations-integrations-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/integrations/consult/consult.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/integrations/consult/consult.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConsultComponent */

  /***/
  function srcAppModulesDoctorDashbordIntegrationsConsultConsultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultComponent", function () {
      return ConsultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ConsultComponent =
    /*#__PURE__*/
    function () {
      function ConsultComponent() {
        _classCallCheck(this, ConsultComponent);
      }

      _createClass(ConsultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsultComponent;
    }();

    ConsultComponent.ɵfac = function ConsultComponent_Factory(t) {
      return new (t || ConsultComponent)();
    };

    ConsultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsultComponent,
      selectors: [["app-consult"]],
      decls: 62,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "pt-4"], [1, "section", "mt-4", "p-2"], [1, "follow-up-head", "mt-2"], [1, "b-100"], [1, "text-grey"], [1, "row", "mt-3"], [1, "col-sm-3"], [1, "row", "m-auto"], ["src", "../../../../../assets/img/swtich-illustration.svg"], [1, "section-head", "mt-2"], [1, "text-grey", "mt-2"], [1, "section-head", "control", "mt-2"], ["src", "../../../../../assets/img/swtich-illustration.svg", 1, "monetise-illustration"], [1, "section-head", "monetise", "mt-2"], [1, "section-2", "mt-2", "p-2"], [1, "section-head"], [1, "indexing", "mt-2"], [1, "mt-2"], [1, "row", "mt-2", "p-3"], ["mat-flat-button", "", 1, "mt-2", "mat-button-cust"], [1, "note", "mt-5", "p-1"]],
      template: function ConsultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Online follow-up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1000+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "clinics have enabled online follow-up. Keep your patients coming back and monetise repeat interactions!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Engage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Retain patients better: Give them a convenient way to follow-up with you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Control follow-up interactions: Limit free follow-up period, set online fees, and more.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Monetise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Monetise your follow-ups: Charge patients for repeat follow-up interactions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Here's how it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " After patients visit your clinic, they receive an sms with a link to follow-up online. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " You answer follow-up queries on the WhealthyLife Partner App ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " After the free follow-up expires, patients can pay to continue chatting with you. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Enable Follow up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "By enabling online follow-up you\u2019ll be allowing WhealthyLife to use appointment details so that your patients can be reached via SMS / Notification for the above benefits and services. You will enable it for all doctors in your practice.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Enable Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Note :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Online follow-ups will be available to your entire practice. Individual doctors can disable the feature from the app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: [".mat-checkbox-layout {\n  white-space: normal !important;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n}\n\n.indexing[_ngcontent-%COMP%] {\n  display: block;\n  background-color: lightgrey;\n  height: 24px;\n  width: 24px;\n  text-align: center;\n  color: black;\n  font-weight: 500;\n}\n\n.mat-button-cust[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n}\n\n.section-2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n}\n\n.section[_ngcontent-%COMP%] {\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray;\n}\n\na[_ngcontent-%COMP%] {\n  color: #14bef0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.b-100[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n@media screen and (max-width: 500px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 33px;\n  }\n\n  .hb[_ngcontent-%COMP%] {\n    margin-right: 44px !important;\n  }\n\n  .sdfs[_ngcontent-%COMP%] {\n    margin: 0px 8px;\n    padding-top: 15px;\n    vertical-align: bottom;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL2NvbnN1bHQvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXGludGVncmF0aW9uc1xcY29uc3VsdFxcY29uc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL2NvbnN1bHQvY29uc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFBZ0IsMkJBQUE7RUFBNkIsWUFBQTtFQUFjLFdBQUE7RUFBYSxrQkFBQTtFQUN4RSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0ksV0FBQTtBQ0lSOztBRERBO0VBQ0ksa0NBQUE7QUNJSjs7QUREQTtFQUNJLCtCQUFBO0VBQWdDLGtDQUFBO0FDS3BDOztBREZBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURBQTtFQUNJO0lBRUksa0JBQUE7SUFDQSxtQkFBQTtFQ0VOOztFREFFO0lBQ0ksNkJBQUE7RUNHTjs7RUREQztJQUVDLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNCQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2ludGVncmF0aW9ucy9jb25zdWx0L2NvbnN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnNlY3Rpb24taGVhZHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbmRleGluZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7IGhlaWdodDogMjRweDsgd2lkdGg6IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLWN1c3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VjdGlvbi0ye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnNlY3Rpb257XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMxNGJlZjA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iLTEwMHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG5cclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzNweDtcclxuICAgIH1cclxuICAgIC5oYntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgLnNkZnN7XHJcbiAgIFxyXG4gICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cclxuICAgfVxyXG59IiwiOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGF5b3V0IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbi1oZWFkIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5kZXhpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1idXR0b24tY3VzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VjdGlvbi0yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLnNlY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuXG5hIHtcbiAgY29sb3I6ICMxNGJlZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYi0xMDAge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzNweDtcbiAgfVxuXG4gIC5oYiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2RmcyB7XG4gICAgbWFyZ2luOiAwcHggOHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consult',
          templateUrl: './consult.component.html',
          styleUrls: ['./consult.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/integrations/drive/drive.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/integrations/drive/drive.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DriveComponent */

  /***/
  function srcAppModulesDoctorDashbordIntegrationsDriveDriveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriveComponent", function () {
      return DriveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DriveComponent =
    /*#__PURE__*/
    function () {
      function DriveComponent() {
        _classCallCheck(this, DriveComponent);
      }

      _createClass(DriveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DriveComponent;
    }();

    DriveComponent.ɵfac = function DriveComponent_Factory(t) {
      return new (t || DriveComponent)();
    };

    DriveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DriveComponent,
      selectors: [["app-drive"]],
      decls: 75,
      vars: 0,
      consts: [[1, "container-fluid", 2, "color", "#414146"], [1, ""], [1, "", 2, "border-bottom", "1px solid lightgray"], [1, "pt-4"], [1, "mt-3"], ["target", "_blank"], [1, "shared-record", "mt-3"], [1, "ui", "form"], ["ng-repeat", "emrSetting in emrSettings", 1, "field", "ng-scope"], [1, "ui", "checkbox", "share-input"], [1, "field", "ng-scope"], [1, "share-input"], [1, "integrations-header", "pt-3", 2, "border-bottom", "1px solid lightgray"], [1, "share-main-block", "mt-4"], [1, "ng-scope"], [1, "my-doctors"], [1, "my-doctor-acceptance-info"], [1, "my-doctor-acceptance-item-info"], [1, "my-doctor-acceptance-item-info", "mt-2"], [1, "float-left", "indexing"], [1, "my-doctor-acceptance-item-info-bold"], [1, "ui", "form", "ng-scope", "mt-4"], [1, "field"], [1, "sdfs"], ["mat-flat-button", "", 1, "mt-2", "mat-button-cust"]],
      template: function DriveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Record Share via WelthyLife Drive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You can now securely share your health records with your patients via WhealthyLife Drive. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Click ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " to know more. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select the records for which you want to turn on automatic sharing:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Prescriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Billing (Invoices and Payments)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Treatment Plans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vital Signs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lab Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Clinical Notes (including attachments)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "My Doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Enable the new \u2018My Doctors\u2019 feature to give your patients quick access to appointment details and actions. It will help you: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "1.\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Get upto 30% more repeat bookings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "2.\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Reduce no shows by upto 20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "By accepting, you will be sharing your patient information with WhealthyLife to reach your patients via SMS/Notification for the above benefits and services. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Enable Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".mat-checkbox-layout {\n  white-space: normal !important;\n}\n\n.mat-button-cust[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n}\n\na[_ngcontent-%COMP%] {\n  color: #14bef0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 500px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 33px;\n  }\n\n  .hb[_ngcontent-%COMP%] {\n    margin-right: 44px !important;\n  }\n\n  .sdfs[_ngcontent-%COMP%] {\n    margin: 0px 8px !important;\n    padding-top: 15px !important;\n    vertical-align: bottom !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL2RyaXZlL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yLWRhc2hib3JkXFxpbnRlZ3JhdGlvbnNcXGRyaXZlXFxkcml2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL2RyaXZlL2RyaXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0ksV0FBQTtBQ0FSOztBREtBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBRE9BO0VBQ0k7SUFFSSxrQkFBQTtJQUNBLG1CQUFBO0VDTE47O0VET0U7SUFDSSw2QkFBQTtFQ0pOOztFRE9FO0lBRUksMEJBQUE7SUFDQSw0QkFBQTtJQUNBLGlDQUFBO0VDTE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2ludGVncmF0aW9ucy9kcml2ZS9kcml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubWF0LWJ1dHRvbi1jdXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMTRiZWYwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMzcHg7XHJcbiAgICB9XHJcbiAgICAuaGJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNkZnN7XHJcbiAgIFxyXG4gICAgICAgIG1hcmdpbjogMHB4IDhweCAgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b20gIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICAgfVxyXG4gICBcclxufSIsIjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLm1hdC1idXR0b24tY3VzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hIHtcbiAgY29sb3I6ICMxNGJlZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzNweDtcbiAgfVxuXG4gIC5oYiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2RmcyB7XG4gICAgbWFyZ2luOiAwcHggOHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-drive',
          templateUrl: './drive.component.html',
          styleUrls: ['./drive.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/integrations/integrations-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/integrations/integrations-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: IntegrationsRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordIntegrationsIntegrationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntegrationsRoutingModule", function () {
      return IntegrationsRoutingModule;
    });
    /* harmony import */


    var _prime_prime_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./prime/prime.component */
    "./src/app/modules/doctor-dashbord/integrations/prime/prime.component.ts");
    /* harmony import */


    var _consult_consult_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./consult/consult.component */
    "./src/app/modules/doctor-dashbord/integrations/consult/consult.component.ts");
    /* harmony import */


    var _drive_drive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./drive/drive.component */
    "./src/app/modules/doctor-dashbord/integrations/drive/drive.component.ts");
    /* harmony import */


    var _integrations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./integrations.component */
    "./src/app/modules/doctor-dashbord/integrations/integrations.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _integrations_component__WEBPACK_IMPORTED_MODULE_3__["IntegrationsComponent"],
      children: [{
        path: '',
        redirectTo: 'drive',
        pathMatch: 'full'
      }, {
        path: 'drive',
        component: _drive_drive_component__WEBPACK_IMPORTED_MODULE_2__["DriveComponent"]
      }, {
        path: 'consult',
        component: _consult_consult_component__WEBPACK_IMPORTED_MODULE_1__["ConsultComponent"]
      }, {
        path: 'prime',
        component: _prime_prime_component__WEBPACK_IMPORTED_MODULE_0__["PrimeComponent"]
      }]
    }];

    var IntegrationsRoutingModule = function IntegrationsRoutingModule() {
      _classCallCheck(this, IntegrationsRoutingModule);
    };

    IntegrationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: IntegrationsRoutingModule
    });
    IntegrationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function IntegrationsRoutingModule_Factory(t) {
        return new (t || IntegrationsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IntegrationsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](IntegrationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/integrations/integrations.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/integrations/integrations.component.ts ***!
    \********************************************************************************/

  /*! exports provided: IntegrationsComponent */

  /***/
  function srcAppModulesDoctorDashbordIntegrationsIntegrationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntegrationsComponent", function () {
      return IntegrationsComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        navactive1: a0
      };
    };

    var IntegrationsComponent =
    /*#__PURE__*/
    function () {
      function IntegrationsComponent(router) {
        _classCallCheck(this, IntegrationsComponent);

        this.router = router;
        this.active = "drive";
        console.log("DriveComponent -> constructor -> router", router.url);
      }

      _createClass(IntegrationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigation",
        value: function navigation(val) {
          this.active = val;
          this.router.navigateByUrl('/Doctor/Integrations/' + val);
        }
      }]);

      return IntegrationsComponent;
    }();

    IntegrationsComponent.ɵfac = function IntegrationsComponent_Factory(t) {
      return new (t || IntegrationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    IntegrationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntegrationsComponent,
      selectors: [["app-integrations"]],
      decls: 24,
      vars: 9,
      consts: [[1, "bgcolor", 2, "height", "100vh"], [1, ""], [1, "row", 2, "height", "100vh"], [1, "col-sm-12", "col-md-3", "col-lg-2", "hb", "border", "colsm-4-h"], [1, "row", "border", "bg-white"], [1, "p-3"], [1, "row", "border", "bg-white", "mousecursor", "navactive"], [1, "p-3", "text-center"], [1, "row", "border", "bg-white", "mousecursor", 3, "ngClass", "click"], [1, "col-sm-12", "col-md-9", "col-lg-10", "hb", "colsm-8-h"]],
      template: function IntegrationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Integrations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "rajesh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " WhealthyLife.COM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntegrationsComponent_Template_div_click_13_listener() {
            return ctx.navigation("drive");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Drive ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntegrationsComponent_Template_div_click_16_listener() {
            return ctx.navigation("consult");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Online follow-up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntegrationsComponent_Template_div_click_19_listener() {
            return ctx.navigation("prime");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " WhealthyLife Prime ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.router.url == "/Doctor/Integrations/drive"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.router.url == "/Doctor/Integrations/consult"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.router.url == "/Doctor/Integrations/prime"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".bgcolor[_ngcontent-%COMP%] {\n  background-color: #f0f0f5;\n}\n\n.mousecursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.navactive[_ngcontent-%COMP%] {\n  background-color: #e7e7e7 !important;\n  border-left-style: solid !important;\n  border-left-width: 3px !important;\n  color: black;\n}\n\n.navactive1[_ngcontent-%COMP%] {\n  background-color: #59697f !important;\n  color: #fff !important;\n  border-left-style: solid !important;\n  border-left-width: 3px !important;\n}\n\n.hb[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yLWRhc2hib3JkXFxpbnRlZ3JhdGlvbnNcXGludGVncmF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL2ludGVncmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0FDRko7O0FESUE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQ0RKOztBREdBO0VBQ0ksdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2ludGVncmF0aW9ucy9pbnRlZ3JhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGY1O1xyXG4gICAgLy8gaGVpZ2h0OiA5NnZoO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tb3VzZWN1cnNvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZhY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNyFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxuICAgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm5hdmFjdGl2ZTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5Njk3ZiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHggIWltcG9ydGFudDtcclxufVxyXG4uaGIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgXHJcbn1cclxuLmNvbHNtLTQtaHtcclxuICAgIC8vIGhlaWdodDogNzV2aDtcclxufVxyXG4uY29sc20tOC1oe1xyXG4gICAgLy8gaGVpZ2h0OiA3NXZoO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY29sc20tNC1oe1xyXG4gICAgICAgIC8vIGhlaWdodDogYXV0byA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIiwiLmJnY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGY1O1xufVxuXG4ubW91c2VjdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZhY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdmFjdGl2ZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2OTdmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdC13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5oYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntegrationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-integrations',
          templateUrl: './integrations.component.html',
          styleUrls: ['./integrations.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/integrations/integrations.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/integrations/integrations.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: IntegrationsModule */

  /***/
  function srcAppModulesDoctorDashbordIntegrationsIntegrationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntegrationsModule", function () {
      return IntegrationsModule;
    });
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _integrations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./integrations.component */
    "./src/app/modules/doctor-dashbord/integrations/integrations.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _integrations_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./integrations-routing.module */
    "./src/app/modules/doctor-dashbord/integrations/integrations-routing.module.ts");
    /* harmony import */


    var _drive_drive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./drive/drive.component */
    "./src/app/modules/doctor-dashbord/integrations/drive/drive.component.ts");
    /* harmony import */


    var _consult_consult_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consult/consult.component */
    "./src/app/modules/doctor-dashbord/integrations/consult/consult.component.ts");
    /* harmony import */


    var _prime_prime_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./prime/prime.component */
    "./src/app/modules/doctor-dashbord/integrations/prime/prime.component.ts");

    var IntegrationsModule = function IntegrationsModule() {
      _classCallCheck(this, IntegrationsModule);
    };

    IntegrationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: IntegrationsModule
    });
    IntegrationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function IntegrationsModule_Factory(t) {
        return new (t || IntegrationsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _integrations_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntegrationsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IntegrationsModule, {
        declarations: [_integrations_component__WEBPACK_IMPORTED_MODULE_1__["IntegrationsComponent"], _drive_drive_component__WEBPACK_IMPORTED_MODULE_5__["DriveComponent"], _consult_consult_component__WEBPACK_IMPORTED_MODULE_6__["ConsultComponent"], _prime_prime_component__WEBPACK_IMPORTED_MODULE_7__["PrimeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _integrations_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntegrationsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IntegrationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_integrations_component__WEBPACK_IMPORTED_MODULE_1__["IntegrationsComponent"], _drive_drive_component__WEBPACK_IMPORTED_MODULE_5__["DriveComponent"], _consult_consult_component__WEBPACK_IMPORTED_MODULE_6__["ConsultComponent"], _prime_prime_component__WEBPACK_IMPORTED_MODULE_7__["PrimeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _integrations_routing_module__WEBPACK_IMPORTED_MODULE_4__["IntegrationsRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/integrations/prime/prime.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/integrations/prime/prime.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PrimeComponent */

  /***/
  function srcAppModulesDoctorDashbordIntegrationsPrimePrimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimeComponent", function () {
      return PrimeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var PrimeComponent =
    /*#__PURE__*/
    function () {
      function PrimeComponent() {
        _classCallCheck(this, PrimeComponent);
      }

      _createClass(PrimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrimeComponent;
    }();

    PrimeComponent.ɵfac = function PrimeComponent_Factory(t) {
      return new (t || PrimeComponent)();
    };

    PrimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrimeComponent,
      selectors: [["app-prime"]],
      decls: 52,
      vars: 0,
      consts: [[1, "container-fluid"], [1, ""], [1, "col-sm-7"], [1, "integrations-header"], [1, "ui", "fitted", "divider"], [1, "ui", "sixteen", "wide", "column", "prime-main-block", "ng-scope"], [1, "section", "benefits", "ng-scope"], [1, "follow-up-head"], [1, "bold-text"], ["target", "_blank"], [1, "bold-text", "mt-4"], [1, "row", "mt-4"], [1, "col-sm-3", "padd", "mt-3"], ["src", "../../../../assets/img/consultation.svg"], ["src", "../../../../assets/img/arrow.svg", 1, "arrow"], [1, "section-head"], [1, "text-grey"], [1, "form", "no-padding"], [1, "form-check"], [1, "color-black"], ["mat-flat-button", "", 1, "mt-2", "mat-button-cust"], [1, "note", "m-3"], [1, "note"]],
      template: function PrimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Whealthy Life Prime Integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wondering how many patients walked in to your clinic for a consultation?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "You can now accurately and easily track patient walk-ins by enabling Prime integration!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Know more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "How it works:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Patient walks in & consults the doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action performed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Billing/Prescription/File sharing/Check-in action performed on Ray.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Checked-in on Prime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The patient gets checked-in automatically on the Prime dashboard.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "I agree to Prime ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Terms and Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Enable Prime Integration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Please note : This will be enabled for all Prime doctors in your practice.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".section-head[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n}\n\n  .mat-checkbox-layout {\n  white-space: normal !important;\n}\n\n.bold-text[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 500;\n}\n\n.integrations-header[_ngcontent-%COMP%] {\n  color: black;\n  margin-top: 20px;\n  font-weight: 700;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 26px;\n  vertical-align: middle;\n  display: inline-block;\n  margin-left: 40px;\n}\n\n.mat-button-cust[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n}\n\na[_ngcontent-%COMP%] {\n  color: #14bef0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  font-size: 14px;\n  color: #414146;\n}\n\n.note[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n\n.mat-checkbox-inner-container[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.color-black[_ngcontent-%COMP%] {\n  color: black;\n}\n\n@media screen and (max-width: 500px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 33px;\n  }\n\n  .hb[_ngcontent-%COMP%] {\n    margin-right: 44px !important;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL3ByaW1lL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yLWRhc2hib3JkXFxpbnRlZ3JhdGlvbnNcXHByaW1lXFxwcmltZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaW50ZWdyYXRpb25zL3ByaW1lL3ByaW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSw4QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0ksV0FBQTtBQ0FSOztBRElBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtBQ0xKOztBRGdCQTtFQUNJO0lBRUksa0JBQUE7SUFDQSxtQkFBQTtFQ2ROOztFRGdCRTtJQUNJLDZCQUFBO0VDYk47O0VEZ0JFO0lBQ0ksYUFBQTtFQ2JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9pbnRlZ3JhdGlvbnMvcHJpbWUvcHJpbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFke1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxheW91dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib2xkLXRleHR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaW50ZWdyYXRpb25zLWhlYWRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYXJyb3d7XHJcbiAgICB3aWR0aDogMzhweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tY3VzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMTRiZWYwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1jaGVja3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWR7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzQxNDE0NjtcclxufVxyXG5cclxuLm5vdGV7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNre1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5jb2xvci1ibGFja3tcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpe1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMzcHg7XHJcbiAgICB9XHJcbiAgICAuaGJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgIFxyXG59IiwiLnNlY3Rpb24taGVhZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGF5b3V0IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW50ZWdyYXRpb25zLWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMjZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLm1hdC1idXR0b24tY3VzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hIHtcbiAgY29sb3I6ICMxNGJlZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZWN0aW9uLWhlYWQge1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0MTQxNDY7XG59XG5cbi5ub3RlIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5jb2xvci1ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMzcHg7XG4gIH1cblxuICAuaGIge1xuICAgIG1hcmdpbi1yaWdodDogNDRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prime',
          templateUrl: './prime.component.html',
          styleUrls: ['./prime.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=integrations-integrations-module-es5.js.map
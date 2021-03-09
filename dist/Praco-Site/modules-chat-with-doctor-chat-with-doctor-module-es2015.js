(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-chat-with-doctor-chat-with-doctor-module"],{

/***/ "./src/app/modules/chat-with-doctor/chat-now/chat-now.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/chat-with-doctor/chat-now/chat-now.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChatNowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNowComponent", function() { return ChatNowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ChatNowComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatNowComponent_div_68_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r481); const ctx_r480 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r480.toggleExitModal(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "If you leave now, the information you have entered will be lost.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes, Quit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatNowComponent {
    constructor() {
        this.isExitModalVisible = false;
        this.toggleExitModal = false;
    }
    ngOnInit() {
    }
    exitVisible() {
        this.isExitModalVisible = true;
    }
    toggleExitModal1() {
        this.isExitModalVisible = true;
    }
}
ChatNowComponent.ɵfac = function ChatNowComponent_Factory(t) { return new (t || ChatNowComponent)(); };
ChatNowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatNowComponent, selectors: [["app-chat-now"]], decls: 69, vars: 1, consts: [["ui-view", "", 1, "ng-scope"], [1, "new-direct-steps", "ng-scope"], [1, "step-content", "clearfix"], ["src", "../../../assets/img/cancel.png", "alt", "", 1, "cross", "icon-ic_cross", 3, "click"], [1, "problem-details-page", "clearfix", "ng-scope"], [1, "flow-form-left"], [1, "heading", "mobile-white-header", "ng-binding"], [1, "form-wrapper"], ["name", "problemForm", 1, "ng-isolate-scope", "ng-invalid", "ng-valid-maxlength", "ng-submitted", "ng-dirty", "ng-valid-parse", "ng-invalid-required", "ng-invalid-minlength"], [1, "search-problem-area"], ["ng-if", "!problemAreaToRestrict", 1, "input-container", "clearfix", "ng-scope"], ["ng-if", "!isVariationSymptomsMinimal", "for", "detailed-description", 1, "form-label", "ng-scope"], [1, "problem-input"], ["name", "detailedDescription", "ng-model", "model.detailedDescription", "maxlength", "500", "ng-disabled", "model.topProblemArea", "ng-required", "!model.topProblemArea", "placeholder", "Eg: fever, headache", "minlength", "4", "required", "required", "id", "detailed-description", 1, "ng-invalid", "ng-valid-maxlength", "ng-dirty", "ng-valid-parse", "ng-touched", "has-error", "ng-empty", "ng-invalid-required", "ng-valid-minlength"], ["ng-class", "{ 'has-error': form.detailedDescription.$touched && form.detailedDescription.$dirty && form.detailedDescription.$error.minlength }", 1, "validation-field", "pull-left"], ["ng-if", "!model.topProblemArea", 1, "restrict-width", "ng-scope"], ["ng-if", "!problemAreaTags && !isVariationSymptomsMinimal", 1, "padder", "loading-speciality", "ng-scope"], ["ng-class", "{\n                        'fixed-bottom-section padder-bottom-mobile': isVariationSymptomsMinimal,\n                        'no-mobile-number-tip': isLoggedIn\n                     }"], [1, "mobile-submit-form"], [1, "restrict-width"], ["ng-if", "visibleFields.mobile", "ng-class", "{ 'has-error': form.mobile.$invalid && form.mobileInteraction.$touched && form.mobileInteraction.$dirty }", 1, "input-container", "clear", "ng-scope"], ["for", "mobile", 1, "form-label"], [1, "intl-tel-input", "allow-dropdown"], [1, "flag-container"], ["role", "combobox", "aria-owns", "country-listbox", "tabindex", "0", "title", "India (\u092D\u093E\u0930\u0924): +91", 1, "selected-flag"], [1, "iti-flag", "in"], [1, "iti-arrow"], ["id", "country-listbox", "aria-expanded", "false", "role", "listbox", "aria-activedescendant", "iti-item-in", 1, "country-list", "hide"], ["tabindex", "-1", "id", "iti-item-us", "role", "option", "data-dial-code", "1", "data-country-code", "us", 1, "country", "preferred"], [1, "flag-box"], [1, "iti-flag", "us"], [1, "country-name"], [1, "dial-code"], ["tabindex", "-1", "id", "iti-item-gb", "role", "option", "data-dial-code", "44", "data-country-code", "gb", 1, "country", "preferred"], [1, "iti-flag", "gb"], ["role", "separator", "aria-disabled", "true", 1, "divider"], ["tabindex", "-1", "id", "iti-item-af", "role", "option", "data-dial-code", "93", "data-country-code", "af", 1, "country", "standard"], [1, "iti-flag", "af"], ["type", "tel", "intl-tel-input", "model", "placeholder", "Enter mobile number", "id", "mobile", "autocomplete", "off", "data-intl-tel-input-id", "0", 1, "ng-pristine", "ng-valid", "ng-isolate-scope", "ng-empty", "ng-touched"], ["name", "mobile", "type", "text", "required", "", 1, "hidden", "ng-pristine", "ng-untouched", "ng-empty", "ng-invalid", "ng-invalid-required", "ng-valid-minlength", "ng-valid-maxlength"], ["ng-if", "!isLoggedIn", 1, "hint-text", "ng-scope"], [1, "continue-btn-container", "padder-top"], [1, "btn-blue", "continue-btn", "disabled"], [1, "ng-scope", "ng-isolate-scope"], ["src", "../../../assets/img/direct-list-desktop-v2.jpg", 1, "userslide"], ["class", "ng-scope", 4, "ngIf"], [1, "ng-scope"], [1, "chat-global-modal", "chat-modal", "ng-scope"], [1, "content"], [1, "cancel-consultation"], ["width", "16", "height", "16", "alt", "Canel Consultation Popup", "src", "../../../assets/img/cancel.png", 1, "grey-cross", "pull-right", 3, "click"], [1, "main-heading"], [1, "text"], [1, "btn-blue"], [1, "loaderBg", "ng-scope"]], template: function ChatNowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatNowComponent_Template_img_click_3_listener() { return ctx.exitVisible(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chat with a Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Tell us your symptom or health problem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Min 4 characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "A relevant speciality will be shown below...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mobile number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "+1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "United Kingdom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "+44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "+93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "A verification code will be sent to this number.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ChatNowComponent_div_68_Template, 12, 0, "div", 45);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExitModalVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".cross[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n\n.userslide[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin: 100px;\n}\n\n.btn-blue[_ngcontent-%COMP%] {\n  max-width: 991px;\n  font-weight: bold;\n  line-height: 48px;\n  height: 48px;\n  width: 100%;\n  color: #13bef0 !important;\n  opacity: 0.65;\n  cursor: no-drop;\n  display: block;\n  border-radius: 2px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.icon-ic_cross[_ngcontent-%COMP%] {\n  height: 17px !important;\n  width: 17px !important;\n  opacity: 0.5;\n}\n\n\n\n.btn-blue[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 2px;\n  background: #14bef0;\n  color: white;\n  border: 1px solid #14bef0;\n  font-weight: bold;\n  text-align: center;\n}\n\n.btn-blue[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #14addb;\n  border-color: #14addb;\n}\n\n.btn-blue[_ngcontent-%COMP%]:active {\n  border-color: #168db3;\n  background: #14bef0;\n}\n\ndiv[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nh4[_ngcontent-%COMP%] {\n  line-height: 1.1;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-family: Camphor, verdana !important;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.pull-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n}\n\n.grey-cross[_ngcontent-%COMP%] {\n  background: url(https://www.practo.com/consult/bundles/cwipage/images/direct-icons-v13.svg) no-repeat;\n  background-repeat: no-repeat;\n}\n\n.grey-cross[_ngcontent-%COMP%] {\n  background-position: -369px -27px;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n}\n\n.chat-global-modal[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  right: 0;\n  z-index: 60;\n  position: fixed;\n  top: 0;\n}\n\n.chat-global-modal[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.chat-global-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 3px;\n  z-index: 60;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 360px;\n}\n\n@media screen and (max-width: 681px) {\n  .chat-global-modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: auto;\n    margin: 25px 0 15px;\n    position: static;\n    transform: translate(0, 0);\n  }\n}\n\n.loaderBg[_ngcontent-%COMP%] {\n  background-color: #000;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 59;\n}\n\n@media screen and (max-width: 681px) {\n  .loaderBg[_ngcontent-%COMP%] {\n    background-color: #fff;\n    opacity: 1;\n  }\n}\n\n.cancel-consultation[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n@media screen and (max-width: 681px) {\n  .cancel-consultation[_ngcontent-%COMP%] {\n    width: 360px;\n    margin: 0 auto;\n    border: 1px solid #e0e0e5;\n    border-radius: 2px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .cancel-consultation[_ngcontent-%COMP%] {\n    max-width: 96%;\n  }\n}\n\n.cancel-consultation[_ngcontent-%COMP%]   .grey-cross[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.cancel-consultation[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  border-bottom: 1px solid #e0e0e5;\n  padding-bottom: 20px;\n  margin-top: 0;\n}\n\n.cancel-consultation[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 15px;\n}\n\n.cancel-consultation[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 13px;\n  width: 100%;\n}\n\n@media screen and (max-width: 681px) {\n  .cancel-consultation[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n\n\n\n.ng-hide[_ngcontent-%COMP%]:not(.ng-hide-animate) {\n  display: none !important;\n}\n\n\n\n.btn-blue[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 2px;\n  background: #14bef0;\n  color: white;\n  border: 1px solid #14bef0;\n  font-weight: bold;\n  text-align: center;\n}\n\n.btn-blue[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #14addb;\n  border-color: #14addb;\n}\n\n.btn-blue[_ngcontent-%COMP%]:active {\n  border-color: #168db3;\n  background: #14bef0;\n}\n\n.btn-blue.disabled[_ngcontent-%COMP%] {\n  border-color: #b4b4be;\n  background: #b4b4be none repeat scroll 0 0;\n  color: #fff;\n  opacity: 0.65;\n  cursor: no-drop;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: solid 1px #e0e0e5;\n  padding: 10px;\n  font-size: 13px;\n  border-radius: 2px;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #b4b4be;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #b4b4be;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #b4b4be;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #b4b4be;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #14bef0;\n}\n\n.input-container[_ngcontent-%COMP%]   textarea.has-error[_ngcontent-%COMP%], .input-container[_ngcontent-%COMP%]   textarea.has-error[_ngcontent-%COMP%]:focus {\n  border-color: #d9534f;\n}\n\n.input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 120px;\n  resize: none;\n  outline: 0;\n}\n\n.input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:disabled {\n  background-color: #e0e0e5;\n}\n\n.input-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: block;\n}\n\n.input-container[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b4b4be;\n}\n\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + .hint-text[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  margin: 0;\n}\n\n.input-container[_ngcontent-%COMP%]   .validation-field[_ngcontent-%COMP%] {\n  color: #b4b4be;\n  font-weight: normal;\n  font-size: 11px;\n  margin-top: -3px;\n  margin-bottom: 0;\n}\n\ndiv[_ngcontent-%COMP%], span[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], img[_ngcontent-%COMP%], i[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], header[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nh2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  line-height: 1.1;\n}\n\nheader[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 0;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n*[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: Camphor, verdana !important;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.pull-left[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=text][_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[type=text][_ngcontent-%COMP%]::-ms-reveal {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.icon-ic_cross[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  color: #14bef0;\n}\n\n.each-slide[_ngcontent-%COMP%] {\n  transition: opacity 0.3s ease;\n}\n\n.each-slide.ng-hide[_ngcontent-%COMP%] {\n  -webkit-animation: fade_out 0.3s ease;\n          animation: fade_out 0.3s ease;\n}\n\n.intl-tel-input[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .intl-tel-input[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-right: 36px;\n  margin-right: 0;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: 1px;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .selected-flag[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 0 6px 0 8px;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .selected-flag[_ngcontent-%COMP%]   .iti-arrow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 4px solid #555;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  list-style: none;\n  text-align: left;\n  padding: 0;\n  margin: 0 0 0 -1px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  border: 1px solid #CCC;\n  white-space: nowrap;\n  max-height: 200px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .flag-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n}\n\n@media (max-width: 500px) {\n  .intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #CCC;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  outline: 0;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%]   .dial-code[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .country.highlight[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .flag-box[_ngcontent-%COMP%], .intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .country-name[_ngcontent-%COMP%], .intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .dial-code[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .flag-box[_ngcontent-%COMP%], .intl-tel-input[_ngcontent-%COMP%]   .country-list[_ngcontent-%COMP%]   .country-name[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.intl-tel-input.allow-dropdown[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .intl-tel-input.allow-dropdown[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%] {\n  padding-right: 6px;\n  padding-left: 52px;\n  margin-left: 0;\n}\n\n.intl-tel-input.allow-dropdown[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n\n.intl-tel-input.allow-dropdown[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.intl-tel-input.allow-dropdown[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%]:hover   .selected-flag[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.iti-flag[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.iti-flag.be[_ngcontent-%COMP%] {\n  width: 18px;\n}\n\n.iti-flag.ch[_ngcontent-%COMP%] {\n  width: 15px;\n}\n\n.iti-flag.mc[_ngcontent-%COMP%] {\n  width: 19px;\n}\n\n.iti-flag.ne[_ngcontent-%COMP%] {\n  width: 18px;\n}\n\n.iti-flag.np[_ngcontent-%COMP%] {\n  width: 13px;\n}\n\n.iti-flag.va[_ngcontent-%COMP%] {\n  width: 15px;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .iti-flag[_ngcontent-%COMP%] {\n    background-size: 5652px 15px;\n  }\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.clearfix[_ngcontent-%COMP%]:after {\n  visibility: hidden;\n  display: block;\n  height: 0;\n}\n\n.clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.new-direct-steps[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .step-content[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.new-direct-steps[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .step-content[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n\ninput[type=text][_ngcontent-%COMP%]:disabled, input[type=tel][_ngcontent-%COMP%]:disabled {\n  cursor: no-drop;\n  color: #b4b4be;\n  -webkit-text-fill-color: #b4b4be;\n}\n\n@media screen and (max-width: 450px) {\n  .step-content[_ngcontent-%COMP%]   .continue-btn-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  outline: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.offline-message[_ngcontent-%COMP%] {\n  width: auto;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  padding: 10px 20px;\n  background-color: #787887;\n  color: white;\n  text-align: center;\n  transform: translateX(-50%);\n  border-radius: 0 0 4px 4px;\n}\n\n@media screen and (max-width: 450px) {\n  .offline-message[_ngcontent-%COMP%] {\n    border-radius: 0;\n    position: static;\n    margin-left: 0;\n    left: 0;\n    width: 100%;\n    transform: unset;\n  }\n}\n\n.padder[_ngcontent-%COMP%], .new-direct-steps[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n@media screen and (max-width: 450px) {\n  .padder[_ngcontent-%COMP%], .new-direct-steps[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n.padder-top[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.step-content[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.new-direct-steps[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 991px) {\n  .new-direct-steps[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.new-direct-steps[_ngcontent-%COMP%]   .icon-ic_cross[_ngcontent-%COMP%] {\n  font-size: 26px;\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  z-index: 40;\n  color: #787887;\n}\n\n@media screen and (max-width: 991px) {\n  .new-direct-steps[_ngcontent-%COMP%]   .icon-ic_cross[_ngcontent-%COMP%] {\n    top: 9px;\n    right: 4px;\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .new-direct-steps[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding-top: 0;\n    position: relative;\n  }\n\n  .new-direct-steps[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .mobile-white-header[_ngcontent-%COMP%] {\n    margin-top: 0;\n    text-align: left;\n    font-size: 18px;\n    padding: 18px 15px;\n    border-bottom: 1px solid #f0f0f5;\n    color: inherit;\n  }\n}\n\n.new-direct-steps[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n@media (min-width: 992px) {\n  .new-direct-steps[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .new-direct-steps[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .new-direct-steps[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.problem-details-page[_ngcontent-%COMP%] {\n  padding-bottom: 36px;\n}\n\n@media screen and (max-width: 991px) {\n  .problem-details-page[_ngcontent-%COMP%] {\n    padding-bottom: 10px;\n  }\n}\n\n.step-content[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  border-radius: 2px;\n  max-width: 970px;\n  box-shadow: 0 2px 4px 0 rgba(177, 177, 177, 0.5);\n  padding: 25px 0 0 30px;\n}\n\n@media screen and (max-width: 991px) {\n  .step-content[_ngcontent-%COMP%] {\n    padding: 0;\n    box-shadow: unset;\n  }\n}\n\n.step-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: left;\n  color: #2d2d32;\n  margin-top: 0;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 991px) {\n  .step-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.step-content[_ngcontent-%COMP%]   .continue-btn-container[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.step-content[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: center;\n  width: 134px;\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n  margin: 0;\n}\n\n@media screen and (max-width: 991px) {\n  .step-content[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%] {\n    line-height: 48px;\n    height: 48px;\n    width: 100%;\n  }\n}\n\n.step-content[_ngcontent-%COMP%]   .btn-blue[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n@media (min-width: 992px) {\n  .step-content[_ngcontent-%COMP%]   .flow-form-left[_ngcontent-%COMP%] {\n    float: left;\n    max-width: 462px;\n    width: 100%;\n    position: relative;\n    min-height: 338px;\n  }\n\n  .step-content[_ngcontent-%COMP%]   .flow-form-left[_ngcontent-%COMP%]::before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    background-color: #e0e0e5;\n    left: 100%;\n    top: 46px;\n    width: 1px;\n    bottom: 0;\n  }\n\n  .step-content[_ngcontent-%COMP%]   .guiding-tip[_ngcontent-%COMP%] {\n    position: absolute;\n    padding-top: 119px;\n    text-align: center;\n    width: calc(100% - 494px);\n    display: inline-block;\n  }\n}\n\n.selected-flag[_ngcontent-%COMP%] {\n  outline: 0;\n}\n\n.intl-tel-input[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.problem-details-page[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n@media screen and (max-width: 991px) {\n  .problem-details-page[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n    max-width: 400px;\n    margin: 0 auto;\n  }\n}\n\n.problem-details-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 420px;\n}\n\n@media (min-width: 992px) {\n  .problem-details-page[_ngcontent-%COMP%]   .restrict-width[_ngcontent-%COMP%] {\n    max-width: 280px;\n  }\n}\n\n.problem-details-page[_ngcontent-%COMP%]   .loading-speciality[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (min-width: 992px) {\n  .problem-details-page[_ngcontent-%COMP%]   .loading-speciality[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.problem-details-page[_ngcontent-%COMP%]   .continue-btn-container[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media screen and (max-width: 991px) {\n  .guiding-tip[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.guiding-tip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.guiding-tip[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 18px;\n}\n\n.guiding-tip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.57;\n  color: #787887;\n  width: 288px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGF0LXdpdGgtZG9jdG9yL2NoYXQtbm93L0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcY2hhdC13aXRoLWRvY3RvclxcY2hhdC1ub3dcXGNoYXQtbm93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NoYXQtd2l0aC1kb2N0b3IvY2hhdC1ub3cvY2hhdC1ub3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFFSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREtBLDZCQUFBOztBQUNBO0VBQVUsY0FBQTtFQUFjLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLFlBQUE7RUFBWSx5QkFBQTtFQUF5QixpQkFBQTtFQUFpQixrQkFBQTtBQ0tuSDs7QURKQTtFQUFnQixZQUFBO0VBQVksbUJBQUE7RUFBbUIscUJBQUE7QUNVL0M7O0FEVEE7RUFBaUIscUJBQUE7RUFBcUIsbUJBQUE7QUNjdEM7O0FEYkE7RUFBYSxTQUFBO0VBQVMsVUFBQTtFQUFVLFNBQUE7RUFBUyxlQUFBO0VBQWUsYUFBQTtFQUFhLHdCQUFBO0FDc0JyRTs7QURyQkE7RUFBRyxnQkFBQTtBQ3lCSDs7QUR4QkE7RUFBSSxTQUFBO0FDNEJKOztBRDNCQTtFQUFPLGNBQUE7RUFBYyxhQUFBO0VBQWEsU0FBQTtBQ2lDbEM7O0FEaENBO0VBQU8s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Q3FwQjFDOztBRHBwQkE7RUFDQTtJQUEwQyxlQUFBO0VDd3BCeEM7QUFDRjs7QUR2cEJBO0VBQThDLFNBQUE7QUMwcEI5Qzs7QUR6cEJBO0VBQ0E7SUFBYSxhQUFBO0VDNnBCWDtBQUNGOztBRDVwQkE7RUFBaUIsbUJBQUE7QUMrcEJqQjs7QUQ5cEJBO0VBQWdCLGlCQUFBO0VBQWlCLGtCQUFBO0VBQWtCLGVBQUE7QUNvcUJuRDs7QURucUJBO0VBQWUsaUJBQUE7RUFBaUIsY0FBQTtFQUFjLFlBQUE7RUFBWSxxQkFBQTtBQzBxQjFEOztBRHpxQkEsaUZBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NoYXQtd2l0aC1kb2N0b3IvY2hhdC1ub3cvY2hhdC1ub3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNyb3Nze1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnVzZXJzbGlkZXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufVxyXG4uYnRuLWJsdWV7XHJcbiAgICBtYXgtd2lkdGg6IDk5MXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiMxM2JlZjAgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IC42NTtcclxuICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmljb24taWNfY3Jvc3Mge1xyXG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5cclxuLy9tb2RhbFxyXG4vKiEgQ1NTIFVzZWQgZnJvbTogRW1iZWRkZWQgKi9cclxuLmJ0bi1ibHVle2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLXJhZGl1czoycHg7YmFja2dyb3VuZDojMTRiZWYwO2NvbG9yOndoaXRlO2JvcmRlcjoxcHggc29saWQgIzE0YmVmMDtmb250LXdlaWdodDpib2xkO3RleHQtYWxpZ246Y2VudGVyO31cclxuLmJ0bi1ibHVlOmhvdmVye2NvbG9yOndoaXRlO2JhY2tncm91bmQ6IzE0YWRkYjtib3JkZXItY29sb3I6IzE0YWRkYjt9XHJcbi5idG4tYmx1ZTphY3RpdmV7Ym9yZGVyLWNvbG9yOiMxNjhkYjM7YmFja2dyb3VuZDojMTRiZWYwO31cclxuZGl2LGg0LHAsaW1ne21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtmb250LXNpemU6MTAwJTtmb250OmluaGVyaXQ7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7fVxyXG5oNHtsaW5lLWhlaWdodDoxLjE7fVxyXG5pbWd7Ym9yZGVyOjA7fVxyXG5idXR0b257Y29sb3I6aW5oZXJpdDtmb250OmluaGVyaXQ7bWFyZ2luOjA7fVxyXG5idXR0b257b3ZlcmZsb3c6dmlzaWJsZTt9XHJcbmJ1dHRvbnt0ZXh0LXRyYW5zZm9ybTpub25lO31cclxuYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Y3Vyc29yOnBvaW50ZXI7fVxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowO31cclxuKntib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxyXG4qOmJlZm9yZSwqOmFmdGVye2JveC1zaXppbmc6Ym9yZGVyLWJveDt9XHJcbmJ1dHRvbnsgIGZvbnQtZmFtaWx5OiBDYW1waG9yLHZlcmRhbmEgIWltcG9ydGFudDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0O31cclxuaW1ne3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt9XHJcbi5wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0IWltcG9ydGFudDt9XHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjA7fVxyXG5idXR0b246Zm9jdXN7b3V0bGluZTowO31cclxucHttYXJnaW46MCAwIDVweDt9XHJcbmJ1dHRvbntvdXRsaW5lOjA7Ym9yZGVyOjA7fVxyXG4uZ3JleS1jcm9zc3tiYWNrZ3JvdW5kOnVybChodHRwczovL3d3dy5wcmFjdG8uY29tL2NvbnN1bHQvYnVuZGxlcy9jd2lwYWdlL2ltYWdlcy9kaXJlY3QtaWNvbnMtdjEzLnN2Zykgbm8tcmVwZWF0O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDt9XHJcbi5ncmV5LWNyb3Nze2JhY2tncm91bmQtcG9zaXRpb246LTM2OXB4IC0yN3B4O2N1cnNvcjpwb2ludGVyO2hlaWdodDoxNnB4O3dpZHRoOjE2cHg7fVxyXG4uY2hhdC1nbG9iYWwtbW9kYWx7Ym90dG9tOjA7bGVmdDowO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztyaWdodDowO3otaW5kZXg6NjA7cG9zaXRpb246Zml4ZWQ7dG9wOjA7fVxyXG4uY2hhdC1nbG9iYWwtbW9kYWwgLm1haW4taGVhZGluZ3tmb250LXNpemU6MThweDt9XHJcbi5jaGF0LWdsb2JhbC1tb2RhbCAuY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO2JvcmRlci1yYWRpdXM6M3B4O3otaW5kZXg6NjA7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6MzYwcHg7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY4MXB4KXtcclxuLmNoYXQtZ2xvYmFsLW1vZGFsIC5jb250ZW50e3dpZHRoOmF1dG87bWFyZ2luOjI1cHggMCAxNXB4O3Bvc2l0aW9uOnN0YXRpYzt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7fVxyXG59XHJcbi5sb2FkZXJCZ3tiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym90dG9tOjA7bGVmdDowO29wYWNpdHk6LjU7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt0b3A6MDt6LWluZGV4OjU5O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2ODFweCl7XHJcbi5sb2FkZXJCZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3BhY2l0eToxO31cclxufVxyXG4uY2FuY2VsLWNvbnN1bHRhdGlvbntwYWRkaW5nLXRvcDoyMHB4O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2ODFweCl7XHJcbi5jYW5jZWwtY29uc3VsdGF0aW9ue3dpZHRoOjM2MHB4O21hcmdpbjowIGF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZTBlMGU1O2JvcmRlci1yYWRpdXM6MnB4O31cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KXtcclxuLmNhbmNlbC1jb25zdWx0YXRpb257bWF4LXdpZHRoOjk2JTt9XHJcbn1cclxuLmNhbmNlbC1jb25zdWx0YXRpb24gLmdyZXktY3Jvc3N7bWFyZ2luLXJpZ2h0OjE1cHg7fVxyXG4uY2FuY2VsLWNvbnN1bHRhdGlvbiAubWFpbi1oZWFkaW5ne3BhZGRpbmctbGVmdDoxNXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMGUwZTU7cGFkZGluZy1ib3R0b206MjBweDttYXJnaW4tdG9wOjA7fVxyXG4uY2FuY2VsLWNvbnN1bHRhdGlvbiAudGV4dHtmb250LXNpemU6MTZweDtwYWRkaW5nOjEwcHggMTVweDt9XHJcbi5jYW5jZWwtY29uc3VsdGF0aW9uIC5idG4tYmx1ZXtmb250LXNpemU6MTZweDtwYWRkaW5nOjEzcHg7d2lkdGg6MTAwJTt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjgxcHgpe1xyXG4uY2FuY2VsLWNvbnN1bHRhdGlvbiAuYnRuLWJsdWV7Ym9yZGVyLXJhZGl1czowO31cclxufVxyXG5cclxuLyohIENTUyBVc2VkIGZyb206IEVtYmVkZGVkICovXHJcbi5uZy1oaWRlOm5vdCgubmctaGlkZS1hbmltYXRlKXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50O31cclxuLyohIENTUyBVc2VkIGZyb206IEVtYmVkZGVkICovXHJcbi5idG4tYmx1ZXtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6MnB4O2JhY2tncm91bmQ6IzE0YmVmMDtjb2xvcjp3aGl0ZTtib3JkZXI6MXB4IHNvbGlkICMxNGJlZjA7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWFsaWduOmNlbnRlcjt9XHJcbi5idG4tYmx1ZTpob3Zlcntjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kOiMxNGFkZGI7Ym9yZGVyLWNvbG9yOiMxNGFkZGI7fVxyXG4uYnRuLWJsdWU6YWN0aXZle2JvcmRlci1jb2xvcjojMTY4ZGIzO2JhY2tncm91bmQ6IzE0YmVmMDt9XHJcbi5idG4tYmx1ZS5kaXNhYmxlZHtib3JkZXItY29sb3I6I2I0YjRiZTtiYWNrZ3JvdW5kOiNiNGI0YmUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtjb2xvcjojZmZmO29wYWNpdHk6LjY1O2N1cnNvcjpuby1kcm9wO31cclxuLmlucHV0LWNvbnRhaW5lcnttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4uaW5wdXQtY29udGFpbmVyIGlucHV0LC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7d2lkdGg6MTAwJTtib3JkZXI6c29saWQgMXB4ICNlMGUwZTU7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxM3B4O2JvcmRlci1yYWRpdXM6MnB4O31cclxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2I0YjRiZTt9XHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWE6OnBsYWNlaG9sZGVye2NvbG9yOiNiNGI0YmU7fVxyXG4uaW5wdXQtY29udGFpbmVyIGlucHV0OmZvY3VzLC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMxNGJlZjA7fVxyXG4uaW5wdXQtY29udGFpbmVyIHRleHRhcmVhLmhhcy1lcnJvciwuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhLmhhcy1lcnJvcjpmb2N1c3tib3JkZXItY29sb3I6I2Q5NTM0Zjt9XHJcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7aGVpZ2h0OjEyMHB4O3Jlc2l6ZTpub25lO291dGxpbmU6MDt9XHJcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWE6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGU1O31cclxuLmlucHV0LWNvbnRhaW5lciAuZm9ybS1sYWJlbHttYXJnaW4tYm90dG9tOjhweDtkaXNwbGF5OmJsb2NrO31cclxuLmlucHV0LWNvbnRhaW5lciAuaGludC10ZXh0e2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiNiNGI0YmU7fVxyXG4uaW5wdXQtY29udGFpbmVyIGlucHV0Ky5oaW50LXRleHR7cGFkZGluZy10b3A6OHB4O21hcmdpbjowO31cclxuLmlucHV0LWNvbnRhaW5lciAudmFsaWRhdGlvbi1maWVsZHtjb2xvcjojYjRiNGJlO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MTFweDttYXJnaW4tdG9wOi0zcHg7bWFyZ2luLWJvdHRvbTowO31cclxuZGl2LHNwYW4saDIsaDQscCxpbWcsaSx1bCxsaSxmb3JtLGxhYmVsLGhlYWRlcixzZWN0aW9ue21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtmb250LXNpemU6MTAwJTtmb250OmluaGVyaXQ7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7fVxyXG5oMixoNHtsaW5lLWhlaWdodDoxLjE7fVxyXG5oZWFkZXIsc2VjdGlvbntkaXNwbGF5OmJsb2NrO31cclxuaW1ne2JvcmRlcjowO31cclxuYnV0dG9uLGlucHV0LHRleHRhcmVhe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O21hcmdpbjowO31cclxuYnV0dG9ue292ZXJmbG93OnZpc2libGU7fVxyXG5idXR0b257dGV4dC10cmFuc2Zvcm06bm9uZTt9XHJcbmJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2N1cnNvcjpwb2ludGVyO31cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLGlucHV0OjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowO3BhZGRpbmc6MDt9XHJcbmlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbDt9XHJcbnRleHRhcmVhe292ZXJmbG93OmF1dG87fVxyXG4qe2JveC1zaXppbmc6Ym9yZGVyLWJveDt9XHJcbio6YmVmb3JlLCo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94O31cclxuaW5wdXQsYnV0dG9uLHRleHRhcmVheyAgZm9udC1mYW1pbHk6IENhbXBob3IsdmVyZGFuYSAhaW1wb3J0YW50O2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXQ7fVxyXG5pbWd7dmVydGljYWwtYWxpZ246bWlkZGxlO31cclxuLmNsZWFyZml4OmJlZm9yZSwuY2xlYXJmaXg6YWZ0ZXJ7Y29udGVudDpcIiBcIjtkaXNwbGF5OnRhYmxlO31cclxuLmNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGg7fVxyXG4ucHVsbC1sZWZ0e2Zsb2F0OmxlZnQhaW1wb3J0YW50O31cclxuLmhpZGV7ZGlzcGxheTpub25lIWltcG9ydGFudDt9XHJcbi5oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudDt9XHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjA7fVxyXG5pbnB1dFt0eXBlPXRleHRdOjotbXMtY2xlYXJ7ZGlzcGxheTpub25lO3dpZHRoOjA7aGVpZ2h0OjA7fVxyXG5pbnB1dFt0eXBlPXRleHRdOjotbXMtcmV2ZWFse2Rpc3BsYXk6bm9uZTt3aWR0aDowO2hlaWdodDowO31cclxuaW5wdXQ6Zm9jdXMsYnV0dG9uOmZvY3Vze291dGxpbmU6MDt9XHJcbi5pY29uLWljX2Nyb3Nze2N1cnNvcjpwb2ludGVyO31cclxucHttYXJnaW46MCAwIDVweDt9XHJcbmxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDoxMDAlO21hcmdpbi1ib3R0b206NXB4O31cclxuLmhpZ2hsaWdodHtjb2xvcjojMTRiZWYwO31cclxuLmVhY2gtc2xpZGV7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyBlYXNlO31cclxuLmVhY2gtc2xpZGUubmctaGlkZXthbmltYXRpb246ZmFkZV9vdXQgLjNzIGVhc2U7fVxyXG4uaW50bC10ZWwtaW5wdXR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7fVxyXG4uaW50bC10ZWwtaW5wdXQgKntib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7fVxyXG4uaW50bC10ZWwtaW5wdXQgLmhpZGV7ZGlzcGxheTpub25lO31cclxuLmludGwtdGVsLWlucHV0IGlucHV0LC5pbnRsLXRlbC1pbnB1dCBpbnB1dFt0eXBlPXRlbF17cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowO21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OjM2cHg7bWFyZ2luLXJpZ2h0OjA7fVxyXG4uaW50bC10ZWwtaW5wdXQgLmZsYWctY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3JpZ2h0OjA7cGFkZGluZzoxcHg7fVxyXG4uaW50bC10ZWwtaW5wdXQgLnNlbGVjdGVkLWZsYWd7ei1pbmRleDoxO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjEwMCU7cGFkZGluZzowIDZweCAwIDhweDt9XHJcbi5pbnRsLXRlbC1pbnB1dCAuc2VsZWN0ZWQtZmxhZyAuaXRpLWFycm93e21hcmdpbi1sZWZ0OjZweDt3aWR0aDowO2hlaWdodDowO2JvcmRlci1sZWZ0OjNweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6M3B4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6NHB4IHNvbGlkICM1NTU7fVxyXG4uaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7bGlzdC1zdHlsZTpub25lO3RleHQtYWxpZ246bGVmdDtwYWRkaW5nOjA7bWFyZ2luOjAgMCAwIC0xcHg7Ym94LXNoYWRvdzoxcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMik7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtib3JkZXI6MXB4IHNvbGlkICNDQ0M7d2hpdGUtc3BhY2U6bm93cmFwO21heC1oZWlnaHQ6MjAwcHg7b3ZlcmZsb3cteTpzY3JvbGw7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7fVxyXG4uaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuZmxhZy1ib3h7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjBweDt9XHJcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXtcclxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3R7d2hpdGUtc3BhY2U6bm9ybWFsO31cclxufVxyXG4uaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuZGl2aWRlcntwYWRkaW5nLWJvdHRvbTo1cHg7bWFyZ2luLWJvdHRvbTo1cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI0NDQzt9XHJcbi5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5jb3VudHJ5e3BhZGRpbmc6NXB4IDEwcHg7b3V0bGluZTowO31cclxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmNvdW50cnkgLmRpYWwtY29kZXtjb2xvcjojOTk5O31cclxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmNvdW50cnkuaGlnaGxpZ2h0e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjA1KTt9XHJcbi5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5mbGFnLWJveCwuaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuY291bnRyeS1uYW1lLC5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5kaWFsLWNvZGV7dmVydGljYWwtYWxpZ246bWlkZGxlO31cclxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmZsYWctYm94LC5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5jb3VudHJ5LW5hbWV7bWFyZ2luLXJpZ2h0OjZweDt9XHJcbi5pbnRsLXRlbC1pbnB1dC5hbGxvdy1kcm9wZG93biBpbnB1dCwuaW50bC10ZWwtaW5wdXQuYWxsb3ctZHJvcGRvd24gaW5wdXRbdHlwZT10ZWxde3BhZGRpbmctcmlnaHQ6NnB4O3BhZGRpbmctbGVmdDo1MnB4O21hcmdpbi1sZWZ0OjA7fVxyXG4uaW50bC10ZWwtaW5wdXQuYWxsb3ctZHJvcGRvd24gLmZsYWctY29udGFpbmVye3JpZ2h0OmF1dG87bGVmdDowO31cclxuLmludGwtdGVsLWlucHV0LmFsbG93LWRyb3Bkb3duIC5mbGFnLWNvbnRhaW5lcjpob3ZlcntjdXJzb3I6cG9pbnRlcjt9XHJcbi5pbnRsLXRlbC1pbnB1dC5hbGxvdy1kcm9wZG93biAuZmxhZy1jb250YWluZXI6aG92ZXIgLnNlbGVjdGVkLWZsYWd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuMDUpO31cclxuLml0aS1mbGFne3dpZHRoOjIwcHg7fVxyXG4uaXRpLWZsYWcuYmV7d2lkdGg6MThweDt9XHJcbi5pdGktZmxhZy5jaHt3aWR0aDoxNXB4O31cclxuLml0aS1mbGFnLm1je3dpZHRoOjE5cHg7fVxyXG4uaXRpLWZsYWcubmV7d2lkdGg6MThweDt9XHJcbi5pdGktZmxhZy5ucHt3aWR0aDoxM3B4O31cclxuLml0aS1mbGFnLnZhe3dpZHRoOjE1cHg7fVxyXG5AbWVkaWEgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzoyKSwobWluLXJlc29sdXRpb246MTkyZHBpKXtcclxuLml0aS1mbGFne2JhY2tncm91bmQtc2l6ZTo1NjUycHggMTVweDt9XHJcbn1cclxuXHJcbnVse2xpc3Qtc3R5bGU6bm9uZTt9XHJcbi5jbGVhcmZpeDphZnRlcnt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO2hlaWdodDowO31cclxuLmNsZWFye2NsZWFyOmJvdGg7fVxyXG4ubmV3LWRpcmVjdC1zdGVwcyBoZWFkZXIsLnN0ZXAtY29udGVudHttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO31cclxuLm5ldy1kaXJlY3Qtc3RlcHMgaGVhZGVyLC5zdGVwLWNvbnRlbnR7bWF4LXdpZHRoOjEwMjRweDt9XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmRpc2FibGVkLGlucHV0W3R5cGU9XCJ0ZWxcIl06ZGlzYWJsZWR7Y3Vyc29yOm5vLWRyb3A7Y29sb3I6I2I0YjRiZTstd2Via2l0LXRleHQtZmlsbC1jb2xvcjojYjRiNGJlO31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NTBweCl7XHJcbi5zdGVwLWNvbnRlbnQgLmNvbnRpbnVlLWJ0bi1jb250YWluZXJ7cGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4O31cclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7fVxyXG5pbnB1dCx0ZXh0YXJlYXtvdXRsaW5lOjA7fVxyXG50ZXh0YXJlYXtyZXNpemU6bm9uZTt9XHJcbi5vZmZsaW5lLW1lc3NhZ2V7d2lkdGg6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjUwJTtwYWRkaW5nOjEwcHggMjBweDtiYWNrZ3JvdW5kLWNvbG9yOiM3ODc4ODc7Y29sb3I6d2hpdGU7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7Ym9yZGVyLXJhZGl1czowIDAgNHB4IDRweDt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpe1xyXG4ub2ZmbGluZS1tZXNzYWdle2JvcmRlci1yYWRpdXM6MDtwb3NpdGlvbjpzdGF0aWM7bWFyZ2luLWxlZnQ6MDtsZWZ0OjA7d2lkdGg6MTAwJTt0cmFuc2Zvcm06dW5zZXQ7fVxyXG59XHJcbi5wYWRkZXIsLm5ldy1kaXJlY3Qtc3RlcHMgLmlucHV0LWNvbnRhaW5lcntwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NTBweCl7XHJcbi5wYWRkZXIsLm5ldy1kaXJlY3Qtc3RlcHMgLmlucHV0LWNvbnRhaW5lcntwYWRkaW5nLWxlZnQ6MTVweDtwYWRkaW5nLXJpZ2h0OjE1cHg7fVxyXG59XHJcbi5wYWRkZXItdG9we3BhZGRpbmctdG9wOjhweDt9XHJcbi5zdGVwLWNvbnRlbnQgaGVhZGVye3BhZGRpbmctYm90dG9tOjhweDt9XHJcbi5uZXctZGlyZWN0LXN0ZXBze3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi10b3A6MjBweDt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4ubmV3LWRpcmVjdC1zdGVwc3ttYXJnaW4tdG9wOjA7fVxyXG59XHJcbi5uZXctZGlyZWN0LXN0ZXBzIC5pY29uLWljX2Nyb3Nze2ZvbnQtc2l6ZToyNnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNHB4O3JpZ2h0OjE0cHg7ei1pbmRleDo0MDtjb2xvcjojNzg3ODg3O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbi5uZXctZGlyZWN0LXN0ZXBzIC5pY29uLWljX2Nyb3Nze3RvcDo5cHg7cmlnaHQ6NHB4O31cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuLm5ldy1kaXJlY3Qtc3RlcHMgaGVhZGVye3BhZGRpbmctdG9wOjA7cG9zaXRpb246cmVsYXRpdmU7fVxyXG4ubmV3LWRpcmVjdC1zdGVwcyBoZWFkZXIgLm1vYmlsZS13aGl0ZS1oZWFkZXJ7bWFyZ2luLXRvcDowO3RleHQtYWxpZ246bGVmdDtmb250LXNpemU6MThweDtwYWRkaW5nOjE4cHggMTVweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjBmMGY1O2NvbG9yOmluaGVyaXQ7fVxyXG59XHJcbi5uZXctZGlyZWN0LXN0ZXBzIC5pbnB1dC1jb250YWluZXJ7bWFyZ2luLWJvdHRvbTowO31cclxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpe1xyXG4ubmV3LWRpcmVjdC1zdGVwcyAuaW5wdXQtY29udGFpbmVyIGlucHV0LC5uZXctZGlyZWN0LXN0ZXBzIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7Zm9udC1zaXplOjE0cHg7fVxyXG4ubmV3LWRpcmVjdC1zdGVwcyAuaW5wdXQtY29udGFpbmVyIC5mb3JtLWxhYmVse2ZvbnQtc2l6ZToxNnB4O31cclxufVxyXG4ucHJvYmxlbS1kZXRhaWxzLXBhZ2V7cGFkZGluZy1ib3R0b206MzZweDt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4ucHJvYmxlbS1kZXRhaWxzLXBhZ2V7cGFkZGluZy1ib3R0b206MTBweDt9XHJcbn1cclxuLnN0ZXAtY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4O21heC13aWR0aDo5NzBweDtib3gtc2hhZG93OjAgMnB4IDRweCAwIHJnYmEoMTc3LDE3NywxNzcsMC41KTtwYWRkaW5nOjI1cHggMCAwIDMwcHg7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KXtcclxuLnN0ZXAtY29udGVudHtwYWRkaW5nOjA7Ym94LXNoYWRvdzp1bnNldDt9XHJcbn1cclxuLnN0ZXAtY29udGVudCAuaGVhZGluZ3tmb250LXNpemU6MjRweDt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6IzJkMmQzMjttYXJnaW4tdG9wOjA7Zm9udC13ZWlnaHQ6NjAwO31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbi5zdGVwLWNvbnRlbnQgLmhlYWRpbmd7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG59XHJcbi5zdGVwLWNvbnRlbnQgLmNvbnRpbnVlLWJ0bi1jb250YWluZXJ7bWFyZ2luLXRvcDoxNnB4O31cclxuLnN0ZXAtY29udGVudCAuY29udGludWUtYnRue3BhZGRpbmc6MDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMzRweDtmb250LXNpemU6MTZweDtoZWlnaHQ6NDBweDtsaW5lLWhlaWdodDo0MHB4O21hcmdpbjowO31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbi5zdGVwLWNvbnRlbnQgLmNvbnRpbnVlLWJ0bntsaW5lLWhlaWdodDo0OHB4O2hlaWdodDo0OHB4O3dpZHRoOjEwMCU7fVxyXG59XHJcbi5zdGVwLWNvbnRlbnQgLmJ0bi1ibHVle2ZvbnQtd2VpZ2h0OmJvbGQ7fVxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7XHJcbi5zdGVwLWNvbnRlbnQgLmZsb3ctZm9ybS1sZWZ0e2Zsb2F0OmxlZnQ7bWF4LXdpZHRoOjQ2MnB4O3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDozMzhweDt9XHJcbi5zdGVwLWNvbnRlbnQgLmZsb3ctZm9ybS1sZWZ0OjpiZWZvcmV7ZGlzcGxheTpibG9jaztjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6I2UwZTBlNTtsZWZ0OjEwMCU7dG9wOjQ2cHg7d2lkdGg6MXB4O2JvdHRvbTowO31cclxuLnN0ZXAtY29udGVudCAuZ3VpZGluZy10aXB7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZy10b3A6MTE5cHg7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6Y2FsYygxMDAlIC0gNDk0cHgpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cclxufVxyXG4uc2VsZWN0ZWQtZmxhZ3tvdXRsaW5lOjA7fVxyXG4uaW50bC10ZWwtaW5wdXR7ZGlzcGxheTpibG9jazt9XHJcbi5mb3JtLWxhYmVse2ZvbnQtd2VpZ2h0OjUwMDt9XHJcbi5wcm9ibGVtLWRldGFpbHMtcGFnZSAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe2hlaWdodDo2MHB4O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTFweCl7XHJcbi5wcm9ibGVtLWRldGFpbHMtcGFnZSAuZm9ybS13cmFwcGVye21heC13aWR0aDo0MDBweDttYXJnaW46MCBhdXRvO31cclxufVxyXG4ucHJvYmxlbS1kZXRhaWxzLXBhZ2UgZm9ybXttYXJnaW46MDttYXgtd2lkdGg6NDIwcHg7fVxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7XHJcbi5wcm9ibGVtLWRldGFpbHMtcGFnZSAucmVzdHJpY3Qtd2lkdGh7bWF4LXdpZHRoOjI4MHB4O31cclxufVxyXG4ucHJvYmxlbS1kZXRhaWxzLXBhZ2UgLmxvYWRpbmctc3BlY2lhbGl0eXttYXJnaW46MDt9XHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXtcclxuLnByb2JsZW0tZGV0YWlscy1wYWdlIC5sb2FkaW5nLXNwZWNpYWxpdHl7Zm9udC1zaXplOjE2cHg7fVxyXG59XHJcbi5wcm9ibGVtLWRldGFpbHMtcGFnZSAuY29udGludWUtYnRuLWNvbnRhaW5lcnttYXJnaW46MDt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpe1xyXG4uZ3VpZGluZy10aXB7ZGlzcGxheTpub25lO31cclxufVxyXG4uZ3VpZGluZy10aXAgaW1ne21hcmdpbi1ib3R0b206MThweDt9XHJcbi5ndWlkaW5nLXRpcCBoNHtmb250LXdlaWdodDpib2xkO21hcmdpbi1ib3R0b206NnB4O2ZvbnQtc2l6ZToxOHB4O31cclxuLmd1aWRpbmctdGlwIHB7bGluZS1oZWlnaHQ6MS41Nztjb2xvcjojNzg3ODg3O3dpZHRoOjI4OHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cclxuLyohIENTUyBVc2VkIGZyb206IGh0dHBzOi8vd3d3LldoZWFsdGh5TGlmZS5jb20vY29uc3VsdC9jc3MvOWM4NmQ5ZC1hOGI5YzIxLmNzcyAqL1xyXG5cclxuXHJcbiIsIi5jcm9zcyB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi51c2Vyc2xpZGUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cbi5idG4tYmx1ZSB7XG4gIG1heC13aWR0aDogOTkxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMxM2JlZjAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC42NTtcbiAgY3Vyc29yOiBuby1kcm9wO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbi1pY19jcm9zcyB7XG4gIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi8qISBDU1MgVXNlZCBmcm9tOiBFbWJlZGRlZCAqL1xuLmJ0bi1ibHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzE0YmVmMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTRiZWYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWJsdWU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMxNGFkZGI7XG4gIGJvcmRlci1jb2xvcjogIzE0YWRkYjtcbn1cblxuLmJ0bi1ibHVlOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzE2OGRiMztcbiAgYmFja2dyb3VuZDogIzE0YmVmMDtcbn1cblxuZGl2LCBoNCwgcCwgaW1nIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5oNCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbmJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCB2ZXJkYW5hICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMCAwIDVweDtcbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZ3JleS1jcm9zcyB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5wcmFjdG8uY29tL2NvbnN1bHQvYnVuZGxlcy9jd2lwYWdlL2ltYWdlcy9kaXJlY3QtaWNvbnMtdjEzLnN2Zykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZ3JleS1jcm9zcyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zNjlweCAtMjdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uY2hhdC1nbG9iYWwtbW9kYWwge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDYwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbn1cblxuLmNoYXQtZ2xvYmFsLW1vZGFsIC5tYWluLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jaGF0LWdsb2JhbC1tb2RhbCAuY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHotaW5kZXg6IDYwO1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzYwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MXB4KSB7XG4gIC5jaGF0LWdsb2JhbC1tb2RhbCAuY29udGVudCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG59XG4ubG9hZGVyQmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgxcHgpIHtcbiAgLmxvYWRlckJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jYW5jZWwtY29uc3VsdGF0aW9uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MXB4KSB7XG4gIC5jYW5jZWwtY29uc3VsdGF0aW9uIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlNTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jYW5jZWwtY29uc3VsdGF0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDk2JTtcbiAgfVxufVxuLmNhbmNlbC1jb25zdWx0YXRpb24gLmdyZXktY3Jvc3Mge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5jYW5jZWwtY29uc3VsdGF0aW9uIC5tYWluLWhlYWRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGU1O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNhbmNlbC1jb25zdWx0YXRpb24gLnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLmNhbmNlbC1jb25zdWx0YXRpb24gLmJ0bi1ibHVlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgxcHgpIHtcbiAgLmNhbmNlbC1jb25zdWx0YXRpb24gLmJ0bi1ibHVlIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4vKiEgQ1NTIFVzZWQgZnJvbTogRW1iZWRkZWQgKi9cbi5uZy1oaWRlOm5vdCgubmctaGlkZS1hbmltYXRlKSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyohIENTUyBVc2VkIGZyb206IEVtYmVkZGVkICovXG4uYnRuLWJsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTRiZWYwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNGJlZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tYmx1ZTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzE0YWRkYjtcbiAgYm9yZGVyLWNvbG9yOiAjMTRhZGRiO1xufVxuXG4uYnRuLWJsdWU6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTY4ZGIzO1xuICBiYWNrZ3JvdW5kOiAjMTRiZWYwO1xufVxuXG4uYnRuLWJsdWUuZGlzYWJsZWQge1xuICBib3JkZXItY29sb3I6ICNiNGI0YmU7XG4gIGJhY2tncm91bmQ6ICNiNGI0YmUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIgaW5wdXQsIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlNTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYjRiNGJlO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciwgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2I0YjRiZTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cywgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzE0YmVmMDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYS5oYXMtZXJyb3IsIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEuaGFzLWVycm9yOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDk1MzRmO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlNTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciAuZm9ybS1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dC1jb250YWluZXIgLmhpbnQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNiNGI0YmU7XG59XG5cbi5pbnB1dC1jb250YWluZXIgaW5wdXQgKyAuaGludC10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIC52YWxpZGF0aW9uLWZpZWxkIHtcbiAgY29sb3I6ICNiNGI0YmU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuZGl2LCBzcGFuLCBoMiwgaDQsIHAsIGltZywgaSwgdWwsIGxpLCBmb3JtLCBsYWJlbCwgaGVhZGVyLCBzZWN0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5oMiwgaDQge1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oZWFkZXIsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5idXR0b24sIGlucHV0LCB0ZXh0YXJlYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLCBpbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW5wdXQge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCB2ZXJkYW5hICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jbGVhcmZpeDpiZWZvcmUsIC5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOjotbXMtcmV2ZWFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuaW5wdXQ6Zm9jdXMsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5pY29uLWljX2Nyb3NzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwIDAgNXB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5oaWdobGlnaHQge1xuICBjb2xvcjogIzE0YmVmMDtcbn1cblxuLmVhY2gtc2xpZGUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLmVhY2gtc2xpZGUubmctaGlkZSB7XG4gIGFuaW1hdGlvbjogZmFkZV9vdXQgMC4zcyBlYXNlO1xufVxuXG4uaW50bC10ZWwtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmludGwtdGVsLWlucHV0ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5pbnRsLXRlbC1pbnB1dCAuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnRsLXRlbC1pbnB1dCBpbnB1dCwgLmludGwtdGVsLWlucHV0IGlucHV0W3R5cGU9dGVsXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmludGwtdGVsLWlucHV0IC5mbGFnLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5pbnRsLXRlbC1pbnB1dCAuc2VsZWN0ZWQtZmxhZyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDZweCAwIDhweDtcbn1cblxuLmludGwtdGVsLWlucHV0IC5zZWxlY3RlZC1mbGFnIC5pdGktYXJyb3cge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM1NTU7XG59XG5cbi5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAwIC0xcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmZsYWctYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59XG4uaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuZGl2aWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5jb3VudHJ5IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5jb3VudHJ5IC5kaWFsLWNvZGUge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmNvdW50cnkuaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmZsYWctYm94LCAuaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuY291bnRyeS1uYW1lLCAuaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuZGlhbC1jb2RlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmludGwtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmZsYWctYm94LCAuaW50bC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuY291bnRyeS1uYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5pbnRsLXRlbC1pbnB1dC5hbGxvdy1kcm9wZG93biBpbnB1dCwgLmludGwtdGVsLWlucHV0LmFsbG93LWRyb3Bkb3duIGlucHV0W3R5cGU9dGVsXSB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmludGwtdGVsLWlucHV0LmFsbG93LWRyb3Bkb3duIC5mbGFnLWNvbnRhaW5lciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xufVxuXG4uaW50bC10ZWwtaW5wdXQuYWxsb3ctZHJvcGRvd24gLmZsYWctY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW50bC10ZWwtaW5wdXQuYWxsb3ctZHJvcGRvd24gLmZsYWctY29udGFpbmVyOmhvdmVyIC5zZWxlY3RlZC1mbGFnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLml0aS1mbGFnIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5pdGktZmxhZy5iZSB7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uaXRpLWZsYWcuY2gge1xuICB3aWR0aDogMTVweDtcbn1cblxuLml0aS1mbGFnLm1jIHtcbiAgd2lkdGg6IDE5cHg7XG59XG5cbi5pdGktZmxhZy5uZSB7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uaXRpLWZsYWcubnAge1xuICB3aWR0aDogMTNweDtcbn1cblxuLml0aS1mbGFnLnZhIHtcbiAgd2lkdGg6IDE1cHg7XG59XG5cbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcbiAgLml0aS1mbGFnIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU2NTJweCAxNXB4O1xuICB9XG59XG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbn1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5uZXctZGlyZWN0LXN0ZXBzIGhlYWRlciwgLnN0ZXAtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5uZXctZGlyZWN0LXN0ZXBzIGhlYWRlciwgLnN0ZXAtY29udGVudCB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmRpc2FibGVkLCBpbnB1dFt0eXBlPXRlbF06ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIGNvbG9yOiAjYjRiNGJlO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2I0YjRiZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnN0ZXAtY29udGVudCAuY29udGludWUtYnRuLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbmlucHV0W3R5cGU9dGV4dF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcbiAgb3V0bGluZTogMDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5vZmZsaW5lLW1lc3NhZ2Uge1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg3ODg3O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLm9mZmxpbmUtbWVzc2FnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB1bnNldDtcbiAgfVxufVxuLnBhZGRlciwgLm5ldy1kaXJlY3Qtc3RlcHMgLmlucHV0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5wYWRkZXIsIC5uZXctZGlyZWN0LXN0ZXBzIC5pbnB1dC1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59XG4ucGFkZGVyLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5zdGVwLWNvbnRlbnQgaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLm5ldy1kaXJlY3Qtc3RlcHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uZXctZGlyZWN0LXN0ZXBzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4ubmV3LWRpcmVjdC1zdGVwcyAuaWNvbi1pY19jcm9zcyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAxNHB4O1xuICB6LWluZGV4OiA0MDtcbiAgY29sb3I6ICM3ODc4ODc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uZXctZGlyZWN0LXN0ZXBzIC5pY29uLWljX2Nyb3NzIHtcbiAgICB0b3A6IDlweDtcbiAgICByaWdodDogNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmV3LWRpcmVjdC1zdGVwcyBoZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5uZXctZGlyZWN0LXN0ZXBzIGhlYWRlciAubW9iaWxlLXdoaXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxOHB4IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cbi5uZXctZGlyZWN0LXN0ZXBzIC5pbnB1dC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5ldy1kaXJlY3Qtc3RlcHMgLmlucHV0LWNvbnRhaW5lciBpbnB1dCwgLm5ldy1kaXJlY3Qtc3RlcHMgLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLm5ldy1kaXJlY3Qtc3RlcHMgLmlucHV0LWNvbnRhaW5lciAuZm9ybS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4ucHJvYmxlbS1kZXRhaWxzLXBhZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnByb2JsZW0tZGV0YWlscy1wYWdlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLnN0ZXAtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWF4LXdpZHRoOiA5NzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNzcsIDE3NywgMTc3LCAwLjUpO1xuICBwYWRkaW5nOiAyNXB4IDAgMCAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc3RlcC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICB9XG59XG4uc3RlcC1jb250ZW50IC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzJkMmQzMjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnN0ZXAtY29udGVudCAuaGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uc3RlcC1jb250ZW50IC5jb250aW51ZS1idG4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnN0ZXAtY29udGVudCAuY29udGludWUtYnRuIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTM0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc3RlcC1jb250ZW50IC5jb250aW51ZS1idG4ge1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnN0ZXAtY29udGVudCAuYnRuLWJsdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zdGVwLWNvbnRlbnQgLmZsb3ctZm9ybS1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDQ2MnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAzMzhweDtcbiAgfVxuXG4gIC5zdGVwLWNvbnRlbnQgLmZsb3ctZm9ybS1sZWZ0OjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTU7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0b3A6IDQ2cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBib3R0b206IDA7XG4gIH1cblxuICAuc3RlcC1jb250ZW50IC5ndWlkaW5nLXRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctdG9wOiAxMTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ5NHB4KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbi5zZWxlY3RlZC1mbGFnIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLmludGwtdGVsLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2JsZW0tZGV0YWlscy1wYWdlIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wcm9ibGVtLWRldGFpbHMtcGFnZSAuZm9ybS13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4ucHJvYmxlbS1kZXRhaWxzLXBhZ2UgZm9ybSB7XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9ibGVtLWRldGFpbHMtcGFnZSAucmVzdHJpY3Qtd2lkdGgge1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gIH1cbn1cbi5wcm9ibGVtLWRldGFpbHMtcGFnZSAubG9hZGluZy1zcGVjaWFsaXR5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByb2JsZW0tZGV0YWlscy1wYWdlIC5sb2FkaW5nLXNwZWNpYWxpdHkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLnByb2JsZW0tZGV0YWlscy1wYWdlIC5jb250aW51ZS1idG4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZ3VpZGluZy10aXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5ndWlkaW5nLXRpcCBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uZ3VpZGluZy10aXAgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ndWlkaW5nLXRpcCBwIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTc7XG4gIGNvbG9yOiAjNzg3ODg3O1xuICB3aWR0aDogMjg4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyohIENTUyBVc2VkIGZyb206IGh0dHBzOi8vd3d3LldoZWFsdGh5TGlmZS5jb20vY29uc3VsdC9jc3MvOWM4NmQ5ZC1hOGI5YzIxLmNzcyAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatNowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-now',
                templateUrl: './chat-now.component.html',
                styleUrls: ['./chat-now.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/chat-with-doctor/chat-with-doctor-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/chat-with-doctor/chat-with-doctor-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChatWithDoctorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWithDoctorRoutingModule", function() { return ChatWithDoctorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_with_doctor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-with-doctor.component */ "./src/app/modules/chat-with-doctor/chat-with-doctor.component.ts");
/* harmony import */ var _chat_now_chat_now_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-now/chat-now.component */ "./src/app/modules/chat-with-doctor/chat-now/chat-now.component.ts");






const routes = [
    { path: '', component: _chat_with_doctor_component__WEBPACK_IMPORTED_MODULE_2__["ChatWithDoctorComponent"] },
    { path: 'chatnow', component: _chat_now_chat_now_component__WEBPACK_IMPORTED_MODULE_3__["ChatNowComponent"] }
];
class ChatWithDoctorRoutingModule {
}
ChatWithDoctorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatWithDoctorRoutingModule });
ChatWithDoctorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatWithDoctorRoutingModule_Factory(t) { return new (t || ChatWithDoctorRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatWithDoctorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatWithDoctorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/chat-with-doctor/chat-with-doctor.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/chat-with-doctor/chat-with-doctor.component.ts ***!
  \************************************************************************/
/*! exports provided: ChatWithDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWithDoctorComponent", function() { return ChatWithDoctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_consult_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/consult.service */ "./src/app/services/consult.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ChatWithDoctorComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cough & Cold? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Consult Now > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Period problems? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Consult Now > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Performance issues in bed? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Consult Now > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Skin problems? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Consult Now > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_61_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r475 == null ? null : item_r475.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r475 == null ? null : item_r475.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r475 == null ? null : item_r475.buttonText, " ");
} }
function ChatWithDoctorComponent_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatWithDoctorComponent_61_ng_template_0_Template, 11, 3, "ng-template", 28);
} }
function ChatWithDoctorComponent_ng_template_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gynaecology");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20B9 249 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "General physician");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20B9 199 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dermatology");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20B9 199 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Psychiatry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20B9 249 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stomach and digestion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20B9 299 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pediatrics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u20B9 249 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Abhy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 33 yr old IT Professional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I was really sick and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "couldn\u2019t get out of bed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I talked to the doctor through Practo and he shared a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "prescription in 10 minutes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I even got the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "medicines delivered on the same day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " vdsvsdv cdscds.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Deepak ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 29 yr old traveller ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I was travelling to a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "remote place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " for scuba diving and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "injured myself.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tough to find doctors around, so did an");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "online consultation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " on WhealthyLife and hey presto, I have my ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "medicines.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Disruptive. Convenient.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatWithDoctorComponent_ng_template_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Preeti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 26 yr old Professional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I was travelling to a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "remote place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " for scuba diving and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "injured myself.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tough to find doctors around, so did an");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "online consultation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " on WhealthyLife and hey presto, I have my ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "medicines.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Disruptive. Convenient.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatWithDoctorComponent {
    constructor(ConsultService) {
        this.ConsultService = ConsultService;
        this.f_list = [];
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
                    items: 3
                },
                1040: {
                    items: 3
                }
            },
            nav: false
        };
        this.customOptions2 = {
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
                    items: 2
                },
                940: {
                    items: 3
                },
                1040: {
                    items: 3
                }
            },
            nav: false
        };
        this.customOptions3 = {
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
                    items: 3
                },
                1040: {
                    items: 3
                }
            },
            nav: false
        };
        this.customOptions4 = {
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
                    items: 3
                },
                1040: {
                    items: 3
                }
            },
            nav: false
        };
        this.f_list.length = 9;
        this.ConsultService.getOffers().then((resData) => {
            console.log("ChatWithDoctorComponent -> constructor -> resData", resData);
            this.Offers = resData.data;
        }).catch((err) => {
            console.log("ChatWithDoctorComponent -> constructor -> err", err);
        });
    }
    ngOnInit() {
    }
}
ChatWithDoctorComponent.ɵfac = function ChatWithDoctorComponent_Factory(t) { return new (t || ChatWithDoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_consult_service__WEBPACK_IMPORTED_MODULE_1__["ConsultService"])); };
ChatWithDoctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatWithDoctorComponent, selectors: [["app-chat-with-doctor"]], decls: 137, vars: 5, consts: [[1, "container"], [1, "row", "margintop"], [1, "col-sm-6", "col-md-6", "col-lg-6", "pink"], [1, "first-fold", "heading", "mt-5"], [1, "first-fold", "heading"], [1, "description"], [1, "instant-doctors-card", "strip"], [1, "doctor-images"], ["src", "../../../assets/img/offer-specialist-v1.png", "width", "10%", "alt", "", 1, "each-image"], ["mat-raised-button", "", "color", "primary", 1, "m-3", 2, "z-index", "1", "padding-left", "6px", "padding-right", "5px"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-lg-4", "m-3"], [1, "media"], ["src", "../../../assets/img/images.png", "alt", "", 1, "mr-3", "width-img", "txt"], [1, "media-body", "txt"], [1, "text-bold"], ["src", "../../../assets/img/download.jpeg", "alt", "", 1, "mr-3", "width-img", "txt"], [1, "text-bold", 2, "margin-right", "10px"], ["src", "../../../assets/img/homepage-hero-image-web-v1.png", "alt", "", 1, "hero-image", "web"], [1, "col-sm-12", "col-md-12", "col-lg-12", "m-3"], [1, "homepage-section-heading", "horizontal-scroll"], [1, "col-sm-12", "col-md-12", "col-lg-12"], [1, "row", 2, "position", "absolute", "width", "100%", "justify-content", "space-between", "top", "100px"], [2, "z-index", "9", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left", "fa-3x"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right", "fa-3x"], [3, "options"], ["review", ""], ["carouselSlide", ""], [2, "margin-top", "30px"], [1, "col-12"], [1, "row", 2, "position", "absolute", "width", "100%", "justify-content", "space-between", "top", "140px"], ["review1", ""], [4, "ngFor", "ngForOf"], [1, "row", 2, "position", "absolute", "width", "100%", "justify-content", "space-between", "top", "70px"], ["review2", ""], [1, "col-sm-12", "col-md-12", "col-lg-12", "cen"], [1, "col-sm-4", "col-md-4", "col-lg-4", "cen"], ["src", "../../../assets/img/Swati/ChatWithDoctor/TalkToDoctor.png", "width", "10%", "alt", ""], ["src", "../../../assets/img/Swati/ChatWithDoctor/MedicineDelivered.png", "width", "10%", "alt", ""], ["src", "../../../assets/img/Swati/ChatWithDoctor/Smiley.png", "width", "10%", "alt", ""], [1, "row", "purple"], [1, "col-sm-4", "col-md-4", "col-lg-4", "cen", "mt-3"], [1, "text-light", "text-bold"], ["review3", ""], [1, "card", "border", 2, "border-radius", "15px !important", "margin", "10px !important", "box-shadow", "0px 3px 5px lightgrey"], ["src", "../../../assets/img/cough-cold-v1.jpg", "alt", "", 1, "card-img-top", 2, "border-radius", "15px 15px 0px 0px"], [1, "card-body"], [1, "card-text"], [1, "card-text", "primary", 2, "color", "rgb(105, 105, 240)", "cursor", "pointer", "font-weight", "600"], ["src", "../../../assets/img/period-problems-v1.jpg", "alt", "", 1, "card-img-top", 2, "border-radius", "15px 15px 0px 0px"], ["src", "../../../assets/img/performance-issues-bed-v1.jpg", "alt", "", 1, "card-img-top", 2, "border-radius", "15px 15px 0px 0px"], ["src", "../../../assets/img/skin-problems-v1.jpg", "alt", "", 1, "card-img-top", 2, "border-radius", "15px 15px 0px 0px"], [2, "margin", "0px 10px"], [1, "card", 2, "border", "1px solid black !important", "box-shadow", "5px 5px 5px grey"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["alt", "Generic placeholder image", "onError", "this.src='./../../../assets/img/briefcase.png'", 1, "", 2, "width", "150px", "height", "150px", "border", "2px solid #c5c1c1", "border-radius", "50%", "margin", "10px", 3, "src"], [2, "height", "100px"], [1, "heading"], [1, "card-footer", 2, "display", "flex", "justify-content", "center", "align-items", "flex-end"], ["mat-raised-button", "", "color", "light", 1, "card-title", 2, "width", "100%"], [1, "card", "border", 2, "width", "100%"], ["src", "../../../assets/img/Swati/ChatWithDoctor/Gynecologist.png", "alt", "", 1, "card-img-top", 2, "height", "130px", "width", "145px", "align-self", "center"], [1, "heading", 2, "text-align", "center"], [2, "text-align", "center"], ["src", "../../../assets/img/Swati/ChatWithDoctor/General physician.png", "alt", "", 1, "card-img-top", 2, "height", "130px", "width", "145px", "align-self", "center"], ["src", "../../../assets/img/Swati/ChatWithDoctor/Dermatologist.png", "alt", "", 1, "card-img-top", 2, "height", "130px", "width", "145px", "align-self", "center"], ["src", "../../../assets/img/Swati/ChatWithDoctor/Psychiatrist.png", "alt", "", 1, "card-img-top", 2, "height", "130px", "width", "145px", "align-self", "center"], ["src", "../../../assets/img/Swati/ChatWithDoctor/Stomach and Digestion.png", "alt", "", 1, "card-img-top", 2, "height", "130px", "width", "145px", "align-self", "center"], ["src", "../../../assets/img/Swati/ChatWithDoctor/Pediatrics.png", "alt", "", 1, "card-img-top", 2, "height", "130px", "width", "145px", "align-self", "center"], [1, "card", 2, "border", "1px solid lightgray !important", "box-shadow", "3px 3px 3px lightgrey !important", "margin", "20px"], [1, "card-header", 2, "background-color", "#fff", "border-bottom", "none", "padding", "5px"], [1, "col-3"], ["src", "../../../assets/img/testimonial-abhy-v1.png"], [1, "col-9", 2, "text-align", "left"], [2, "font-weight", "600", "margin", "0px"], [1, "card-body", 2, "padding", "7px"], [2, "margin", "0px"], ["src", "../../../assets/img/testimonial-default-women-v1.png"]], template: function ChatWithDoctorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skip the travel!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Take Online Doctor Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Private chat + call \u00B7 Starts at just ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u20B9199 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Consult Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Verified Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Free Followup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Common health problems ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return _r457.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r457 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return _r457.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "owl-carousel-o", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ChatWithDoctorComponent_ng_template_45_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ChatWithDoctorComponent_ng_template_46_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ChatWithDoctorComponent_ng_template_47_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ChatWithDoctorComponent_ng_template_48_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60); return _r462.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60); return _r462.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "owl-carousel-o", 26, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ChatWithDoctorComponent_61_Template, 1, 0, undefined, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Top Specialities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75); return _r464.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75); return _r464.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "owl-carousel-o", 26, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, ChatWithDoctorComponent_ng_template_76_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ChatWithDoctorComponent_ng_template_77_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ChatWithDoctorComponent_ng_template_78_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ChatWithDoctorComponent_ng_template_79_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ChatWithDoctorComponent_ng_template_80_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ChatWithDoctorComponent_ng_template_81_Template, 7, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " How it works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Talk to a doctor online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Get medicines delivered to you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Follow up with the doctor for free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "2,00,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Happy Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "20,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Verified Doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "169+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Specialities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " What our users say ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](133); return _r471.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatWithDoctorComponent_Template_span_click_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const _r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](133); return _r471.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "owl-carousel-o", 26, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, ChatWithDoctorComponent_ng_template_134_Template, 22, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, ChatWithDoctorComponent_ng_template_135_Template, 25, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, ChatWithDoctorComponent_ng_template_136_Template, 25, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Offers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions4);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".first-fold[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 1.28;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.42;\n}\n\n.margintop[_ngcontent-%COMP%] {\n  margin-top: 7em;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 20px;\n  line-height: 1.4;\n}\n\n.instant-doctors-card[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n\n.doctor-images[_ngcontent-%COMP%] {\n  margin: 0;\n  min-height: 42px;\n}\n\n.each-image[_ngcontent-%COMP%] {\n  z-index: 4;\n  border-radius: 50%;\n}\n\n.strip[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.width-img[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 318px;\n}\n\n.hero-image.web[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.homepage-section-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.homepage-section-heading[_ngcontent-%COMP%] {\n  color: #2d2d32;\n  font-size: 32px;\n  line-height: 1.5;\n  padding-bottom: 12px;\n}\n\n.lhs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30% !important;\n  z-index: 999 !important;\n  left: -30px !important;\n  font-size: 10px !important;\n  z-index: 99999;\n  margin: 0 30px;\n}\n\n.rhs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30% !important;\n  z-index: 999 !important;\n  right: 1px !important;\n  font-size: 10px !important;\n}\n\n.badge[_ngcontent-%COMP%] {\n  color: #2e6f5a;\n  font-size: large;\n  font-weight: 700;\n}\n\n.cen[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.offer-img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.ml[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n\n.txt[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n@media screen and (max-width: 600px) {\n  .heading[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGF0LXdpdGgtZG9jdG9yL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcY2hhdC13aXRoLWRvY3RvclxcY2hhdC13aXRoLWRvY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jaGF0LXdpdGgtZG9jdG9yL2NoYXQtd2l0aC1kb2N0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxVQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ1VGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNVRjs7QURSQTtFQUNFLGVBQUE7QUNXRjs7QURUQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ1lGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDYUY7O0FEWEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDY0Y7O0FEWkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0Usa0JBQUE7QUNnQkY7O0FEZEE7RUFDRSxVQUFBO0FDaUJGOztBRGZBO0VBQ0UsZ0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsVUFBQTtBQ21CRjs7QURmQTtFQUNFO0lBQ0UsMEJBQUE7RUNrQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhdC13aXRoLWRvY3Rvci9jaGF0LXdpdGgtZG9jdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LWZvbGR7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI4O1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS40MjtcclxuICB9XHJcbi5tYXJnaW50b3B7XHJcbiAgbWFyZ2luLXRvcDogN2VtO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcbi5pbnN0YW50LWRvY3RvcnMtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG4uZG9jdG9yLWltYWdlcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDQycHg7XHJcbn1cclxuLmVhY2gtaW1hZ2Uge1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zdHJpcHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLndpZHRoLWltZ3tcclxuICB3aWR0aDogMTUlO1xyXG59XHJcbi5oZXJvLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMzE4cHg7XHJcbn1cclxuXHJcbi5oZXJvLWltYWdlLndlYiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhvbWVwYWdlLXNlY3Rpb24taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5ob21lcGFnZS1zZWN0aW9uLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjMmQyZDMyO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcbi5saHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwJSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgbWFyZ2luOiAwIDMwcHg7XHJcbn1cclxuLnJocyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDFweCAhaW1wb3J0YW50IDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMmU2ZjVhO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uY2Vue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ub2ZmZXItaW1ne1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuLm1se1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuLnR4dHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgLmhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6MjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5maXJzdC1mb2xkIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogMS4yODtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xufVxuXG4ubWFyZ2ludG9wIHtcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmluc3RhbnQtZG9jdG9ycy1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLmRvY3Rvci1pbWFnZXMge1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG59XG5cbi5lYWNoLWltYWdlIHtcbiAgei1pbmRleDogNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3RyaXAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53aWR0aC1pbWcge1xuICB3aWR0aDogMTUlO1xufVxuXG4uaGVyby1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAzMThweDtcbn1cblxuLmhlcm8taW1hZ2Uud2ViIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZXBhZ2Utc2VjdGlvbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaG9tZXBhZ2Utc2VjdGlvbi1oZWFkaW5nIHtcbiAgY29sb3I6ICMyZDJkMzI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5saHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xuICBsZWZ0OiAtMzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTk7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuXG4ucmhzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDFweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmJhZGdlIHtcbiAgY29sb3I6ICMyZTZmNWE7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jZW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vZmZlci1pbWcge1xuICB3aWR0aDogMzAlO1xufVxuXG4ubWwge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4udHh0IHtcbiAgei1pbmRleDogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatWithDoctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-with-doctor',
                templateUrl: './chat-with-doctor.component.html',
                styleUrls: ['./chat-with-doctor.component.scss']
            }]
    }], function () { return [{ type: _services_consult_service__WEBPACK_IMPORTED_MODULE_1__["ConsultService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/chat-with-doctor/chat-with-doctor.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/chat-with-doctor/chat-with-doctor.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChatWithDoctorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWithDoctorModule", function() { return ChatWithDoctorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_with_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-with-doctor-routing.module */ "./src/app/modules/chat-with-doctor/chat-with-doctor-routing.module.ts");
/* harmony import */ var _chat_now_chat_now_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-now/chat-now.component */ "./src/app/modules/chat-with-doctor/chat-now/chat-now.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_with_doctor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-with-doctor.component */ "./src/app/modules/chat-with-doctor/chat-with-doctor.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");








class ChatWithDoctorModule {
}
ChatWithDoctorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatWithDoctorModule });
ChatWithDoctorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatWithDoctorModule_Factory(t) { return new (t || ChatWithDoctorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chat_with_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatWithDoctorRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatWithDoctorModule, { declarations: [_chat_now_chat_now_component__WEBPACK_IMPORTED_MODULE_3__["ChatNowComponent"], _chat_with_doctor_component__WEBPACK_IMPORTED_MODULE_5__["ChatWithDoctorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chat_with_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatWithDoctorRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatWithDoctorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_now_chat_now_component__WEBPACK_IMPORTED_MODULE_3__["ChatNowComponent"], _chat_with_doctor_component__WEBPACK_IMPORTED_MODULE_5__["ChatWithDoctorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chat_with_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatWithDoctorRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/consult.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/consult.service.ts ***!
  \*********************************************/
/*! exports provided: ConsultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultService", function() { return ConsultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class ConsultService {
    constructor(ApiCallService) {
        this.ApiCallService = ApiCallService;
    }
    getOffers() {
        return this.ApiCallService.getData('top/offer/get/membership/offers');
    }
}
ConsultService.ɵfac = function ConsultService_Factory(t) { return new (t || ConsultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
ConsultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConsultService, factory: ConsultService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-chat-with-doctor-chat-with-doctor-module-es2015.js.map
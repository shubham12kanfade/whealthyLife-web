(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! country-state-city */ "./node_modules/country-state-city/dist/index.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_speciality_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/speciality.service */ "./src/app/services/speciality.service.ts");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_customer_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/customer-review.service */ "./src/app/services/customer-review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function HomeComponent_ng_template_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Diabetes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Cancer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Skin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Kidney ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_199_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Digestion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sexual Wellness");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Bone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function HomeComponent_236_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Specialitss_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, "/doctors/" + Specialitss_r95._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", Specialitss_r95.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Specialitss_r95.fullName, " ");
} }
function HomeComponent_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_236_ng_template_0_Template, 5, 5, "ng-template", 80);
} }
function HomeComponent_div_266_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 157);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r99 == null ? null : item_r99.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r99 == null ? null : item_r99.descriptiitem == null ? null : item_r99.descriptiitem.userId == null ? null : item_r99.descriptiitem.userId.firstNameon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r99.buttonText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r99.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_266_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_266_div_1_Template, 12, 4, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_266_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r101.showmoreFun(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Packages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r91.offerData, 0, 4));
} }
function HomeComponent_div_267_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 157);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r104 == null ? null : item_r104.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r104 == null ? null : item_r104.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r104 == null ? null : item_r104.buttonText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r104 == null ? null : item_r104.backImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_267_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_267_div_1_Template, 12, 4, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_267_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r105.showmoreFun(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Packages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r92.offerData, 4, 8));
} }
function HomeComponent_section_268_div_9_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r110.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_section_268_div_9_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_section_268_div_9_2_ng_template_0_Template, 2, 1, "ng-template", 167);
} }
function HomeComponent_section_268_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "owl-carousel-o", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_section_268_div_9_2_Template, 1, 0, undefined, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r107.customOptions1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r107.Labdata);
} }
function HomeComponent_section_268_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r114.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_section_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Featured Labs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_section_268_div_9_Template, 3, 2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_section_268_div_11_Template, 4, 1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r93.Labdata.length > 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r93.Labdata);
} }
function HomeComponent_section_269_ng_template_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FirstName LastName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Designation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r119.review, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r119.userId.firstName, " ", item_r119.userId.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](", ", item_r119.userId.designation, " ");
} }
function HomeComponent_section_269_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_section_269_ng_template_7_div_2_Template, 13, 4, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r117.reviewdata);
} }
function HomeComponent_section_269_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Our Happy Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "owl-carousel-o", 78, 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_section_269_ng_template_7_Template, 3, 1, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_section_269_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r116.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_section_269_Template_div_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r122); const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r116.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r94.customOptions5);
} }
const _c1 = function () { return ["/bookappointment"]; };
const _c2 = function () { return ["/booktests"]; };
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["/order"]; };
const _c5 = function () { return ["/SamplePickup"]; };
const _c6 = function () { return ["/ViewReport"]; };
const _c7 = function () { return ["/DoctorConsulation"]; };
const _c8 = function () { return ["/PricesGuaranted"]; };
const _c9 = function () { return ["bookappointment"]; };
class HomeComponent {
    constructor(SpecialityService, MainService, CRService) {
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
        this.searchData = [];
        // review: any = []
        this.reviewdata = [];
        this.Labdata = [];
        this.offerData = [];
        this.showmore1 = true;
        // showmoreFun1(){
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
                    items: 1,
                },
                400: {
                    items: 2,
                },
                740: {
                    items: 3,
                },
                940: {
                    items: 4,
                },
                1040: {
                    items: 4,
                },
            },
            nav: false,
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
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 3,
                },
                740: {
                    items: 4,
                },
                940: {
                    items: 6,
                },
            },
            nav: true,
        };
        this.customOptions5 = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            autoplay: true,
            margin: 10,
            navSpeed: 700,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                },
                740: {
                    items: 1,
                },
                940: {
                    items: 1,
                },
            },
            nav: false,
        };
        SpecialityService.getSpecialization()
            .then((resData) => {
            this.Specialit = resData.data;
            console.log("HomeComponent -> this.Specialit", this.Specialit);
        })
            .catch((error) => {
            console.log("HomeComponent -> constructor -> error", error);
        });
        MainService.getLabs()
            .then((resData) => {
            this.labs = resData.data;
        })
            .catch((eror) => {
            console.log("HomeComponent -> eror", eror);
        });
        this.countryList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getAllCountries();
        this.stateList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getStatesOfCountry("101");
        SpecialityService.getTestMaster()
            .then((testdata) => {
            testdata.data.map((ele) => {
                this.searchData = ele.fullName;
            });
        })
            .catch((err) => {
            console.log("HomeComponent -> err", err);
        });
        this.CRService.getCustomer()
            .then((resData) => {
            for (let i = 0; i < resData.data.length; i++) {
                this.reviewdata[i] = resData.data[i];
            }
        })
            .catch((error) => {
            console.log("HomeComponent -> error", error);
        });
        this.CRService.getFeaturedLab()
            .then((LabData) => {
            for (let i = 0; i < LabData.data.length; i++) {
                this.Labdata[i] = LabData.data[i];
            }
        })
            .catch((error) => {
            console.log("HomeComponent -> error", error);
        });
        this.CRService.getOffers()
            .then((OfferData) => {
            for (let i = 0; i < OfferData.data.length; i++) {
                this.offerData[i] = OfferData.data[i];
            }
        })
            .catch((error) => {
            console.log("HomeComponent -> error", error);
        });
    }
    getStateList(event) { }
    getCityList(event) {
        this.cityList = country_state_city__WEBPACK_IMPORTED_MODULE_2___default.a.getCitiesOfState(event.target.value);
    }
    showmoreFun() {
        this.showmore = !this.showmore;
    }
    getPassedData(data) {
        this.activeSlides = data;
        console.log(this.activeSlides);
    }
    ngOnInit() {
        this.LabAll();
    }
    LabAll() {
        this.MainService.getAllLab().then((LabRes) => {
            console.log(": -----------------------------------------");
            console.log("HomeComponent -> LabAll -> LabRes", LabRes);
            console.log(": -----------------------------------------");
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_speciality_service__WEBPACK_IMPORTED_MODULE_3__["SpecialityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customer_review_service__WEBPACK_IMPORTED_MODULE_5__["CustomerReviewService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 333, vars: 27, consts: [[1, "hero_home", "version_1"], [1, "col-12"], [1, "row", "flecs1"], [1, "head1"], [1, "row", "mar-30"], [1, "flec1"], [1, "wid-80"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Type test name and select from option", 1, "form-control", "adj-mar"], [1, "wid-25"], [1, "btn", "btn-danger", "btnn"], [1, "row", 2, "margin-top", "50px !important"], [1, "col-lg-6", "offset-lg-3", "col-12", 2, "display", "flex", "justify-content", "space-evenly", "flex-wrap", "wrap", "width", "100%"], [1, "row", "hov"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "col-6", "hov2", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/Appointment.svg ", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], [1, "sub-title", 2, "cursor", "pointer"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "col-6", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/LabTest.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], ["src", "../../../assets/img/Swati/OnlineReport.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "offset-lg-2", "col-6", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/Medicine.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], ["routerLinkActive", "router-link-active", 1, "col-lg-4", "changes12", 3, "routerLink"], ["src", "../../../assets/img/Swati/TrackOrder.svg", "alt", "lab", 2, "height", "60px", "margin-bottom", "10px", "cursor", "pointer"], [1, "bottom-sec"], [1, "container"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-xs-12"], ["routerLinkActive", "router-link-active", 1, "opt", 3, "routerLink"], [1, "division", 2, "display", "flex", "align-items", "center"], ["src", "../../../assets/img/Swati/SamplePickup.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], [1, "mb-0"], ["src", "../../../assets/img/Swati/ReportOnline.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], ["src", "../../../assets/img/Swati/DoctorConsulation.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], ["src", "../../../assets/img/Swati/BestPrices.svg", "alt", "icon", 2, "height", "34px", "width", "34px", "border-radius", "50%"], [1, "first-sec", 2, "background-color", "rgb(240, 240, 240)"], [1, "container", "margin_120_95", "pt-pb-80"], [1, "col-md-6"], ["data-aos", "fade-right", 1, "main_title"], [1, "h2txt", "mainSectionTitle"], [2, "color", "cornflowerblue"], [2, "font-family", "Verdana, Geneva, Tahoma, sans-serif !important"], ["routerLinkActive", "router-link-active", 1, "btn-main", "mt-3", 3, "routerLink"], ["src", "../../../assets/img/Swati/BookAppointment.jpg", "alt", "WhealthyLife", "data-aos", "fade-left", 1, "img-fluid"], [1, "home-package"], [1, "container-xl"], [1, "borde", "m-3"], [1, "card", 2, "max-width", "500px"], [1, "row", "no-gutters"], [1, "col-sm-5", 2, "background", "#868e96"], ["src", "../../../assets/img/1.jpg", "alt", "...", 1, "card-img-top"], [1, "col-sm-7"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn-main", "stretched-link"], ["src", "../../../assets/img/4.jpg", "alt", "...", 1, "card-img-top"], ["src", "../../../assets/img/2.jpg", "alt", "...", 1, "card-img-top"], ["src", "../../../assets/img/3.jpg", "alt", "...", 1, "card-img-top"], [1, "specialities"], [1, "col-md-9", "mb-4", "p-0"], [1, "head"], [1, "col-md-3", "mt-mb-4", 2, "text-align", "end"], [1, "btn", "btn-outline-success"], [1, "col-md-3"], [1, "data"], ["src", "../../../assets/img/6.png", "alt", "img"], ["href", ""], [2, "color", "green"], ["src", "../../../assets/img/7.png", "alt", "img"], ["src", "../../../assets/img/8.png", "alt", "img"], ["src", "../../../assets/img/9.png", "alt", "img"], [1, "in-clinic"], [1, "col-md-12", "mb-4", "p-0"], [1, "col-md-12", "mb-4", 2, "position", "relative"], [1, "slider-arroy"], [1, "btn", "mt-4", 3, "click"], ["src", "https://img.icons8.com/metro/26/000000/previous.png"], ["src", "https://img.icons8.com/metro/26/000000/next.png"], [3, "options"], ["owlCar", ""], ["carouselSlide", ""], [1, "third-sec", 2, "background-color", "rgb(240, 240, 240)"], [1, "container", "margin_60_35", "pt-pb-80"], ["data-aos", "fade-right", 1, "pic-middle"], ["src", "../../../assets/img/Swati/MedicalRecord.jpg", "alt", "WhealthyLife", 1, "img-fluid"], ["data-aos", "fade-left", 1, "h2txt", "info", "mainSectionTitle"], [1, "h2"], ["href", "#", 1, "btn-main"], [1, "topCategoriesSect"], [1, "container", "mainSectionTitle", "pt-pb-80"], [2, "text-align", "center !important"], [1, "row", 2, "display", "flex", "justify-content", "space-between", "width", "100%", "position", "absolute", "top", "45%"], [2, "z-index", "9", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left", "fa-3x"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right", "fa-3x"], ["review1", ""], [4, "ngFor", "ngForOf"], [1, "clients"], ["data-aos", "fade-right", 1, "info", "mainSectionTitle"], ["src", "../../../assets/img/Swati/HealthCareProvider.png", "alt", "WhealthyLife", "data-aos", "fade-left", 1, "img-fluid"], [1, "v-packages", "deal-offer"], [1, "container", "margin_60_35", "mainSectionTitle", "pt-pb-80"], [1, "title-left"], ["class", "row", 4, "ngIf"], ["class", "lab-slide", 4, "ngIf"], [4, "ngIf"], [1, "app-download-sec"], [1, "col-md-6", "col-12", "d-none", "d-md-block"], ["data-aos", "fade-right", 1, "pic-middle", "aos-init", "aos-animate"], ["src", "../assets/imag/app-screen1.png", "alt", "WhealthyLife", 1, "img-fluid", 2, "max-width", "60%"], [1, "col-md-6", "col-12"], ["data-aos", "fade-left", 1, "info", "aos-init", "aos-animate"], [1, "appDownload"], ["href", "#", 1, "app"], ["src", "../assets/img/1_EiZrcN_DIapbZaxutxbZRA.png", "alt", "app"], ["src", "./../../../assets/img/app-store.e30d53a6.png", "alt", "app", 2, "margin-top", "3px"], ["id", "myModal", 1, "modal"], [1, "modal-dialog", "modal-lg", "fixed"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row", "ss"], [1, "col-sm-4"], [1, "pharmacyimg"], ["src", "../assets/img/pharmacy.gif", 2, "height", "300px"], [1, "col-sm-8"], [1, "lb"], [1, "pharmacy"], [1, "btn", "btn-danger", "btn-lg", "bbt"], [1, "labsimg"], ["src", "../assets/img/labs.gif", 2, "height", "100px"], [1, "labs"], [1, "card", "card-style1"], ["href", "/health-checkup-packages/diabetes-checkup?city=ahmedabad"], ["src", "../../../assets/img/Swati/BookHeathCheckup/Diabetes.png", "alt", "image", 1, "diabetes-img", 2, "height", "200px", "opacity", "0.8"], [1, "heading-style"], [1, "card-title", "font-change", 2, "margin-left", "10px"], ["src", "../../../assets/img/Swati/BookHeathCheckup/Cancer.png", "alt", "image", 1, "diabetes-img", 2, "height", "200px", "opacity", "0.8"], [1, "card-title", "font-change", 2, "text-align", "center"], ["src", "../../../assets/img/Swati/BookHeathCheckup/Skin.png", "alt", "image", 1, "diabetes-img", 2, "height", "200px", "opacity", "0.8"], ["src", "../../../assets/img/Swati/BookHeathCheckup/Kidney.png", "alt", "image", 1, "diabetes-img", 2, "height", "200px", "opacity", "0.8"], [1, "card", 2, "box-shadow", "5px 5px 5px darkgray !important", "border-radius", "5px !important", "background-color", "lightgray", "height", "200px", "margin", "0px 20px"], ["src", "../../../assets/img/Swati/BookHeathCheckup/SexualWellness.png", "alt", "image", 1, "diabetes-img", 2, "height", "200px", "opacity", "0.8"], [1, "card-title", "font-change"], ["src", "../../../assets/img/Swati/BookHeathCheckup/Bone.png", "alt", "image", 1, "diabetes-img", 2, "height", "200px", "opacity", "0.8"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "card", 2, "height", "auto", "width", "100%"], ["onerror", "this.src='../../../assets/imag/doctor.png'", 2, "height", "auto", "width", "250px", 3, "src"], [1, "specialityName"], ["class", "col-md-3", "data-aos", "fade-right", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", 1, "text-center", "mt-3", "mb-3", 2, "display", "flex", "justify-content", "center", "width", "100%"], [1, "btn-main", 3, "click"], ["data-aos", "fade-right", 1, "col-md-3"], [1, "checkup-visual-containers"], ["href", "#"], [1, "text-info"], ["alt", "checkup", "onerror", "this.src='../../../assets/img/Empty Cart.png'", 3, "src"], [1, "lab-slide"], [1, "main_title"], [1, "col-md-12"], [2, "text-align", "center !important", "margin-bottom", "0px !important"], [1, "swiper-container", "mb-3"], [1, "swiper-wrapper"], ["class", "col-3", "style", "margin: 10px", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-center"], ["carouselSlide", "", "style", "margin: 10px; border: 1px solid"], [1, "card"], ["alt", "logo-client", "onerror", "this.src='../../../assets/imag/Doctor-And-Patient.png'", 2, "height", "auto", 3, "src"], [1, "col-3", 2, "margin", "10px"], ["alt", "logo-client", "onerror", "this.src='../../../assets/imag/Doctor-And-Patient.png'", 2, "height", "250px", "width", "250px", "box-shadow", "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,\n                        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", 3, "src"], ["review", ""], [1, "row", "prev-next"], [1, "lhs", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-left"], ["fill-rule", "evenodd", "d", "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"], [1, "rhs", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-right"], ["fill-rule", "evenodd", "d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"], [1, "pr-2", "pl-2"], [1, "carousel-inner", "testimonialSlider"], ["class", "item carousel-item active", 4, "ngFor", "ngForOf"], [1, "item", "carousel-item", "active"], [1, "testimonial"], [1, "overview", "mt-5"], ["src", "../../../assets/images/unknownUser.png"], [1, "userName"], [1, "userDesignation"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h2", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Find Doctors Near You");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Select preferred doctor and time slot to book an in-clinic or video consultation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Find Doctor Near ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h2", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Doctors Online Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Tell us your health concern and we will assign you a top doctor in 60 secs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Start Consulting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h2", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Check Online Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " get the online lab and medical report anywhere at any time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Get Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h2", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Track Your Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Enter tracking number to track Delhivery shipments and get delivery status online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Track Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "section", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Consult top doctors online for any health concern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "View Specialities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Period doubts or Pregnancy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Consult Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Cold, Cough or Fever");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Consult Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Depression or Anxiety");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Consult Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Child not feeling well");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Consult Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "section", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Book an appointment for an in-clinic consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_189_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](194); return _r81.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_191_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](194); return _r81.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "owl-carousel-o", 78, 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](195, HomeComponent_ng_template_195_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](196, HomeComponent_ng_template_196_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](197, HomeComponent_ng_template_197_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](198, HomeComponent_ng_template_198_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](199, HomeComponent_ng_template_199_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, HomeComponent_ng_template_200_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](201, HomeComponent_ng_template_201_Template, 6, 0, "ng-template", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "section", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "h2", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, " All your medical records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "In one secure app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "256-bit end to end encryption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Records are accessible only by you");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Access your records across 8000+ centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Find out more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "section", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Top Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_230_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](235); return _r89.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_232_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124); const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](235); return _r89.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "owl-carousel-o", 78, 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](236, HomeComponent_236_Template, 1, 0, undefined, 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "section", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " Leading Healthcare Providers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Trust us for Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Get seen by 25M+ patients on WhealthyLife");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "The most advanced software for clinics and hospitals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "State of the art business analytics for enterprises");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "section", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "h2", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, " Top deals and offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Hand-picked deals for a healthier you");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](266, HomeComponent_div_266_Template, 6, 5, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](267, HomeComponent_div_267_Template, 6, 5, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](268, HomeComponent_section_268_Template, 15, 2, "section", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](269, HomeComponent_section_269_Template, 15, 1, "section", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "section", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Download the WhealthyLife app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Book appointments and lab tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Order medicines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Consult doctors online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Set medicine reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Store health records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Read health tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "ul", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "h4", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Didn't find what you are looking for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "button", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Get up to 18% off on allopathy medicines.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " Also, earn up to \u20B9500 with Paytm, \u20B9300 Amazon Pay & more* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "button", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Order Medicines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "span", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Flat 20% off on lab tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, " and health checkups* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "button", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Lab Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP\");\n@charset \"UTF-8\";\nmain[_ngcontent-%COMP%] {\n  background-color: white;\n  font-family: \"Noto Sans JP\", sans-serif;\n}\n.in-clinic[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 60px;\n  font-weight: bold;\n}\n.specialities[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n.specialities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n.specialities[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 60px;\n  font-weight: bold;\n}\n.specialities[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.specialities[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-weight: bold;\n}\n.specialities[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 2rem;\n  width: 213px;\n  height: 202px;\n  border-radius: 50%;\n  background-color: rgba(104, 251, 180, 0.15);\n}\n.truncate[_ngcontent-%COMP%] {\n  display: block;\n  display: -webkit-box;\n  max-width: 200px;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.home-package[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 4rem !important;\n  margin-bottom: 4rem !important;\n}\n.home-package[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  padding: 0% !important;\n}\n.home-package[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.home-package[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.home-package[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  margin: 0 !important;\n}\n.home-package[_ngcontent-%COMP%]   .borde[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #ebebeb;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.card-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n}\n.pharmacyimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px !important;\n  width: 100% !important;\n}\n.btnn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  background-color: #d81730;\n}\n.flecs1[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  display: flex;\n  justify-content: center;\n}\n.flecs2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.marTop-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.opt[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n}\n.head1[_ngcontent-%COMP%] {\n  z-index: 999;\n  color: #ffffff;\n  font-size: 45px;\n  font-weight: 500;\n}\ninput#exampleInputEmail1[_ngcontent-%COMP%] {\n  height: 45px;\n  border-radius: 5px 0px 0px 5px;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.sub-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.mar-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mar-50[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.flec1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 0% 30%;\n  justify-content: center;\n}\n.wid-80[_ngcontent-%COMP%] {\n  width: 75% !important;\n  height: 30px;\n}\n.wid-25[_ngcontent-%COMP%] {\n  width: 25% !important;\n  height: 30px;\n}\n.changes12[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-bottom: 30px;\n  flex-grow: 1;\n}\n.hov2[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\n  flex-grow: 2;\n  display: flex;\n  flex-grow: 2;\n  transition: ease-in;\n  padding: -30px !important;\n}\n@media screen and (max-width: 767.98px) {\n  .wid-80[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 100px !important;\n  }\n\n  .adj-mar[_ngcontent-%COMP%] {\n    border-radius: 5px !important;\n    margin-bottom: 15px !important;\n    margin-top: -30px !important;\n  }\n\n  .wid-25[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: flex;\n    justify-content: center;\n  }\n\n  .flec1[_ngcontent-%COMP%] {\n    display: block;\n    margin: 10%;\n  }\n\n  .head1[_ngcontent-%COMP%] {\n    z-index: 999;\n    color: #ffffff;\n    font-size: 30px;\n    font-weight: 500;\n    line-height: 30px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n  }\n}\n.ng-autocomplete[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  display: table;\n  margin: 0 auto;\n}\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.adj[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  z-index: 2;\n}\n.adj2[_ngcontent-%COMP%] {\n  height: 371px !important;\n}\n#custom-search-input[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\n  width: 77.7%;\n  padding-left: inherit;\n}\n#custom-search-input[_ngcontent-%COMP%]   .btn_search[_ngcontent-%COMP%] {\n  margin-top: 11px;\n}\n.labsimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px !important;\n  width: 100% !important;\n}\n.modal-content[_ngcontent-%COMP%] {\n  height: 85%;\n}\n.pharmacy[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 22px;\n}\n.labs[_ngcontent-%COMP%] {\n  color: red;\n}\n.lb[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: black !important;\n  font-weight: 800;\n}\nhr[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n.bbt[_ngcontent-%COMP%] {\n  width: 170px;\n  margin-left: 30%;\n  margin-bottom: 9px;\n  margin-top: 35px;\n  height: 56px;\n  float: right;\n  margin-right: 10px;\n  font-size: 18px;\n}\n#custom-search-input[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n#custom-search-input[_ngcontent-%COMP%] {\n  margin: 0;\n  top: 0 !important;\n  padding: 0;\n  width: 911px;\n  margin: auto;\n  position: relative;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.search-deivde[_ngcontent-%COMP%] {\n  border-left: 3px solid !important;\n  padding-left: 10px;\n}\n.btn-main[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px 30px !important;\n  background-color: #45a29e;\n  cursor: pointer;\n  color: white !important;\n  text-align: center;\n  line-height: 1.5;\n  font-size: 16px;\n  font-weight: 400;\n  display: inline-block;\n  z-index: 1;\n  position: ab;\n}\n.categories[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  cursor: pointer;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0880c4;\n  margin: 0 3px;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #000;\n  margin: 0 3px;\n}\n.fixed[_ngcontent-%COMP%] {\n  top: 13%;\n  width: 95%;\n}\n@media (max-width: 786px) {\n  .lb[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .pharmacy[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .pharmacyimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 98px !important;\n    width: 76% !important;\n  }\n\n  .labsimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 93px !important;\n    width: 76% !important;\n  }\n\n  .bbt[_ngcontent-%COMP%] {\n    width: 152px;\n    margin-bottom: 9px;\n    margin-top: 17px;\n    height: 44px;\n    font-size: 15px;\n    float: right;\n    margin-right: 10px;\n  }\n}\n@media (max-width: 575px) {\n  .pharmacyimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 98px !important;\n    width: 48% !important;\n    margin: 0px 22%;\n  }\n\n  .labsimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 93px !important;\n    width: 48% !important;\n    margin: 0px 22%;\n  }\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1.5rem -1rem -1rem auto;\n  font-size: 29px;\n}\n.lhs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54%;\n  z-index: 999;\n  left: 16px;\n  font-size: 10px;\n}\n.rhs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 54%;\n  z-index: 999;\n  right: 16px;\n  font-size: 10px;\n}\n.categories[_ngcontent-%COMP%]   .prev-next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f1f3ff;\n  margin: 0 3px;\n}\n@media (max-width: 768px) {\n  .lab-slide[_ngcontent-%COMP%]   .main_title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-bottom: 5px;\n    font-size: 22px;\n    font-weight: 300;\n  }\n}\n.app-download-sec[_ngcontent-%COMP%]   .pic-middle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 151px;\n}\n.app-download-sec[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n.testimonial[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.h2-size[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.container.margin_120_95[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.deal-offer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.deal-offer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.element[_ngcontent-%COMP%]:before {\n  content: \"\uF000\";\n  font-family: Camphor, verdana;\n}\ndiv#myCarousel[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.item.carousel-item.active.ng-star-inserted[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Camphor, Verdana !important;\n  font-size: 15px;\n}\np.testimonial[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  font-family: Camphor, Verdana !important;\n}\n.title-left[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.h2txt[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: left;\n  margin-right: 45px;\n}\n.slick-list[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n}\nsvg.bi.bi-arrow-right-circle-fill[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\nsvg.bi.bi-arrow-left-circle-fill[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.fever-img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  max-width: 100%;\n}\n.diabetes-img[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  max-width: 100%;\n}\n.diabetes-div[_ngcontent-%COMP%] {\n  outline: none;\n  width: 197px;\n}\n.div[_ngcontent-%COMP%] {\n  width: 1576px;\n  opacity: 1;\n  transform: translate3d(0px, 0px, 0px);\n  display: flex !important;\n  flex-direction: row !important;\n}\n.dis[_ngcontent-%COMP%] {\n  display: block;\n}\n.outline[_ngcontent-%COMP%] {\n  outline: none;\n  width: 197px;\n}\n.dia-div[_ngcontent-%COMP%] {\n  width: 120px;\n  margin: 0px auto;\n}\n.c-landingpage-card--title[_ngcontent-%COMP%], .u-padtb--std[_ngcontent-%COMP%], .u-text--center[_ngcontent-%COMP%], .u-font-bold[_ngcontent-%COMP%] {\n  margin: 26px 71px !important;\n}\n@media only screen and (max-width: 600px) {\n  div[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column !important;\n  }\n\n  .slider-arroy[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.slider-arroy[_ngcontent-%COMP%] {\n  color: #ce2224;\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  z-index: 999;\n  margin: 0px;\n  width: 97%;\n  top: 25%;\n}\n.sliderr[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150;\n  display: flex !important;\n  justify-content: center !important;\n}\n.font-change[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n}\n.div-title[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 150px;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.card-title11[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  width: 100%;\n}\n.card-style1[_ngcontent-%COMP%] {\n  box-shadow: 5px 5px 5px darkgray !important;\n  border-radius: 5px !important;\n  position: relative;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightgray;\n  margin: 0px 20px;\n}\n.card-style2[_ngcontent-%COMP%] {\n  box-shadow: 5px 5px 5px darkgray !important;\n  border-radius: 5px !important;\n  height: 200px;\n  background-color: lightgray;\n  margin: 0px 20px;\n}\n.heading-style[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  top: 150px;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLG9FQUFBO0FDQVIsZ0JBQWdCO0FEQ2hCO0VBQ0UsdUJBQUE7RUFDQSx1Q0FBQTtBQ0VGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURERTtFQUNFLGlCQUFBO0FDR0o7QURERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR0o7QURERTtFQVlFLGtCQUFBO0FDUko7QURISTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNLTjtBREhJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0tOO0FEQUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR0Y7QUREQTtFQUNFLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSw4QkFBQTtBQ0dGO0FEREU7RUFDRSxzQkFBQTtBQ0dKO0FERkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0lOO0FERkk7RUFDRSxnQkFBQTtBQ0lOO0FERkk7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0FDSU47QURERTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDR0o7QURBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDR0Y7QURBRTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7QUNHSjtBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBRjtBRElBO0VBQ0UsZ0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FES0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRkY7QURTQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNQRjtBRFVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsK0JBQUE7RUNQRjs7RURVQTtJQUVFLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSw0QkFBQTtFQ1JGOztFRFdBO0lBQ0Usc0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7RUNSRjs7RURXQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VDUkY7O0VEV0E7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUNSRjtBQUNGO0FEV0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1RGO0FEZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNiRjtBRGlCQTtFQUNFLFdBQUE7QUNkRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUN6QkY7QUQ0QkE7RUFDRSx3QkFBQTtBQ3pCRjtBRDJCQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQ3hCRjtBRDJCQTtFQUNFLGdCQUFBO0FDeEJGO0FENEJFO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtBQ3pCSjtBRDZCQTtFQUNFLFdBQUE7QUMxQkY7QUQ2QkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQzFCRjtBRDZCQTtFQUNFLFVBQUE7QUMxQkY7QUQ2QkE7RUFDRSxlQUFBO0FDMUJGO0FENkJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDMUJGO0FENkJBO0VBQ0UsMEJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQzFCRjtBRGtDQTtFQUVFLHFCQUFBO0FDaENGO0FEbUNBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRG1DQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDaENGO0FEbUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2hDRjtBRG1DQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDaENGO0FEa0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUMvQkY7QURrQ0E7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQy9CRjtBRGtDQTtFQUNFO0lBQ0UsZUFBQTtFQy9CRjs7RURpQ0E7SUFDRSxlQUFBO0VDOUJGOztFRGdDQTtJQUNFLHVCQUFBO0lBQ0EscUJBQUE7RUM3QkY7O0VEK0JBO0lBQ0UsdUJBQUE7SUFDQSxxQkFBQTtFQzVCRjs7RUQ4QkE7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDM0JGO0FBQ0Y7QUQ4QkE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VDNUJGOztFRDhCQTtJQUNFLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VDM0JGO0FBQ0Y7QUQ4QkE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQzVCRjtBRCtCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQzVCRjtBRCtCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQzVCRjtBRCtCQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDNUJGO0FEK0JBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDNUJGO0FBQ0Y7QUQrQkE7RUFDRSxnQkFBQTtBQzdCRjtBRGdDQTtFQUNFLGVBQUE7QUM3QkY7QURnQ0E7RUFDRSxnQkFBQTtBQzdCRjtBRGdDQTtFQUNFLGlCQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQzdCRjtBRGdDQTtFQUNFLGtCQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsZ0JBQUE7QUM3QkY7QURnQ0E7RUFDRSxlQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsdUJBQUE7QUM3QkY7QURnQ0E7RUFDRSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQzdCRjtBRGdDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUM3QkY7QURnQ0E7RUFDRSxrQkFBQTtBQzdCRjtBRGdDQTtFQUNFLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzdCRjtBRCtCQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDNUJGO0FEK0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUM1QkY7QUQ4QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzNCRjtBRDZCQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzFCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDekJGO0FEMkJBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUN4QkY7QUQwQkE7RUFDRSxjQUFBO0FDdkJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUN0QkY7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR1QkE7Ozs7RUFJRSw0QkFBQTtBQ3BCRjtBRHVCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlDQUFBO0VDcEJGOztFRHNCQTtJQUNFLHdCQUFBO0VDbkJGO0FBQ0Y7QURzQkE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDcEJGO0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtBQ3BCRjtBRHNCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ25CRjtBRHNCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ25CRjtBRHNCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNuQkY7QURzQkE7RUFDRSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBR0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEeUJBO0VBQ0UsMkNBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFNQSwyQkFBQTtFQUNBLGdCQUFBO0FDNUJGO0FEZ0NBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDN0JGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQXCIpO1xyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uaW4tY2xpbmljIHtcclxuICAuaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4uc3BlY2lhbGl0aWVzIHtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICB9XHJcbiAgLmhlYWQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRhdGEge1xyXG4gICAgaDMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgd2lkdGg6IDIxM3B4O1xyXG4gICAgICBoZWlnaHQ6IDIwMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyNTEsIDE4MCwgMC4xNSk7XHJcbiAgICB9XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi50cnVuY2F0ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5ob21lLXBhY2thZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBtYXJnaW4tdG9wOiA0cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAuY29sLW1kLTYge1xyXG4gICAgcGFkZGluZzogMCUgIWltcG9ydGFudDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgaDIgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3JkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ViZWJlYjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG4uY2FyZC1ob3Jpem9udGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5waGFybWFjeWltZyB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRubiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIC8vIGJvcmRlcjoxcHggc29saWQgI2Q4MTczMDtcclxuICAvLyBib3JkZXItcmFkaXVzOjBweCA1cHggNXB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgxNzMwO1xyXG59XHJcblxyXG4uZmxlY3MxIHtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxlY3MyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC8vIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hclRvcC0zMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm9wdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhlYWQxIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlucHV0I2V4YW1wbGVJbnB1dEVtYWlsMSB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFyLTMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIC8vICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYXItNTAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxlYzEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwJSAzMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi53aWQtODAge1xyXG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi53aWQtMjUge1xyXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jaGFuZ2VzMTIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi8vIC5jaGFuZ2VzMTI6aG92ZXJ7XHJcbi8vICAgZmxleC1ncm93OiAzO1xyXG4vLyB9XHJcblxyXG4uaG92MiA+IGltZzpob3ZlciB7XHJcbiAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW47XHJcbiAgcGFkZGluZzogLTMwcHggIWltcG9ydGFudCA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLndpZC04MCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWRqLW1hciB7XHJcbiAgICAvLyBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAud2lkLTI1IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZmxlYzEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuICB9XHJcblxyXG4gIC5oZWFkMSB7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5uZy1hdXRvY29tcGxldGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8vIC5jdXN0b20tc2VhcmNoLWlucHV0W19uZ2NvbnRlbnQtZ2ZkLWMxMjJdIGlucHV0W3R5cGU9c3VibWl0XVtfbmdjb250ZW50LWdmZC1jMTIyXSB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2ZmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLmV4YW1wbGUtZm9ybSB7XHJcbi8vICAgbWluLXdpZHRoOiA5MHB4O1xyXG4vLyAgIG1heC13aWR0aDogNTAwcHg7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbi8vIH1cclxuXHJcbi5hZGoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmFkajIge1xyXG4gIGhlaWdodDogMzcxcHggIWltcG9ydGFudDtcclxufVxyXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuc2VhcmNoLXF1ZXJ5IHtcclxuICB3aWR0aDogNzcuNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiBpbmhlcml0O1xyXG59XHJcblxyXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuYnRuX3NlYXJjaCB7XHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxufVxyXG5cclxuLmxhYnNpbWcge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4ucGhhcm1hY3kge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubGFicyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmxiIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uYmJ0IHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWlucHV0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDkxMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8vIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgdG9wOiA0MXB4O1xyXG4vLyB9XHJcblxyXG5hIHtcclxuICAvLyBjb2xvcjogIzMzN2FiNztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZGVpdmRlIHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLW1haW4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMjllO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWI7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIGgyIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMgLnByZXYtbmV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzBweDtcclxuICByaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIC5wcmV2LW5leHQgaSB7XHJcbiAgY29sb3I6ICMwODgwYzQ7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG4uY2F0ZWdvcmllcyAucHJldi1uZXh0IGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbjogMCAzcHg7XHJcbn1cclxuXHJcbi5maXhlZCB7XHJcbiAgdG9wOiAxMyU7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7XHJcbiAgLmxiIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLnBoYXJtYWN5IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLnBoYXJtYWN5aW1nIGltZyB7XHJcbiAgICBoZWlnaHQ6IDk4cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxhYnNpbWcgaW1nIHtcclxuICAgIGhlaWdodDogOTNweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmJ0IHtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAucGhhcm1hY3lpbWcgaW1nIHtcclxuICAgIGhlaWdodDogOThweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQ4JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggMjIlO1xyXG4gIH1cclxuICAubGFic2ltZyBpbWcge1xyXG4gICAgaGVpZ2h0OiA5M3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNDglICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAyMiU7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogLTEuNXJlbSAtMXJlbSAtMXJlbSBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMjlweDtcclxufVxyXG5cclxuLmxocyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTQlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnJocyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTQlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICByaWdodDogMTZweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIC5wcmV2LW5leHQgaSB7XHJcbiAgY29sb3I6ICNmMWYzZmY7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxhYi1zbGlkZSAubWFpbl90aXRsZSBoMiBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFwcC1kb3dubG9hZC1zZWMgLnBpYy1taWRkbGUgaW1nIHtcclxuICBtYXgtd2lkdGg6IDE1MXB4O1xyXG59XHJcblxyXG4uYXBwLWRvd25sb2FkLXNlYyAuaW5mbyBoMiB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwgaDEge1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbn1cclxuXHJcbi5oMi1zaXplIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5tYXJnaW5fMTIwXzk1IHtcclxuICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVhbC1vZmZlciBoMSB7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuLmRlYWwtb2ZmZXIgaDQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmVsZW1lbnQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjAwMFwiO1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1waG9yLCB2ZXJkYW5hO1xyXG59XHJcblxyXG5kaXYjbXlDYXJvdXNlbCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLmNhcm91c2VsLWl0ZW0uYWN0aXZlLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogQ2FtcGhvciwgVmVyZGFuYSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxucC50ZXN0aW1vbmlhbCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LWZhbWlseTogQ2FtcGhvciwgVmVyZGFuYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUtbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaDJ0eHQge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogNDVweDtcclxufVxyXG4uc2xpY2stbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5iaS5iaS1hcnJvdy1yaWdodC1jaXJjbGUtZmlsbCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbnN2Zy5iaS5iaS1hcnJvdy1sZWZ0LWNpcmNsZS1maWxsIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mZXZlci1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpYWJldGVzLWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uZGlhYmV0ZXMtZGl2IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxOTdweDtcclxufVxyXG4uZGl2IHtcclxuICB3aWR0aDogMTU3NnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5vdXRsaW5lIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxOTdweDtcclxufVxyXG4uZGlhLWRpdiB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuLmMtbGFuZGluZ3BhZ2UtY2FyZC0tdGl0bGUsXHJcbi51LXBhZHRiLS1zdGQsXHJcbi51LXRleHQtLWNlbnRlcixcclxuLnUtZm9udC1ib2xkIHtcclxuICBtYXJnaW46IDI2cHggNzFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zbGlkZXItYXJyb3kge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlci1hcnJveSB7XHJcbiAgY29sb3I6ICNjZTIyMjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBtYXJnaW46IDBweDtcclxuICB3aWR0aDogOTclO1xyXG4gIHRvcDogMjUlO1xyXG59XHJcblxyXG4uc2xpZGVyciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwO1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5mb250LWNoYW5nZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kaXYtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRvcDogMTUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUxMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLXN0eWxlMSB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggZGFya2dyYXkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBtYXJnaW46IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBtYXJnaW46IDBweCAyMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmNhcmQtc3R5bGUyIHtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBkYXJrZ3JheSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIG1hcmdpbjogMzBweDtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZy1zdHlsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdG9wOiAxNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlBcIik7XG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBKUFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW4tY2xpbmljIC5oZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zcGVjaWFsaXRpZXMge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuLnNwZWNpYWxpdGllcyBwIHtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4uc3BlY2lhbGl0aWVzIC5oZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3BlY2lhbGl0aWVzIC5kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNwZWNpYWxpdGllcyAuZGF0YSBoMyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3BlY2lhbGl0aWVzIC5kYXRhIGltZyB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHdpZHRoOiAyMTNweDtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMjUxLCAxODAsIDAuMTUpO1xufVxuXG4udHJ1bmNhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ob21lLXBhY2thZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNHJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA0cmVtICFpbXBvcnRhbnQ7XG59XG4uaG9tZS1wYWNrYWdlIC5jb2wtbWQtNiB7XG4gIHBhZGRpbmc6IDAlICFpbXBvcnRhbnQ7XG59XG4uaG9tZS1wYWNrYWdlIC5jb2wtbWQtNiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5ob21lLXBhY2thZ2UgLmNvbC1tZC02IGgyIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmhvbWUtcGFja2FnZSAuY29sLW1kLTYgLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLmhvbWUtcGFja2FnZSAuYm9yZGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWJlYmViO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZC1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5waGFybWFjeWltZyBpbWcge1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5idG5uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MTczMDtcbn1cblxuLmZsZWNzMSB7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZWNzMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5tYXJUb3AtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ub3B0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5oZWFkMSB7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW5wdXQjZXhhbXBsZUlucHV0RW1haWwxIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hci0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tYXItNTAge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZsZWMxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCUgMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndpZC04MCB7XG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ud2lkLTI1IHtcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jaGFuZ2VzMTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhvdjIgPiBpbWc6aG92ZXIge1xuICBmbGV4LWdyb3c6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbjtcbiAgcGFkZGluZzogLTMwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLndpZC04MCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hZGotbWFyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC53aWQtMjUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5mbGVjMSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMCU7XG4gIH1cblxuICAuaGVhZDEge1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLm5nLWF1dG9jb21wbGV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRqIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5hZGoyIHtcbiAgaGVpZ2h0OiAzNzFweCAhaW1wb3J0YW50O1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCAuc2VhcmNoLXF1ZXJ5IHtcbiAgd2lkdGg6IDc3LjclO1xuICBwYWRkaW5nLWxlZnQ6IGluaGVyaXQ7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IC5idG5fc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cblxuLmxhYnNpbWcgaW1nIHtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGhlaWdodDogODUlO1xufVxuXG4ucGhhcm1hY3kge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5sYWJzIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmxiIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmJidCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNjdXN0b20tc2VhcmNoLWlucHV0IGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG4jY3VzdG9tLXNlYXJjaC1pbnB1dCB7XG4gIG1hcmdpbjogMDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA5MTFweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zZWFyY2gtZGVpdmRlIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5idG4tbWFpbiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEyOWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYjtcbn1cblxuLmNhdGVnb3JpZXMgaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2F0ZWdvcmllcyAucHJldi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yaWVzIC5wcmV2LW5leHQgaSB7XG4gIGNvbG9yOiAjMDg4MGM0O1xuICBtYXJnaW46IDAgM3B4O1xufVxuXG4uY2F0ZWdvcmllcyAucHJldi1uZXh0IGk6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwIDNweDtcbn1cblxuLmZpeGVkIHtcbiAgdG9wOiAxMyU7XG4gIHdpZHRoOiA5NSU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODZweCkge1xuICAubGIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5waGFybWFjeSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLnBoYXJtYWN5aW1nIGltZyB7XG4gICAgaGVpZ2h0OiA5OHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxhYnNpbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDkzcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmJ0IHtcbiAgICB3aWR0aDogMTUycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLnBoYXJtYWN5aW1nIGltZyB7XG4gICAgaGVpZ2h0OiA5OHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ4JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4IDIyJTtcbiAgfVxuXG4gIC5sYWJzaW1nIGltZyB7XG4gICAgaGVpZ2h0OiA5M3B4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ4JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4IDIyJTtcbiAgfVxufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbjogLTEuNXJlbSAtMXJlbSAtMXJlbSBhdXRvO1xuICBmb250LXNpemU6IDI5cHg7XG59XG5cbi5saHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTQlO1xuICB6LWluZGV4OiA5OTk7XG4gIGxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnJocyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNhdGVnb3JpZXMgLnByZXYtbmV4dCBpIHtcbiAgY29sb3I6ICNmMWYzZmY7XG4gIG1hcmdpbjogMCAzcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGFiLXNsaWRlIC5tYWluX3RpdGxlIGgyIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG4uYXBwLWRvd25sb2FkLXNlYyAucGljLW1pZGRsZSBpbWcge1xuICBtYXgtd2lkdGg6IDE1MXB4O1xufVxuXG4uYXBwLWRvd25sb2FkLXNlYyAuaW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLnRlc3RpbW9uaWFsIGgxIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cblxuLmgyLXNpemUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbnRhaW5lci5tYXJnaW5fMTIwXzk1IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuXG4uY29udGFpbmVyIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVhbC1vZmZlciBoMSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi5kZWFsLW9mZmVyIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZWxlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AgFwiO1xuICBmb250LWZhbWlseTogQ2FtcGhvciwgdmVyZGFuYTtcbn1cblxuZGl2I215Q2Fyb3VzZWwge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0uY2Fyb3VzZWwtaXRlbS5hY3RpdmUubmctc3Rhci1pbnNlcnRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IENhbXBob3IsIFZlcmRhbmEgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5wLnRlc3RpbW9uaWFsIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1mYW1pbHk6IENhbXBob3IsIFZlcmRhbmEgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oMnR4dCB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xufVxuXG4uc2xpY2stbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuc3ZnLmJpLmJpLWFycm93LXJpZ2h0LWNpcmNsZS1maWxsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuc3ZnLmJpLmJpLWFycm93LWxlZnQtY2lyY2xlLWZpbGwge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZmV2ZXItaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZGlhYmV0ZXMtaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZGlhYmV0ZXMtZGl2IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDE5N3B4O1xufVxuXG4uZGl2IHtcbiAgd2lkdGg6IDE1NzZweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm91dGxpbmUge1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTk3cHg7XG59XG5cbi5kaWEtZGl2IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYy1sYW5kaW5ncGFnZS1jYXJkLS10aXRsZSxcbi51LXBhZHRiLS1zdGQsXG4udS10ZXh0LS1jZW50ZXIsXG4udS1mb250LWJvbGQge1xuICBtYXJnaW46IDI2cHggNzFweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2xpZGVyLWFycm95IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zbGlkZXItYXJyb3kge1xuICBjb2xvcjogI2NlMjIyNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA5NyU7XG4gIHRvcDogMjUlO1xufVxuXG4uc2xpZGVyciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTA7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtY2hhbmdlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IDE1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXRpdGxlMTEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1zdHlsZTEge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBkYXJrZ3JheSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4uY2FyZC1zdHlsZTIge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBkYXJrZ3JheSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4uaGVhZGluZy1zdHlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgdG9wOiAxNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.scss"],
            }]
    }], function () { return [{ type: _services_speciality_service__WEBPACK_IMPORTED_MODULE_3__["SpecialityService"] }, { type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: _services_customer_review_service__WEBPACK_IMPORTED_MODULE_5__["CustomerReviewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");








class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map
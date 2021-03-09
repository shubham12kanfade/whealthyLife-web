(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["health-feed-health-feed-module"],{

/***/ "./src/app/modules/doctor-dashbord/health-feed/health-feed-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/health-feed/health-feed-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: HealthFeedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthFeedRoutingModule", function() { return HealthFeedRoutingModule; });
/* harmony import */ var _health_feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-feed.component */ "./src/app/modules/doctor-dashbord/health-feed/health-feed.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '', component: _health_feed_component__WEBPACK_IMPORTED_MODULE_0__["HealthFeedComponent"]
    }
];
class HealthFeedRoutingModule {
}
HealthFeedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HealthFeedRoutingModule });
HealthFeedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HealthFeedRoutingModule_Factory(t) { return new (t || HealthFeedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HealthFeedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HealthFeedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/health-feed/health-feed.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/health-feed/health-feed.component.ts ***!
  \******************************************************************************/
/*! exports provided: HealthFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthFeedComponent", function() { return HealthFeedComponent; });
/* harmony import */ var _start_free_start_free_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-free/start-free.component */ "./src/app/modules/doctor-dashbord/health-feed/start-free/start-free.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");






function HealthFeedComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "WhealthyLife Health Feed is a wonderful platform for doctors to connect to their patients ,current or future. I have personally started writing on health feed and the response of my patients who look up my WhealthyLife profile is very encouraging.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dr. Sita Bhatt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Homeopath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthFeedComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "WhealthyLife Health Feed is a wonderful platform for doctors to connect As a Clinical Psychologist, the biggest hurdle one faces is of stigma and ignorance (related to mental health) and creating awareness is the first step to overcoming that. Definitely a thumbs up for the ease of use and delivery of useful information on one platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dr. Pallavi Tomar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Clinical Psychologist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HealthFeedComponent {
    constructor(dialog) {
        this.dialog = dialog;
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
    }
    ngOnInit() {
    }
    startfreemodalopen() {
        const dialogRef = this.dialog.open(_start_free_start_free_component__WEBPACK_IMPORTED_MODULE_0__["StartFreeComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
HealthFeedComponent.ɵfac = function HealthFeedComponent_Factory(t) { return new (t || HealthFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
HealthFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HealthFeedComponent, selectors: [["app-health-feed"]], decls: 69, vars: 1, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "text-center", "why-title"], [1, "card-body", "mt-0", "card-b"], [1, "row", "active-div"], [1, "col-sm-12"], [1, "corosal-opt", "text-center"], [1, "hd-title"], [1, "mt-4", "p-text"], ["mat-raised-button", "", 1, "submit-btn-mat", "mt-5", 3, "click"], [1, "ng-scope"], [1, "row"], [1, "col-sm-12", 2, "padding", "50px"], [1, "row", 2, "padding-right", "25px", "padding-left", "25px", "margin-right", "auto", "margin-left", "auto"], [1, "col-sm-4", "img-article"], ["src", "../../../../assets/img/invite-connect.png", "alt", "Generic placeholder image", "width", "140", "height", "140", 1, "img-circle"], [1, "why-head-main"], ["src", "../../../../assets/img/invite-visibility.png", "alt", "Generic placeholder image", 1, "img-circle"], ["src", "../../../../assets/img/invite-bulb.png", "alt", "Generic placeholder image", 1, "img-circle"], [1, "featurette-divider"], [1, "why-title", "mt-5", "mb-5"], [1, "carousel-caption-custome", "center-block", 2, "padding-left", "20%", "padding-right", "20%"], [1, "carousel-inner", 3, "options"], ["review", ""], ["carouselSlide", ""], [1, "row", "prev-next"], [1, "lhs", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-left", "fa-3x"], [1, "rhs", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right", "fa-3x"], [1, "footer-text"], [1, "head-Our"], [1, "col-sm-5", "mt-4", "text-center", "d-flex", "justify-content-center"], [1, "row", "mt-6"], [1, "col-sm-6", "mt-3"], [1, "stats-right"], [1, "stats-spec-right", "mt-3"], [1, "carousel-caption-custome", "carousel-inner"], [1, "ng-binding", "ptext-m"], [1, "mtp"], [1, "doc-name", "text-center"], [1, "spec"], [1, "spec", "text-center"]], template: function HealthFeedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1079 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "WhealthyLife");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Share your expertise. Help millions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Share health articles and tips with millions of users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthFeedComponent_Template_button_click_13_listener() { return ctx.startfreemodalopen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "It's free, start now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Why use Health Feed?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Express Yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Publish health articles and tips that are read by millions of users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Use Health Feed to connect with users looking for relevant information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Inspire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Opportunity to inspire people's lifestyle and help them live healthier and longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Join thousands of doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "owl-carousel-o", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, HealthFeedComponent_ng_template_46_Template, 9, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, HealthFeedComponent_ng_template_47_Template, 9, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthFeedComponent_Template_div_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1079); const _r1076 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45); return _r1076.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthFeedComponent_Template_div_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1079); const _r1076 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45); return _r1076.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Our Impact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "1500+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Doctors writing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "1+million");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Monthly reade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselSlideDirective"]], styles: [".hd-title[_ngcontent-%COMP%] {\n  text-shadow: none;\n  font-size: 40px;\n  letter-spacing: -1px;\n  line-height: 50px;\n  font-weight: 600;\n  color: white;\n  text-align: center;\n}\n\n.active-div[_ngcontent-%COMP%] {\n  background-color: #28328D;\n  height: 400px;\n}\n\n.submit-btn-mat[_ngcontent-%COMP%] {\n  background-color: #ffa000 !important;\n  width: 200px;\n  font-weight: 500;\n  padding: 10px;\n  font-size: 18px;\n  line-height: 24px;\n  color: #ffffff !important;\n}\n\n.p-text[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: white;\n  text-align: center;\n  font-size: 25px;\n}\n\n.corosal-opt[_ngcontent-%COMP%] {\n  padding: 8%;\n}\n\n.why-title[_ngcontent-%COMP%] {\n  text-shadow: none;\n  font-size: 40px;\n  letter-spacing: -1px;\n  line-height: 50px;\n  font-weight: 500;\n  color: black;\n  text-align: center !important;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  text-align: center;\n}\n\n.why-head-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  color: black;\n  padding: 20px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n  border-color: #e0e0e5;\n}\n\n.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  max-width: 100%;\n}\n\n.lhs[_ngcontent-%COMP%] {\n  left: 0px;\n  z-index: 100037;\n  position: absolute;\n  right: 0;\n  font-size: 9px;\n  margin-top: -130px;\n  margin-left: 144px;\n}\n\n.rhs[_ngcontent-%COMP%] {\n  z-index: 100037;\n  position: absolute;\n  right: 0;\n  font-size: 9px;\n  margin-top: -130px;\n  margin-right: 144px;\n}\n\n.testimonial[_ngcontent-%COMP%]   .carousel-caption-custome[_ngcontent-%COMP%]   .ptext-m[_ngcontent-%COMP%] {\n  color: #414146;\n  align-content: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  line-height: 1.6;\n  padding-left: 7%;\n  padding-right: 7%;\n  display: block;\n  text-align: center !important;\n  font-size: 18px !important;\n  width: 100% !important;\n}\n\n@media (max-width: 979px) and (min-width: 768px) {\n  .container[_ngcontent-%COMP%], .navbar-static-top[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .navbar-fixed-top[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .navbar-fixed-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    width: 724px;\n  }\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  background-color: #28328D;\n  width: 100%;\n  padding: 70px;\n  color: #ffffff;\n  margin-top: 80px;\n  text-align: -webkit-center;\n  font-size: 45px;\n}\n\n.text-f[_ngcontent-%COMP%] {\n  font-size: 45px;\n  color: white;\n  font-weight: 600;\n}\n\n.footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  font-size: 48px;\n}\n\n.stats-spec-right[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 400;\n  float: right;\n  margin-right: 35px;\n}\n\n.img-article[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.head-Our[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 46px;\n  font-weight: 600;\n  color: white;\n}\n\n.card-b[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.doc-name[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  font-size: 20px;\n}\n\n.ng-binding[_ngcontent-%COMP%]   .ptext-m[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  color: black !important;\n  text-align: center !important;\n  width: 100% !important;\n}\n\n.mtp[_ngcontent-%COMP%] {\n  font-size: 19px !important;\n  color: black !important;\n  text-align: center !important;\n  width: 100% !important;\n}\n\n@media only screen and (max-width: 600px) {\n  .rhs[_ngcontent-pcj-c230][_ngcontent-%COMP%] {\n    z-index: 100037;\n    position: absolute;\n    right: 0;\n    font-size: 9px;\n    margin-top: -183px;\n  }\n\n  .lhs[_ngcontent-%COMP%] {\n    left: 0px;\n    z-index: 100037;\n    position: absolute;\n    right: 0;\n    font-size: 9px;\n    margin-top: -183px;\n  }\n}\n\n.spec[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaGVhbHRoLWZlZWQvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXGhlYWx0aC1mZWVkXFxoZWFsdGgtZmVlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaGVhbHRoLWZlZWQvaGVhbHRoLWZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbkJKOztBRHVCQTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtBQ3JCSjs7QUQwQkM7RUFDRyxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUN2Qko7O0FENEJBO0VBQ0ksV0FBQTtBQ3pCSjs7QUQ0QkE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUMxQko7O0FENkJBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQzFCSjs7QUQ4QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQzNCSjs7QUQrQkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM1Qko7O0FEZ0NBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDN0JKOztBRGlDQztFQUNHLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUM5Qko7O0FEaUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FDL0JKOztBRHFDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBRUEsNkJBQUE7RUFDQSwwQkFBQTtFQUVBLHNCQUFBO0FDckNKOztBRHlDQTtFQUNBO0lBQ0ksWUFBQTtFQ3RDRjtBQUNGOztBRDBDQTtFQUNJLFlBQUE7RUFDSixXQUFBO0FDeENBOztBRDZDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUMxQ0o7O0FEaURBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzlDSjs7QURpREE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUM5Q0o7O0FEa0RBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQy9DSjs7QURtREE7RUFDSSxrQkFBQTtBQ2hESjs7QURtREE7RUFDSSxrQkFBQTtFQUFxQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLFlBQUE7QUM3QzVEOztBRGdEQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzdDSjs7QURpREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDOUNKOztBRGtEQTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDL0NKOztBRG1EQTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDaERKOztBRG9EQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ2pETjs7RURxREU7SUFDSSxTQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ2xETjtBQUNGOztBRHNERTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDcEROIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaGVhbHRoLWZlZWQvaGVhbHRoLWZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNjVweDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcm91c2VsLWNhcHRpb24ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgcmlnaHQ6IDE1JTtcclxuLy8gICAgIGJvdHRvbTogMjBweDtcclxuLy8gICAgIGxlZnQ6IDE1JTtcclxuLy8gICAgIHotaW5kZXg6IDEwO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC42KTtcclxuLy8gfVxyXG5cclxuXHJcbi5oZC10aXRsZSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuLmFjdGl2ZS1kaXZ7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzI4RDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuIC5zdWJtaXQtYnRuLW1hdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdGV4dCB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uY29yb3NhbC1vcHR7XHJcbiAgICBwYWRkaW5nOiA4JTtcclxufVxyXG5cclxuLndoeS10aXRsZXtcclxuXHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1nLWNpcmNsZXtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICAgIFxyXG5cclxuLndoeS1oZWFkLW1haW57XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbmhyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTU7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHsgICAgICAgXHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvOyBcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuIH1cclxuXHJcblxyXG4gLmxocyB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwMzc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0NHB4O1xyXG59XHJcblxyXG4ucmhzIHtcclxuICAgIHotaW5kZXg6IDEwMDAzNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgXHJcbiAgICBtYXJnaW4tdG9wOiAtMTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0NHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4udGVzdGltb25pYWwgLmNhcm91c2VsLWNhcHRpb24tY3VzdG9tZSAucHRleHQtbSB7XHJcbiAgICBjb2xvcjogIzQxNDE0NjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDclO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IFxyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzlweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuLmNvbnRhaW5lciwgLm5hdmJhci1zdGF0aWMtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtdG9wIC5jb250YWluZXIsIC5uYXZiYXItZml4ZWQtYm90dG9tIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcyNHB4O1xyXG59XHJcblxyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgICBtYXJnaW46YXV0bztcclxud2lkdGg6MTAwJVxyXG59XHJcblxyXG5cclxuXHJcbi5mb290ZXItdGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODMyOEQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDcwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi50ZXh0LWZ7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZm9vdGVyIC5zdGF0cyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuXHJcblxyXG4uc3RhdHMtc3BlYy1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLWFydGljbGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkLU91cntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIGZvbnQtc2l6ZTogNDZweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1ie1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IFxyXG59XHJcblxyXG5cclxuLmRvYy1uYW1le1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLm5nLWJpbmRpbmcgLnB0ZXh0LW17XHJcbiAgICBmb250LXNpemU6IDE5cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm10cHtcclxuICAgIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAucmhzW19uZ2NvbnRlbnQtcGNqLWMyMzBdIHtcclxuICAgICAgICB6LWluZGV4OiAxMDAwMzc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xODNweDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubGhzIHtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDM3O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTgzcHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNwZWN7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfSIsIi5oZC10aXRsZSB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3RpdmUtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MzI4RDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnN1Ym1pdC1idG4tbWF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5wLXRleHQge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uY29yb3NhbC1vcHQge1xuICBwYWRkaW5nOiA4JTtcbn1cblxuLndoeS10aXRsZSB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmltZy1jaXJjbGUge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndoeS1oZWFkLW1haW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItY29sb3I6ICNlMGUwZTU7XG59XG5cbi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5saHMge1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwMDAzNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi10b3A6IC0xMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE0NHB4O1xufVxuXG4ucmhzIHtcbiAgei1pbmRleDogMTAwMDM3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLXRvcDogLTEzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0NHB4O1xufVxuXG4udGVzdGltb25pYWwgLmNhcm91c2VsLWNhcHRpb24tY3VzdG9tZSAucHRleHQtbSB7XG4gIGNvbG9yOiAjNDE0MTQ2O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmctbGVmdDogNyU7XG4gIHBhZGRpbmctcmlnaHQ6IDclO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTc5cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFpbmVyLCAubmF2YmFyLXN0YXRpYy10b3AgLmNvbnRhaW5lciwgLm5hdmJhci1maXhlZC10b3AgLmNvbnRhaW5lciwgLm5hdmJhci1maXhlZC1ib3R0b20gLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcyNHB4O1xuICB9XG59XG4uY2Fyb3VzZWwtaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgzMjhEO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi50ZXh0LWYge1xuICBmb250LXNpemU6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvb3RlciAuc3RhdHMge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4uc3RhdHMtc3BlYy1yaWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4uaW1nLWFydGljbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkLU91ciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWIge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5kb2MtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5uZy1iaW5kaW5nIC5wdGV4dC1tIHtcbiAgZm9udC1zaXplOiAxOXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm10cCB7XG4gIGZvbnQtc2l6ZTogMTlweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJoc1tfbmdjb250ZW50LXBjai1jMjMwXSB7XG4gICAgei1pbmRleDogMTAwMDM3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBtYXJnaW4tdG9wOiAtMTgzcHg7XG4gIH1cblxuICAubGhzIHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTAwMDM3O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBtYXJnaW4tdG9wOiAtMTgzcHg7XG4gIH1cbn1cbi5zcGVjIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HealthFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-health-feed',
                templateUrl: './health-feed.component.html',
                styleUrls: ['./health-feed.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/health-feed/health-feed.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/health-feed/health-feed.module.ts ***!
  \***************************************************************************/
/*! exports provided: HealthFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthFeedModule", function() { return HealthFeedModule; });
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _health_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-feed.component */ "./src/app/modules/doctor-dashbord/health-feed/health-feed.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _health_feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-feed-routing.module */ "./src/app/modules/doctor-dashbord/health-feed/health-feed-routing.module.ts");
/* harmony import */ var _start_free_start_free_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start-free/start-free.component */ "./src/app/modules/doctor-dashbord/health-feed/start-free/start-free.component.ts");








class HealthFeedModule {
}
HealthFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HealthFeedModule });
HealthFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HealthFeedModule_Factory(t) { return new (t || HealthFeedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _health_feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthFeedRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HealthFeedModule, { declarations: [_health_feed_component__WEBPACK_IMPORTED_MODULE_1__["HealthFeedComponent"], _start_free_start_free_component__WEBPACK_IMPORTED_MODULE_6__["StartFreeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _health_feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthFeedRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HealthFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_health_feed_component__WEBPACK_IMPORTED_MODULE_1__["HealthFeedComponent"], _start_free_start_free_component__WEBPACK_IMPORTED_MODULE_6__["StartFreeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _health_feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthFeedRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/health-feed/start-free/start-free.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/health-feed/start-free/start-free.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StartFreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartFreeComponent", function() { return StartFreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class StartFreeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StartFreeComponent.ɵfac = function StartFreeComponent_Factory(t) { return new (t || StartFreeComponent)(); };
StartFreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartFreeComponent, selectors: [["app-start-free"]], decls: 16, vars: 1, consts: [["mat-dialog-title", "", 1, "title-mat"], [1, "mat-typography", "mt-4"], [1, "col-md-12", "col-sm-12"], [1, "row"], [1, "", 2, "width", "600px"], [1, "form-group", "mt-3"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Name", 1, "form-control", "border", "border-danger"], ["type", "email", "id", "exampleInputPassword1", "placeholder", "email", 1, "form-control", "border", "border-danger"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 1, "mat-button-t", 3, "mat-dialog-close"]], template: function StartFreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-button-t[_ngcontent-%COMP%] {\n  border: 1px solid #ffa000;\n  font-size: 15px;\n  line-height: 15px;\n  font-weight: bold;\n  color: #FFF;\n  background-color: #ffa000;\n  padding: 10px 22px;\n  border-radius: 3px;\n  float: left;\n  cursor: pointer;\n}\n\n.title-mat[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvaGVhbHRoLWZlZWQvc3RhcnQtZnJlZS9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcaGVhbHRoLWZlZWRcXHN0YXJ0LWZyZWVcXHN0YXJ0LWZyZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2hlYWx0aC1mZWVkL3N0YXJ0LWZyZWUvc3RhcnQtZnJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2hlYWx0aC1mZWVkL3N0YXJ0LWZyZWUvc3RhcnQtZnJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5tYXQtYnV0dG9uLXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGl0bGUtbWF0e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iLCIubWF0LWJ1dHRvbi10IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYTAwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xuICBwYWRkaW5nOiAxMHB4IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlLW1hdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartFreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-free',
                templateUrl: './start-free.component.html',
                styleUrls: ['./start-free.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=health-feed-health-feed-module-es2015.js.map
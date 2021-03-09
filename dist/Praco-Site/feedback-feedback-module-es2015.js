(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./src/app/modules/doctor-dashbord/feedback/feedback-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/feedback/feedback-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function() { return FeedbackRoutingModule; });
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.component */ "./src/app/modules/doctor-dashbord/feedback/feedback.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '', component: _feedback_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackComponent"]
    }
];
class FeedbackRoutingModule {
}
FeedbackRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeedbackRoutingModule });
FeedbackRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FeedbackRoutingModule_Factory(t) { return new (t || FeedbackRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeedbackRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedbackRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/feedback/feedback.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/feedback/feedback.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





class FeedbackComponent {
    constructor() {
        this.selected = 'option1';
    }
    ngOnInit() {
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 19, vars: 1, consts: [[1, "card", "card-main"], [1, "header"], [1, "head-text"], [1, "card-body"], [1, "row"], [1, "col-sm-4"], [1, "flex"], [1, "mat-text-lable"], [1, "mat-sl"], [3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Which doctor's feedback do you wish to view?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Others from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FeedbackComponent_Template_mat_select_valueChange_12_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All Centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]], styles: [".head-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.drop-feedback[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n.head-text[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-left: 20px;\n  font-weight: 500;\n}\n\n.mat-sl[_ngcontent-%COMP%] {\n  margin-top: -13px;\n  margin-left: 12px;\n}\n\n.mat-text-lable[_ngcontent-%COMP%] {\n  float: left;\n  color: black;\n}\n\n.card-main[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvZmVlZGJhY2svQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXGZlZWRiYWNrXFxmZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7RUFBa0IsaUJBQUE7RUFHbEIsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0VBQ0ksaUJBQUE7QUNGUjs7QURLQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcblxyXG4uZHJvcC1mZWVkYmFja3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZC10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1hdC1zbHtcclxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4ubWF0LXRleHQtbGFibGV7XHJcblxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkLW1haW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iLCIuaGVhZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRyb3AtZmVlZGJhY2sge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmhlYWQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXNsIHtcbiAgbWFyZ2luLXRvcDogLTEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ubWF0LXRleHQtbGFibGUge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1tYWluIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/feedback/feedback.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/feedback/feedback.module.ts ***!
  \*********************************************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var _feedback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.component */ "./src/app/modules/doctor-dashbord/feedback/feedback.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-routing.module */ "./src/app/modules/doctor-dashbord/feedback/feedback-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






class FeedbackModule {
}
FeedbackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeedbackModule });
FeedbackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FeedbackModule_Factory(t) { return new (t || FeedbackModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeedbackModule, { declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedbackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_feedback_component__WEBPACK_IMPORTED_MODULE_0__["FeedbackComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module-es2015.js.map
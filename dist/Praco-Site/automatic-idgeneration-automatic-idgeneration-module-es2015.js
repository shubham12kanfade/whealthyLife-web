(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["automatic-idgeneration-automatic-idgeneration-module"],{

/***/ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration-routing.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AutomaticIDGenerationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticIDGenerationRoutingModule", function() { return AutomaticIDGenerationRoutingModule; });
/* harmony import */ var _automatic_idgeneration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./automatic-idgeneration.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '', component: _automatic_idgeneration_component__WEBPACK_IMPORTED_MODULE_0__["AutomaticIDGenerationComponent"]
    }
];
class AutomaticIDGenerationRoutingModule {
}
AutomaticIDGenerationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AutomaticIDGenerationRoutingModule });
AutomaticIDGenerationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AutomaticIDGenerationRoutingModule_Factory(t) { return new (t || AutomaticIDGenerationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AutomaticIDGenerationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutomaticIDGenerationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AutomaticIDGenerationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticIDGenerationComponent", function() { return AutomaticIDGenerationComponent; });
/* harmony import */ var _receipt_id_gen_receipt_id_gen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipt-id-gen/receipt-id-gen.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/receipt-id-gen/receipt-id-gen.component.ts");
/* harmony import */ var _invoice_id_gen_invoice_id_gen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-id-gen/invoice-id-gen.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/invoice-id-gen/invoice-id-gen.component.ts");
/* harmony import */ var _patient_id_gen_patient_id_gen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-id-gen/patient-id-gen.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/patient-id-gen/patient-id-gen.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AutomaticIDGenerationComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r895 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Patient ID Generation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Patient ID (Prefix)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Numeric Only *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "We can assign patient numbers to all your existing contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Override IDs for 0 patients");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutomaticIDGenerationComponent_div_53_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r895); const ctx_r894 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r894.PatientID(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AutomaticIDGenerationComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r897 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Invoice ID Generation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Invoice Number (Prefix)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Numeric Only *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutomaticIDGenerationComponent_div_54_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r897); const ctx_r896 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r896.InvoiceID(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AutomaticIDGenerationComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r899 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Receipt ID Generation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Receipt Number (Prefix)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Numeric Only *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutomaticIDGenerationComponent_div_55_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r899); const ctx_r898 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r898.ReceiptID(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AutomaticIDGenerationComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.show = false;
        this.showInvoice = false;
        this.showReceipt = false;
    }
    ngOnInit() {
    }
    PatientID() {
        this.show = !this.show;
    }
    InvoiceID() {
        this.showInvoice = !this.showInvoice;
    }
    ReceiptID() {
        this.showReceipt = !this.showReceipt;
    }
    modalopen() {
        const dialogRef = this.dialog.open(_patient_id_gen_patient_id_gen_component__WEBPACK_IMPORTED_MODULE_2__["PatientIdGenComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    InvoiceModalOpen() {
        const dialogRef = this.dialog.open(_invoice_id_gen_invoice_id_gen_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceIdGenComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    RecieptModalOpen() {
        const dialogRef = this.dialog.open(_receipt_id_gen_receipt_id_gen_component__WEBPACK_IMPORTED_MODULE_0__["ReceiptIdGenComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
AutomaticIDGenerationComponent.ɵfac = function AutomaticIDGenerationComponent_Factory(t) { return new (t || AutomaticIDGenerationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
AutomaticIDGenerationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AutomaticIDGenerationComponent, selectors: [["app-automatic-idgeneration"]], decls: 56, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "section-heading-main"], [1, "ui-checkbox"], [1, "example-margin"], [1, "desc-text"], [1, "body-normal-grey"], [3, "click"], [1, "row", "mt-4"], [1, "section-heading"], ["class", "modal  ", "id", "myModal", 4, "ngIf"], ["class", "modal", "id", "myModal", 4, "ngIf"], ["id", "myModal", 1, "modal"], [1, "modal-xl", "dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], [1, "modal-body"], [1, "container"], [1, "col-sm-6"], [1, "form-group"], ["type", "email", "value", "P", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "value", "1", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-sm-12"], [1, "labl"], [1, "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label", "frmchk"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btnmodal", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "btnmodal"], ["type", "email", "value", "INV", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "value", "RCPT", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"]], template: function AutomaticIDGenerationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Automatic ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Patient ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " WhealthyLife lets you automatically assign Patient IDs for newly added patients to your records. You can also assign Patient IDs to all your existing patients. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Current Pattern: P ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "{{");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "PATIENT-NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutomaticIDGenerationComponent_Template_a_click_19_listener() { return ctx.modalopen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Invoice ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " You need to select an Initial Value. You can choose an alphanumeric prefix (will not be increment), and a numeric part which will be automatically incremented for every new bill. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Current Pattern: INV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "{{");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "INVOICE-NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutomaticIDGenerationComponent_Template_a_click_35_listener() { return ctx.InvoiceModalOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Receipt ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " You need to select an Initial Value. You can choose an alphanumeric prefix (will not be increment), and a numeric part which will be automatically incremented for every new receipt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Current Pattern: RCPT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "{{");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "RECEIPT-NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutomaticIDGenerationComponent_Template_a_click_51_listener() { return ctx.RecieptModalOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AutomaticIDGenerationComponent_div_53_Template, 32, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AutomaticIDGenerationComponent_div_54_Template, 24, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, AutomaticIDGenerationComponent_div_55_Template, 24, 0, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInvoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showReceipt);
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".settings-header[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: black;\n  font-weight: bold;\n  background-color: white;\n  margin-top: 21px;\n}\n\n.generate[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.linkpop[_ngcontent-%COMP%] {\n  color: blue;\n  cursor: pointer;\n}\n\n.desc-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 20px;\n  color: #414146;\n}\n\n.body-normal-grey[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #414146;\n}\n\n#myModal[_ngcontent-%COMP%] {\n  display: block;\n  width: 50%;\n  margin-left: 40%;\n}\n\n#exampleModalLongTitle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  color: black;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.labl[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n\n.frmchk[_ngcontent-%COMP%] {\n  margin-left: 21px;\n}\n\n.btnmodal[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #14bef0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.section-heading-main[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgrey;\n  margin-left: 30px;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXGF1dG9tYXRpYy1pZGdlbmVyYXRpb25cXGF1dG9tYXRpYy1pZGdlbmVyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL2F1dG9tYXRpYy1pZGdlbmVyYXRpb24vYXV0b21hdGljLWlkZ2VuZXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUVBLGNBQUE7QUNGSjs7QURJQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9zZXR0aW5ncy9hdXRvbWF0aWMtaWRnZW5lcmF0aW9uL2F1dG9tYXRpYy1pZGdlbmVyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDIxcHg7XHJcbn1cclxuXHJcbi5nZW5lcmF0ZVxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5saW5rcG9we1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICAjNDE0MTQ2OztcclxufVxyXG5cclxuLmJvZHktbm9ybWFsLWdyZXl7XHJcbiAgICBmb250LXNpemU6IDE0cHg7ICBcclxuXHJcbiAgICBjb2xvcjogICM0MTQxNDY7O1xyXG59XHJcbiNteU1vZGFse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG4jZXhhbXBsZU1vZGFsTG9uZ1RpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICBjb2xvcjogYmxhY2sgO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmxhYmx7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcbi5mcm1jaGt7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcclxufVxyXG4uYnRubW9kYWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzE0YmVmMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmctbWFpbntcclxuICAgIGJvcmRlci1ib3R0b206ICAxcHggIHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zZWN0aW9uLWhlYWRpbmd7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufSIsIi5zZXR0aW5ncy1oZWFkZXIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuXG4uZ2VuZXJhdGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxpbmtwb3Age1xuICBjb2xvcjogYmx1ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVzYy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogIzQxNDE0Njtcbn1cblxuLmJvZHktbm9ybWFsLWdyZXkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNDE0MTQ2O1xufVxuXG4jbXlNb2RhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xufVxuXG4jZXhhbXBsZU1vZGFsTG9uZ1RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxhYmwge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uZnJtY2hrIHtcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XG59XG5cbi5idG5tb2RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMTRiZWYwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlY3Rpb24taGVhZGluZy1tYWluIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutomaticIDGenerationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-automatic-idgeneration',
                templateUrl: './automatic-idgeneration.component.html',
                styleUrls: ['./automatic-idgeneration.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AutomaticIDGenerationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticIDGenerationModule", function() { return AutomaticIDGenerationModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _automatic_idgeneration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automatic-idgeneration.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _automatic_idgeneration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./automatic-idgeneration-routing.module */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration-routing.module.ts");
/* harmony import */ var _patient_id_gen_patient_id_gen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-id-gen/patient-id-gen.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/patient-id-gen/patient-id-gen.component.ts");
/* harmony import */ var _invoice_id_gen_invoice_id_gen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice-id-gen/invoice-id-gen.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/invoice-id-gen/invoice-id-gen.component.ts");
/* harmony import */ var _receipt_id_gen_receipt_id_gen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./receipt-id-gen/receipt-id-gen.component */ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/receipt-id-gen/receipt-id-gen.component.ts");









class AutomaticIDGenerationModule {
}
AutomaticIDGenerationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AutomaticIDGenerationModule });
AutomaticIDGenerationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AutomaticIDGenerationModule_Factory(t) { return new (t || AutomaticIDGenerationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _automatic_idgeneration_routing_module__WEBPACK_IMPORTED_MODULE_4__["AutomaticIDGenerationRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AutomaticIDGenerationModule, { declarations: [_automatic_idgeneration_component__WEBPACK_IMPORTED_MODULE_1__["AutomaticIDGenerationComponent"], _patient_id_gen_patient_id_gen_component__WEBPACK_IMPORTED_MODULE_5__["PatientIdGenComponent"], _invoice_id_gen_invoice_id_gen_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceIdGenComponent"], _receipt_id_gen_receipt_id_gen_component__WEBPACK_IMPORTED_MODULE_7__["ReceiptIdGenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _automatic_idgeneration_routing_module__WEBPACK_IMPORTED_MODULE_4__["AutomaticIDGenerationRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AutomaticIDGenerationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_automatic_idgeneration_component__WEBPACK_IMPORTED_MODULE_1__["AutomaticIDGenerationComponent"], _patient_id_gen_patient_id_gen_component__WEBPACK_IMPORTED_MODULE_5__["PatientIdGenComponent"], _invoice_id_gen_invoice_id_gen_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceIdGenComponent"], _receipt_id_gen_receipt_id_gen_component__WEBPACK_IMPORTED_MODULE_7__["ReceiptIdGenComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _automatic_idgeneration_routing_module__WEBPACK_IMPORTED_MODULE_4__["AutomaticIDGenerationRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/invoice-id-gen/invoice-id-gen.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/invoice-id-gen/invoice-id-gen.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: InvoiceIdGenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceIdGenComponent", function() { return InvoiceIdGenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class InvoiceIdGenComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
InvoiceIdGenComponent.ɵfac = function InvoiceIdGenComponent_Factory(t) { return new (t || InvoiceIdGenComponent)(); };
InvoiceIdGenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoiceIdGenComponent, selectors: [["app-invoice-id-gen"]], decls: 22, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography", "mt-4", "mat-dialog-container"], [1, "col-md-12", "col-sm-12"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "l-b-p"], ["type", "email", "value", "INV", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], [1, "sp"], ["type", "email", "value", "1", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 1, "mat-button-t", 3, "mat-dialog-close"]], template: function InvoiceIdGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invoice ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Invoice Number (Prefix)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Numeric Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-button-t[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n  float: right;\n  font-size: 12px;\n}\n\n.l-b-p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: black;\n}\n\n.labl[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  margin-left: 44px;\n}\n\n.sp[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9pbnZvaWNlLWlkLWdlbi9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXGF1dG9tYXRpYy1pZGdlbmVyYXRpb25cXGludm9pY2UtaWQtZ2VuXFxpbnZvaWNlLWlkLWdlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9pbnZvaWNlLWlkLWdlbi9pbnZvaWNlLWlkLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUdHLFlBQUE7RUFDSCxlQUFBO0FDREo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUFPLGlCQUFBO0FDRFA7O0FER0M7RUFDQSxpQkFBQTtBQ0FEOztBRElFO0VBQUksVUFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9pbnZvaWNlLWlkLWdlbi9pbnZvaWNlLWlkLWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgIFxyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmwtYi1we1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxhYmx7IG1hcmdpbi1sZWZ0OiAxNHB4O30gIFxyXG5cclxuIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuIG1hcmdpbi1sZWZ0OiA0NHB4O1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5zcHtjb2xvcjogcmVkO30iLCIubWF0LWJ1dHRvbi10IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubC1iLXAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sYWJsIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA0NHB4O1xufVxuXG4uc3Age1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceIdGenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice-id-gen',
                templateUrl: './invoice-id-gen.component.html',
                styleUrls: ['./invoice-id-gen.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/patient-id-gen/patient-id-gen.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/patient-id-gen/patient-id-gen.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: PatientIdGenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientIdGenComponent", function() { return PatientIdGenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class PatientIdGenComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PatientIdGenComponent.ɵfac = function PatientIdGenComponent_Factory(t) { return new (t || PatientIdGenComponent)(); };
PatientIdGenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientIdGenComponent, selectors: [["app-patient-id-gen"]], decls: 30, vars: 1, consts: [[1, "container-fludic"], ["mat-dialog-title", ""], [1, "mat-typography", "mt-4"], [1, "col-md-12", "col-sm-12"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "l-b-p"], ["type", "email", "value", "P", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], [1, "sp"], ["type", "email", "value", "1", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-sm-12"], [1, "labl"], [1, "form-check"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 1, "mat-button-t", 3, "mat-dialog-close"]], template: function PatientIdGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Patient ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient ID (Prefix)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Numeric Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "We can assign patient numbers to all your existing contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Override IDs for 0 patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-button-t[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n  float: right;\n  font-size: 12px;\n}\n\n.l-b-p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: black;\n}\n\n.labl[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  margin-left: 44px;\n}\n\n.sp[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9wYXRpZW50LWlkLWdlbi9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXGF1dG9tYXRpYy1pZGdlbmVyYXRpb25cXHBhdGllbnQtaWQtZ2VuXFxwYXRpZW50LWlkLWdlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9wYXRpZW50LWlkLWdlbi9wYXRpZW50LWlkLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUdHLFlBQUE7RUFDSCxlQUFBO0FDREo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUFPLGlCQUFBO0FDRFA7O0FER0M7RUFDRyxpQkFBQTtBQ0FKOztBREdBO0VBQUksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9wYXRpZW50LWlkLWdlbi9wYXRpZW50LWlkLWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgIFxyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmwtYi1we1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxhYmx7IG1hcmdpbi1sZWZ0OiAxNHB4O30gIFxyXG5cclxuIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xyXG59XHJcbiAgIFxyXG4uc3B7Y29sb3I6IHJlZDt9XHJcbiAgIiwiLm1hdC1idXR0b24tdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmwtYi1wIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGFibCB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogNDRweDtcbn1cblxuLnNwIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientIdGenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-id-gen',
                templateUrl: './patient-id-gen.component.html',
                styleUrls: ['./patient-id-gen.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/receipt-id-gen/receipt-id-gen.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/receipt-id-gen/receipt-id-gen.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ReceiptIdGenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptIdGenComponent", function() { return ReceiptIdGenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class ReceiptIdGenComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReceiptIdGenComponent.ɵfac = function ReceiptIdGenComponent_Factory(t) { return new (t || ReceiptIdGenComponent)(); };
ReceiptIdGenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceiptIdGenComponent, selectors: [["app-receipt-id-gen"]], decls: 22, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography", "mt-4"], [1, "col-md-12", "col-sm-12"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "l-b-p"], ["type", "email", "value", "RCPT", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], [1, "sp"], ["type", "email", "value", "1", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 1, "mat-button-t", 3, "mat-dialog-close"]], template: function ReceiptIdGenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receipt ID Generation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Receipt Number (Prefix)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Numeric Only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".mat-button-t[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n  float: right;\n  font-size: 12px;\n}\n\n.l-b-p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: black;\n}\n\n.labl[_ngcontent-%COMP%] {\n  margin-left: 14px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 10%;\n}\n\n.sp[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9yZWNlaXB0LWlkLWdlbi9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXGF1dG9tYXRpYy1pZGdlbmVyYXRpb25cXHJlY2VpcHQtaWQtZ2VuXFxyZWNlaXB0LWlkLWdlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvYXV0b21hdGljLWlkZ2VuZXJhdGlvbi9yZWNlaXB0LWlkLWdlbi9yZWNlaXB0LWlkLWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUdHLFlBQUE7RUFDSCxlQUFBO0FDREo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUFPLGlCQUFBO0FDRFA7O0FER0M7RUFDQyxZQUFBO0FDQUY7O0FESUU7RUFBSSxVQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9zZXR0aW5ncy9hdXRvbWF0aWMtaWRnZW5lcmF0aW9uL3JlY2VpcHQtaWQtZ2VuL3JlY2VpcHQtaWQtZ2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1idXR0b24tdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICAgXHJcbiAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4ubC1iLXB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubGFibHsgbWFyZ2luLWxlZnQ6IDE0cHg7fSAgXHJcblxyXG4gLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICAgXHJcbiAgfVxyXG5cclxuICAuc3B7Y29sb3I6IHJlZDt9IiwiLm1hdC1idXR0b24tdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmwtYi1wIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGFibCB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMCU7XG59XG5cbi5zcCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReceiptIdGenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-receipt-id-gen',
                templateUrl: './receipt-id-gen.component.html',
                styleUrls: ['./receipt-id-gen.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=automatic-idgeneration-automatic-idgeneration-module-es2015.js.map
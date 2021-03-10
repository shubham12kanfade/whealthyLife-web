function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricing-catalog-pricing-catalog-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/settings/pricing-catalog/add-procedure-modal/add-procedure-modal.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/pricing-catalog/add-procedure-modal/add-procedure-modal.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: AddProcedureModalComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsPricingCatalogAddProcedureModalAddProcedureModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProcedureModalComponent", function () {
      return AddProcedureModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AddProcedureModalComponent_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PROCEDURE NAME ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddProcedureModalComponent_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r763 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r763.position, " ");
      }
    }

    function AddProcedureModalComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "COST (\u20B9)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddProcedureModalComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r764 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r764.NAME, " ");
      }
    }

    function AddProcedureModalComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TAX ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddProcedureModalComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r765 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r765.TYPE, " ");
      }
    }

    function AddProcedureModalComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TOTAL COST (\u20B9)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddProcedureModalComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r766 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r766.STREANGTH, " ");
      }
    }

    function AddProcedureModalComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
      }
    }

    function AddProcedureModalComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var ELEMENT_DATA = [{
      position: '',
      NAME: '',
      TYPE: '',
      STREANGTH: ''
    }];

    var AddProcedureModalComponent =
    /*#__PURE__*/
    function () {
      function AddProcedureModalComponent() {
        _classCallCheck(this, AddProcedureModalComponent);

        this.displayedColumns = ['position', 'NAME', 'TYPE', 'STREANGTH'];
      }

      _createClass(AddProcedureModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        }
      }]);

      return AddProcedureModalComponent;
    }();

    AddProcedureModalComponent.ɵfac = function AddProcedureModalComponent_Factory(t) {
      return new (t || AddProcedureModalComponent)();
    };

    AddProcedureModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProcedureModalComponent,
      selectors: [["app-add-procedure-modal"]],
      viewQuery: function AddProcedureModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 26,
      vars: 6,
      consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "col-md-12", "col-sm-12"], [1, "row"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "NAME"], ["matColumnDef", "TYPE"], ["matColumnDef", "STREANGTH"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function AddProcedureModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Procedure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddProcedureModalComponent_th_7_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddProcedureModalComponent_td_8_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddProcedureModalComponent_th_10_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddProcedureModalComponent_td_11_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddProcedureModalComponent_th_13_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddProcedureModalComponent_td_14_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddProcedureModalComponent_th_16_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddProcedureModalComponent_td_17_Template, 2, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddProcedureModalComponent_tr_18_Template, 1, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddProcedureModalComponent_tr_19_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-paginator", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvcHJpY2luZy1jYXRhbG9nL2FkZC1wcm9jZWR1cmUtbW9kYWwvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3ItZGFzaGJvcmRcXHNldHRpbmdzXFxwcmljaW5nLWNhdGFsb2dcXGFkZC1wcm9jZWR1cmUtbW9kYWxcXGFkZC1wcm9jZWR1cmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL3ByaWNpbmctY2F0YWxvZy9hZGQtcHJvY2VkdXJlLW1vZGFsL2FkZC1wcm9jZWR1cmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RvY3Rvci1kYXNoYm9yZC9zZXR0aW5ncy9wcmljaW5nLWNhdGFsb2cvYWRkLXByb2NlZHVyZS1tb2RhbC9hZGQtcHJvY2VkdXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0gIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProcedureModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-procedure-modal',
          templateUrl: './add-procedure-modal.component.html',
          styleUrls: ['./add-procedure-modal.component.scss']
        }]
      }], function () {
        return [];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog-routing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog-routing.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: PricingCatalogRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsPricingCatalogPricingCatalogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingCatalogRoutingModule", function () {
      return PricingCatalogRoutingModule;
    });
    /* harmony import */


    var _pricing_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pricing-catalog.component */
    "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.component.ts");
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
      component: _pricing_catalog_component__WEBPACK_IMPORTED_MODULE_0__["PricingCatalogComponent"]
    }];

    var PricingCatalogRoutingModule = function PricingCatalogRoutingModule() {
      _classCallCheck(this, PricingCatalogRoutingModule);
    };

    PricingCatalogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PricingCatalogRoutingModule
    });
    PricingCatalogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PricingCatalogRoutingModule_Factory(t) {
        return new (t || PricingCatalogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PricingCatalogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PricingCatalogRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PricingCatalogComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsPricingCatalogPricingCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingCatalogComponent", function () {
      return PricingCatalogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_procedure_modal_add_procedure_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-procedure-modal/add-procedure-modal.component */
    "./src/app/modules/doctor-dashbord/settings/pricing-catalog/add-procedure-modal/add-procedure-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var PricingCatalogComponent =
    /*#__PURE__*/
    function () {
      function PricingCatalogComponent(dialog) {
        _classCallCheck(this, PricingCatalogComponent);

        this.dialog = dialog;
        this.opmod = false;
      }

      _createClass(PricingCatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "modalopen",
        value: function modalopen() {
          var dialogRef = this.dialog.open(_add_procedure_modal_add_procedure_modal_component__WEBPACK_IMPORTED_MODULE_1__["AddProcedureModalComponent"]);
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: ".concat(result));
          });
        }
      }]);

      return PricingCatalogComponent;
    }();

    PricingCatalogComponent.ɵfac = function PricingCatalogComponent_Factory(t) {
      return new (t || PricingCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    PricingCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricingCatalogComponent,
      selectors: [["app-pricing-catalog"]],
      decls: 17,
      vars: 0,
      consts: [[1, "card", "shadow", "mb-4"], [1, "row"], [1, "col-sm-12"], [1, "card-header"], [1, "col-sm-3", "first"], [1, "font-weight-bold", "text-primary"], [1, "col-sm-9", "third"], ["mat-raised-button", "", 1, "mat-button", "btn", "btnadd", 3, "click"], [1, "card-body"], [1, "cdb"], [1, "anchorbtn", 3, "click"]],
      template: function PricingCatalogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pricing Catalogue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingCatalogComponent_Template_button_click_8_listener() {
            return ctx.modalopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "No procedure added yet. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingCatalogComponent_Template_a_click_15_listener() {
            return ctx.modalopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add procedure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".card-header[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: -3%;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  display: flex;\n  font-weight: 400;\n}\n\n.third[_ngcontent-%COMP%] {\n  margin-top: -3%;\n  float: right;\n}\n\n.btnadd[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 12px;\n}\n\n.cdb[_ngcontent-%COMP%] {\n  font-size: 17px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mtitle[_ngcontent-%COMP%] {\n  font-size: 0.5rem !important;\n}\n\n.cols[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  margin-left: 20px;\n  z-index: 1;\n  background: white;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 60px;\n  margin-top: -52px;\n  height: 80vh;\n  overflow-y: scroll;\n}\n\n.redstar[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#myModal[_ngcontent-%COMP%] {\n  margin-left: 23%;\n  top: 5%;\n  display: block;\n}\n\n.btnm[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.anchorbtn[_ngcontent-%COMP%] {\n  color: #14bef0;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.anchorbtn[_ngcontent-%COMP%]:hover {\n  color: #14bef0 !important;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n  width: 100px !important;\n  min-width: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvcHJpY2luZy1jYXRhbG9nL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yLWRhc2hib3JkXFxzZXR0aW5nc1xccHJpY2luZy1jYXRhbG9nXFxwcmljaW5nLWNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL3ByaWNpbmctY2F0YWxvZy9wcmljaW5nLWNhdGFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFVBQUE7RUFDQSxpQkFBQTtBQ0ZBOztBRElBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBR0EsWUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtFQUNBLE9BQUE7RUFFQSxjQUFBO0FDRko7O0FES0E7RUFFSSxlQUFBO0FDSEo7O0FES0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRko7O0FESUE7RUFDSSx5QkFBQTtBQ0RKOztBRE1JO0VBQ0ksZUFBQTtBQ0hSOztBRE1BO0VBQ0ksV0FBQTtBQ0hKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7RUFDRSwyQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvcHJpY2luZy1jYXRhbG9nL3ByaWNpbmctY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6NCU7XHJcbn1cclxuLmZpcnN0e1xyXG4gICAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcbi50ZXh0LXByaW1hcnl7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgXHJcbn1cclxuLy8gLnNlY29uZHtcclxuLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuLy8gfVxyXG4udGhpcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJ0bmFkZHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2Rie1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0b3A6IDEwJTtcclxufVxyXG4vLyAubW9kYWx7XHJcbi8vICAgICBwYWRkaW5nOiAzMHB4IDcwcHggMzBweCA3MHB4O1xyXG4vLyB9XHJcbi5jb2xze1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbm1hcmdpbi10b3A6IDM0cHg7XHJcbm1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyBoZWlnaHQ6IDMwJTtcclxuei1pbmRleDogMTtcclxuYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDotNTJweCA7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAtNDBweDtcclxuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnJlZHN0YXJ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiNteU1vZGFse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogLTIwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbn1cclxuLmJ0bm17XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmFuY2hvcmJ0bntcclxuICAgIGNvbG9yOiMxNGJlZjA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFuY2hvcmJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiMxNGJlZjAgIWltcG9ydGFudDtcclxuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50aGVhZHtcclxuICAgIHRoe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSBcclxuXHJcblxyXG4ubWF0LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICAgIHdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG59IiwiLmNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi5maXJzdCB7XG4gIG1hcmdpbi10b3A6IC0zJTtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGhpcmQge1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJ0bmFkZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2RiIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xzIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogNjBweDtcbiAgbWFyZ2luLXRvcDogLTUycHg7XG4gIGhlaWdodDogODB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucmVkc3RhciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNteU1vZGFsIHtcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcbiAgdG9wOiA1JTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idG5tIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYW5jaG9yYnRuIHtcbiAgY29sb3I6ICMxNGJlZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5jaG9yYnRuOmhvdmVyIHtcbiAgY29sb3I6ICMxNGJlZjAgIWltcG9ydGFudDtcbn1cblxudGhlYWQgdGgge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingCatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pricing-catalog',
          templateUrl: './pricing-catalog.component.html',
          styleUrls: ['./pricing-catalog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: PricingCatalogModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsPricingCatalogPricingCatalogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingCatalogModule", function () {
      return PricingCatalogModule;
    });
    /* harmony import */


    var _pricing_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pricing-catalog.component */
    "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pricing_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pricing-catalog-routing.module */
    "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog-routing.module.ts");
    /* harmony import */


    var _add_procedure_modal_add_procedure_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-procedure-modal/add-procedure-modal.component */
    "./src/app/modules/doctor-dashbord/settings/pricing-catalog/add-procedure-modal/add-procedure-modal.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var PricingCatalogModule = function PricingCatalogModule() {
      _classCallCheck(this, PricingCatalogModule);
    };

    PricingCatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PricingCatalogModule
    });
    PricingCatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PricingCatalogModule_Factory(t) {
        return new (t || PricingCatalogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pricing_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["PricingCatalogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PricingCatalogModule, {
        declarations: [_pricing_catalog_component__WEBPACK_IMPORTED_MODULE_0__["PricingCatalogComponent"], _add_procedure_modal_add_procedure_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddProcedureModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pricing_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["PricingCatalogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PricingCatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_pricing_catalog_component__WEBPACK_IMPORTED_MODULE_0__["PricingCatalogComponent"], _add_procedure_modal_add_procedure_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddProcedureModalComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pricing_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["PricingCatalogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pricing-catalog-pricing-catalog-module-es5.js.map
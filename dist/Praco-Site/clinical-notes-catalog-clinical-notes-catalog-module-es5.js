function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clinical-notes-catalog-clinical-notes-catalog-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog-routing.module.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog-routing.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: ClinicalNotesCatalogRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsClinicalNotesCatalogClinicalNotesCatalogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicalNotesCatalogRoutingModule", function () {
      return ClinicalNotesCatalogRoutingModule;
    });
    /* harmony import */


    var _clinical_notes_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./clinical-notes-catalog.component */
    "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.component.ts");
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
      component: _clinical_notes_catalog_component__WEBPACK_IMPORTED_MODULE_0__["ClinicalNotesCatalogComponent"]
    }];

    var ClinicalNotesCatalogRoutingModule = function ClinicalNotesCatalogRoutingModule() {
      _classCallCheck(this, ClinicalNotesCatalogRoutingModule);
    };

    ClinicalNotesCatalogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ClinicalNotesCatalogRoutingModule
    });
    ClinicalNotesCatalogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ClinicalNotesCatalogRoutingModule_Factory(t) {
        return new (t || ClinicalNotesCatalogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClinicalNotesCatalogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClinicalNotesCatalogRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: ClinicalNotesCatalogComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsClinicalNotesCatalogClinicalNotesCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicalNotesCatalogComponent", function () {
      return ClinicalNotesCatalogComponent;
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");

    function ClinicalNotesCatalogComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Complaints ");
      }
    }

    function ClinicalNotesCatalogComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Complaints ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClinicalNotesCatalogComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r772 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r772.NAME, " ");
      }
    }

    function ClinicalNotesCatalogComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    function ClinicalNotesCatalogComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    function ClinicalNotesCatalogComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Observations ");
      }
    }

    function ClinicalNotesCatalogComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Observations ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClinicalNotesCatalogComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r774 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r774.NAME, " ");
      }
    }

    function ClinicalNotesCatalogComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    function ClinicalNotesCatalogComponent_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    function ClinicalNotesCatalogComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Diagnoses ");
      }
    }

    function ClinicalNotesCatalogComponent_th_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Diagnoses ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClinicalNotesCatalogComponent_td_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r776 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r776.NAME, " ");
      }
    }

    function ClinicalNotesCatalogComponent_tr_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    function ClinicalNotesCatalogComponent_tr_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    function ClinicalNotesCatalogComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Other Notes ");
      }
    }

    function ClinicalNotesCatalogComponent_th_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Other Notes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ClinicalNotesCatalogComponent_td_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r778 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r778.NAME, " ");
      }
    }

    function ClinicalNotesCatalogComponent_tr_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    function ClinicalNotesCatalogComponent_tr_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
      }
    }

    var _c0 = function _c0() {
      return [5, 10, 20];
    };

    var ELEMENT_DATA = [{
      NAME: 'No added yet'
    }];

    var ClinicalNotesCatalogComponent =
    /*#__PURE__*/
    function () {
      function ClinicalNotesCatalogComponent() {
        _classCallCheck(this, ClinicalNotesCatalogComponent);

        this.first = true;
        this.second = false;
        this.third = false;
        this.fourth = false;
        this.displayedColumns = ['NAME'];
      }

      _createClass(ClinicalNotesCatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "firstbtn",
        value: function firstbtn() {
          this.first = true;
          this.second = false;
          this.third = false;
          this.fourth = false;
        }
      }, {
        key: "secondbtn",
        value: function secondbtn() {
          this.second = true;
          this.first = false;
          this.third = false;
          this.fourth = false;
        }
      }, {
        key: "thirdbtn",
        value: function thirdbtn() {
          this.third = true;
          this.first = false;
          this.second = false;
          this.fourth = false;
        }
      }, {
        key: "fourthbtn",
        value: function fourthbtn() {
          this.fourth = true;
          this.first = false;
          this.second = false;
          this.third = false;
        }
      }]);

      return ClinicalNotesCatalogComponent;
    }();

    ClinicalNotesCatalogComponent.ɵfac = function ClinicalNotesCatalogComponent_Factory(t) {
      return new (t || ClinicalNotesCatalogComponent)();
    };

    ClinicalNotesCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClinicalNotesCatalogComponent,
      selectors: [["app-clinical-notes-catalog"]],
      viewQuery: function ClinicalNotesCatalogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 52,
      vars: 20,
      consts: [[1, "card", "shadow", "mb-4"], [1, "row"], [1, "col-sm-12"], [1, "card-header"], [1, "col-sm-3", "first"], [1, "font-weight-bold", "text-primary"], [1, "col-sm-3", "third"], ["mat-raised-button", "", 1, "mat-button", "btn", "btnadd"], [1, "card-body"], ["mat-tab-label", ""], [1, "table-responsive", "table"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "NAME"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ClinicalNotesCatalogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clinical Notes Catalog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalNotesCatalogComponent_ng_template_13_Template, 1, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClinicalNotesCatalogComponent_th_17_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClinicalNotesCatalogComponent_td_18_Template, 2, 1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClinicalNotesCatalogComponent_tr_19_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClinicalNotesCatalogComponent_tr_20_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ClinicalNotesCatalogComponent_ng_template_23_Template, 1, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ClinicalNotesCatalogComponent_th_27_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ClinicalNotesCatalogComponent_td_28_Template, 2, 1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ClinicalNotesCatalogComponent_tr_29_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClinicalNotesCatalogComponent_tr_30_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ClinicalNotesCatalogComponent_ng_template_33_Template, 1, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ClinicalNotesCatalogComponent_th_37_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ClinicalNotesCatalogComponent_td_38_Template, 2, 1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ClinicalNotesCatalogComponent_tr_39_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ClinicalNotesCatalogComponent_tr_40_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ClinicalNotesCatalogComponent_ng_template_43_Template, 1, 0, "ng-template", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ClinicalNotesCatalogComponent_th_47_Template, 2, 0, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ClinicalNotesCatalogComponent_td_48_Template, 2, 1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ClinicalNotesCatalogComponent_tr_49_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ClinicalNotesCatalogComponent_tr_50_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLabel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: [".text-primary[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  display: flex;\n  font-weight: 400;\n}\n\n.second[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center;\n}\n\n.second[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]    > .nav-item[_ngcontent-%COMP%] {\n  font-size: 1.4rem !important;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #777 !important;\n}\n\n.btnadd[_ngcontent-%COMP%] {\n  font-size: 15px;\n  float: right;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: -3%;\n}\n\n.second[_ngcontent-%COMP%] {\n  margin-top: -3%;\n}\n\n.third[_ngcontent-%COMP%] {\n  margin-top: -3%;\n  float: right;\n}\n\n.sorting[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.odd[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border: none;\n}\n\n.staffspan[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.staffspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.cdc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: flex;\n  justify-content: center;\n}\n\n.fourteen[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: #fff;\n  width: 100px !important;\n  min-width: unset !important;\n  float: right;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvY2xpbmljYWwtbm90ZXMtY2F0YWxvZy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXGNsaW5pY2FsLW5vdGVzLWNhdGFsb2dcXGNsaW5pY2FsLW5vdGVzLWNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL2NsaW5pY2FsLW5vdGVzLWNhdGFsb2cvY2xpbmljYWwtbm90ZXMtY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtFQUNGLGtDQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQztFQUNJLDRCQUFBO0VBQ0EsdUJBQUE7RUFFRCxlQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLGlDQUFBO0FDQUo7O0FET0E7RUFHSSxlQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksY0FBQTtBQ05KOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0k7RUFDSSxpQkFBQTtBQ0ZSOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDSEo7O0FES0E7RUFDSSx1QkFBQTtBQ0ZKOztBREdJO0VBQ0ksaUJBQUE7QUNEUjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURJQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0UsMkJBQUE7RUFDQyxZQUFBO0VBQ0gsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3MvY2xpbmljYWwtbm90ZXMtY2F0YWxvZy9jbGluaWNhbC1ub3Rlcy1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcHJpbWFyeXtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBcclxufVxyXG4uc2Vjb25kLC5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gPi5uYXYtaXRlbXtcclxuICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50OyAgXHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIC8vICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiB9XHJcbn1cclxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC50ZXh0MXtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS43cmVtICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5idG5hZGR7XHJcbiAgICAvLyBoZWlnaHQ6IDMwJTtcclxuICAgIC8vIHdpZHRoOiAzNSU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBcclxufVxyXG4uY2FyZC1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjQlO1xyXG59XHJcbi5maXJzdHtcclxuICAgIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG4uc2Vjb25ke1xyXG4gICAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcbi50aGlyZHtcclxuICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uc29ydGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5vZGR7XHJcbiAgICB0ZHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uc3RhZmZzcGFue1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuLmJ0bi1saWdodDpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2Rje1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mb3VydGVlbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICAgIHdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59IiwiLnRleHQtcHJpbWFyeSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc2Vjb25kLCAubmF2IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlY29uZCA+IC5uYXYtaXRlbSwgLm5hdiA+IC5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbn1cblxuLmJ0bmFkZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLmZpcnN0IHtcbiAgbWFyZ2luLXRvcDogLTMlO1xufVxuXG4uc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogLTMlO1xufVxuXG4udGhpcmQge1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNvcnRpbmcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm9kZCB0ZCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3RhZmZzcGFuIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3RhZmZzcGFuIHNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNkYyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3VydGVlbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalNotesCatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clinical-notes-catalog',
          templateUrl: './clinical-notes-catalog.component.html',
          styleUrls: ['./clinical-notes-catalog.component.scss']
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
  "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: ClinicalNotesCatalogModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsClinicalNotesCatalogClinicalNotesCatalogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicalNotesCatalogModule", function () {
      return ClinicalNotesCatalogModule;
    });
    /* harmony import */


    var _clinical_notes_catalog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./clinical-notes-catalog.component */
    "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clinical_notes_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clinical-notes-catalog-routing.module */
    "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ClinicalNotesCatalogModule = function ClinicalNotesCatalogModule() {
      _classCallCheck(this, ClinicalNotesCatalogModule);
    };

    ClinicalNotesCatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ClinicalNotesCatalogModule
    });
    ClinicalNotesCatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ClinicalNotesCatalogModule_Factory(t) {
        return new (t || ClinicalNotesCatalogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _clinical_notes_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClinicalNotesCatalogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClinicalNotesCatalogModule, {
        declarations: [_clinical_notes_catalog_component__WEBPACK_IMPORTED_MODULE_0__["ClinicalNotesCatalogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _clinical_notes_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClinicalNotesCatalogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClinicalNotesCatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_clinical_notes_catalog_component__WEBPACK_IMPORTED_MODULE_0__["ClinicalNotesCatalogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _clinical_notes_catalog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClinicalNotesCatalogRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=clinical-notes-catalog-clinical-notes-catalog-module-es5.js.map
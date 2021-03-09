function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./src/app/modules/doctor-dashbord/settings/settings-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/settings-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SettingsRoutingModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
      return SettingsRoutingModule;
    });
    /* harmony import */


    var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./settings.component */
    "./src/app/modules/doctor-dashbord/settings/settings.component.ts");
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
      component: _settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"],
      children: [{
        path: 'practice-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | practice-details-practice-details-module */
          "practice-details-practice-details-module").then(__webpack_require__.bind(null,
          /*! ./practice-details/practice-details.module */
          "./src/app/modules/doctor-dashbord/settings/practice-details/practice-details.module.ts")).then(function (dd) {
            return dd.PracticeDetailsModule;
          });
        }
      }, {
        path: 'PracticeStaff',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | practice-staff-practice-staff-module */
          "practice-staff-practice-staff-module").then(__webpack_require__.bind(null,
          /*! ./practice-staff/practice-staff.module */
          "./src/app/modules/doctor-dashbord/settings/practice-staff/practice-staff.module.ts")).then(function (dd) {
            return dd.PracticeStaffModule;
          });
        }
      }, {
        path: 'Calendar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | calendar-calendar-module */
          "calendar-calendar-module").then(__webpack_require__.bind(null,
          /*! ./calendar/calendar.module */
          "./src/app/modules/doctor-dashbord/settings/calendar/calendar.module.ts")).then(function (dd) {
            return dd.CalendarModule;
          });
        }
      }, {
        path: 'Communications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | communications-communications-module */
          "communications-communications-module").then(__webpack_require__.bind(null,
          /*! ./communications/communications.module */
          "./src/app/modules/doctor-dashbord/settings/communications/communications.module.ts")).then(function (dd) {
            return dd.CommunicationsModule;
          });
        }
      }, {
        path: 'PricingCatalog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pricing-catalog-pricing-catalog-module */
          "pricing-catalog-pricing-catalog-module").then(__webpack_require__.bind(null,
          /*! ./pricing-catalog/pricing-catalog.module */
          "./src/app/modules/doctor-dashbord/settings/pricing-catalog/pricing-catalog.module.ts")).then(function (dd) {
            return dd.PricingCatalogModule;
          });
        }
      }, {
        path: 'ConsentForms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | consent-forms-consent-forms-module */
          "consent-forms-consent-forms-module").then(__webpack_require__.bind(null,
          /*! ./consent-forms/consent-forms.module */
          "./src/app/modules/doctor-dashbord/settings/consent-forms/consent-forms.module.ts")).then(function (dd) {
            return dd.ConsentFormsModule;
          });
        }
      }, {
        path: 'DataSecurity',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | data-security-data-security-module */
          "data-security-data-security-module").then(__webpack_require__.bind(null,
          /*! ./data-security/data-security.module */
          "./src/app/modules/doctor-dashbord/settings/data-security/data-security.module.ts")).then(function (dd) {
            return dd.DataSecurityModule;
          });
        }
      }, {
        path: 'ClinicalNotesCatalog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | clinical-notes-catalog-clinical-notes-catalog-module */
          "clinical-notes-catalog-clinical-notes-catalog-module").then(__webpack_require__.bind(null,
          /*! ./clinical-notes-catalog/clinical-notes-catalog.module */
          "./src/app/modules/doctor-dashbord/settings/clinical-notes-catalog/clinical-notes-catalog.module.ts")).then(function (dd) {
            return dd.ClinicalNotesCatalogModule;
          });
        }
      }, {
        path: 'DrugCatalog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | drug-catalog-drug-catalog-module */
          "drug-catalog-drug-catalog-module").then(__webpack_require__.bind(null,
          /*! ./drug-catalog/drug-catalog.module */
          "./src/app/modules/doctor-dashbord/settings/drug-catalog/drug-catalog.module.ts")).then(function (dd) {
            return dd.DrugCatalogModule;
          });
        }
      }, {
        path: 'ChartingTemplates',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | charting-templates-charting-templates-module */
          "charting-templates-charting-templates-module").then(__webpack_require__.bind(null,
          /*! ./charting-templates/charting-templates.module */
          "./src/app/modules/doctor-dashbord/settings/charting-templates/charting-templates.module.ts")).then(function (dd) {
            return dd.ChartingTemplatesModule;
          });
        }
      }, {
        path: 'Printouts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | printouts-printouts-module */
          "printouts-printouts-module").then(__webpack_require__.bind(null,
          /*! ./printouts/printouts.module */
          "./src/app/modules/doctor-dashbord/settings/printouts/printouts.module.ts")).then(function (dd) {
            return dd.PrintoutsModule;
          });
        }
      }, {
        path: 'Emails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | emails-emails-module */
          "emails-emails-module").then(__webpack_require__.bind(null,
          /*! ./emails/emails.module */
          "./src/app/modules/doctor-dashbord/settings/emails/emails.module.ts")).then(function (dd) {
            return dd.EmailsModule;
          });
        }
      }, {
        path: 'Billing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | billing-billing-module */
          "billing-billing-module").then(__webpack_require__.bind(null,
          /*! ./billing/billing.module */
          "./src/app/modules/doctor-dashbord/settings/billing/billing.module.ts")).then(function (dd) {
            return dd.BillingModule;
          });
        }
      }, {
        path: 'PatientGroups',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | patient-groups-patient-groups-module */
          "patient-groups-patient-groups-module").then(__webpack_require__.bind(null,
          /*! ./patient-groups/patient-groups.module */
          "./src/app/modules/doctor-dashbord/settings/patient-groups/patient-groups.module.ts")).then(function (dd) {
            return dd.PatientGroupsModule;
          });
        }
      }, {
        path: 'ImportExport',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | import-export-import-export-module */
          "import-export-import-export-module").then(__webpack_require__.bind(null,
          /*! ./import-export/import-export.module */
          "./src/app/modules/doctor-dashbord/settings/import-export/import-export.module.ts")).then(function (dd) {
            return dd.ImportExportModule;
          });
        }
      }, {
        path: 'AutomaticIDGeneration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | automatic-idgeneration-automatic-idgeneration-module */
          "automatic-idgeneration-automatic-idgeneration-module").then(__webpack_require__.bind(null,
          /*! ./automatic-idgeneration/automatic-idgeneration.module */
          "./src/app/modules/doctor-dashbord/settings/automatic-idgeneration/automatic-idgeneration.module.ts")).then(function (dd) {
            return dd.AutomaticIDGenerationModule;
          });
        }
      }, {
        path: 'Insurance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | insurance-insurance-module */
          "insurance-insurance-module").then(__webpack_require__.bind(null,
          /*! ./insurance/insurance.module */
          "./src/app/modules/doctor-dashbord/settings/insurance/insurance.module.ts")).then(function (dd) {
            return dd.InsuranceModule;
          });
        }
      }]
    }];

    var SettingsRoutingModule = function SettingsRoutingModule() {
      _classCallCheck(this, SettingsRoutingModule);
    };

    SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SettingsRoutingModule
    });
    SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SettingsRoutingModule_Factory(t) {
        return new (t || SettingsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsRoutingModule, [{
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
  "./src/app/modules/doctor-dashbord/settings/settings-sidebar/settings-sidebar.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/settings-sidebar/settings-sidebar.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: SettingsSidebarComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsSettingsSidebarSettingsSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsSidebarComponent", function () {
      return SettingsSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SettingsSidebarComponent =
    /*#__PURE__*/
    function () {
      function SettingsSidebarComponent() {
        _classCallCheck(this, SettingsSidebarComponent);
      }

      _createClass(SettingsSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsSidebarComponent;
    }();

    SettingsSidebarComponent.ɵfac = function SettingsSidebarComponent_Factory(t) {
      return new (t || SettingsSidebarComponent)();
    };

    SettingsSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsSidebarComponent,
      selectors: [["app-settings-sidebar"]],
      decls: 80,
      vars: 0,
      consts: [["id", "settingSidebar", 1, "navbar-nav", "bg-white", "text-dark", "sidebar", "accordion"], ["routerLink", "#", 1, "sidebar-brand", "d-flex", "align-items-center", "justify-content-center"], [1, "sidebar-brand-text"], [1, "sidebar-divider", "my-0"], [1, "nav-item", "active"], ["routerLink", "#", 1, "nav-link"], [1, "sidebar-divider"], [1, "nav-item"], ["routerLink", "/Doctor/Settings/practice-details", 1, "nav-link"], ["routerLink", "/Doctor/Settings/PracticeStaff", 1, "nav-link"], ["routerLink", "/Doctor/Settings/Calendar", 1, "nav-link"], ["routerLink", "/Doctor/Settings/Communications", 1, "nav-link"], ["routerLink", "/Doctor/Settings/PricingCatalog", 1, "nav-link"], ["routerLink", "/Doctor/Settings/ConsentForms", 1, "nav-link"], ["routerLink", "/Doctor/Settings/DataSecurity", 1, "nav-link"], ["routerLink", "/Doctor/Settings/ClinicalNotesCatalog", 1, "nav-link"], ["routerLink", "/Doctor/Settings/DrugCatalog", 1, "nav-link"], ["routerLink", "/Doctor/Settings/ChartingTemplates", 1, "nav-link"], ["routerLink", "/Doctor/Settings/Printouts", 1, "nav-link"], ["routerLink", "/Doctor/Settings/Emails", 1, "nav-link"], ["routerLink", "/Doctor/Settings/Billing", 1, "nav-link"], ["routerLink", "/Doctor/Settings/PatientGroups", 1, "nav-link"], ["routerLink", "/Doctor/Settings/ImportExport", 1, "nav-link"], ["routerLink", "/Doctor/Settings/AutomaticIDGeneration", 1, "nav-link"], ["routerLink", "/Doctor/Settings/Insurance", 1, "nav-link"]],
      template: function SettingsSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WhealthyLife");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Practice Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Practice Staff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Calender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Communications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pricing Catalogue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Consent Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Data Security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Clinical Notes Catalogue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Drug Catalogue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Charting Templates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Printouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Emails");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Billing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Patient Groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Import Export");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Auto ID Generation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Insurance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#settingSidebar[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 80vh;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n  color: white;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n#settingSidebar[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-left: 1.4rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3ItZGFzaGJvcmQvc2V0dGluZ3Mvc2V0dGluZ3Mtc2lkZWJhci9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3Rvci1kYXNoYm9yZFxcc2V0dGluZ3NcXHNldHRpbmdzLXNpZGViYXJcXHNldHRpbmdzLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL3NldHRpbmdzLXNpZGViYXIvc2V0dGluZ3Mtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QUR1QkE7RUFDSSxzQkFBQTtBQ3BCSjs7QUR5QlE7RUFDSSwrQkFBQTtBQ3RCWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL3NldHRpbmdzLXNpZGViYXIvc2V0dGluZ3Mtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZXR0aW5nU2lkZWJhciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG51bCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vLyAuc2lkZWJhciB7XHJcbi8vICAgICB3aWR0aDogMjByZW0gIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyB1bCBsaSBhIHNwYW4ge1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbi8vIH1cclxuLy8gLnNpZGViYXItaGVhZGluZyB7XHJcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gfVxyXG4vLyAuc2lkZWJhci1icmFuZC10ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuLy8gfVxyXG4vLyAuc2lkZWJhciAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuLy8gICAgIHdpZHRoOiAxOXJlbTtcclxuLy8gfVxyXG5cclxuLy8gLnNpZGViYXItYnJhbmQtdGV4dCB7XHJcbi8vICAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jc2V0dGluZ1NpZGViYXIge1xyXG4gICAgPiBsaSB7XHJcbiAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjRyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiI3NldHRpbmdTaWRlYmFyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbnVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbiNzZXR0aW5nU2lkZWJhciA+IGxpID4gYSB7XG4gIHBhZGRpbmctbGVmdDogMS40cmVtICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings-sidebar',
          templateUrl: './settings-sidebar.component.html',
          styleUrls: ['./settings-sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/settings/settings.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/settings.component.ts ***!
    \************************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppModulesDoctorDashbordSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./settings-sidebar/settings-sidebar.component */
    "./src/app/modules/doctor-dashbord/settings/settings-sidebar/settings-sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent() {
        _classCallCheck(this, SettingsComponent);
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)();
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 6,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-2"], [1, "col-md-10"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-settings-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SettingsSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9yLWRhc2hib3JkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/doctor-dashbord/settings/settings.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/doctor-dashbord/settings/settings.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SettingsModule */

  /***/
  function srcAppModulesDoctorDashbordSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
      return SettingsModule;
    });
    /* harmony import */


    var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./settings.component */
    "./src/app/modules/doctor-dashbord/settings/settings.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/modules/doctor-dashbord/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings-sidebar/settings-sidebar.component */
    "./src/app/modules/doctor-dashbord/settings/settings-sidebar/settings-sidebar.component.ts"); // import { SettingsSidebarComponent } from './../../../component/settings-sidebar/settings-sidebar.component';


    var SettingsModule = function SettingsModule() {
      _classCallCheck(this, SettingsModule);
    };

    SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
    SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SettingsModule_Factory(t) {
        return new (t || SettingsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsModule, {
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"], _settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SettingsSidebarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"], _settings_sidebar_settings_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SettingsSidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map
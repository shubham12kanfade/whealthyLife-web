function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guard_role_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guard/role-guard.service */
    "./src/app/guard/role-guard.service.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-public-public-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modules-public-public-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/public/public.module */
        "./src/app/modules/public/public.module.ts")).then(function (ud) {
          return ud.PublicModule;
        });
      }
    }, {
      path: 'Doctor',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-doctor-dashbord-doctor-dashbord-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modules-doctor-dashbord-doctor-dashbord-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/doctor-dashbord/doctor-dashbord.module */
        "./src/app/modules/doctor-dashbord/doctor-dashbord.module.ts")).then(function (dd) {
          return dd.DoctorDashbordModule;
        });
      },
      canActivate: [_guard_role_guard_service__WEBPACK_IMPORTED_MODULE_2__["RoleGuardService"]]
    }, {
      path: 'video-conference',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | modules-video-conference-video-conference-module */
        [__webpack_require__.e("common"), __webpack_require__.e("modules-video-conference-video-conference-module")]).then(__webpack_require__.bind(null,
        /*! ./modules/video-conference/video-conference.module */
        "./src/app/modules/video-conference/video-conference.module.ts")).then(function (video) {
          return video.VideoConferenceModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js"); // import * as firebase from "firebase-admin";


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, cookies) {
        _classCallCheck(this, AppComponent);

        this.cookies = cookies;
        this.title = 'Praco-Site';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cookieValue = this.cookies.get('token'); // var firebaseConfig = {
          //   apiKey: "AIzaSyDCFNCZ83Kv9Lz5QLoR-e2PaeQDMLqmpvw",
          //   authDomain: "whealthylife-ae995.firebaseapp.com",
          //   databaseURL: "https://whealthylife-ae995.firebaseio.com",
          //   projectId: "whealthylife-ae995",
          //   storageBucket: "whealthylife-ae995.appspot.com",
          //   messagingSenderId: "802033719823",
          //   appId: "1:802033719823:web:495681b8fafb7c5885a17a",
          //   measurementId: "G-TB767VQ4NP"
          // };
          // firebase.initializeApp(firebaseConfig);
          // firebase.analytics();
          // var message = firebase.messaging();
          // message.getToken().then(rerData => {
          //   console.log("AppComponent -> constructor -> getToken", rerData)
          // }).catch(error => {
          //   console.log("AppComponent -> constructor -> error", error)
          // })
          // message.onMessage((payload) => {
          //   console.log('Message received. ', payload);
          //   // ...
          // })
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideConfig", function () {
      return provideConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _services_current_loc_ip_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/current-loc-ip.service */
    "./src/app/services/current-loc-ip.service.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_api_apicall_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/api/apicall.service */
    "./src/app/services/api/apicall.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/forgot-password/forgot-password.component */
    "./src/app/component/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _component_design_design_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./component/design/design.component */
    "./src/app/component/design/design.component.ts");
    /* harmony import */


    var _component_notification_popup_notification_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./component/notification-popup/notification-popup.component */
    "./src/app/component/notification-popup/notification-popup.component.ts");
    /* harmony import */


    var _component_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./component/my-appointments/my-appointments.component */
    "./src/app/component/my-appointments/my-appointments.component.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/angularx-social-login.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var ngx_captcha__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-captcha */
    "./node_modules/ngx-captcha/__ivy_ngcc__/fesm2015/ngx-captcha.js");

    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"]([{
      id: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["FacebookLoginProvider"].PROVIDER_ID,
      provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["FacebookLoginProvider"]("268964477481111")
    }]);

    function provideConfig() {
      return config;
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_current_loc_ip_service__WEBPACK_IMPORTED_MODULE_0__["CurrentLocIpService"], _services_api_apicall_service__WEBPACK_IMPORTED_MODULE_9__["ApiCallService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"], primeng_api__WEBPACK_IMPORTED_MODULE_15__["MessageService"], angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthService"], {
        provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"],
        useFactory: provideConfig
      }],
      imports: [[angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_21__["NgxCaptchaModule"], // AngularFireMessagingModule,
      // AngularFireModule,
      _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordComponent"], _component_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_18__["MyAppointmentsComponent"], _component_design_design_component__WEBPACK_IMPORTED_MODULE_16__["DesignComponent"], _component_notification_popup_notification_popup_component__WEBPACK_IMPORTED_MODULE_17__["NotificationPopupComponent"]],
        imports: [angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_21__["NgxCaptchaModule"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _component_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordComponent"], _component_my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_18__["MyAppointmentsComponent"], _component_design_design_component__WEBPACK_IMPORTED_MODULE_16__["DesignComponent"], _component_notification_popup_notification_popup_component__WEBPACK_IMPORTED_MODULE_17__["NotificationPopupComponent"]],
          imports: [angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["SocialLoginModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_21__["NgxCaptchaModule"], // AngularFireMessagingModule,
          // AngularFireModule,
          _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot()],
          providers: [_services_current_loc_ip_service__WEBPACK_IMPORTED_MODULE_0__["CurrentLocIpService"], _services_api_apicall_service__WEBPACK_IMPORTED_MODULE_9__["ApiCallService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"], primeng_api__WEBPACK_IMPORTED_MODULE_15__["MessageService"], angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthService"], {
            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_19__["AuthServiceConfig"],
            useFactory: provideConfig
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/design/design.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/design/design.component.ts ***!
    \******************************************************/

  /*! exports provided: DesignComponent */

  /***/
  function srcAppComponentDesignDesignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesignComponent", function () {
      return DesignComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DesignComponent =
    /*#__PURE__*/
    function () {
      function DesignComponent() {
        _classCallCheck(this, DesignComponent);
      }

      _createClass(DesignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DesignComponent;
    }();

    DesignComponent.ɵfac = function DesignComponent_Factory(t) {
      return new (t || DesignComponent)();
    };

    DesignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DesignComponent,
      selectors: [["app-design"]],
      decls: 2,
      vars: 0,
      template: function DesignComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "design works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kZXNpZ24vZGVzaWduLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-design',
          templateUrl: './design.component.html',
          styleUrls: ['./design.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/forgot-password/forgot-password.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/component/forgot-password/forgot-password.component.ts ***!
    \************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppComponentForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/observable/TimerObservable */
    "./node_modules/rxjs-compat/_esm2015/observable/TimerObservable.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/registration.service */
    "./src/app/services/registration.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotPasswordComponent_label_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resend OTP in ", ctx_r35.ticks, " seconds");
      }
    }

    function ForgotPasswordComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_a_18_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.resendOTP();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resend OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(RegistrationService, _snackBar, Router, fb) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.RegistrationService = RegistrationService;
        this._snackBar = _snackBar;
        this.Router = Router;
        this.fb = fb;
        this.variable = false;
        this.ticks = 0;
        this.hidden = true;
        this.hide = false;
        this.horizontalPosition = 'end';
        this.verticalPosition = 'top';
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotPassword = this.fb.group({
            forgot: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.timer();
        }
      }, {
        key: "timer",
        value: function timer() {
          var _this = this;

          var timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_1__["TimerObservable"].create(120, 800);
          this.subscription = timer.subscribe(function (t) {
            _this.ticks = t;

            if (t > 119) {
              _this.hide = true;

              _this.subscription.unsubscribe();
            }
          });
        }
      }, {
        key: "resendOTP",
        value: function resendOTP() {
          var _this2 = this;

          var data = {
            email: this.forgotPassword.controls.forgot.value
          };
          console.log("file: forgot-password.component.ts ~ line 61 ~ ForgotPasswordComponent ~ resendOTP ~ data", data);
          this.RegistrationService.forOtp(data).then(function (reData) {
            var _a, _b;

            console.log("file: forgot-password.component.ts ~ line 63 ~ ForgotPasswordComponent ~ this.RegistrationService.forOtp ~ reData", reData);

            _this2._snackBar.open((_b = (_a = reData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message, '', {
              duration: 2000,
              horizontalPosition: _this2.horizontalPosition,
              verticalPosition: _this2.verticalPosition,
              panelClass: ['redMatch']
            });
          })["catch"](function (err) {
            var _a, _b;

            _this2._snackBar.open((_b = (_a = err) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message, '', {
              duration: 2000,
              horizontalPosition: _this2.horizontalPosition,
              verticalPosition: _this2.verticalPosition,
              panelClass: ['redNoMatch']
            });
          });
          this.hide = false;
          this.timer();
        }
      }, {
        key: "sub",
        value: function sub() {
          var _this3 = this;

          var data = {
            email: this.forgotPassword.controls.forgot.value
          };
          console.log("file: forgot-password.component.ts ~ line 88 ~ ForgotPasswordComponent ~ sub ~ data", data);
          this.RegistrationService.forOtp(data).then(function (reData) {
            var _a, _b;

            console.log("file: forgot-password.component.ts ~ line 88 ~ ForgotPasswordComponent ~ this.RegistrationService.forOtp ~ reData", reData);

            _this3._snackBar.open((_b = (_a = reData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message, '', {
              duration: 2000,
              horizontalPosition: _this3.horizontalPosition,
              verticalPosition: _this3.verticalPosition,
              panelClass: ['redMatch']
            });

            _this3.Router.navigate(['verify_otp_reg/' + data.email]);
          })["catch"](function (err) {
            var _a, _b;

            _this3._snackBar.open((_b = (_a = err) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message, '', {
              duration: 2000,
              horizontalPosition: _this3.horizontalPosition,
              verticalPosition: _this3.verticalPosition,
              panelClass: ['redNoMatch']
            });
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 21,
      vars: 3,
      consts: [[1, "sect-top"], [1, "container"], [1, "col-sm-12", "justify-content-center"], [1, "row", "row-forgot"], [1, "col-sm-4", "mb-5", "center"], [1, "no-border"], [1, ""], [1, "fortitle"], [1, "divide-line"], [1, "card-body"], [1, "form", 3, "formGroup"], ["id", "username", "name", "username", "placeholder", "Email id/ Mobile Number", "type", "text", "formControlName", "forgot", 1, "form-control", "email-text", "mt-3"], [4, "ngIf"], ["class", "reend", 3, "click", 4, "ngIf"], [1, "submitBtn", "btn", 3, "click"], [1, "reend", 3, "click"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Provide us the email id/ mobile of your WhealthyLife account and we will send you an email/otp with instructions to reset your password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email ID/Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForgotPasswordComponent_label_17_Template, 2, 1, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotPasswordComponent_a_18_Template, 3, 0, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_19_listener() {
            return ctx.sub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send Me instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hide);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".center-align[_ngcontent-%COMP%] {\n  width: 400px;\n  display: block;\n  margin: 0 auto;\n}\n\n.submitBtn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #14bef0;\n  margin-top: 20px;\n  width: 100%;\n  font-size: 18px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  height: 40px;\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid lightgray;\n  padding: 10px;\n}\n\n.forminput[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.fortitle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: bold;\n  color: black;\n}\n\n.head-forgot[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  margin: 0px 10px;\n  min-width: 263px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.text-head[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.divide-line[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.row-forgot[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  justify-content: center;\n}\n\n.sect-top[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n  .redNoMatch {\n  font-size: 30px !important;\n  color: white;\n  background: #F44336 !important;\n}\n\n  .redMatch {\n  font-size: 30px !important;\n  color: white;\n  background: #5936f4 !important;\n}\n\n.reend[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n}\n\n.reend[_ngcontent-%COMP%]:hover {\n  color: blueviolet !important;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXGNvbXBvbmVudFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUVJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNJLGFBQUE7QUNDTjs7QURFRTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURFRTtFQUNFLGdCQUFBO0VBQWlCLGdCQUFBO0VBQ2pCLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDRUo7O0FERUU7RUFDSSxZQUFBO0FDQ047O0FERUU7RUFDRSxrQ0FBQTtFQUFvQyxXQUFBO0FDRXhDOztBRENFO0VBQ0UsZ0JBQUE7RUFBbUIsdUJBQUE7QUNHdkI7O0FEQ0U7RUFDQyxpQkFBQTtBQ0VIOztBREFFO0VBRUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURFQTtFQUVFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWFsaWduIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zdWJtaXRCdG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0YmVmMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5mb3JtaW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ydGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5oZWFkLWZvcmdvdHtcclxuICAgIG1hcmdpbjowcHggMTBweDsgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIG1pbi13aWR0aDogMjYzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRleHQtaGVhZHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZS1saW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucm93LWZvcmdvdHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7ICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuc2VjdC10b3B7XHJcbiAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLnJlZE5vTWF0Y2hcclxue1xyXG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNGNDQzMzYgIWltcG9ydGFudDtcclxuIFxyXG59XHJcblxyXG46Om5nLWRlZXAgLnJlZE1hdGNoXHJcbntcclxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjNTkzNmY0ICFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG5cclxuLnJlZW5ke1xyXG4gIGZsb2F0OiByaWdodDsgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmVlbmQ6aG92ZXJ7XHJcbiAgY29sb3I6IGJsdWV2aW9sZXQgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iLCIuY2VudGVyLWFsaWduIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdWJtaXRCdG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGJlZjA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mb3JtaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9ydGl0bGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkLWZvcmdvdCB7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG1pbi13aWR0aDogMjYzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4udGV4dC1oZWFkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGl2aWRlLWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdy1mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlY3QtdG9wIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbjo6bmctZGVlcCAucmVkTm9NYXRjaCB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNGNDQzMzYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5yZWRNYXRjaCB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1OTM2ZjQgIWltcG9ydGFudDtcbn1cblxuLnJlZW5kIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWVuZDpob3ZlciB7XG4gIGNvbG9yOiBibHVldmlvbGV0ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss']
        }]
      }], function () {
        return [{
          type: _services_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/my-appointments/my-appointments.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/component/my-appointments/my-appointments.component.ts ***!
    \************************************************************************/

  /*! exports provided: MyAppointmentsComponent */

  /***/
  function srcAppComponentMyAppointmentsMyAppointmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAppointmentsComponent", function () {
      return MyAppointmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyAppointmentsComponent =
    /*#__PURE__*/
    function () {
      function MyAppointmentsComponent() {
        _classCallCheck(this, MyAppointmentsComponent);
      }

      _createClass(MyAppointmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyAppointmentsComponent;
    }();

    MyAppointmentsComponent.ɵfac = function MyAppointmentsComponent_Factory(t) {
      return new (t || MyAppointmentsComponent)();
    };

    MyAppointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAppointmentsComponent,
      selectors: [["app-my-appointments"]],
      decls: 19,
      vars: 0,
      consts: [[2, "margin-top", "100px"], [1, "container"], [1, "col-sm-12", "justify-content-center"], [1, "text-center", "justify-content-center", "d-flex", "mt-4"], [1, "row", "row-forgot"], [1, "col-sm-4", "mb-5", "center", "card"], [1, "no-border"], [1, ""], [1, "fortitle"], [1, "card-body"], [1, "form"], ["id", "username", "name", "username", "placeholder", "Email id/ Mobile Number", "type", "text", "value", "", 1, "form-control", "email-text", "mt-3"], [1, "submitBtn", "btn"]],
      template: function MyAppointmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "One place to store and manage all your medical records");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Provide us the email id/ mobile of your WhealthyLife account and we will send you an email/otp with instructions to reset your password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email ID/Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send Me instructions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
      styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  width: 400px;\n  display: block;\n  margin: 0 auto;\n}\n\n.submitBtn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #14bef0;\n  margin-top: 20px;\n  width: 100%;\n  font-size: 18px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  height: 40px;\n}\n\n.center[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.forminput[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.fortitle[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: black;\n}\n\n.head-forgot[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  margin: 0px 10px;\n  min-width: 263px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.text-head[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.divide-line[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.row-forgot[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  justify-content: center;\n}\n\n.sect-top[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L215LWFwcG9pbnRtZW50cy9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXGNvbXBvbmVudFxcbXktYXBwb2ludG1lbnRzXFxteS1hcHBvaW50bWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9teS1hcHBvaW50bWVudHMvbXktYXBwb2ludG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FET0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE1BO0VBRUksV0FBQTtFQUVBLGFBQUE7QUNMSjs7QURRRTtFQUNJLGFBQUE7QUNMTjs7QURRRTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDTE47O0FEUUU7RUFDRSxnQkFBQTtFQUFpQixnQkFBQTtFQUNqQixnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQ0pKOztBRFFFO0VBQ0ksWUFBQTtBQ0xOOztBRFFFO0VBQ0Usa0NBQUE7RUFBb0MsV0FBQTtBQ0p4Qzs7QURPRTtFQUNFLGdCQUFBO0VBQW1CLHVCQUFBO0FDSHZCOztBRE9FO0VBQ0MsaUJBQUE7QUNKSDs7QURPRTtFQUNJLHVCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbXktYXBwb2ludG1lbnRzL215LWFwcG9pbnRtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5jZW50ZXItYWxpZ24ge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdEJ0biB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRiZWYwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5mb3JtaW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ydGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQtZm9yZ290e1xyXG4gICAgbWFyZ2luOjBweCAxMHB4OyBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNjNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG5cclxuICAudGV4dC1oZWFke1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZGl2aWRlLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yb3ctZm9yZ290e1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDsgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zZWN0LXRvcHtcclxuICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfSIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdWJtaXRCdG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNGJlZjA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9ybWlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZvcnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkLWZvcmdvdCB7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIG1pbi13aWR0aDogMjYzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4udGV4dC1oZWFkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGl2aWRlLWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdy1mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlY3QtdG9wIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAppointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-appointments',
          templateUrl: './my-appointments.component.html',
          styleUrls: ['./my-appointments.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/notification-popup/notification-popup.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/component/notification-popup/notification-popup.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NotificationPopupComponent */

  /***/
  function srcAppComponentNotificationPopupNotificationPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPopupComponent", function () {
      return NotificationPopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationPopupComponent =
    /*#__PURE__*/
    function () {
      function NotificationPopupComponent() {
        _classCallCheck(this, NotificationPopupComponent);
      }

      _createClass(NotificationPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationPopupComponent;
    }();

    NotificationPopupComponent.ɵfac = function NotificationPopupComponent_Factory(t) {
      return new (t || NotificationPopupComponent)();
    };

    NotificationPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationPopupComponent,
      selectors: [["app-notification-popup"]],
      decls: 2,
      vars: 0,
      template: function NotificationPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification-popup works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ub3RpZmljYXRpb24tcG9wdXAvbm90aWZpY2F0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notification-popup',
          templateUrl: './notification-popup.component.html',
          styleUrls: ['./notification-popup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guard/role-guard.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/guard/role-guard.service.ts ***!
    \*********************************************/

  /*! exports provided: RoleGuardService */

  /***/
  function srcAppGuardRoleGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () {
      return RoleGuardService;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var RoleGuardService =
    /*#__PURE__*/
    function () {
      function RoleGuardService(router, userService) {
        _classCallCheck(this, RoleGuardService);

        this.router = router;
        this.userService = userService;
      }

      _createClass(RoleGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var userDesignation = this.userService.getUserDesignation();

          if (userDesignation == 'Doctor') {
            return true;
          }

          this.router.navigate(['/']);
          return false;
        }
      }]);

      return RoleGuardService;
    }();

    RoleGuardService.ɵfac = function RoleGuardService_Factory(t) {
      return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    RoleGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoleGuardService,
      factory: RoleGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api/apicall.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/api/apicall.service.ts ***!
    \*************************************************/

  /*! exports provided: ApiCallService */

  /***/
  function srcAppServicesApiApicallServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiCallService", function () {
      return ApiCallService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/services/api/configuration.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/services/user.service.ts");

    var ApiCallService =
    /*#__PURE__*/
    function (_configuration__WEBPA) {
      _inherits(ApiCallService, _configuration__WEBPA);

      var _super = _createSuper(ApiCallService);

      function ApiCallService(https, userService) {
        var _this4;

        _classCallCheck(this, ApiCallService);

        _this4 = _super.call(this);
        _this4.https = https;
        _this4.userService = userService;
        _this4.token = {};
        _this4.uploadSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        return _this4;
      }

      _createClass(ApiCallService, [{
        key: "setHeaderToken",
        value: function setHeaderToken(token) {
          this.token = token;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          var token = this.userService.getUserToken();
          this.token = token ? token : '';
          return {
            headers: {
              authorization: this.token
            }
          };
        }
      }, {
        key: "getData",
        value: function getData(subUrl) {
          var _this5 = this;

          var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return new Promise(function (resolve, reject) {
            var request = _this5.baseUrl + subUrl; // // console.log('data', request);

            _this5.https.get(request, token ? _this5.getHeader() : {}).subscribe(function (data) {
              return resolve(data);
            }, function (error) {
              return reject(error);
            });
          });
        }
      }, {
        key: "postData",
        value: function postData(subUrl, data) {
          var _this6 = this;

          var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return new Promise(function (resolve, reject) {
            // console.log('Token :', token);
            // console.log('Data :', this.getHeader());
            var request = _this6.baseUrl + subUrl;

            _this6.https.post(request, data, token ? _this6.getHeader() : {}).subscribe(function (res) {
              return resolve(res);
            }, function (error) {
              // console.log('Main Error :', error);
              reject(error);
            });
          });
        }
      }, {
        key: "putData",
        value: function putData(subUrl, data) {
          var _this7 = this;

          var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          // console.log('putdata call');
          return new Promise(function (resolve, reject) {
            var request = _this7.baseUrl + subUrl;

            _this7.https.put(request, data, token ? _this7.getHeader() : {}).subscribe(function (res) {
              return resolve(res);
            }, function (error) {
              return reject(error);
            });
          });
        }
      }, {
        key: "deleteData",
        value: function deleteData(subUrl) {
          var _this8 = this;

          var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return new Promise(function (resolve, reject) {
            var request = _this8.baseUrl + subUrl;

            _this8.https["delete"](request, token ? _this8.getHeader() : {}).subscribe(function (res) {
              return resolve(res);
            }, function (error) {
              return reject(error);
            });
          });
        }
      }, {
        key: "upload",
        value: function upload(file, url) {
          var _this9 = this;

          var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          console.log('file , url', file, url);
          return new Promise(function (resolve, reject) {
            var uploadData = new FormData();

            for (var i = 0; i < file.length; i++) {
              uploadData.append('myFile' + i, file[i], file[i].name);

              _this9.uploadSub.next(i);
            }

            var request = _this9.https.post(url, uploadData, token ? Object.assign(Object.assign({}, _this9.getHeader()), {
              reportProgress: true,
              observe: 'events'
            }) : {
              reportProgress: true,
              observe: 'events'
            }).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                /* // console.log('Upload Progress :', (event['loaded'] / event['total']) * 100 + '%'); */
                // console.log('Event :', event['loaded'], event['total']);
                if (_this9.uploadSub.value !== null) {
                  _this9.uploadSub.next(event['loaded'] / event['total'] * 100);
                } else {
                  // Here Stop Uploading Request Manually
                  request.unsubscribe();
                }
              } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                resolve(event.body);
              }
            }, function (error) {
              return reject(error);
            });
          });
        }
      }]);

      return ApiCallService;
    }(_configuration__WEBPACK_IMPORTED_MODULE_2__["ApiConfiguration"]);

    ApiCallService.ɵfac = function ApiCallService_Factory(t) {
      return new (t || ApiCallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
    };

    ApiCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiCallService,
      factory: ApiCallService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiCallService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api/configuration.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/api/configuration.ts ***!
    \***********************************************/

  /*! exports provided: ApiConfiguration */

  /***/
  function srcAppServicesApiConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function () {
      return ApiConfiguration;
    });
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ApiConfiguration = function ApiConfiguration() {
      var _this10 = this;

      _classCallCheck(this, ApiConfiguration);

      this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl; // Authorization

      this.authUrl = 'authentication/'; // User

      this.usersUrl = 'users';
      this.userRenewTokenUrl = this.usersUrl + '/renewtoken';
      this.products = 'products';
      this.payment = 'payment/get/payment';
      this.teacher = 'teachers';
      this.productsBy = 'products/by/cat/sub';
      this.Offers = 'offers';
      this.gallery = 'gallery';
      this.slider = 'gallery/slider/';
      this.allSlider = 'gallery/all/slider/';
      this.blog = 'blog';
      this.jobpost = this.blog + '/job';
      this.cartDetailsPlace = '/cart/palce/not';
      this.userInfo = this.usersUrl + '/getuseraddress/';
      this.careerCategory = 'career/category';
      this.coupone = 'coupone';
      this.UpdateTrack = this.products + '/cart/UpdateTrack';
      this.addOffline = 'addofflineorder';
      this.addFixedData = 'fixedorder';
      this.cart = 'cart';

      this.getUserVideos = function (id) {
        return _this10.products + '/video/Sessions/' + id;
      };

      this.login = function (data) {
        return _this10.usersUrl + '/' + data.email + '/password/' + data.password;
      };

      this.galleryWithType = function (type) {
        return _this10.gallery + '/type/' + type;
      }; // uploads


      this.uploadUrl = 'uploads/';
      this.verifyOTPUrl = this.authUrl + 'otp/verify';

      this.verifyMobileNoUrl = function (mobileNo) {
        return _this10.authUrl + 'check/mobile/' + mobileNo;
      };

      this.productsOffer = function (productId) {
        return _this10.products + '/maketodayoffer/' + productId;
      };

      this.sendOTPUrl = function (mobileNo) {
        return _this10.authUrl + 'otp/' + mobileNo;
      };

      this.updateUserUrl = function (userId) {
        return _this10.usersUrl + '/' + userId;
      };

      this.deleteUserUrl = function (userId) {
        return _this10.usersUrl + '/' + userId;
      };

      this.checkMobileExistUrl = function (mobile) {
        return _this10.usersUrl + '/mobile/' + mobile + '/exist';
      };

      this.getUserUrlBy = function (studentId) {
        return _this10.usersUrl + '/' + studentId;
      };

      this.cartDetails = function (status, id, track) {
        return _this10.products + _this10.cartDetailsPlace + '/' + status + '/userid/' + id + '/track/' + track;
      };
    };
    /***/

  },

  /***/
  "./src/app/services/current-loc-ip.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/current-loc-ip.service.ts ***!
    \****************************************************/

  /*! exports provided: CurrentLocIpService */

  /***/
  function srcAppServicesCurrentLocIpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentLocIpService", function () {
      return CurrentLocIpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CurrentLocIpService =
    /*#__PURE__*/
    function () {
      function CurrentLocIpService(http) {
        _classCallCheck(this, CurrentLocIpService);

        this.http = http;
      }

      _createClass(CurrentLocIpService, [{
        key: "getData",
        value: function getData() {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            var request = 'http://ip-api.com/json';

            _this11.http.get(request).subscribe(function (data) {
              return resolve(data);
            }, function (error) {
              return reject(error);
            });
          });
        }
      }]);

      return CurrentLocIpService;
    }();

    CurrentLocIpService.ɵfac = function CurrentLocIpService_Factory(t) {
      return new (t || CurrentLocIpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CurrentLocIpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrentLocIpService,
      factory: CurrentLocIpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentLocIpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/registration.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/registration.service.ts ***!
    \**************************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppServicesRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/apicall.service */
    "./src/app/services/api/apicall.service.ts");

    var RegistrationService =
    /*#__PURE__*/
    function () {
      function RegistrationService(Ap) {
        _classCallCheck(this, RegistrationService);

        this.Ap = Ap;
      }

      _createClass(RegistrationService, [{
        key: "registarUser",
        value: function registarUser(data) {
          return this.Ap.postData('authentication/register', data);
        }
      }, {
        key: "forOtp",
        value: function forOtp(data) {
          return this.Ap.postData('authentication/forgot/password', data);
        }
      }, {
        key: "CheckOtp",
        value: function CheckOtp(data) {
          return this.Ap.postData('authentication/verify/otp', data);
        }
      }, {
        key: "cgnPAss",
        value: function cgnPAss(data) {
          return this.Ap.postData('authentication/update/password', data);
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ɵfac = function RegistrationService_Factory(t) {
      return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]));
    };

    RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistrationService,
      factory: RegistrationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(storage, Router) {
        _classCallCheck(this, UserService);

        this.storage = storage;
        this.Router = Router;
        this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(UserService, [{
        key: "addUserInfo",
        value: function addUserInfo(data) {
          this.storage.set('userInfo_WhealthyLife', JSON.stringify(data));
          this.storage.set('userInfo_token', data.token);
          this.userInfo.next(data);
          return;
        }
      }, {
        key: "getUserLoginStatus",
        value: function getUserLoginStatus() {
          return this.userInfo;
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          console.log("UserService -> getUserInfo -> this.storage.get('userInfo_WhealthyLife')", this.storage.get('userInfo_WhealthyLife'));

          if (this.storage.get('userInfo_WhealthyLife')) {
            return JSON.parse(this.storage.get('userInfo_WhealthyLife'));
          } else {
            return false;
          }
        }
      }, {
        key: "getUserDesignation",
        value: function getUserDesignation() {
          if (this.storage.get('userInfo_WhealthyLife')) {
            return JSON.parse(this.storage.get('userInfo_WhealthyLife')).designation;
          } else {
            return false;
          }
        }
      }, {
        key: "getUserToken",
        value: function getUserToken() {
          if (this.storage.get('userInfo_WhealthyLife')) {
            return this.storage.get('userInfo_token');
          } else {
            return false;
          }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.storage.deleteAll();
          this.userInfo.next(null);
          this.Router.navigate([""]);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/fullcalendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-fullcalendar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-message.js");
    /* harmony import */


    var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/progressspinner */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-progressspinner.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-multiselect.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-autocomplete.js");
    /* harmony import */


    var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ngx-mat-select-search */
    "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var material = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__["MultiSelectModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__["AutoCompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__["MultiSelectModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__["AutoCompleteModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__["MultiSelectModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__["AutoCompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__["MultiSelectModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__["AutoCompleteModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__["MultiSelectModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__["AutoCompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__["ProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOptionModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_32__["MultiSelectModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_33__["AutoCompleteModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_34__["NgxMatSelectSearchModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      // apiUrl:"http://3.6.80.178:3311/api/v1/",
      // apiUrl:"http://192.168.0.178:3311/api/v1/"
      // apiUrl:"http://localhost:3311/api/v1/",
      apiUrl: "https://api.whealthylife.in/api/v1/",
      //  apiUrl:"http://localhost:3311/api/v1/",
      // apiUrl:"http://15.207.7.56:3322/api/v1/",
      // apiUrl:"http://3.128.207.146:3322/api/v1/",
      // apiUrl: "http://3.128.207.146:3322/api/v1/",
      firebaseConfig: {
        apiKey: "AIzaSyBBM6AZOA2OXjOEd2yYZSn2XvIABPiXMqU",
        authDomain: "whealthy-life.firebaseapp.com",
        databaseURL: "https://whealthy-life.firebaseio.com",
        projectId: "whealthy-life",
        storageBucket: "whealthy-life.appspot.com",
        messagingSenderId: "307401641913",
        appId: "1:307401641913:web:e609667c20e5032566f068",
        measurementId: "G-FDH6V18HMD"
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\wImportantFolder\whealthylife\whealthyLife-web-1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
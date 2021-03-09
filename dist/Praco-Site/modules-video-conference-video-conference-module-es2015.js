(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-video-conference-video-conference-module"],{

/***/ "./src/app/modules/video-conference/video-conference-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/video-conference/video-conference-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: VideoConferenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenceRoutingModule", function() { return VideoConferenceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _video_conference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-conference.component */ "./src/app/modules/video-conference/video-conference.component.ts");





const routes = [
    { path: '', component: _video_conference_component__WEBPACK_IMPORTED_MODULE_2__["VideoConferenceComponent"] },
];
class VideoConferenceRoutingModule {
}
VideoConferenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoConferenceRoutingModule });
VideoConferenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoConferenceRoutingModule_Factory(t) { return new (t || VideoConferenceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoConferenceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoConferenceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/video-conference/video-conference.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/video-conference/video-conference.component.ts ***!
  \************************************************************************/
/*! exports provided: VideoConferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenceComponent", function() { return VideoConferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/consultation.service */ "./src/app/services/consultation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











var OT = window['OT'];
class VideoConferenceComponent {
    constructor(document, confernceService, messageService, router, userService, CookieService) {
        this.document = document;
        this.confernceService = confernceService;
        this.messageService = messageService;
        this.router = router;
        this.userService = userService;
        this.CookieService = CookieService;
        this.apiKey = "46730612";
        this.getSession();
    }
    getSession() {
        if (this.userService.getUserDesignation() === 'Doctor') {
            this.confernceService.getDoctorSession().then(resData => {
                if (resData.code === 200) {
                    this.sessionId = resData.data.sessionId;
                    this.token = resData.data.token;
                    this.initializeSession();
                }
                else {
                    this.showToast('error', "Session Faild", resData.data);
                    this.router.navigate(['/']);
                }
            }).catch(error => {
                console.log("VideoConferenceComponent -> getSession -> error", error);
            });
        }
        else if (this.userService.getUserDesignation() === 'User') {
            this.confernceService.getPatientSession().then(resData => {
                if (resData.code === 200) {
                    this.sessionId = resData.data.sessionId;
                    this.token = resData.data.token;
                    this.initializeSession();
                }
                else {
                    this.showToast('error', "Session Faild", resData.data);
                    this.router.navigate(['/']);
                }
            }).catch(error => {
                console.log("VideoConferenceComponent -> getSession -> error", error);
            });
        }
    }
    initializeSession() {
        this.getSessionChecked();
        var session = OT.initSession(this.apiKey, this.sessionId);
        console.log("VideoConferenceComponent -> initializeSession -> this.apiKey", this.apiKey, this.sessionId, this.token);
        session.on('streamCreated', function (event) {
            session.subscribe(event.stream, 'subscriber', {
                insertMode: 'append',
                width: '100%',
                height: '100%'
            }, this.handleError);
        });
        var publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        }, this.handleError);
        session.connect(this.token, function (error) {
            if (error) {
                if (error.code == 1004) {
                    this.initializeSession();
                    return;
                }
                this.handleError(error);
            }
            else {
                session.publish(publisher);
            }
        });
    }
    handleError(error) {
        if (error) {
            alert(error.message);
        }
    }
    getSessionChecked() {
        var timeInterval = setInterval(() => {
            if (this.userService.getUserDesignation() === 'Doctor') {
                this.confernceService.getDoctorSession().then(resData => {
                    if (resData.code === 201) {
                        clearInterval(timeInterval);
                        this.router.navigate(['/']);
                    }
                }).catch(error => {
                    console.log("VideoConferenceComponent -> getSession -> error", error);
                });
            }
            else if (this.userService.getUserDesignation() === 'User') {
                this.confernceService.getPatientSession().then(resData => {
                    if (resData.code === 201) {
                        clearInterval(timeInterval);
                        this.router.navigate(['/']);
                    }
                }).catch(error => {
                    console.log("VideoConferenceComponent -> getSession -> error", error);
                });
            }
        }, 3000);
    }
    endSession() {
        const Cooki = JSON.parse(this.CookieService.get('userInfo_WhealthyLife'));
        const data = {
            patient: Cooki._id
        };
        this.confernceService.endSession(data).then(resData => {
            console.log("VideoConferenceComponent -> endSession -> resData", resData);
            this.document.location.href = 'http://localhost:4200/';
        }).catch(error => {
            console.log("VideoConferenceComponent -> endSession -> error", error);
        });
    }
    ngOnInit() {
        this.timerCounter();
    }
    ngAfterViewInit() {
    }
    timerCounter() {
        this.sec = 1800;
        this.countDown = setInterval(() => {
            this.secpass();
        }, 1000);
    }
    showToast(type, messageType, message) {
        setTimeout(() => {
            this.messageService.add({ severity: type, summary: messageType, detail: message });
        });
    }
    secpass() {
        this.min = Math.floor(this.sec / 60);
        this.remSec = this.sec % 60;
        if (this.remSec < 10) {
            this.remSec = '0' + this.remSec;
        }
        if (this.min < 10) {
            this.min = '0' + this.min;
        }
        if (this.sec > 0) {
            this.sec = this.sec - 1;
        }
        else {
            clearInterval(this.countDown);
        }
    }
}
VideoConferenceComponent.ɵfac = function VideoConferenceComponent_Factory(t) { return new (t || VideoConferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_2__["ConsultationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"])); };
VideoConferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoConferenceComponent, selectors: [["app-video-conference"]], decls: 24, vars: 3, consts: [[1, "custom-error", 3, "showTransformOptions"], ["id", "videos"], ["id", "subscriber"], ["id", "publisher"], ["id", "endcall"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["id", "timer"], ["id", "addPrescription"], ["mat-raised-button", ""], ["id", "addMedicine"], ["id", "addMedia"]], template: function VideoConferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoConferenceComponent_Template_button_click_5_listener() { return ctx.endSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "End call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "dynamic_feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "add prescription ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "note_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "add medicine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "perm_media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " add media ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTransformOptions", "translateX(100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.min, " : ", ctx.remSec, "");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__["Toast"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["#endcall[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 3rem;\n  z-index: 99;\n  right: 36rem;\n}\n\n#timer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 3.5rem;\n  z-index: 99;\n  right: 43rem;\n  color: #ffffff;\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n#addPrescription[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 3rem;\n  z-index: 99;\n  left: 37%;\n}\n\n#addMedicine[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 3rem;\n  z-index: 99;\n  left: 49%;\n}\n\n#addMedia[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 3rem;\n  z-index: 99;\n  left: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aWRlby1jb25mZXJlbmNlL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcdmlkZW8tY29uZmVyZW5jZVxcdmlkZW8tY29uZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aWRlby1jb25mZXJlbmNlL3ZpZGVvLWNvbmZlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aWRlby1jb25mZXJlbmNlL3ZpZGVvLWNvbmZlcmVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZW5kY2FsbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHJpZ2h0OiAzNnJlbTtcclxufVxyXG5cclxuI3RpbWVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMy41cmVtO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICByaWdodDogNDNyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiNhZGRQcmVzY3JpcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzcmVtO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBsZWZ0OiAzNyU7XHJcbn1cclxuXHJcbiNhZGRNZWRpY2luZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDNyZW07XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGxlZnQ6IDQ5JTtcclxufVxyXG5cclxuI2FkZE1lZGlhIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogM3JlbTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgbGVmdDogNjAlO1xyXG59XHJcbiIsIiNlbmRjYWxsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDNyZW07XG4gIHotaW5kZXg6IDk5O1xuICByaWdodDogMzZyZW07XG59XG5cbiN0aW1lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzLjVyZW07XG4gIHotaW5kZXg6IDk5O1xuICByaWdodDogNDNyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNhZGRQcmVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogM3JlbTtcbiAgei1pbmRleDogOTk7XG4gIGxlZnQ6IDM3JTtcbn1cblxuI2FkZE1lZGljaW5lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHotaW5kZXg6IDk5O1xuICBsZWZ0OiA0OSU7XG59XG5cbiNhZGRNZWRpYSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzcmVtO1xuICB6LWluZGV4OiA5OTtcbiAgbGVmdDogNjAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoConferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-conference',
                templateUrl: './video-conference.component.html',
                styleUrls: ['./video-conference.component.scss']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_2__["ConsultationService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/video-conference/video-conference.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/video-conference/video-conference.module.ts ***!
  \*********************************************************************/
/*! exports provided: VideoConferenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenceModule", function() { return VideoConferenceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _video_conference_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-conference-routing.module */ "./src/app/modules/video-conference/video-conference-routing.module.ts");
/* harmony import */ var _video_conference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-conference.component */ "./src/app/modules/video-conference/video-conference.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






class VideoConferenceModule {
}
VideoConferenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoConferenceModule });
VideoConferenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoConferenceModule_Factory(t) { return new (t || VideoConferenceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _video_conference_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoConferenceRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoConferenceModule, { declarations: [_video_conference_component__WEBPACK_IMPORTED_MODULE_3__["VideoConferenceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _video_conference_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoConferenceRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoConferenceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _video_conference_component__WEBPACK_IMPORTED_MODULE_3__["VideoConferenceComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _video_conference_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoConferenceRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-video-conference-video-conference-module-es2015.js.map
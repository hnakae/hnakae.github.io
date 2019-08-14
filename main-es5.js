(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div class=\"content\">\n    <app-content>\n        <router-outlet></router-outlet>\n    </app-content>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/api/gmap/gmap.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/api/gmap/gmap.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map\n  [latitude]='latitude'\n  [longitude]='longitude'\n  [mapTypeId]='mapType'\n  [zoom]='7'\n  [maxZoom]='10'\n  [styles]='style'\n  >\n  <agm-marker\n    [latitude]=\"latitude\"\n    [longitude]=\"longitude\"\n  >\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/content/content.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/content/content.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- flex nav -->\n<!-- flex direction changes -->\n<div class=\"nav_bar\" id=\"nav_bar\"> \n  <header>\n    <a routerLink=\"/\">\n      <img (click)=\"hideMobileOn()\" class=\"logo\" src=\"../../../../assets/images/custom-logo.png\">\n    </a>\n\n    <nav [class]=\"hideMobile\" class=\"box\">\n      <div class=\"nav_links\">\n        <a (click)=\"hideMobileOn()\" routerLink=\"/\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span> Home</span> </a>\n        <a (click)=\"hideMobileOn()\" routerLink=\"/about\"> <i class=\"fa fa-user\" aria-hidden=\"true\"> </i> <span> About</span> </a>\n        <a (click)=\"hideMobileOn()\" routerLink=\"/work\"> <i class=\"fa fa-code\" aria-hidden=\"true\"> </i> <span> Work</span></a>\n        <a (click)=\"hideMobileOn()\" routerLink=\"/contact\"> <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"> </i> <span> Contact</span></a>\n      </div>\n    </nav>\n\n    <ul class=\"social-media\">\n      <li>\n        <a href=\"https://www.linkedin.com/in/hironakae/\">\n          <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>        \n        </a>\n      </li>\n      <!-- <li>\n          <a href=\"https://twitter.com/Hiro_Nakae\">\n            <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>          \n          </a>\n      </li> -->\n      <li>\n        <a href=\"https://github.com/hnakae\">\n          <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n        </a>\n      </li>\n      <!-- <li>\n        <a href=\"https://medium.com/@nakae27\">\n          <i class=\"fa fa-medium\" aria-hidden=\"true\"></i>          \n        </a>\n      </li> -->\n    </ul>\n\n    <img (click)=\"toggleMenu()\"  class=\"menu\" src=\"{{path}}\" alt=\"toggle menu\" id=\"menu\">\n  </header>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/about/about.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n  <div class=\"content\">\n\n    <section class=\"about\">\n\n      <div class=\"container\">\n        <!-- <span class=\"hello animated  slideInDown one\">Hello.</span>  -->\n        <h1 class=\"hello animated  flipInX one\">Hello.</h1><br>\n        <p class=\"animated flipInX\"> \n          I hand craft SaaS solutions and web applications to <br>\n          solve business problems. I love building well designed products <br>\n          and working with specialists from different fields that can inspire <br>\n          me to become even better. Here are some of my works <br> \n          and I hope to get in touch with you soon!\n        </p> <br>\n        <a class=\"action-btn animated  flipInX one\" routerLink=\"/work\">Check out my work</a> \n      </div>\n\n    </section>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/contact/contact.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  \n  <div class=\"contact-content\">\n    <div class=\"wrapper\">\n      <div class=\"content group animated  slideInUp one\">\n        <h1 *ngIf=\"!submitted\">From:</h1>\n        <div *ngIf=\"submitted\" class=\"wrapper\">\n          <div class=\"content\">\n            <h1>Message Sent!</h1>\n          </div>\n        </div>\n        <form *ngIf=\"!submitted\" #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n          <div class=\"fieldwrap group\">\n            <div class=\"formleft\">\n              <input\n                type=\"text\"\n                name=\"name\"\n                id=\"name\"\n                placeholder=\"Name\"\n                [(ngModel)]=\"emailModel.name\"\n                required\n                #name=\"ngModel\"\n              /><br />\n            </div>\n\n            <!-- {{ name.untouched }} -->\n\n            <div class=\"formright\">\n              <input\n                type=\"text\"\n                name=\"email\"\n                id=\"email\"\n                required\n                placeholder=\"Email\"\n                [(ngModel)]=\"emailModel.email\"\n                [ngModelOptions]=\"{standalone: true}\"\n              /><br />\n            </div>\n          </div>\n          <div class=\"formmessage\">\n            <textarea\n              name=\"message\"\n              id=\"message\"\n              required\n              class=\"formmessagestyle\"\n              placeholder=\"Message\"\n              [(ngModel)]=\"emailModel.message\"\n            ></textarea\n            ><br />\n          </div>\n          <input type=\"submit\" class=\"send\" value=\"SEND\">\n        </form>\n\n        <!-- <p style=\"color: white;\">twitter linkedin github icons</p><br>\n        <a (click)=\"myfunction()\" routerLink=\"/\"><span>-</span> Home <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/about\"><span>-</span> About <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Work <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/contact\"><span>-</span> Contact <span>-</span></a> -->\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"map\">\n    <app-gmap></app-gmap>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page \">\n  <div class=\"content\">\n\n    <section class=\"home\">\n\n      <div class=\"container\">\n        <h1 class=\"animated  fadeInDown one\"><span>Hiro</span> Nakae</h1>\n        <p class=\"animated  flipInX one\">\n          Web Developer / Node / Angular<br>\n        </p><br>\n        <a class=\"action-btn animated  flipInX one\" routerLink=\"/about\">About me</a>\n      </div>\n\n    </section>\n    \n      \n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/work/work.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/work/work.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"works-page animated fadeIn one\">\n  <!-- <div class=\"clickme\">\n    <p>click me</p>\n  </div> -->\n  <!-- <div *ngFor=\"let card of cards; let id = index+1\"> -->\n  <!-- <div class=\"container animated  fadeInUp one\"> -->\n    <!-- <div class=\"heading\">\n      <h1>Some Things I've <span>Built</span></h1><br>\n    </div> -->\n    <!-- <h1>These are various projects I've worked on over the years. I hope they may be of some use to you. If you'd like to contribute to any, feel free! I generally use the GPLv3 license, or MIT otherwise.</h1> -->\n    <div class=\"wrapper first featured\">\n      <div class=\"content\">\n        <h6>Full Stack</h6>\n        <h3>E-Commerce</h3>\n        <!-- <h4>Built With</h4> -->\n        <p>TypeScript / MySQL</p><br>\n\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n        \n      </div>\n    </div>\n    <div class=\"sixth wrapper\">\n      <div class=\"content\">\n        <h3><span>Let's make things happen!</span></h3>\n        <a class=\"contactme\" routerLink=\"/contact\">Contact me</a>\n      </div>\n    </div>\n    <!-- <div class=\"subfeature second wrapper\">\n      <div class=\"content\">\n        <h3>Real Estate</h3>\n        <p>Coming soon</p><br>\n        <a href=\"#\" class=\"disabled\">Live Demo</a>\n        <a href=\"#\" class=\"disabled\">View Source</a>\n      </div>\n    </div>\n    <div class=\"subsubfeature third wrapper\">\n      <div class=\"content\">\n        <h3>Digital Agency</h3>\n        <p>Coming soon</p><br>\n        <a href=\"#\" class=\"disabled\">Live Demo</a>\n        <a href=\"#\" class=\"disabled\">View Source</a>\n      </div>\n    </div>\n    <div class=\"fourth wrapper\">\n      <div class=\"content\">\n        <h3>Restaurant</h3>\n        <p>Coming soon</p><br>\n        <a href=\"#\" class=\"disabled\">Live Demo</a>\n        <a href=\"#\" class=\"disabled\">View Source</a>\n      </div>\n    </div> -->\n    <!-- <div class=\"fifth wrapper \">\n      <div class=\"content addmore\">\n        <i class=\"fa fa-plus fa-3x\" aria-hidden=\"true\"></i>\n      </div>\n    </div> -->\n    \n    \n    \n  <!-- </div> -->\n\n\n  <!-- </div> -->\n</div>"

/***/ }),

/***/ "./server/models/email.ts":
/*!********************************!*\
  !*** ./server/models/email.ts ***!
  \********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site/home/home.component */ "./src/app/components/site/home/home.component.ts");
/* harmony import */ var _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/site/about/about.component */ "./src/app/components/site/about/about.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");







var routes = [
    { path: '', component: _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'work', component: _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"] },
    { path: 'contact', component: _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // , {scrollPositionRestoration: 'enabled'}
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: grid;\n  grid-template-areas: \"nav\" \"content\";\n  grid-template-rows: auto 1fr;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  overflow: auto;\n}\n\n@media (min-width: 1025px) {\n  .wrapper {\n    grid-template-areas: \"nav content\";\n    grid-template-columns: auto 1fr;\n    height: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG9DQUNJO0VBRUosNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBRElBO0VBQ0k7SUFDSSxrQ0FDSTtJQUVKLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcIm5hdlwiXHJcbiAgICAgICAgXCJjb250ZW50XCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgICAgIFwibmF2IGNvbnRlbnRcIjtcclxuXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdlwiIFwiY29udGVudFwiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBjb250ZW50XCI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/site/home/home.component */ "./src/app/components/site/home/home.component.ts");
/* harmony import */ var _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/site/about/about.component */ "./src/app/components/site/about/about.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");
/* harmony import */ var _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layout/content/content.component */ "./src/app/components/layout/content/content.component.ts");
/* harmony import */ var _components_api_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/api/gmap/gmap.component */ "./src/app/components/api/gmap/gmap.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"],
                _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_13__["ContentComponent"],
                _components_api_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_14__["GmapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    // please dont use this key lol
                    apiKey: 'AIzaSyBEkdHuhopLCGmsNAOUJiusigM5AOJOMUk'
                })
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/api/gmap/gmap.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/api/gmap/gmap.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvYXBpL2dtYXAvZ21hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcGkvZ21hcC9nbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcGkvZ21hcC9nbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/api/gmap/gmap.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/api/gmap/gmap.component.ts ***!
  \*******************************************************/
/*! exports provided: GmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapComponent", function() { return GmapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GmapComponent = /** @class */ (function () {
    function GmapComponent() {
        this.latitude = 44.052071;
        this.longitude = -123.086754;
        this.mapType = 'roadmap';
        this.style = [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#8ec3b9'
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1a3646'
                    }
                ]
            },
            {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#4b6878'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#64779e'
                    }
                ]
            },
            {
                featureType: 'administrative.province',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#4b6878'
                    }
                ]
            },
            {
                featureType: 'landscape.man_made',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#334e87'
                    }
                ]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#023e58'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#283d6a'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#6f9ba5'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                featureType: 'poi.business',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#023e58'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#3C7680'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#304a7d'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#98a5be'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#2c6675'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#255763'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#b0d5ce'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#023e58'
                    }
                ]
            },
            {
                featureType: 'road.local',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'road.local',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#98a5be'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#1d2c4d'
                    }
                ]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#283d6a'
                    }
                ]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#3a4762'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#0e1626'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#4e6d70'
                    }
                ]
            }
        ];
    }
    GmapComponent.prototype.ngOnInit = function () {
    };
    GmapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gmap',
            template: __webpack_require__(/*! raw-loader!./gmap.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/api/gmap/gmap.component.html"),
            styles: [__webpack_require__(/*! ./gmap.component.scss */ "./src/app/components/api/gmap/gmap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GmapComponent);
    return GmapComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/content/content.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/layout/content/content.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  grid-area: content;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: #3F4448;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXNzZXRzL3Njc3MvX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxtQkNOTztFRE9QLGNBQUE7QUVESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuLmNvbnRlbnQge1xyXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iLCIuY29udGVudCB7XG4gIGdyaWQtYXJlYTogY29udGVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/content/content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
        // tslint:disable-next-line: only-arrow-functions
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('swipeleft swiperight', function (event) {
            if (event.type === 'swiperight') {
                var prevpage = '#' + jquery__WEBPACK_IMPORTED_MODULE_2___default.a.mobile.activePage.prev('div[data-role="page"]')[0].id;
                if (prevpage === '#home' || prevpage === '#blog' || prevpage === '#videos') {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.mobile.changePage(prevpage, {
                        transition: 'slide',
                        reverse: true
                    });
                }
            }
            if (event.type === 'swipeleft') {
                var nextpage = '#' + jquery__WEBPACK_IMPORTED_MODULE_2___default.a.mobile.activePage.next('div[data-role="page"]')[0].id;
                if (nextpage === '#videos' || nextpage === '#photos') {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.mobile.changePage(nextpage, {
                        transition: 'slide',
                        reverse: false
                    });
                }
            }
        });
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/layout/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.hide-mobile {\n  display: none;\n}\n.hide {\n  display: none;\n}\n.show {\n  display: block;\n}\n#nav_bar {\n  grid-area: nav;\n  background: #24292e;\n}\n#nav_bar header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  position: relative;\n}\n#nav_bar header a, #nav_bar header img {\n  z-index: 9;\n  cursor: pointer;\n}\n#nav_bar header .logo {\n  max-height: 40px;\n  border-radius: 50%;\n  background: none;\n}\n#nav_bar header img .exit {\n  max-height: 40px;\n}\n#nav_bar header nav .nav_links {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 7;\n  background: #273040;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 100px;\n}\n#nav_bar header nav .nav_links img {\n  max-width: 40px;\n  position: absolute;\n  top: 0;\n  margin: 20px;\n  cursor: pointer;\n}\n#nav_bar header nav .nav_links img.exit {\n  right: 0;\n}\n#nav_bar header nav .nav_links img.overlay-logo {\n  left: 0;\n}\n#nav_bar header nav .nav_links a {\n  text-decoration: none;\n  color: #05F2F2;\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n  font-weight: 400;\n  padding: 20px;\n}\n#nav_bar header nav .nav_links a i {\n  display: none;\n}\n#nav_bar header nav .nav_links a:hover {\n  text-decoration: underline;\n}\n#nav_bar header nav .nav_links a span:hover {\n  text-decoration: underline;\n}\n#nav_bar header ul li i {\n  display: none;\n}\n#nav_bar header .menu {\n  z-index: 10;\n  max-height: 23px;\n  padding-right: 6px;\n  cursor: pointer;\n}\n#nav_bar header p {\n  color: white;\n}\n@media (min-width: 1025px) {\n  #nav_bar {\n    height: 100vh;\n  }\n  #nav_bar header {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    position: relative;\n  }\n  #nav_bar header .menu {\n    display: none;\n  }\n  #nav_bar header nav {\n    position: absolute;\n    top: 0;\n    left: 31px;\n    display: block;\n  }\n  #nav_bar header nav .nav_links {\n    padding-top: 340px;\n    display: flex;\n    flex-direction: column;\n  }\n  #nav_bar header nav .nav_links a {\n    padding-top: 30px;\n    padding-left: 0;\n  }\n  #nav_bar header nav .nav_links a span {\n    display: none;\n  }\n  #nav_bar header nav .nav_links a i {\n    display: block;\n    color: #05F2F2;\n  }\n  #nav_bar header nav .nav_links a i:hover {\n    text-decoration: underline;\n  }\n  #nav_bar header ul li {\n    padding: 10px;\n  }\n  #nav_bar header ul li i {\n    display: block;\n    color: #05F2F2;\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtBQ0RKO0FER0E7RUFDSSxhQUFBO0FDQUo7QURFQTtFQUNJLGNBQUE7QUNDSjtBRFNBO0VBQ0ksY0FBQTtFQUNBLG1CRXRCUTtBRGdCWjtBRFFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRE9RO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNMWjtBRE9RO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTFo7QURVUTtFQUNJLGdCQUFBO0FDUlo7QURnQlk7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJFdEROO0VGNERNLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNwQmhCO0FEcUJnQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ25CcEI7QUR1Qm9CO0VBQ0ksUUFBQTtBQ3JCeEI7QUR3Qm9CO0VBQ0ksT0FBQTtBQ3RCeEI7QUQwQmdCO0VBQ0kscUJBQUE7RUFDQSxjRS9FWDtFRmlGVyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtBQzFCcEI7QUQyQm9CO0VBQ0ksYUFBQTtBQ3pCeEI7QUQ0Qm9CO0VBRUksMEJBQUE7QUMzQnhCO0FEK0J3QjtFQUNJLDBCQUFBO0FDN0I1QjtBRHFDZ0I7RUFDSSxhQUFBO0FDbkNwQjtBRHVDUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3JDWjtBRDBDUTtFQUNJLFlBQUE7QUN4Q1o7QUQ2Q0E7RUFDSTtJQUNJLGFBQUE7RUMxQ047RUQyQ007SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUN6Q1Y7RUQwQ1U7SUFDSSxhQUFBO0VDeENkO0VEMENVO0lBRUksa0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUN6Q2Q7RUQ2Q2M7SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQzNDbEI7RUQ0Q2tCO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDMUN0QjtFRDJDc0I7SUFDSSxhQUFBO0VDekMxQjtFRDJDc0I7SUFDSSxjQUFBO0lBQ0EsY0U5Sm5CO0VEcUhQO0VEMEMwQjtJQUNJLDBCQUFBO0VDeEM5QjtFRCtDYztJQUNJLGFBQUE7RUM3Q2xCO0VEOENrQjtJQUNJLGNBQUE7SUFDQSxjRTNLZjtJRjRLZSxlQUFBO0VDNUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuXHJcbi5oaWRlLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8vIC5oaWRlLWRlc2t0b3Age1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG4vLyAuc2hvdy1kZXNrdG9wIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gfVxyXG4jbmF2X2JhciB7XHJcbiAgICBncmlkLWFyZWE6IG5hdjtcclxuICAgIGJhY2tncm91bmQ6ICRuYXYtY29sb3I7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYSwgaW1nIHtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgLy8gJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIC5leGl0IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmF2IHsgLy9mb3IgbW9iaWxlIC0gbmF2IGNvbnRlbnQuLi5cclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAvLyAuYm94e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLm5hdl9saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uLWRlbGF5OiBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA3O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFwLWRhcms7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgIC8vIGNsaXAtcGF0aDogY2lyY2xlKDQwMDBweCBhdCAxMDAlIDAlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5leGl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLm92ZXJsYXktbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LXNoYWRvdzogMSAxcHggd2hpdGU7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC8vICY6aG92ZXIge1xyXG4gICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAjbmF2X2JhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogY2FsYygxMDB2aC0yNDBweCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyAmLmJveCB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAubmF2X2xpbmtze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmhpZGUtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jbmF2X2JhciB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xufVxuI25hdl9iYXIgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNuYXZfYmFyIGhlYWRlciBhLCAjbmF2X2JhciBoZWFkZXIgaW1nIHtcbiAgei1pbmRleDogOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI25hdl9iYXIgaGVhZGVyIC5sb2dvIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuI25hdl9iYXIgaGVhZGVyIGltZyAuZXhpdCB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDc7XG4gIGJhY2tncm91bmQ6ICMyNzMwNDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBpbWcge1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBpbWcuZXhpdCB7XG4gIHJpZ2h0OiAwO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGltZy5vdmVybGF5LWxvZ28ge1xuICBsZWZ0OiAwO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDVGMkYyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMjBweDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhIGkge1xuICBkaXNwbGF5OiBub25lO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhIHNwYW46aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiNuYXZfYmFyIGhlYWRlciB1bCBsaSBpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNuYXZfYmFyIGhlYWRlciAubWVudSB7XG4gIHotaW5kZXg6IDEwO1xuICBtYXgtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNuYXZfYmFyIGhlYWRlciBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICNuYXZfYmFyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gICNuYXZfYmFyIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICNuYXZfYmFyIGhlYWRlciAubWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIgbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDMxcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIHtcbiAgICBwYWRkaW5nLXRvcDogMzQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGEgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYSBpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzA1RjJGMjtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYSBpOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIgdWwgbGkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgI25hdl9iYXIgaGVhZGVyIHVsIGxpIGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMDVGMkYyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.hideMobile = 'hide-mobile';
        this.path = '../../../../assets/images/custom-menu-icon.png';
    }
    NavbarComponent.prototype.hideMobileOn = function () {
        var mq = window.matchMedia('(min-width: 1025px)');
        if (!mq.matches) {
            this.hideMobile = 'hide-mobile';
            this.path = '../../../../assets/images/custom-menu-icon.png';
        }
    };
    NavbarComponent.prototype.toggleMenu = function () {
        if (this.hideMobile === 'hide-mobile') {
            this.hideMobile = 'show';
        }
        else {
            this.hideMobile = 'hide-mobile';
        }
        if (this.path === '../../../../assets/images/custom-menu-icon.png') {
            this.path = '../../../../assets/images/custom-close.png';
        }
        else {
            this.path = '../../../../assets/images/custom-menu-icon.png';
        }
    };
    NavbarComponent.prototype.WidthChange = function (mq) {
        if (mq.matches) {
            // window width is at least 1025px
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('nav').addClass('show');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('ul').addClass('show');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('i').addClass('show');
        }
        else {
            // window width is less than 1025px
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('nav').removeClass('show');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('ul').addClass('hide');
            jquery__WEBPACK_IMPORTED_MODULE_2___default()('i').addClass('hide');
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        if (matchMedia) {
            var mq = window.matchMedia('(min-width:1025px)');
            // tslint:disable-next-line: deprecation
            mq.addListener(this.WidthChange);
            this.WidthChange(mq);
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/layout/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/site/about/about.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/site/about/about.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.about-page {\n  background: #3F4448;\n  height: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n.about-page .content section {\n  height: calc(100vh - 56px);\n}\n.about-page .content section .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n}\n.about-page .content section .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n}\n.about-page .content section .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: white;\n}\n.about-page .content section .container h1 {\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n  margin: 0;\n  margin-top: 55px;\n}\n.about-page .content section .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.about-page .content section .container p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: block;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n}\n.about-page .content section .container a {\n  font-family: \"Nunito\", sans-serif;\n  display: block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #05F2F2;\n  border-radius: 2px;\n  margin: 0;\n  text-align: center;\n}\n.about-page .content section .container a:hover {\n  cursor: pointer;\n  background: #05F2F2;\n}\n.about-page .content section.about {\n  background: #3F4448;\n}\n@media (min-width: 1025px) {\n  .about-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .about-page .content {\n    position: absolute;\n    left: 180px;\n  }\n  .about-page .content section {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .about-page .content section.about .container {\n    display: block;\n    text-align: left;\n    -webkit-transform: translatey(35px);\n            transform: translatey(35px);\n  }\n  .about-page .content section.about .container p {\n    text-align: left;\n    height: 30px;\n  }\n  .about-page .content section.about .container a {\n    display: inline-block;\n    text-decoration: none;\n    font-family: \"Nunito\", sans-serif;\n    color: white;\n    font-weight: 700;\n    border: 2px solid #05F2F2;\n    padding: 0.5em 2em;\n    border-radius: 4px;\n    margin-right: 1em;\n  }\n  .about-page .content section.about .container a:hover {\n    background: #05F2F2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EseUVBQUE7QUFDUjtFQUNJLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElRO0VBQ0ksMEJBQUE7QUNGWjtBRE9ZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDTGhCO0FET1k7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05oQjtBRE9nQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLFlBQUE7QUNOcEI7QURRZ0I7RUFHSSxjRTNCTjtFRjRCTSxpQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1JwQjtBRFNvQjtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUNSeEI7QURXZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDVHBCO0FEV2dCO0VBQ0ksaUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNUcEI7QURVb0I7RUFDSSxlQUFBO0VBQ0EsbUJFL0RmO0FEdURUO0FEWVk7RUFDSSxtQkU3RUw7QURtRVg7QURtQkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNoQk47RURpQk07SUFDSSxrQkFBQTtJQUNBLFdBQUE7RUNmVjtFRGdCVTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUNkZDtFRGlCa0I7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDZnRCO0VEc0JzQjtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtFQ3BCMUI7RURzQnNCO0lBQ0kscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGlDQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBRUEseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEsaUJBQUE7RUN0QjFCO0VEd0IwQjtJQUNJLG1CRXhIdkI7RURrR1A7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLmFib3V0LXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogIzNGNDQ0ODtcclxuICAgIC8vIGhlaWdodDogMjAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDEyM3B4O1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLmhlbGxvIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICYudHdvIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4OSwgNjcpO1xyXG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjojMDEwMTAxO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIC5hYm91dC1wYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxODBweDtcclxuICAgICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgJi5hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMzVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA5MHB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59ICAgICAgICAgIFxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIC5oZWxsbyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIGgxIHtcbiAgY29sb3I6ICNGNUYzRjU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDU1cHg7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVGMkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBhIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDVGMkYyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwNUYyRjI7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IHtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuYWJvdXQtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYWJvdXQtcGFnZSAuY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE4MHB4O1xuICB9XG4gIC5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDM1cHgpO1xuICB9XG4gIC5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAuYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDVGMkYyO1xuICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwNUYyRjI7XG4gIH1cbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/site/about/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/site/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/site/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/site/contact/contact.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/site/contact/contact.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\nspan {\n  display: none;\n}\n.contact-page {\n  background: #3F4448;\n  height: 100%;\n  font-family: \"Nunito\", sans-serif;\n  position: relative;\n}\n.contact-page .contact-content {\n  width: 100%;\n}\n.contact-page .contact-content .heading {\n  padding-top: 30px;\n  text-align: center;\n}\n.contact-page .contact-content .wrapper {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content {\n  position: fixed;\n  bottom: 0;\n  background-color: #3F4448;\n  padding: 9%;\n  width: 100%;\n  height: calc(100vh - 56px);\n}\n.contact-page .contact-content .wrapper .content h1 {\n  padding-top: 20px;\n}\n.contact-page .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 25vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content input {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 100px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 4px;\n}\n.contact-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.contact-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.contact-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 1025px) {\n  .contact-page {\n    position: relative;\n    display: flex;\n  }\n  .contact-page .contact-content {\n    width: 100%;\n  }\n  .contact-page .contact-content .heading {\n    padding-top: 30px;\n    text-align: center;\n  }\n  .contact-page .contact-content .wrapper {\n    width: 100%;\n  }\n  .contact-page .contact-content .wrapper .content {\n    position: fixed;\n    bottom: 0;\n    background-color: #3F4448;\n    padding: 9%;\n    width: 100%;\n    height: calc(100vh - 56px);\n  }\n  .contact-page .contact-content .wrapper .content form {\n    display: block;\n    margin-top: 0em;\n    text-align: right;\n  }\n  .contact-page .contact-content .wrapper .content form .fieldwrap {\n    width: 100%;\n  }\n  .contact-page .contact-content .wrapper .content form .fieldwrap .formleft {\n    width: 49.5%;\n    float: left;\n  }\n  .contact-page .contact-content .wrapper .content form .fieldwrap .formright {\n    width: 49.5%;\n    float: right;\n  }\n  .contact-page .map {\n    width: 50%;\n  }\n  .contact-page .content {\n    width: 50%;\n  }\n  .contact-page h1 {\n    font-size: 3em;\n  }\n  .contact-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .contact-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0UsYUFBQTtBQ0RGO0FER0E7RUFDSSxtQkVOTztFRlFQLFlBQUE7RUFDQSxpQ0FBQTtFQXlIQSxrQkFBQTtBQ3pISjtBRE9JO0VBQ0UsV0FBQTtBQ0xOO0FEUU07RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDTlY7QURRTTtFQUNJLFdBQUE7QUNOVjtBRFNVO0VBRUUsZUFBQTtFQUNBLFNBQUE7RUFFRSx5QkVqQ0g7RUZvQ0csV0FBQTtFQUVELFdBQUE7RUFDQSwwQkFBQTtBQ1piO0FEZVk7RUFDRSxpQkFBQTtBQ2JkO0FEZ0JjO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2RoQjtBRGVnQjtFQUNJLFdBQUE7QUNicEI7QURjb0I7RUFFSSxXQUFBO0VBQ0EsV0FBQTtBQ2J4QjtBRGN3QjtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1oxQjtBRGVzQjtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDZDFCO0FEZTBCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDYjlCO0FEaUJnQjtFQUNRLFdBQUE7QUNmeEI7QURnQndCO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZHhCO0FEa0JnQjtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkV6SFI7RUYwSFEsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNoQnBCO0FENkJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0UvSE07QURvR2Q7QUQ0QlE7RUFDSSxnQ0FBQTtFQUVBLCtCQUFBO0FDM0JaO0FEOEJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDNUJSO0FEZ0NBO0VBQ0k7SUFFSSxrQkFBQTtJQUNBLGFBQUE7RUM5Qk47RUQrQk07SUFDRSxXQUFBO0VDN0JSO0VEZ0NRO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQzlCWjtFRGdDUTtJQUNFLFdBQUE7RUM5QlY7RURpQ1U7SUFDRSxlQUFBO0lBQ0EsU0FBQTtJQUVFLHlCRWpMTDtJRm9MSyxXQUFBO0lBRUEsV0FBQTtJQUNBLDBCQUFBO0VDbkNkO0VEdUNjO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ3JDaEI7RURzQ2dCO0lBQ0ksV0FBQTtFQ3BDcEI7RURxQ29CO0lBQ0ksWUFBQTtJQUVBLFdBQUE7RUNwQ3hCO0VEc0NvQjtJQUNFLFlBQUE7SUFDQSxZQUFBO0VDcEN0QjtFRDRDTTtJQUNFLFVBQUE7RUMxQ1I7RUQ0Q007SUFDRSxVQUFBO0VDMUNSO0VEZ0RNO0lBQ0ksY0FBQTtFQzlDVjtFRCtDVTtJQUNJLGdDQUFBO0VDN0NkO0VEZ0RNO0lBQ0ksVUFBQTtFQzlDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLy8gTU9CSUxFIEZJUlNULCBNRURJQSBRVUVSWSBGT1IgRlVMTCBTQ1JFRU46RklYXHJcbnNwYW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvbnRhY3QtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyAubWFwe1xyXG4gICAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5jb250YWN0LWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIDU2cHgpLzIpO1xyXG5cclxuICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAud3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAvLyAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgICAgICAgLmNvbnRlbnR7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDklO1xyXG4gICAgICAgICAgICAvLyAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgIC8vICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAvLyBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9ybXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdlc3R5bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGU1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAubWFwIHtcclxuICAgIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gICB0b3A6IDA7XHJcbiAgICAvLyAgIHJpZ2h0OiAwO1xyXG4gICAgLy8gICBib3R0b206IDA7XHJcbiAgICAvLyAgIGxlZnQ6IDA7XHJcbiAgICAvLyB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAuY29udGFjdC1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuY29udGFjdC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIDU2cHgpLzIpO1xyXG4gICAgXHJcbiAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAvLyAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDklO1xyXG4gICAgICAgICAgICAgIC8vICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAgIC8vICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OS41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDkuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vIHRvcDogMjIlO1xyXG4gICAgICAgICAgICAvLyBsZWZ0OiAxODBweDtcclxuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG5zcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhY3QtcGFnZSB7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC5oZWFkaW5nIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gIHBhZGRpbmc6IDklO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgaDEge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtbGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZm9ybW1lc3NhZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSAuZm9ybW1lc3NhZ2VzdHlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAyNXZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGlucHV0IHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBib3JkZXI6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jb250YWN0LXBhZ2UgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4uY29udGFjdC1wYWdlIGgxIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jb250YWN0LXBhZ2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICM5OGEwYWQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAuY29udGFjdC1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAuaGVhZGluZyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gICAgcGFkZGluZzogOSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtbGVmdCB7XG4gICAgd2lkdGg6IDQ5LjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCB7XG4gICAgd2lkdGg6IDQ5LjUlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5tYXAge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29udGFjdC1wYWdlIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuY29udGFjdC1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/site/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/site/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_models_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../server/models/email */ "./server/models/email.ts");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contact.service */ "./src/app/contact.service.ts");


// import $ from 'jquery';


var ContactComponent = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function ContactComponent(_contactService) {
        this._contactService = _contactService;
        this.emailModel = new _server_models_email__WEBPACK_IMPORTED_MODULE_2__["Email"]('', '', '');
        this.submitted = false;
    }
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._contactService.contact(this.emailModel)
            .subscribe(function (data) { return console.log('Success!', data); }, function (error) { return console.error('Error!', error); });
    };
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/site/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/site/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/site/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  text-decoration: none;\n  margin-top: 20%;\n}\nul i {\n  color: #05F2F2;\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 5px;\n}\nul i:hover {\n  cursor: pointer;\n}\n.home-page {\n  overflow: hidden;\n  background: #3F4448;\n  height: 100%;\n}\n.home-page .content section {\n  height: calc(100vh - 56px);\n}\n.home-page .content section.home {\n  background: #3F4448;\n}\n.home-page .content section.home .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n}\n.home-page .content section.home .container h1 {\n  font-size: 80px;\n  text-align: center;\n  font-weight: 600;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  margin: 0;\n  margin-top: 55px;\n}\n.home-page .content section.home .container p {\n  font-weight: 400;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: block;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n}\n.home-page .content section.home .container .action-btn {\n  display: inline-block;\n  text-decoration: none;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n  font-weight: 700;\n  border: 2px solid #05F2F2;\n  padding: 0.5em 2em;\n  border-radius: 4px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.home-page .content section.home .container .action-btn:hover {\n  background: #05F2F2;\n}\n.home-page .content section.about {\n  background: #05F2F2;\n  background: linear-gradient(#05DBF2, #05F2F2);\n  text-align: center;\n}\n.home-page .content section.about .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n  -webkit-transform: translatey(0px);\n          transform: translatey(0px);\n  text-align: right;\n}\n.home-page .content section.about .container ul {\n  position: absolute;\n  left: 60%;\n  top: 20%;\n}\n.home-page .content section.about .container ul li img {\n  width: 45%;\n}\n.home-page .content section.about .container ul li img.one {\n  margin-right: 50px;\n}\n.home-page .content section.about .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: white;\n}\n.home-page .content section.about .container h1 {\n  color: #4e4e4e;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content section.about .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.home-page .content section.about .container p {\n  font-weight: 400;\n  line-height: 1.8em;\n  color: white;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content section.about .container a {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 20px;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2.4px solid #3F4448;\n  border-radius: 4px;\n  margin: 1.5em 0;\n}\n.home-page .content section.about .container a:hover {\n  cursor: pointer;\n  background: #3F4448;\n  opacity: 0.8;\n}\n.home-page .content section.contact {\n  position: relative;\n  height: 50vh;\n  display: flex;\n  justify-content: flex-end;\n}\n.home-page .content section.contact h1 {\n  position: absolute;\n  left: 50px;\n  color: black;\n  bottom: 40px;\n  z-index: 3;\n}\n.home-page .content section.contact h1.hide {\n  display: none;\n}\n.home-page .content section.contact .contact-content {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content {\n  background-color: #3F4448;\n  padding: 9%;\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 22vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .content section.contact .contact-content .wrapper .content a {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 85px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.home-page .content section .wrapper {\n  background-color: #24292e;\n  width: 70%;\n  margin: 5% auto 10%;\n  border-radius: 2px;\n}\n.home-page .content section .wrapper .content {\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #F5F3F5;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n@media (min-width: 1025px) {\n  .home-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .home-page .content {\n    position: absolute;\n    left: 180px;\n  }\n  .home-page .content section {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    height: 100vh;\n  }\n  .home-page .content section.home .container {\n    display: block;\n    text-align: left;\n  }\n  .home-page .content img {\n    width: 250px;\n  }\n  .home-page .content h1 {\n    font-size: 3em;\n  }\n  .home-page .content p {\n    width: 60%;\n    height: 30px;\n  }\n  .home-page .content a {\n    display: inline-block;\n    text-decoration: none;\n    font-family: \"Nunito\", sans-serif;\n    color: white;\n    font-weight: 700;\n    border: 2px solid #05F2F2;\n    padding: 0.5em 2em;\n    border-radius: 4px;\n    margin-right: 1em;\n  }\n  .home-page .content a:hover {\n    background: #05F2F2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBREdBO0VBQ0ksZ0JBQUE7RUFFQSxtQkVyQk87RUZ5QlAsWUFBQTtBQ0pKO0FET1E7RUFDSSwwQkFBQTtBQ0xaO0FEZ0JZO0VBTUksbUJFOUNMO0FEMkJYO0FEd0JnQjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkJwQjtBRHlCb0I7RUFFSSxlQUFBO0VBR0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQzNCeEI7QURpQ29CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQy9CeEI7QURpQ29CO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEN4QjtBRGtDd0I7RUFDSSxtQkUzRm5CO0FEMkRUO0FEc0NZO0VBQ0ksbUJFbEdQO0VGbUdPLDZDQUFBO0VBQ0Esa0JBQUE7QUNwQ2hCO0FEcUNnQjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQXVDQSxpQkFBQTtBQzFFcEI7QURvQ29CO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ2xDeEI7QURtQ3dCO0VBQ0ksVUFBQTtBQ2pDNUI7QURtQzRCO0VBQ0ksa0JBQUE7QUNqQ2hDO0FEcUNvQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFlBQUE7QUNuQ3hCO0FEcUNvQjtFQUdJLGNBQUE7RUFDQSxpQ0FBQTtBQ3JDeEI7QURzQ3dCO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBQ3JDNUI7QUR3Q29CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUN2Q3hCO0FEMENvQjtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDekN4QjtBRDJDd0I7RUFDSSxlQUFBO0VBQ0EsbUJFOUtqQjtFRitLaUIsWUFBQTtBQ3pDNUI7QUQ4Q1k7RUFDSSxrQkFBQTtFQWNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUMxRGhCO0FEMENnQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3hDcEI7QUR5Q29CO0VBQ0ksYUFBQTtBQ3ZDeEI7QURpRGdCO0VBR0ksV0FBQTtBQ2pEcEI7QUR3RG9CO0VBQ0ksV0FBQTtBQ3REeEI7QUR3RHdCO0VBRUkseUJFdE5qQjtFRjBOaUIsV0FBQTtFQUVBLFdBQUE7QUMzRDVCO0FEK0Q0QjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUM3RGhDO0FEOERnQztFQUNJLFdBQUE7QUM1RHBDO0FENkRvQztFQUNJLFdBQUE7RUFDQSxXQUFBO0FDM0R4QztBRDREd0M7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMxRHhDO0FENkRvQztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDM0R4QztBRDREd0M7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUMxRDVDO0FEOERnQztFQUNRLFdBQUE7QUM1RHhDO0FENkR3QztFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzNEeEM7QUQrRGdDO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUVBLHlCRTVTeEI7RUY2U3dCLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2hFcEM7QUR1RVk7RUFFSSx5QkUzVEo7RUZtVUksVUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUM5RWhCO0FEZ0ZnQjtFQUVJLGVBQUE7RUFDQSxpQ0FBQTtBQy9FcEI7QURtRlE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRW5VRTtFRm9VRixpQ0FBQTtBQ2pGWjtBRHdGUTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjRWhWRTtFRmlWRixlQUFBO0VBQ0EsaUNBQUE7QUN4Rlo7QURzR0E7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNwR047RURxR007SUFDSSxrQkFBQTtJQUNBLFdBQUE7RUNuR1Y7RURvR1U7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtFQ2xHZDtFRHFHa0I7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUNuR3RCO0VEMEdVO0lBQ0ksWUFBQTtFQ3hHZDtFRDBHVTtJQUNJLGNBQUE7RUN4R2Q7RUQ2R1U7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQzNHZDtFRDZHVTtJQUNJLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQ0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUVBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDNUdkO0VEOEdjO0lBQ0ksbUJFelpYO0VENlNQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG4vL01PQklMRSBGSVJTVFxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAkYXAtcG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhvbWUtcGFnZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQ6ICRhcC1kYXJrO1xyXG4gICAgLy8gaGVpZ2h0OiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwJTtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG5cclxuICAgICAgICAgICAgJi5ob21lIHtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiAtMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDYyJTtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMzh2aDtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogY2FsYyg1MHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoNTB2aCAtIDU2cHgpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zsb3dlci5qcGcpO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtMTAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb24tYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDkwcHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiA3MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMi40cHggc29saWQgJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICAmLmhpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5jb250YWN0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNTZweCkvMik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNTZweCkvMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2VzdHlsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBlNWVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRtaWQtYmx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNiU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1JSBhdXRvIDEwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgJG1pZC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtOyBcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAvLyBzcGFuIHtcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgLy8gY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAvLyBhe1xyXG4gICAgICAgICAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAvLyAgICAgY29sb3I6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7IC8vIHRhYmxldHNcclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgeyAvLyBkZXNrdG9wXHJcblxyXG4gICAgLmhvbWUtcGFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAmLmhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgICAgLy8gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA5MHB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG51bCBpIHtcbiAgY29sb3I6ICMwNUYyRjI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbnVsIGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob21lLXBhZ2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5ob21lIHtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5ob21lIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5ob21lIC5jb250YWluZXIgaDEge1xuICBmb250LXNpemU6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1NXB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uaG9tZSAuY29udGFpbmVyIC5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciAuYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNUYyRjI7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDogMjAlO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHVsIGxpIGltZy5vbmUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciAuaGVsbG8ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGgxIHtcbiAgY29sb3I6ICM0ZTRlNGU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVGMkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyOiAyLjRweCBzb2xpZCAjM0Y0NDQ4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMS41ZW0gMDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3R0b206IDQwcHg7XG4gIHotaW5kZXg6IDM7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMS5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBwYWRkaW5nOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSAuZm9ybW1lc3NhZ2VzdHlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAyMnZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBhIHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiA4NXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24gLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDUlIGF1dG8gMTAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24gLndyYXBwZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5ob21lLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtcGFnZSAuY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE4MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuaG9tZS1wYWdlIC5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC5ob21lLXBhZ2UgLmNvbnRlbnQgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmhvbWUtcGFnZSAuY29udGVudCBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gICAgcGFkZGluZzogMC41ZW0gMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxuICAuaG9tZS1wYWdlIC5jb250ZW50IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwNUYyRjI7XG4gIH1cbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/site/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/site/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/site/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/site/work/work.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/site/work/work.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.works-page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  display: grid;\n  grid-gap: 1em;\n  padding: 1em;\n}\n.works-page .wrapper {\n  background-color: #3F4448;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 100%;\n  opacity: 0.68;\n  transition-delay: 0.4s;\n  transition: ease-in-out;\n  border-radius: 2px;\n}\n.works-page .wrapper:hover {\n  opacity: 1;\n}\n.works-page .wrapper .content {\n  text-align: center;\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  height: 100%;\n  color: white;\n  width: 80%;\n  margin: 0 auto;\n}\n.works-page .wrapper .content h6::before {\n  content: \"- \";\n}\n.works-page .wrapper .content h6::after {\n  content: \" -\";\n}\n.works-page .wrapper .content .disabled {\n  text-decoration: line-through;\n}\n.works-page .wrapper .content .disabled:hover {\n  cursor: default;\n  background: #3F4448;\n}\n.works-page .wrapper .content p {\n  text-align: left;\n}\n.works-page .wrapper .content i:hover {\n  cursor: pointer;\n}\n.works-page .wrapper .content a {\n  display: block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #05F2F2;\n  border-radius: 4px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.works-page .wrapper .content a:hover {\n  cursor: pointer;\n  background: #05F2F2;\n}\n.works-page .wrapper .content a.contactme {\n  display: inline-block;\n}\n.works-page .wrapper .content img {\n  width: 80%;\n}\n.works-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.works-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.works-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 1025px) {\n  .works-page {\n    grid-template-rows: repeat(2, 1fr);\n    box-sizing: border-box;\n    position: relative;\n  }\n  .works-page .wrapper {\n    background-color: #3F4448;\n    box-shadow: 0px 0px 115px #000000a6;\n    padding: 23%;\n    width: 100%;\n  }\n  .works-page .wrapper .content.addmore i {\n    padding-top: 45%;\n  }\n  .works-page h1 {\n    font-size: 3em;\n  }\n  .works-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .works-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUNSO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7QURlUTtFQUNJLHlCRXZCRDtFRndCQyxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2JaO0FEY1k7RUFDSSxVQUFBO0FDWmhCO0FEY1k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDYmhCO0FEY2dCO0VBQ0ksYUFBQTtBQ1pwQjtBRGNnQjtFQUNJLGFBQUE7QUNacEI7QURjZ0I7RUFDSSw2QkFBQTtBQ1pwQjtBRGFvQjtFQUNJLGVBQUE7RUFDQSxtQkV0RGI7QUQyQ1g7QUQ4QmdCO0VBQ0ksZ0JBQUE7QUM1QnBCO0FEK0JvQjtFQUNJLGVBQUE7QUM3QnhCO0FEZ0NnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQy9CcEI7QURnQ29CO0VBQ0ksZUFBQTtFQUNBLG1CRXJGZjtBRHVEVDtBRGdDb0I7RUFDSSxxQkFBQTtBQzlCeEI7QURpQ2dCO0VBQ0ksVUFBQTtBQy9CcEI7QUQrQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRTFHTTtBRDZEZDtBRDhDUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUM3Q1o7QURnREk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM5Q1I7QURrREE7RUFDSTtJQUtJLGtDQUFBO0lBR0Esc0JBQUE7SUFJQSxrQkFBQTtFQ3hETjtFRDBETTtJQUNJLHlCRXZKRDtJRndKQyxtQ0FBQTtJQUVBLFlBQUE7SUFDQSxXQUFBO0VDekRWO0VENkRrQjtJQUNJLGdCQUFBO0VDM0R0QjtFRGlFTTtJQUNJLGNBQUE7RUMvRFY7RURnRVU7SUFDSSxnQ0FBQTtFQzlEZDtFRGlFTTtJQUNJLFVBQUE7RUMvRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi53b3Jrcy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAvLyAuY29udGFpbmVye1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy8gICAgIC8vIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAvLyAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAvLyAgICAgLy8gcGFkZGluZy10b3A6IDUlO1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAvLyAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIC8vICAgICAvLyBncmlkLWdhcDogM2VtO1xyXG4gICAgLy8gICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgcGFkZGluZzogNiU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNjg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC40cztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtOyBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBoNjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICctICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyAtJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGEge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaDYsIGg1LCBoMywgYSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5jb250YWN0bWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC5zaXh0aCB7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLmNvbnRhY3QtaXRlbXsgXHJcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIC8vIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGltZyB7XHJcbiAgICAvLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIC8vIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgLndvcmtzLXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgICAgIC8vIGdyaWQtZ2FwOiAxZW07XHJcbiAgICAgICAgLy8gcGFkZGluZzogMWVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIzJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgJi5hZGRtb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAgICAiLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4ud29ya3MtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDFlbTtcbiAgcGFkZGluZzogMWVtO1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcbiAgcGFkZGluZzogNiU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjY4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIgLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCBoNjo6YmVmb3JlIHtcbiAgY29udGVudDogXCItIFwiO1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIgLmNvbnRlbnQgaDY6OmFmdGVyIHtcbiAgY29udGVudDogXCIgLVwiO1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIgLmNvbnRlbnQgLmRpc2FibGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCAuZGlzYWJsZWQ6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwNUYyRjI7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCBhLmNvbnRhY3RtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IGltZyB7XG4gIHdpZHRoOiA4MCU7XG59XG4ud29ya3MtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi53b3Jrcy1wYWdlIGgxIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi53b3Jrcy1wYWdlIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLndvcmtzLXBhZ2Uge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLndvcmtzLXBhZ2UgLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XG4gICAgcGFkZGluZzogMjMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50LmFkZG1vcmUgaSB7XG4gICAgcGFkZGluZy10b3A6IDQ1JTtcbiAgfVxuICAud29ya3MtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLndvcmtzLXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLndvcmtzLXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/site/work/work.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/site/work/work.component.ts ***!
  \********************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/components/site/work/work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContactService = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function ContactService(_http) {
        this._http = _http;
        // tslint:disable-next-line: variable-name
        this._url = 'http://localhost:3000/contact';
    }
    ContactService.prototype.contact = function (email) {
        return this._http.post(this._url, email);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/work/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
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

module.exports = "<!-- flex nav -->\n<!-- flex direction changes -->\n<div class=\"nav_bar\" id=\"nav_bar\"> \n  <header>\n    <a routerLink=\"/\">\n      <img (click)=\"hideMobileOn()\" class=\"logo\" src=\"../../../../assets/images/custom-logo.png\">\n    </a>\n\n\n    <nav [class]=\"hideMobile\"class=\" box\">\n      <div class=\"nav_links\">\n        <a (click)=\"hideMobileOn()\" routerLink=\"/\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span> Home</span> </a>\n        <a (click)=\"hideMobileOn()\" routerLink=\"/about\"> <i class=\"fa fa-user\" aria-hidden=\"true\"> </i> <span> About</span> </a>\n        <a (click)=\"hideMobileOn()\" routerLink=\"/work\"> <i class=\"fa fa-code\" aria-hidden=\"true\"> </i> <span> Work</span></a>\n        <a (click)=\"hideMobileOn()\" routerLink=\"/contact\"> <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"> </i> <span> Contact</span></a>\n      </div>\n    </nav>\n\n\n\n    <img (click)=\"toggleMenu()\"  class=\"menu\" src=\"{{path}}\" alt=\"toggle menu\" id=\"menu\">\n    <!-- [ngClass]=\"status ? 'success' : 'danger'\" -->\n  </header>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/about/about.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n  <div class=\"content\">\n\n    <section class=\"about\">\n\n      <div class=\"container\">\n        <!-- <span class=\"hello animated  slideInDown one\">Hello.</span>  -->\n        <h1 class=\"hello animated  flipInX one\">Hello.</h1>\n        <p class=\"animated flipInX\"> \n          Producing SaaS solutions and web applications to <br>\n          solve business problems.\n        </p> <br>\n        <a class=\"action-btn animated  flipInX one\" routerLink=\"/work\">Check out my work</a> \n      </div>\n\n    </section>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/contact/contact.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  \n  <div class=\"contact-content\">\n    <div class=\"wrapper\">\n      <div class=\"content group animated  slideInUp one\">\n        <h1>From:</h1>\n        <form action=\"/contact\" method=\"POST\">\n          <div class=\"fieldwrap group\">\n            <div class=\"formleft\">\n              <input\n                type=\"text\"\n                name=\"name\"\n                placeholder=\"Name\"\n              /><br />\n            </div>\n\n            <div class=\"formright\">\n              <input\n                type=\"text\"\n                name=\"email\"\n                placeholder=\"Email\"\n              /><br />\n            </div>\n          </div>\n          <div class=\"formmessage\">\n            <textarea\n              name=\"message\"\n              class=\"formmessagestyle\"\n              placeholder=\"Message\"\n            ></textarea\n            ><br />\n          </div>\n          <input type=\"submit\" class=\"send\" value=\"SEND\">\n        </form>\n        <!-- <p style=\"color: white;\">twitter linkedin github icons</p><br>\n        <a (click)=\"myfunction()\" routerLink=\"/\"><span>-</span> Home <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/about\"><span>-</span> About <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Work <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/contact\"><span>-</span> Contact <span>-</span></a> -->\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"map\"> -->\n    <!-- <app-gmap></app-gmap> -->\n  <!-- </div> -->\n</div>\n"

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

module.exports = "<div class=\"works-page animated fadeIn one\">\n  <!-- <div *ngFor=\"let card of cards; let id = index+1\"> -->\n  <!-- <div class=\"container animated  fadeInUp one\"> -->\n    <!-- <div class=\"heading\">\n      <h1>Some Things I've <span>Built</span></h1><br>\n    </div> -->\n    <!-- <h1>These are various projects I've worked on over the years. I hope they may be of some use to you. If you'd like to contribute to any, feel free! I generally use the GPLv3 license, or MIT otherwise.</h1> -->\n    <div class=\"wrapper first featured\">\n      <div class=\"content\">\n        <h6>Full Stack</h6>\n        <h3>E-Commerce</h3>\n        <!-- <h4>Built With</h4> -->\n        <p>TypeScript / MySQL</p><br>\n\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n        \n      </div>\n    </div>\n    <div class=\"subfeature second wrapper\">\n      <div class=\"content\">\n        <h3>Real Estate</h3>\n        <p>Coming soon</p><br>\n        <a href=\"#\" class=\"disabled\">Live Demo</a>\n        <a href=\"#\" class=\"disabled\">View Source</a>\n      </div>\n    </div>\n    <div class=\"subsubfeature third wrapper\">\n      <div class=\"content\">\n        <h3>Digital Agency</h3>\n        <p>Coming soon</p><br>\n        <a href=\"#\" class=\"disabled\">Live Demo</a>\n        <a href=\"#\" class=\"disabled\">View Source</a>\n      </div>\n    </div>\n    <div class=\"fourth wrapper\">\n      <div class=\"content\">\n        <h3>Restaurant</h3>\n        <p>Coming soon</p><br>\n        <a href=\"#\" class=\"disabled\">Live Demo</a>\n        <a href=\"#\" class=\"disabled\">View Source</a>\n      </div>\n    </div>\n    <div class=\"fifth wrapper \">\n      <div class=\"content addmore\">\n        <i class=\"fa fa-plus fa-3x\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <div class=\"sixth wrapper\">\n      <div class=\"content\">\n        <h3><span>Let's make things happen!</span></h3>\n        <a class=\"contactme\" routerLink=\"/contact\">Contact me</a>\n      </div>\n    </div>\n    \n    \n  <!-- </div> -->\n\n\n  <!-- </div> -->\n</div>"

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
            providers: [],
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


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.hide-mobile {\n  display: none;\n}\n#nav_bar {\n  grid-area: nav;\n  background: #24292e;\n}\n#nav_bar header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  position: relative;\n}\n#nav_bar header a, #nav_bar header img {\n  z-index: 9;\n  cursor: pointer;\n}\n#nav_bar header .logo {\n  max-height: 40px;\n  border-radius: 50%;\n  background: none;\n}\n#nav_bar header .logo:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#nav_bar header img .exit {\n  max-height: 40px;\n}\n#nav_bar header nav .nav_links {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 7;\n  background: #273040;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 100px;\n}\n#nav_bar header nav .nav_links img {\n  max-width: 40px;\n  position: absolute;\n  top: 0;\n  margin: 20px;\n  cursor: pointer;\n}\n#nav_bar header nav .nav_links img:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n#nav_bar header nav .nav_links img.exit {\n  right: 0;\n}\n#nav_bar header nav .nav_links img.overlay-logo {\n  left: 0;\n}\n#nav_bar header nav .nav_links a {\n  text-decoration: none;\n  color: #05F2F2;\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n  font-weight: 400;\n  padding: 20px;\n}\n#nav_bar header nav .nav_links a:hover {\n  text-decoration: underline;\n}\n#nav_bar header nav .nav_links a span:hover {\n  text-decoration: underline;\n}\n#nav_bar header .menu {\n  z-index: 10;\n  max-height: 23px;\n  padding-right: 6px;\n  cursor: pointer;\n}\n#nav_bar header .menu:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#nav_bar header p {\n  color: white;\n}\n@media (min-width: 1025px) {\n  #nav_bar {\n    height: 100vh;\n  }\n  #nav_bar header {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    position: relative;\n  }\n  #nav_bar header .menu {\n    display: none;\n  }\n  #nav_bar header nav {\n    position: absolute;\n    top: 0;\n    left: 31px;\n  }\n  #nav_bar header nav .nav_links {\n    padding-top: 340px;\n  }\n  #nav_bar header nav .nav_links a {\n    padding-left: 0;\n  }\n  #nav_bar header nav .nav_links a span {\n    display: none;\n  }\n  #nav_bar header nav .nav_links a i:hover {\n    text-decoration: underline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtBQ0RKO0FEV0E7RUFDSSxjQUFBO0VBQ0EsbUJFaEJRO0FEUVo7QURVSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUlI7QURTUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDUFo7QURTUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1BaO0FEUVk7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDTmhCO0FEU1E7RUFDSSxnQkFBQTtBQ1BaO0FEWVk7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJFN0NOO0VGbURNLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNoQmhCO0FEaUJnQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2ZwQjtBRGdCb0I7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDZHhCO0FEZ0JvQjtFQUNJLFFBQUE7QUNkeEI7QURpQm9CO0VBQ0ksT0FBQTtBQ2Z4QjtBRG1CZ0I7RUFDSSxxQkFBQTtFQUNBLGNFdEVYO0VGd0VXLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FDbkJwQjtBRHFCb0I7RUFFSSwwQkFBQTtBQ3BCeEI7QUR3QndCO0VBQ0ksMEJBQUE7QUN0QjVCO0FENkRRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDM0RaO0FENERZO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQzFEaEI7QUQ2RFE7RUFDSSxZQUFBO0FDM0RaO0FEZ0VBO0VBQ0k7SUFDSSxhQUFBO0VDN0ROO0VEOERNO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDNURWO0VENkRVO0lBQ0ksYUFBQTtFQzNEZDtFRDZEVTtJQUVJLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7RUM1RGQ7RUQ2RGM7SUFDSSxrQkFBQTtFQzNEbEI7RUQ0RGtCO0lBQ0ksZUFBQTtFQzFEdEI7RUQyRHNCO0lBQ0ksYUFBQTtFQ3pEMUI7RUQ0RDBCO0lBQ0ksMEJBQUE7RUMxRDlCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG5cclxuLmhpZGUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8vIC5oaWRlLWRlc2t0b3Age1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG4vLyAuc2hvdy1kZXNrdG9wIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gfVxyXG4jbmF2X2JhciB7XHJcbiAgICBncmlkLWFyZWE6IG5hdjtcclxuICAgIGJhY2tncm91bmQ6ICRuYXYtY29sb3I7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYSwgaW1nIHtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIC5leGl0IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmF2IHsgLy9mb3IgbW9iaWxlIC0gbmF2IGNvbnRlbnQuLi5cclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAubmF2X2xpbmtzIHtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb24tZGVsYXk6IFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDc7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtZGFyaztcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgLy8gY2xpcC1wYXRoOiBjaXJjbGUoNDAwMHB4IGF0IDEwMCUgMCUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIDNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmV4aXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYub3ZlcmxheS1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwMHB4OyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dC1zaGFkb3c6IDEgMXB4IHdoaXRlOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBncmFkaWVudCBib3JkZXJcclxuICAgICAgICAgICAgICAgIC8vIC5tb2R1bGUtYm9yZGVye1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkYmx1ZSwgJHBpbmspO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAubW9kdWxle1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtZGFyaztcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwdXJwbGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9Ly9ncmFkaWVudCBib3JkZXJcclxuICAgICAgICAgICAgICAgIC8vIC5yZXN1bWUtYnRue1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHdpZHRoOiAxNTJweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDkwcHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICNuYXZfYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoLTI0MHB4KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAubmF2X2xpbmtze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbi5oaWRlLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNuYXZfYmFyIHtcbiAgZ3JpZC1hcmVhOiBuYXY7XG4gIGJhY2tncm91bmQ6ICMyNDI5MmU7XG59XG4jbmF2X2JhciBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI25hdl9iYXIgaGVhZGVyIGEsICNuYXZfYmFyIGhlYWRlciBpbWcge1xuICB6LWluZGV4OiA5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbmF2X2JhciBoZWFkZXIgLmxvZ28ge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4jbmF2X2JhciBoZWFkZXIgLmxvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4jbmF2X2JhciBoZWFkZXIgaW1nIC5leGl0IHtcbiAgbWF4LWhlaWdodDogNDBweDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogNztcbiAgYmFja2dyb3VuZDogIzI3MzA0MDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGltZyB7XG4gIG1heC13aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBpbWcuZXhpdCB7XG4gIHJpZ2h0OiAwO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGltZy5vdmVybGF5LWxvZ28ge1xuICBsZWZ0OiAwO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDVGMkYyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMjBweDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYSBzcGFuOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4jbmF2X2JhciBoZWFkZXIgLm1lbnUge1xuICB6LWluZGV4OiAxMDtcbiAgbWF4LWhlaWdodDogMjNweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbmF2X2JhciBoZWFkZXIgLm1lbnU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4jbmF2X2JhciBoZWFkZXIgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAjbmF2X2JhciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI25hdl9iYXIgaGVhZGVyIG5hdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAzMXB4O1xuICB9XG4gICNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyB7XG4gICAgcGFkZGluZy10b3A6IDM0MHB4O1xuICB9XG4gICNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGEgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYSBpOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.hideMobile = 'hide-mobile';
        this.path = '../../../../assets/images/custom-menu-icon.png';
        this.mode = 'desktop' || false;
    }
    NavbarComponent.prototype.hideMobileOn = function () {
        var mq = window.matchMedia('(min-width: 1025px)');
        if (mq.matches) {
            this.hideMobile = '';
        }
        else {
            this.hideMobile = 'hide-mobile';
        }
        // this.hideMobile = 'hide-mobile';
        this.path = '../../../../assets/images/custom-menu-icon.png';
    };
    // showDesktop() {
    //   this.hideMobile = '';
    //   this.mode = 'desktop';
    // }
    NavbarComponent.prototype.toggleMenu = function () {
        // toggle
        if (this.hideMobile === 'hide-mobile') {
            this.hideMobile = '';
            this.mode = 'mobile';
        }
        else {
            this.hideMobile = 'hide-mobile';
            this.mode = 'desktop';
        }
        // menu || close : img
        if (this.path === '../../../../assets/images/custom-menu-icon.png' && this.mode === 'mobile') {
            this.path = '../../../../assets/images/custom-close.png';
        }
        else {
            this.path = '../../../../assets/images/custom-menu-icon.png';
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // const mq = window.matchMedia( '(min-width: 1025px)' );
        // if (mq.matches) {
        //   this.showDesktop();
        //   this.mode = 'desktop';
        // } else {
        //   this.hideMobile = 'hide-mobile';
        // }
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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.about-page {\n  background: #3F4448;\n  height: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n.about-page .content section {\n  height: calc(100vh - 56px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.about-page .content section .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n}\n.about-page .content section .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n}\n.about-page .content section .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: white;\n}\n.about-page .content section .container h1 {\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page .content section .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.about-page .content section .container p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: block;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n}\n.about-page .content section .container a {\n  font-family: \"Nunito\", sans-serif;\n  display: block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #05F2F2;\n  border-radius: 2px;\n  margin: 1em 0;\n  text-align: center;\n}\n.about-page .content section .container a:hover {\n  cursor: pointer;\n  background: #05F2F2;\n}\n.about-page .content section.about {\n  background: #3F4448;\n}\n@media (min-width: 1025px) {\n  .about-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .about-page .content {\n    position: absolute;\n    left: 180px;\n  }\n  .about-page .content section {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .about-page .content section.about .container {\n    display: block;\n    text-align: left;\n    -webkit-transform: translatey(35px);\n            transform: translatey(35px);\n  }\n  .about-page .content section.about .container p {\n    text-align: left;\n    height: 30px;\n  }\n  .about-page .content section.about .container a {\n    display: inline-block;\n    text-decoration: none;\n    font-family: \"Nunito\", sans-serif;\n    color: white;\n    font-weight: 700;\n    border: 2px solid #05F2F2;\n    padding: 0.5em 2em;\n    border-radius: 4px;\n    margin-right: 1em;\n  }\n  .about-page .content section.about .container a:hover {\n    background: #05F2F2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EseUVBQUE7QUFDUjtFQUNJLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElRO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDRlo7QURHWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0RoQjtBREdZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGaEI7QURHZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFFQSxZQUFBO0FDRnBCO0FESWdCO0VBR0ksY0UzQk47RUY0Qk0saUNBQUE7QUNKcEI7QURLb0I7RUFDSSxnQ0FBQTtFQUVBLCtCQUFBO0FDSnhCO0FET2dCO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0xwQjtBRE9nQjtFQUNJLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTHBCO0FETW9CO0VBQ0ksZUFBQTtFQUNBLG1CRTdEZjtBRHlEVDtBRFFZO0VBQ0ksbUJFM0VMO0FEcUVYO0FEZ0JBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDYk47RURjTTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtFQ1pWO0VEYVU7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VDWGQ7RURja0I7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQ0FBQTtZQUFBLDJCQUFBO0VDWnRCO0VEbUJzQjtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtFQ2pCMUI7RURtQnNCO0lBQ0kscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGlDQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBRUEseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEsaUJBQUE7RUNuQjFCO0VEcUIwQjtJQUNJLG1CRXZIdkI7RURvR1A7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLmFib3V0LXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogIzNGNDQ0ODtcclxuICAgIC8vIGhlaWdodDogMjAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDEyM3B4O1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLmhlbGxvIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFib3V0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAmLnR3byB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxODksIDY3KTtcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IzAxMDEwMTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAuYWJvdXQtcGFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICYuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDM1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggOTBweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufSAgICAgICAgICBcclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbi5hYm91dC1wYWdlIHtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgLmhlbGxvIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgaDEge1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVGMkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBhIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDVGMkYyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCB7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcbiAgLmFib3V0LXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxODBweDtcbiAgfVxuICAuYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgzNXB4KTtcbiAgfVxuICAuYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzA1RjJGMjtcbiAgICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICB9XG4gIC5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\nspan {\n  display: none;\n}\n.contact-page {\n  background: #3F4448;\n  height: 100%;\n  font-family: \"Nunito\", sans-serif;\n}\n.contact-page .contact-content {\n  width: 100%;\n}\n.contact-page .contact-content .heading {\n  padding-top: 30px;\n  text-align: center;\n}\n.contact-page .contact-content .wrapper {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content {\n  position: fixed;\n  bottom: 0;\n  background-color: #3F4448;\n  padding: 9%;\n  width: 100%;\n  height: calc(100vh - 56px);\n}\n.contact-page .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 25vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content input {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 100px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.contact-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.contact-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.contact-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 1025px) {\n  .contact-page {\n    position: relative;\n    display: flex;\n  }\n  .contact-page .contact-content {\n    width: 100%;\n  }\n  .contact-page .contact-content .heading {\n    padding-top: 30px;\n    text-align: center;\n  }\n  .contact-page .contact-content .wrapper {\n    width: 100%;\n  }\n  .contact-page .contact-content .wrapper .content {\n    position: fixed;\n    bottom: 0;\n    background-color: #3F4448;\n    padding: 9%;\n    width: 100%;\n    height: calc(100vh - 56px);\n  }\n  .contact-page .contact-content .wrapper .content form {\n    display: block;\n    margin-top: 0em;\n    text-align: right;\n  }\n  .contact-page .contact-content .wrapper .content form .fieldwrap {\n    width: 100%;\n  }\n  .contact-page .contact-content .wrapper .content form .fieldwrap .formleft {\n    width: 49.5%;\n    float: left;\n  }\n  .contact-page .contact-content .wrapper .content form .fieldwrap .formright {\n    width: 49.5%;\n    float: right;\n  }\n  .contact-page .map {\n    width: 50%;\n  }\n  .contact-page .content {\n    width: 50%;\n  }\n  .contact-page h1 {\n    font-size: 3em;\n  }\n  .contact-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .contact-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0UsYUFBQTtBQ0RGO0FER0E7RUFDSSxtQkVOTztFRlFQLFlBQUE7RUFDQSxpQ0FBQTtBQ0RKO0FEUUk7RUFDRSxXQUFBO0FDTk47QURTTTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNQVjtBRFNNO0VBQ0ksV0FBQTtBQ1BWO0FEVVU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUVFLHlCRWhDSDtFRm1DRyxXQUFBO0VBRUQsV0FBQTtFQUNBLDBCQUFBO0FDWmI7QURrQmM7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEJoQjtBRGlCZ0I7RUFDSSxXQUFBO0FDZnBCO0FEZ0JvQjtFQUVJLFdBQUE7RUFDQSxXQUFBO0FDZnhCO0FEZ0J3QjtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2QxQjtBRGlCc0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ2hCMUI7QURpQjBCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZjlCO0FEbUJnQjtFQUNRLFdBQUE7QUNqQnhCO0FEa0J3QjtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2hCeEI7QURvQmdCO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUVBLHlCRTFIUjtFRjJIUSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNyQnBCO0FEMEJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0V6SE07QURpR2Q7QUR5QlE7RUFDSSxnQ0FBQTtFQUVBLCtCQUFBO0FDeEJaO0FEMkJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDekJSO0FENkJBO0VBQ0k7SUFFSSxrQkFBQTtJQUNBLGFBQUE7RUMzQk47RUQ0Qk07SUFDRSxXQUFBO0VDMUJSO0VENkJRO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQzNCWjtFRDZCUTtJQUNFLFdBQUE7RUMzQlY7RUQ4QlU7SUFDRSxlQUFBO0lBQ0EsU0FBQTtJQUVFLHlCRTNLTDtJRjhLSyxXQUFBO0lBRUEsV0FBQTtJQUNBLDBCQUFBO0VDaENkO0VEc0NjO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQ3BDaEI7RURxQ2dCO0lBQ0ksV0FBQTtFQ25DcEI7RURvQ29CO0lBQ0ksWUFBQTtJQUVBLFdBQUE7RUNuQ3hCO0VEcUNvQjtJQUNFLFlBQUE7SUFDQSxZQUFBO0VDbkN0QjtFRDJDTTtJQUNFLFVBQUE7RUN6Q1I7RUQyQ007SUFDRSxVQUFBO0VDekNSO0VEK0NNO0lBQ0ksY0FBQTtFQzdDVjtFRDhDVTtJQUNJLGdDQUFBO0VDNUNkO0VEK0NNO0lBQ0ksVUFBQTtFQzdDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLy8gTU9CSUxFIEZJUlNULCBNRURJQSBRVUVSWSBGT1IgRlVMTCBTQ1JFRU46RklYXHJcbnNwYW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvbnRhY3QtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyAubWFwe1xyXG4gICAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC5jb250YWN0LWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIDU2cHgpLzIpO1xyXG5cclxuICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAud3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAvLyAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOSU7XHJcbiAgICAgICAgICAgIC8vICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgLy8gICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIC8vIGNvbG9yOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAuZmllbGR3cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2VzdHlsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwZTVlYTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAuY29udGFjdC1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuY29udGFjdC1jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIDU2cHgpLzIpO1xyXG4gICAgXHJcbiAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAvLyAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDklO1xyXG4gICAgICAgICAgICAgIC8vICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAgIC8vICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgIC5maWVsZHdyYXB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDkuNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9ybXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5LjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFwe1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvLyB0b3A6IDIyJTtcclxuICAgICAgICAgICAgLy8gbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250YWN0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLmhlYWRpbmcge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDQ0ODtcbiAgcGFkZGluZzogOSU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtbGVmdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZm9ybW1lc3NhZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSAuZm9ybW1lc3NhZ2VzdHlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAyNXZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGlucHV0IHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBib3JkZXI6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3QtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi5jb250YWN0LXBhZ2UgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNvbnRhY3QtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5jb250YWN0LXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC5oZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDQ0ODtcbiAgICBwYWRkaW5nOiA5JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IHtcbiAgICB3aWR0aDogNDkuNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IHtcbiAgICB3aWR0aDogNDkuNSU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLm1hcCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5jb250ZW50IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/site/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  text-decoration: none;\n  margin-top: 20%;\n}\nul i {\n  color: #05F2F2;\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 5px;\n}\nul i:hover {\n  cursor: pointer;\n}\n.home-page {\n  overflow: hidden;\n  background: #3F4448;\n  height: 100%;\n}\n.home-page .content section {\n  height: calc(100vh - 56px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.home-page .content section.home {\n  background: #3F4448;\n}\n.home-page .content section.home .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n}\n.home-page .content section.home .container h1 {\n  font-size: 80px;\n  text-align: center;\n  font-weight: 600;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.home-page .content section.home .container p {\n  font-weight: 400;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: block;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n}\n.home-page .content section.home .container .action-btn {\n  display: inline-block;\n  text-decoration: none;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n  font-weight: 700;\n  border: 2px solid #05F2F2;\n  padding: 0.5em 2em;\n  border-radius: 4px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.home-page .content section.home .container .action-btn:hover {\n  background: #05F2F2;\n}\n.home-page .content section.about {\n  background: #05F2F2;\n  background: linear-gradient(#05DBF2, #05F2F2);\n  text-align: center;\n}\n.home-page .content section.about .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n  -webkit-transform: translatey(0px);\n          transform: translatey(0px);\n  text-align: right;\n}\n.home-page .content section.about .container ul {\n  position: absolute;\n  left: 60%;\n  top: 20%;\n}\n.home-page .content section.about .container ul li img {\n  width: 45%;\n}\n.home-page .content section.about .container ul li img.one {\n  margin-right: 50px;\n}\n.home-page .content section.about .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: white;\n}\n.home-page .content section.about .container h1 {\n  color: #4e4e4e;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content section.about .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.home-page .content section.about .container p {\n  font-weight: 400;\n  line-height: 1.8em;\n  color: white;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content section.about .container a {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 20px;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2.4px solid #3F4448;\n  border-radius: 4px;\n  margin: 1.5em 0;\n}\n.home-page .content section.about .container a:hover {\n  cursor: pointer;\n  background: #3F4448;\n  opacity: 0.8;\n}\n.home-page .content section.contact {\n  position: relative;\n  height: 50vh;\n  display: flex;\n  justify-content: flex-end;\n}\n.home-page .content section.contact h1 {\n  position: absolute;\n  left: 50px;\n  color: black;\n  bottom: 40px;\n  z-index: 3;\n}\n.home-page .content section.contact h1.hide {\n  display: none;\n}\n.home-page .content section.contact .contact-content {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content {\n  background-color: #3F4448;\n  padding: 9%;\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.home-page .content section.contact .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 22vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .content section.contact .contact-content .wrapper .content a {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 85px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.home-page .content section .wrapper {\n  background-color: #24292e;\n  width: 70%;\n  margin: 5% auto 10%;\n  border-radius: 2px;\n}\n.home-page .content section .wrapper .content {\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .content p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #F5F3F5;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n@media (min-width: 1025px) {\n  .home-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .home-page .content {\n    position: absolute;\n    left: 180px;\n  }\n  .home-page .content section {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    height: 100vh;\n  }\n  .home-page .content section.home .container {\n    display: block;\n    text-align: left;\n  }\n  .home-page .content img {\n    width: 250px;\n  }\n  .home-page .content h1 {\n    font-size: 3em;\n  }\n  .home-page .content p {\n    width: 60%;\n    height: 30px;\n  }\n  .home-page .content a {\n    display: inline-block;\n    text-decoration: none;\n    font-family: \"Nunito\", sans-serif;\n    color: white;\n    font-weight: 700;\n    border: 2px solid #05F2F2;\n    padding: 0.5em 2em;\n    border-radius: 4px;\n    margin-right: 1em;\n  }\n  .home-page .content a:hover {\n    background: #05F2F2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBREdBO0VBQ0ksZ0JBQUE7RUFFQSxtQkVyQk87RUZ5QlAsWUFBQTtBQ0pKO0FET1E7RUFDSSwwQkFBQTtFQUlBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNSWjtBRFdZO0VBTUksbUJFN0NMO0FEK0JYO0FEbUJnQjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbEJwQjtBRG9Cb0I7RUFFSSxlQUFBO0VBR0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3RCeEI7QUQ0Qm9CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQzFCeEI7QUQ0Qm9CO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDM0J4QjtBRDZCd0I7RUFDSSxtQkV4Rm5CO0FENkRUO0FEaUNZO0VBQ0ksbUJFL0ZQO0VGZ0dPLDZDQUFBO0VBQ0Esa0JBQUE7QUMvQmhCO0FEZ0NnQjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQXVDQSxpQkFBQTtBQ3JFcEI7QUQrQm9CO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQzdCeEI7QUQ4QndCO0VBQ0ksVUFBQTtBQzVCNUI7QUQ4QjRCO0VBQ0ksa0JBQUE7QUM1QmhDO0FEZ0NvQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFlBQUE7QUM5QnhCO0FEZ0NvQjtFQUdJLGNBQUE7RUFDQSxpQ0FBQTtBQ2hDeEI7QURpQ3dCO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBQ2hDNUI7QURtQ29CO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNsQ3hCO0FEcUNvQjtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDcEN4QjtBRHNDd0I7RUFDSSxlQUFBO0VBQ0EsbUJFM0tqQjtFRjRLaUIsWUFBQTtBQ3BDNUI7QUR5Q1k7RUFDSSxrQkFBQTtFQWNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUNyRGhCO0FEcUNnQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ25DcEI7QURvQ29CO0VBQ0ksYUFBQTtBQ2xDeEI7QUQ0Q2dCO0VBR0ksV0FBQTtBQzVDcEI7QURtRG9CO0VBQ0ksV0FBQTtBQ2pEeEI7QURtRHdCO0VBRUkseUJFbk5qQjtFRnVOaUIsV0FBQTtFQUVBLFdBQUE7QUN0RDVCO0FEMEQ0QjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN4RGhDO0FEeURnQztFQUNJLFdBQUE7QUN2RHBDO0FEd0RvQztFQUNJLFdBQUE7RUFDQSxXQUFBO0FDdER4QztBRHVEd0M7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNyRHhDO0FEd0RvQztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDdER4QztBRHVEd0M7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNyRDVDO0FEeURnQztFQUNRLFdBQUE7QUN2RHhDO0FEd0R3QztFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3REeEM7QUQwRGdDO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUVBLHlCRXpTeEI7RUYwU3dCLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzNEcEM7QURrRVk7RUFFSSx5QkV4VEo7RUZnVUksVUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUN6RWhCO0FEMkVnQjtFQUVJLGVBQUE7RUFDQSxpQ0FBQTtBQzFFcEI7QUQ4RVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRWhVRTtFRmlVRixpQ0FBQTtBQzVFWjtBRG1GUTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjRTdVRTtFRjhVRixlQUFBO0VBQ0EsaUNBQUE7QUNuRlo7QUQ4RkE7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUM1Rk47RUQ2Rk07SUFDSSxrQkFBQTtJQUNBLFdBQUE7RUMzRlY7RUQ0RlU7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtFQzFGZDtFRDZGa0I7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUMzRnRCO0VEa0dVO0lBQ0ksWUFBQTtFQ2hHZDtFRGtHVTtJQUNJLGNBQUE7RUNoR2Q7RURxR1U7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQ25HZDtFRHFHVTtJQUNJLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxpQ0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUVBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDcEdkO0VEc0djO0lBQ0ksbUJFblpYO0VEK1NQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG4vL01PQklMRSBGSVJTVFxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAkYXAtcG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhvbWUtcGFnZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQ6ICRhcC1kYXJrO1xyXG4gICAgLy8gaGVpZ2h0OiAyMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNvbnRlbnQge1xyXG5cclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgICAgICAgICAmLmhvbWUge1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IC0yMDBweDtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNjIlO1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAzOHZoO1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDUwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogY2FsYyg1MHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmxvd2VyLmpwZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0xMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb24tYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDkwcHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiA3MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYig3OCwgNzgsIDc4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMi40cHggc29saWQgJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS41ZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICAmLmhpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5jb250YWN0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNTZweCkvMik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNTZweCkvMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2VzdHlsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBlNWVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRtaWQtYmx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNiU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1JSBhdXRvIDEwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgJG1pZC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtOyBcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAvLyBzcGFuIHtcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgLy8gY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAvLyBhe1xyXG4gICAgICAgICAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAvLyAgICAgY29sb3I6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG5cclxuICAgIC5ob21lLXBhZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE4MHB4O1xyXG4gICAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgJi5ob21lIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgIC8vIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggOTBweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxudWwgaSB7XG4gIGNvbG9yOiAjMDVGMkYyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG51bCBpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS1wYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uaG9tZSAuY29udGFpbmVyIC5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciAuYWN0aW9uLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNUYyRjI7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDogMjAlO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHVsIGxpIGltZy5vbmUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciAuaGVsbG8ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGgxIHtcbiAgY29sb3I6ICM0ZTRlNGU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVGMkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyOiAyLjRweCBzb2xpZCAjM0Y0NDQ4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMS41ZW0gMDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3R0b206IDQwcHg7XG4gIHotaW5kZXg6IDM7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMS5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBwYWRkaW5nOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSAuZm9ybW1lc3NhZ2VzdHlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAyMnZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBhIHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiA4NXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24gLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDUlIGF1dG8gMTAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHNlY3Rpb24gLndyYXBwZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC5ob21lLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtcGFnZSAuY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE4MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgLmhvbWUtcGFnZSAuY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuaG9tZS1wYWdlIC5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC5ob21lLXBhZ2UgLmNvbnRlbnQgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmhvbWUtcGFnZSAuY29udGVudCBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gICAgcGFkZGluZzogMC41ZW0gMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxuICAuaG9tZS1wYWdlIC5jb250ZW50IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwNUYyRjI7XG4gIH1cbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iXX0= */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.works-page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  display: grid;\n  grid-gap: 1em;\n  padding: 1em;\n}\n.works-page .wrapper {\n  background-color: #3F4448;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 100%;\n  opacity: 0.68;\n  transition-delay: 0.4s;\n  transition: ease-in-out;\n  border-radius: 2px;\n}\n.works-page .wrapper:hover {\n  opacity: 1;\n}\n.works-page .wrapper .content {\n  text-align: center;\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  height: 100%;\n  color: white;\n  width: 80%;\n  margin: 0 auto;\n}\n.works-page .wrapper .content h6::before {\n  content: \"- \";\n}\n.works-page .wrapper .content h6::after {\n  content: \" -\";\n}\n.works-page .wrapper .content .disabled {\n  text-decoration: line-through;\n}\n.works-page .wrapper .content .disabled:hover {\n  cursor: default;\n  background: #3F4448;\n}\n.works-page .wrapper .content p {\n  text-align: left;\n}\n.works-page .wrapper .content i:hover {\n  cursor: pointer;\n}\n.works-page .wrapper .content a {\n  display: block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #05F2F2;\n  border-radius: 4px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.works-page .wrapper .content a:hover {\n  cursor: pointer;\n  background: #05F2F2;\n}\n.works-page .wrapper .content a.contactme {\n  display: inline-block;\n}\n.works-page .wrapper .content img {\n  width: 80%;\n}\n.works-page .wrapper .fifth {\n  position: absolute;\n  bottom: 0;\n}\n.works-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.works-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.works-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 1025px) {\n  .works-page {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    box-sizing: border-box;\n  }\n  .works-page .wrapper {\n    background-color: #3F4448;\n    box-shadow: 0px 0px 115px #000000a6;\n    padding: 23%;\n    width: 100%;\n  }\n  .works-page .wrapper .content.addmore i {\n    padding-top: 45%;\n  }\n  .works-page h1 {\n    font-size: 3em;\n  }\n  .works-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .works-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUNSO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7QURlUTtFQUNJLHlCRXZCRDtFRndCQyxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2JaO0FEY1k7RUFDSSxVQUFBO0FDWmhCO0FEY1k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDYmhCO0FEY2dCO0VBQ0ksYUFBQTtBQ1pwQjtBRGNnQjtFQUNJLGFBQUE7QUNacEI7QURjZ0I7RUFDSSw2QkFBQTtBQ1pwQjtBRGFvQjtFQUNJLGVBQUE7RUFDQSxtQkV0RGI7QUQyQ1g7QUQ4QmdCO0VBQ0ksZ0JBQUE7QUM1QnBCO0FEK0JvQjtFQUNJLGVBQUE7QUM3QnhCO0FEZ0NnQjtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQy9CcEI7QURnQ29CO0VBQ0ksZUFBQTtFQUNBLG1CRXJGZjtBRHVEVDtBRGdDb0I7RUFDSSxxQkFBQTtBQzlCeEI7QURpQ2dCO0VBQ0ksVUFBQTtBQy9CcEI7QURrQ1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNoQ2hCO0FEMkNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0UxR007QURpRWQ7QUQwQ1E7RUFDSSxnQ0FBQTtFQUVBLCtCQUFBO0FDekNaO0FENENJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDMUNSO0FEOENBO0VBQ0k7SUFJSSxhQUFBO0lBRUEsa0NBQUE7SUFDQSwyQkFBQTtJQUNBLHNCQUFBO0VDL0NOO0VEbURNO0lBQ0kseUJFckpEO0lGc0pDLG1DQUFBO0lBRUEsWUFBQTtJQUNBLFdBQUE7RUNsRFY7RURzRGtCO0lBQ0ksZ0JBQUE7RUNwRHRCO0VEMERNO0lBQ0ksY0FBQTtFQ3hEVjtFRHlEVTtJQUNJLGdDQUFBO0VDdkRkO0VEMERNO0lBQ0ksVUFBQTtFQ3hEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLndvcmtzLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIC8vIC5jb250YWluZXJ7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvLyAgICAgLy8gcGFkZGluZy10b3A6IDEwJTtcclxuICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC8vICAgICAvLyBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgLy8gICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgLy8gICAgIC8vIGdyaWQtZ2FwOiAzZW07XHJcbiAgICAvLyAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC42ODtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGg2OjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJy0gJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGg2OjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnIC0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpc2FibGVke1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC5idXR0b25zIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBoNiwgaDUsIGgzLCBhIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmNvbnRhY3RtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpZnRoIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAuY29udGFjdC1pdGVteyBcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgICBib3R0b206IDA7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW1nIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy8gfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAud29ya3MtcGFnZSB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLnBuZyk7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICAgICAgLy8gZ3JpZC1nYXA6IDFlbTtcclxuICAgICAgICAvLyBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMyU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAmLmFkZG1vcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgICAgICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbi53b3Jrcy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMWVtO1xuICBwYWRkaW5nOiAxZW07XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xuICBwYWRkaW5nOiA2JTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNjg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IGg2OjpiZWZvcmUge1xuICBjb250ZW50OiBcIi0gXCI7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCBoNjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAtXCI7XG59XG4ud29ya3MtcGFnZSAud3JhcHBlciAuY29udGVudCAuZGlzYWJsZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IC5kaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIgLmNvbnRlbnQgaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzA1RjJGMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIgLmNvbnRlbnQgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzA1RjJGMjtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50IGEuY29udGFjdG1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLndvcmtzLXBhZ2UgLndyYXBwZXIgLmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi53b3Jrcy1wYWdlIC53cmFwcGVyIC5maWZ0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuLndvcmtzLXBhZ2UgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4ud29ya3MtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ud29ya3MtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gIC53b3Jrcy1wYWdlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLndvcmtzLXBhZ2UgLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XG4gICAgcGFkZGluZzogMjMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53b3Jrcy1wYWdlIC53cmFwcGVyIC5jb250ZW50LmFkZG1vcmUgaSB7XG4gICAgcGFkZGluZy10b3A6IDQ1JTtcbiAgfVxuICAud29ya3MtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLndvcmtzLXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLndvcmtzLXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
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

module.exports = "<!-- flex nav -->\n<!-- flex direction changes -->\n<div class=\"nav_bar\" id=\"nav_bar\"> \n  <header>\n    <!-- logo icon-->\n    <a routerLink=\"/\">\n      <img (click)=\"myfunction()\" class=\"logo\" src=\"../../../../assets/images/custom-logo.png\">\n    </a>\n    <!-- <img (click)=\"myfunction()\" [class]=\"hideMobile\" src=\"../../../../assets/svgs/iconfinder_icon-close_211652.svg\" alt=\"exit menu\" id=\"exit\" class=\"exit\"> -->\n\n    <!-- desktop nav -->\n    <!--  -->\n    <nav [class]=\"hideMobile\">\n      <!-- hide-mobile show desktop-->\n      <div class=\"nav_links\">\n        <a (click)=\"myfunction()\" routerLink=\"/\"><span>-</span> Home <span>-</span></a>\n        <!-- <a (click)=\"myfunction()\" routerLink=\"/about\"><span>-</span> About <span>-</span></a> -->\n        <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Projects <span>-</span></a>\n        <!-- <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Featured <span>-</span></a> -->\n        <a (click)=\"myfunction()\" routerLink=\"/contact\"><span>-</span> Contact <span>-</span></a>\n\n        \n        <!-- <a class=\"resume-btn\">\n          <div class=\"module-border\" style=\"margin: 0 auto; margin-top: 10px;\">\n            <div class=\"module\">\n              Resume\n            </div>\n          </div>\n        </a> -->\n      </div>\n    </nav>\n    <!-- mobile menu: hide desktop -->\n    <img (click)=\"myfunction()\" [ngClass]=\"status ? 'success' : 'danger'\" class=\"menu\" src=\"{{path}}\" alt=\"toggle menu\" id=\"menu\">\n    \n  </header>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/about/about.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n  <div class=\"content\">\n\n    <section class=\"one\">\n      <div class=\"container\">\n        <ul>\n          <li><img class=\"animated  rollIn one\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n          <li><img class=\"animated  rollIn two\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n          <li><img class=\"animated  rollIn three\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n        </ul>\n        \n        \n  \n        <span class=\"hello animated  slideInDown one\">Hello.</span> \n        <div class=\"content animated  slideInUp one\">\n            <h1>\n              <span class=\"about\">About</span> me \n            </h1><br>\n            <p>\n              Hey everyone, I'm Hiro and you've found my site. <br>\n              This is a collection of projects, documents, social <br>\n              media channels and whatever else I feel like putting on here.<br>\n              Currently, I'm set on finishing this portfolio site by July 31st, <br>\n              so that I can start working while I pursue my bachelors in computer science.\n            </p> <br><a routerLink=\"/work\">Check out my work</a> \n          </div>\n      </div>\n    </section>\n\n    <section class=\"two\">\n      <div class=\"container\">\n        <div class=\"wrapper\">\n          <div class=\"content\">\n            <h1>\n              <span class=\"about\">About</span> me \n            </h1><br>\n            <p>\n              Hey everyone, I'm Hiro and you've found my site. <br>\n              This is a collection of projects, documents, social <br>\n              media channels and whatever else I feel like putting on here.<br>\n              Currently, I'm set on finishing this portfolio site by July 31st, <br>\n              so that I can start freelancing while I work on <br>\n              getting my bachelors in computer science.\n            </p> <a routerLink=\"/work\">Check out my work</a> \n          </div>\n        </div>\n            \n          \n      </div>\n    </section>\n    \n    \n \n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/contact/contact.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  \n  <div class=\"contact-content\">\n    <div class=\"wrapper\">\n      <div class=\"content group animated  slideInUp one\">\n        <h1>From:</h1>\n        <form action=\"/contact\" method=\"POST\">\n          <div class=\"fieldwrap group\">\n            <div class=\"formleft\">\n              <input\n                type=\"text\"\n                name=\"name\"\n                placeholder=\"Name\"\n              /><br />\n            </div>\n\n            <div class=\"formright\">\n              <input\n                type=\"text\"\n                name=\"email\"\n                placeholder=\"Email\"\n              /><br />\n            </div>\n          </div>\n          <div class=\"formmessage\">\n            <textarea\n              name=\"message\"\n              class=\"formmessagestyle\"\n              placeholder=\"Message\"\n            ></textarea\n            ><br />\n          </div>\n          <input type=\"submit\" class=\"send\" value=\"SEND\">\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"map\"> -->\n    <!-- <app-gmap></app-gmap> -->\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page \">\n  <div class=\"home-content\">\n\n    <section class=\"home\">\n      <!-- <div class=\"wrapper1 \">\n        <div class=\"content \"> -->\n          <div class=\"container\">\n              <h1 class=\"animated  slideInDown one\"><span>Hiro</span> Nakae</h1>\n              <p class=\"animated  flipInX one\">\n                Web Developer / Node / Angular\n              </p>\n              <div class=\"animated  slideInLeft one\">\n                <a class=\"action-btn\" routerLink=\"/contact\">Contact me</a>\n              </div>\n          </div>\n          \n        <!-- </div>\n      </div> -->\n    </section>\n    <section class=\"about\">\n      <div class=\"container\">\n        <!-- <ul>\n          <li><img class=\"animated  rollIn one\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n          <li><img class=\"animated  rollIn two\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n          <li><img class=\"animated  rollIn three\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n        </ul> -->\n\n        <span class=\"hello animated  slideInDown one\">Hello.</span> \n        \n        <div class=\"content animated  slideInUp one\">\n          <!-- <h1>\n            <span class=\"about\">About</span> me \n          </h1><br> -->\n          <p>\n            \n          </p> <br><a routerLink=\"/work\">Check out my work</a> \n        </div>\n      </div>\n    </section>\n\n    \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/work/work.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/work/work.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"works-page\">\n  <!-- <div *ngFor=\"let card of cards; let id = index+1\"> -->\n  <div class=\"container\">\n    <!-- <div class=\"heading\">\n      <h1>Some Things I've <span>Built</span></h1><br>\n    </div> -->\n    <!-- <h1>These are various projects I've worked on over the years. I hope they may be of some use to you. If you'd like to contribute to any, feel free! I generally use the GPLv3 license, or MIT otherwise.</h1> -->\n    <div data-aos=\"fade-right\" class=\"wrapper featured animated  slideInLeft one\">\n      <div class=\"content\">\n        <h6>- Featured -</h6>\n        <h3>E-Commerce</h3>\n        <!-- <h4>Built With</h4> -->\n        <p>Node / Angular</p>\n        <!-- <h4>Featuring</h4> -->\n        <!-- <p>Font: Nunito Semi Bold</p><br>\n        <p>Colors: 3</p><br> -->\n        <div class=\"buttons\">\n          <a href=\"#\">Live Demo</a>\n          <a href=\"#\">View Source</a>\n        </div>\n        \n        <!-- <a href=\"#\">View Article</a> -->\n        <!-- <img src=\"../../../../assets/images/PsychedelicMilkSmall.jpg\" alt=\"\"> -->\n\n      </div>\n    </div>\n    <div data-aos=\"fade-right\" class=\"subfeature wrapper animated  slideInRight one\">\n      <div class=\"content\">\n        <h3>Real Estate</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    <div data-aos=\"fade-right\" class=\"subsubfeature wrapper animated  slideInLeft one\">\n      <div class=\"content\">\n        <h3>Digital Agency</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    <div data-aos=\"fade-right\" >\n        <div class=\"wrapper animated  slideInRight one\">\n            <div class=\"content\">\n              <h3>Restaurant</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n              <a href=\"#\">Live Demo</a>\n              <a href=\"#\">View Source</a>\n            </div>\n          </div>\n    </div>\n    \n    \n  </div>\n\n\n  <!-- </div> -->\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site/home/home.component */ "./src/app/components/site/home/home.component.ts");
/* harmony import */ var _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/site/about/about.component */ "./src/app/components/site/about/about.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");







const routes = [
    { path: '', component: _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'work', component: _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"] },
    { path: 'contact', component: _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // , {scrollPositionRestoration: 'enabled'}
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
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















let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GmapComponent = class GmapComponent {
    constructor() {
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
    ngOnInit() {
    }
};
GmapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gmap',
        template: __webpack_require__(/*! raw-loader!./gmap.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/api/gmap/gmap.component.html"),
        styles: [__webpack_require__(/*! ./gmap.component.scss */ "./src/app/components/api/gmap/gmap.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GmapComponent);



/***/ }),

/***/ "./src/app/components/layout/content/content.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/layout/content/content.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  grid-area: content;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(#05DBF2, #05F2F2);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiIsIi5jb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentComponent = class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: __webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/content/content.component.html"),
        styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/layout/content/content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContentComponent);



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.hide-mobile {\n  display: none;\n}\n#nav_bar {\n  grid-area: nav;\n  background: #24292e;\n}\n#nav_bar header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  position: relative;\n}\n#nav_bar header a, #nav_bar header img {\n  z-index: 9;\n  cursor: pointer;\n}\n#nav_bar header .logo {\n  max-height: 40px;\n  border-radius: 50%;\n  background: none;\n}\n#nav_bar header .logo:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#nav_bar header img .exit {\n  max-height: 40px;\n}\n#nav_bar header nav .nav_links {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 7;\n  background: #273040;\n  -webkit-clip-path: circle(4000px at 100% 0%);\n          clip-path: circle(4000px at 100% 0%);\n  transition: all 3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 100px;\n}\n#nav_bar header nav .nav_links img {\n  max-width: 40px;\n  position: absolute;\n  top: 0;\n  margin: 20px;\n  cursor: pointer;\n}\n#nav_bar header nav .nav_links img:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n#nav_bar header nav .nav_links img.exit {\n  right: 0;\n}\n#nav_bar header nav .nav_links img.overlay-logo {\n  left: 0;\n}\n#nav_bar header nav .nav_links a {\n  text-decoration: none;\n  color: #05F2F2;\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n  font-weight: 400;\n  padding: 20px;\n}\n#nav_bar header nav .nav_links a:hover {\n  text-decoration: underline;\n}\n#nav_bar header nav .nav_links a span {\n  display: none;\n}\n#nav_bar header nav .nav_links a span:hover {\n  display: block;\n}\n#nav_bar header .menu {\n  z-index: 10;\n  max-height: 23px;\n  padding-right: 6px;\n  cursor: pointer;\n}\n#nav_bar header .menu:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#nav_bar header p {\n  color: white;\n}\n@media (min-width: 1024px) {\n  #nav_bar header {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtBQ0RKO0FEV0E7RUFDSSxjQUFBO0VBQ0EsbUJFaEJRO0FEUVo7QURTSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUFI7QURRUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDTlo7QURRUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ05aO0FET1k7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDTGhCO0FEUVE7RUFDSSxnQkFBQTtBQ05aO0FEV1k7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJFNUNOO0VGK0NNLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNiaEI7QURjZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNacEI7QURhb0I7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDWHhCO0FEYW9CO0VBQ0ksUUFBQTtBQ1h4QjtBRGNvQjtFQUNJLE9BQUE7QUNaeEI7QURnQmdCO0VBQ0kscUJBQUE7RUFDQSxjRXJFWDtFRnVFVyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtBQ2hCcEI7QURrQm9CO0VBRUksMEJBQUE7QUNqQnhCO0FEbUJvQjtFQUNJLGFBQUE7QUNqQnhCO0FEa0J3QjtFQUNJLGNBQUE7QUNoQjVCO0FEdURRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDckRaO0FEc0RZO0VBQ0ksNkJBQUE7VUFBQSxxQkFBQTtBQ3BEaEI7QUR1RFE7RUFDSSxZQUFBO0FDckRaO0FEMERBO0VBRVE7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0VDeERWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG5cclxuLmhpZGUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8vIC5oaWRlLWRlc2t0b3Age1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG4vLyAuc2hvdy1kZXNrdG9wIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gfVxyXG4jbmF2X2JhciB7XHJcbiAgICBncmlkLWFyZWE6IG5hdjtcclxuICAgIGJhY2tncm91bmQ6ICRuYXYtY29sb3I7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBhLCBpbWcge1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcgLmV4aXQge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBuYXYgeyAvL2ZvciBtb2JpbGUgLSBuYXYgY29udGVudC4uLlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm5hdl9saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uLWRlbGF5OiBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA3O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFwLWRhcms7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDQwMDBweCBhdCAxMDAlIDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5leGl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLm92ZXJsYXktbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHQtc2hhZG93OiAxIDFweCB3aGl0ZTsgICBcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhZGllbnQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICAvLyAubW9kdWxlLWJvcmRlcntcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGJsdWUsICRwaW5rKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLm1vZHVsZXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZDogJGFwLWRhcms7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHVycGxlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfS8vZ3JhZGllbnQgYm9yZGVyXHJcbiAgICAgICAgICAgICAgICAvLyAucmVzdW1lLWJ0bntcclxuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB3aWR0aDogMTUycHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA5MHB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAjbmF2X2JhciB7XHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4uaGlkZS1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbmF2X2JhciB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xufVxuI25hdl9iYXIgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNuYXZfYmFyIGhlYWRlciBhLCAjbmF2X2JhciBoZWFkZXIgaW1nIHtcbiAgei1pbmRleDogOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI25hdl9iYXIgaGVhZGVyIC5sb2dvIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuI25hdl9iYXIgaGVhZGVyIC5sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuI25hdl9iYXIgaGVhZGVyIGltZyAuZXhpdCB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDc7XG4gIGJhY2tncm91bmQ6ICMyNzMwNDA7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDQwMDBweCBhdCAxMDAlIDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBpbWcge1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgaW1nLmV4aXQge1xuICByaWdodDogMDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBpbWcub3ZlcmxheS1sb2dvIHtcbiAgbGVmdDogMDtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA1RjJGMjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGEgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYSBzcGFuOmhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jbmF2X2JhciBoZWFkZXIgLm1lbnUge1xuICB6LWluZGV4OiAxMDtcbiAgbWF4LWhlaWdodDogMjNweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbmF2X2JhciBoZWFkZXIgLm1lbnU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4jbmF2X2JhciBoZWFkZXIgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAjbmF2X2JhciBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.hideMobile = 'hide-mobile';
        this.path = '../../../../assets/images/custom-menu-icon.png';
        this.status = false;
    }
    myfunction() {
        // hide || reveal
        if (this.hideMobile === 'hide-mobile') {
            this.hideMobile = '';
        }
        else {
            this.hideMobile = 'hide-mobile';
        }
        // menu || close : img
        if (this.path === '../../../../assets/images/custom-menu-icon.png') {
            this.path = '../../../../assets/images/custom-close.png';
        }
        else {
            this.path = '../../../../assets/images/custom-menu-icon.png';
        }
        this.status = !this.status;
    }
    ngOnInit() {
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



/***/ }),

/***/ "./src/app/components/site/about/about.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/site/about/about.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.about-page {\n  background: #3F4448;\n  height: 200%;\n  text-align: center;\n  overflow: hidden;\n}\n.about-page .content section {\n  height: calc(100vh - 56px);\n}\n.about-page .content section .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n}\n.about-page .content section .container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n}\n.about-page .content section .container ul {\n  position: absolute;\n  left: 60%;\n  top: 20%;\n}\n.about-page .content section .container ul li img {\n  width: 45%;\n}\n.about-page .content section .container ul li img.one {\n  margin-right: 50px;\n}\n.about-page .content section .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.about-page .content section .container h1 {\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page .content section .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.about-page .content section .container p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page .content section .container a {\n  font-family: \"Nunito\", sans-serif;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #05F2F2;\n  border-radius: 2px;\n  margin: 1em 0;\n}\n.about-page .content section .container a:hover {\n  cursor: pointer;\n  background: #05F2F2;\n}\n.about-page .content section.one {\n  background: #05F2F2;\n  background: linear-gradient(#05DBF2, #05F2F2);\n}\n.about-page .content section.two {\n  background-color: #010101;\n}\n@media (min-width: 900px) {\n  .about-page {\n    position: relative;\n  }\n  .about-page .content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n  }\n  .about-page h1 {\n    font-size: 3em;\n  }\n  .about-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .about-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EseUVBQUE7QUFDUjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdRO0VBQ0ksMEJBQUE7QUNEWjtBREVZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDQWhCO0FERVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksVUFBQTtBQ0V4QjtBREF3QjtFQUNJLGtCQUFBO0FDRTVCO0FEMEJnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3hCcEI7QUQwQmdCO0VBR0ksY0V4RE47RUZ5RE0saUNBQUE7QUMxQnBCO0FEMkJvQjtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUMxQnhCO0FENkJnQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDM0JwQjtBRDZCZ0I7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDM0JwQjtBRDRCb0I7RUFDSSxlQUFBO0VBQ0EsbUJFeEZmO0FEOERUO0FEOEJZO0VBQ0ksbUJFN0ZQO0VGOEZPLDZDQUFBO0FDNUJoQjtBRDhCWTtFQUVJLHlCQUFBO0FDN0JoQjtBRGtDQTtFQUNJO0lBRUksa0JBQUE7RUNoQ047RURpQ007SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUMvQlY7RURpQ007SUFDSSxjQUFBO0VDL0JWO0VEZ0NVO0lBQ0ksZ0NBQUE7RUM5QmQ7RURpQ007SUFDSSxVQUFBO0VDL0JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi5hYm91dC1wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzRjQ0NDg7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMjNweDtcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiA3MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYub25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCA2Nyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjojMDAxZDMzO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogNi4zJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBtYXJnaW46IDUlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgYm9yZGVyOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmhlbGxvIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudHdvIHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4OSwgNjcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDEwMTAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmFib3V0LXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICAgICAgICAgIFxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDIwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYwJTtcbiAgdG9wOiAyMCU7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciB1bCBsaSBpbWcub25lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIC5oZWxsbyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBoMSB7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNUYyRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICM5OGEwYWQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5vbmUge1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLnR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxMDE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuYWJvdXQtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5hYm91dC1wYWdlIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMiU7XG4gICAgbGVmdDogMTgwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuYWJvdXQtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmFib3V0LXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLmFib3V0LXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/site/about/about.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/components/site/contact/contact.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/site/contact/contact.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.contact-page {\n  background: linear-gradient(#05DBF2, #05F2F2);\n  height: 100%;\n  font-family: \"Nunito\", sans-serif;\n}\n.contact-page .contact-content {\n  width: 100%;\n}\n.contact-page .contact-content .heading {\n  padding-top: 30px;\n  text-align: center;\n}\n.contact-page .contact-content .wrapper {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content {\n  position: fixed;\n  bottom: 0;\n  background: linear-gradient(#05DBF2, #05F2F2);\n  padding: 9%;\n  width: 100%;\n  height: calc(100vh - 56px);\n}\n.contact-page .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.contact-page .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.contact-page .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 25vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .contact-content .wrapper .content input {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 100px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.contact-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.contact-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.contact-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .contact-page {\n    position: relative;\n    display: flex;\n  }\n  .contact-page .formleft {\n    width: 49%;\n    float: right;\n  }\n  .contact-page .formright {\n    width: 49%;\n    float: right;\n  }\n  .contact-page .map {\n    width: 50%;\n  }\n  .contact-page .content {\n    width: 50%;\n  }\n  .contact-page h1 {\n    font-size: 3em;\n  }\n  .contact-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .contact-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBRUksNkNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUNGSjtBRFNJO0VBQ0UsV0FBQTtBQ1BOO0FEVU07RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDUlY7QURVTTtFQUNJLFdBQUE7QUNSVjtBRFdVO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFHQSw2Q0FBQTtFQUVFLFdBQUE7RUFFRCxXQUFBO0VBQ0EsMEJBQUE7QUNiYjtBRGdCYztFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNkaEI7QURlZ0I7RUFDSSxXQUFBO0FDYnBCO0FEY29CO0VBRUksV0FBQTtFQUNBLFdBQUE7QUNieEI7QURjd0I7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNaMUI7QURlc0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ2QxQjtBRGUwQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2I5QjtBRGlCZ0I7RUFDUSxXQUFBO0FDZnhCO0FEZ0J3QjtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2R4QjtBRGtCZ0I7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFFQSxVQUFBO0VBRUEseUJFcEhSO0VGcUhRLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25CcEI7QUR3Qkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRW5ITTtBRDZGZDtBRHVCUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUN0Qlo7QUR5Qkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUN2QlI7QUQyQkE7RUFDSTtJQUVJLGtCQUFBO0lBQ0EsYUFBQTtFQ3pCTjtFRDBCTTtJQUNNLFVBQUE7SUFFQSxZQUFBO0VDekJaO0VEMkJNO0lBQ00sVUFBQTtJQUVBLFlBQUE7RUMxQlo7RUQ0Qk07SUFDRSxVQUFBO0VDMUJSO0VENEJNO0lBQ0UsVUFBQTtFQzFCUjtFRGdDTTtJQUNJLGNBQUE7RUM5QlY7RUQrQlU7SUFDSSxnQ0FBQTtFQzdCZDtFRGdDTTtJQUNJLFVBQUE7RUM5QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi8vIE1PQklMRSBGSVJTVCwgTUVESUEgUVVFUlkgRk9SIEZVTEwgU0NSRUVOOkZJWFxyXG4uY29udGFjdC1wYWdlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIC5tYXB7XHJcbiAgICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNTZweCkvMik7XHJcblxyXG4gICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAvLyBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC8vICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA5JTtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgICAgICAvLyAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZm9ybXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdlc3R5bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGU1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuY29udGFjdC1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuZm9ybWxlZnR7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtcmlnaHR7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vIHRvcDogMjIlO1xyXG4gICAgICAgICAgICAvLyBsZWZ0OiAxODBweDtcclxuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4uY29udGFjdC1wYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLmhlYWRpbmcge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xuICBwYWRkaW5nOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5mb3JtbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZvcm1tZXNzYWdlIC5mb3JtbWVzc2FnZXN0eWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDI1dmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgaW5wdXQge1xuICBjb2xvcjogIzAwZTVlYTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFjdC1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjVGM0Y1O1xufVxuLmNvbnRhY3QtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uY29udGFjdC1wYWdlIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuY29udGFjdC1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5mb3JtbGVmdCB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuZm9ybXJpZ2h0IHtcbiAgICB3aWR0aDogNDklO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5tYXAge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29udGFjdC1wYWdlIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuY29udGFjdC1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/site/contact/contact.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/components/site/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/site/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  text-decoration: none;\n  margin-top: 20%;\n}\nul i {\n  color: #05F2F2;\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 5px;\n}\nul i:hover {\n  cursor: pointer;\n}\n.home-page {\n  overflow: hidden;\n  background: #3F4448;\n  height: 200%;\n}\n.home-page .home-content section {\n  height: calc(100vh - 56px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.home-page .home-content section.home {\n  background: linear-gradient(#05DBF2, #05F2F2);\n}\n.home-page .home-content section.home .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n  -webkit-transform: translatey(-100px);\n          transform: translatey(-100px);\n}\n.home-page .home-content section.home .container h1 {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.home-page .home-content section.home .container p {\n  font-weight: 400;\n  font-size: 18px;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content section.home .container .action-btn {\n  display: inline-block;\n  text-decoration: none;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n  font-weight: 700;\n  border: 2px solid orange;\n  padding: 0.5em 2em;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.home-page .home-content section.home .container .action-btn:hover {\n  background: orange;\n}\n.home-page .home-content section.about {\n  background: #05F2F2;\n  background: linear-gradient(#05DBF2, #05F2F2);\n  text-align: center;\n}\n.home-page .home-content section.about .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n  -webkit-transform: translatey(0px);\n          transform: translatey(0px);\n}\n.home-page .home-content section.about .container ul {\n  position: absolute;\n  left: 60%;\n  top: 20%;\n}\n.home-page .home-content section.about .container ul li img {\n  width: 45%;\n}\n.home-page .home-content section.about .container ul li img.one {\n  margin-right: 50px;\n}\n.home-page .home-content section.about .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.home-page .home-content section.about .container h1 {\n  color: #4e4e4e;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content section.about .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.home-page .home-content section.about .container p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content section.about .container a {\n  font-family: \"Nunito\", sans-serif;\n  display: inline-block;\n  text-decoration: none;\n  color: #010101;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid orange;\n  border-radius: 2px;\n  margin: 1em 0;\n}\n.home-page .home-content section.about .container a:hover {\n  cursor: pointer;\n}\n.home-page .home-content section.contact {\n  position: relative;\n  height: 50vh;\n  display: flex;\n  justify-content: flex-end;\n}\n.home-page .home-content section.contact h1 {\n  position: absolute;\n  left: 50px;\n  color: black;\n  bottom: 40px;\n  z-index: 3;\n}\n.home-page .home-content section.contact h1.hide {\n  display: none;\n}\n.home-page .home-content section.contact .contact-content {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content {\n  background-color: #3F4448;\n  padding: 9%;\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 22vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content a {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 85px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.home-page .home-content section .wrapper {\n  background-color: #24292e;\n  width: 70%;\n  margin: 5% auto 10%;\n  border-radius: 2px;\n}\n.home-page .home-content section .wrapper .content {\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #F5F3F5;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n@media (min-width: 1024px) {\n  .home-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .home-page .home-content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n    width: 70%;\n  }\n  .home-page .home-content img {\n    width: 250px;\n  }\n  .home-page .home-content h1 {\n    font-size: 3em;\n  }\n  .home-page .home-content h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .home-page .home-content p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBREdBO0VBQ0ksZ0JBQUE7RUFFQSxtQkVyQk87RUZ3QlAsWUFBQTtBQ0hKO0FETVE7RUFFSSwwQkFBQTtFQUlBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNSWjtBRFdZO0VBUUksNkNBQUE7QUNoQmhCO0FEbUJnQjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ2xCcEI7QURtQm9CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDakJ4QjtBRG1Cb0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ2pCeEI7QURtQm9CO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDbEJ4QjtBRG9Cd0I7RUFDSSxrQkFBQTtBQ2xCNUI7QUR3Qlk7RUFDSSxtQkVuRlA7RUZvRk8sNkNBQUE7RUFDQSxrQkFBQTtBQ3RCaEI7QUR1QmdCO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDdEJwQjtBRHVCb0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDckJ4QjtBRHNCd0I7RUFDSSxVQUFBO0FDcEI1QjtBRHNCNEI7RUFDSSxrQkFBQTtBQ3BCaEM7QUR3Qm9CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDdEJ4QjtBRHdCb0I7RUFHSSxjQUFBO0VBQ0EsaUNBQUE7QUN4QnhCO0FEeUJ3QjtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUN4QjVCO0FEMkJvQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDekJ4QjtBRDRCb0I7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDMUJ4QjtBRDRCd0I7RUFDSSxlQUFBO0FDMUI1QjtBRGdDWTtFQUNJLGtCQUFBO0VBY0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtBQzVDaEI7QUQ0QmdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDMUJwQjtBRDJCb0I7RUFDSSxhQUFBO0FDekJ4QjtBRG1DZ0I7RUFHSSxXQUFBO0FDbkNwQjtBRDBDb0I7RUFDSSxXQUFBO0FDeEN4QjtBRDBDd0I7RUFFSSx5QkVsTWpCO0VGc01pQixXQUFBO0VBRUEsV0FBQTtBQzdDNUI7QURpRDRCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQy9DaEM7QURnRGdDO0VBQ0ksV0FBQTtBQzlDcEM7QUQrQ29DO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUM3Q3hDO0FEOEN3QztFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzVDeEM7QUQrQ29DO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUM3Q3hDO0FEOEN3QztFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzVDNUM7QURnRGdDO0VBQ1EsV0FBQTtBQzlDeEM7QUQrQ3dDO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDN0N4QztBRGlEZ0M7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFFQSxVQUFBO0VBRUEseUJFeFJ4QjtFRnlSd0IsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbERwQztBRHlEWTtFQUVJLHlCRXZTSjtFRitTSSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQ2hFaEI7QURrRWdCO0VBRUksZUFBQTtFQUNBLGlDQUFBO0FDakVwQjtBRHFFUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNFL1NFO0VGZ1RGLGlDQUFBO0FDbkVaO0FEMEVRO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNFNVRFO0VGNlRGLGVBQUE7RUFDQSxpQ0FBQTtBQzFFWjtBRHFGQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ2xGTjtFRG1GTTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUNqRlY7RURrRlU7SUFDSSxZQUFBO0VDaEZkO0VEa0ZVO0lBQ0ksY0FBQTtFQ2hGZDtFRGlGYztJQUNJLGdDQUFBO0VDL0VsQjtFRGtGVTtJQUNJLFVBQUE7RUNoRmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi8vTU9CSUxFIEZJUlNUXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICRhcC1wb3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uaG9tZS1wYWdlIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgIFxyXG4gICAgLy8gYmFja2dyb3VuZDogJGFwLWRhcms7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICAuaG9tZS1jb250ZW50IHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XHJcbiAgICAgICAgICAgICYuaG9tZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogLTIwMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA2MiU7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDM4dmg7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoNTB2aCAtIDU2cHgpO1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDUwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mbG93ZXIuanBnKTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTEwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IC42cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDkwcHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiA3MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgICYuaGlkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGhlaWdodDogY2FsYygoMTAwdmggLSA1NnB4KS8yKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGhlaWdodDogY2FsYygoMTAwdmggLSA1NnB4KS8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmllbGR3cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtbWVzc2FnZXN0eWxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGU1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJG1pZC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkbWlkLWJsdWU7XHJcbiAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC8vIHNwYW4ge1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC8vIGF7XHJcbiAgICAgICAgICAgIC8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuaG9tZS1wYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5ob21lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjIlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxODBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbnVsIGkge1xuICBjb2xvcjogIzA1RjJGMjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxudWwgaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUtcGFnZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIGhlaWdodDogMjAwJTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uaG9tZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTEwMHB4KTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmhvbWUgLmNvbnRhaW5lciAuYWN0aW9uLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uaG9tZSAuY29udGFpbmVyIC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MCU7XG4gIHRvcDogMjAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciB1bCBsaSBpbWcge1xuICB3aWR0aDogNDUlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciB1bCBsaSBpbWcub25lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciAuaGVsbG8ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIGgxIHtcbiAgY29sb3I6ICM0ZTRlNGU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNUYyRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5hYm91dCAuY29udGFpbmVyIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uYWJvdXQgLmNvbnRhaW5lciBhIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAxMDEwMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmFib3V0IC5jb250YWluZXIgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm90dG9tOiA0MHB4O1xuICB6LWluZGV4OiAzO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMS5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBwYWRkaW5nOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtbGVmdCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZvcm1tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZm9ybW1lc3NhZ2UgLmZvcm1tZXNzYWdlc3R5bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMjJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBhIHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiA4NXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbiAud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogNSUgYXV0byAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uIC53cmFwcGVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICNGNUYzRjU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhvbWUtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/site/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/site/work/work.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/site/work/work.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.works-page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding-top: 30px;\n}\n.works-page .container {\n  width: 100%;\n  padding-top: 5%;\n}\n.works-page .container .heading {\n  border-bottom: 1px solid black;\n}\n.works-page .container .heading h1, .works-page .container .heading p {\n  color: black;\n}\n.works-page .container .wrapper {\n  background: linear-gradient(to bottom, #05DBF2, #05F2F2);\n  border-radius: 4px;\n  box-shadow: 0px 0px 115px white;\n  padding: 6%;\n  width: 100%;\n  margin: 5% auto 10%;\n}\n.works-page .container .wrapper .content {\n  text-align: center;\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  height: 160px;\n}\n.works-page .container .wrapper .content .buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  float: left;\n}\n.works-page .container .wrapper .content .buttons a {\n  width: 49%;\n  text-align: center;\n}\n.works-page .container .wrapper .content h6 {\n  color: #010101;\n}\n.works-page .container .wrapper .content h3 {\n  color: #010101;\n  text-align: center;\n}\n.works-page .container .wrapper .content p {\n  text-align: left;\n}\n.works-page .container .wrapper .content a {\n  display: inline-block;\n  text-decoration: none;\n  color: #010101;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #14A1D9;\n  border-radius: 4px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.works-page .container .wrapper .content a:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n.works-page .container .wrapper .content img {\n  width: 80%;\n}\n.works-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.works-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.works-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .works-page h1 {\n    font-size: 3em;\n  }\n  .works-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .works-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUNSO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBRUksOEJBQUE7QUNEWjtBREVZO0VBRUksWUFBQTtBQ0RoQjtBRE1RO0VBSUksd0RBQUE7RUFHQSxrQkFBQTtFQUdBLCtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1paO0FEa0JZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQ2hCaEI7QURpQmdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2ZwQjtBRGdCb0I7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNkeEI7QURpQmdCO0VBQ0ksY0FBQTtBQ2ZwQjtBRGlCZ0I7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUNoQnBCO0FEa0JnQjtFQUNJLGdCQUFBO0FDaEJwQjtBRGtCZ0I7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaEJwQjtBRGlCb0I7RUFDSSxlQUFBO0VBQ0EsbUJFM0VqQjtBRDREUDtBRGtCZ0I7RUFDSSxVQUFBO0FDaEJwQjtBRGlDSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNFM0ZNO0FENERkO0FEZ0NRO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBQy9CWjtBRGtDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2hDUjtBRG9DQTtFQUlRO0lBQ0ksY0FBQTtFQ3BDVjtFRHFDVTtJQUNJLGdDQUFBO0VDbkNkO0VEc0NNO0lBQ0ksVUFBQTtFQ3BDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLndvcmtzLXBhZ2Uge1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzNGNDQ0ODtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMzB2aDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBoMSwgcHtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjojMDAxZDMzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMwNURCRjIsJGFwLXBvcCk7XHJcbiAgICAgICAgICAgIC8vICMwMDFkMzNcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4IHdoaXRlO1xyXG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICRibHVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0byAxMCU7XHJcblxyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIC8vICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICAgIC5idXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVkIHtcclxuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCBvcmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJmZWF0dXJlIHtcclxuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCBwdXJwbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJzdWJmZWF0dXJlIHtcclxuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCBibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGltZyB7XHJcbiAgICAvLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIC8vIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAud29ya3MtcGFnZSB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLnBuZyk7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAgICAiLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4ud29ya3MtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLmhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC5oZWFkaW5nIGgxLCAud29ya3MtcGFnZSAuY29udGFpbmVyIC5oZWFkaW5nIHAge1xuICBjb2xvcjogYmxhY2s7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA1REJGMiwgIzA1RjJGMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCB3aGl0ZTtcbiAgcGFkZGluZzogNiU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG8gMTAlO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTYwcHg7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC53cmFwcGVyIC5jb250ZW50IC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgLmJ1dHRvbnMgYSB7XG4gIHdpZHRoOiA0OSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgaDYge1xuICBjb2xvcjogIzAxMDEwMTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgaDMge1xuICBjb2xvcjogIzAxMDEwMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAxMDEwMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTRBMUQ5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC53cmFwcGVyIC5jb250ZW50IGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxNEExRDk7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC53cmFwcGVyIC5jb250ZW50IGltZyB7XG4gIHdpZHRoOiA4MCU7XG59XG4ud29ya3MtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi53b3Jrcy1wYWdlIGgxIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi53b3Jrcy1wYWdlIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAud29ya3MtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLndvcmtzLXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLndvcmtzLXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkComponent = class WorkComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/work/work.component.html"),
        styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/components/site/work/work.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WorkComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map
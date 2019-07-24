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

module.exports = "<!-- flex nav -->\n<!-- flex direction changes -->\n<div class=\"nav_bar\" id=\"nav_bar\"> \n  <header>\n    <!-- logo icon-->\n    <a routerLink=\"/\">\n      <img (click)=\"myfunction()\" class=\"logo\" src=\"../../../../assets/images/custom-logo.png\">\n    </a>\n    <!-- <img (click)=\"myfunction()\" [class]=\"hideMobile\" src=\"../../../../assets/svgs/iconfinder_icon-close_211652.svg\" alt=\"exit menu\" id=\"exit\" class=\"exit\"> -->\n\n    <!-- desktop nav -->\n    <!--  -->\n    <nav [class]=\"hideMobile\">\n      <!-- hide-mobile show desktop-->\n      <div class=\"nav_links\">\n        <a (click)=\"myfunction()\" routerLink=\"/\"><span>-</span> Home <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/about\"><span>-</span> About <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Collection <span>-</span></a>\n        <!-- <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Featured <span>-</span></a> -->\n        <!-- <a (click)=\"myfunction()\" routerLink=\"/contact\"><span>-</span> Contact <span>-</span></a> -->\n        \n        <!-- <a class=\"resume-btn\">\n          <div class=\"module-border\" style=\"margin: 0 auto; margin-top: 10px;\">\n            <div class=\"module\">\n              Resume\n            </div>\n          </div>\n        </a> -->\n      </div>\n    </nav>\n    <!-- mobile menu: hide desktop -->\n    <img (click)=\"myfunction()\" [ngClass]=\"status ? 'success' : 'danger'\" class=\"menu\" src=\"{{path}}\" alt=\"toggle menu\" id=\"menu\">\n    \n  </header>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/about/about.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n  <div class=\"content\">\n\n    <section class=\"one\">\n      <div class=\"container\">\n        <ul>\n          <li><img class=\"animated  rollIn one\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n          <li><img class=\"animated  rollIn two\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n          <li><img class=\"animated  rollIn three\" id=\"triangle\" src=\"../../../../assets/images/Triangle.png\" alt=\"\"></li>\n        </ul>\n        \n        \n  \n        <span class=\"hello animated  slideInDown one\">Hello.</span> \n        <div class=\"content animated  slideInUp one\">\n            <h1>\n              <span class=\"about\">About</span> me \n            </h1><br>\n            <p>\n              Hey everyone, I'm Hiro and you've found my site. <br>\n              This is a collection of projects, documents, social <br>\n              media channels and whatever else I feel like putting on here.<br>\n              Currently, I'm set on finishing this portfolio site by July 31st, <br>\n              so that I can start freelancing while I work on <br>\n              getting my bachelors in computer science.\n            </p> <br><a routerLink=\"/work\">Check out my work</a> \n          </div>\n      </div>\n    </section>\n<!-- \n    <section class=\"two\">\n      <div class=\"container\">\n        <div class=\"wrapper\">\n          <div class=\"content\">\n            <h1>\n              <span class=\"about\">About</span> me \n            </h1><br>\n            <p>\n              Hey everyone, I'm Hiro and you've found my site. <br>\n              This is a collection of projects, documents, social <br>\n              media channels and whatever else I feel like putting on here.<br>\n              Currently, I'm set on finishing this portfolio site by July 31st, <br>\n              so that I can start freelancing while I work on <br>\n              getting my bachelors in computer science.\n            </p> <a routerLink=\"/work\">Check out my work</a> \n          </div>\n        </div>\n            \n          \n      </div>\n    </section> -->\n    \n    \n \n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/contact/contact.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  <div class=\"contact-content\">\n    <div class=\"wrapper\">\n      <h1 class=\"alert alert-success\">bootstrap works!</h1>\n      <i class=\"fab fa-linkedin-in\">fontawesome doesn't</i>\n    </div>\n  </div>\n  <!-- <div class=\"contact-content\">\n    <div class=\"wrapper\">\n      <div class=\"content group\">\n        <form action=\"/contact\" method=\"POST\">\n          <div class=\"fieldwrap group\">\n            <div class=\"formleft\">\n              <input\n                type=\"text\"\n                name=\"name\"\n                placeholder=\"Name\"\n              /><br />\n            </div>\n\n            <div class=\"formright\">\n              <input\n                type=\"text\"\n                name=\"email\"\n                placeholder=\"Email\"\n              /><br />\n            </div>\n          </div>\n          <div class=\"formmessage\">\n            <textarea\n              name=\"message\"\n              class=\"formmessagestyle\"\n              placeholder=\"Message\"\n            ></textarea\n            ><br />\n          </div>\n          <a type=\"submit\" class=\"send\">SEND</a>\n        </form>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"map\"> -->\n    <!-- <app-gmap></app-gmap> -->\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page \">\n  <div class=\"home-content\">\n\n    <section class=\"home\">\n      <div class=\"wrapper1 \">\n        <div class=\"content \">\n          <h1 class=\"animated  slideInDown one\"><span>Hiro</span> Nakae</h1>\n          <p class=\"animated  flipInX one\">\n            <span></span>Web Developer / Node / Angular <br>\n          </p><br><br>\n          <div class=\"animated  slideInLeft one\">\n            <a class=\"action-btn\" routerLink=\"/about\">About me</a>\n          </div>\n          \n          \n        </div>\n        \n      </div>\n      \n    </section>\n\n    <section class=\"contact\">\n        \n      <h1 class=\"alert alert-success hide\">Message Sent!</h1>\n      <div class=\"contact-content \">\n        \n          <div class=\"wrapper\">\n            <div class=\"content group\">\n                \n              <form action=\"/contact\" method=\"POST\">\n                <div class=\"fieldwrap group\">\n                  <div class=\"formleft  animated  slideInRight one\">\n                    <input\n                      type=\"text\"\n                      name=\"name\"\n                      placeholder=\"Name\"\n                    /><br />\n                  </div>\n      \n                  <div class=\"formright  animated  slideInLeft one\">\n                    <input\n                      type=\"text\"\n                      name=\"email\"\n                      placeholder=\"Email\"\n                    /><br />\n                  </div>\n                </div>\n                <div class=\"formmessage  animated  slideInRight one\">\n                  <textarea\n                    name=\"message\"\n                    class=\"formmessagestyle\"\n                    placeholder=\"Message\"\n                  ></textarea\n                  ><br />\n                </div>\n                <a type=\"submit\" class=\"send  animated  slideInLeft one\">SEND</a>\n              </form>\n            </div>\n          </div>\n        </div>\n    </section>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/skills/skills.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/skills/skills.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-page\">\n  <div class=\"content\">\n    <div class=\"container\">\n      <h1>\n        <span>Skills</span> page\n      </h1>\n      <p>The main area of my expertise is front end development.\n        HTML, CSS, JS (TypeScript), small to medium web apps with Angular2+.\n        interactive layouts, animations, and features.\n        I have full-stack developer experience with back end languages,\n        api development, and various databases.\n  \n        Visit my <a href=\"\">LinkedIn</a>  profile for more details or just <a href=\"\">contact</a>  me.\n      </p><br>\n      <a href=\"\" class=\"resume-btn\">Download CV</a><br>\n      <a href=\"\" class=\"resume-btn\">Download Resume</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/work/work.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/work/work.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"works-page\">\n  <!-- <div *ngFor=\"let card of cards; let id = index+1\"> -->\n  <div class=\"container\">\n    <!-- <div class=\"heading\">\n      <h1>Some Things I've <span>Built</span></h1><br>\n    </div> -->\n    <!-- <h1>These are various projects I've worked on over the years. I hope they may be of some use to you. If you'd like to contribute to any, feel free! I generally use the GPLv3 license, or MIT otherwise.</h1> -->\n    <div data-aos=\"fade-right\" class=\"wrapper featured animated  slideInLeft one\">\n      <div class=\"content\">\n        <h6>- Featured Project -</h6>\n        <h3>E-Commerce</h3>\n        <h4>Built With</h4>\n        <p>Node / Angular</p>\n        <h4>Featuring</h4>\n        <p>Font: Nunito Semi Bold</p><br>\n        <p>Colors: 3</p><br>\n        \n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n        <!-- <a href=\"#\">View Article</a> -->\n        <!-- <img src=\"../../../../assets/images/PsychedelicMilkSmall.jpg\" alt=\"\"> -->\n\n      </div>\n    </div>\n    <div data-aos=\"fade-right\" class=\"wrapper animated  slideInRight one\">\n      <div class=\"content\">\n        <h3>Real Estate</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    <div data-aos=\"fade-right\" class=\"wrapper animated  slideInLeft one\">\n      <div class=\"content\">\n        <h3>Digital Agency</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    <div data-aos=\"fade-right\" >\n        <div class=\"wrapper animated  slideInRight one\">\n            <div class=\"content\">\n              <h3>Restaurant</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n              <a href=\"#\">Live Demo</a>\n              <a href=\"#\">View Source</a>\n            </div>\n          </div>\n    </div>\n    \n    \n  </div>\n\n\n  <!-- </div> -->\n</div>"

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
/* harmony import */ var _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site/skills/skills.component */ "./src/app/components/site/skills/skills.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");








const routes = [
    { path: '', component: _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'skills', component: _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"] },
    { path: 'work', component: _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"] },
    { path: 'contact', component: _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
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
/* harmony import */ var _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site/skills/skills.component */ "./src/app/components/site/skills/skills.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");
/* harmony import */ var _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout/content/content.component */ "./src/app/components/layout/content/content.component.ts");
/* harmony import */ var _components_api_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/api/gmap/gmap.component */ "./src/app/components/api/gmap/gmap.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"],
            _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_12__["WorkComponent"],
            _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_14__["ContentComponent"],
            _components_api_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_15__["GmapComponent"]
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

module.exports = ".content {\n  grid-area: content;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuY29udGVudCB7XG4gIGdyaWQtYXJlYTogY29udGVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.hide-mobile {\n  display: none;\n}\n#nav_bar {\n  grid-area: nav;\n  background: #24292e;\n}\n#nav_bar header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  position: relative;\n}\n#nav_bar header a, #nav_bar header img {\n  z-index: 9;\n  cursor: pointer;\n}\n#nav_bar header .logo {\n  max-height: 40px;\n  border-radius: 50%;\n  background: none;\n}\n#nav_bar header .logo:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#nav_bar header img .exit {\n  max-height: 40px;\n}\n#nav_bar header nav .nav_links {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 7;\n  background: #273040;\n  -webkit-clip-path: circle(4000px at 100% 0%);\n          clip-path: circle(4000px at 100% 0%);\n  transition: all 3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 100px;\n}\n#nav_bar header nav .nav_links img {\n  max-width: 40px;\n  position: absolute;\n  top: 0;\n  margin: 20px;\n  cursor: pointer;\n}\n#nav_bar header nav .nav_links img:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n#nav_bar header nav .nav_links img.exit {\n  right: 0;\n}\n#nav_bar header nav .nav_links img.overlay-logo {\n  left: 0;\n}\n#nav_bar header nav .nav_links a {\n  text-decoration: none;\n  color: #05F2F2;\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n  font-weight: 400;\n  padding: 20px;\n}\n#nav_bar header nav .nav_links a:hover {\n  text-decoration: underline;\n}\n#nav_bar header nav .nav_links a span {\n  display: none;\n}\n#nav_bar header nav .nav_links a span:hover {\n  display: block;\n}\n#nav_bar header .menu {\n  z-index: 10;\n  max-height: 23px;\n  padding-right: 6px;\n  cursor: pointer;\n}\n#nav_bar header .menu:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n#nav_bar header p {\n  color: white;\n}\n@media (min-width: 1024px) {\n  #nav_bar header {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtBQ0RKO0FEV0E7RUFDSSxjQUFBO0VBQ0EsbUJFaEJRO0FEUVo7QURTSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUFI7QURRUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDTlo7QURRUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ05aO0FET1k7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDTGhCO0FEUVE7RUFDSSxnQkFBQTtBQ05aO0FEV1k7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJFNUNOO0VGOENNLDRDQUFBO1VBQUEsb0NBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNaaEI7QURhZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNYcEI7QURZb0I7RUFDSSw2QkFBQTtVQUFBLHFCQUFBO0FDVnhCO0FEWW9CO0VBQ0ksUUFBQTtBQ1Z4QjtBRGFvQjtFQUNJLE9BQUE7QUNYeEI7QURlZ0I7RUFDSSxxQkFBQTtFQUNBLGNFcEVYO0VGcUVXLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FDZHBCO0FEZ0JvQjtFQUVJLDBCQUFBO0FDZnhCO0FEaUJvQjtFQUNJLGFBQUE7QUNmeEI7QURnQndCO0VBQ0ksY0FBQTtBQ2Q1QjtBRHFEUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ25EWjtBRG9EWTtFQUNJLDZCQUFBO1VBQUEscUJBQUE7QUNsRGhCO0FEcURRO0VBQ0ksWUFBQTtBQ25EWjtBRHdEQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtFQ3REVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuXHJcbi5oaWRlLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vLyAuaGlkZS1kZXNrdG9wIHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuLy8gLnNob3ctZGVza3RvcCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vIH1cclxuI25hdl9iYXIge1xyXG4gICAgZ3JpZC1hcmVhOiBuYXY7XHJcbiAgICBiYWNrZ3JvdW5kOiAkbmF2LWNvbG9yO1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYSwgaW1nIHtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIC5leGl0IHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmF2IHsgLy9mb3IgbW9iaWxlIC0gbmF2IGNvbnRlbnQuLi5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5uYXZfbGlua3Mge1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbi1kZWxheTogXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1kYXJrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSg0MDAwcHggYXQgMTAwJSAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuZXhpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5vdmVybGF5LWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTAwcHg7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LXNoYWRvdzogMSAxcHggd2hpdGU7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGdyYWRpZW50IGJvcmRlclxyXG4gICAgICAgICAgICAgICAgLy8gLm1vZHVsZS1ib3JkZXJ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRibHVlLCAkcGluayk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5tb2R1bGV7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1kYXJrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogJHB1cnBsZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0vL2dyYWRpZW50IGJvcmRlclxyXG4gICAgICAgICAgICAgICAgLy8gLnJlc3VtZS1idG57XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gd2lkdGg6IDE1MnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgIC8vICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggOTBweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgI25hdl9iYXIge1xyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmhpZGUtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI25hdl9iYXIge1xuICBncmlkLWFyZWE6IG5hdjtcbiAgYmFja2dyb3VuZDogIzI0MjkyZTtcbn1cbiNuYXZfYmFyIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbmF2X2JhciBoZWFkZXIgYSwgI25hdl9iYXIgaGVhZGVyIGltZyB7XG4gIHotaW5kZXg6IDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNuYXZfYmFyIGhlYWRlciAubG9nbyB7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbiNuYXZfYmFyIGhlYWRlciAubG9nbzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbiNuYXZfYmFyIGhlYWRlciBpbWcgLmV4aXQge1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA3O1xuICBiYWNrZ3JvdW5kOiAjMjczMDQwO1xuICBjbGlwLXBhdGg6IGNpcmNsZSg0MDAwcHggYXQgMTAwJSAwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgaW1nIHtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGltZy5leGl0IHtcbiAgcmlnaHQ6IDA7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgaW1nLm92ZXJsYXktbG9nbyB7XG4gIGxlZnQ6IDA7XG59XG4jbmF2X2JhciBoZWFkZXIgbmF2IC5uYXZfbGlua3MgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwNUYyRjI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiNuYXZfYmFyIGhlYWRlciBuYXYgLm5hdl9saW5rcyBhIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuI25hdl9iYXIgaGVhZGVyIG5hdiAubmF2X2xpbmtzIGEgc3Bhbjpob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI25hdl9iYXIgaGVhZGVyIC5tZW51IHtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI25hdl9iYXIgaGVhZGVyIC5tZW51OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuI25hdl9iYXIgaGVhZGVyIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgI25hdl9iYXIgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.about-page {\n  background: #3F4448;\n  height: 100%;\n  text-align: center;\n  overflow: hidden;\n}\n.about-page .content section {\n  height: calc(100vh - 56px);\n}\n.about-page .content section .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n}\n.about-page .content section .container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n}\n.about-page .content section .container ul {\n  position: absolute;\n  left: 60%;\n  top: 20%;\n}\n.about-page .content section .container ul li img {\n  width: 45%;\n}\n.about-page .content section .container ul li img.one {\n  margin-right: 50px;\n}\n.about-page .content section .container .hello {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.about-page .content section .container h1 {\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page .content section .container h1 span {\n  border-bottom: 2px solid #05F2F2;\n  border-bottom-right-radius: 5px;\n}\n.about-page .content section .container p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page .content section .container a {\n  font-family: \"Nunito\", sans-serif;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #05F2F2;\n  border-radius: 2px;\n  margin: 1em 0;\n}\n.about-page .content section .container a:hover {\n  cursor: pointer;\n  background: #05F2F2;\n}\n.about-page .content section.one {\n  background: #05F2F2;\n  background: linear-gradient(#05DBF2, #05F2F2);\n}\n@media (min-width: 900px) {\n  .about-page {\n    position: relative;\n  }\n  .about-page .content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n  }\n  .about-page h1 {\n    font-size: 3em;\n  }\n  .about-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .about-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EseUVBQUE7QUFDUjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdRO0VBQ0ksMEJBQUE7QUNEWjtBREVZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDQWhCO0FERVk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksVUFBQTtBQ0V4QjtBREF3QjtFQUNJLGtCQUFBO0FDRTVCO0FEMEJnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ3hCcEI7QUQwQmdCO0VBR0ksY0V4RE47RUZ5RE0saUNBQUE7QUMxQnBCO0FEMkJvQjtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUMxQnhCO0FENkJnQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDM0JwQjtBRDZCZ0I7RUFDSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDM0JwQjtBRDRCb0I7RUFDSSxlQUFBO0VBQ0EsbUJFeEZmO0FEOERUO0FEOEJZO0VBQ0ksbUJFN0ZQO0VGOEZPLDZDQUFBO0FDNUJoQjtBRHFDQTtFQUNJO0lBRUksa0JBQUE7RUNuQ047RURvQ007SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNsQ1Y7RURvQ007SUFDSSxjQUFBO0VDbENWO0VEbUNVO0lBQ0ksZ0NBQUE7RUNqQ2Q7RURvQ007SUFDSSxVQUFBO0VDbENWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi5hYm91dC1wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzRjQ0NDg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMjNweDtcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiA3MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYub25lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIC53cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCA2Nyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjojMDAxZDMzO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogNi4zJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBtYXJnaW46IDUlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgYm9yZGVyOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLmhlbGxvIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICYudHdvIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNTUsIDE4OSwgNjcpO1xyXG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjojMDEwMTAxO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmFib3V0LXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICAgICAgICAgIFxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYwJTtcbiAgdG9wOiAyMCU7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciB1bCBsaSBpbWcub25lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbiAuY29udGFpbmVyIC5oZWxsbyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBoMSB7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNUYyRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICM5OGEwYWQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xufVxuLmFib3V0LXBhZ2UgLmNvbnRlbnQgc2VjdGlvbi5vbmUge1xuICBiYWNrZ3JvdW5kOiAjMDVGMkYyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuYWJvdXQtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5hYm91dC1wYWdlIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMiU7XG4gICAgbGVmdDogMTgwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuYWJvdXQtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmFib3V0LXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLmFib3V0LXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.contact-page {\n  background: #3F4448;\n  height: 100%;\n  font-family: \"Nunito\", sans-serif;\n}\n.contact-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.contact-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.contact-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .contact-page {\n    position: relative;\n    display: flex;\n  }\n  .contact-page .map {\n    width: 50%;\n  }\n  .contact-page .content {\n    width: 50%;\n  }\n  .contact-page h1 {\n    font-size: 3em;\n  }\n  .contact-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .contact-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksbUJDSE87RURJUCxZQUFBO0VBQ0EsaUNBQUE7QUVESjtBRm1ISTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNDNUdNO0FDTGQ7QUZrSFE7RUFDSSxnQ0FBQTtFQUVBLCtCQUFBO0FFakhaO0FGb0hJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FFbEhSO0FGc0hBO0VBQ0k7SUFFSSxrQkFBQTtJQUNBLGFBQUE7RUVwSE47RUZxSE07SUFDRSxVQUFBO0VFbkhSO0VGcUhNO0lBQ0UsVUFBQTtFRW5IUjtFRnlITTtJQUNJLGNBQUE7RUV2SFY7RUZ3SFU7SUFDSSxnQ0FBQTtFRXRIZDtFRnlITTtJQUNJLFVBQUE7RUV2SFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi8vIE1PQklMRSBGSVJTVCwgTUVESUEgUVVFUlkgRk9SIEZVTEwgU0NSRUVOOkZJWFxyXG4uY29udGFjdC1wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIC5tYXB7XHJcbiAgICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gLy8gICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNTZweCkvMik7XHJcblxyXG4gICAgLy8gICAuaGVhZGluZ3tcclxuICAgIC8vICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIC53cmFwcGVye1xyXG4gICAgLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgLy8gICBwYWRkaW5nLXRvcDogNzVweDtcclxuICAgIC8vICAgICAgIC5jb250ZW50e1xyXG4gICAgLy8gICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAvLyAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgLy8gICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgLy8gICAgICAgICAgIHBhZGRpbmc6IDklO1xyXG4gICAgLy8gICAgICAgICAvLyAgIHdpZHRoOiA3MCU7XHJcbiAgICAvLyAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICAgICAgLy8gIGhlaWdodDogY2FsYygoMTAwdmggLSA1NnB4KS8yKTtcclxuICAgIC8vICAgICAgICAgLy8gaGVpZ2h0OiA1MHZoO1xyXG4gICAgLy8gICAgICAgICAvLyAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG4gICAgLy8gICAgICAgICAgIGZvcm17XHJcbiAgICAvLyAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIC8vICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLy8gICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAuZm9ybWxlZnR7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgIC5mb3JtcmlnaHR7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAuZm9ybW1lc3NhZ2V7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2VzdHlsZXtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIydmg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBhe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBlNWVhO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcclxuICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNvbnRhY3QtcGFnZSB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLnBuZyk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLm1hcHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLy8gdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIC8vIGxlZnQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIiRuYXYtY29sb3I6ICMyNDI5MmU7XHJcbiRiZy1jb2xvcjogIzNGNDQ0ODtcclxuJGlucHV0OiAjMGUxMzFjO1xyXG5cclxuJGFwLWJsYWNrOiAjMEUxMzFDO1xyXG4kYXAtZGFyazogIzI3MzA0MDtcclxuJGFwLWJsdWU6ICMzNzY3QTY7XHJcbiRibHVlOiAjMTRBMUQ5O1xyXG4kbWlkLWJsdWU6ICMwNUM3RjI7XHJcbiRsaWdodC1ibHVlOiAjMDVEQkYyO1xyXG4kYXAtcG9wOiAjMDVGMkYyO1xyXG5cclxuXHJcbiRwaW5rOiAjRjIzNTlEO1xyXG4kcHVycGxlOiAjNzMyRDYwO1xyXG4kY3lhbm8td2hpdGU6ICNGNUYzRjU7XHJcbiRjeWFuby1ibGFjazogIzAxMDEwMTtcclxuJHNhbG8tYmxhY2s6ICMwRDBEMEQ7XHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbi5jb250YWN0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmNvbnRhY3QtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi5jb250YWN0LXBhZ2UgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNvbnRhY3QtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhY3QtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAubWFwIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSBoMSBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgfVxuICAuY29udGFjdC1wYWdlIHAge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn0iXX0= */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\nul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  text-decoration: none;\n  margin-top: 20%;\n}\nul i {\n  color: #05F2F2;\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 5px;\n}\nul i:hover {\n  cursor: pointer;\n}\n.home-page {\n  overflow: hidden;\n  background: #3F4448;\n  height: 100%;\n}\n.home-page .home-content section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border: 2px solid #3F4448;\n}\n.home-page .home-content section.home {\n  height: calc(50vh - 56px);\n  background-image: url('flower.jpg');\n}\n.home-page .home-content section.home .wrapper1 {\n  width: 100%;\n  height: 100%;\n  padding: 6%;\n}\n.home-page .home-content section.home .wrapper1 .content {\n  height: 100%;\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  padding: 6%;\n}\n.home-page .home-content section.home .wrapper1 .content div .action-btn {\n  display: inline-block;\n  text-decoration: none;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n  font-weight: 700;\n  border: 2px solid #05F2F2;\n  padding: 0.5em 2em;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n  transition: 0.6s ease-in-out;\n}\n.home-page .home-content section.home .wrapper1 .content div .action-btn:hover {\n  background: #273040;\n}\n.home-page .home-content section.home .wrapper1 .content h6 {\n  color: #F5F3F5;\n}\n.home-page .home-content section.home .wrapper1 .content h3 {\n  color: #F5F3F5;\n  text-align: left;\n}\n.home-page .home-content section.home .wrapper1 .content p {\n  text-align: left;\n}\n.home-page .home-content section.home .wrapper1 .content img {\n  width: 80%;\n}\n.home-page .home-content section.contact {\n  position: relative;\n  height: 50vh;\n  display: flex;\n  justify-content: flex-end;\n}\n.home-page .home-content section.contact h1 {\n  position: absolute;\n  right: 60px;\n  color: black;\n  bottom: 40px;\n  z-index: 3;\n}\n.home-page .home-content section.contact h1.hide {\n  display: none;\n}\n.home-page .home-content section.contact .contact-content {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content {\n  background-color: #3F4448;\n  padding: 9%;\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form {\n  display: block;\n  margin-top: 0em;\n  text-align: right;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formleft {\n  width: 100%;\n  float: left;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formright {\n  width: 100%;\n  float: right;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .formmessage {\n  width: 100%;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 22vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.home-page .home-content section.contact .contact-content .wrapper .content a {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  font-weight: normal;\n  width: 85px;\n  font-size: 20px;\n  padding: 0;\n  background-color: #24292e;\n  border: none;\n  letter-spacing: -1px;\n  margin-top: 15px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.home-page .home-content section .wrapper {\n  background-color: #24292e;\n  width: 70%;\n  margin: 5% auto 10%;\n  border-radius: 2px;\n}\n.home-page .home-content section .wrapper .content {\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #F5F3F5;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n@media (min-width: 1024px) {\n  .home-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .home-page .home-content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n    width: 70%;\n  }\n  .home-page .home-content img {\n    width: 250px;\n  }\n  .home-page .home-content h1 {\n    font-size: 3em;\n  }\n  .home-page .home-content h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .home-page .home-content p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7QUNDWjtBREdBO0VBQ0ksZ0JBQUE7RUFFQSxtQkVyQk87RUZ3QlAsWUFBQTtBQ0hKO0FETVE7RUFNSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNUWjtBRFdZO0VBR0kseUJBQUE7RUFHQSxtQ0FBQTtBQ2JoQjtBRGVnQjtFQUdJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2ZwQjtBRGdCb0I7RUFxQkksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUNuQ3hCO0FEVTRCO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNUaEM7QURVZ0M7RUFDSSxtQkVqRTFCO0FEeURWO0FEcUJ3QjtFQUNJLGNFckVkO0FEa0RkO0FEcUJ3QjtFQUVJLGNFekVkO0VGMEVjLGdCQUFBO0FDcEI1QjtBRHNCd0I7RUFDSSxnQkFBQTtBQ3BCNUI7QURxQ3dCO0VBQ0ksVUFBQTtBQ25DNUI7QUR5Q1k7RUFDSSxrQkFBQTtFQWNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUNyRGhCO0FEcUNnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ25DcEI7QURvQ29CO0VBQ0ksYUFBQTtBQ2xDeEI7QUQ0Q2dCO0VBR0ksV0FBQTtBQzVDcEI7QURtRG9CO0VBQ0ksV0FBQTtBQ2pEeEI7QURtRHdCO0VBRUkseUJFckpqQjtFRnlKaUIsV0FBQTtFQUVBLFdBQUE7QUN0RDVCO0FEMEQ0QjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN4RGhDO0FEeURnQztFQUNJLFdBQUE7QUN2RHBDO0FEd0RvQztFQUNJLFdBQUE7RUFDQSxXQUFBO0FDdER4QztBRHVEd0M7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNyRHhDO0FEd0RvQztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDdER4QztBRHVEd0M7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNyRDVDO0FEeURnQztFQUNRLFdBQUE7QUN2RHhDO0FEd0R3QztFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ3REeEM7QUQwRGdDO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUVBLHlCRTNPeEI7RUY0T3dCLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzNEcEM7QURrRVk7RUFFSSx5QkUxUEo7RUZrUUksVUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUN6RWhCO0FEMkVnQjtFQUVJLGVBQUE7RUFDQSxpQ0FBQTtBQzFFcEI7QUQ4RVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRWxRRTtFRm1RRixpQ0FBQTtBQzVFWjtBRG1GUTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjRS9RRTtFRmdSRixlQUFBO0VBQ0EsaUNBQUE7QUNuRlo7QUQ4RkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUMzRk47RUQ0Rk07SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VDMUZWO0VEMkZVO0lBQ0ksWUFBQTtFQ3pGZDtFRDJGVTtJQUNJLGNBQUE7RUN6RmQ7RUQwRmM7SUFDSSxnQ0FBQTtFQ3hGbEI7RUQyRlU7SUFDSSxVQUFBO0VDekZkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG4vL01PQklMRSBGSVJTVFxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAkYXAtcG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmhvbWUtcGFnZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQ6ICRhcC1kYXJrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmhvbWUtY29udGVudCB7XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDIwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgICAgICAgICAmLmhvbWUge1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA2MiU7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDM4dmg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTB2aCAtIDU2cHgpO1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDUwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zsb3dlci5qcGcpO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNURCRjIsICMwNUYyRjIpO1xyXG4gICAgICAgICAgICAgICAgLndyYXBwZXIxIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGJnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb24tYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA5MHB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5jb250YWN0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgICYuaGlkZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGhlaWdodDogY2FsYygoMTAwdmggLSA1NnB4KS8yKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDVEQkYyLCAjMDVGMkYyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGhlaWdodDogY2FsYygoMTAwdmggLSA1NnB4KS8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogNTB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmllbGR3cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybW1lc3NhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtbWVzc2FnZXN0eWxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGU1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLndyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJG1pZC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzA1REJGMiwgIzA1RjJGMik7XHJcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkbWlkLWJsdWU7XHJcbiAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC8vIHNwYW4ge1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC8vIGF7XHJcbiAgICAgICAgICAgIC8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuaG9tZS1wYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5ob21lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjIlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxODBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbnVsIGkge1xuICBjb2xvcjogIzA1RjJGMjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxudWwgaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvbWUtcGFnZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRjQ0NDg7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5ob21lIHtcbiAgaGVpZ2h0OiBjYWxjKDUwdmggLSA1NnB4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmxvd2VyLmpwZyk7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5ob21lIC53cmFwcGVyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDYlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uaG9tZSAud3JhcHBlcjEgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uaG9tZSAud3JhcHBlcjEgLmNvbnRlbnQgZGl2IC5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNUYyRjI7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2UtaW4tb3V0O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uaG9tZSAud3JhcHBlcjEgLmNvbnRlbnQgZGl2IC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI3MzA0MDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmhvbWUgLndyYXBwZXIxIC5jb250ZW50IGg2IHtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5ob21lIC53cmFwcGVyMSAuY29udGVudCBoMyB7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uaG9tZSAud3JhcHBlcjEgLmNvbnRlbnQgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5ob21lIC53cmFwcGVyMSAuY29udGVudCBpbWcge1xuICB3aWR0aDogODAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm90dG9tOiA0MHB4O1xuICB6LWluZGV4OiAzO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCBoMS5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBwYWRkaW5nOiA5JTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZmllbGR3cmFwIC5mb3JtbGVmdCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24uY29udGFjdCAuY29udGFjdC1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IGZvcm0gLmZvcm1tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLndyYXBwZXIgLmNvbnRlbnQgZm9ybSAuZm9ybW1lc3NhZ2UgLmZvcm1tZXNzYWdlc3R5bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMjJ2aDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAud3JhcHBlciAuY29udGVudCBhIHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHdpZHRoOiA4NXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbiAud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogNSUgYXV0byAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uIC53cmFwcGVyIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICNGNUYzRjU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhvbWUtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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

/***/ "./src/app/components/site/skills/skills.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/site/skills/skills.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.skills-page {\n  background: #3F4448;\n  height: 100%;\n  text-align: center;\n}\n.skills-page .content {\n  padding-top: 123px;\n  text-align: center;\n}\n.skills-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n  padding-bottom: 30px;\n}\n.skills-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.skills-page h2 {\n  font-size: 1.5em;\n  font-weight: 500;\n  color: #F5F3F5;\n}\n.skills-page p {\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n.skills-page .resume-btn {\n  font-family: \"Nunito\", sans-serif;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border-radius: 2px;\n  border: 2px solid #14A1D9;\n  margin: 1em 0;\n}\n.skills-page .resume-btn:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n@media (min-width: 900px) {\n  .skills-page {\n    position: relative;\n  }\n  .skills-page .content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n  }\n  .skills-page h1 {\n    font-size: 3em;\n  }\n  .skills-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .skills-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXNzZXRzL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLHlFQUFBO0FBRVI7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURJSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNFRE07RUZFTixpQ0FBQTtFQU1BLG9CQUFBO0FDUFI7QURFUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUNEWjtBREtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNFYk07QURVZDtBREtJO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNIUjtBREtJO0VBQ0ksaUNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0hSO0FESVE7RUFDSSxlQUFBO0VBQ0EsbUJFMUNMO0FEd0NQO0FEVUE7RUFDSTtJQUVJLGtCQUFBO0VDUk47RURTTTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ1BWO0VEU007SUFDSSxjQUFBO0VDUFY7RURRVTtJQUNJLGdDQUFBO0VDTmQ7RURTTTtJQUNJLFVBQUE7RUNQVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcblxyXG4uc2tpbGxzLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogIzNGNDQ0ODtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTIzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICAgIC5yZXN1bWUtYnRuIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAuZnJvbnQsIC5iYWNrIHtcclxuICAgIC8vICAgICBmbG9hdDogbGVmdDtcclxuICAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIC8vIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC5za2lsbHMtcGFnZSB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLnBuZyk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIyJTtcclxuICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAgICAiLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4uc2tpbGxzLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5za2lsbHMtcGFnZSAuY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNraWxscy1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4uc2tpbGxzLXBhZ2UgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLnNraWxscy1wYWdlIGgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4uc2tpbGxzLXBhZ2UgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uc2tpbGxzLXBhZ2UgLnJlc3VtZS1idG4ge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNEExRDk7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4uc2tpbGxzLXBhZ2UgLnJlc3VtZS1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxNEExRDk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuc2tpbGxzLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2tpbGxzLXBhZ2UgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5za2lsbHMtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLnNraWxscy1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5za2lsbHMtcGFnZSBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/site/skills/skills.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/site/skills/skills.component.ts ***!
  \************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/skills/skills.component.html"),
        styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/site/skills/skills.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SkillsComponent);



/***/ }),

/***/ "./src/app/components/site/work/work.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/site/work/work.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.works-page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding-top: 30px;\n}\n.works-page .container {\n  width: 100%;\n  padding-top: 5%;\n}\n.works-page .container .heading {\n  border-bottom: 1px solid black;\n}\n.works-page .container .heading h1, .works-page .container .heading p {\n  color: black;\n}\n.works-page .container .wrapper {\n  background: linear-gradient(to bottom, #05DBF2, #05F2F2);\n  border-radius: 2px;\n  box-shadow: 0px 0px 115px pink;\n  padding: 6%;\n  width: 100%;\n  margin: 5% auto 10%;\n}\n.works-page .container .wrapper .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.works-page .container .wrapper .content h6 {\n  color: #F5F3F5;\n}\n.works-page .container .wrapper .content h3 {\n  color: #F5F3F5;\n  text-align: left;\n}\n.works-page .container .wrapper .content p {\n  text-align: left;\n}\n.works-page .container .wrapper .content a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #14A1D9;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.works-page .container .wrapper .content a:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n.works-page .container .wrapper .content img {\n  width: 80%;\n}\n.works-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.works-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.works-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .works-page h1 {\n    font-size: 3em;\n  }\n  .works-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .works-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUNSO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBRUksOEJBQUE7QUNEWjtBREVZO0VBRUksWUFBQTtBQ0RoQjtBREtRO0VBSUksd0RBQUE7RUFHQSxrQkFBQTtFQUdBLDhCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1haO0FEaUJZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ2ZoQjtBRGdCZ0I7RUFDSSxjRS9CTjtBRGlCZDtBRGdCZ0I7RUFFSSxjRW5DTjtFRm9DTSxnQkFBQTtBQ2ZwQjtBRGlCZ0I7RUFDSSxnQkFBQTtBQ2ZwQjtBRGlCZ0I7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZnBCO0FEZ0JvQjtFQUNJLGVBQUE7RUFDQSxtQkU3RGpCO0FEK0NQO0FEaUJnQjtFQUNJLFVBQUE7QUNmcEI7QUR1Qkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRXBFTTtBRCtDZDtBRHNCUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUNyQlo7QUR3Qkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUN0QlI7QUQwQkE7RUFJUTtJQUNJLGNBQUE7RUMxQlY7RUQyQlU7SUFDSSxnQ0FBQTtFQ3pCZDtFRDRCTTtJQUNJLFVBQUE7RUMxQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi53b3Jrcy1wYWdlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMzRjQ0NDg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgaDEsIHB7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IzAwMWQzMztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjMDVEQkYyLCRhcC1wb3ApO1xyXG4gICAgICAgICAgICAvLyAjMDAxZDMzXHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCBwaW5rO1xyXG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICRibHVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0byAxMCU7XHJcblxyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIC8vICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaW1nIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy8gfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC53b3Jrcy1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgICAgICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbi53b3Jrcy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAuaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLmhlYWRpbmcgaDEsIC53b3Jrcy1wYWdlIC5jb250YWluZXIgLmhlYWRpbmcgcCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDVEQkYyLCAjMDVGMkYyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4IHBpbms7XG4gIHBhZGRpbmc6IDYlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSBhdXRvIDEwJTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgaDYge1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgaDMge1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC53cmFwcGVyIC5jb250ZW50IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNEExRDk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzE0QTFEOTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi53b3Jrcy1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjVGM0Y1O1xufVxuLndvcmtzLXBhZ2UgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLndvcmtzLXBhZ2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICM5OGEwYWQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC53b3Jrcy1wYWdlIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAud29ya3MtcGFnZSBoMSBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgfVxuICAud29ya3MtcGFnZSBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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
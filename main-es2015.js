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

module.exports = "<!-- flex nav -->\n<!-- flex direction changes -->\n<div class=\"nav_bar\" id=\"nav_bar\"> \n  <header>\n    <!-- logo icon-->\n    <a routerLink=\"/\">\n      <img class=\"logo\" src=\"../../../../assets/images/custom-logo.png\">\n    </a>\n    <!-- <img (click)=\"myfunction()\" [class]=\"hideMobile\" src=\"../../../../assets/svgs/iconfinder_icon-close_211652.svg\" alt=\"exit menu\" id=\"exit\" class=\"exit\"> -->\n\n    <!-- desktop nav -->\n    <!--  -->\n    <nav [class]=\"hideMobile\">\n      <!-- hide-mobile show desktop-->\n      <div class=\"nav_links\">\n        <a (click)=\"myfunction()\" routerLink=\"/\"><span>-</span> Home <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/about\"><span>-</span> About <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/work\"><span>-</span> Work <span>-</span></a>\n        <a (click)=\"myfunction()\" routerLink=\"/contact\"><span>-</span> Contact <span>-</span></a>\n        \n        <!-- <a class=\"resume-btn\">\n          <div class=\"module-border\" style=\"margin: 0 auto; margin-top: 10px;\">\n            <div class=\"module\">\n              Resume\n            </div>\n          </div>\n        </a> -->\n      </div>\n    </nav>\n    <!-- mobile menu: hide desktop -->\n    <img (click)=\"myfunction()\" [ngClass]=\"status ? 'success' : 'danger'\" class=\"menu\" src=\"{{path}}\" alt=\"toggle menu\" id=\"menu\">\n    \n  </header>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/about/about.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n  <div class=\"content\">\n\n    <section class=\"one\">\n      <div class=\"container\">\n        <span>Hello</span> \n      </div>\n    </section>\n\n    <section class=\"two\">\n      <div class=\"container\">\n        <h1>\n          <span>About</span> me \n        </h1><br>\n        <p>\n          Hey everyone, I'm Hiro and you've found my site. <br>\n          This is a collection of projects, documents, social <br>\n          media channels and whatever else I feel like putting on here.<br>\n          Currently, I'm set on finishing this portfolio site by July 31st, <br>\n          so that I can start freelancing while I work on <br>\n          getting my bachelors in computer science. <br>\n        </p><br>\n        <a routerLink=\"/work\">Check out my work</a>\n      </div>\n    </section>\n    \n    \n \n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/contact/contact.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  <div class=\"content\">\n    <div class=\"header\">\n      <div class=\"heading\">\n        <h1>\n          Let's make <br />\n          things <br />\n          <span>happen.</span>\n        </h1>\n        <br />\n      </div>\n      <div class=\"greeting\">\n        <!-- <p>\n            Well hello there, if you have a question for me about something you found on this site or whatever else, please feel free to get in touch.\n          </p> -->\n      </div>\n    </div>\n    <div class=\"form_wrapper\">\n      <div class=\"bluewrapcontact group\">\n        <form action=\"/contact\" method=\"POST\">\n          <div class=\"fieldwrap group\">\n            <div class=\"formleft\">\n              <h3 class=\"fieldlabel\">Your name</h3>\n              <br />\n              <input\n                type=\"text\"\n                name=\"name\"\n                placeholder=\"What's your name?\"\n              /><br />\n            </div>\n\n            <div class=\"formright\">\n              <h3 class=\"fieldlabel\">Your e-mail</h3>\n              <br />\n              <input\n                type=\"text\"\n                name=\"email\"\n                placeholder=\"What's your e-mail address?\"\n              /><br />\n            </div>\n          </div>\n          <div class=\"formmessage\">\n            <h3 class=\"fieldlabel\">Message</h3>\n            <br />\n            <textarea\n              name=\"message\"\n              class=\"formmessagestyle\"\n              placeholder=\"Do you ever get the feeling that there's something going on that we don't know about?\"\n            ></textarea\n            ><br />\n          </div>\n          <button type=\"submit\" class=\"send\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"map\">\n    <!-- <div class=\"form_wrapper\">\n      <div class=\"bluewrapcontact group\"> -->\n        <app-gmap></app-gmap>\n      <!-- </div>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <div class=\"home-content\">\n    <section class=\"one\">\n      <h1><span>Hiro</span> Nakae</h1><br>\n      <p>\n        <span></span>Full Stack Developer / Node / Angular <br>\n      </p><br>\n      \n    </section>\n    \n    <section class=\"two\">\n      <div class=\"wrapper\">\n        <div class=\"content\">\n          asdf  \n        </div>\n      </div>\n    </section>\n    <section class=\"three\">\n      <a class=\"action-btn\" routerLink=\"/contact\">Contact me</a>\n    </section>\n\n  </div>\n</div>"

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

module.exports = "<div class=\"works-page\">\n  <!-- <div *ngFor=\"let card of cards; let id = index+1\"> -->\n  <div class=\"container\">\n    <div class=\"heading\">\n      <h1>Some Things I've <span>Built</span></h1><br>\n    </div>\n    <!-- <h1>These are various projects I've worked on over the years. I hope they may be of some use to you. If you'd like to contribute to any, feel free! I generally use the GPLv3 license, or MIT otherwise.</h1> -->\n    <div class=\"wrapper featured\">\n      <div class=\"content\">\n        <h6>- Featured Project -</h6>\n        <h3>E-Commerce</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br>\n        \n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n        <!-- <img src=\"../../../../assets/images/PsychedelicMilkSmall.jpg\" alt=\"\"> -->\n\n      </div>\n    </div>\n    <div class=\"wrapper\">\n      <div class=\"content\">\n        <h3>Real Estate</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    <div class=\"wrapper\">\n      <div class=\"content\">\n        <h3>Digital Agency</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    <div class=\"wrapper\">\n      <div class=\"content\">\n        <h3>Restaurant</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n        <a href=\"#\">Live Demo</a>\n        <a href=\"#\">View Source</a>\n      </div>\n    </div>\n    \n  </div>\n\n\n  <!-- </div> -->\n</div>"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.about-page {\n  background: #3F4448;\n  height: 200%;\n  text-align: center;\n}\n.about-page .content section {\n  height: calc(100vh - 56px);\n}\n.about-page .content section .container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about-page .content section .container span {\n  font-weight: 600;\n  font-size: 80px;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page .content section.one {\n  background: #05F2F2;\n}\n.about-page .content section.two {\n  background: #273040;\n}\n.about-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.about-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.about-page a {\n  font-family: \"Nunito\", sans-serif;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #14A1D9;\n  border-radius: 2px;\n  margin: 1em 0;\n}\n.about-page a:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n@media (min-width: 900px) {\n  .about-page {\n    position: relative;\n  }\n  .about-page .content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n  }\n  .about-page h1 {\n    font-size: 3em;\n  }\n  .about-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .about-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EseUVBQUE7QUFDUjtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURHUTtFQUNJLDBCQUFBO0FDRFo7QURFWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FoQjtBRENnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDQ3BCO0FERVk7RUFDSSxtQkVaUDtBRFlUO0FERVk7RUFDSSxtQkVwQk47QURvQlY7QURJSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNFakJNO0VGa0JOLGlDQUFBO0FDRlI7QURHUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUNGWjtBREtJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNIUjtBREtJO0VBQ0ksaUNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0hSO0FESVE7RUFDSSxlQUFBO0VBQ0EsbUJFcERMO0FEa0RQO0FET0E7RUFDSTtJQUVJLGtCQUFBO0VDTE47RURNTTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ0pWO0VETU07SUFDSSxjQUFBO0VDSlY7RURLVTtJQUNJLGdDQUFBO0VDSGQ7RURNTTtJQUNJLFVBQUE7RUNKVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG4uYWJvdXQtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMjNweDtcclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtcG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudHdvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRhcC1kYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmFib3V0LXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICAgICAgICAgIFxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDIwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uIC5jb250YWluZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLm9uZSB7XG4gIGJhY2tncm91bmQ6ICMwNUYyRjI7XG59XG4uYWJvdXQtcGFnZSAuY29udGVudCBzZWN0aW9uLnR3byB7XG4gIGJhY2tncm91bmQ6ICMyNzMwNDA7XG59XG4uYWJvdXQtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uYWJvdXQtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uYWJvdXQtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5hYm91dC1wYWdlIGEge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTRBMUQ5O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4uYWJvdXQtcGFnZSBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMTRBMUQ5O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmFib3V0LXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuYWJvdXQtcGFnZSAuY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjIlO1xuICAgIGxlZnQ6IDE4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmFib3V0LXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC5hYm91dC1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5hYm91dC1wYWdlIHAge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iXX0= */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.contact-page {\n  background: #3F4448;\n  height: 100%;\n  font-family: \"Nunito\", sans-serif;\n}\n.contact-page .map {\n  height: 100%;\n  width: 100%;\n}\n.contact-page .content {\n  width: 100%;\n  height: calc(100vh - 56px);\n}\n.contact-page .content .heading {\n  text-align: left;\n  padding-left: 15%;\n}\n.contact-page .content .form_wrapper {\n  width: 100%;\n  margin-top: -50px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact {\n  background-color: #3F4448;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 70%;\n  margin: 10% auto 10%;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form {\n  display: block;\n  margin-top: 0em;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap {\n  width: 100%;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formleft {\n  width: 49%;\n  float: left;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formleft .fieldlabel {\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 11px;\n  letter-spacing: -1px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formright {\n  width: 49%;\n  float: right;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formright .fieldlabel {\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 11px;\n  letter-spacing: -1px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .formmessage {\n  width: 100%;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .formmessage .fieldlabel {\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 11px;\n  letter-spacing: -1px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 22vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form a {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: right;\n  font-weight: normal;\n  text-decoration: underline;\n  font-size: 20px;\n  display: block;\n  padding: 0;\n  background-color: transparent;\n  letter-spacing: -1px;\n  margin: 15px 0;\n  border: none;\n  cursor: pointer;\n}\n.contact-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.contact-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.contact-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .contact-page {\n    position: relative;\n    display: flex;\n  }\n  .contact-page .map {\n    width: 50%;\n  }\n  .contact-page .content {\n    width: 50%;\n  }\n  .contact-page h1 {\n    font-size: 3em;\n  }\n  .contact-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .contact-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksbUJDSE87RURJUCxZQUFBO0VBQ0EsaUNBQUE7QUVESjtBRkdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUVETjtBRklJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FFRk47QUZHTTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUVEVjtBRklNO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FFRlY7QUZHVTtFQUVJLHlCQ3pCSDtFRDBCRyxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUVGZDtBRkdjO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUVEaEI7QUZFZ0I7RUFDSSxXQUFBO0FFQXBCO0FGQ29CO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUVDeEI7QUZBd0I7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUVFMUI7QUZBd0I7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUVFMUI7QUZDc0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBRUMxQjtBRkEwQjtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRUU5QjtBRkEwQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRUU5QjtBRkVrQjtFQUNJLFdBQUE7QUVBdEI7QUZDc0I7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUVDMUI7QUZDc0I7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUVDeEI7QUZFb0I7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FFQXhCO0FGTUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQy9ITTtBQzJIZDtBRktRO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBRUpaO0FGT0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVMUjtBRlNBO0VBQ0k7SUFFSSxrQkFBQTtJQUNBLGFBQUE7RUVQTjtFRlFNO0lBQ0UsVUFBQTtFRU5SO0VGUU07SUFDRSxVQUFBO0VFTlI7RUZZTTtJQUNJLGNBQUE7RUVWVjtFRldVO0lBQ0ksZ0NBQUE7RUVUZDtFRllNO0lBQ0ksVUFBQTtFRVZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG4vLyBNT0JJTEUgRklSU1QsIE1FRElBIFFVRVJZIEZPUiBGVUxMIFNDUkVFTjpGSVhcclxuLmNvbnRhY3QtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubWFwe1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtX3dyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICAgLmJsdWV3cmFwY29udGFjdHtcclxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG4gICAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgICAgIC5maWVsZHdyYXB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5mb3JtbWVzc2FnZXtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpZWxkbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5mb3JtbWVzc2FnZXN0eWxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjJ2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBlNWVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAuY29udGFjdC1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAubWFwe1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvLyB0b3A6IDIyJTtcclxuICAgICAgICAgICAgLy8gbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwXCIpO1xuLmNvbnRhY3QtcGFnZSB7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uY29udGFjdC1wYWdlIC5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE1JTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDQ0ODtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XG4gIHBhZGRpbmc6IDYlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDEwJSBhdXRvIDEwJTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSAuZmllbGR3cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IHtcbiAgd2lkdGg6IDQ5JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IC5maWVsZGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSAuZmllbGR3cmFwIC5mb3JtbGVmdCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQge1xuICB3aWR0aDogNDklO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCAuZmllbGRsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5mb3JtbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSAuZm9ybW1lc3NhZ2UgLmZpZWxkbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5mb3JtbWVzc2FnZSAuZm9ybW1lc3NhZ2VzdHlsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4IDE4cHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4taGVpZ2h0OiAyMnZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSBhIHtcbiAgY29sb3I6ICMwMGU1ZWE7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3QtcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi5jb250YWN0LXBhZ2UgaDEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNvbnRhY3QtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhY3QtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAubWFwIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSBoMSBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgfVxuICAuY29udGFjdC1wYWdlIHAge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn0iXX0= */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.home-page {\n  height: calc(100vh - 56px);\n  text-align: center;\n  background: #3F4448;\n}\n.home-page .home-content {\n  display: block;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.home-page .home-content section {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.home-page .home-content section.one {\n  background: #3F4448;\n}\n.home-page .home-content section.two {\n  background: #24292e;\n}\n.home-page .home-content section.three {\n  background: #273040;\n}\n.home-page .home-content section .wrapper {\n  background-color: #3F4448;\n  border-radius: 2px;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 70%;\n  margin: 5% auto 10%;\n  border: 2px solid #3F4448;\n}\n.home-page .home-content section .wrapper:hover {\n  border: 2px solid #05F2F2;\n}\n.home-page .home-content section .wrapper .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.home-page .home-content p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page .home-content p a {\n  text-decoration: none;\n  color: #05F2F2;\n}\n.home-page .home-content .action-btn {\n  display: inline-block;\n  text-decoration: none;\n  font-family: \"Nunito\", sans-serif;\n  color: white;\n  font-weight: 700;\n  border: 2px solid #14A1D9;\n  padding: 0.5em 2em;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.home-page .home-content .action-btn:hover {\n  background: #14A1D9;\n}\n.home-page .home-content .module-border {\n  max-width: 250px;\n  padding: 1rem;\n  position: relative;\n  background: linear-gradient(to right, #14A1D9, #F2359D);\n  padding: 3px;\n}\n.home-page .home-content .module-border .module {\n  background: #3F4448;\n  color: white;\n  padding: 2rem;\n}\n.home-page .home-content .module-border .module:hover {\n  background: none;\n}\n@media (min-width: 1024px) {\n  .home-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .home-page .home-content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n    width: 70%;\n  }\n  .home-page .home-content img {\n    width: 250px;\n  }\n  .home-page .home-content h1 {\n    font-size: 3em;\n  }\n  .home-page .home-content h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .home-page .home-content p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ0xPO0FDSVg7QUZHSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRURSO0FGR1E7RUFFSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBRUZaO0FGSVk7RUFDSSxtQkN2Qkw7QUNxQlg7QUZJWTtFQUNJLG1CQzNCSjtBQ3lCWjtBRklZO0VBQ0ksbUJDekJOO0FDdUJWO0FGSVk7RUFFSSx5QkNqQ0w7RURxQ0ssa0JBQUE7RUFFQSxtQ0FBQTtFQUVBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtBRVRoQjtBRlVnQjtFQUNJLHlCQUFBO0FFUnBCO0FGVWdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBRVJwQjtBRllRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0M3Q0U7RUQ4Q0YsaUNBQUE7QUVWWjtBRldZO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBRVZoQjtBRmFRO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUVaWjtBRmFZO0VBQ0kscUJBQUE7RUFDQSxjQ25FUDtBQ3dEVDtBRmdCUTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRWZaO0FGaUJZO0VBQ0ksbUJDekZUO0FDMEVQO0FGb0JRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7QUVsQlo7QUZtQlk7RUFDSSxtQkMzR0w7RUQ0R0ssWUFBQTtFQUNBLGFBQUE7QUVqQmhCO0FGa0JnQjtFQUNJLGdCQUFBO0FFaEJwQjtBRnNCQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFRW5CTjtFRm9CTTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUVsQlY7RUZtQlU7SUFDSSxZQUFBO0VFakJkO0VGbUJVO0lBQ0ksY0FBQTtFRWpCZDtFRmtCYztJQUNJLGdDQUFBO0VFaEJsQjtFRm1CVTtJQUNJLFVBQUE7RUVqQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi8vTU9CSUxFIEZJUlNUXHJcbi5ob21lLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAkYXAtZGFyaztcclxuICAgIC5ob21lLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgICAgICAgJi5vbmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudHdvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRuYXYtY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50aHJlZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYXAtZGFyaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0byAxMCU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGFwLXBvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGFwLXBvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAuYWN0aW9uLWJ0bntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCA5MHB4ICMwMDAwMDBhNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBncmFkaWVudCBib3JkZXJcclxuICAgICAgICAubW9kdWxlLWJvcmRlcntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRibHVlLCAkcGluayk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgLm1vZHVsZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS8vZ3JhZGllbnQgYm9yZGVyXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmhvbWUtcGFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuaG9tZS1jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIyJTtcclxuICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4uaG9tZS1wYWdlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uLm9uZSB7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgc2VjdGlvbi50d28ge1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24udGhyZWUge1xuICBiYWNrZ3JvdW5kOiAjMjczMDQwO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHNlY3Rpb24gLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xuICBwYWRkaW5nOiA2JTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiA1JSBhdXRvIDEwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzNGNDQ0ODtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uIC53cmFwcGVyOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzA1RjJGMjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBzZWN0aW9uIC53cmFwcGVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGgxIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDVGMkYyO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IC5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNEExRDk7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IC5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE0QTFEOTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCAubW9kdWxlLWJvcmRlciB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTRBMUQ5LCAjRjIzNTlEKTtcbiAgcGFkZGluZzogM3B4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IC5tb2R1bGUtYm9yZGVyIC5tb2R1bGUge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgLm1vZHVsZS1ib3JkZXIgLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhvbWUtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59Il19 */"

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
    // object = {
    //   Ohio : {
    //     Columbus : [
    //       'www.google.com'
    //     ]
    //   }
    // };
    // finishedObject = {
    //   Ohio : {
    //     Columbus : [
    //       'www.google.com'
    //     ],
    //     Cleveland : [
    //       'www.abc.com'
    //     ]
    //   }
    // };
    // // anArray: [];
    // Cleveland = [
    //   'www.lol.com'
    // ]
    constructor() { }
    ngOnInit() {
        // this.object['Ohio']['Cleveland'] = this.Cleveland;
        // console.log(this.object);
        // console.log(this.finishedObject);
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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.works-page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding-top: 30px;\n}\n.works-page .container {\n  width: 100%;\n  padding-top: 5%;\n}\n.works-page .container .heading h1, .works-page .container .heading p {\n  color: black;\n}\n.works-page .container .wrapper {\n  background-color: #3F4448;\n  border-radius: 2px;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 100%;\n  margin: 5% auto 10%;\n  border: 2px solid #3F4448;\n}\n.works-page .container .wrapper:hover {\n  border: 2px solid #05F2F2;\n}\n.works-page .container .wrapper .content {\n  display: block;\n  margin-top: 0em;\n  font-family: \"Nunito\", sans-serif;\n}\n.works-page .container .wrapper .content h6 {\n  color: #F5F3F5;\n}\n.works-page .container .wrapper .content h3 {\n  color: #F5F3F5;\n  text-align: left;\n}\n.works-page .container .wrapper .content p {\n  text-align: left;\n}\n.works-page .container .wrapper .content a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #14A1D9;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.works-page .container .wrapper .content a:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n.works-page .container .wrapper .content img {\n  width: 80%;\n}\n.works-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.works-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.works-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .works-page h1 {\n    font-size: 3em;\n  }\n  .works-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .works-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUNSO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEUjtBREdZO0VBQ0ksWUFBQTtBQ0RoQjtBREtRO0VBRUkseUJFbkJEO0VGdUJDLGtCQUFBO0VBRUEsbUNBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7QUNWWjtBRFdZO0VBQ0kseUJBQUE7QUNUaEI7QURXWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNUaEI7QURVZ0I7RUFDSSxjRTFCTjtBRGtCZDtBRFVnQjtFQUVJLGNFOUJOO0VGK0JNLGdCQUFBO0FDVHBCO0FEV2dCO0VBQ0ksZ0JBQUE7QUNUcEI7QURXZ0I7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVHBCO0FEVW9CO0VBQ0ksZUFBQTtFQUNBLG1CRXhEakI7QURnRFA7QURXZ0I7RUFDSSxVQUFBO0FDVHBCO0FEaUJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0UvRE07QURnRGQ7QURnQlE7RUFDSSxnQ0FBQTtFQUVBLCtCQUFBO0FDZlo7QURrQkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNoQlI7QURvQkE7RUFJUTtJQUNJLGNBQUE7RUNwQlY7RURxQlU7SUFDSSxnQ0FBQTtFQ25CZDtFRHNCTTtJQUNJLFVBQUE7RUNwQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjMwMCw0MDAsNzAwJyk7XHJcbi53b3Jrcy1wYWdlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMzRjQ0NDg7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgICBoMSwgcHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICRibHVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0byAxMCU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaW1nIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy8gfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC53b3Jrcy1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgICAgICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMFwiKTtcbi53b3Jrcy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAuaGVhZGluZyBoMSwgLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAuaGVhZGluZyBwIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XG4gIHBhZGRpbmc6IDYlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JSBhdXRvIDEwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzNGNDQ0ODtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXI6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDVGMkYyO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBoNiB7XG4gIGNvbG9yOiAjRjVGM0Y1O1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBoMyB7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzE0QTFEOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMTRBMUQ5O1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBpbWcge1xuICB3aWR0aDogODAlO1xufVxuLndvcmtzLXBhZ2UgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4ud29ya3MtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ud29ya3MtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLndvcmtzLXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC53b3Jrcy1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC53b3Jrcy1wYWdlIHAge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iXX0= */"

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
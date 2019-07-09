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

module.exports = "<div class=\"wrapper\">\n  <app-sidemenu></app-sidemenu>\n  <div class=\"content\">\n    <app-content>\n        <router-outlet></router-outlet>\n    </app-content>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/api/gmap/gmap.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/api/gmap/gmap.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map\n  [latitude]='latitude'\n  [longitude]='longitude'\n  [mapTypeId]='mapType'\n  [zoom]=\"6\"\n  >\n  <agm-marker\n        [latitude]=\"latitude\"\n        [longitude]=\"longitude\"\n  >\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/content/content.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/content/content.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/sidemenu/sidemenu.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/sidemenu/sidemenu.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nav_bar\">\n  <a routerLink=\"/\" class=\"logo\"><img src=\"../../../../assets/images/favicon-3.png\" alt=\"\"></a>\n  <nav>\n    <!-- <a href=\"\"><i>::before</i>::after</a> -->\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i></a>\n    <a routerLink=\"/about\"><i class=\"fa fa-user\"></i></a>\n    <a routerLink=\"/skills\"><i class=\"fa fa-code\"></i></a>\n    <a routerLink=\"/work\"><i class=\"fa fa-folder-open\"></i></a>\n    <a routerLink=\"/contact\"><i class=\"fa fa-envelope\"></i></a>\n  </nav>\n  <ul>\n      <li><a href=\"https://twitter.com/Hiro_Nakae\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n      <li><a href=\"https://www.linkedin.com/in/hironakae/\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n      <li><a href=\"https://github.com/hnakae\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>\n      <li><a href=\"https://medium.com/@nakae27\"><i class=\"fa fa-medium\" aria-hidden=\"true\"></i></a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/about/about.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/about/about.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\n\n  <div class=\"content\">\n    <h1>\n      <span>About</span> me \n    </h1><br>\n    <p>\n      Hey everyone, I'm Hiro and you've found my site. <br>\n      This is a collection of projects, documents, social <br>\n      media channels and whatever else I feel like putting on here.\n    </p><br>\n    <a routerLink=\"/work\">Check out my work</a>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/contact/contact.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/contact/contact.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\n  <div class=\"content\">\n    <div class=\"header\">\n      <div class=\"heading\">\n          <h1>Let's make <br>\n              things <br>\n        <span>happen.</span></h1><br>\n        </div>\n        <div class=\"greeting\">\n          <!-- <p>\n            Well hello there, if you have a question for me about something you found on this site or whatever else, please feel free to get in touch.\n          </p> -->\n        </div>\n    </div>\n    <div class=\"form_wrapper\">\n      <div class=\"bluewrapcontact group\">\n\n        <form action=\"/contact\" method=\"POST\">\n          <div class=\"fieldwrap group\">\n\n            <div class=\"formleft\">\n              <h3 class=\"fieldlabel\">Your name</h3><br>\n              <input type=\"text\" name=\"name\" placeholder=\"What's your name?\"><br>\n            </div>\n\n            <div class=\"formright\">\n              <h3 class=\"fieldlabel\">Your e-mail</h3><br>\n              <input type=\"text\" name=\"email\" placeholder=\"What's your e-mail address?\"><br>\n            </div>\n\n          </div>\n          <div class=\"formmessage\">\n\n            <h3 class=\"fieldlabel\">Message</h3><br>\n            <textarea name=\"message\" class=\"formmessagestyle\" placeholder=\"Do you ever get the feeling that there's something going on that we don't know about?\"></textarea><br>\n\n          </div>\n          <button type=\"submit\" class=\"send\">Submit</button>\n        </form>\n\n      </div>\n    </div>\n  </div>\n    <div class=\"map\">\n  <div class=\"form_wrapper\">\n    <div class=\"bluewrapcontact group\">\n\n    <app-gmap></app-gmap>\n  </div>\n  </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/home/home.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-page\">\n  <div class=\"home-content\">\n    \n\n    <!-- <div class=\"wrapper featured\">\n        <div class=\"content\"> -->\n\n            <h1><span>Hiro</span> Nakae</h1><br>\n            <p>\n              Full Stack Developer / Node / Angular <br>\n            </p><br>\n            <a class=\"action-btn\" routerLink=\"/contact\">Contact me</a>\n            <i class=\"fab fa-angular\"></i>\n            <!-- <div class=\"module-border\">\n              <div class=\"module\">\n                hello\n              </div>\n            </div> -->\n        <!-- </div>\n      </div> -->\n    <!-- <a class=\"works-btn\" routerLink=\"/work\">See my works</a> -->\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/skills/skills.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/skills/skills.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-page\">\n  <div class=\"content\">\n    <div class=\"container\">\n        <h1>\n            <span>Skills</span> page\n          </h1>\n          \n      \n          <p>The main area of my expertise is front end development.\n            HTML, CSS, JS (TypeScript), small to medium web apps with Angular2+.\n            interactive layouts, animations, and features.\n            I have full-stack developer experience with back end languages,\n            api development, and various databases.\n      \n            Visit my <a href=\"\">LinkedIn</a>  profile for more details or just <a href=\"\">contact</a>  me.\n          </p><br>\n      \n          <a href=\"\" class=\"resume-btn\">Download CV</a><br>\n          <a href=\"\" class=\"resume-btn\">Download Resume</a>\n      \n    </div>\n    \n\n    \n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/site/work/work.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/site/work/work.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"works-page\">\n    <!-- <div *ngFor=\"let card of cards; let id = index+1\"> -->\n        <!-- <h1>heading</h1> -->\n        <div class=\"container\">\n          <!-- <h1>These are various projects I've worked on over the years. I hope they may be of some use to you. If you'd like to contribute to any, feel free! I generally use the GPLv3 license, or MIT otherwise.</h1> -->\n          <div class=\"wrapper featured\">\n            <div class=\"content\">\n              <h3>Project Name</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br>\n              \n              <a href=\"#\">Live Demo</a>\n              <a href=\"#\">View Source</a>\n            </div>\n          </div>\n          <div class=\"wrapper\">\n            <div class=\"content\">\n              <h3>Project Name</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n              <a href=\"#\">Live Demo</a>\n              <a href=\"#\">View Source</a>\n            </div>\n          </div>\n          <div class=\"wrapper\">\n            <div class=\"content\">\n              <h3>Project Name</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n              <a href=\"#\">Live Demo</a>\n              <a href=\"#\">View Source</a>\n            </div>\n          </div>\n          <div class=\"wrapper\">\n            <div class=\"content\">\n              <h3>Project Name</h3>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>\n              <a href=\"#\">Live Demo</a>\n              <a href=\"#\">View Source</a>\n            </div>\n          </div>\n          \n        </div>\n\n\n    <!-- </div> -->\n</div>"

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
/* harmony import */ var _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/site/skills/skills.component */ "./src/app/components/site/skills/skills.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");








var routes = [
    { path: '', component: _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'skills', component: _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"] },
    { path: 'work', component: _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"] },
    { path: 'contact', component: _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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

module.exports = ".wrapper {\n  display: grid;\n  grid-template-areas: \"nav\" \"content\";\n  grid-template-rows: auto 1fr;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  overflow: auto;\n}\n\n@media (min-width: 900px) {\n  .wrapper {\n    grid-template-areas: \"nav content\";\n    grid-template-columns: auto 1fr;\n    height: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG9DQUNJO0VBRUosNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBRElBO0VBQ0k7SUFDSSxrQ0FDSTtJQUVKLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuLndyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcIm5hdlwiXHJcbiAgICAgICAgXCJjb250ZW50XCI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAgICAgXCJuYXYgY29udGVudFwiO1xyXG5cclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2XCIgXCJjb250ZW50XCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAud3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgY29udGVudFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

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
/* harmony import */ var _components_layout_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/sidemenu/sidemenu.component */ "./src/app/components/layout/sidemenu/sidemenu.component.ts");
/* harmony import */ var _components_site_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/site/home/home.component */ "./src/app/components/site/home/home.component.ts");
/* harmony import */ var _components_site_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/site/about/about.component */ "./src/app/components/site/about/about.component.ts");
/* harmony import */ var _components_site_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/site/skills/skills.component */ "./src/app/components/site/skills/skills.component.ts");
/* harmony import */ var _components_site_work_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/site/work/work.component */ "./src/app/components/site/work/work.component.ts");
/* harmony import */ var _components_site_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/site/contact/contact.component */ "./src/app/components/site/contact/contact.component.ts");
/* harmony import */ var _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout/content/content.component */ "./src/app/components/layout/content/content.component.ts");
/* harmony import */ var _components_api_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/api/gmap/gmap.component */ "./src/app/components/api/gmap/gmap.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_layout_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_8__["SidemenuComponent"],
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

module.exports = ".content {\n  grid-area: content;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5jb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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

/***/ "./src/app/components/layout/sidemenu/sidemenu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/layout/sidemenu/sidemenu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  position: relative;\n  grid-area: nav;\n  display: flex;\n  align-items: center;\n  background: #24292e;\n  padding: 3.14159px;\n  border: 1px solid #24292e;\n}\ndiv img {\n  max-height: 40px;\n  border-radius: 50%;\n}\ndiv a, div nav, div ul {\n  display: flex;\n  color: #14A1D9;\n  text-decoration: none;\n  padding: 5px;\n}\ndiv nav {\n  position: absolute;\n  left: 55px;\n}\ndiv nav a {\n  margin-right: 10px;\n}\ndiv nav a i:hover {\n  color: #05DBF2;\n}\ndiv ul {\n  display: flex;\n  position: absolute;\n  right: 5px;\n}\ndiv ul li a i:hover {\n  color: #05DBF2;\n}\n@media (min-width: 900px) {\n  div {\n    justify-content: space-between;\n    position: relative;\n    display: block;\n    height: 100vh;\n    width: 60px;\n  }\n  div a, div nav, div ul {\n    display: grid;\n  }\n  div nav {\n    position: absolute;\n    top: 30%;\n    left: 11px;\n    height: 35vh;\n    justify-content: space-between;\n  }\n  div ul {\n    position: absolute;\n    bottom: 15px;\n    left: 11px;\n    height: 20vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJDTlE7RURPUixrQkFBQTtFQUNBLHlCQUFBO0FFQUo7QUZDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUVDUjtBRkNJO0VBQ0ksYUFBQTtFQUNBLGNDUkQ7RURVQyxxQkFBQTtFQUNBLFlBQUE7QUVBUjtBRkVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FFQVI7QUZDUTtFQUNJLGtCQUFBO0FFQ1o7QUZDZ0I7RUFDSSxjQ2xCUDtBQ21CYjtBRk1JO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRUpSO0FGUW9CO0VBQ0ksY0NqQ1g7QUMyQmI7QUZpQkE7RUFDSTtJQUNJLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUVkTjtFRmVNO0lBQ0ksYUFBQTtFRWJWO0VGZU07SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLDhCQUFBO0VFYlY7RUZrQk07SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFRWhCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbmRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBncmlkLWFyZWE6IG5hdjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJG5hdi1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDMuMTQxNTlweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRuYXYtY29sb3I7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgYSAsIG5hdiwgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIC8vIG9wYWNpdHk6IC44O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1NXB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBhLCBuYXYsIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDMwJTtcclxuICAgICAgICAgICAgbGVmdDogMTFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC8vIGk6OmFmdGVyIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjB2aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iLCJkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xuICBwYWRkaW5nOiAzLjE0MTU5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNDI5MmU7XG59XG5kaXYgaW1nIHtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuZGl2IGEsIGRpdiBuYXYsIGRpdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMTRBMUQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmRpdiBuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDU1cHg7XG59XG5kaXYgbmF2IGEge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5kaXYgbmF2IGEgaTpob3ZlciB7XG4gIGNvbG9yOiAjMDVEQkYyO1xufVxuZGl2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuZGl2IHVsIGxpIGEgaTpob3ZlciB7XG4gIGNvbG9yOiAjMDVEQkYyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgZGl2IGEsIGRpdiBuYXYsIGRpdiB1bCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuICBkaXYgbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogMTFweDtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIGRpdiB1bCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBsZWZ0OiAxMXB4O1xuICAgIGhlaWdodDogMjB2aDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/sidemenu/sidemenu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/layout/sidemenu/sidemenu.component.ts ***!
  \******************************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! raw-loader!./sidemenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/components/layout/sidemenu/sidemenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/site/about/about.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/site/about/about.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-page {\n  background: #3F4448;\n  height: 100%;\n  text-align: center;\n}\n.about-page .content {\n  padding-top: 123px;\n}\n.about-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.about-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.about-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n.about-page a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #14A1D9;\n  border-radius: 2px;\n  margin: 1em 0;\n}\n.about-page a:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n@media (min-width: 900px) {\n  .about-page {\n    position: relative;\n  }\n  .about-page .content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n  }\n  .about-page h1 {\n    font-size: 3em;\n  }\n  .about-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .about-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL21udC9jL3dvcmsvcG9ydGZvbGlvL3NyYy9hc3NldHMvc2Nzcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRUlNO0FESGQ7QURBUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUNDWjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxtQkU1Qkw7QUQ2QlA7QURJQTtFQUNJO0lBRUksa0JBQUE7RUNGTjtFREdNO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDRFY7RURHTTtJQUNJLGNBQUE7RUNEVjtFREVVO0lBQ0ksZ0NBQUE7RUNBZDtFREdNO0lBQ0ksVUFBQTtFQ0RWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcbi5hYm91dC1wYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzRjQ0NDg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEyM3B4O1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmFib3V0LXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyMiU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE4MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICAgICAgICAgIFxyXG5cclxuIiwiLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1wYWdlIC5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEyM3B4O1xufVxuLmFib3V0LXBhZ2UgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4uYWJvdXQtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uYWJvdXQtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmFib3V0LXBhZ2UgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzE0QTFEOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW46IDFlbSAwO1xufVxuLmFib3V0LXBhZ2UgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzE0QTFEOTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5hYm91dC1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmFib3V0LXBhZ2UgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5hYm91dC1wYWdlIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuYWJvdXQtcGFnZSBoMSBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA1REJGMjtcbiAgfVxuICAuYWJvdXQtcGFnZSBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.contact-page {\n  background: #3F4448;\n  height: 100%;\n}\n.contact-page .map {\n  margin-left: 15%;\n  margin-top: 15%;\n  height: 500px;\n  width: 50%;\n}\n.contact-page .map .form_wrapper {\n  height: 100%;\n  width: 100%;\n  margin-top: -50px;\n}\n.contact-page .map .form_wrapper .bluewrapcontact {\n  background-color: #3F4448;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 70%;\n  height: 100%;\n  margin: 10% auto 10%;\n}\n.contact-page .content {\n  width: 100%;\n  padding-top: 30px;\n}\n.contact-page .content .heading {\n  text-align: left;\n  padding-left: 15%;\n}\n.contact-page .content .form_wrapper {\n  width: 100%;\n  margin-top: -50px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact {\n  background-color: #3F4448;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 70%;\n  margin: 10% auto 10%;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form {\n  display: block;\n  margin-top: 0em;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap {\n  width: 100%;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formleft {\n  width: 49%;\n  float: left;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formleft .fieldlabel {\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 11px;\n  letter-spacing: -1px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formleft input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formright {\n  width: 49%;\n  float: right;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formright .fieldlabel {\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 11px;\n  letter-spacing: -1px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .fieldwrap .formright input {\n  text-align: left;\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background-color: #0e131c;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .formmessage {\n  width: 100%;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .formmessage .fieldlabel {\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  text-align: left;\n  font-weight: normal;\n  font-size: 18px;\n  margin-top: 11px;\n  letter-spacing: -1px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form .formmessage .formmessagestyle {\n  width: 100%;\n  padding: 18px 18px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #0e131c;\n  box-sizing: border-box;\n  min-height: 22vh;\n  border: none;\n  color: #fff;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: normal;\n  font-size: 16px;\n}\n.contact-page .content .form_wrapper .bluewrapcontact form a {\n  color: #00e5ea;\n  font-family: \"Nunito\", sans-serif;\n  text-align: right;\n  font-weight: normal;\n  text-decoration: underline;\n  font-size: 20px;\n  display: block;\n  padding: 0;\n  background-color: transparent;\n  letter-spacing: -1px;\n  margin: 15px 0;\n  border: none;\n  cursor: pointer;\n}\n.contact-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.contact-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.contact-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .contact-page {\n    position: relative;\n    display: flex;\n  }\n  .contact-page .map {\n    width: 50%;\n  }\n  .contact-page .content {\n    width: 50%;\n  }\n  .contact-page h1 {\n    font-size: 3em;\n  }\n  .contact-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .contact-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBQ0ksbUJDSE87RURJUCxZQUFBO0FFREo7QUZHSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FFRE47QUZFTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUVBUjtBRkNRO0VBRUkseUJDakJEO0VEa0JDLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUVBWjtBRk1JO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FFSk47QUZLTTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUVIVjtBRktNO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FFSFY7QUZJVTtFQUVJLHlCQ3hDSDtFRHlDRyxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUVIZDtBRkljO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUVGaEI7QUZHZ0I7RUFDSSxXQUFBO0FFRHBCO0FGRW9CO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUVBeEI7QUZDd0I7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUVDMUI7QUZDd0I7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUVDMUI7QUZFc0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBRUExQjtBRkMwQjtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRUM5QjtBRkMwQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRUM5QjtBRkdrQjtFQUNJLFdBQUE7QUVEdEI7QUZFc0I7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUVBMUI7QUZFc0I7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUVBeEI7QUZHb0I7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FFRHhCO0FGT0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzlJTTtBQ3lJZDtBRk1RO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBRUxaO0FGUUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUVOUjtBRlVBO0VBQ0k7SUFFSSxrQkFBQTtJQUNBLGFBQUE7RUVSTjtFRlNNO0lBQ0UsVUFBQTtFRVBSO0VGU007SUFDRSxVQUFBO0VFUFI7RUZhTTtJQUNJLGNBQUE7RUVYVjtFRllVO0lBQ0ksZ0NBQUE7RUVWZDtFRmFNO0lBQ0ksVUFBQTtFRVhWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzozMDAsNDAwLDcwMCcpO1xyXG4vLyBNT0JJTEUgRklSU1QsIE1FRElBIFFVRVJZIEZPUiBGVUxMIFNDUkVFTjpGSVhcclxuLmNvbnRhY3QtcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubWFwe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIC5mb3JtX3dyYXBwZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIC5ibHVld3JhcGNvbnRhY3R7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm1fd3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgICAuYmx1ZXdyYXBjb250YWN0e1xyXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyNzMwNDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XHJcbiAgICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgICAgICAgICAgICAgLmZpZWxkd3JhcHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybWxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGRsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm1yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZmllbGRsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmllbGRsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZvcm1tZXNzYWdlc3R5bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxMzFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMnZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMGU1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICAgICAgY29sb3I6ICM5OGEwYWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG5cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC5jb250YWN0LXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5tYXB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vIHRvcDogMjIlO1xyXG4gICAgICAgICAgICAvLyBsZWZ0OiAxODBweDtcclxuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4uY29udGFjdC1wYWdlIHtcbiAgYmFja2dyb3VuZDogIzNGNDQ0ODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhY3QtcGFnZSAubWFwIHtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhY3QtcGFnZSAubWFwIC5mb3JtX3dyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbi5jb250YWN0LXBhZ2UgLm1hcCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcbiAgcGFkZGluZzogNiU7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxMCUgYXV0byAxMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExNXB4ICMwMDAwMDBhNjtcbiAgcGFkZGluZzogNiU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMTAlIGF1dG8gMTAlO1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwZW07XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5maWVsZHdyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQge1xuICB3aWR0aDogNDklO1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0gLmZpZWxkd3JhcCAuZm9ybWxlZnQgLmZpZWxkbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5maWVsZHdyYXAgLmZvcm1sZWZ0IGlucHV0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5maWVsZHdyYXAgLmZvcm1yaWdodCB7XG4gIHdpZHRoOiA0OSU7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0gLmZpZWxkd3JhcCAuZm9ybXJpZ2h0IC5maWVsZGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuLmNvbnRhY3QtcGFnZSAuY29udGVudCAuZm9ybV93cmFwcGVyIC5ibHVld3JhcGNvbnRhY3QgZm9ybSAuZmllbGR3cmFwIC5mb3JtcmlnaHQgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweCAxOHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTMxYztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0gLmZvcm1tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIC5mb3JtbWVzc2FnZSAuZmllbGRsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbi5jb250YWN0LXBhZ2UgLmNvbnRlbnQgLmZvcm1fd3JhcHBlciAuYmx1ZXdyYXBjb250YWN0IGZvcm0gLmZvcm1tZXNzYWdlIC5mb3JtbWVzc2FnZXN0eWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTEzMWM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDIydmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1wYWdlIC5jb250ZW50IC5mb3JtX3dyYXBwZXIgLmJsdWV3cmFwY29udGFjdCBmb3JtIGEge1xuICBjb2xvcjogIzAwZTVlYTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFjdC1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjVGM0Y1O1xufVxuLmNvbnRhY3QtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uY29udGFjdC1wYWdlIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuY29udGFjdC1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuY29udGFjdC1wYWdlIC5tYXAge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbnRhY3QtcGFnZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29udGFjdC1wYWdlIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuY29udGFjdC1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5jb250YWN0LXBhZ2UgcCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufSJdfQ== */"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:300,400,700\");\n.home-page {\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  background: #3F4448;\n}\n.home-page .home-content {\n  padding-top: 123px;\n}\n.home-page .home-content .module-border {\n  max-width: 250px;\n  padding: 1rem;\n  position: relative;\n  background: linear-gradient(to right, #14A1D9, #F2359D);\n  padding: 3px;\n}\n.home-page .home-content .module-border .module {\n  background: #3F4448;\n  color: white;\n  padding: 2rem;\n}\n.home-page .home-content .wrapper {\n  width: 80%;\n  background-color: #3F4448;\n  border-radius: 2px;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  margin: 5% auto 10%;\n}\n.home-page .home-content .wrapper .content {\n  display: block;\n  margin-top: 0em;\n}\n.home-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  font-family: \"Nunito\", sans-serif;\n}\n.home-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.home-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n.home-page p a {\n  text-decoration: none;\n  color: #05F2F2;\n}\n.home-page .action-btn, .home-page .works-btn {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  border: 2px solid #14A1D9;\n  padding: 0.5em 2em;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.home-page .action-btn:hover, .home-page .works-btn:hover {\n  background: #14A1D9;\n}\n@media (min-width: 900px) {\n  .home-page {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n  .home-page .home-content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n    width: 70%;\n  }\n  .home-page img {\n    width: 250px;\n  }\n  .home-page h1 {\n    font-size: 3em;\n  }\n  .home-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .home-page p {\n    width: 60%;\n  }\n  .home-page footer ul {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 2em 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSx5RUFBQTtBQUVSO0VBcUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkMxQ087QUNLWDtBRkZJO0VBQ0ksa0JBQUE7QUVJUjtBRkhRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7QUVLWjtBRkpZO0VBQ0ksbUJDWkw7RURhSyxZQUFBO0VBQ0EsYUFBQTtBRU1oQjtBRkhRO0VBQ0ksVUFBQTtFQUdBLHlCQ3JCRDtFRHVCQyxrQkFBQTtFQUVBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FFQ1o7QUZLWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FFSGhCO0FGaUJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0N0Q007RUR1Q04saUNBQUE7QUVmUjtBRmdCUTtFQUNJLGdDQUFBO0VBRUEsK0JBQUE7QUVmWjtBRmtCSTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRWpCUjtBRmtCUTtFQUNJLHFCQUFBO0VBQ0EsY0MzREg7QUMyQ1Q7QUZtQkk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FFbEJSO0FGb0JRO0VBQ0ksbUJDOUVMO0FDNERQO0FGdUJBO0VBQ0k7SUFFSSxrQkFBQTtJQVNBLFlBQUE7SUFDQSxXQUFBO0VFN0JOO0VGb0JNO0lBQ0ksa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFRWxCVjtFRnVCTTtJQUNJLFlBQUE7RUVyQlY7RUZ1Qk07SUFDSSxjQUFBO0VFckJWO0VGc0JVO0lBQ0ksZ0NBQUE7RUVwQmQ7RUZ1Qk07SUFDSSxVQUFBO0VFckJWO0VGdUJNO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFRXJCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDAnKTtcclxuLy9NT0JJTEUgRklSU1RcclxuLmhvbWUtcGFnZSB7XHJcbiAgICAuaG9tZS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTIzcHg7XHJcbiAgICAgICAgLm1vZHVsZS1ib3JkZXJ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkYmx1ZSwgJHBpbmspO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIC5tb2R1bGV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI3MzA0MDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUlIGF1dG8gMTAlO1xyXG5cclxuICAgICAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgJGFwLWJsdWU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAkYXAtcG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwZW07IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUyLnBuZyk7XHJcbiAgICAvLyBpbWcge1xyXG4gICAgLy8gICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAvLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbGlnaHQtYmx1ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgLy8gZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjOThhMGFkO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYXAtcG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3Rpb24tYnRuLCAud29ya3MtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDkwcHggIzAwMDAwMGE2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC5ob21lLXBhZ2Uge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuaG9tZS1jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIyJTtcclxuICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9vdGVyIHVsIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw3MDBcIik7XG4uaG9tZS1wYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEyM3B4O1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IC5tb2R1bGUtYm9yZGVyIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNEExRDksICNGMjM1OUQpO1xuICBwYWRkaW5nOiAzcHg7XG59XG4uaG9tZS1wYWdlIC5ob21lLWNvbnRlbnQgLm1vZHVsZS1ib3JkZXIgLm1vZHVsZSB7XG4gIGJhY2tncm91bmQ6ICMzRjQ0NDg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5ob21lLXBhZ2UgLmhvbWUtY29udGVudCAud3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQ0NDg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMTVweCAjMDAwMDAwYTY7XG4gIHBhZGRpbmc6IDYlO1xuICBtYXJnaW46IDUlIGF1dG8gMTAlO1xufVxuLmhvbWUtcGFnZSAuaG9tZS1jb250ZW50IC53cmFwcGVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBlbTtcbn1cbi5ob21lLXBhZ2UgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLmhvbWUtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uaG9tZS1wYWdlIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjOThhMGFkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uaG9tZS1wYWdlIHAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwNUYyRjI7XG59XG4uaG9tZS1wYWdlIC5hY3Rpb24tYnRuLCAuaG9tZS1wYWdlIC53b3Jrcy1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMTRBMUQ5O1xuICBwYWRkaW5nOiAwLjVlbSAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi5ob21lLXBhZ2UgLmFjdGlvbi1idG46aG92ZXIsIC5ob21lLXBhZ2UgLndvcmtzLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxNEExRDk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuaG9tZS1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ob21lLXBhZ2UgLmhvbWUtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjIlO1xuICAgIGxlZnQ6IDE4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuaG9tZS1wYWdlIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIC5ob21lLXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC5ob21lLXBhZ2UgaDEgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIH1cbiAgLmhvbWUtcGFnZSBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIC5ob21lLXBhZ2UgZm9vdGVyIHVsIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbSAwO1xuICB9XG59Il19 */"

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

/***/ "./src/app/components/site/skills/skills.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/site/skills/skills.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".skills-page {\n  background: #3F4448;\n  height: 100%;\n  text-align: center;\n}\n.skills-page .content {\n  padding-top: 123px;\n  text-align: center;\n}\n.skills-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n  padding-bottom: 30px;\n}\n.skills-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-bottom-right-radius: 5px;\n}\n.skills-page h2 {\n  font-size: 1.5em;\n  font-weight: 500;\n  color: #F5F3F5;\n}\n.skills-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n.skills-page .resume-btn {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border-radius: 2px;\n  border: 2px solid #14A1D9;\n  margin: 1em 0;\n}\n.skills-page .resume-btn:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n@media (min-width: 900px) {\n  .skills-page {\n    position: relative;\n  }\n  .skills-page .content {\n    position: absolute;\n    top: 22%;\n    left: 180px;\n    text-align: left;\n  }\n  .skills-page h1 {\n    font-size: 3em;\n  }\n  .skills-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .skills-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpdGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXNzZXRzL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRUNNO0VGS04sb0JBQUE7QUNOUjtBRENRO0VBQ0ksZ0NBQUE7RUFFQSwrQkFBQTtBQ0FaO0FESUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0VWTTtBRFFkO0FESUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGUjtBRElJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNGUjtBREdRO0VBQ0ksZUFBQTtFQUNBLG1CRXJDTDtBRG9DUDtBRFNBO0VBQ0k7SUFFSSxrQkFBQTtFQ1BOO0VEUU07SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNOVjtFRFFNO0lBQ0ksY0FBQTtFQ05WO0VET1U7SUFDSSxnQ0FBQTtFQ0xkO0VEUU07SUFDSSxVQUFBO0VDTlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG4uc2tpbGxzLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogIzNGNDQ0ODtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvLyBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTIzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAkY3lhbm8td2hpdGU7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICAucmVzdW1lLWJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAuZnJvbnQsIC5iYWNrIHtcclxuICAgIC8vICAgICBmbG9hdDogbGVmdDtcclxuICAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgIC8vIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC5za2lsbHMtcGFnZSB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLnBuZyk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIyJTtcclxuICAgICAgICAgICAgbGVmdDogMTgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gICAgICAiLCIuc2tpbGxzLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjM0Y0NDQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5za2lsbHMtcGFnZSAuY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNraWxscy1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5za2lsbHMtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uc2tpbGxzLXBhZ2UgaDIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0Y1RjNGNTtcbn1cbi5za2lsbHMtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnNraWxscy1wYWdlIC5yZXN1bWUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxNEExRDk7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4uc2tpbGxzLXBhZ2UgLnJlc3VtZS1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxNEExRDk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAuc2tpbGxzLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2tpbGxzLXBhZ2UgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5za2lsbHMtcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLnNraWxscy1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC5za2lsbHMtcGFnZSBwIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59IiwiJG5hdi1jb2xvcjogIzI0MjkyZTtcclxuJGJnLWNvbG9yOiAjM0Y0NDQ4O1xyXG4kaW5wdXQ6ICMwZTEzMWM7XHJcblxyXG4kYXAtYmxhY2s6ICMwRTEzMUM7XHJcbiRhcC1kYXJrOiAjMjczMDQwO1xyXG4kYXAtYmx1ZTogIzM3NjdBNjtcclxuJGJsdWU6ICMxNEExRDk7XHJcbiRtaWQtYmx1ZTogIzA1QzdGMjtcclxuJGxpZ2h0LWJsdWU6ICMwNURCRjI7XHJcbiRhcC1wb3A6ICMwNUYyRjI7XHJcblxyXG5cclxuJHBpbms6ICNGMjM1OUQ7XHJcbiRwdXJwbGU6ICM3MzJENjA7XHJcbiRjeWFuby13aGl0ZTogI0Y1RjNGNTtcclxuJGN5YW5vLWJsYWNrOiAjMDEwMTAxO1xyXG4kc2Fsby1ibGFjazogIzBEMEQwRDtcclxuXHJcblxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/site/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/site/skills/skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/site/work/work.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/site/work/work.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".works-page {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding-top: 30px;\n}\n.works-page .container {\n  width: 100%;\n}\n.works-page .container .wrapper {\n  background-color: #3F4448;\n  border-radius: 2px;\n  box-shadow: 0px 0px 115px #000000a6;\n  padding: 6%;\n  width: 100%;\n  margin: 5% auto 10%;\n  border: 2px solid #3767A6;\n}\n.works-page .container .wrapper:hover {\n  border: 2px solid #05F2F2;\n}\n.works-page .container .wrapper .content {\n  display: block;\n  margin-top: 0em;\n}\n.works-page .container .wrapper .content h3 {\n  color: #F5F3F5;\n  text-align: left;\n}\n.works-page .container .wrapper .content p {\n  text-align: left;\n}\n.works-page .container .wrapper .content a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  font-weight: 700;\n  padding: 0.5em 2em;\n  border: 2px solid #14A1D9;\n  border-radius: 2px;\n  margin-top: 1em;\n  margin-right: 1em;\n}\n.works-page .container .wrapper .content a:hover {\n  cursor: pointer;\n  background: #14A1D9;\n}\n.works-page h1 {\n  font-size: 2em;\n  font-weight: 700;\n  color: #F5F3F5;\n}\n.works-page h1 span {\n  border-bottom: 2px solid #05DBF2;\n  border-radius: 10px;\n}\n.works-page p {\n  font-weight: 300;\n  line-height: 1.8em;\n  color: #98a0ad;\n  display: inline;\n}\n@media (min-width: 900px) {\n  .works-page h1 {\n    font-size: 3em;\n  }\n  .works-page h1 span {\n    border-bottom: 2px solid #05DBF2;\n  }\n  .works-page p {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy93b3JrL3BvcnRmb2xpby9zcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCIvbW50L2Mvd29yay9wb3J0Zm9saW8vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDRko7QURHSTtFQUNJLFdBQUE7QUNEUjtBREVRO0VBRUkseUJFWEQ7RUZlQyxrQkFBQTtFQUVBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0FDTlo7QURPWTtFQUNJLHlCQUFBO0FDTGhCO0FET1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0xoQjtBRE1nQjtFQUNJLGNFaEJOO0VGaUJNLGdCQUFBO0FDSnBCO0FETWdCO0VBQ0ksZ0JBQUE7QUNKcEI7QURNZ0I7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSnBCO0FES29CO0VBQ0ksZUFBQTtFQUNBLG1CRTFDakI7QUR1Q1A7QURZSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNFOUNNO0FEb0NkO0FEV1E7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FDVFo7QURZSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1ZSO0FEY0E7RUFJUTtJQUNJLGNBQUE7RUNkVjtFRGVVO0lBQ0ksZ0NBQUE7RUNiZDtFRGdCTTtJQUNJLFVBQUE7RUNkVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXRlL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuLndvcmtzLXBhZ2Uge1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzNGNDQ0ODtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC53cmFwcGVye1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDQwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNSUgYXV0byAxMCU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYXAtYmx1ZTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRhcC1wb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTsgXHJcbiAgICAgICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGN5YW5vLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gaW1nIHtcclxuICAgIC8vICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgLy8gfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICRjeWFuby13aGl0ZTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRsaWdodC1ibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgICBjb2xvcjogIzk4YTBhZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC53b3Jrcy1wYWdlIHtcclxuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUucG5nKTtcclxuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGxpZ2h0LWJsdWU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAgICAgICIsIi53b3Jrcy1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0NDQ4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTE1cHggIzAwMDAwMGE2O1xuICBwYWRkaW5nOiA2JTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNSUgYXV0byAxMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNzY3QTY7XG59XG4ud29ya3MtcGFnZSAuY29udGFpbmVyIC53cmFwcGVyOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzA1RjJGMjtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMGVtO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBoMyB7XG4gIGNvbG9yOiAjRjVGM0Y1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53b3Jrcy1wYWdlIC5jb250YWluZXIgLndyYXBwZXIgLmNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzE0QTFEOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLndvcmtzLXBhZ2UgLmNvbnRhaW5lciAud3JhcHBlciAuY29udGVudCBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMTRBMUQ5O1xufVxuLndvcmtzLXBhZ2UgaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGNUYzRjU7XG59XG4ud29ya3MtcGFnZSBoMSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNURCRjI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ud29ya3MtcGFnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogIzk4YTBhZDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLndvcmtzLXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG4gIC53b3Jrcy1wYWdlIGgxIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDVEQkYyO1xuICB9XG4gIC53b3Jrcy1wYWdlIHAge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn0iLCIkbmF2LWNvbG9yOiAjMjQyOTJlO1xyXG4kYmctY29sb3I6ICMzRjQ0NDg7XHJcbiRpbnB1dDogIzBlMTMxYztcclxuXHJcbiRhcC1ibGFjazogIzBFMTMxQztcclxuJGFwLWRhcms6ICMyNzMwNDA7XHJcbiRhcC1ibHVlOiAjMzc2N0E2O1xyXG4kYmx1ZTogIzE0QTFEOTtcclxuJG1pZC1ibHVlOiAjMDVDN0YyO1xyXG4kbGlnaHQtYmx1ZTogIzA1REJGMjtcclxuJGFwLXBvcDogIzA1RjJGMjtcclxuXHJcblxyXG4kcGluazogI0YyMzU5RDtcclxuJHB1cnBsZTogIzczMkQ2MDtcclxuJGN5YW5vLXdoaXRlOiAjRjVGM0Y1O1xyXG4kY3lhbm8tYmxhY2s6ICMwMTAxMDE7XHJcbiRzYWxvLWJsYWNrOiAjMEQwRDBEO1xyXG5cclxuXHJcblxyXG4iXX0= */"

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
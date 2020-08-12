(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About My App</h2>\n<p>An angular app that lest us write goals.</p>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
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
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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



var routes = [];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote></app-quote>\n"

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
        this.title = 'quote';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _highest_vote_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./highest-vote.directive */ "./src/app/highest-vote.directive.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_6__["QuoteFormComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__["QuoteComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_8__["QuoteDetailsComponent"],
                _highest_vote_directive__WEBPACK_IMPORTED_MODULE_9__["HighestVoteDirective"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highest-vote.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/highest-vote.directive.ts ***!
  \*******************************************/
/*! exports provided: HighestVoteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighestVoteDirective", function() { return HighestVoteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighestVoteDirective = /** @class */ (function () {
    function HighestVoteDirective(el) {
        el.nativeElement.style.backgroundColor = 'rgba(249, 165, 49, 0.2)';
    }
    HighestVoteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighestVote]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighestVoteDirective);
    return HighestVoteDirective;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote-details {\n  box-shadow: 5px -5px 5px rgba(255, 255, 255, 0.4);\n}\n\n.btns {\n  position: absolute;\n}\n\nbutton {\n  background: rgb(194, 1, 1);\n  padding: 1px 10px;\n\n}\n\n.hide {\n  margin-right: 20px;\n  background: black;\n}\n\n.votes {\n  max-width: 200px;\n  z-index: 300;\n}\n\n.votes img {\n  height: 25px;\n}\n\n.votes span {\n  display: inline-block;\n  margin: 5px;\n  margin-right: 5px;\n  padding: 1px 5px;\n  background: rgba(255, 255, 255, 0.781);\n  border-radius: 20px;\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.votes .dn {\n  background: rgba(255, 0, 0, 0.884);\n  color: white;\n}\n\n.votes img {\n  display: inline-block;\n  cursor: pointer;\n  transition: all 0.1s ease-out;\n}\n\n.votes img:hover {\n  transform: scale(1.2);\n  box-shadow: 15px 15px 10px rgba(255, 255, 255, 0.527);\n}\n\n.votes img:active {\n  box-shadow: 0px 0px 10px rgba(255, 255, 255);\n  transform: scale(1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGUtZGV0YWlscyB7XG4gIGJveC1zaGFkb3c6IDVweCAtNXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbi5idG5zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTk0LCAxLCAxKTtcbiAgcGFkZGluZzogMXB4IDEwcHg7XG5cbn1cblxuLmhpZGUge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4udm90ZXMge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICB6LWluZGV4OiAzMDA7XG59XG5cbi52b3RlcyBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi52b3RlcyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDFweCA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43ODEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZvdGVzIC5kbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjg4NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnZvdGVzIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbn1cblxuLnZvdGVzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyNyk7XG59XG5cbi52b3RlcyBpbWc6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quote-details\">\n  <div class=\"votes\">\n    Total Up Votes: <span>{{quote.upVote}}</span>\n  </div>\n  <p>Created by : {{quote.submittedBy}} on {{quote.setDate | date}}</p>\n  <div *ngIf='quote.showBtn' class=\"btns\">\n    <button class=\"hide\" (click)='showDesc'> Hide Description</button>\n    <button (click)='deleteQuote(true)'>Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote/quote.component */ "./src/app/quote/quote.component.ts");




var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.quoteDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteDetailsComponent.prototype.deleteQuote = function (deleted) {
        this.quoteDelete.emit(deleted);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote_quote_component__WEBPACK_IMPORTED_MODULE_3__["QuoteComponent"])
    ], QuoteDetailsComponent.prototype, "showDesc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteDetailsComponent.prototype, "quoteDelete", void 0);
    QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n::-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n::placeholder {\n  color: rgba(255, 255, 255, 0.8);\n}\n\ninput,\ntextarea {\n  background: transparent;\n  border-radius: 0px;\n  outline: none;\n}\n\ninput:focus,\ntextarea:focus{\n  background: rgba(255,255,255,0.5);\n  border-radius: 0px;\n  color: black;\n\n}\n\nbutton{\n  padding: 1px 10px;\n  color: white;\n  outline: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRkE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRkE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBQ0E7O0VBRUUsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS1mb3JtL3F1b3RlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXN7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjb2xvcjogYmxhY2s7XG5cbn1cbmJ1dHRvbntcbiAgcGFkZGluZzogMXB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3>Create A New Quote</h3>\n  <form action=\"\" #goalForm='ngForm' name=\"goalForm\" (ngSubmit)=\"submit()\" >\n    <p *ngIf=\"description.invalid ||author.invalid ||submittedBy.invalid \" class=\"text-warning\">Fill all the fields in order to submit</p>\n\n    <div class=\"form-group\">\n      <label for=\"quote\">Quote</label>\n      <textarea type=\"text\" #description='ngModel' required placeholder=\"Enter Quote\" class=\"form-control\" name=\"description\" [(ngModel)]='newQuote.description'></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"quote\">Author</label>\n      <input type=\"text\" required placeholder=\"Enter Authors name\" #author='ngModel' class=\"form-control\"name=\"author\" [(ngModel)]='newQuote.author'>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"quote\">Submitted By</label>\n      <input type=\"text\" required placeholder=\"Enter Your name\" #submittedBy='ngModel' class=\"form-control\" name=\"submittedBy\" [(ngModel)]='newQuote.submittedBy'>\n    </div>\n    <button type=\"submit\" [disabled]=\"description.invalid ||author.invalid ||submittedBy.invalid \" class=\"btn-outline-dark\">Create Quote</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");



var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.quoteUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newQuote = new _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"](0, '', '', '', new Date(), 0, 0);
    }
    QuoteFormComponent.prototype.submit = function () {
        this.quoteUpdate.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"])
    ], QuoteFormComponent.prototype, "quotes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteFormComponent.prototype, "quoteUpdate", void 0);
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: rgb(255, 255, 255);\n  text-shadow: 0 0 10px white;\n  background: rgba(0, 0, 0, 0.4);\n}\n\n.intro {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 5% 0;\n}\n\n.intro div {\n  display: block;\n  color: black;\n  /* margin: 2% 0; */\n  padding: 10% 20px;\n  width: 700px;\n  max-width: 100;\n  background: white;\n  text-align: left;\n}\n\n.intro .new-quote {\n  width: 400px;\n  max-width: 100%;\n  padding: 20px 20px;\n  background: rgb(2, 143, 199);\n}\n\n.quote-section {\n  background: rgba(2, 143, 199, 0.9);\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-top: 20px;\n}\n\n.quotes-cont {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n.quotes {\n  padding: 10px;\n  margin: 15px 0;\n  width: 70%;\n  box-shadow: 0 0 5px rgb(255, 255, 255);\n  position: relative;\n  \n}\n\n.quotes button {\n  margin-top: 10px;\n  padding: 1px 10px;\n}\n\n.quote-desc span {\n  font-style: italic;\n  font-weight: bold;\n  font-size: 0.9em;\n\n}\n\n.high-cont {\n  background: rgba(2, 143, 199, 0.9);\n  width: 100%;\n}\n\n.high-quote {\n  padding: 20px 10px;\n  margin: 40px 0;\n  width: 70%;\n  box-shadow: 0 0 40px rgb(255, 207, 144);\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n  opacity: 1;\n  -webkit-animation: show 1.2s linear 1;\n          animation: show 1.2s linear 1;\n}\n\n@-webkit-keyframes show{\n  0%{opacity: 0;transform: translateY(100%) translateX(-50%) scale(0.9);}\n  30%{opacity: 1;}\n  50%{opacity: 0;transform: translateY(-10%)  translate(-50%) scale(0.9);}\n  90%{opacity: 1;} \n}\n\n@keyframes show{\n  0%{opacity: 0;transform: translateY(100%) translateX(-50%) scale(0.9);}\n  30%{opacity: 1;}\n  50%{opacity: 0;transform: translateY(-10%)  translate(-50%) scale(0.9);}\n  90%{opacity: 1;} \n}\n\n.high-quote h5 {\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  margin-top: 7px;\n}\n\n.high-quote .votes {\n  background: rgba(255, 255, 255, 0.459);\n  margin-top: 1px;\n  height: 35px;\n  padding: 5px 10px;\n\n}\n\n.date {\n  position: absolute;\n  right: 15px;\n  top: 5px;\n  font-size: 0.9em;\n}\n\n.votes {\n  max-width: 200px;\n  height: 25px;\n  float: right;\n  z-index: 300;\n}\n\n.votes>span {\n  display: inline-block;\n  font-size: 0.7em;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 1s ease;\n  margin-left: 5px;\n  padding: 2px 5px;\n}\n\n.votes>span:active{\n  box-shadow: 0 0 20px white;\n  transition: all 0s ease;\n  border-radius: 20px;\n}\n\n.votes>span>span {\n  background: rgba(255, 255, 255, 0.781);\n  padding: 1px 4px;\n  border-radius: 20px;\n  margin-left: 5px;\n}\n\n.votes>span .dn {\n  background: rgba(255, 0, 0, 0.884);\n  color: white;\n}\n\n.votes i {\n  display: inline-block;\n  cursor: pointer;\n  color: white;\n  transition: all 0.1s ease-out;\n}\n\n.votes i:hover {\n  transform: scale(1.2);\n  box-shadow: 15px 15px 10px rgba(255, 255, 255, 0.527);\n}\n\n.votes i:active {\n  box-shadow: 0px 0px 10px rgba(255, 255, 255);\n  transform: scale(1);\n}\n\n/*---------------------------------------------------\n              MEDIA QUERIES\n---------------------------------------------------*/\n\n@media only screen and (max-width: 500px) {\n  .quotes {\n    width: 100%;\n    /* background: red; */\n    box-shadow: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.4);\n  }\n\n  .high-quote {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLEdBQUcsVUFBVSxDQUFDLHVEQUF1RCxDQUFDO0VBQ3RFLElBQUksVUFBVSxDQUFDO0VBQ2YsSUFBSSxVQUFVLENBQUMsdURBQXVELENBQUM7RUFDdkUsSUFBSSxVQUFVLENBQUM7QUFDakI7O0FBTEE7RUFDRSxHQUFHLFVBQVUsQ0FBQyx1REFBdUQsQ0FBQztFQUN0RSxJQUFJLFVBQVUsQ0FBQztFQUNmLElBQUksVUFBVSxDQUFDLHVEQUF1RCxDQUFDO0VBQ3ZFLElBQUksVUFBVSxDQUFDO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG1CQUFtQjtBQUNyQjs7QUFFQTs7b0RBRW9EOztBQUNwRDtFQUNFO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9xdW90ZS9xdW90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmludHJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiA1JSAwO1xufVxuXG4uaW50cm8gZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgLyogbWFyZ2luOiAyJSAwOyAqL1xuICBwYWRkaW5nOiAxMCUgMjBweDtcbiAgd2lkdGg6IDcwMHB4O1xuICBtYXgtd2lkdGg6IDEwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbnRybyAubmV3LXF1b3RlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZDogcmdiKDIsIDE0MywgMTk5KTtcbn1cblxuXG4ucXVvdGUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMiwgMTQzLCAxOTksIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ucXVvdGVzLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnF1b3RlcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICB3aWR0aDogNzAlO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbn1cblxuLnF1b3RlcyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxcHggMTBweDtcbn1cblxuLnF1b3RlLWRlc2Mgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG5cbn1cblxuLmhpZ2gtY29udCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMiwgMTQzLCAxOTksIDAuOSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGlnaC1xdW90ZSB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIHdpZHRoOiA3MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYigyNTUsIDIwNywgMTQ0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb246IHNob3cgMS4ycyBsaW5lYXIgMTtcbn1cbkBrZXlmcmFtZXMgc2hvd3tcbiAgMCV7b3BhY2l0eTogMDt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLjkpO31cbiAgMzAle29wYWNpdHk6IDE7fVxuICA1MCV7b3BhY2l0eTogMDt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSkgIHRyYW5zbGF0ZSgtNTAlKSBzY2FsZSgwLjkpO31cbiAgOTAle29wYWNpdHk6IDE7fSBcbn1cblxuLmhpZ2gtcXVvdGUgaDUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uaGlnaC1xdW90ZSAudm90ZXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDU5KTtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuXG59XG5cbi5kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi52b3RlcyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB6LWluZGV4OiAzMDA7XG59XG5cbi52b3Rlcz5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbn1cbi52b3Rlcz5zcGFuOmFjdGl2ZXtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udm90ZXM+c3Bhbj5zcGFuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4MSk7XG4gIHBhZGRpbmc6IDFweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi52b3Rlcz5zcGFuIC5kbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjg4NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnZvdGVzIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLW91dDtcbn1cblxuLnZvdGVzIGk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjcpO1xufVxuXG4udm90ZXMgaTphY3RpdmUge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgTUVESUEgUVVFUklFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnF1b3RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgfVxuXG4gIC5oaWdoLXF1b3RlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Inspirational and motivational Quotes about Success and life</h1>\n<section class=\"intro container \">\n  <div>\n\n    <p>Inspirational quotes and motivational sayings have an amazing ability to change the way we feel\n      about life. This\n      is\n      why i find them so interesting and crucial on our paths to success. <br> So whats the secret? <br>The way you\n      think\n      and feel about yourself, including your beliefs and expectations about what is possibles for you, determines\n      everything that happens to you.When you change the quality of your thinking, you change the quality of your life\n    </p>\n\n  </div>\n  <div class=\"new-quote\">\n    <app-quote-form (quoteUpdate)='addQuote($event)'></app-quote-form>\n  </div>\n</section>\n\n<section class=\"quote-section\">\n  <h3> MOTIVATIONAL QUOTES</h3>\n  <div class=\"high-cont\" *ngFor=\"let quote of quotes; let i = index; let j = index;\">\n\n    <div class=\"high-quote\" appHighestVote *ngIf='quote.upVote == highest() && highest() > 0'>\n      <h5>Highest as voted by you</h5>\n      <p></p><br>\n      <p class=\"date\">{{quote.setDate | date}}</p>\n      <p class=\"quote-desc\">{{quote.description}}<br> <span>...{{quote.author}}</span></p>\n      <div class=\"votes\">\n        <span (click)='upVoter(i);highest();'>\n          <i class=\"far fa-thumbs-up\"></i>Up<span>{{quote.upVote}}</span>\n        </span>\n        <span (click)='dnVoter(i)'>\n          <i class=\"far fa-thumbs-down\"></i>Dn<span class=\"dn\">{{quote.dnVote}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"quotes-cont\">\n    <div class=\"quotes\" *ngFor=\"let quote of quotes; let i = index;let j = index;\">\n      <p></p><br>\n      <p class=\"date\">{{quote.setDate | date}}</p>\n      <p class=\"quote-desc\">{{quote.description}}<br> <span>...{{quote.author}}</span></p>\n      <!-- App quote details -->\n      <app-quote-details *ngIf='quote.showDescription' [quote]='quote' [showDesc]='showDesc(i)'\n        (quoteDelete)='deleteQuote($event, i)'></app-quote-details>\n      <!-- Votes -->\n      <div class=\"votes\">\n        <span (click)='upVoter(i);highest();'>\n          <i class=\"far fa-thumbs-up\"></i>Up<span>{{quote.upVote}}</span>\n        </span>\n        <span (click)='dnVoter(i)'>\n          <i class=\"far fa-thumbs-down\"></i>Dn<span class=\"dn\">{{quote.dnVote}}</span>\n        </span>\n      </div>\n      <div *ngIf='quote.showBtn'>\n        <button (click)='showDesc(i)'>Description</button>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");




var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.Id = 7;
        this.quotes = [
            new _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"](1, 'Walt Disney', 'The way to get started is to quit talking and to start doing.', 'Arnold', new Date(2019, 2, 10), 0, 0),
            new _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"](2, 'Will Rogers', 'Do not let yesterday take too much of today.', 'Arnold', new Date(2019, 2, 24), 0, 0),
            new _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"](3, 'Winston Churchill', 'The pessimist sees difficulty in every opportunity. The optimist sees opportunitty in every difficulty.', 'Arnold', new Date(2019, 3, 6), 0, 0),
            new _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"](4, 'Unknown', 'You learn more from failure than from success. Do not let it stop you. Failure builds character.', 'Arnold', new Date(2019, 5, 9), 0, 0),
        ];
    }
    QuoteComponent.prototype.showDesc = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
        this.quotes[index].showBtn = !this.quotes[index].showBtn;
    };
    QuoteComponent.prototype.deleteQuote = function (quoteDelete, index) {
        if (quoteDelete) {
            this.quotes.splice(index, 1);
        }
    };
    QuoteComponent.prototype.upVoter = function (index) {
        var i;
        i = this.quotes[index].upVote;
        i++;
        this.quotes[index].upVote = i;
        console.log('this i: ' + i);
    };
    QuoteComponent.prototype.dnVoter = function (index) {
        var j;
        j = this.quotes[index].dnVote;
        j++;
        this.quotes[index].dnVote = j;
    };
    QuoteComponent.prototype.highest = function (arr) {
        arr = [];
        this.quotes.forEach(function (quote) {
            arr.push(quote.upVote);
        });
        var high = Math.max.apply(Math, arr);
        return high;
    };
    QuoteComponent.prototype.addQuote = function (quote) {
        this.quotes.unshift(quote);
        console.log(this.quotes);
    };
    QuoteComponent.prototype.ngOnInit = function () {
        var arr = [];
        this.quotes.forEach(function (quote) {
            arr.push(quote.upVote - quote.dnVote);
        });
        var high = Math.max.apply(Math, arr);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__["QuoteFormComponent"])
    ], QuoteComponent.prototype, "authorName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteComponent.prototype, "quote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteComponent.prototype, "submitByName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_3__["QuoteFormComponent"])
    ], QuoteComponent.prototype, "quoteUpdate", void 0);
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/quotes.ts":
/*!***************************!*\
  !*** ./src/app/quotes.ts ***!
  \***************************/
/*! exports provided: Quotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotes", function() { return Quotes; });
var Quotes = /** @class */ (function () {
    function Quotes(id, author, description, submittedBy, setDate, upVote, dnVote) {
        this.id = id;
        this.author = author;
        this.description = description;
        this.submittedBy = submittedBy;
        this.setDate = setDate;
        this.upVote = upVote;
        this.dnVote = dnVote;
        this.showDescription = false;
        this.showBtn = true;
    }
    return Quotes;
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

module.exports = __webpack_require__(/*! /home/uneducated555profesora/Documents/Resume/quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
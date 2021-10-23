(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "eG4Z":
/*!****************************************************************************************!*\
  !*** ./src/app/sales-automation-home/one-month-product/one-month-product.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OneMonthProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneMonthProductComponent", function() { return OneMonthProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_globalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/globalService */ "C4iA");
/* harmony import */ var _common_price_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/price/price.component */ "2nR4");




class OneMonthProductComponent {
    constructor(route, _globalVariableService) {
        this.route = route;
        this._globalVariableService = _globalVariableService;
        this.partnerId = this.route.snapshot.paramMap.get('pId');
        this._globalVariableService.setPartnerId(this.partnerId);
    }
    ngOnInit() {
    }
}
OneMonthProductComponent.ɵfac = function OneMonthProductComponent_Factory(t) { return new (t || OneMonthProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_globalService__WEBPACK_IMPORTED_MODULE_2__["globalVariableService"])); };
OneMonthProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OneMonthProductComponent, selectors: [["app-one-month-product"]], decls: 1, vars: 2, consts: [[3, "oneMonthTrial", "partnerId"]], template: function OneMonthProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-price", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("oneMonthTrial", true)("partnerId", ctx.partnerId);
    } }, directives: [_common_price_price_component__WEBPACK_IMPORTED_MODULE_3__["PriceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmUtbW9udGgtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "xZRa":
/*!********************************************************************!*\
  !*** ./src/app/sales-automation-home/pricing/pricing.component.ts ***!
  \********************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_globalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/globalService */ "C4iA");
/* harmony import */ var _common_price_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/price/price.component */ "2nR4");




class PricingComponent {
    constructor(route, _globalVariableService) {
        this.route = route;
        this._globalVariableService = _globalVariableService;
        this.partnerId = this.route.snapshot.paramMap.get('pId');
        this._globalVariableService.setPartnerId(this.partnerId);
    }
    ngOnInit() { }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_globalService__WEBPACK_IMPORTED_MODULE_2__["globalVariableService"])); };
PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 1, vars: 2, consts: [[3, "oneMonthTrial", "partnerId"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-price", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("oneMonthTrial", false)("partnerId", ctx.partnerId);
    } }, directives: [_common_price_price_component__WEBPACK_IMPORTED_MODULE_3__["PriceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=common.js.map
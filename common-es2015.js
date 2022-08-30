(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.urlApi = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/user`;
    }
    getUsers(params) {
        if (!!params) {
            const firstDate = params.firstDate;
            const secondDate = params.secondDate;
            return this.http.get(this.urlApi + '?' + `firstDate=${firstDate}&secondDate=${secondDate}`);
        }
        else
            return this.http.get(this.urlApi);
    }
    getUsersRefered(refered) {
        if (!!refered) {
            return this.http.get(this.urlApi + '?' + `refered=true`);
        }
        else
            return this.http.get(this.urlApi + '?' + `refered=false`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], UserService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
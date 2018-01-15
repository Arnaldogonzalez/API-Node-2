/*! require("source-map-support".install();) */
exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./src/db.js");



var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_1__db__["a" /* connect */])();

app.get('/', function (req, res) {
  res.json({ ok: false });
});

// Never in production
app.all('*', function (req, res) {
  res.json({ ok: true });
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=0.dfd294c282d566d1dfb0.hot-update.js.map
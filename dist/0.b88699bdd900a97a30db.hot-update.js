/*! require("source-map-support".install();) */
exports.id = 0;
exports.modules = {

/***/ "./src/middleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);


var setGlobalMiddleware = function setGlobalMiddleware(app) {};

/* unused harmony default export */ var _unused_webpack_default_export = (setGlobalMiddleware);

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware__ = __webpack_require__("./src/middleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db__ = __webpack_require__("./src/db.js");




var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_2__db__["a" /* connect */])();

app.get('/', function (req, res) {
  res.json({ ok: false });
});

// Never in production
app.all('*', function (req, res) {
  res.json({ ok: true });
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })

};
//# sourceMappingURL=0.b88699bdd900a97a30db.hot-update.js.map
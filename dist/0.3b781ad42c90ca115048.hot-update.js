/*! require("source-map-support".install();) */
exports.id = 0;
exports.modules = {

/***/ "./src/api/modules/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signin; });
/* unused harmony export decodeToken */
/* unused harmony export getFreshUser */
/* unused harmony export verifyUser */
/* unused harmony export signToken */
/* unused harmony export protect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources_user_user_model__ = __webpack_require__("./src/api/resources/user/user.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_jwt__ = __webpack_require__("express-jwt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express_jwt__);



var jwtSecret = 'blueRhinoJumps';

var checkToken = __WEBPACK_IMPORTED_MODULE_2_express_jwt___default()({ secret: jwtSecret });
var disableAuth = false;

var signin = function signin(req, res, next) {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  var token = signToken(req.user.id);
  res.json({ token: token });
};

var decodeToken = function decodeToken() {
  return function (req, res, next) {
    if (disableAuth) {
      return next();
    }
    // make it optional to place token on query string
    // if it is, place it on the headers where it should be
    // so checkToken can see it. See follow the 'Bearer 034930493' format
    // so checkToken can see it and decode it
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }

    // this will call next if token is valid
    // and send error if its not. It will attached
    // the decoded token to req.user
    checkToken(req, res, next);
  };
};

var getFreshUser = function getFreshUser() {
  return function (req, res, next) {
    return __WEBPACK_IMPORTED_MODULE_0__resources_user_user_model__["a" /* User */].findById(req.user.id).then(function (user) {
      if (!user) {
        // if no user is found it was not
        // it was a valid JWT but didn't decode
        // to a real user in our DB. Either the user was deleted
        // since the client got the JWT, or
        // it was a JWT from some other source
        res.status(401).send('Unauthorized');
      } else {
        // update req.user with fresh user from
        // stale token data
        req.user = user;
        next();
      }
    }).catch(function (error) {
      return next(error);
    });
  };
};

var verifyUser = function verifyUser() {
  return function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // if no username or password then send
    if (!username || !password) {
      res.status(400).send('You need a username and password');
      return;
    }

    // look user up in the DB so we can check
    // if the passwords match for the username
    __WEBPACK_IMPORTED_MODULE_0__resources_user_user_model__["a" /* User */].findOne({ username: username }).then(function (user) {
      if (!user) {
        res.status(401).send('No user with the given username');
      } else {
        // checking the passowords here
        if (!user.authenticate(password)) {
          res.status(401).send('Wrong password');
        } else {
          // if everything is good,
          // then attach to req.user
          // and call next so the controller
          // can sign a token from the req.user._id
          req.user = user;
          next();
        }
      }
    }).catch(function (error) {
      return next(err);
    });
  };
};

var signToken = function signToken(id) {
  return __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ id: id }, jwtSecret, { expiresIn: '30d' });
};

var protect = [decodeToken(), getFreshUser()];

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middleware__ = __webpack_require__("./src/middleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db__ = __webpack_require__("./src/db.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_modules_auth__ = __webpack_require__("./src/api/modules/auth.js");





var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

Object(__WEBPACK_IMPORTED_MODULE_2__db__["a" /* connect */])();

app.use('/signin', __WEBPACK_IMPORTED_MODULE_3__api_modules_auth__["a" /* signin */]);

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
//# sourceMappingURL=0.3b781ad42c90ca115048.hot-update.js.map
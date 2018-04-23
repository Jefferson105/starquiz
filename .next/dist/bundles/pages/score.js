module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/menu.js";

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "nav",
        { className: "menu", __source: {
                fileName: _jsxFileName,
                lineNumber: 2
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            { className: "menu-list", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 3
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "menu-list-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 4
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 4
                        }
                    },
                    "Home"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "menu-list-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/game", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 5
                        }
                    },
                    "Game"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "menu-list-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/score", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 6
                        }
                    },
                    "Score"
                )
            )
        )
    );
});

/***/ }),

/***/ "./pages/score.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss__ = __webpack_require__("./pages/scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu__ = __webpack_require__("./components/menu.js");

var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/score.js";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var Score = function Score(_ref) {
    var _ref$list = _ref.list,
        list = _ref$list === undefined ? [] : _ref$list;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "section",
        { className: "score", __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_menu__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "header",
            { className: "score-header", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "h1",
                { className: "home-title", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                "StarQuiz!"
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "h2",
                { id: "subTitle", className: "score-header-subTitle", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                "Score"
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            { className: "score-list", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            },
            list.length ? list.map(function (_ref2, i) {
                var user = _ref2.user,
                    email = _ref2.email,
                    pontuation = _ref2.pontuation;
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "li",
                    { key: i, className: "score-list-item", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "b",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18
                                }
                            },
                            "Name:"
                        ),
                        " ",
                        user
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "b",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 19
                                }
                            },
                            "Pontuation:"
                        ),
                        " ",
                        pontuation
                    )
                );
            }) : ""
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "footer",
            { className: "footer", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            },
            "Made by \xA9 Jefferson Barbosa"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "game-bg", __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            }
        })
    );
};

Score.getInitialProps = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
        var url, res, _ref4, list;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        url = context.req.headers.referer.replace("/score", "").replace("/game", "");
                        _context.next = 3;
                        return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(url + "/api/list");

                    case 3:
                        res = _context.sent;
                        _context.next = 6;
                        return res.json();

                    case 6:
                        _ref4 = _context.sent;
                        list = _ref4.list;
                        return _context.abrupt("return", { list: list });

                    case 9:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref3.apply(this, arguments);
    };
}();

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./pages/scss/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/score.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=score.js.map
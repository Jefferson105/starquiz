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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_style_scss__ = __webpack_require__("./pages/scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_menu__ = __webpack_require__("./components/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
    }

    _createClass(Main, [{
        key: "scrollPage",
        value: function scrollPage() {
            window.scrollTo({
                "behavior": "smooth",
                "left": 0,
                "top": window.innerHeight
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "section",
                { className: "home", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_menu__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "header",
                    { className: "home-header", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "home-mainImg", src: "/static/img/dart_white.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h1",
                        { className: "home-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        "StarQuiz!"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        { className: "home-txt", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        "Play now and test your knowledge in Star Wars"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "a",
                        { href: "/game", className: "home-start", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        "Start"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "home-goHow", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "p",
                            { className: "home-goHow-txt", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 29
                                }
                            },
                            "How to play."
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { onClick: this.scrollPage, className: "home-goHow-down", src: "/static/img/down-arrow.svg", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "section",
                    { className: "home-how", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "container", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "h2",
                            { className: "home-how-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 35
                                }
                            },
                            "How to play"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 37
                                    }
                                },
                                "The objective of this game is to hit the maximum number of personangens of the Star Wars saga. There will be several cards with the character's photo and you should write the name of this character."
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 38
                                    }
                                },
                                "On each card there will be two buttons ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/pencil.svg", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 38
                                    }
                                }),
                                " ",
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/info.svg", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 38
                                    }
                                }),
                                ", the first is to appear the field to enter the name of the character and the second to see details of the character."
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 39
                                    }
                                },
                                "You will have a maximum of two minutes to try to hit as many characters as possible. The counter will be at the top right of your screen along with the score."
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40
                                    }
                                },
                                "For each successful character without looking at the details you will gain 10 points, if you look at the details and hit you you will receive 5 points. Errors will not affect the score. If you hit the name of the character the card will turn green otherwise it will turn red."
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                },
                                "At the end of the two minutes you will be able to send your score and will be in the ranking."
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "footer",
                            { className: "footer", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                }
                            },
                            "Made by \xA9 Jefferson Barbosa"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "home-overlay", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", { className: "home-clip", loop: true, autoPlay: true, muted: true, poster: "/static/img/bg/sw2.jpg", src: "/static/videos/clip.mp4", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                })
            );
        }
    }]);

    return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./pages/scss/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
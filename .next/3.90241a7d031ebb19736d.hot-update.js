webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss__ = __webpack_require__("./pages/scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu__ = __webpack_require__("./components/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);


var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/index.js",
    _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "section",
                { className: "home", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_menu__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "header",
                    { className: "home-header", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { className: "home-mainImg", src: "/static/img/dart_white.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h1",
                        { className: "home-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        },
                        "StarQuiz!"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { className: "home-txt", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 17
                            }
                        },
                        "Play now and test your knowledge in Star Wars"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "a",
                        { href: "/game", className: "home-start", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        "Start"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        { className: "home-goHow", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            { className: "home-goHow-txt", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                }
                            },
                            "How to play."
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { className: "home-goHow-down", src: "/static/img/down-arrow.svg", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "section",
                    { className: "home-how", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        { className: "container", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "h2",
                            { className: "home-how-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 27
                                }
                            },
                            "How to play"
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "div",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 29
                                    }
                                },
                                "The objective of this game is to hit the maximum number of personangens of the Star Wars saga. There will be several cards with the character's photo and you should write the name of this character."
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 30
                                    }
                                },
                                "On each card there will be two buttons ",
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "/static/img/pencil.svg", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 30
                                    }
                                }),
                                " ",
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: "/static/img/info.svg", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 30
                                    }
                                }),
                                ", the first is to appear the field to enter the name of the character and the second to see details of the character."
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 31
                                    }
                                },
                                "You will have a maximum of two minutes to try to hit as many characters as possible. The counter will be at the top right of your screen along with the score."
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 32
                                    }
                                },
                                "For each successful character without looking at the details you will gain 10 points, if you look at the details and hit you you will receive 5 points. Errors will not affect the score. If you hit the name of the character the card will turn green otherwise it will turn red."
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 33
                                    }
                                },
                                "At the end of the two minutes you will be able to send your score and will be in the ranking."
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "footer",
                            { className: "footer", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 35
                                }
                            },
                            "Made by \xA9 Jefferson Barbosa"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "home-overlay", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("video", { className: "home-clip", loop: true, autoPlay: true, muted: true, poster: "/static/img/bg/sw2.jpg", src: "/static/videos/clip.mp4", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                })
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Main;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Main;
/* harmony default export */ __webpack_exports__["default"] = (_default);


Main.getInitialProps = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //var res = await fetch(ctx.req.headers.host + "/api/allChars");
                        //var data = await res.json();

                        console.log(ctx.req);

                        return _context.abrupt("return", {});

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this2);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Main, "Main", "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/index.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/index.js");
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.90241a7d031ebb19736d.hot-update.js.map
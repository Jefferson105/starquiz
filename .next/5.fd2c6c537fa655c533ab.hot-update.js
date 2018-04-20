webpackHotUpdate(5,{

/***/ "./pages/score.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss__ = __webpack_require__("./pages/scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu__ = __webpack_require__("./components/menu.js");

var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/score.js";


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
                        console.log(context);
                        url = context.req.headers.referer.replace("/score", "").replace("/game", "");
                        _context.next = 4;
                        return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(url + "api/list");

                    case 4:
                        res = _context.sent;
                        _context.next = 7;
                        return res.json();

                    case 7:
                        _ref4 = _context.sent;
                        list = _ref4.list;
                        return _context.abrupt("return", { list: list });

                    case 10:
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

var _default = Score;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Score, "Score", "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/score.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/score.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/score")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.fd2c6c537fa655c533ab.hot-update.js.map
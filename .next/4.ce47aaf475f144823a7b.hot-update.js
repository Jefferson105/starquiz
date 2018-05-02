webpackHotUpdate(4,{

/***/ "./pages/game.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_countDown__ = __webpack_require__("./components/countDown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_allCards__ = __webpack_require__("./components/allCards.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_detailChar__ = __webpack_require__("./components/detailChar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_finishGame__ = __webpack_require__("./components/finishGame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menu__ = __webpack_require__("./components/menu.js");

var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/game.js";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

String.prototype.replaceSpecialChars = function () {
    var str = this.toString();
    str = str.replace(/[ÀÁÃÄÂ]/g, "A");
    str = str.replace(/[àáãâä]/g, "a");
    str = str.replace(/[ÈÉÊË]/g, "E");
    str = str.replace(/[èéêë]/g, "e");
    str = str.replace(/[ÌÍÎÏ]/g, "I");
    str = str.replace(/[ìíîï]/g, "i");
    str = str.replace(/[ÒÓÔÕÖ]/g, "O");
    str = str.replace(/[òóôõö]/g, "o");
    str = str.replace(/[ÙÚÛŨÜ]/g, "U");
    str = str.replace(/[ùúûũü]/g, "u");
    str = str.replace(/[Ç]/g, "C");
    str = str.replace(/[ç]/g, "c");

    return str;
};

String.prototype.charCodePlus = function () {
    var str = this.toString().split("");
    return str.map(function (l) {
        return String.fromCharCode(l.charCodeAt(0) + 1);
    }).join("");
};

Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [this[j], this[i]];
        this[i] = _ref[0];
        this[j] = _ref[1];
    }

    return this;
};









var Game = function (_React$Component) {
    _inherits(Game, _React$Component);

    function Game(props) {
        _classCallCheck(this, Game);

        // Map image character
        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

        var results = props.data ? props.data.results : [];
        if (results.length) results = results.map(function (r) {
            return _extends({}, r, { photo: "/static/img/chars/" + r.name.split(" ")[0].replaceSpecialChars().charCodePlus() + ".jpeg" });
        });

        _this.state = {
            characters: results,
            info: null,
            points: 0,
            finish: false,
            started: false,
            loading: true
        };

        //this.getCharsPagination = this.getCharsPagination.bind(this);
        _this.getDetail = _this.getDetail.bind(_this);
        _this.addPoint = _this.addPoint.bind(_this);
        _this.finishTime = _this.finishTime.bind(_this);

        //if(props.data)
        //  this.getCharsPagination(props.data.next);
        return _this;
    }

    _createClass(Game, [{
        key: "componentWillMount",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var path, res, data;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                path = this.props.path;
                                _context.next = 3;
                                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(path + "/api/allChars");

                            case 3:
                                res = _context.sent;
                                _context.next = 6;
                                return res.json();

                            case 6:
                                data = _context.sent;


                                data = data.map(function (d) {
                                    return _extends({}, d, { photo: "/static/img/chars/" + r.name.split(" ")[0].replaceSpecialChars().charCodePlus() + ".jpeg" });
                                });

                                console.log(data);

                                this.setState({ started: true, loading: false });
                                /*setTimeout(() => {
                                    this.setState({ started: true, loading: false })
                                }, 10000);*/

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentWillMount() {
                return _ref2.apply(this, arguments);
            }

            return componentWillMount;
        }()

        // Get chars in pagination

    }, {
        key: "getCharsPagination",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(url) {
                var res, _ref4, next, results;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(url);

                            case 3:
                                res = _context2.sent;
                                _context2.next = 6;
                                return res.json();

                            case 6:
                                _ref4 = _context2.sent;
                                next = _ref4.next;
                                results = _ref4.results;


                                // Map image character
                                if (results.length) results = results.map(function (r) {
                                    return _extends({}, r, { photo: "/static/img/chars/" + r.name.split(" ")[0].replaceSpecialChars().charCodePlus() + ".jpeg" });
                                });

                                if (next) this.getCharsPagination(next);

                                this.setState({ characters: [].concat(_toConsumableArray(this.state.characters), _toConsumableArray(results)) });
                                _context2.next = 17;
                                break;

                            case 14:
                                _context2.prev = 14;
                                _context2.t0 = _context2["catch"](0);

                                console.error(_context2.t0);

                            case 17:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 14]]);
            }));

            function getCharsPagination(_x) {
                return _ref3.apply(this, arguments);
            }

            return getCharsPagination;
        }()

        // Change state to modal detail modal

    }, {
        key: "getDetail",
        value: function getDetail(info) {
            this.setState({ info: info });
        }

        // Add point to player

    }, {
        key: "addPoint",
        value: function addPoint(point) {
            var points = this.state.points;

            this.setState({ points: points + point });
        }

        // Change state when countdown finish

    }, {
        key: "finishTime",
        value: function finishTime() {
            this.setState({ finish: true });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                characters = _state.characters,
                info = _state.info,
                points = _state.points,
                finish = _state.finish,
                started = _state.started,
                loading = _state.loading;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "section",
                { className: "game", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_menu__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "header",
                    { className: "game-header", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 124
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h1",
                        { className: "game-header-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 125
                            }
                        },
                        "Star",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 125
                            }
                        }),
                        "Quiz"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { className: "game-header-points", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 126
                            }
                        },
                        points
                    ),
                    started ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_countDown__["a" /* default */], { finish: this.finishTime, time: 120, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                        }
                    }) : "",
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { id: "text", className: "game-header-txt", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 131
                            }
                        },
                        "Do you really know about Star Wars? Test it now!"
                    )
                ),
                finish ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_allCards__["a" /* default */], { finish: true, characters: characters, onPontuation: this.addPoint, onGetDetail: this.getDetail, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 136
                    }
                }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_allCards__["a" /* default */], { characters: characters, onPontuation: this.addPoint, onGetDetail: this.getDetail, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                    }
                }),
                info ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_detailChar__["a" /* default */], { info: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                    }
                }) : "",
                finish ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_finishGame__["a" /* default */], { points: points, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 142
                    }
                }) : "",
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    { className: "loading " + (loading ? "fadeIn" : "fadeOut"), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 144
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        { className: "loading-content", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 145
                            }
                        },
                        loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "h2",
                            { className: "loading-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 148
                                }
                            },
                            "Preparing the game. Wait..."
                        ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "h2",
                            { className: "loading-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 149
                                }
                            },
                            "Start"
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { className: "loading-img", src: "/static/img/star-wars.svg", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 151
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "footer",
                    { className: "footer", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 155
                        }
                    },
                    "Made by \xA9 Jefferson Barbosa"
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "game-bg", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 157
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

    return Game;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Game;
/* harmony default export */ __webpack_exports__["default"] = (_default);


Game.getInitialProps = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(_ref5) {
        var req = _ref5.req;
        var host, protocol, path;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        host = req.headers.host;
                        protocol = req.headers.referer.indexOf("https") > -1 ? "https://" : "http://";
                        path = protocol + host;

                        //const res = await fetch(`https://swapi.co/api/people/`);
                        //const data = await res.json();

                        return _context3.abrupt("return", { path: path });

                    case 4:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function (_x2) {
        return _ref6.apply(this, arguments);
    };
}();
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Game, "Game", "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/game.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/pages/game.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/game")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.ce47aaf475f144823a7b.hot-update.js.map
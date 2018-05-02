webpackHotUpdate(4,{

/***/ "./components/allCards.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardChar__ = __webpack_require__("./components/cardChar.js");
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/allCards.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AllCards = function (_React$Component) {
    _inherits(AllCards, _React$Component);

    function AllCards(props) {
        _classCallCheck(this, AllCards);

        var _this = _possibleConstructorReturn(this, (AllCards.__proto__ || Object.getPrototypeOf(AllCards)).call(this, props));

        _this.slide = {
            num: 0
        };

        _this.slideRight = _this.slideRight.bind(_this);
        _this.slideLeft = _this.slideLeft.bind(_this);
        return _this;
    }

    _createClass(AllCards, [{
        key: "slideRight",
        value: function slideRight() {
            var _this2 = this;

            var parentWidth = this.list1.parentElement.offsetWidth;
            var listWidth = this.list1.scrollWidth;
            var widthTranslated = parentWidth * this.slide.num + Math.round(parentWidth / 2);

            if (widthTranslated > listWidth) return;else this.slide.num++;

            Array.from(document.getElementsByClassName("game-content-list")).forEach(function (element) {
                element.style.transform = "translateX(-" + _this2.slide.num * 100 + "%)";
            });
        }
    }, {
        key: "slideLeft",
        value: function slideLeft() {
            var _this3 = this;

            this.slide.num--;
            Array.from(document.getElementsByClassName("game-content-list")).forEach(function (element) {
                element.style.transform = "translateX(-" + _this3.slide.num * 100 + "%)";
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                characters = _props.characters,
                onPontuation = _props.onPontuation,
                onGetDetail = _props.onGetDetail,
                finish = _props.finish;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "nav",
                { className: "game-content", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { onClick: this.slideLeft, className: "game-content-button", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/slide-left.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "game-content-container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { id: "list-chars", className: "game-content-list", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43
                            }
                        },
                        characters.length ? characters.map(function (character, i) {
                            return i % 2 == 0 ? "" : finish ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { finished: true, onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                }
                            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            });
                        }) : ""
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { id: "list-chars-1", ref: function ref(list1) {
                                return _this4.list1 = list1;
                            }, className: "game-content-list", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55
                            }
                        },
                        characters.length ? characters.map(function (character, i) {
                            return i % 2 == 1 ? "" : finish ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { finished: true, onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 62
                                }
                            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 63
                                }
                            });
                        }) : ""
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { onClick: this.slideRight, className: "game-content-button", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/slide-right.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        }
                    })
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return AllCards;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = AllCards;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AllCards, "AllCards", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/allCards.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/allCards.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c2c32484dde509a986bc.hot-update.js.map
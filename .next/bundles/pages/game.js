module.exports =

        __NEXT_REGISTER_PAGE('/game', function() {
          var comp = 
      webpackJsonp([4],{

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
            var widthTranslated = parentWidth * this.slide.num + parentWidth;

            if (widthTranslated > listWidth) return;else this.slide.num++;

            Array.from(document.getElementsByClassName("game-content-list")).forEach(function (element) {
                element.style.transform = "translateX(-" + _this2.slide.num * 100 + "%)";
            });
        }
    }, {
        key: "slideLeft",
        value: function slideLeft() {
            var _this3 = this;

            if (this.slide.num > 0) {
                this.slide.num--;
                Array.from(document.getElementsByClassName("game-content-list")).forEach(function (element) {
                    element.style.transform = "translateX(-" + _this3.slide.num * 100 + "%)";
                });
            }
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
                        lineNumber: 42
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { onClick: this.slideLeft, className: "game-content-button", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/slide-left.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "game-content-container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { id: "list-chars", className: "game-content-list", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                            }
                        },
                        characters.length ? characters.map(function (character, i) {
                            return i % 2 == 0 ? "" : finish ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { finished: true, onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                }
                            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 53
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
                                lineNumber: 57
                            }
                        },
                        characters.length ? characters.map(function (character, i) {
                            return i % 2 == 1 ? "" : finish ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { finished: true, onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 64
                                }
                            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cardChar__["a" /* default */], { onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 65
                                }
                            });
                        }) : ""
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "button",
                    { onClick: this.slideRight, className: "game-content-button", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/slide-right.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
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

/***/ }),

/***/ "./components/cardChar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/cardChar.js";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardChar = function (_React$Component) {
    _inherits(CardChar, _React$Component);

    function CardChar(props) {
        _classCallCheck(this, CardChar);

        var _this = _possibleConstructorReturn(this, (CardChar.__proto__ || Object.getPrototypeOf(CardChar)).call(this, props));

        _this.state = {
            showInput: false,
            name: null,
            finished: false,
            correct: false,
            points: 10

            // Datails to get in api
        };_this.films = [];
        _this.species = [];
        _this.vehicles = [];
        _this.starships = [];
        _this.homeworld = [];

        // class methods
        _this.showInput = _this.showInput.bind(_this);
        _this.showDetail = _this.showDetail.bind(_this);
        _this.confirmName = _this.confirmName.bind(_this);
        _this.getName = _this.getName.bind(_this);
        return _this;
    }

    // Change state to finish when receive props


    _createClass(CardChar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            if (this.props.finished) this.setState({ finished: this.props.finished });
        }

        // Show input when click on button with the pencil image

    }, {
        key: "showInput",
        value: function showInput() {
            this.setState({ showInput: !this.state.showInput });
        }

        // Show detail modal when click on button with the info image

    }, {
        key: "showDetail",
        value: function showDetail() {
            var _props = this.props,
                onGetDetail = _props.onGetDetail,
                info = _props.info;


            this.state.points = 5;

            // Call prop function to open modal with details
            onGetDetail(_extends({}, info));
        }

        // submit the name the user entered

    }, {
        key: "confirmName",
        value: function confirmName() {
            var _state = this.state,
                name = _state.name,
                points = _state.points;

            // Compare name entered with the character name in lowercase

            if (name.toLowerCase() == this.props.info.name.toLowerCase()) {
                this.props.onPontuation(points);
                this.setState({ finished: true, correct: true });
            } else this.setState({ finished: true, correct: false });
        }

        // Get name entered while user types

    }, {
        key: "getName",
        value: function getName(e) {
            // If press enter confirm name
            if (e.keyCode == 13) this.confirmName();

            // Save name entered in state 
            this.state.name = e.target.value;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                showInput = _state2.showInput,
                finished = _state2.finished,
                correct = _state2.correct,
                name = _state2.name;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "game-content-list-item " + (finished ? correct ? "correct" : "wrong" : ""), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "figure",
                    { className: "game-content-list-item-pic", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "game-content-list-item-pic-img", src: this.props.info.photo, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        }
                    },
                    finished ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 81
                            }
                        },
                        name
                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "footer",
                        { className: "game-content-list-item-footer", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 82
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "game-content-list-item-footer-container " + (showInput ? "show-input" : ""), __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 83
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "game-content-list-item-controllers", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 84
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "button",
                                    { onClick: this.showInput, title: "Who am I?", className: "game-content-list-item-button game-content-list-item-button-show", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 85
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/pencil.svg", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 85
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "button",
                                    { onClick: this.showDetail, title: "Character Details", className: "game-content-list-item-button game-content-list-item-button-response", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 86
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/info.svg", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 86
                                        }
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "div",
                                { className: "game-content-list-item-name", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 88
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "figure",
                                    { onClick: function onClick() {
                                            return _this2.setState({ showInput: false });
                                        }, title: "Back", className: "game-content-list-item-name-back", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 89
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "game-content-list-item-name-back-img", src: "/static/img/slide-left.svg", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 90
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { onKeyUp: this.getName, type: "text", className: "game-content-list-item-name-input", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 92
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "button",
                                    { title: "Send Response", onClick: this.confirmName, className: "game-content-list-item-name-send", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 93
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "/static/img/send.svg", __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 93
                                        }
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return CardChar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = CardChar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(CardChar, "CardChar", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/cardChar.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/cardChar.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/countDown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/countDown.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paddingZero = function paddingZero(num) {
    return String(num).length > 1 ? num : "0" + num;
};

var formatTime = function formatTime(sec) {
    var minutes = Math.floor(sec / 60);
    var seconds = Math.abs(minutes * 60 - sec);
    return paddingZero(minutes) + ":" + paddingZero(seconds);
};

var CountDown = function (_React$Component) {
    _inherits(CountDown, _React$Component);

    function CountDown(props) {
        _classCallCheck(this, CountDown);

        var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, props));

        _this.state = {
            time: props.time,
            timeFormated: formatTime(props.time)
        };
        return _this;
    }

    _createClass(CountDown, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            var currentTime = this.state.time;

            // Set interval 1 second
            var timeInterval = setInterval(function () {
                currentTime -= 1;
                _this2.setState({ time: currentTime, timeFormated: formatTime(currentTime) });

                // When time reach 0 clearinterval
                if (!currentTime) {
                    clearInterval(timeInterval);
                    _this2.props.finish();
                }
            }, 1000);
        }
    }, {
        key: "render",
        value: function render() {
            var timeFormated = this.state.timeFormated;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "game-header-counter", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "game-header-counter-img", src: "/static/img/star-wars.svg", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "span",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        }
                    },
                    timeFormated
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return CountDown;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = CountDown;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(paddingZero, "paddingZero", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/countDown.js");
    reactHotLoader.register(formatTime, "formatTime", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/countDown.js");
    reactHotLoader.register(CountDown, "CountDown", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/countDown.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/countDown.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/detailChar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/detailChar.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DetailChar = function (_React$Component) {
    _inherits(DetailChar, _React$Component);

    function DetailChar(props) {
        _classCallCheck(this, DetailChar);

        var _this = _possibleConstructorReturn(this, (DetailChar.__proto__ || Object.getPrototypeOf(DetailChar)).call(this, props));

        _this.state = {
            show: false,
            foto: props.info.photo
        };

        _this.close = _this.close.bind(_this);
        return _this;
    }

    _createClass(DetailChar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(next) {
            if (next.info.name != this.props.info.name && !this.state.show) this.setState({ show: true });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({ show: true });
        }
    }, {
        key: "close",
        value: function close() {
            this.setState({ show: false });
        }
    }, {
        key: "render",
        value: function render() {
            var _props$info = this.props.info,
                name = _props$info.name,
                height = _props$info.height,
                mass = _props$info.mass,
                hair_color = _props$info.hair_color,
                skin_color = _props$info.skin_color,
                eye_color = _props$info.eye_color,
                birth_year = _props$info.birth_year,
                gender = _props$info.gender,
                homeworld = _props$info.homeworld,
                films = _props$info.films,
                species = _props$info.species,
                vehicles = _props$info.vehicles,
                starships = _props$info.starships,
                photo = _props$info.photo;
            var show = this.state.show;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "section",
                { className: "detail " + (show ? "fadeIn" : "fadeOut"), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "detail-content", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { onClick: this.close, className: "detail-content-close", src: "/static/img/close-button.svg", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h2",
                        { className: "detail-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        },
                        "Details"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "div",
                        { className: "detail-info", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "figure",
                            { className: "detail-photo", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 38
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "detail-photo-img", src: photo, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "div",
                            { className: "detail-text", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 42
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 42
                                        }
                                    },
                                    "Birth Year:"
                                ),
                                " ",
                                birth_year
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 43
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 43
                                        }
                                    },
                                    "Eye Color:"
                                ),
                                " ",
                                eye_color
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 44
                                        }
                                    },
                                    "Hair color:"
                                ),
                                " ",
                                hair_color
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 45
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 45
                                        }
                                    },
                                    "Gender:"
                                ),
                                " ",
                                gender
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 46
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 46
                                        }
                                    },
                                    "Height:"
                                ),
                                " ",
                                height
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 47
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 47
                                        }
                                    },
                                    "Mass:"
                                ),
                                " ",
                                mass
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 48
                                        }
                                    },
                                    "Skin color:"
                                ),
                                " ",
                                skin_color
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 49
                                        }
                                    },
                                    "Films"
                                ),
                                ": ",
                                films
                            ),
                            homeworld ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 52
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 52
                                        }
                                    },
                                    "Homeworld:"
                                ),
                                " ",
                                homeworld
                            ) : "",
                            species ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 56
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 56
                                        }
                                    },
                                    "Specie:"
                                ),
                                " ",
                                species
                            ) : "",
                            vehicles ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 60
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 60
                                        }
                                    },
                                    "Vehicles:"
                                ),
                                " ",
                                vehicles
                            ) : "",
                            starships ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "p",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 64
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "b",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 64
                                        }
                                    },
                                    "Starships:"
                                ),
                                " ",
                                starships
                            ) : ""
                        )
                    )
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return DetailChar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = DetailChar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(DetailChar, "DetailChar", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/detailChar.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/detailChar.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/finishGame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);

var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/finishGame.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FinishGame = function (_React$Component) {
    _inherits(FinishGame, _React$Component);

    function FinishGame(props) {
        _classCallCheck(this, FinishGame);

        var _this = _possibleConstructorReturn(this, (FinishGame.__proto__ || Object.getPrototypeOf(FinishGame)).call(this, props));

        _this.state = {
            error: false,
            msg: null,
            name: null,
            email: null
        };

        if (localStorage.getItem("userInfo") != undefined) {
            var _JSON$parse = JSON.parse(localStorage.getItem("userInfo")),
                email = _JSON$parse.email,
                user = _JSON$parse.user;

            _this.state.name = user;
            _this.state.email = email;
        }

        _this.savePontuation = _this.savePontuation.bind(_this);
        return _this;
    }

    // Function called when user click in save pontuation


    _createClass(FinishGame, [{
        key: "savePontuation",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var url, data, options, res, _ref2, success, error;

                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.email.checkValidity() && this.user.checkValidity())) {
                                    _context.next = 23;
                                    break;
                                }

                                _context.prev = 1;

                                // Url api to save data in database
                                url = location.href.replace("/game", "");

                                // Stringify data posted by user

                                data = JSON.stringify({
                                    user: this.user.value,
                                    email: this.email.value,
                                    pontuation: this.props.points
                                });

                                // Fetch options

                                options = {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: data

                                    // Save in local stora
                                };
                                localStorage.setItem("userInfo", data);

                                // Send data to api
                                _context.next = 8;
                                return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url + "/api/save", options);

                            case 8:
                                res = _context.sent;
                                _context.next = 11;
                                return res.json();

                            case 11:
                                _ref2 = _context.sent;
                                success = _ref2.success;
                                error = _ref2.error;


                                if (success) location = "/score";else this.setState({ error: true, msg: "An error has ocurred. Try again." });
                                _context.next = 21;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context["catch"](1);

                                console.error(_context.t0);
                                this.setState({ error: true, msg: "An error has ocurred. Try again." });

                            case 21:
                                _context.next = 24;
                                break;

                            case 23:
                                this.setState({ error: true, msg: "Fill the fields correctly" });

                            case 24:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 17]]);
            }));

            function savePontuation() {
                return _ref.apply(this, arguments);
            }

            return savePontuation;
        }()
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var points = this.props.points;
            var _state = this.state,
                error = _state.error,
                msg = _state.msg,
                name = _state.name,
                email = _state.email;

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "section",
                { className: "finish", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    { className: "finish-content", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h2",
                        { className: "finish-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        "Your pontuation"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { className: "finish-point", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        points
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "form",
                        { className: "finish-form", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            { className: "finish-form-content", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 74
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "label",
                                { className: "finish-form-label", htmlFor: "name", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 75
                                    }
                                },
                                "Name: "
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { className: "finish-form-input", defaultValue: name ? name : "", required: true, pattern: "[A-Za-z\xC0-\xFA ]+", ref: function ref(user) {
                                    _this2.user = user;
                                }, id: "name", type: "text", autoFocus: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "p",
                            { className: "finish-form-content", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                "label",
                                { className: "finish-form-label", htmlFor: "email", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 81
                                    }
                                },
                                "Email: "
                            ),
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { className: "finish-form-input", defaultValue: email ? email : "", required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", ref: function ref(email) {
                                    _this2.email = email;
                                }, id: "email", type: "email", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 82
                                }
                            })
                        )
                    ),
                    error ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { className: "finish-error", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                            }
                        },
                        msg
                    ) : "",
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "button",
                        { className: "finish-save", onClick: this.savePontuation, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                            }
                        },
                        "Save"
                    )
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return FinishGame;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

//<img className="finish-close" src="/static/img/close-button.svg" />


var _default = FinishGame;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(FinishGame, "FinishGame", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/finishGame.js");
    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/finishGame.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/menu.js";


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default() {
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
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, "default", "/home/jefferson/Documentos/Programacao/javascript/starquiz/components/menu.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
        _this.getDetail = _this.getDetail.bind(_this);
        _this.addPoint = _this.addPoint.bind(_this);
        _this.finishTime = _this.finishTime.bind(_this);
        return _this;
    }

    _createClass(Game, [{
        key: "componentWillMount",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var path, res, characters;
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
                                characters = _context.sent;


                                characters = characters.map(function (d) {
                                    return _extends({}, d, { photo: "/static/img/chars/" + (d.name == "Darth Maul" ? d.name.split(" ")[1].replaceSpecialChars().charCodePlus() : d.name.split(" ")[0].replaceSpecialChars().charCodePlus()) + ".jpeg" });
                                });

                                this.setState({ characters: characters, started: true, loading: false });

                            case 9:
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
                        lineNumber: 92
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_menu__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "header",
                    { className: "game-header", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "h1",
                        { className: "game-header-title", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        },
                        "Star",
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        }),
                        "Quiz"
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { className: "game-header-points", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        },
                        points
                    ),
                    started ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_countDown__["a" /* default */], { finish: this.finishTime, time: 120, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        }
                    }) : "",
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "p",
                        { id: "text", className: "game-header-txt", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 102
                            }
                        },
                        "Do you really know about Star Wars? Test it now!"
                    )
                ),
                finish ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_allCards__["a" /* default */], { finish: true, characters: characters, onPontuation: this.addPoint, onGetDetail: this.getDetail, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                    }
                }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_allCards__["a" /* default */], { characters: characters, onPontuation: this.addPoint, onGetDetail: this.getDetail, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                    }
                }),
                info ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_detailChar__["a" /* default */], { info: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                    }
                }) : "",
                finish ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_finishGame__["a" /* default */], { points: points, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                    }
                }) : "",
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    { className: "loading " + (loading ? "fadeIn" : "fadeOut"), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "div",
                        { className: "loading-content", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 116
                            }
                        },
                        loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "h2",
                            { className: "loading-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 119
                                }
                            },
                            "Preparing the game. Wait..."
                        ) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            "h2",
                            { className: "loading-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 120
                                }
                            },
                            "Start"
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { className: "loading-img", src: "/static/img/star-wars.svg", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 122
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "footer",
                    { className: "footer", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                        }
                    },
                    "Made by \xA9 Jefferson Barbosa"
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", { className: "game-bg", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(_ref3) {
        var req = _ref3.req;
        var host, protocol, path;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        host = req.headers.host;
                        protocol = req.headers.referer.indexOf("https") > -1 ? "https://" : "http://";
                        path = protocol + host;
                        return _context2.abrupt("return", { path: path });

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x) {
        return _ref4.apply(this, arguments);
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/game.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=game.js.map
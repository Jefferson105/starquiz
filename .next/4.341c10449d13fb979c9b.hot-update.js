webpackHotUpdate(4,{

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

/***/ })

})
//# sourceMappingURL=4.341c10449d13fb979c9b.hot-update.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "nav",
        { className: "menu" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "ul",
            { className: "menu-list" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "menu-list-item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/" },
                    "Home"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "menu-list-item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/game" },
                    "Game"
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "li",
                { className: "menu-list-item" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/score" },
                    "Score"
                )
            )
        )
    );
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./pages/scss/style.scss
var style = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(3);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./components/countDown.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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

var countDown_CountDown = function (_React$Component) {
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

            return external__react__default.a.createElement(
                "div",
                { className: "game-header-counter" },
                external__react__default.a.createElement("img", { className: "game-header-counter-img", src: "/static/img/star-wars.svg" }),
                external__react__default.a.createElement(
                    "span",
                    null,
                    timeFormated
                )
            );
        }
    }]);

    return CountDown;
}(external__react__default.a.Component);

/* harmony default export */ var countDown = (countDown_CountDown);
// CONCATENATED MODULE: ./components/cardChar.js


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cardChar__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function cardChar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cardChar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function cardChar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardChar_CardChar = function (_React$Component) {
    cardChar__inherits(CardChar, _React$Component);

    function CardChar(props) {
        cardChar__classCallCheck(this, CardChar);

        var _this = cardChar__possibleConstructorReturn(this, (CardChar.__proto__ || Object.getPrototypeOf(CardChar)).call(this, props));

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
        _this.getDetais = _this.getDetais.bind(_this);

        // Call function to get all details
        _this.getDetais(["films", "species", "vehicles", "starships", "homeworld"]);
        return _this;
    }

    // Change state to finish when receive props


    cardChar__createClass(CardChar, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
            if (this.props.finished) this.setState({ finished: this.props.finished });
        }

        // Get all remain details

    }, {
        key: "getDetais",
        value: function getDetais(fields) {
            var _this2 = this;

            fields.forEach(function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(field) {
                    var details, allDetails, detail, i, data, res;
                    return regenerator__default.a.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    details = _this2.props.info[field];
                                    allDetails = null;
                                    detail = null;
                                    i = 0;

                                case 4:
                                    if (!(i < details.length)) {
                                        _context.next = 34;
                                        break;
                                    }

                                    _context.prev = 5;
                                    _context.next = 8;
                                    return fetch(details[i]);

                                case 8:
                                    data = _context.sent;
                                    _context.next = 11;
                                    return data.json();

                                case 11:
                                    res = _context.sent;
                                    _context.t0 = field;
                                    _context.next = _context.t0 === "films" ? 15 : _context.t0 === "species" ? 17 : _context.t0 === "vehicles" ? 19 : _context.t0 === "starships" ? 21 : _context.t0 === "homeworld" ? 23 : 25;
                                    break;

                                case 15:
                                    detail = res.title;
                                    return _context.abrupt("break", 25);

                                case 17:
                                    detail = res.name;
                                    return _context.abrupt("break", 25);

                                case 19:
                                    detail = res.name;
                                    return _context.abrupt("break", 25);

                                case 21:
                                    detail = res.name;
                                    return _context.abrupt("break", 25);

                                case 23:
                                    detail = res.name;
                                    return _context.abrupt("break", 25);

                                case 25:

                                    if (allDetails) allDetails += ", " + detail;else allDetails = detail;

                                    _context.next = 31;
                                    break;

                                case 28:
                                    _context.prev = 28;
                                    _context.t1 = _context["catch"](5);

                                    console.log(_context.t1);

                                case 31:
                                    i++;
                                    _context.next = 4;
                                    break;

                                case 34:

                                    _this2[field] = allDetails;

                                case 35:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2, [[5, 28]]);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }());
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

            var vehicles = this.vehicles,
                species = this.species,
                films = this.films,
                starships = this.starships,
                homeworld = this.homeworld;

            // Call prop function to open modal with details

            onGetDetail(_extends({}, info, { vehicles: vehicles, species: species, films: films, starships: starships, homeworld: homeworld }));
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
            var _this3 = this;

            var _state2 = this.state,
                showInput = _state2.showInput,
                finished = _state2.finished,
                correct = _state2.correct,
                name = _state2.name;

            return external__react__default.a.createElement(
                "li",
                { className: "game-content-list-item " + (finished ? correct ? "correct" : "wrong" : "") },
                external__react__default.a.createElement(
                    "figure",
                    { className: "game-content-list-item-pic" },
                    external__react__default.a.createElement("img", { className: "game-content-list-item-pic-img", src: this.props.info.photo })
                ),
                external__react__default.a.createElement(
                    external__react__default.a.Fragment,
                    null,
                    finished ? external__react__default.a.createElement(
                        "p",
                        null,
                        name
                    ) : external__react__default.a.createElement(
                        "footer",
                        { className: "game-content-list-item-footer" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "game-content-list-item-footer-container " + (showInput ? "show-input" : "") },
                            external__react__default.a.createElement(
                                "div",
                                { className: "game-content-list-item-controllers" },
                                external__react__default.a.createElement(
                                    "button",
                                    { onClick: this.showInput, title: "Who am I?", className: "game-content-list-item-button game-content-list-item-button-show" },
                                    external__react__default.a.createElement("img", { src: "/static/img/pencil.svg" })
                                ),
                                external__react__default.a.createElement(
                                    "button",
                                    { onClick: this.showDetail, title: "Character Details", className: "game-content-list-item-button game-content-list-item-button-response" },
                                    external__react__default.a.createElement("img", { src: "/static/img/info.svg" })
                                )
                            ),
                            external__react__default.a.createElement(
                                "div",
                                { className: "game-content-list-item-name" },
                                external__react__default.a.createElement(
                                    "figure",
                                    { onClick: function onClick() {
                                            return _this3.setState({ showInput: false });
                                        }, title: "Back", className: "game-content-list-item-name-back" },
                                    external__react__default.a.createElement("img", { className: "game-content-list-item-name-back-img", src: "/static/img/slide-left.svg" })
                                ),
                                external__react__default.a.createElement("input", { onKeyUp: this.getName, type: "text", className: "game-content-list-item-name-input" }),
                                external__react__default.a.createElement(
                                    "button",
                                    { title: "Send Response", onClick: this.confirmName, className: "game-content-list-item-name-send" },
                                    external__react__default.a.createElement("img", { src: "/static/img/send.svg" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CardChar;
}(external__react__default.a.Component);

/* harmony default export */ var cardChar = (cardChar_CardChar);
// CONCATENATED MODULE: ./components/allCards.js
var allCards__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function allCards__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function allCards__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function allCards__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var allCards_AllCards = function (_React$Component) {
    allCards__inherits(AllCards, _React$Component);

    function AllCards(props) {
        allCards__classCallCheck(this, AllCards);

        var _this = allCards__possibleConstructorReturn(this, (AllCards.__proto__ || Object.getPrototypeOf(AllCards)).call(this, props));

        _this.slide = {
            num: 0
        };

        _this.slideRight = _this.slideRight.bind(_this);
        _this.slideLeft = _this.slideLeft.bind(_this);
        return _this;
    }

    allCards__createClass(AllCards, [{
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

            return external__react__default.a.createElement(
                "nav",
                { className: "game-content" },
                external__react__default.a.createElement(
                    "button",
                    { onClick: this.slideLeft, className: "game-content-button" },
                    external__react__default.a.createElement("img", { src: "/static/img/slide-left.svg" })
                ),
                external__react__default.a.createElement(
                    "div",
                    { className: "game-content-container" },
                    external__react__default.a.createElement(
                        "ul",
                        { id: "list-chars", className: "game-content-list" },
                        characters.length ? characters.map(function (character, i) {
                            return i % 2 == 0 ? "" : finish ? external__react__default.a.createElement(cardChar, { finished: true, onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i }) : external__react__default.a.createElement(cardChar, { onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i });
                        }) : ""
                    ),
                    external__react__default.a.createElement(
                        "ul",
                        { id: "list-chars-1", ref: function ref(list1) {
                                return _this4.list1 = list1;
                            }, className: "game-content-list" },
                        characters.length ? characters.map(function (character, i) {
                            return i % 2 == 1 ? "" : finish ? external__react__default.a.createElement(cardChar, { finished: true, onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i }) : external__react__default.a.createElement(cardChar, { onPontuation: onPontuation, onGetDetail: onGetDetail, info: character, key: i });
                        }) : ""
                    )
                ),
                external__react__default.a.createElement(
                    "button",
                    { onClick: this.slideRight, className: "game-content-button" },
                    external__react__default.a.createElement("img", { src: "/static/img/slide-right.svg" })
                )
            );
        }
    }]);

    return AllCards;
}(external__react__default.a.Component);

/* harmony default export */ var allCards = (allCards_AllCards);
// CONCATENATED MODULE: ./components/detailChar.js
var detailChar__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function detailChar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function detailChar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function detailChar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var detailChar_DetailChar = function (_React$Component) {
    detailChar__inherits(DetailChar, _React$Component);

    function DetailChar(props) {
        detailChar__classCallCheck(this, DetailChar);

        var _this = detailChar__possibleConstructorReturn(this, (DetailChar.__proto__ || Object.getPrototypeOf(DetailChar)).call(this, props));

        _this.state = {
            show: false,
            foto: props.info.photo
        };

        _this.close = _this.close.bind(_this);
        return _this;
    }

    detailChar__createClass(DetailChar, [{
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

            return external__react__default.a.createElement(
                "section",
                { className: "detail " + (show ? "fadeIn" : "fadeOut") },
                external__react__default.a.createElement(
                    "div",
                    { className: "detail-content" },
                    external__react__default.a.createElement("img", { onClick: this.close, className: "detail-content-close", src: "/static/img/close-button.svg" }),
                    external__react__default.a.createElement(
                        "h2",
                        { className: "detail-title" },
                        "Details"
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "detail-info" },
                        external__react__default.a.createElement(
                            "figure",
                            { className: "detail-photo" },
                            external__react__default.a.createElement("img", { className: "detail-photo-img", src: photo })
                        ),
                        external__react__default.a.createElement(
                            "div",
                            { className: "detail-text" },
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Birth Year:"
                                ),
                                " ",
                                birth_year
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Eye Color:"
                                ),
                                " ",
                                eye_color
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Hair color:"
                                ),
                                " ",
                                hair_color
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Gender:"
                                ),
                                " ",
                                gender
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Height:"
                                ),
                                " ",
                                height
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Mass:"
                                ),
                                " ",
                                mass
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Skin color:"
                                ),
                                " ",
                                skin_color
                            ),
                            external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Films"
                                ),
                                ": ",
                                films
                            ),
                            homeworld ? external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Homeworld:"
                                ),
                                " ",
                                homeworld
                            ) : "",
                            species ? external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Specie:"
                                ),
                                " ",
                                species
                            ) : "",
                            vehicles ? external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
                                    "Vehicles:"
                                ),
                                " ",
                                vehicles
                            ) : "",
                            starships ? external__react__default.a.createElement(
                                "p",
                                null,
                                external__react__default.a.createElement(
                                    "b",
                                    null,
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
    }]);

    return DetailChar;
}(external__react__default.a.Component);

/* harmony default export */ var detailChar = (detailChar_DetailChar);
// CONCATENATED MODULE: ./components/finishGame.js


var finishGame__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function finishGame__asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function finishGame__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function finishGame__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function finishGame__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var finishGame_FinishGame = function (_React$Component) {
    finishGame__inherits(FinishGame, _React$Component);

    function FinishGame(props) {
        finishGame__classCallCheck(this, FinishGame);

        var _this = finishGame__possibleConstructorReturn(this, (FinishGame.__proto__ || Object.getPrototypeOf(FinishGame)).call(this, props));

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


    finishGame__createClass(FinishGame, [{
        key: "savePontuation",
        value: function () {
            var _ref = finishGame__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
                var url, data, options, res, _ref2, success, error;

                return regenerator__default.a.wrap(function _callee$(_context) {
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
                                return external__isomorphic_unfetch__default()(url + "/api/save", options);

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

            return external__react__default.a.createElement(
                "section",
                { className: "finish" },
                external__react__default.a.createElement(
                    "div",
                    { className: "finish-content" },
                    external__react__default.a.createElement(
                        "h2",
                        { className: "finish-title" },
                        "Your pontuation"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        { className: "finish-point" },
                        points
                    ),
                    external__react__default.a.createElement(
                        "form",
                        { className: "finish-form" },
                        external__react__default.a.createElement(
                            "p",
                            { className: "finish-form-content" },
                            external__react__default.a.createElement(
                                "label",
                                { className: "finish-form-label", htmlFor: "name" },
                                "Name: "
                            ),
                            external__react__default.a.createElement("input", { className: "finish-form-input", defaultValue: name ? name : "", required: true, pattern: "[A-Za-z\xC0-\xFA ]+", ref: function ref(user) {
                                    _this2.user = user;
                                }, id: "name", type: "text", autoFocus: true })
                        ),
                        external__react__default.a.createElement(
                            "p",
                            { className: "finish-form-content" },
                            external__react__default.a.createElement(
                                "label",
                                { className: "finish-form-label", htmlFor: "email" },
                                "Email: "
                            ),
                            external__react__default.a.createElement("input", { className: "finish-form-input", defaultValue: email ? email : "", required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$", ref: function ref(email) {
                                    _this2.email = email;
                                }, id: "email", type: "email" })
                        )
                    ),
                    error ? external__react__default.a.createElement(
                        "p",
                        { className: "finish-error" },
                        msg
                    ) : "",
                    external__react__default.a.createElement(
                        "button",
                        { className: "finish-save", onClick: this.savePontuation },
                        "Save"
                    )
                )
            );
        }
    }]);

    return FinishGame;
}(external__react__default.a.Component);

//<img className="finish-close" src="/static/img/close-button.svg" />


/* harmony default export */ var finishGame = (finishGame_FinishGame);
// EXTERNAL MODULE: ./components/menu.js
var menu = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/game.js


var game__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var game__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function game__asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function game__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function game__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function game__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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









var game_Game = function (_React$Component) {
    game__inherits(Game, _React$Component);

    function Game(props) {
        game__classCallCheck(this, Game);

        // Map image character
        var _this = game__possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

        var results = props.data ? props.data.results : [];
        if (results.length) results = results.map(function (r) {
            return game__extends({}, r, { photo: "/static/img/chars/" + r.name.split(" ")[0].replaceSpecialChars().charCodePlus() + ".jpeg" });
        });

        _this.state = {
            characters: results,
            info: null,
            points: 0,
            finish: false,
            started: false,
            loading: true
        };

        _this.getCharsPagination = _this.getCharsPagination.bind(_this);
        _this.getDetail = _this.getDetail.bind(_this);
        _this.addPoint = _this.addPoint.bind(_this);
        _this.finishTime = _this.finishTime.bind(_this);

        if (props.data) _this.getCharsPagination(props.data.next);
        return _this;
    }

    game__createClass(Game, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.setState({ started: true, loading: false });
            }, 10000);
        }

        // Get chars in pagination

    }, {
        key: "getCharsPagination",
        value: function () {
            var _ref2 = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee(url) {
                var res, _ref3, next, results;

                return regenerator__default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return external__isomorphic_unfetch__default()(url);

                            case 3:
                                res = _context.sent;
                                _context.next = 6;
                                return res.json();

                            case 6:
                                _ref3 = _context.sent;
                                next = _ref3.next;
                                results = _ref3.results;


                                // Map image character
                                if (results.length) results = results.map(function (r) {
                                    return game__extends({}, r, { photo: "/static/img/chars/" + r.name.split(" ")[0].replaceSpecialChars().charCodePlus() + ".jpeg" });
                                });

                                if (next) this.getCharsPagination(next);

                                this.setState({ characters: [].concat(_toConsumableArray(this.state.characters), _toConsumableArray(results)) });
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context["catch"](0);

                                console.error(_context.t0);

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 14]]);
            }));

            function getCharsPagination(_x) {
                return _ref2.apply(this, arguments);
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

            return external__react__default.a.createElement(
                "section",
                { className: "game" },
                external__react__default.a.createElement(menu["a" /* default */], null),
                external__react__default.a.createElement(
                    "header",
                    { className: "game-header" },
                    external__react__default.a.createElement(
                        "h1",
                        { className: "game-header-title" },
                        "Star",
                        external__react__default.a.createElement("br", null),
                        "Quiz"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        { className: "game-header-points" },
                        points
                    ),
                    started ? external__react__default.a.createElement(countDown, { finish: this.finishTime, time: 120 }) : "",
                    external__react__default.a.createElement(
                        "p",
                        { id: "text", className: "game-header-txt" },
                        "Do you really know about Star Wars? Test it now!"
                    )
                ),
                finish ? external__react__default.a.createElement(allCards, { finish: true, characters: characters, onPontuation: this.addPoint, onGetDetail: this.getDetail }) : external__react__default.a.createElement(allCards, { characters: characters, onPontuation: this.addPoint, onGetDetail: this.getDetail }),
                info ? external__react__default.a.createElement(detailChar, { info: info }) : "",
                finish ? external__react__default.a.createElement(finishGame, { points: points }) : "",
                external__react__default.a.createElement(
                    "div",
                    { className: "loading " + (loading ? "fadeIn" : "fadeOut") },
                    external__react__default.a.createElement(
                        "div",
                        { className: "loading-content" },
                        loading ? external__react__default.a.createElement(
                            "h2",
                            { className: "loading-title" },
                            "Preparing the game. Wait..."
                        ) : external__react__default.a.createElement(
                            "h2",
                            { className: "loading-title" },
                            "Start"
                        ),
                        external__react__default.a.createElement("img", { className: "loading-img", src: "/static/img/star-wars.svg" })
                    )
                ),
                external__react__default.a.createElement(
                    "footer",
                    { className: "footer" },
                    "Made by \xA9 Jefferson Barbosa"
                ),
                external__react__default.a.createElement("div", { className: "game-bg" })
            );
        }
    }]);

    return Game;
}(external__react__default.a.Component);

/* harmony default export */ var game = __webpack_exports__["default"] = (game_Game);


game_Game.getInitialProps = game__asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2() {
    var res, data;
    return regenerator__default.a.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return external__isomorphic_unfetch__default()("https://swapi.co/api/people/");

                case 2:
                    res = _context2.sent;
                    _context2.next = 5;
                    return res.json();

                case 5:
                    data = _context2.sent;
                    return _context2.abrupt("return", { data: data });

                case 7:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee2, this);
}));

/***/ })
/******/ ]);
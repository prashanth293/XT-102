/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _controller = __webpack_require__(1);

	var _controller2 = _interopRequireDefault(_controller);

	var _model = __webpack_require__(2);

	var _model2 = _interopRequireDefault(_model);

	var _view = __webpack_require__(4);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	  var view = new _view2.default({ addmeal: document.querySelector('#addMeal'),
	    updatemeal: document.querySelector('#updateMeal'),
	    deletemeal: document.querySelector('#deleteMeal'),
	    clearall: document.querySelector('#clearall'),
	    meal: document.querySelector('#meal'),
	    amount: document.querySelector('#amount'),
	    totalcalorie: document.querySelector('#totalCalorie'),
	    maintable: document.querySelector('#maintable')

	  });
	  var controller = new _controller2.default();
	  view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(2);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.model = _model2.default;
	    }

	    _createClass(Controller, [{
	        key: "add",
	        value: function add(meal, amount) {
	            this.model.add(meal, amount);
	        }
	    }]);

	    return Controller;
	}();

	exports.default = Controller;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _listenernotify = __webpack_require__(3);

	var _listenernotify2 = _interopRequireDefault(_listenernotify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	    function Model(meal, amount, total) {
	        _classCallCheck(this, Model);

	        this.meal = meal;
	        this.amount = amount;
	        this.total = 0;
	        this.observer = new _listenernotify2.default();
	    }

	    _createClass(Model, [{
	        key: "add",
	        value: function add(meal, amount) {
	            this.meal = meal;
	            this.amount = parseInt(amount);
	            this.total += this.amount;
	            this.observer.notify(this.meal, this.amount, this.total);
	        }
	    }]);

	    return Model;
	}();

	exports.default = new Model();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	    function Observer(meal, amount, total) {
	        _classCallCheck(this, Observer);

	        this.meal = meal;
	        this.amount = amount;
	        this.total = total;
	        this.observers = [];
	    }

	    _createClass(Observer, [{
	        key: "attach",
	        value: function attach(cb) {
	            this.observers.push(cb);
	        }
	    }, {
	        key: "notify",
	        value: function notify(meal, amount, total) {
	            this.observers.forEach(function (cb) {
	                cb(meal, amount, total);
	            });
	        }
	    }]);

	    return Observer;
	}();

	exports.default = Observer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(2);

	var _model2 = _interopRequireDefault(_model);

	var _controller = __webpack_require__(1);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        this.model = _model2.default;
	        this.controller = new _controller2.default();
	    }

	    _createClass(View, [{
	        key: "initialize",
	        value: function initialize() {
	            var _this = this;

	            this.model.observer.attach(function (meal, amount, total) {
	                _this.render(meal, amount, total);
	            });

	            this.elements.addmeal.addEventListener('click', function (e) {

	                if (_this.elements.meal.value != "" && _this.elements.amount.value != "") {
	                    _this.controller.add(_this.elements.meal.value, _this.elements.amount.value);
	                    _this.elements.meal.value = "";
	                    _this.elements.amount.value = "";
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render(newmeal, newamount, newtotal) {
	            var trow = document.createElement("tr");
	            var tdata1 = document.createElement("td");
	            var tdata2 = document.createElement("td");
	            var tdata3 = document.createElement("td");
	            var editbtn = document.createElement("button");
	            editbtn.innerHTML = "edit";
	            tdata1.innerHTML = newmeal;
	            tdata2.innerHTML = newamount;
	            this.elements.totalcalorie.innerHTML = "Total calories:" + newtotal;
	            tdata3.appendChild(editbtn);
	            trow.appendChild(tdata1);
	            trow.appendChild(tdata2);
	            trow.appendChild(tdata3);
	            this.elements.maintable.appendChild(trow);
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ })
/******/ ]);
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

	var _model = __webpack_require__(3);

	var _model2 = _interopRequireDefault(_model);

	var _view = __webpack_require__(4);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	  var view = new _view2.default({ addmeal: document.querySelector('#addMeal'),
	    updatemeal: document.querySelector('#updateMeal'),
	    deletemeal: document.querySelector('#deleteMeal'),
	    backbtn: document.querySelector('#backbtn'),
	    clearall: document.querySelector('#clearall'),
	    meal: document.querySelector('#meal'),
	    amount: document.querySelector('#amount'),
	    totalcalorie: document.querySelector('#totalCalorie'),
	    maintable: document.querySelector('#maintable')

	  });
	  var controller = _controller2.default;
	  view.initialize();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mealstorage = __webpack_require__(2);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	var _model = __webpack_require__(3);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MealController = function () {
	    function MealController() {
	        _classCallCheck(this, MealController);

	        this.items = _mealstorage2.default.getMeals();
	        this.currentMeal = null;
	        this.totalCalories = 0;
	    }

	    _createClass(MealController, [{
	        key: 'addMeal',
	        value: function addMeal(name, calorie) {
	            var ID = void 0;
	            if (this.items.length > 0) {
	                ID = this.items[this.items.length - 1].id + 1;
	            } else {
	                ID = 0;
	            }
	            var newMeal = new _model2.default(ID, name, calorie);
	            this.items.push(newMeal);
	            _mealstorage2.default.storeMeal(newMeal);
	            //return newMeal;
	        }
	    }, {
	        key: 'getMealById',
	        value: function getMealById(id) {
	            var found = null;
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    found = item;
	                }
	            });
	            return found;
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(id, name, calorie) {

	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    item.meal = name;
	                    item.calorie = calorie;
	                    _mealstorage2.default.updateMeal(item);
	                }
	            });

	            //return newMeal;
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(id) {
	            this.items.forEach(function (item) {
	                if (item.id === id) {
	                    _mealstorage2.default.removeMeal(item);
	                }
	            });
	        }
	    }]);

	    return MealController;
	}();

	exports.default = new MealController();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//import Observer from '../observer/listenernotify1'
	var DataStorage = function () {
	    function DataStorage() {
	        _classCallCheck(this, DataStorage);

	        debugger;
	        //observer=new Observer();
	    }

	    _createClass(DataStorage, [{
	        key: 'storeMeal',
	        value: function storeMeal(meal) {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	                items.push(meal);
	                localStorage.setItem('meals', JSON.stringify(items));
	            }
	        }
	    }, {
	        key: 'updateMeal',
	        value: function updateMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {
	                    Object.assign(existingmeal, meal);
	                    localStorage.setItem('meals', JSON.stringify(meals));
	                }
	            });
	        }
	    }, {
	        key: 'removeMeal',
	        value: function removeMeal(meal) {
	            var meals = JSON.parse(localStorage.getItem('meals'));
	            var ids = meals.map(function (item) {
	                return item.id;
	            });
	            meals.forEach(function (existingmeal) {
	                if (existingmeal.id === meal.id) {

	                    meals.splice(ids.indexOf(meal.id), 1);
	                }
	                localStorage.setItem('meals', JSON.stringify(meals));
	            });
	        }
	    }, {
	        key: 'getMeals',
	        value: function getMeals() {
	            var items = void 0;
	            if (localStorage.getItem('meals') === null) {
	                items = [];
	            } else {
	                items = JSON.parse(localStorage.getItem('meals'));
	            }
	            return items;
	            //this.observer.notify(items);   
	        }
	    }]);

	    return DataStorage;
	}();

	exports.default = new DataStorage();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model =
	//static total=0;
	function Model(id, meal, calorie) {
	    _classCallCheck(this, Model);

	    this.id = id;
	    this.meal = meal;
	    this.calorie = calorie;
	    //total+=parseInt(this.calorie);
	};

	exports.default = Model;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	//import Model from '../model/model1'


	var _controller = __webpack_require__(1);

	var _controller2 = _interopRequireDefault(_controller);

	var _mealstorage = __webpack_require__(2);

	var _mealstorage2 = _interopRequireDefault(_mealstorage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
	    function View(elements) {
	        _classCallCheck(this, View);

	        this.elements = elements;
	        //this.model=new Model();
	        this.controller = _controller2.default;
	        this.items = _mealstorage2.default.getMeals();
	    }

	    _createClass(View, [{
	        key: 'initialize',
	        value: function initialize() {
	            var _this = this;

	            debugger;

	            this.render(this.items);

	            this.elements.addmeal.addEventListener('click', function (e) {
	                debugger;

	                if (_this.elements.meal.value != "" && _this.elements.amount.value != "") {
	                    _this.controller.addMeal(_this.elements.meal.value, _this.elements.amount.value);
	                    _this.elements.meal.value = "";
	                    _this.elements.amount.value = "";
	                }
	            });
	            this.elements.updatemeal.addEventListener('click', function (e) {

	                if (_this.elements.meal.value != "" && _this.elements.amount.value != "") {
	                    _this.controller.updateMeal(_this.elements.meal.value, _this.elements.amount.value);
	                    _this.elements.meal.value = "";
	                    _this.elements.amount.value = "";
	                }
	            });
	            // this.elements.clearall.addEventListener('click',(e)=>{
	            //     while (this.elements.maintable.hasChildNodes()) {
	            //         this.elements.maintable.removeChild(this.elements.maintable.firstChild);
	            //     }
	            //     this.model.total=0;
	            //     this.elements.totalcalorie.innerHTML="Total calories:" +this.model.total;
	            //     this.elements.meal.value="";
	            //     this.elements.amount.value="" ;        
	            // })   
	        }
	    }, {
	        key: 'render',
	        value: function render(newmeals) {
	            for (var i = 0; i <= newmeals.length; i++) {
	                debugger;

	                if (localStorage.getItem('i') === null) {
	                    continue;
	                } else {
	                    key = localStorage.key(i);
	                    newmeals = localStorage.getItem(key);
	                    var trow = document.createElement("tr");
	                    var tdata1 = document.createElement("td");
	                    var tdata2 = document.createElement("td");
	                    var tdata3 = document.createElement("td");
	                    var editbtn = document.createElement("button");
	                    editbtn.innerHTML = "edit";
	                    tdata1.innerHTML = newmeals.meal;
	                    tdata2.innerHTML = newmeals.calorie;
	                    //this.elements.totalcalorie.innerHTML="Total calories:" +newtotal;
	                    tdata3.appendChild(editbtn);
	                    trow.appendChild(tdata1);
	                    trow.appendChild(tdata2);
	                    trow.appendChild(tdata3);
	                    this.elements.maintable.appendChild(trow);
	                }
	            }
	        }
	    }]);

	    return View;
	}();

	exports.default = View;

/***/ })
/******/ ]);
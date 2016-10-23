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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var events = {
	    'component': loadComponent
	};

	var preview = document.getElementById('preview-helper');

	// Register lissener for render new component
	window.addEventListener('message', function (event) {
	    event.data && events[event.data.type].call(undefined, event.data.data);
	}, false);

	function loadComponent(component) {

	    if (typeof component.template !== 'function') {
	        return showErrorCompoennt();
	    }

	    try {
	        _reactDom2.default.render(component.template, preview);
	    } catch (e) {
	        console.log(e);
	        showErrorCompoennt();
	    }

	    return null;
	}

	function showErrorCompoennt() {
	    var PreviewUnavailable = function PreviewUnavailable(msg) {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'p',
	                null,
	                'Preview Unavailable!'
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                'Seems like you are not returning a correct React element form the story.'
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                'Could you double check that?'
	            )
	        );
	    };

	    var previewUnavailable = _react2.default.createElement(PreviewUnavailable, null);
	    _reactDom2.default.render(previewUnavailable, preview);
	}

	// If loaded in iFrame
	// Tell about it to SB
	window.parent.sb && window.parent.sb.contact();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = react;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = reactDOM;

/***/ }
/******/ ]);
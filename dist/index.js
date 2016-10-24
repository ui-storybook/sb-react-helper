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
/***/ function(module, exports) {

	'use strict';

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
	        ReactDOM.render(component.template, preview);
	    } catch (e) {
	        console.log(e);
	        showErrorCompoennt();
	    }

	    return null;
	}

	function showErrorCompoennt() {
	    var PreviewUnavailable = function PreviewUnavailable(msg) {
	        return React.createElement("div", null, "Preview Unavailable! Seems like you are not returning a correct React element form the story.");
	    };

	    var previewUnavailable = React.createElement(PreviewUnavailable, null);
	    ReactDOM.render(previewUnavailable, preview);
	}

	// If loaded in iFrame
	// Tell about it to SB
	window.parent.sb && window.parent.sb.contact();

/***/ }
/******/ ]);
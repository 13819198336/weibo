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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/vagrant/code/weibo/resources/js/bootstrap.js: Unterminated string constant (9:45)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m\u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m\u001b[36mtry\u001b[39m {let token \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mhead\u001b[33m.\u001b[39mquerySelector(\u001b[32m'meta[name=\"csrf-\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m    window\u001b[33m.\u001b[39m\u001b[33mPopper\u001b[39m \u001b[33m=\u001b[39m require(\u001b[32m'popper.js'\u001b[39m)\u001b[33m.\u001b[39m\u001b[36mdefault\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m    window\u001b[33m.\u001b[39m$ \u001b[33m=\u001b[39m window\u001b[33m.\u001b[39mjQuery \u001b[33m=\u001b[39m require(\u001b[32m'jquery'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[0m\n    at Parser._raise (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.readString (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:8374:20)\n    at Parser.getTokenFromCode (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:8032:14)\n    at Parser.nextToken (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:7559:12)\n    at Parser.next (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:7487:10)\n    at Parser.parseSubscript (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9688:12)\n    at Parser.parseSubscripts (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9625:19)\n    at Parser.parseExprSubscripts (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9608:17)\n    at Parser.parseMaybeUnary (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseVar (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11740:26)\n    at Parser.parseVarStatement (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11549:10)\n    at Parser.parseStatementContent (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11148:21)\n    at Parser.parseStatement (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseTryStatement (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11514:23)\n    at Parser.parseStatementContent (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11138:21)\n    at Parser.parseStatement (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseTopLevel (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:11012:10)\n    at Parser.parse (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:12637:10)\n    at parse (/home/vagrant/code/weibo/node_modules/@babel/parser/lib/index.js:12688:38)\n    at parser (/home/vagrant/code/weibo/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/vagrant/code/weibo/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/vagrant/code/weibo/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/vagrant/code/weibo/node_modules/@babel/core/lib/transform.js:27:41)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vagrant/code/weibo/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/vagrant/code/weibo/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
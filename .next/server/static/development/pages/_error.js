module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = url => {\n  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();\n};\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = () => nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();\n\nnext_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = () => nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    const {\n      children,\n      title\n    } = this.props;\n    return __jsx(\"div\", {\n      className: \"jsx-2855160920\"\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(\"title\", {\n      className: \"jsx-2855160920\"\n    }, title), __jsx(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width\",\n      className: \"jsx-2855160920\"\n    })), __jsx(\"header\", {\n      className: \"jsx-2855160920\"\n    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      route: \"home\"\n    }, __jsx(\"a\", {\n      className: \"jsx-2855160920\"\n    }, \"Podcasts\"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"3995633865\"\n    }, \"header.jsx-2855160920{color:#fff;background:#8756ca;padding:15px;text-align:center;}header.jsx-2855160920 a.jsx-2855160920{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzdXMvRG9jdW1lbnRvcy9wcm9ncmFtYWNpw7NuL2N1cnNvTmV4dC9wb2RjYXN0cy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBR2tCLEFBTUEsV0FMUSxBQU1FLG1CQUxSLGFBQ0ssa0JBQ25CLEFBSUEiLCJmaWxlIjoiL2hvbWUvYXN1cy9Eb2N1bWVudG9zL3Byb2dyYW1hY2nDs24vY3Vyc29OZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XG5cdE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCcgLz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PExpbmsgcm91dGU9J2hvbWUnPlxuXHRcdFx0XHRcdFx0PGE+UG9kY2FzdHM8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM4NzU2Y2E7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoZWFkZXIgYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xuXHRcdFx0XHRcdCNucHJvZ3Jlc3Mge1xuXHRcdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyOWQ7XG5cblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMzE7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAucGVnIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyOWQsIDAgMCA1cHggIzI5ZDtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cblx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xuXHRcdFx0XHRcdCNucHJvZ3Jlc3MgLnNwaW5uZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxMDMxO1xuXHRcdFx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0XHRcdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXJcblx0XHRcdFx0XHRcdFx0aW5maW5pdGU7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuXHRcdFx0XHRcdFx0MCUge1xuXHRcdFx0XHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\\n/*@ sourceURL=/home/asus/Documentos/programaci\\xF3n/cursoNext/podcasts/components/Layout.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"1795525816\"\n    }, \"body{margin:0;font-family:system-ui;background:white;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzdXMvRG9jdW1lbnRvcy9wcm9ncmFtYWNpw7NuL2N1cnNvTmV4dC9wb2RjYXN0cy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3VCLEFBR2dCLEFBT1csQUFJSixBQWFGLEFBZUEsQUFRSCxBQWVLLEFBTUUsQUFLYyxBQUdFLEFBS1YsQUFHRSxTQW5GSixFQStDVixHQXZCTSxBQWVILEVBM0JBLEFBa0RHLEVBTW5CLEVBN0RBLEdBeUN1QixNQVJULEVBdkNJLEFBWUosQUE0RGIsQ0FoRFUsQ0FtRFYsQ0FiRCxRQXJDYSxBQWVILEVBM0JILENBb0N1QixHQWhEOUIsRUFhUSxDQTJCSSxHQWZDLEdBVkQsS0EwQlosSUFmd0MsRUFWNUIsTUFpQ1csS0FoQ3ZCLEVBOERDLE1BR0EsU0FoQ3VCLFFBdkJiLFVBRTBDLEtBc0JsQyxrQkFHVCw0QkF4QnVDLDhCQXlCRSxpQkF4Qk4sMkZBeUI3QyxrREF4QkEiLCJmaWxlIjoiL2hvbWUvYXN1cy9Eb2N1bWVudG9zL3Byb2dyYW1hY2nDs24vY3Vyc29OZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XG5cdE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCcgLz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PExpbmsgcm91dGU9J2hvbWUnPlxuXHRcdFx0XHRcdFx0PGE+UG9kY2FzdHM8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM4NzU2Y2E7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoZWFkZXIgYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xuXHRcdFx0XHRcdCNucHJvZ3Jlc3Mge1xuXHRcdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyOWQ7XG5cblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMzE7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAucGVnIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyOWQsIDAgMCA1cHggIzI5ZDtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cblx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xuXHRcdFx0XHRcdCNucHJvZ3Jlc3MgLnNwaW5uZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxMDMxO1xuXHRcdFx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0XHRcdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXJcblx0XHRcdFx0XHRcdFx0aW5maW5pdGU7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuXHRcdFx0XHRcdFx0MCUge1xuXHRcdFx0XHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\\n/*@ sourceURL=/home/asus/Documentos/programaci\\xF3n/cursoNext/podcasts/components/Layout.js */\"));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkxheW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxrREFBTSxDQUFDQyxrQkFBUCxHQUE2QkMsR0FBRCxJQUFTO0FBQ3BDQyxrREFBUyxDQUFDQyxLQUFWO0FBQ0EsQ0FGRDs7QUFHQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsTUFBTUYsZ0RBQVMsQ0FBQ0csSUFBVixFQUFyQzs7QUFDQU4sa0RBQU0sQ0FBQ08sa0JBQVAsR0FBNEIsTUFBTUosZ0RBQVMsQ0FBQ0csSUFBVixFQUFsQzs7QUFFZSxNQUFNRSxNQUFOLFNBQXFCQyw0Q0FBSyxDQUFDQyxTQUEzQixDQUFxQztBQUNuREMsUUFBTSxHQUFHO0FBQ1IsVUFBTTtBQUFFQyxjQUFGO0FBQVlDO0FBQVosUUFBc0IsS0FBS0MsS0FBakM7QUFFQSxXQUNDO0FBQUE7QUFBQSxPQUNDLE1BQUMsZ0RBQUQsUUFDQztBQUFBO0FBQUEsT0FBUUQsS0FBUixDQURELEVBRUM7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMsb0JBQTlCO0FBQUE7QUFBQSxNQUZELENBREQsRUFNQztBQUFBO0FBQUEsT0FDQyxNQUFDLDRDQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVosT0FDQztBQUFBO0FBQUEsa0JBREQsQ0FERCxDQU5ELEVBWUVELFFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxak9BREQ7QUF3SEE7O0FBNUhrRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAodXJsKSA9PiB7XG5cdE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCcgLz5cblx0XHRcdFx0PC9IZWFkPlxuXG5cdFx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdFx0PExpbmsgcm91dGU9J2hvbWUnPlxuXHRcdFx0XHRcdFx0PGE+UG9kY2FzdHM8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2hlYWRlcj5cblxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGhlYWRlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM4NzU2Y2E7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoZWFkZXIgYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0XHRcdGJvZHkge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHN5c3RlbS11aTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIE1ha2UgY2xpY2tzIHBhc3MtdGhyb3VnaCAqL1xuXHRcdFx0XHRcdCNucHJvZ3Jlc3Mge1xuXHRcdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyOWQ7XG5cblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMzE7XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAucGVnIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyOWQsIDAgMCA1cHggIzI5ZDtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cblx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlc2UgdG8gZ2V0IHJpZCBvZiB0aGUgc3Bpbm5lciAqL1xuXHRcdFx0XHRcdCNucHJvZ3Jlc3MgLnNwaW5uZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAxMDMxO1xuXHRcdFx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0I25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cblx0XHRcdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXJcblx0XHRcdFx0XHRcdFx0aW5maW5pdGU7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcblx0XHRcdFx0XHQubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuXHRcdFx0XHRcdFx0MCUge1xuXHRcdFx0XHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHQwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0MTAwJSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Error; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nclass Error extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  static getInitialProps({\n    res,\n    err\n  }) {\n    const statusCode = res ? res.statusCode : err ? err.statusCode : null;\n    return {\n      statusCode\n    };\n  }\n\n  render() {\n    const {\n      statusCode\n    } = this.props;\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Oh no :(\"\n    }, statusCode === 404 ? __jsx(\"div\", {\n      className: \"jsx-723721833\" + \" \" + 'message'\n    }, __jsx(\"h1\", {\n      className: \"jsx-723721833\"\n    }, \"Esta p\\xE1gina no existe :(\"), __jsx(\"p\", {\n      className: \"jsx-723721833\"\n    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      route: \"home\"\n    }, __jsx(\"a\", {\n      className: \"jsx-723721833\"\n    }, \"Volver a la home\")))) : __jsx(\"div\", {\n      className: \"jsx-723721833\" + \" \" + 'message'\n    }, __jsx(\"h1\", {\n      className: \"jsx-723721833\"\n    }, \"Hubo un problema :(\"), __jsx(\"p\", {\n      className: \"jsx-723721833\"\n    }, \"Intenta nuevamente en unos segundos\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"723721833\"\n    }, \".message.jsx-723721833{padding:100px 30px;text-align:center;}h1.jsx-723721833{margin-bottom:2em;}a.jsx-723721833{color:#8756ca;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzdXMvRG9jdW1lbnRvcy9wcm9ncmFtYWNpw7NuL2N1cnNvTmV4dC9wb2RjYXN0cy9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NnQixBQUcwQixBQUlELEFBR0osY0FDZixJQUhBLENBSm1CLGtCQUNuQiIsImZpbGUiOiIvaG9tZS9hc3VzL0RvY3VtZW50b3MvcHJvZ3JhbWFjacOzbi9jdXJzb05leHQvcG9kY2FzdHMvcGFnZXMvX2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcblx0XHRjb25zdCBzdGF0dXNDb2RlID0gcmVzXG5cdFx0XHQ/IHJlcy5zdGF0dXNDb2RlXG5cdFx0XHQ6IGVyclxuXHRcdFx0PyBlcnIuc3RhdHVzQ29kZVxuXHRcdFx0OiBudWxsO1xuXHRcdHJldHVybiB7IHN0YXR1c0NvZGUgfTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dCB0aXRsZT0nT2ggbm8gOignPlxuXHRcdFx0XHR7c3RhdHVzQ29kZSA9PT0gNDA0ID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5cblx0XHRcdFx0XHRcdDxoMT5Fc3RhIHDDoWdpbmEgbm8gZXhpc3RlIDooPC9oMT5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHQ8TGluayByb3V0ZT0naG9tZSc+XG5cdFx0XHRcdFx0XHRcdFx0PGE+Vm9sdmVyIGEgbGEgaG9tZTwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5cblx0XHRcdFx0XHRcdDxoMT5IdWJvIHVuIHByb2JsZW1hIDooPC9oMT5cblx0XHRcdFx0XHRcdDxwPkludGVudGEgbnVldmFtZW50ZSBlbiB1bm9zIHNlZ3VuZG9zPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0Lm1lc3NhZ2Uge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTAwcHggMzBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aDEge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjODc1NmNhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuIl19 */\\n/*@ sourceURL=/home/asus/Documentos/programaci\\xF3n/cursoNext/podcasts/pages/_error.js */\"));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IuanM/NjM0MyJdLCJuYW1lcyI6WyJFcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInJlbmRlciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQ2xELFNBQU9DLGVBQVAsQ0FBdUI7QUFBRUMsT0FBRjtBQUFPQztBQUFQLEdBQXZCLEVBQXFDO0FBQ3BDLFVBQU1DLFVBQVUsR0FBR0YsR0FBRyxHQUNuQkEsR0FBRyxDQUFDRSxVQURlLEdBRW5CRCxHQUFHLEdBQ0hBLEdBQUcsQ0FBQ0MsVUFERCxHQUVILElBSkg7QUFLQSxXQUFPO0FBQUVBO0FBQUYsS0FBUDtBQUNBOztBQUVEQyxRQUFNLEdBQUc7QUFDUixVQUFNO0FBQUVEO0FBQUYsUUFBaUIsS0FBS0UsS0FBNUI7QUFFQSxXQUNDLE1BQUMsMERBQUQ7QUFBUSxXQUFLLEVBQUM7QUFBZCxPQUNFRixVQUFVLEtBQUssR0FBZixHQUNBO0FBQUEseUNBQWU7QUFBZixPQUNDO0FBQUE7QUFBQSxxQ0FERCxFQUVDO0FBQUE7QUFBQSxPQUNDLE1BQUMsNENBQUQ7QUFBTSxXQUFLLEVBQUM7QUFBWixPQUNDO0FBQUE7QUFBQSwwQkFERCxDQURELENBRkQsQ0FEQSxHQVVBO0FBQUEseUNBQWU7QUFBZixPQUNDO0FBQUE7QUFBQSw2QkFERCxFQUVDO0FBQUE7QUFBQSw2Q0FGRCxDQVhGO0FBQUE7QUFBQSwyc0VBREQ7QUErQkE7O0FBNUNpRCIsImZpbGUiOiIuL3BhZ2VzL19lcnJvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXMsIGVyciB9KSB7XG5cdFx0Y29uc3Qgc3RhdHVzQ29kZSA9IHJlc1xuXHRcdFx0PyByZXMuc3RhdHVzQ29kZVxuXHRcdFx0OiBlcnJcblx0XHRcdD8gZXJyLnN0YXR1c0NvZGVcblx0XHRcdDogbnVsbDtcblx0XHRyZXR1cm4geyBzdGF0dXNDb2RlIH07XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQgdGl0bGU9J09oIG5vIDooJz5cblx0XHRcdFx0e3N0YXR1c0NvZGUgPT09IDQwNCA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+XG5cdFx0XHRcdFx0XHQ8aDE+RXN0YSBww6FnaW5hIG5vIGV4aXN0ZSA6KDwvaDE+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0PExpbmsgcm91dGU9J2hvbWUnPlxuXHRcdFx0XHRcdFx0XHRcdDxhPlZvbHZlciBhIGxhIGhvbWU8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+XG5cdFx0XHRcdFx0XHQ8aDE+SHVibyB1biBwcm9ibGVtYSA6KDwvaDE+XG5cdFx0XHRcdFx0XHQ8cD5JbnRlbnRhIG51ZXZhbWVudGUgZW4gdW5vcyBzZWd1bmRvczwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5tZXNzYWdlIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwMHB4IDMwcHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDJlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzg3NTZjYTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const routes = module.exports = __webpack_require__(/*! next-routes */ \"next-routes\")();\n\nroutes.add('home', '/', 'index').add('channel', '/:slug.:id', 'channel').add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ZjFjMSJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImFkZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUCxFQUFoQzs7QUFFQUgsTUFBTSxDQUNMSSxHQURELENBQ0ssTUFETCxFQUNhLEdBRGIsRUFDa0IsT0FEbEIsRUFFQ0EsR0FGRCxDQUVLLFNBRkwsRUFFZ0IsWUFGaEIsRUFFOEIsU0FGOUIsRUFHQ0EsR0FIRCxDQUdLLFNBSEwsRUFHZ0Isb0NBSGhCLEVBR3NELFNBSHREIiwiZmlsZSI6Ii4vcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpKClcblxucm91dGVzXG4uYWRkKCdob21lJywgJy8nLCAnaW5kZXgnKVxuLmFkZCgnY2hhbm5lbCcsICcvOnNsdWcuOmlkJywgJ2NoYW5uZWwnKVxuLmFkZCgncG9kY2FzdCcsICcvOnNsdWdDaGFubmVsLjppZENoYW5uZWwvOnNsdWcuOmlkJywgJ3BvZGNhc3QnKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/asus/Documentos/programación/cursoNext/podcasts/pages/_error.js */"./pages/_error.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-routes\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiPzBkNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-routes\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nprogress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIj8xNTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nprogress\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });
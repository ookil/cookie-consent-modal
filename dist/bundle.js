/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Roboto;\n}\n\nbody.disable-scroll {\n  overflow: hidden;\n}\n\n.cc-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.cc-modalBox {\n  width: 45rem;\n  max-width: 85%;\n  height: auto;\n  max-height: 96%;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.cc-modal-title {\n  margin: 0;\n}\n\n.list-item {\n  position: absolute;\n  left: 0px;\n  width: calc(100% - 6px);\n}\n\n.cc-viewport {\n  scrollbar-color: #b1bccc transparent;\n  scrollbar-width: thin;\n}\n.cc-viewport::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n.cc-viewport::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #b1bccc;\n}\n\n.cc-container {\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: all 0.6s linear;\n  -o-transition: all 0.6s linear;\n  transition: all 300ms linear;\n}\n.cc-container.show {\n  backdrop-filter: blur(2px);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.521);\n}\n.cc-container.hide {\n  opacity: 0;\n  display: none;\n}\n\n.cc-modalBox {\n  background-color: white;\n  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);\n}\n\n.cc-modalHeader {\n  text-align: center;\n  padding: 2px 0 8px 0;\n  border-bottom: 1px solid blue;\n}\n\n.cc-description {\n  margin-top: 10px;\n  font-size: 0.9em;\n  padding: 10px 0 12px 0;\n}\n\n.cc-buttonsWrapper {\n  display: flex;\n}\n.cc-buttonsWrapper.btns-main {\n  padding: 20px 0;\n  justify-content: center;\n  border-radius: 5px;\n  border-top: 1px solid #0000ff40;\n}\n@media (max-width: 320px) {\n  .cc-buttonsWrapper.btns-main {\n    padding: 10px 0;\n  }\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.btn {\n  cursor: pointer;\n  width: auto;\n  border-radius: 3px;\n  padding: 0.2em 0.5em;\n  background-color: white;\n  border: none;\n  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.521);\n  font-family: Roboto;\n  font-size: 1em;\n}\n.btn.btn-close {\n  margin-left: 20px;\n}\n.btn.btn-close:hover {\n  background-color: #c45f5f;\n  color: white;\n}\n.btn.btn-save {\n  margin-left: 20px;\n  display: none;\n}\n.btn.btn-save.show {\n  display: block;\n}\n.btn.btn-save:hover {\n  background-color: #4576a3;\n  color: white;\n}\n.btn.accepted {\n  background-color: #4da345;\n  color: white;\n}\n@media (max-width: 425px) {\n  .btn.accepted {\n    font-size: 0.9em;\n  }\n}\n.btn.btn-accept:hover {\n  background-color: #4da345;\n  color: white;\n}\n\n.cc-viewport {\n  overflow: auto;\n  width: 100%;\n  padding-left: 5px;\n}\n\n.cc-content {\n  overflow: hidden;\n  position: relative;\n  padding-bottom: 15px;\n}\n\n.list-item {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  padding-right: 10px;\n}\n.list-item--info {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n.list-item--title {\n  margin: 0;\n  margin-right: 10px;\n}\n@media (max-width: 425px) {\n  .list-item--title {\n    font-size: 0.9em;\n  }\n}\n.list-item--link {\n  font-size: 0.8em;\n  text-decoration: none;\n  color: rgba(24, 24, 24, 0.575);\n}", "",{"version":3,"sources":["webpack://./src/styles/layout.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base.scss"],"names":[],"mappings":"AAAA;;EAEE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,mBAAA;ACEF;;ADCA;EACE,gBAAA;ACEF;;ADCA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;ACEF;;ADCA;EACE,YAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;ACEF;;ADCA;EACE,SAAA;ACEF;;ADCA;EACE,kBAAA;EACA,SAAA;EACA,uBAAA;ACEF;;ADCA;EACE,oCAAA;EACA,qBAAA;ACEF;ADAE;EACE,UAAA;EACA,WAAA;ACEJ;ADCE;EACE,mBAAA;EACA,yBAAA;ACCJ;;AC/CA;EACE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kCAAA;EAEA,mCAAA;EACA,8BAAA;EACA,4BAAA;ADiDF;AC/CE;EACE,0BAAA;EACA,UAAA;EACA,sCAAA;ADiDJ;AC9CE;EACE,UAAA;EACA,aAAA;ADgDJ;;AC5CA;EACE,uBAAA;EACA,2CAAA;AD+CF;;AC5CA;EACE,kBAAA;EACA,oBAAA;EACA,6BAAA;AD+CF;;AC5CA;EACE,gBAAA;EACA,gBAAA;EACA,sBAAA;AD+CF;;AC5CA;EACE,aAAA;AD+CF;AC7CE;EACE,eAAA;EACA,uBAAA;EACA,kBAAA;EACA,+BAAA;AD+CJ;AC7CI;EANF;IAOI,eAAA;EDgDJ;AACF;;AC5CA;EACE,iBAAA;AD+CF;;AC5CA;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,uBAAA;EACA,YAAA;EACA,gDAAA;EACA,mBAAA;EACA,cAAA;AD+CF;AC7CE;EACE,iBAAA;AD+CJ;AC9CI;EACE,yBA7EO;EA8EP,YAAA;ADgDN;AC5CE;EACE,iBAAA;EACA,aAAA;AD8CJ;AC5CI;EACE,cAAA;AD8CN;AC5CI;EACE,yBAxFM;EAyFN,YAAA;AD8CN;AC1CE;EACE,yBA/FY;EAgGZ,YAAA;AD4CJ;AC1CI;EAJF;IAKI,gBAAA;ED6CJ;AACF;AC1CE;EACE,yBAxGY;EAyGZ,YAAA;AD4CJ;;ACxCA;EACE,cAAA;EACA,WAAA;EACA,iBAAA;AD2CF;;ACxCA;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;AD2CF;;ACxCA;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AD2CF;ACzCE;EACE,aAAA;EACA,qBAAA;EACA,eAAA;AD2CJ;ACxCE;EACE,SAAA;EACA,kBAAA;AD0CJ;ACxCI;EAJF;IAKI,gBAAA;ED2CJ;AACF;ACxCE;EACE,gBAAA;EACA,qBAAA;EACA,8BAAA;AD0CJ","sourcesContent":["html,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Roboto;\r\n}\r\n\r\nbody.disable-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.cc-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.cc-modalBox {\r\n  width: 45rem;\r\n  max-width: 85%;\r\n  height: auto;\r\n  max-height: 96%;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.cc-modal-title {\r\n  margin: 0;\r\n}\r\n\r\n.list-item {\r\n  position: absolute;\r\n  left: 0px;\r\n  width: calc(100% - 6px);\r\n}\r\n\r\n.cc-viewport {\r\n  scrollbar-color: #b1bccc transparent;\r\n  scrollbar-width: thin;\r\n\r\n  &::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 5px;\r\n  }\r\n\r\n  &::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background-color: #b1bccc;\r\n  }\r\n}\r\n","@import './layout.scss';\r\n@import './base.scss';\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n","$red-cancel: rgb(196, 95, 95);\r\n$green-confirm: rgb(77, 163, 69);\r\n$blue-save: rgb(69, 118, 163);\r\n\r\n.cc-container {\r\n  z-index: 1000;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0);\r\n\r\n  -webkit-transition: all 0.6s linear;\r\n  -o-transition: all 0.6s linear;\r\n  transition: all 300ms linear;\r\n\r\n  &.show {\r\n    backdrop-filter: blur(2px);\r\n    opacity: 1;\r\n    background-color: rgba(0, 0, 0, 0.521);\r\n  }\r\n\r\n  &.hide {\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n\r\n.cc-modalBox {\r\n  background-color: white;\r\n  box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.cc-modalHeader {\r\n  text-align: center;\r\n  padding: 2px 0 8px 0;\r\n  border-bottom: 1px solid blue;\r\n}\r\n\r\n.cc-description {\r\n  margin-top: 10px;\r\n  font-size: 0.9em;\r\n  padding: 10px 0 12px 0;\r\n}\r\n\r\n.cc-buttonsWrapper {\r\n  display: flex;\r\n\r\n  &.btns-main {\r\n    padding: 20px 0;\r\n    justify-content: center;\r\n    border-radius: 5px;\r\n    border-top: 1px solid #0000ff40;\r\n\r\n    @media (max-width: 320px) {\r\n      padding: 10px 0;\r\n    }\r\n  }\r\n}\r\n\r\n.ml-auto {\r\n  margin-left: auto;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  width: auto;\r\n  border-radius: 3px;\r\n  padding: 0.2em 0.5em;\r\n  background-color: white;\r\n  border: none;\r\n  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.521);\r\n  font-family: Roboto;\r\n  font-size: 1em;\r\n\r\n  &.btn-close {\r\n    margin-left: 20px;\r\n    &:hover {\r\n      background-color: $red-cancel;\r\n      color: white;\r\n    }\r\n  }\r\n\r\n  &.btn-save {\r\n    margin-left: 20px;\r\n    display: none;\r\n\r\n    &.show {\r\n      display: block;\r\n    }\r\n    &:hover {\r\n      background-color: $blue-save;\r\n      color: white;\r\n    }\r\n  }\r\n\r\n  &.accepted {\r\n    background-color: $green-confirm;\r\n    color: white;\r\n\r\n    @media (max-width: 425px) {\r\n      font-size: 0.9em;\r\n    }\r\n  }\r\n\r\n  &.btn-accept:hover {\r\n    background-color: $green-confirm;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.cc-viewport {\r\n  overflow: auto;\r\n  width: 100%;\r\n  padding-left: 5px;\r\n}\r\n\r\n.cc-content {\r\n  overflow: hidden;\r\n  position: relative;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n  padding-right: 10px;\r\n\r\n  &--info {\r\n    display: flex;\r\n    align-items: baseline;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  &--title {\r\n    margin: 0;\r\n    margin-right: 10px;\r\n\r\n    @media (max-width: 425px) {\r\n      font-size: 0.9em;\r\n    }\r\n  }\r\n\r\n  &--link {\r\n    font-size: 0.8em;\r\n    text-decoration: none;\r\n    color: rgba(24, 24, 24, 0.575);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookieStorage": () => (/* binding */ cookieStorage),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/models/modal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const cookieStorage = {
    setItem: (name, value, daysToExpire = 1) => {
        const d = new Date();
        d.setTime(d.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + ';' + expires;
    },
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map((cookie) => cookie.split('='))
            .reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [key.trim()]: value })), {});
        return cookies[key];
    },
};
const getVendors = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getJSON)(url);
    return res.vendors;
});
const init = (window, url) => __awaiter(void 0, void 0, void 0, function* () {
    const consentName = 'gdpr_consent';
    const vendors = yield getVendors(url);
    const cookieConsentController = new _modal__WEBPACK_IMPORTED_MODULE_1__.CookieConsentModal(window, window.document.body, vendors, {
        cName: consentName,
        cExpire: 1,
    });
    if (!cookieStorage.getItem(consentName)) {
        getVendors(url);
        cookieConsentController.openModal();
    }
});


/***/ }),

/***/ "./src/models/modal.ts":
/*!*****************************!*\
  !*** ./src/models/modal.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieConsentModal": () => (/* binding */ CookieConsentModal)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/models/index.ts");
/* harmony import */ var _virtualScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtualScroll */ "./src/models/virtualScroll.ts");


const defaultOptions = {
    cName: 'gdpr_consent',
    cExpire: 1,
    title: 'GDRP Consent',
    description: 'This site uses cookies. Please accept or reject cookie policy for given vendor.',
};
class CookieConsentModal {
    constructor(window, parentElement, vendorsList, options) {
        this.modalId = 'ccModal';
        this.isOpen = false;
        this.window = window;
        this.parentElement = parentElement;
        this.vendorsList = vendorsList;
        this.options = Object.assign(Object.assign({}, defaultOptions), options);
        this.selectedVendors = [];
    }
    handleAcceptAll() {
        const vendorsIds = Object.keys(this.vendorsList).map((key) => {
            return this.vendorsList[key].id;
        });
        _index__WEBPACK_IMPORTED_MODULE_0__.cookieStorage.setItem(this.options.cName, vendorsIds.toString(), this.options.cExpire);
        this.closeModal();
    }
    handleAccept() {
        _index__WEBPACK_IMPORTED_MODULE_0__.cookieStorage.setItem(this.options.cName, this.selectedVendors.toString(), this.options.cExpire);
        this.closeModal();
    }
    setVendors(list) {
        var _a, _b;
        this.selectedVendors = list;
        if (this.selectedVendors.length > 0) {
            (_a = this.buttonSave) === null || _a === void 0 ? void 0 : _a.classList.add('show');
        }
        else {
            (_b = this.buttonSave) === null || _b === void 0 ? void 0 : _b.classList.remove('show');
        }
    }
    openModal() {
        const virtualScroll = new _virtualScroll__WEBPACK_IMPORTED_MODULE_1__.VirtualScroll(this.vendorsList, 400, 45, 3, this.setVendors.bind(this));
        const vendorsScrollList = virtualScroll.init();
        //build modal
        const modalContainer = this.window.document.createElement('div');
        modalContainer.id = this.modalId;
        modalContainer.classList.add('cc-container');
        this.modalBox = this.window.document.createElement('div');
        this.modalBox.classList.add('cc-modalBox');
        const modalHeader = this.window.document.createElement('div');
        modalHeader.classList.add('cc-modalHeader');
        const modalTitle = this.window.document.createElement('h3');
        modalTitle.classList.add('cc-modal-title');
        modalTitle.innerText = this.options.title;
        const description = this.window.document.createElement('div');
        description.classList.add('cc-description');
        description.innerText = this.options.description;
        const buttonsWrapper = this.window.document.createElement('div');
        buttonsWrapper.classList.add('cc-buttonsWrapper', 'btns-main');
        const buttonClose = this.window.document.createElement('button');
        buttonClose.addEventListener('click', this.closeModal.bind(this));
        buttonClose.classList.add('btn', 'btn-close');
        buttonClose.innerText = 'Reject All';
        const buttonAccept = this.window.document.createElement('button');
        buttonAccept.addEventListener('click', this.handleAcceptAll.bind(this));
        buttonAccept.classList.add('btn', 'btn-accept');
        buttonAccept.innerText = 'Accept All';
        this.buttonSave = this.window.document.createElement('button');
        this.buttonSave.addEventListener('click', this.handleAccept.bind(this));
        this.buttonSave.classList.add('btn', 'btn-save');
        this.buttonSave.innerText = 'Save Choices';
        modalHeader.appendChild(modalTitle);
        buttonsWrapper.appendChild(buttonAccept);
        buttonsWrapper.appendChild(buttonClose);
        buttonsWrapper.appendChild(this.buttonSave);
        this.modalBox.appendChild(modalHeader);
        this.modalBox.appendChild(description);
        this.modalBox.appendChild(vendorsScrollList);
        this.modalBox.appendChild(buttonsWrapper);
        modalContainer.appendChild(this.modalBox);
        this.parentElement.appendChild(modalContainer);
        //show modal
        this.isOpen = true;
        modalContainer.classList.add('show');
        modalContainer.classList.remove('hide');
        this.window.document.body.classList.add('disable-scroll');
    }
    closeModal() {
        const modalContainer = this.window.document.getElementById(this.modalId);
        modalContainer.classList.remove('show');
        modalContainer.classList.add('hide');
        this.window.document.body.classList.remove('disable-scroll');
    }
}


/***/ }),

/***/ "./src/models/virtualScroll.ts":
/*!*************************************!*\
  !*** ./src/models/virtualScroll.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScroll": () => (/* binding */ VirtualScroll)
/* harmony export */ });
class VirtualScroll {
    constructor(rowsData, viewportHeight, rowHeight, nodePadding, setVendors) {
        this.rows = {};
        this.vendorsList = Object.keys(rowsData).map((key) => rowsData[key]);
        this.itemCount = this.vendorsList.length;
        this.viewportHeight = viewportHeight;
        this.rowHeight = rowHeight;
        this.nodePadding = nodePadding;
        this.rows = {};
        this.acceptedVendors = [];
        this.setVendors = setVendors;
    }
    onScroll() {
        const viewport = window.document.querySelector('.cc-viewport');
        const startNode = this.getStartNode(viewport);
        const endNode = this.getEndNode(startNode);
        // remove rows not in viewport
        for (let i in this.rows) {
            if (parseInt(i) < startNode || parseInt(i) > endNode) {
                this.rows[i].remove();
                delete this.rows[i];
            }
        }
        //add rows
        for (let i = startNode; i <= endNode; i++) {
            if (!this.rows[i]) {
                this.rows[i] = this.renderRow(this.vendorsList[i], i);
            }
        }
    }
    handleClick(i, id) {
        const button = window.document.getElementById(`vendor-${i}`);
        // keep track of accepted vendors
        if (!this.acceptedVendors.includes(id)) {
            this.acceptedVendors.push(id);
            button === null || button === void 0 ? void 0 : button.classList.add('accepted');
        }
        else {
            const newVendors = this.acceptedVendors.filter((acceptedId) => {
                return acceptedId !== id;
            });
            this.acceptedVendors = newVendors;
            button === null || button === void 0 ? void 0 : button.classList.remove('accepted');
        }
        this.setVendors(this.acceptedVendors);
    }
    renderRow(item, i) {
        var _a;
        const row = window.document.createElement('div');
        row.classList.add('list-item');
        // based on rowHeight calculate position
        row.style.height = `${this.rowHeight}`;
        row.style.top = `${i * this.rowHeight + 10}`;
        const vendorInfo = window.document.createElement('div');
        vendorInfo.classList.add('list-item--info');
        const vendorName = window.document.createElement('p');
        vendorName.classList.add('list-item--title');
        vendorName.innerText = item.name;
        const vendorPolicyLink = window.document.createElement('a');
        vendorPolicyLink.classList.add('list-item--link');
        vendorPolicyLink.href = item.policyUrl;
        vendorPolicyLink.innerText = 'Read cookie policy here';
        // buttons
        const buttonsWrapper = window.document.createElement('div');
        buttonsWrapper.classList.add('cc-buttonsWrapper', 'ml-auto');
        const buttonAccept = window.document.createElement('button');
        buttonAccept.addEventListener('click', () => this.handleClick(i, item.id));
        buttonAccept.classList.add('btn', 'btn-accept');
        buttonAccept.id = `vendor-${i}`;
        if (this.acceptedVendors.includes(item.id)) {
            buttonAccept === null || buttonAccept === void 0 ? void 0 : buttonAccept.classList.add('accepted');
        }
        buttonAccept.innerText = 'Accept';
        buttonsWrapper.appendChild(buttonAccept);
        vendorInfo.appendChild(vendorName);
        vendorInfo.appendChild(vendorPolicyLink);
        row.appendChild(vendorInfo);
        row.appendChild(buttonsWrapper);
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        return row;
    }
    getStartNode(viewport) {
        // get first node to render, with nodePadding in account
        //a/ if current scrollTop = 92 and rowHeight=30 first node would be 3
        //b/ but with nodePadding = 2 we want to start rendering two nodes before to give some better scrolling experience
        // but we cannot allow for startNode to be negative, so if a-b < 0 startNode will be 0
        let startNode = Math.floor(viewport.scrollTop / this.rowHeight) - this.nodePadding;
        startNode = Math.max(0, startNode);
        return startNode;
    }
    getEndNode(startNode) {
        // count hany many nodes we can render
        // add paddings at the beginning and end
        let renderedNodeCount = Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.nodePadding;
        renderedNodeCount = Math.min(this.itemCount - startNode, renderedNodeCount);
        // return final endNode
        return startNode + renderedNodeCount;
    }
    init() {
        // build viewport and content
        const totalContentHeight = this.vendorsList.length * this.rowHeight;
        const container = window.document.createElement('div');
        this.viewport = window.document.createElement('div');
        this.viewport.classList.add('cc-viewport');
        this.viewport.style.height = `${this.viewportHeight}`;
        this.content = window.document.createElement('div');
        this.content.classList.add('cc-content');
        this.content.style.height = `${totalContentHeight}`;
        this.viewport.appendChild(this.content);
        // add event to listen for scroll and recalculate rows
        this.viewport.onscroll = this.onScroll.bind(this);
        const scrollBox = container.appendChild(this.viewport);
        // calculate the initial rows to show
        const startNode = this.getStartNode(this.viewport);
        const endNode = this.getEndNode(startNode);
        //add rows
        for (let i = startNode; i <= endNode; i++) {
            if (!this.rows[i]) {
                this.rows[i] = this.renderRow(this.vendorsList[i], i);
            }
        }
        return scrollBox;
    }
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJSON": () => (/* binding */ getJSON)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getJSON = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield fetch(url);
        let responseJSON = yield response.json();
        return responseJSON;
    }
    catch (err) {
        console.log(err);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/index */ "./src/models/index.ts");


const url = 'https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json';
window.onload = () => {
    _models_index__WEBPACK_IMPORTED_MODULE_1__.init(window, url);
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
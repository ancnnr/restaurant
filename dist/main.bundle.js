/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --white: #fffbfb;\r\n    --white-80: #fffbfbb0;\r\n    --grey: #f0eef1;\r\n    --black: #050505;\r\n    --black-50: #05050581;\r\n    --red: #ff7070;\r\n    --light-green: #9fff9c;\r\n    --light-red: #ff9c9c;\r\n    --border-radius: 8px;\r\n    --spacing-xs: 5px;\r\n    --spacing-sm: 10px;\r\n    --spacing-md: 15px;\r\n    --spacing-lg: 20px;\r\n    --spacing-xl: 40px;\r\n    --h1-font-size: clamp(24px, calc(10*min(1vw, 1vh)), 96px);\r\n    --h2-font-size: clamp(16px, calc(7*min(1vw, 1vh)), 36px);\r\n    --h3-font-size: clamp(14px, calc(5*min(1vw, 1vh)), 24px);\r\n    --p-font-size: clamp(12px, calc(2*min(1vw, 1vh)), 18px);\r\n    --description-font-size: clamp(12px, calc(1.7*min(1vw, 1vh)), 18px);\r\n    --container-width: 1200px;\r\n    --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n  }\r\n\r\n/* CSS RESET */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  /* footer support */\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--grey);\r\n  font-family: 'Roboto Slab', serif;\r\n  color: var(--black);\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  word-wrap: break-word;\r\n  /* footer support */\r\n  margin-bottom: 100px;\r\n}\r\n\r\nbutton,\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='number'],\r\ntextarea {\r\n  cursor: text;\r\n}\r\n\r\n/* UTILS */\r\n\r\n.container {\r\n    /* max-width: var(--container-width); */\r\n    padding: var(--spacing-lg);\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .btn {\r\n    padding: var(--spacing-sm) var(--spacing-md);\r\n    border-radius: var(--border-radius);\r\n    transition: filter 0.15s ease-in-out;\r\n  }\r\n  \r\n  .btn:hover, .navbar div:hover {\r\n    filter: brightness(90%);\r\n    /* box-shadow: var(--shadow); */\r\n  }\r\n\r\n  .game-box.inactive:hover {\r\n    filter: brightness(100%);\r\n  }\r\n  \r\n  .btn-add {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .btn-light-green {\r\n    background-color: var(--light-green);\r\n  }\r\n  \r\n  .btn-light-red {\r\n    background-color: var(--light-red);\r\n  }\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n    z-index: 2;\r\n    background-color: var(--white);\r\n    box-shadow: var(--shadow);\r\n  }\r\n  \r\n  .header .container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .logo-big {\r\n      font-size: 36px;\r\n  }\r\n\r\n  .navbar {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 15px;\r\n  }\r\n\r\n  .navbar div {\r\n    position: relative;\r\n    top: 60px;\r\n    padding: var(--spacing-lg);\r\n    padding-bottom: var(--spacing-xs);\r\n    font-weight: 700;\r\n    border-radius: var(--border-radius);\r\n    background-color: var(--white);\r\n    cursor: pointer;\r\n  }\r\n\r\n/* MAIN */\r\n\r\n.main {\r\n    margin-top: var(--spacing-sm);\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n  }\r\n\r\n.imgheader {\r\n    position: fixed;\r\n    z-index: -2;\r\n    top:0px;\r\n    width: max(100vw, 1024px);\r\n    object-fit: cover;\r\n}\r\n\r\n.content-card {\r\n    width: max(300px, 80%);\r\n    margin-top: 40px;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--shadow);\r\n    background-color: var(--white-80);\r\n    padding: var(--spacing-xl);\r\n    text-align: center;\r\n}\r\n\r\n.content-card.home-banner {\r\n    padding-top: 10%;\r\n    padding-bottom: 10%;\r\n}\r\n\r\n.content-card h1 {\r\n    font-weight: 900;\r\n    font-size: var(--h1-font-size);\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.content-card h2 {\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    font-size: var(--h2-font-size);\r\n}\r\n\r\n.content-card p {\r\n    font-size: var(--h2-font-size);\r\n    \r\n}\r\n\r\n.menu-grid {\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: flex-start; */\r\n    align-content: stretch;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: var(--spacing-md);\r\n    background-color: var(--white);\r\n    width: clamp(300px, 400px, 500px);\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.content-card .menu-item h2 {\r\n    font-size: var(--h3-font-size);\r\n    margin-bottom: 0;\r\n}\r\n\r\n.menu-item p {\r\n    font-size: var(--description-font-size);\r\n}\r\n\r\n.menu-item p.price {\r\n    font-size: var(--h3-font-size);\r\n}\r\n\r\n.menu-item .item-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.map-embed {\r\n    padding-top: var(--spacing-md);\r\n}\r\n\r\n/* FOOTER */\r\n\r\n.footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    width: 100%;\r\n    padding: var(--spacing-sm);\r\n    background-color: var(--white);\r\n  }\r\n\r\n  /* MODALS */\r\n\r\n.modal {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 400px;\r\n    padding: var(--spacing-lg);\r\n    border-radius: var(--border-radius);\r\n    background-color: var(--grey);\r\n    text-align: center;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 0.2s ease-in-out;\r\n  }\r\n  \r\n  .modal.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  .new-game-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: var(--spacing-lg);\r\n  }\r\n  \r\n  .new-game-form button {\r\n    width: 100%;\r\n  }\r\n\r\n.input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border-radius: var(--border-radius);\r\n  }\r\n\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .overlay.active {\r\n    display: block;\r\n  }\r\n  \r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (max-width: 400px) {\r\n    .header .container {\r\n      flex-direction: column;\r\n      gap: var(--spacing-md);\r\n      padding-top: var(--spacing-sm);\r\n    }\r\n  \r\n    .main {\r\n      margin-top: 0;\r\n    }\r\n  \r\n    :root {\r\n      --spacing-xl: 20px;\r\n    }\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --white: #fffbfb;\r\n    --white-80: #fffbfbb0;\r\n    --grey: #f0eef1;\r\n    --black: #050505;\r\n    --black-50: #05050581;\r\n    --red: #ff7070;\r\n    --light-green: #9fff9c;\r\n    --light-red: #ff9c9c;\r\n    --border-radius: 8px;\r\n    --spacing-xs: 5px;\r\n    --spacing-sm: 10px;\r\n    --spacing-md: 15px;\r\n    --spacing-lg: 20px;\r\n    --spacing-xl: 40px;\r\n    --h1-font-size: clamp(24px, calc(10*min(1vw, 1vh)), 96px);\r\n    --h2-font-size: clamp(16px, calc(7*min(1vw, 1vh)), 36px);\r\n    --h3-font-size: clamp(14px, calc(5*min(1vw, 1vh)), 24px);\r\n    --p-font-size: clamp(12px, calc(2*min(1vw, 1vh)), 18px);\r\n    --description-font-size: clamp(12px, calc(1.7*min(1vw, 1vh)), 18px);\r\n    --container-width: 1200px;\r\n    --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\r\n  }\r\n\r\n/* CSS RESET */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  /* footer support */\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: var(--grey);\r\n  font-family: 'Roboto Slab', serif;\r\n  color: var(--black);\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  word-wrap: break-word;\r\n  /* footer support */\r\n  margin-bottom: 100px;\r\n}\r\n\r\nbutton,\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\ninput[type='text'],\r\ninput[type='number'],\r\ntextarea {\r\n  cursor: text;\r\n}\r\n\r\n/* UTILS */\r\n\r\n.container {\r\n    /* max-width: var(--container-width); */\r\n    padding: var(--spacing-lg);\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .btn {\r\n    padding: var(--spacing-sm) var(--spacing-md);\r\n    border-radius: var(--border-radius);\r\n    transition: filter 0.15s ease-in-out;\r\n  }\r\n  \r\n  .btn:hover, .navbar div:hover {\r\n    filter: brightness(90%);\r\n    /* box-shadow: var(--shadow); */\r\n  }\r\n\r\n  .game-box.inactive:hover {\r\n    filter: brightness(100%);\r\n  }\r\n  \r\n  .btn-add {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .btn-light-green {\r\n    background-color: var(--light-green);\r\n  }\r\n  \r\n  .btn-light-red {\r\n    background-color: var(--light-red);\r\n  }\r\n\r\n/* HEADER */\r\n\r\n.header {\r\n    z-index: 2;\r\n    background-color: var(--white);\r\n    box-shadow: var(--shadow);\r\n  }\r\n  \r\n  .header .container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .logo-big {\r\n      font-size: 36px;\r\n  }\r\n\r\n  .navbar {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 15px;\r\n  }\r\n\r\n  .navbar div {\r\n    position: relative;\r\n    top: 60px;\r\n    padding: var(--spacing-lg);\r\n    padding-bottom: var(--spacing-xs);\r\n    font-weight: 700;\r\n    border-radius: var(--border-radius);\r\n    background-color: var(--white);\r\n    cursor: pointer;\r\n  }\r\n\r\n/* MAIN */\r\n\r\n.main {\r\n    margin-top: var(--spacing-sm);\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n  }\r\n\r\n.imgheader {\r\n    position: fixed;\r\n    z-index: -2;\r\n    top:0px;\r\n    width: max(100vw, 1024px);\r\n    object-fit: cover;\r\n}\r\n\r\n.content-card {\r\n    width: max(300px, 80%);\r\n    margin-top: 40px;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--shadow);\r\n    background-color: var(--white-80);\r\n    padding: var(--spacing-xl);\r\n    text-align: center;\r\n}\r\n\r\n.content-card.home-banner {\r\n    padding-top: 10%;\r\n    padding-bottom: 10%;\r\n}\r\n\r\n.content-card h1 {\r\n    font-weight: 900;\r\n    font-size: var(--h1-font-size);\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.content-card h2 {\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n    font-size: var(--h2-font-size);\r\n}\r\n\r\n.content-card p {\r\n    font-size: var(--h2-font-size);\r\n    \r\n}\r\n\r\n.menu-grid {\r\n    display: flex;\r\n    justify-content: center;\r\n    /* align-items: flex-start; */\r\n    align-content: stretch;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: var(--spacing-md);\r\n    background-color: var(--white);\r\n    width: clamp(300px, 400px, 500px);\r\n    border-radius: var(--border-radius);\r\n}\r\n\r\n.content-card .menu-item h2 {\r\n    font-size: var(--h3-font-size);\r\n    margin-bottom: 0;\r\n}\r\n\r\n.menu-item p {\r\n    font-size: var(--description-font-size);\r\n}\r\n\r\n.menu-item p.price {\r\n    font-size: var(--h3-font-size);\r\n}\r\n\r\n.menu-item .item-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.map-embed {\r\n    padding-top: var(--spacing-md);\r\n}\r\n\r\n/* FOOTER */\r\n\r\n.footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    width: 100%;\r\n    padding: var(--spacing-sm);\r\n    background-color: var(--white);\r\n  }\r\n\r\n  /* MODALS */\r\n\r\n.modal {\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 400px;\r\n    padding: var(--spacing-lg);\r\n    border-radius: var(--border-radius);\r\n    background-color: var(--grey);\r\n    text-align: center;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 0.2s ease-in-out;\r\n  }\r\n  \r\n  .modal.active {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  .new-game-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: var(--spacing-lg);\r\n  }\r\n  \r\n  .new-game-form button {\r\n    width: 100%;\r\n  }\r\n\r\n.input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border-radius: var(--border-radius);\r\n  }\r\n\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .overlay.active {\r\n    display: block;\r\n  }\r\n  \r\n\r\n/* MEDIA QUERIES */\r\n\r\n@media (max-width: 400px) {\r\n    .header .container {\r\n      flex-direction: column;\r\n      gap: var(--spacing-md);\r\n      padding-top: var(--spacing-sm);\r\n    }\r\n  \r\n    .main {\r\n      margin-top: 0;\r\n    }\r\n  \r\n    :root {\r\n      --spacing-xl: 20px;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactUI": () => (/* binding */ contactUI)
/* harmony export */ });
// contact page

const contactUI = (() => {

    function loadContact () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = document.createElement('img');
        imgHeader.classList.add('imgheader');
        imgHeader.src = '../src/jonnysburger.jpg';
        homeContent.append(imgHeader);
    
    
        homeContent.append( contentCard("Contact Us", "Phone: 902-555-5555", "Email: jonnys@email.com") );
        homeContent.append(contentCard("Location","Find us at 4287 Hwy 1, Berwick NS"));
    
        return homeContent;
    }
    
    function contentCard (heading, p1, p2="") {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.innerHTML = `
        <h2>${heading}</h2>
        <p>${p1}</p>
        <p>${p2}</p>`;

        if(heading=="Location")
        {
            const mapEmbed = document.createElement('div');
            mapEmbed.classList.add('map-embed');
            mapEmbed.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11278.411586196726!2d-64.7366593!3d45.0329861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9527d314315eb19!2sJonny&#39;s%20Cookhouse%20and%20Ice%20Cream%20Shop!5e0!3m2!1sen!2sca!4v1649549760786!5m2!1sen!2sca" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            content_card.append(mapEmbed);
        }
    
        return content_card
    }

    return { loadContact }

})();






/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerDOM)
/* harmony export */ });
function footerDOM() {

    const footerObj = document.createElement('footer');
    footerObj.classList.add('footer');
    footerObj.innerHTML =  "<p>Made by <strong>Adam Conner</strong></p>";
    return footerObj;
};

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerUI": () => (/* binding */ headerUI)
/* harmony export */ });
//load and export page header

const headerUI = (() => {

    const header = document.createElement('header');
    const headerContent = document.createElement('div');
    const pageTitle = document.createElement('h2');
    const navBar = document.createElement('div');
    const homeBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const contactBtn = document.createElement('div');

    const loadHeader = () => {
        
        header.classList.add('header');
        headerContent.classList.add('container');
        
        pageTitle.classList.add('logo-big');
        pageTitle.textContent = "Jonny's Grill";
        
        navBar.classList.add('navbar');
        
        homeBtn.textContent = "HOME";
        menuBtn.textContent = "MENU";
        contactBtn.textContent = "CONTACT";
    
        navBar.append(homeBtn, menuBtn, contactBtn);
        headerContent.append(pageTitle, navBar);
        header.append(headerContent);
    
        return header;
    };

    const setEventListeners = (a, b, c) => {
        homeBtn.onclick = a;
        menuBtn.onclick = b;
        contactBtn.onclick = c;
    };

    return { loadHeader, setEventListeners };

})();







/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeUI": () => (/* binding */ homeUI)
/* harmony export */ });
// home page

const homeUI = (() => {

    function loadHome () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = document.createElement('img');
        imgHeader.classList.add('imgheader');
        imgHeader.src = '../src/jonnysburger.jpg';
        homeContent.append(imgHeader);
        


        homeContent.append( contentCard(
            "Welcome to Jonny's Grill",
            "Proudly serving the Annapolis Valley's best Burgers, Poutines & Ice Cream since 2009. Comfort food, cooked fresh to order."
        ) );

    
        return homeContent;
    }
    
    function contentCard (heading, paragraph) {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.classList.add('home-banner');
        content_card.innerHTML = `
        <h1>${heading}</h1>
        <p>${paragraph}</p>`;
    
        return content_card
    }

    return { loadHome }

})();






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuUI": () => (/* binding */ menuUI)
/* harmony export */ });
// menu page

const menuUI = (() => {

    

    function loadMenu () {
        console.log('loading menu');
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = document.createElement('img');
        imgHeader.classList.add('imgheader');
        imgHeader.src = '../src/jonnysburger.jpg';
        homeContent.append(imgHeader);
    
    
        homeContent.append(menuCategory("Starters") );
        homeContent.append(menuCategory("Burgers"));
        homeContent.append(menuCategory("Toppings"));
        homeContent.append(menuCategory("Sauces"));
        homeContent.append(menuCategory("Extras"));
        homeContent.append(menuCategory("Substitutions"));

        return homeContent;
    }
    

    function menuCategory (heading) {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.innerHTML = `<h1>${heading}</h1>`;

        const menuFlexBox = document.createElement('div');
        menuFlexBox.classList.add('menu-grid')
        
        if(heading=="Starters")
        {
            menuList.starters.map((mi) => {
                menuFlexBox.append(new menuItem(mi.name, mi.price, mi.description).getMenuItemDOM());
            })
        }

        else if(heading=="Burgers")
        {
            menuList.burgers.map((b) => {
                menuFlexBox.append(new menuItem(b.name, b.price).getMenuItemDOM())
            })
        }

        else if(heading=="Toppings")
        {
            menuList.choices.toppings.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }
        else if(heading=="Sauces")
        {
            menuList.choices.sauces.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }
        else if(heading=="Extras")
        {
            menuList.choices.extras.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }

        else if(heading=="Substitutions")
        {
            menuList.choices.substitutions.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }


        content_card.append(menuFlexBox)

        return content_card
    }

    return { loadMenu }

})();


class menuItem {

    constructor(name = "", price = 0.0, description = "") {
        this.name = name;
        this.description = description;
        this.price = (Math.round(price * 100) / 100).toFixed(2);;
    }


    getMenuItemDOM() {
        let menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menu-item');

        let itemName = document.createElement('h2');
        itemName.textContent = this.name;

        let itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        
        if(this.price==0.0)
        {
            itemPrice.textContent = "";
        }
        else {
            itemPrice.textContent = "$" + this.price;
        }

        let itemDescription = document.createElement('p');
        itemDescription.textContent = this.description;

        menuItemContainer.append(itemName, itemPrice, itemDescription);

        return menuItemContainer;

    }

}


const menuList = {

    starters: [{
        name: "Potato & Cheddar Perogies",
        price: 7.50,
        description: "Fried potato cheddar dumplings, topped with cheddar cheese, bacon bits, salsa & sour cream",

    },
    {
        name: "Onion Rings",
        price: 6.00,
        description: "Thick Cut, Crisp-fried onion rings",
    },
    {
        name: "Deep Fried Pickles",
        price: 7.00,
        description: "Sliced Dill Pickle Spears, breaded & fried crispy. Served s Dipping Sauce",
    }],

    burgers: [
        {
        name: "Plain",
        price: 6.00,
    },
    {
        name: "Original",
        price: 7.25,
    },
    {
        name: "Cheese",
        price: 6.00,
    },
    {
        name: "Bacon Cheese",
        price: 8.75,
    },
    {
        name: "Crispy Chicken",
        price: 8.00,
    },
    {
        name: "Fried Haddock",
        price: 8.00
    }],
    
    choices: {
        toppings: [
            "Lettuce",
            "Tomato",
            "Raw Onion",
            "Red Onion",
            "Pickles",
            "Fried Onion",
            "Banana Peppers",
        ],

        sauces: [
            "Mayo",
            "Ketchup",
            "Mustard",
            "Relish",
            "BBQ Sauce",
            "Sweet Chili",
            "Hot Sauce",
            "Tartar Sauce",
        ],

        extras: [
            "Bacon +$1.00",
            "Cheese +$1.00",
            "Beef Patty +$2.50",
            "Extra Fish +$3.50",
            "Extra Chicken +$2.50",
        ],

        substitutions: [
            "Lettuce Bun +$1.00",
            "Gluten Free Bun +$1.50",
        ],
    },    
}





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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
//Pulls in pageload to set up tabs in header.
//pulls in all 3 tab content modules
//initially loads the home module content to the DOM
//has event listeners for each tab that will clear the dom and re-fill it with the necessary content
 










const uiFunctions = (() => {

    const content = document.createElement('div');
    content.setAttribute('id','content');
    document.body.append(content);
    const pageContent = document.getElementById('content');

    const pageLoad = () => {
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_1__.headerUI.loadHeader() );
        pageContent.append( _home_js__WEBPACK_IMPORTED_MODULE_2__.homeUI.loadHome() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
    };

    const loadHome = () => {
        resetDOM(pageContent);
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_1__.headerUI.loadHeader() );
        pageContent.append( _home_js__WEBPACK_IMPORTED_MODULE_2__.homeUI.loadHome() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
    };

    const loadMenu = () => {
        resetDOM(pageContent);
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_1__.headerUI.loadHeader() );
        pageContent.append( _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuUI.loadMenu() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
    };

    const loadContact = () => {
        resetDOM(pageContent);
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_1__.headerUI.loadHeader() );
        pageContent.append( _contact_js__WEBPACK_IMPORTED_MODULE_4__.contactUI.loadContact() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
    };

    const resetDOM = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const setListeners = () => {
        _header_js__WEBPACK_IMPORTED_MODULE_1__.headerUI.setEventListeners(loadHome, loadMenu, loadContact);
    };

    return { pageLoad, setListeners };

})();



uiFunctions.pageLoad();

uiFunctions.setListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsNkJBQTZCLFNBQVMsT0FBTyxhQUFhLGlGQUFpRixZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7QUFDaUI7QUFDSjtBQUNBO0FBQ007QUFDTDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFtQjtBQUMvQyw0QkFBNEIscURBQWU7QUFDM0MsMkJBQTJCLHNEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFtQjtBQUMvQyw0QkFBNEIscURBQWU7QUFDM0MsMkJBQTJCLHNEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFtQjtBQUMvQyw0QkFBNEIscURBQWU7QUFDM0MsMkJBQTJCLHNEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFtQjtBQUMvQyw0QkFBNEIsOERBQXFCO0FBQ2pELDJCQUEyQixzREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUEwQjtBQUNsQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLXdoaXRlOiAjZmZmYmZiO1xcclxcbiAgICAtLXdoaXRlLTgwOiAjZmZmYmZiYjA7XFxyXFxuICAgIC0tZ3JleTogI2YwZWVmMTtcXHJcXG4gICAgLS1ibGFjazogIzA1MDUwNTtcXHJcXG4gICAgLS1ibGFjay01MDogIzA1MDUwNTgxO1xcclxcbiAgICAtLXJlZDogI2ZmNzA3MDtcXHJcXG4gICAgLS1saWdodC1ncmVlbjogIzlmZmY5YztcXHJcXG4gICAgLS1saWdodC1yZWQ6ICNmZjljOWM7XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAtLXNwYWNpbmcteHM6IDVweDtcXHJcXG4gICAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcclxcbiAgICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxyXFxuICAgIC0tc3BhY2luZy1sZzogMjBweDtcXHJcXG4gICAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcclxcbiAgICAtLWgxLWZvbnQtc2l6ZTogY2xhbXAoMjRweCwgY2FsYygxMCptaW4oMXZ3LCAxdmgpKSwgOTZweCk7XFxyXFxuICAgIC0taDItZm9udC1zaXplOiBjbGFtcCgxNnB4LCBjYWxjKDcqbWluKDF2dywgMXZoKSksIDM2cHgpO1xcclxcbiAgICAtLWgzLWZvbnQtc2l6ZTogY2xhbXAoMTRweCwgY2FsYyg1Km1pbigxdncsIDF2aCkpLCAyNHB4KTtcXHJcXG4gICAgLS1wLWZvbnQtc2l6ZTogY2xhbXAoMTJweCwgY2FsYygyKm1pbigxdncsIDF2aCkpLCAxOHB4KTtcXHJcXG4gICAgLS1kZXNjcmlwdGlvbi1mb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoMS43Km1pbigxdncsIDF2aCkpLCAxOHB4KTtcXHJcXG4gICAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogQ1NTIFJFU0VUICovXFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ10sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVVElMUyAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7ICovXFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pIHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuOmhvdmVyLCAubmF2YmFyIGRpdjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdhbWUtYm94LmluYWN0aXZlOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLWFkZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1saWdodC1ncmVlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1saWdodC1yZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcclxcbiAgfVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oZWFkZXIgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ28tYmlnIHtcXHJcXG4gICAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBkaXYge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNjBweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW1naGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAtMjtcXHJcXG4gICAgdG9wOjBweDtcXHJcXG4gICAgd2lkdGg6IG1heCgxMDB2dywgMTAyNHB4KTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQge1xcclxcbiAgICB3aWR0aDogbWF4KDMwMHB4LCA4MCUpO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtODApO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkLmhvbWUtYmFubmVyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCBoMSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCBoMiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cXHJcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA0MDBweCwgNTAwcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCAubWVudS1pdGVtIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHAge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gcC5wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSAuaXRlbS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXAtZW1iZWQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBNT0RBTFMgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ldy1nYW1lLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmV3LWdhbWUtZm9ybSBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAub3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXHJcXG4gICAgLmhlYWRlciAuY29udGFpbmVyIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICA6cm9vdCB7XFxyXFxuICAgICAgLS1zcGFjaW5nLXhsOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseURBQXlEO0lBQ3pELHdEQUF3RDtJQUN4RCx3REFBd0Q7SUFDeEQsdURBQXVEO0lBQ3ZELG1FQUFtRTtJQUNuRSx5QkFBeUI7SUFDekIseUNBQXlDO0VBQzNDOztBQUVGLGNBQWM7O0FBRWQ7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osY0FBYztF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OztFQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVGO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQ0FBbUM7RUFDckM7OztBQUdGO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7O0FBR0Ysa0JBQWtCOztBQUVsQjtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLHNCQUFzQjtNQUN0Qiw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0td2hpdGU6ICNmZmZiZmI7XFxyXFxuICAgIC0td2hpdGUtODA6ICNmZmZiZmJiMDtcXHJcXG4gICAgLS1ncmV5OiAjZjBlZWYxO1xcclxcbiAgICAtLWJsYWNrOiAjMDUwNTA1O1xcclxcbiAgICAtLWJsYWNrLTUwOiAjMDUwNTA1ODE7XFxyXFxuICAgIC0tcmVkOiAjZmY3MDcwO1xcclxcbiAgICAtLWxpZ2h0LWdyZWVuOiAjOWZmZjljO1xcclxcbiAgICAtLWxpZ2h0LXJlZDogI2ZmOWM5YztcXHJcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIC0tc3BhY2luZy14czogNXB4O1xcclxcbiAgICAtLXNwYWNpbmctc206IDEwcHg7XFxyXFxuICAgIC0tc3BhY2luZy1tZDogMTVweDtcXHJcXG4gICAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcclxcbiAgICAtLXNwYWNpbmcteGw6IDQwcHg7XFxyXFxuICAgIC0taDEtZm9udC1zaXplOiBjbGFtcCgyNHB4LCBjYWxjKDEwKm1pbigxdncsIDF2aCkpLCA5NnB4KTtcXHJcXG4gICAgLS1oMi1mb250LXNpemU6IGNsYW1wKDE2cHgsIGNhbGMoNyptaW4oMXZ3LCAxdmgpKSwgMzZweCk7XFxyXFxuICAgIC0taDMtZm9udC1zaXplOiBjbGFtcCgxNHB4LCBjYWxjKDUqbWluKDF2dywgMXZoKSksIDI0cHgpO1xcclxcbiAgICAtLXAtZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDIqbWluKDF2dywgMXZoKSksIDE4cHgpO1xcclxcbiAgICAtLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZTogY2xhbXAoMTJweCwgY2FsYygxLjcqbWluKDF2dywgMXZoKSksIDE4cHgpO1xcclxcbiAgICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcclxcbiAgICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBDU1MgUkVTRVQgKi9cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSxcXHJcXG5pbnB1dFt0eXBlPSdudW1iZXInXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qIFVUSUxTICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIC8qIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTsgKi9cXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuIHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG46aG92ZXIsIC5uYXZiYXIgZGl2OmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7ICovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2FtZS1ib3guaW5hY3RpdmU6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4tYWRkIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLWxpZ2h0LWdyZWVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLWxpZ2h0LXJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhlYWRlciAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9nby1iaWcge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA2MHB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbi5pbWdoZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IC0yO1xcclxcbiAgICB0b3A6MHB4O1xcclxcbiAgICB3aWR0aDogbWF4KDEwMHZ3LCAxMDI0cHgpO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCB7XFxyXFxuICAgIHdpZHRoOiBtYXgoMzAwcHgsIDgwJSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS04MCk7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteGwpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQuaG9tZS1iYW5uZXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkIGgxIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkIGgyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkIHAge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDQwMHB4LCA1MDBweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkIC5tZW51LWl0ZW0gaDIge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVzY3JpcHRpb24tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSBwLnByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIC5pdGVtLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcC1lbWJlZCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIE1PREFMUyAqL1xcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmV3LWdhbWUtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uZXctZ2FtZS1mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5vdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuLyogTUVESUEgUVVFUklFUyAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAuaGVhZGVyIC5jb250YWluZXIge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1zbSk7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAubWFpbiB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIDpyb290IHtcXHJcXG4gICAgICAtLXNwYWNpbmcteGw6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBjb250YWN0IHBhZ2VcclxuXHJcbmNvbnN0IGNvbnRhY3RVSSA9ICgoKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZENvbnRhY3QgKCkge1xyXG4gICAgICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgICAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGltZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZ0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpbWdoZWFkZXInKTtcclxuICAgICAgICBpbWdIZWFkZXIuc3JjID0gJy4uL3NyYy9qb25ueXNidXJnZXIuanBnJztcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoaW1nSGVhZGVyKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKCBjb250ZW50Q2FyZChcIkNvbnRhY3QgVXNcIiwgXCJQaG9uZTogOTAyLTU1NS01NTU1XCIsIFwiRW1haWw6IGpvbm55c0BlbWFpbC5jb21cIikgKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoY29udGVudENhcmQoXCJMb2NhdGlvblwiLFwiRmluZCB1cyBhdCA0Mjg3IEh3eSAxLCBCZXJ3aWNrIE5TXCIpKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBob21lQ29udGVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY29udGVudENhcmQgKGhlYWRpbmcsIHAxLCBwMj1cIlwiKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudF9jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZCcpO1xyXG4gICAgICAgIGNvbnRlbnRfY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgyPiR7aGVhZGluZ308L2gyPlxyXG4gICAgICAgIDxwPiR7cDF9PC9wPlxyXG4gICAgICAgIDxwPiR7cDJ9PC9wPmA7XHJcblxyXG4gICAgICAgIGlmKGhlYWRpbmc9PVwiTG9jYXRpb25cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcEVtYmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1hcEVtYmVkLmNsYXNzTGlzdC5hZGQoJ21hcC1lbWJlZCcpO1xyXG4gICAgICAgICAgICBtYXBFbWJlZC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDExMjc4LjQxMTU4NjE5NjcyNiEyZC02NC43MzY2NTkzITNkNDUuMDMyOTg2MSEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHhiOTUyN2QzMTQzMTVlYjE5ITJzSm9ubnkmIzM5O3MlMjBDb29raG91c2UlMjBhbmQlMjBJY2UlMjBDcmVhbSUyMFNob3AhNWUwITNtMiExc2VuITJzY2EhNHYxNjQ5NTQ5NzYwNzg2ITVtMiExc2VuITJzY2FcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0MDBweFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YDtcclxuICAgICAgICAgICAgY29udGVudF9jYXJkLmFwcGVuZChtYXBFbWJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRfY2FyZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGxvYWRDb250YWN0IH1cclxuXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjb250YWN0VUkgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJET00oKSB7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXJPYmouY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXJPYmouaW5uZXJIVE1MID0gIFwiPHA+TWFkZSBieSA8c3Ryb25nPkFkYW0gQ29ubmVyPC9zdHJvbmc+PC9wPlwiO1xyXG4gICAgcmV0dXJuIGZvb3Rlck9iajtcclxufTsiLCIvL2xvYWQgYW5kIGV4cG9ydCBwYWdlIGhlYWRlclxyXG5cclxuY29uc3QgaGVhZGVyVUkgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGhlYWRlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xvZ28tYmlnJyk7XHJcbiAgICAgICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJKb25ueSdzIEdyaWxsXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcclxuICAgICAgICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XHJcbiAgICAgICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xyXG4gICAgXHJcbiAgICAgICAgbmF2QmFyLmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcclxuICAgICAgICBoZWFkZXJDb250ZW50LmFwcGVuZChwYWdlVGl0bGUsIG5hdkJhcik7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZChoZWFkZXJDb250ZW50KTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKGEsIGIsIGMpID0+IHtcclxuICAgICAgICBob21lQnRuLm9uY2xpY2sgPSBhO1xyXG4gICAgICAgIG1lbnVCdG4ub25jbGljayA9IGI7XHJcbiAgICAgICAgY29udGFjdEJ0bi5vbmNsaWNrID0gYztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZEhlYWRlciwgc2V0RXZlbnRMaXN0ZW5lcnMgfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgaGVhZGVyVUkgfTsiLCIvLyBob21lIHBhZ2VcclxuXHJcbmNvbnN0IGhvbWVVSSA9ICgoKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEhvbWUgKCkge1xyXG4gICAgICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgICAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGltZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZ0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpbWdoZWFkZXInKTtcclxuICAgICAgICBpbWdIZWFkZXIuc3JjID0gJy4uL3NyYy9qb25ueXNidXJnZXIuanBnJztcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoaW1nSGVhZGVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZCggY29udGVudENhcmQoXHJcbiAgICAgICAgICAgIFwiV2VsY29tZSB0byBKb25ueSdzIEdyaWxsXCIsXHJcbiAgICAgICAgICAgIFwiUHJvdWRseSBzZXJ2aW5nIHRoZSBBbm5hcG9saXMgVmFsbGV5J3MgYmVzdCBCdXJnZXJzLCBQb3V0aW5lcyAmIEljZSBDcmVhbSBzaW5jZSAyMDA5LiBDb21mb3J0IGZvb2QsIGNvb2tlZCBmcmVzaCB0byBvcmRlci5cIlxyXG4gICAgICAgICkgKTtcclxuXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNvbnRlbnRDYXJkIChoZWFkaW5nLCBwYXJhZ3JhcGgpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYmFubmVyJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDE+JHtoZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgPHA+JHtwYXJhZ3JhcGh9PC9wPmA7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY29udGVudF9jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZEhvbWUgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGhvbWVVSSB9OyIsIi8vIG1lbnUgcGFnZVxyXG5cclxuY29uc3QgbWVudVVJID0gKCgpID0+IHtcclxuXHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkTWVudSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcgbWVudScpO1xyXG4gICAgICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgICAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGltZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZ0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpbWdoZWFkZXInKTtcclxuICAgICAgICBpbWdIZWFkZXIuc3JjID0gJy4uL3NyYy9qb25ueXNidXJnZXIuanBnJztcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoaW1nSGVhZGVyKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIlN0YXJ0ZXJzXCIpICk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIkJ1cmdlcnNcIikpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChtZW51Q2F0ZWdvcnkoXCJUb3BwaW5nc1wiKSk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIlNhdWNlc1wiKSk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIkV4dHJhc1wiKSk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIlN1YnN0aXR1dGlvbnNcIikpO1xyXG5cclxuICAgICAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBtZW51Q2F0ZWdvcnkgKGhlYWRpbmcpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmlubmVySFRNTCA9IGA8aDE+JHtoZWFkaW5nfTwvaDE+YDtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUZsZXhCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51RmxleEJveC5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhlYWRpbmc9PVwiU3RhcnRlcnNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LnN0YXJ0ZXJzLm1hcCgobWkpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVGbGV4Qm94LmFwcGVuZChuZXcgbWVudUl0ZW0obWkubmFtZSwgbWkucHJpY2UsIG1pLmRlc2NyaXB0aW9uKS5nZXRNZW51SXRlbURPTSgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJCdXJnZXJzXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZW51TGlzdC5idXJnZXJzLm1hcCgoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUZsZXhCb3guYXBwZW5kKG5ldyBtZW51SXRlbShiLm5hbWUsIGIucHJpY2UpLmdldE1lbnVJdGVtRE9NKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKGhlYWRpbmc9PVwiVG9wcGluZ3NcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmNob2ljZXMudG9wcGluZ3MubWFwKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51RmxleEJveC5hcHBlbmQobmV3IG1lbnVJdGVtKHQpLmdldE1lbnVJdGVtRE9NKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJTYXVjZXNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmNob2ljZXMuc2F1Y2VzLm1hcCgodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUZsZXhCb3guYXBwZW5kKG5ldyBtZW51SXRlbSh0KS5nZXRNZW51SXRlbURPTSgpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGhlYWRpbmc9PVwiRXh0cmFzXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZW51TGlzdC5jaG9pY2VzLmV4dHJhcy5tYXAoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVGbGV4Qm94LmFwcGVuZChuZXcgbWVudUl0ZW0odCkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJTdWJzdGl0dXRpb25zXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZW51TGlzdC5jaG9pY2VzLnN1YnN0aXR1dGlvbnMubWFwKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51RmxleEJveC5hcHBlbmQobmV3IG1lbnVJdGVtKHQpLmdldE1lbnVJdGVtRE9NKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29udGVudF9jYXJkLmFwcGVuZChtZW51RmxleEJveClcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRfY2FyZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGxvYWRNZW51IH1cclxuXHJcbn0pKCk7XHJcblxyXG5cclxuY2xhc3MgbWVudUl0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcIlwiLCBwcmljZSA9IDAuMCwgZGVzY3JpcHRpb24gPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IChNYXRoLnJvdW5kKHByaWNlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTs7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1lbnVJdGVtRE9NKCkge1xyXG4gICAgICAgIGxldCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xyXG5cclxuICAgICAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJpY2U9PTAuMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBcIiRcIiArIHRoaXMucHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtTmFtZSwgaXRlbVByaWNlLCBpdGVtRGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVudUl0ZW1Db250YWluZXI7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IG1lbnVMaXN0ID0ge1xyXG5cclxuICAgIHN0YXJ0ZXJzOiBbe1xyXG4gICAgICAgIG5hbWU6IFwiUG90YXRvICYgQ2hlZGRhciBQZXJvZ2llc1wiLFxyXG4gICAgICAgIHByaWNlOiA3LjUwLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZyaWVkIHBvdGF0byBjaGVkZGFyIGR1bXBsaW5ncywgdG9wcGVkIHdpdGggY2hlZGRhciBjaGVlc2UsIGJhY29uIGJpdHMsIHNhbHNhICYgc291ciBjcmVhbVwiLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJPbmlvbiBSaW5nc1wiLFxyXG4gICAgICAgIHByaWNlOiA2LjAwLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaWNrIEN1dCwgQ3Jpc3AtZnJpZWQgb25pb24gcmluZ3NcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEZWVwIEZyaWVkIFBpY2tsZXNcIixcclxuICAgICAgICBwcmljZTogNy4wMCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTbGljZWQgRGlsbCBQaWNrbGUgU3BlYXJzLCBicmVhZGVkICYgZnJpZWQgY3Jpc3B5LiBTZXJ2ZWQgcyBEaXBwaW5nIFNhdWNlXCIsXHJcbiAgICB9XSxcclxuXHJcbiAgICBidXJnZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiUGxhaW5cIixcclxuICAgICAgICBwcmljZTogNi4wMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJPcmlnaW5hbFwiLFxyXG4gICAgICAgIHByaWNlOiA3LjI1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNoZWVzZVwiLFxyXG4gICAgICAgIHByaWNlOiA2LjAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJhY29uIENoZWVzZVwiLFxyXG4gICAgICAgIHByaWNlOiA4Ljc1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNyaXNweSBDaGlja2VuXCIsXHJcbiAgICAgICAgcHJpY2U6IDguMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRnJpZWQgSGFkZG9ja1wiLFxyXG4gICAgICAgIHByaWNlOiA4LjAwXHJcbiAgICB9XSxcclxuICAgIFxyXG4gICAgY2hvaWNlczoge1xyXG4gICAgICAgIHRvcHBpbmdzOiBbXHJcbiAgICAgICAgICAgIFwiTGV0dHVjZVwiLFxyXG4gICAgICAgICAgICBcIlRvbWF0b1wiLFxyXG4gICAgICAgICAgICBcIlJhdyBPbmlvblwiLFxyXG4gICAgICAgICAgICBcIlJlZCBPbmlvblwiLFxyXG4gICAgICAgICAgICBcIlBpY2tsZXNcIixcclxuICAgICAgICAgICAgXCJGcmllZCBPbmlvblwiLFxyXG4gICAgICAgICAgICBcIkJhbmFuYSBQZXBwZXJzXCIsXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc2F1Y2VzOiBbXHJcbiAgICAgICAgICAgIFwiTWF5b1wiLFxyXG4gICAgICAgICAgICBcIktldGNodXBcIixcclxuICAgICAgICAgICAgXCJNdXN0YXJkXCIsXHJcbiAgICAgICAgICAgIFwiUmVsaXNoXCIsXHJcbiAgICAgICAgICAgIFwiQkJRIFNhdWNlXCIsXHJcbiAgICAgICAgICAgIFwiU3dlZXQgQ2hpbGlcIixcclxuICAgICAgICAgICAgXCJIb3QgU2F1Y2VcIixcclxuICAgICAgICAgICAgXCJUYXJ0YXIgU2F1Y2VcIixcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBleHRyYXM6IFtcclxuICAgICAgICAgICAgXCJCYWNvbiArJDEuMDBcIixcclxuICAgICAgICAgICAgXCJDaGVlc2UgKyQxLjAwXCIsXHJcbiAgICAgICAgICAgIFwiQmVlZiBQYXR0eSArJDIuNTBcIixcclxuICAgICAgICAgICAgXCJFeHRyYSBGaXNoICskMy41MFwiLFxyXG4gICAgICAgICAgICBcIkV4dHJhIENoaWNrZW4gKyQyLjUwXCIsXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc3Vic3RpdHV0aW9uczogW1xyXG4gICAgICAgICAgICBcIkxldHR1Y2UgQnVuICskMS4wMFwiLFxyXG4gICAgICAgICAgICBcIkdsdXRlbiBGcmVlIEJ1biArJDEuNTBcIixcclxuICAgICAgICBdLFxyXG4gICAgfSwgICAgXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgbWVudVVJIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vUHVsbHMgaW4gcGFnZWxvYWQgdG8gc2V0IHVwIHRhYnMgaW4gaGVhZGVyLlxyXG4vL3B1bGxzIGluIGFsbCAzIHRhYiBjb250ZW50IG1vZHVsZXNcclxuLy9pbml0aWFsbHkgbG9hZHMgdGhlIGhvbWUgbW9kdWxlIGNvbnRlbnQgdG8gdGhlIERPTVxyXG4vL2hhcyBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lsbCBjbGVhciB0aGUgZG9tIGFuZCByZS1maWxsIGl0IHdpdGggdGhlIG5lY2Vzc2FyeSBjb250ZW50XHJcbiBcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgaGVhZGVyVUkgfSBmcm9tICcuL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7IGhvbWVVSSB9IGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCB7IG1lbnVVSSB9IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCB7IGNvbnRhY3RVSSB9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCBmb290ZXJET00gZnJvbSAnLi9mb290ZXIuanMnO1xyXG5cclxuXHJcblxyXG5jb25zdCB1aUZ1bmN0aW9ucyA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBoZWFkZXJVSS5sb2FkSGVhZGVyKCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhvbWVVSS5sb2FkSG9tZSgpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKGZvb3RlckRPTSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRET00ocGFnZUNvbnRlbnQpO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggaGVhZGVyVUkubG9hZEhlYWRlcigpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBob21lVUkubG9hZEhvbWUoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZChmb290ZXJET00oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0RE9NKHBhZ2VDb250ZW50KTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhlYWRlclVJLmxvYWRIZWFkZXIoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggbWVudVVJLmxvYWRNZW51KCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoZm9vdGVyRE9NKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcclxuICAgICAgICByZXNldERPTShwYWdlQ29udGVudCk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBoZWFkZXJVSS5sb2FkSGVhZGVyKCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGNvbnRhY3RVSS5sb2FkQ29udGFjdCgpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKGZvb3RlckRPTSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRET00gPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBoZWFkZXJVSS5zZXRFdmVudExpc3RlbmVycyhsb2FkSG9tZSwgbG9hZE1lbnUsIGxvYWRDb250YWN0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgcGFnZUxvYWQsIHNldExpc3RlbmVycyB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxudWlGdW5jdGlvbnMucGFnZUxvYWQoKTtcclxuXHJcbnVpRnVuY3Rpb25zLnNldExpc3RlbmVycygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var _jonnysburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jonnysburger.jpg */ "./src/jonnysburger.jpg");
// contact page



const contactUI = (() => {

    function loadContact () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = new Image();
        imgHeader.classList.add('imgheader');
        imgHeader.src = _jonnysburger_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _jonnysburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jonnysburger.jpg */ "./src/jonnysburger.jpg");
// home page



const homeUI = (() => {

    function loadHome () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');


        const imgHeader = new Image();
        imgHeader.classList.add('imgheader');
        imgHeader.src = _jonnysburger_jpg__WEBPACK_IMPORTED_MODULE_0__;
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







/*
import Icon from './icon.png';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
*/

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
/* harmony import */ var _jonnysburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jonnysburger.jpg */ "./src/jonnysburger.jpg");
// menu page


const menuUI = (() => {

    

    function loadMenu () {
        console.log('loading menu');
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = new Image();
        imgHeader.classList.add('imgheader');
        imgHeader.src = _jonnysburger_jpg__WEBPACK_IMPORTED_MODULE_0__;
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





/***/ }),

/***/ "./src/jonnysburger.jpg":
/*!******************************!*\
  !*** ./src/jonnysburger.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bceea72e3d6c5a5c2fb.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsNkJBQTZCLFNBQVMsT0FBTyxhQUFhLGlGQUFpRixZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEs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Q0E7QUFDQTtBQUNBO0FBQ3NCO0FBQ2lCO0FBQ0o7QUFDQTtBQUNNO0FBQ0w7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBbUI7QUFDL0MsNEJBQTRCLHFEQUFlO0FBQzNDLDJCQUEyQixzREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBbUI7QUFDL0MsNEJBQTRCLHFEQUFlO0FBQzNDLDJCQUEyQixzREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBbUI7QUFDL0MsNEJBQTRCLHFEQUFlO0FBQzNDLDJCQUEyQixzREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyREFBbUI7QUFDL0MsNEJBQTRCLDhEQUFxQjtBQUNqRCwyQkFBMkIsc0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBMEI7QUFDbEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS13aGl0ZTogI2ZmZmJmYjtcXHJcXG4gICAgLS13aGl0ZS04MDogI2ZmZmJmYmIwO1xcclxcbiAgICAtLWdyZXk6ICNmMGVlZjE7XFxyXFxuICAgIC0tYmxhY2s6ICMwNTA1MDU7XFxyXFxuICAgIC0tYmxhY2stNTA6ICMwNTA1MDU4MTtcXHJcXG4gICAgLS1yZWQ6ICNmZjcwNzA7XFxyXFxuICAgIC0tbGlnaHQtZ3JlZW46ICM5ZmZmOWM7XFxyXFxuICAgIC0tbGlnaHQtcmVkOiAjZmY5YzljO1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgLS1zcGFjaW5nLXhzOiA1cHg7XFxyXFxuICAgIC0tc3BhY2luZy1zbTogMTBweDtcXHJcXG4gICAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcclxcbiAgICAtLXNwYWNpbmctbGc6IDIwcHg7XFxyXFxuICAgIC0tc3BhY2luZy14bDogNDBweDtcXHJcXG4gICAgLS1oMS1mb250LXNpemU6IGNsYW1wKDI0cHgsIGNhbGMoMTAqbWluKDF2dywgMXZoKSksIDk2cHgpO1xcclxcbiAgICAtLWgyLWZvbnQtc2l6ZTogY2xhbXAoMTZweCwgY2FsYyg3Km1pbigxdncsIDF2aCkpLCAzNnB4KTtcXHJcXG4gICAgLS1oMy1mb250LXNpemU6IGNsYW1wKDE0cHgsIGNhbGMoNSptaW4oMXZ3LCAxdmgpKSwgMjRweCk7XFxyXFxuICAgIC0tcC1mb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoMiptaW4oMXZ3LCAxdmgpKSwgMThweCk7XFxyXFxuICAgIC0tZGVzY3JpcHRpb24tZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDEuNyptaW4oMXZ3LCAxdmgpKSwgMThweCk7XFxyXFxuICAgIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcclxcbiAgfVxcclxcblxcclxcbi8qIENTUyBSRVNFVCAqL1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAvKiBmb290ZXIgc3VwcG9ydCAqL1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbmlucHV0W3R5cGU9J251bWJlciddLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVVRJTFMgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgLyogbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpOyAqL1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4ge1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKSB2YXIoLS1zcGFjaW5nLW1kKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bjpob3ZlciwgLm5hdmJhciBkaXY6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXHJcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nYW1lLWJveC5pbmFjdGl2ZTpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1hZGQge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4tbGlnaHQtZ3JlZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4tbGlnaHQtcmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcmVkKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaGVhZGVyIC5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dvLWJpZyB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXIgZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDYwcHg7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBNQUlOICovXFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmltZ2hlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogLTI7XFxyXFxuICAgIHRvcDowcHg7XFxyXFxuICAgIHdpZHRoOiBtYXgoMTAwdncsIDEwMjRweCk7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgODAlKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLTgwKTtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZC5ob21lLWJhbm5lciB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQgaDEge1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWgxLWZvbnQtc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQgaDIge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5tZW51LWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNDAwcHgsIDUwMHB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQgLm1lbnUtaXRlbSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSBwIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1kZXNjcmlwdGlvbi1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHAucHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gLml0ZW0td3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFwLWVtYmVkIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogTU9EQUxTICovXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uZXctZ2FtZS1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5ldy1nYW1lLWZvcm0gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4vKiBNRURJQSBRVUVSSUVTICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxyXFxuICAgIC5oZWFkZXIgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLXNtKTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5tYWluIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgOnJvb3Qge1xcclxcbiAgICAgIC0tc3BhY2luZy14bDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lB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LHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLDhCQUE4QjtFQUNoQzs7RUFFQSxXQUFXOztBQUViO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUNBQW1DO0VBQ3JDOzs7QUFHRjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7OztBQUdGLGtCQUFrQjs7QUFFbEI7SUFDSTtNQUNFLHNCQUFzQjtNQUN0QixzQkFBc0I7TUFDdEIsOEJBQThCO0lBQ2hDOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXdoaXRlOiAjZmZmYmZiO1xcclxcbiAgICAtLXdoaXRlLTgwOiAjZmZmYmZiYjA7XFxyXFxuICAgIC0tZ3JleTogI2YwZWVmMTtcXHJcXG4gICAgLS1ibGFjazogIzA1MDUwNTtcXHJcXG4gICAgLS1ibGFjay01MDogIzA1MDUwNTgxO1xcclxcbiAgICAtLXJlZDogI2ZmNzA3MDtcXHJcXG4gICAgLS1saWdodC1ncmVlbjogIzlmZmY5YztcXHJcXG4gICAgLS1saWdodC1yZWQ6ICNmZjljOWM7XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAtLXNwYWNpbmcteHM6IDVweDtcXHJcXG4gICAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcclxcbiAgICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxyXFxuICAgIC0tc3BhY2luZy1sZzogMjBweDtcXHJcXG4gICAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcclxcbiAgICAtLWgxLWZvbnQtc2l6ZTogY2xhbXAoMjRweCwgY2FsYygxMCptaW4oMXZ3LCAxdmgpKSwgOTZweCk7XFxyXFxuICAgIC0taDItZm9udC1zaXplOiBjbGFtcCgxNnB4LCBjYWxjKDcqbWluKDF2dywgMXZoKSksIDM2cHgpO1xcclxcbiAgICAtLWgzLWZvbnQtc2l6ZTogY2xhbXAoMTRweCwgY2FsYyg1Km1pbigxdncsIDF2aCkpLCAyNHB4KTtcXHJcXG4gICAgLS1wLWZvbnQtc2l6ZTogY2xhbXAoMTJweCwgY2FsYygyKm1pbigxdncsIDF2aCkpLCAxOHB4KTtcXHJcXG4gICAgLS1kZXNjcmlwdGlvbi1mb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoMS43Km1pbigxdncsIDF2aCkpLCAxOHB4KTtcXHJcXG4gICAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogQ1NTIFJFU0VUICovXFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLyogZm9vdGVyIHN1cHBvcnQgKi9cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIC8qIGZvb3RlciBzdXBwb3J0ICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ10sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVVElMUyAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7ICovXFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pIHZhcigtLXNwYWNpbmctbWQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuOmhvdmVyLCAubmF2YmFyIGRpdjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdhbWUtYm94LmluYWN0aXZlOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLWFkZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1saWdodC1ncmVlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1saWdodC1yZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1yZWQpO1xcclxcbiAgfVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oZWFkZXIgLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ28tYmlnIHtcXHJcXG4gICAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhciBkaXYge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogNjBweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW1naGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAtMjtcXHJcXG4gICAgdG9wOjBweDtcXHJcXG4gICAgd2lkdGg6IG1heCgxMDB2dywgMTAyNHB4KTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNhcmQge1xcclxcbiAgICB3aWR0aDogbWF4KDMwMHB4LCA4MCUpO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtODApO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jYXJkLmhvbWUtYmFubmVyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCBoMSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCBoMiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMi1mb250LXNpemUpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cXHJcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDMwMHB4LCA0MDBweCwgNTAwcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY2FyZCAubWVudS1pdGVtIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHAge1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLWRlc2NyaXB0aW9uLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gcC5wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSAuaXRlbS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXAtZW1iZWQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBNT0RBTFMgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5ldy1nYW1lLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmV3LWdhbWUtZm9ybSBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAub3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXHJcXG4gICAgLmhlYWRlciAuY29udGFpbmVyIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNpbmctc20pO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICA6cm9vdCB7XFxyXFxuICAgICAgLS1zcGFjaW5nLXhsOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gY29udGFjdCBwYWdlXHJcblxyXG5pbXBvcnQgQkdJbWFnZSBmcm9tICcuL2pvbm55c2J1cmdlci5qcGcnO1xyXG5cclxuY29uc3QgY29udGFjdFVJID0gKCgpID0+IHtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQ29udGFjdCAoKSB7XHJcbiAgICAgICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW1nSGVhZGVyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ2hlYWRlcicpO1xyXG4gICAgICAgIGltZ0hlYWRlci5zcmMgPSBCR0ltYWdlO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChpbWdIZWFkZXIpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoIGNvbnRlbnRDYXJkKFwiQ29udGFjdCBVc1wiLCBcIlBob25lOiA5MDItNTU1LTU1NTVcIiwgXCJFbWFpbDogam9ubnlzQGVtYWlsLmNvbVwiKSApO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChjb250ZW50Q2FyZChcIkxvY2F0aW9uXCIsXCJGaW5kIHVzIGF0IDQyODcgSHd5IDEsIEJlcndpY2sgTlNcIikpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGhvbWVDb250ZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjb250ZW50Q2FyZCAoaGVhZGluZywgcDEsIHAyPVwiXCIpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDI+JHtoZWFkaW5nfTwvaDI+XHJcbiAgICAgICAgPHA+JHtwMX08L3A+XHJcbiAgICAgICAgPHA+JHtwMn08L3A+YDtcclxuXHJcbiAgICAgICAgaWYoaGVhZGluZz09XCJMb2NhdGlvblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwRW1iZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFwRW1iZWQuY2xhc3NMaXN0LmFkZCgnbWFwLWVtYmVkJyk7XHJcbiAgICAgICAgICAgIG1hcEVtYmVkLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTEyNzguNDExNTg2MTk2NzI2ITJkLTY0LjczNjY1OTMhM2Q0NS4wMzI5ODYxITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGI5NTI3ZDMxNDMxNWViMTkhMnNKb25ueSYjMzk7cyUyMENvb2tob3VzZSUyMGFuZCUyMEljZSUyMENyZWFtJTIwU2hvcCE1ZTAhM20yITFzZW4hMnNjYSE0djE2NDk1NDk3NjA3ODYhNW0yITFzZW4hMnNjYVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjQwMHB4XCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gO1xyXG4gICAgICAgICAgICBjb250ZW50X2NhcmQuYXBwZW5kKG1hcEVtYmVkKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY29udGVudF9jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZENvbnRhY3QgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3RVSSB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckRPTSgpIHtcclxuXHJcbiAgICBjb25zdCBmb290ZXJPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlck9iai5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIGZvb3Rlck9iai5pbm5lckhUTUwgPSAgXCI8cD5NYWRlIGJ5IDxzdHJvbmc+QWRhbSBDb25uZXI8L3N0cm9uZz48L3A+XCI7XHJcbiAgICByZXR1cm4gZm9vdGVyT2JqO1xyXG59OyIsIi8vbG9hZCBhbmQgZXhwb3J0IHBhZ2UgaGVhZGVyXHJcblxyXG5jb25zdCBoZWFkZXJVSSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbG9nby1iaWcnKTtcclxuICAgICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkpvbm55J3MgR3JpbGxcIjtcclxuICAgICAgICBcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xyXG4gICAgICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICAgICAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XHJcbiAgICBcclxuICAgICAgICBuYXZCYXIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gICAgICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kKHBhZ2VUaXRsZSwgbmF2QmFyKTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoYSwgYiwgYykgPT4ge1xyXG4gICAgICAgIGhvbWVCdG4ub25jbGljayA9IGE7XHJcbiAgICAgICAgbWVudUJ0bi5vbmNsaWNrID0gYjtcclxuICAgICAgICBjb250YWN0QnRuLm9uY2xpY2sgPSBjO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBsb2FkSGVhZGVyLCBzZXRFdmVudExpc3RlbmVycyB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBoZWFkZXJVSSB9OyIsIi8vIGhvbWUgcGFnZVxyXG5cclxuaW1wb3J0IEJHSW1hZ2UgZnJvbSAnLi9qb25ueXNidXJnZXIuanBnJztcclxuXHJcbmNvbnN0IGhvbWVVSSA9ICgoKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEhvbWUgKCkge1xyXG4gICAgICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgICAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGltZ0hlYWRlciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZ0hlYWRlci5jbGFzc0xpc3QuYWRkKCdpbWdoZWFkZXInKTtcclxuICAgICAgICBpbWdIZWFkZXIuc3JjID0gQkdJbWFnZTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoaW1nSGVhZGVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZCggY29udGVudENhcmQoXHJcbiAgICAgICAgICAgIFwiV2VsY29tZSB0byBKb25ueSdzIEdyaWxsXCIsXHJcbiAgICAgICAgICAgIFwiUHJvdWRseSBzZXJ2aW5nIHRoZSBBbm5hcG9saXMgVmFsbGV5J3MgYmVzdCBCdXJnZXJzLCBQb3V0aW5lcyAmIEljZSBDcmVhbSBzaW5jZSAyMDA5LiBDb21mb3J0IGZvb2QsIGNvb2tlZCBmcmVzaCB0byBvcmRlci5cIlxyXG4gICAgICAgICkgKTtcclxuXHJcbiAgICBcclxuICAgICAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNvbnRlbnRDYXJkIChoZWFkaW5nLCBwYXJhZ3JhcGgpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYmFubmVyJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDE+JHtoZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgPHA+JHtwYXJhZ3JhcGh9PC9wPmA7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY29udGVudF9jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZEhvbWUgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGhvbWVVSSB9O1xyXG5cclxuXHJcbi8qXHJcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xyXG5cclxuIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgLy8gTG9kYXNoLCBub3cgaW1wb3J0ZWQgYnkgdGhpcyBzY3JpcHRcclxuICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcclxuXHJcbiAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxyXG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gIG15SWNvbi5zcmMgPSBJY29uO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiovIiwiLy8gbWVudSBwYWdlXHJcbmltcG9ydCBCR0ltYWdlIGZyb20gJy4vam9ubnlzYnVyZ2VyLmpwZyc7XHJcblxyXG5jb25zdCBtZW51VUkgPSAoKCkgPT4ge1xyXG5cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRNZW51ICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyBtZW51Jyk7XHJcbiAgICAgICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW1nSGVhZGVyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ2hlYWRlcicpO1xyXG4gICAgICAgIGltZ0hlYWRlci5zcmMgPSBCR0ltYWdlO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChpbWdIZWFkZXIpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiU3RhcnRlcnNcIikgKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiQnVyZ2Vyc1wiKSk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIlRvcHBpbmdzXCIpKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiU2F1Y2VzXCIpKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiRXh0cmFzXCIpKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiU3Vic3RpdHV0aW9uc1wiKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBob21lQ29udGVudDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIG1lbnVDYXRlZ29yeSAoaGVhZGluZykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnRfY2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuaW5uZXJIVE1MID0gYDxoMT4ke2hlYWRpbmd9PC9oMT5gO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51RmxleEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVGbGV4Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JpZCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaGVhZGluZz09XCJTdGFydGVyc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUxpc3Quc3RhcnRlcnMubWFwKChtaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUZsZXhCb3guYXBwZW5kKG5ldyBtZW51SXRlbShtaS5uYW1lLCBtaS5wcmljZSwgbWkuZGVzY3JpcHRpb24pLmdldE1lbnVJdGVtRE9NKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZihoZWFkaW5nPT1cIkJ1cmdlcnNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmJ1cmdlcnMubWFwKChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51RmxleEJveC5hcHBlbmQobmV3IG1lbnVJdGVtKGIubmFtZSwgYi5wcmljZSkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJUb3BwaW5nc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUxpc3QuY2hvaWNlcy50b3BwaW5ncy5tYXAoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVGbGV4Qm94LmFwcGVuZChuZXcgbWVudUl0ZW0odCkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihoZWFkaW5nPT1cIlNhdWNlc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUxpc3QuY2hvaWNlcy5zYXVjZXMubWFwKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51RmxleEJveC5hcHBlbmQobmV3IG1lbnVJdGVtKHQpLmdldE1lbnVJdGVtRE9NKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJFeHRyYXNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmNob2ljZXMuZXh0cmFzLm1hcCgodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUZsZXhCb3guYXBwZW5kKG5ldyBtZW51SXRlbSh0KS5nZXRNZW51SXRlbURPTSgpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZihoZWFkaW5nPT1cIlN1YnN0aXR1dGlvbnNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmNob2ljZXMuc3Vic3RpdHV0aW9ucy5tYXAoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVGbGV4Qm94LmFwcGVuZChuZXcgbWVudUl0ZW0odCkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb250ZW50X2NhcmQuYXBwZW5kKG1lbnVGbGV4Qm94KVxyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudF9jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZE1lbnUgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5jbGFzcyBtZW51SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiXCIsIHByaWNlID0gMC4wLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gKE1hdGgucm91bmQocHJpY2UgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpOztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0TWVudUl0ZW1ET00oKSB7XHJcbiAgICAgICAgbGV0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcmljZT09MC4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiJFwiICsgdGhpcy5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1EZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51SXRlbUNvbnRhaW5lcjtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgbWVudUxpc3QgPSB7XHJcblxyXG4gICAgc3RhcnRlcnM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJQb3RhdG8gJiBDaGVkZGFyIFBlcm9naWVzXCIsXHJcbiAgICAgICAgcHJpY2U6IDcuNTAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnJpZWQgcG90YXRvIGNoZWRkYXIgZHVtcGxpbmdzLCB0b3BwZWQgd2l0aCBjaGVkZGFyIGNoZWVzZSwgYmFjb24gYml0cywgc2Fsc2EgJiBzb3VyIGNyZWFtXCIsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk9uaW9uIFJpbmdzXCIsXHJcbiAgICAgICAgcHJpY2U6IDYuMDAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpY2sgQ3V0LCBDcmlzcC1mcmllZCBvbmlvbiByaW5nc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRlZXAgRnJpZWQgUGlja2xlc1wiLFxyXG4gICAgICAgIHByaWNlOiA3LjAwLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNsaWNlZCBEaWxsIFBpY2tsZSBTcGVhcnMsIGJyZWFkZWQgJiBmcmllZCBjcmlzcHkuIFNlcnZlZCBzIERpcHBpbmcgU2F1Y2VcIixcclxuICAgIH1dLFxyXG5cclxuICAgIGJ1cmdlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQbGFpblwiLFxyXG4gICAgICAgIHByaWNlOiA2LjAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk9yaWdpbmFsXCIsXHJcbiAgICAgICAgcHJpY2U6IDcuMjUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2hlZXNlXCIsXHJcbiAgICAgICAgcHJpY2U6IDYuMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmFjb24gQ2hlZXNlXCIsXHJcbiAgICAgICAgcHJpY2U6IDguNzUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3Jpc3B5IENoaWNrZW5cIixcclxuICAgICAgICBwcmljZTogOC4wMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGcmllZCBIYWRkb2NrXCIsXHJcbiAgICAgICAgcHJpY2U6IDguMDBcclxuICAgIH1dLFxyXG4gICAgXHJcbiAgICBjaG9pY2VzOiB7XHJcbiAgICAgICAgdG9wcGluZ3M6IFtcclxuICAgICAgICAgICAgXCJMZXR0dWNlXCIsXHJcbiAgICAgICAgICAgIFwiVG9tYXRvXCIsXHJcbiAgICAgICAgICAgIFwiUmF3IE9uaW9uXCIsXHJcbiAgICAgICAgICAgIFwiUmVkIE9uaW9uXCIsXHJcbiAgICAgICAgICAgIFwiUGlja2xlc1wiLFxyXG4gICAgICAgICAgICBcIkZyaWVkIE9uaW9uXCIsXHJcbiAgICAgICAgICAgIFwiQmFuYW5hIFBlcHBlcnNcIixcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBzYXVjZXM6IFtcclxuICAgICAgICAgICAgXCJNYXlvXCIsXHJcbiAgICAgICAgICAgIFwiS2V0Y2h1cFwiLFxyXG4gICAgICAgICAgICBcIk11c3RhcmRcIixcclxuICAgICAgICAgICAgXCJSZWxpc2hcIixcclxuICAgICAgICAgICAgXCJCQlEgU2F1Y2VcIixcclxuICAgICAgICAgICAgXCJTd2VldCBDaGlsaVwiLFxyXG4gICAgICAgICAgICBcIkhvdCBTYXVjZVwiLFxyXG4gICAgICAgICAgICBcIlRhcnRhciBTYXVjZVwiLFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIGV4dHJhczogW1xyXG4gICAgICAgICAgICBcIkJhY29uICskMS4wMFwiLFxyXG4gICAgICAgICAgICBcIkNoZWVzZSArJDEuMDBcIixcclxuICAgICAgICAgICAgXCJCZWVmIFBhdHR5ICskMi41MFwiLFxyXG4gICAgICAgICAgICBcIkV4dHJhIEZpc2ggKyQzLjUwXCIsXHJcbiAgICAgICAgICAgIFwiRXh0cmEgQ2hpY2tlbiArJDIuNTBcIixcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBzdWJzdGl0dXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiTGV0dHVjZSBCdW4gKyQxLjAwXCIsXHJcbiAgICAgICAgICAgIFwiR2x1dGVuIEZyZWUgQnVuICskMS41MFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LCAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBtZW51VUkgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vUHVsbHMgaW4gcGFnZWxvYWQgdG8gc2V0IHVwIHRhYnMgaW4gaGVhZGVyLlxyXG4vL3B1bGxzIGluIGFsbCAzIHRhYiBjb250ZW50IG1vZHVsZXNcclxuLy9pbml0aWFsbHkgbG9hZHMgdGhlIGhvbWUgbW9kdWxlIGNvbnRlbnQgdG8gdGhlIERPTVxyXG4vL2hhcyBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lsbCBjbGVhciB0aGUgZG9tIGFuZCByZS1maWxsIGl0IHdpdGggdGhlIG5lY2Vzc2FyeSBjb250ZW50XHJcbiBcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgaGVhZGVyVUkgfSBmcm9tICcuL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7IGhvbWVVSSB9IGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCB7IG1lbnVVSSB9IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCB7IGNvbnRhY3RVSSB9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCBmb290ZXJET00gZnJvbSAnLi9mb290ZXIuanMnO1xyXG5cclxuXHJcblxyXG5jb25zdCB1aUZ1bmN0aW9ucyA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBoZWFkZXJVSS5sb2FkSGVhZGVyKCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhvbWVVSS5sb2FkSG9tZSgpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKGZvb3RlckRPTSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRET00ocGFnZUNvbnRlbnQpO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggaGVhZGVyVUkubG9hZEhlYWRlcigpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBob21lVUkubG9hZEhvbWUoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZChmb290ZXJET00oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0RE9NKHBhZ2VDb250ZW50KTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhlYWRlclVJLmxvYWRIZWFkZXIoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggbWVudVVJLmxvYWRNZW51KCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoZm9vdGVyRE9NKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcclxuICAgICAgICByZXNldERPTShwYWdlQ29udGVudCk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBoZWFkZXJVSS5sb2FkSGVhZGVyKCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGNvbnRhY3RVSS5sb2FkQ29udGFjdCgpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKGZvb3RlckRPTSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRET00gPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBoZWFkZXJVSS5zZXRFdmVudExpc3RlbmVycyhsb2FkSG9tZSwgbG9hZE1lbnUsIGxvYWRDb250YWN0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgcGFnZUxvYWQsIHNldExpc3RlbmVycyB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxudWlGdW5jdGlvbnMucGFnZUxvYWQoKTtcclxuXHJcbnVpRnVuY3Rpb25zLnNldExpc3RlbmVycygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
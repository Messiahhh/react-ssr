/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/action */ \"./src/redux/action.js\");\n\nconst load = store => {\n  return store.dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_0__.loadData)());\n};\n\n//# sourceURL=webpack://create-react-app/./src/api/index.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/config */ \"./src/router/config.js\");\n\n\n\nfunction App() {\n  const el = _router_config__WEBPACK_IMPORTED_MODULE_2__.routes.map(route => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, route);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, el);\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/app.js?");

/***/ }),

/***/ "./src/components/contain.js":
/*!***********************************!*\
  !*** ./src/components/contain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contain)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/action */ \"./src/redux/action.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Contain() {\n  const fetching = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.isFetching);\n  const lists = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.lists);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // if (!lists) {\n    dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.loadData)()); // }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, fetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u52A0\\u8F7D\\u4E2D...\") : lists.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: index\n  }, item)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/signup\"\n  }, \"\\u6CE8\\u518C\"));\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/contain.js?");

/***/ }),

/***/ "./src/components/fallback.js":
/*!************************************!*\
  !*** ./src/components/fallback.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fallback)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// 404 page\n\nfunction Fallback() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"404\");\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/fallback.js?");

/***/ }),

/***/ "./src/components/signup.js":
/*!**********************************!*\
  !*** ./src/components/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Signup() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"\\u6CE8\\u518C\\u9875\\u9762\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"\\u6CE8\\u518C\"));\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/signup.js?");

/***/ }),

/***/ "./src/redux/action.js":
/*!*****************************!*\
  !*** ./src/redux/action.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_FETCHING\": () => (/* binding */ SET_FETCHING),\n/* harmony export */   \"SET_LISTS\": () => (/* binding */ SET_LISTS),\n/* harmony export */   \"setFetching\": () => (/* binding */ setFetching),\n/* harmony export */   \"setLists\": () => (/* binding */ setLists),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SET_FETCHING = 'SET_FETCHING';\nconst SET_LISTS = 'SET_LISTS';\nconst setFetching = isFetching => ({\n  type: SET_FETCHING,\n  payload: isFetching\n});\nconst setLists = lists => ({\n  type: SET_LISTS,\n  payload: lists\n});\nconst loadData = () => dispatch => {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:3000/getData').then(res => {\n    dispatch(setLists(res.data.lists));\n  }).catch(err => console.log(err));\n};\n\n//# sourceURL=webpack://create-react-app/./src/redux/action.js?");

/***/ }),

/***/ "./src/redux/configureStore.js":
/*!*************************************!*\
  !*** ./src/redux/configureStore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ configureStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/redux/reducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction configureStore(state) {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_1__.default, state, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())));\n}\n\n//# sourceURL=webpack://create-react-app/./src/redux/configureStore.js?");

/***/ }),

/***/ "./src/redux/reducer.js":
/*!******************************!*\
  !*** ./src/redux/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.js */ \"./src/redux/action.js\");\n\nconst initialState = {\n  isFetching: false,\n  lists: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _action_js__WEBPACK_IMPORTED_MODULE_0__.SET_FETCHING:\n      return Object.assign({}, state, {\n        isFetching: action.payload\n      });\n\n    case _action_js__WEBPACK_IMPORTED_MODULE_0__.SET_LISTS:\n      return Object.assign({}, state, {\n        isFetching: false,\n        lists: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n//# sourceURL=webpack://create-react-app/./src/redux/reducer.js?");

/***/ }),

/***/ "./src/router/config.js":
/*!******************************!*\
  !*** ./src/router/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _components_contain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/contain */ \"./src/components/contain.js\");\n/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/signup */ \"./src/components/signup.js\");\n/* harmony import */ var _components_fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fallback */ \"./src/components/fallback.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n\n\n\n\nconst routes = [{\n  path: '/',\n  key: 'home',\n  component: _components_contain__WEBPACK_IMPORTED_MODULE_0__.default,\n  loadData: _api__WEBPACK_IMPORTED_MODULE_3__.load,\n  exact: true\n}, {\n  path: '/signup',\n  key: 'signup',\n  component: _components_signup__WEBPACK_IMPORTED_MODULE_1__.default\n}, {\n  path: '*',\n  // fallback\n  key: 'fallback',\n  component: _components_fallback__WEBPACK_IMPORTED_MODULE_2__.default\n}];\n\n//# sourceURL=webpack://create-react-app/./src/router/config.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/config */ \"./src/router/config.js\");\n/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/configureStore */ \"./src/redux/configureStore.js\");\n/* harmony import */ var _renderToHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderToHTML */ \"./src/server/renderToHTML.js\");\n\n\n\nconst koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst router = new Router();\n\nconst serve = __webpack_require__(/*! koa-static */ \"koa-static\");\n\n\nconst app = new koa();\nconst initialState = {\n  // 初始state\n  isFetching: false,\n  lists: []\n};\nrouter.get('/getData', ctx => {\n  ctx.body = {\n    lists: ['aaa', 'bbb', 'ccc']\n  };\n});\nrouter.get('/client', async ctx => {\n  // 客户端渲染，作为对比\n  console.log('客户端渲染');\n  const content = await (0,_renderToHTML__WEBPACK_IMPORTED_MODULE_2__.default)('client');\n  ctx.body = content;\n});\napp.use(serve('dist'));\napp.use(router.routes());\napp.use(router.allowedMethods());\napp.use(async ctx => {\n  const store = (0,_redux_configureStore__WEBPACK_IMPORTED_MODULE_1__.default)(initialState); // 创建store\n\n  const promiseArr = [];\n  _router_config__WEBPACK_IMPORTED_MODULE_0__.routes.forEach(route => {\n    if (route.loadData) {\n      promiseArr.push(route.loadData(store)); // 服务端发请求初始化store数据，返回值是promise\n    }\n  });\n  await Promise.all(promiseArr); // 需要等待数据加载\n\n  const content = await (0,_renderToHTML__WEBPACK_IMPORTED_MODULE_2__.default)('server', ctx.url, store); // 需要等待模板文件读取，并生成HTML\n\n  ctx.body = content;\n});\napp.listen(3000, () => console.log('running'));\n\n//# sourceURL=webpack://create-react-app/./src/server/index.js?");

/***/ }),

/***/ "./src/server/renderToHTML.js":
/*!************************************!*\
  !*** ./src/server/renderToHTML.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderToHTML)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app */ \"./src/components/app.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nlet fs = __webpack_require__(/*! fs */ \"fs\");\n\nfs = bluebird__WEBPACK_IMPORTED_MODULE_6___default().promisifyAll(fs);\nasync function renderToHTML(type, url, store) {\n  const template = await fs.readFileAsync(`./src/server/template/index.html`, 'utf8');\n  const script = `\n        <script src=\"/${type === 'server' ? 'client' : 'bundle'}.js\"></script>\n    `;\n\n  if (type === 'client') {\n    // 纯客户端渲染\n    return template.replace('<!-- SCRIPT -->', script);\n  } else {\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n      location: url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_app__WEBPACK_IMPORTED_MODULE_3__.default, null))));\n    const state = `\n            <script>\n                window.__STATE__ = ${JSON.stringify(store.getState())}\n            </script>\n        `;\n    return template.replace(`<!-- CONTENT -->`, content).replace(`<!-- STATE -->`, state).replace(`<!-- SCRIPT -->`, script);\n  }\n}\n\n//# sourceURL=webpack://create-react-app/./src/server/renderToHTML.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bluebird");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;
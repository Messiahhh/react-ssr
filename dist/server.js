/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_css-loader@5.2.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@5.2.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://create-react-app/./node_modules/_css-loader@5.2.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/action */ \"./src/redux/action.js\");\n\nconst load = store => {\n  return store.dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_0__.loadData)());\n};\n\n//# sourceURL=webpack://create-react-app/./src/api/index.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/config */ \"./src/router/config.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _test_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test.module.css */ \"./src/components/test.module.css\");\n/* harmony import */ var _test_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_test_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n // import useStyles from 'isomorphic-style-loader/useStyles'\n\n\nconsole.log((_test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Root));\nconsole.log((_test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Title));\n\nclass App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: (_test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Root)\n    }, \"\\u6837\\u5F0F\\u95EE\\u9898\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: (_test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Title)\n    }, \"\\u6D4B\\u8BD5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, _router_config__WEBPACK_IMPORTED_MODULE_2__.routes.map(route => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, route);\n    })));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_test_module_css__WEBPACK_IMPORTED_MODULE_4___default()))(App)); // function App() {\n//     useStyles(style)\n//     return (\n//         <>\n//             <div className={style.root}>样式问题</div>\n//             <Switch>\n//                 {\n//                     routes.map(route => {\n//                         return <Route  {...route}></Route> \n//                     })\n//                 }\n//             </Switch>\n//         </>\n//     )\n// }\n// export default App\n\n//# sourceURL=webpack://create-react-app/./src/components/app.js?");

/***/ }),

/***/ "./src/components/contain.js":
/*!***********************************!*\
  !*** ./src/components/contain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contain)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/action */ \"./src/redux/action.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Contain() {\n  const fetching = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.isFetching);\n  const lists = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.lists);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!lists) {\n      dispatch((0,_redux_action__WEBPACK_IMPORTED_MODULE_2__.loadData)());\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, fetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u52A0\\u8F7D\\u4E2D...\") : lists.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: index\n  }, item)));\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/contain.js?");

/***/ }),

/***/ "./src/components/fallback.js":
/*!************************************!*\
  !*** ./src/components/fallback.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fallback)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// 404 page\n\nfunction Fallback() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"404\");\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/fallback.js?");

/***/ }),

/***/ "./src/components/signup.js":
/*!**********************************!*\
  !*** ./src/components/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signup)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Signup() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"\\u6CE8\\u518C\\u9875\\u9762\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"\\u6CE8\\u518C\"));\n}\n\n//# sourceURL=webpack://create-react-app/./src/components/signup.js?");

/***/ }),

/***/ "./src/redux/action.js":
/*!*****************************!*\
  !*** ./src/redux/action.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_FETCHING\": () => (/* binding */ SET_FETCHING),\n/* harmony export */   \"SET_LISTS\": () => (/* binding */ SET_LISTS),\n/* harmony export */   \"setFetching\": () => (/* binding */ setFetching),\n/* harmony export */   \"setLists\": () => (/* binding */ setLists),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SET_FETCHING = 'SET_FETCHING';\nconst SET_LISTS = 'SET_LISTS';\nconst setFetching = isFetching => ({\n  type: SET_FETCHING,\n  payload: isFetching\n});\nconst setLists = lists => ({\n  type: SET_LISTS,\n  payload: lists\n});\nconst loadData = () => dispatch => {\n  dispatch(setFetching(true));\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:3000/getData').then(res => {\n    dispatch(setLists(res.data.lists));\n  }).catch(err => console.log(err));\n};\n\n//# sourceURL=webpack://create-react-app/./src/redux/action.js?");

/***/ }),

/***/ "./src/redux/configureStore.js":
/*!*************************************!*\
  !*** ./src/redux/configureStore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ configureStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/redux/reducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction configureStore(state) {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_1__.default, state, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())));\n}\n\n//# sourceURL=webpack://create-react-app/./src/redux/configureStore.js?");

/***/ }),

/***/ "./src/redux/reducer.js":
/*!******************************!*\
  !*** ./src/redux/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.js */ \"./src/redux/action.js\");\n\nconst initialState = {\n  isFetching: false,\n  lists: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _action_js__WEBPACK_IMPORTED_MODULE_0__.SET_FETCHING:\n      return Object.assign({}, state, {\n        isFetching: action.payload\n      });\n\n    case _action_js__WEBPACK_IMPORTED_MODULE_0__.SET_LISTS:\n      return Object.assign({}, state, {\n        isFetching: false,\n        lists: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n\n//# sourceURL=webpack://create-react-app/./src/redux/reducer.js?");

/***/ }),

/***/ "./src/router/config.js":
/*!******************************!*\
  !*** ./src/router/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _components_contain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/contain */ \"./src/components/contain.js\");\n/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/signup */ \"./src/components/signup.js\");\n/* harmony import */ var _components_fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fallback */ \"./src/components/fallback.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n\n\n\n\nconst routes = [{\n  path: '/',\n  key: 'home',\n  component: _components_contain__WEBPACK_IMPORTED_MODULE_0__.default,\n  loadData: _api__WEBPACK_IMPORTED_MODULE_3__.load,\n  exact: true\n}, {\n  path: '/signup',\n  key: 'signup',\n  component: _components_signup__WEBPACK_IMPORTED_MODULE_1__.default\n}, {\n  path: '*',\n  // fallback\n  key: 'fallback',\n  component: _components_fallback__WEBPACK_IMPORTED_MODULE_2__.default\n}];\n\n//# sourceURL=webpack://create-react-app/./src/router/config.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/config */ \"./src/router/config.js\");\n/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/configureStore */ \"./src/redux/configureStore.js\");\n/* harmony import */ var _renderToHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderToHTML */ \"./src/server/renderToHTML.js\");\n\n\n\n\nconst koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst router = new Router();\n\nconst serve = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst app = new koa();\nconst initialState = {\n  // 初始state\n  isFetching: false,\n  lists: []\n};\nrouter.get('/getData', ctx => {\n  ctx.body = {\n    lists: ['aaa', 'bbb', 'ccc']\n  };\n});\nrouter.get('/client', async ctx => {\n  // 客户端渲染，作为对比\n  const content = await (0,_renderToHTML__WEBPACK_IMPORTED_MODULE_2__.default)('client');\n  ctx.body = content;\n});\napp.use(serve('dist'));\napp.use(router.routes());\napp.use(router.allowedMethods());\napp.use(async ctx => {\n  const store = (0,_redux_configureStore__WEBPACK_IMPORTED_MODULE_1__.default)(initialState); // 创建store\n\n  const promiseArr = [];\n  _router_config__WEBPACK_IMPORTED_MODULE_0__.routes.forEach(route => {\n    if (route.loadData) {\n      promiseArr.push(route.loadData(store)); // 服务端发请求初始化store数据，返回值是promise\n    }\n  });\n  await Promise.all(promiseArr); // 需要等待数据加载\n\n  const content = await (0,_renderToHTML__WEBPACK_IMPORTED_MODULE_2__.default)('server', ctx.url, store); // 需要等待模板文件读取，并生成HTML\n\n  ctx.body = content;\n});\napp.listen(3000, () => console.log('running'));\n\n//# sourceURL=webpack://create-react-app/./src/server/index.js?");

/***/ }),

/***/ "./src/server/renderToHTML.js":
/*!************************************!*\
  !*** ./src/server/renderToHTML.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderToHTML)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app */ \"./src/components/app.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nlet fs = __webpack_require__(/*! fs */ \"fs\");\n\nfs = bluebird__WEBPACK_IMPORTED_MODULE_7___default().promisifyAll(fs);\nasync function renderToHTML(type, url, store) {\n  const template = await fs.readFileAsync(`./src/server/template/index.html`, 'utf8');\n  const script = `\n        <script src=\"/${type === 'server' ? 'client' : 'bundle'}.js\"></script>\n    `;\n  const css = new Set(); // CSS for all rendered React components\n\n  const insertCss = (...styles) => styles.forEach(style => {\n    console.log(style);\n    css.add(style._getCss());\n  });\n\n  if (type === 'client') {\n    // 纯客户端渲染\n    return template.replace('<!-- SCRIPT -->', script);\n  } else {\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default().Provider), {\n      value: {\n        insertCss\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n      location: url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_app__WEBPACK_IMPORTED_MODULE_3__.default, null)))));\n    const state = `\n            <script>\n                window.__STATE__ = ${JSON.stringify(store.getState())}\n            </script>\n        `;\n    const style = `<style>${[...css].join('')}</style>`;\n    return template.replace(`<!-- CONTENT -->`, content).replace(`<!-- STATE -->`, state).replace(`<!-- STYLE -->`, style).replace(`<!-- SCRIPT -->`, script); // return `<!doctype html>\n    // <html>\n    //   <head>\n    //     <script src=\"/client.js\" defer></script>\n    //     <style>${[...css].join('')}</style>\n    //   </head>\n    //   <body>\n    //     <div id=\"root\">${content}</div>\n    //   </body>\n    // </html>`\n  }\n}\n\n//# sourceURL=webpack://create-react-app/./src/server/renderToHTML.js?");

/***/ }),

/***/ "./node_modules/_css-loader@5.2.1@css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/_postcss-loader@5.2.0@postcss-loader/dist/cjs.js!./src/components/test.module.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@5.2.1@css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/_postcss-loader@5.2.0@postcss-loader/dist/cjs.js!./src/components/test.module.css ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@5.2.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@5.2.1@css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._2zvN6fZhtKXOLLlCjXnZjD {\\r\\n    color: red;\\r\\n}\\r\\n\\r\\n._2gETTBe3DQB1sF1qlJMY4k {\\r\\n    background: pink;\\r\\n}\\r\\n\\r\\n._1sIN9O-hX_hq9KdZasuiWP {\\r\\n    text-align: center;\\r\\n    color: red;\\r\\n    display: flex;\\r\\n  }\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Root\": \"_2zvN6fZhtKXOLLlCjXnZjD\",\n\t\"Title\": \"_2gETTBe3DQB1sF1qlJMY4k\",\n\t\"TestStyle\": \"_1sIN9O-hX_hq9KdZasuiWP\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://create-react-app/./src/components/test.module.css?./node_modules/_css-loader@5.2.1@css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/_postcss-loader@5.2.0@postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./src/components/test.module.css":
/*!****************************************!*\
  !*** ./src/components/test.module.css ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../node_modules/_css-loader@5.2.1@css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/_postcss-loader@5.2.0@postcss-loader/dist/cjs.js!./test.module.css */ \"./node_modules/_css-loader@5.2.1@css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/_postcss-loader@5.2.0@postcss-loader/dist/cjs.js!./src/components/test.module.css\");\n    var insertCss = __webpack_require__(/*! !../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://create-react-app/./src/components/test.module.css?");

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://create-react-app/./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bluebird");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");;

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/withStyles");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;
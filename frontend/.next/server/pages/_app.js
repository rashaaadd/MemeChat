/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/layout.module.css":
/*!**********************************!*\
  !*** ./styles/layout.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"spinner_parent\": \"layout_spinner_parent__R1vK_\",\n\t\"spinner_order\": \"layout_spinner_order__67OIW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3R5bGVzL2xheW91dC5tb2R1bGUuY3NzPzM5MDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Bpbm5lcl9wYXJlbnRcIjogXCJsYXlvdXRfc3Bpbm5lcl9wYXJlbnRfX1IxdktfXCIsXG5cdFwic3Bpbm5lcl9vcmRlclwiOiBcImxheW91dF9zcGlubmVyX29yZGVyX182N09JV1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/layout.module.css\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/layout.module.css */ \"./styles/layout.module.css\");\n/* harmony import */ var _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Stack */ \"@mui/material/Stack\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"@mui/material/CircularProgress\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction Layout({ children  }) {\n    const { loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.alerts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"App\",\n                children: [\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        sx: {\n                            color: \"grey.500\"\n                        },\n                        spacing: 2,\n                        direction: \"row\",\n                        className: (_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().spinner_parent),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            color: \"inherit\",\n                            className: (_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().spinner_border)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                        position: \"top-center\",\n                        reverseOrder: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        style: {\n                            top: \"-18%\",\n                            right: \"0\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        style: {\n                            top: \"36%\",\n                            left: \"-8rem\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\components\\\\layout.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUNtQjtBQUNOO0FBQ0E7QUFDRjtBQUNzQjtBQUU5RCxTQUFTTyxPQUFPLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQzVCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdMLHdEQUFXQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLE1BQU07SUFDdkQscUJBQ0U7OzBCQUNFLDhEQUFDVixrREFBSUE7MEJBQ0gsNEVBQUNXO29CQUNDQyxNQUFLO29CQUNMQyxLQUFJOzs7Ozs7Ozs7OzswQkFHUiw4REFBQ0M7Z0JBQUlDLFdBQVU7O29CQUNaUCx5QkFDQyw4REFBQ0osNERBQUtBO3dCQUFDWSxJQUFJOzRCQUFFQyxPQUFPO3dCQUFXO3dCQUFHQyxTQUFTO3dCQUFHQyxXQUFVO3dCQUFNSixXQUFXZCxpRkFBcUI7a0NBQzVGLDRFQUFDSSx1RUFBZ0JBOzRCQUFDWSxPQUFNOzRCQUFVRixXQUFXZCxpRkFBcUI7Ozs7Ozs7Ozs7O2tDQUd0RSw4REFBQ0Msb0RBQU9BO3dCQUFDb0IsVUFBUzt3QkFBYUMsY0FBYyxLQUFLOzs7Ozs7a0NBQ2xELDhEQUFDVDt3QkFBSUMsV0FBVTt3QkFBT1MsT0FBTzs0QkFBRUMsS0FBSzs0QkFBUUMsT0FBTzt3QkFBSTs7Ozs7O2tDQUN2RCw4REFBQ1o7d0JBQUlDLFdBQVU7d0JBQU9TLE9BQU87NEJBQUVDLEtBQUs7NEJBQU9FLE1BQU07d0JBQVE7Ozs7OztvQkFDeERwQjs7Ozs7Ozs7O0FBSVQ7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MjlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTdGFjayBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGFja1wiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsZXJ0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMjAwOzQwMDs2MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8U3RhY2sgc3g9e3sgY29sb3I6IFwiZ3JleS41MDBcIiB9fSBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIiBjbGFzc05hbWU9e3N0eWxlcy5zcGlubmVyX3BhcmVudH0+XHJcbiAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNwaW5uZXJfYm9yZGVyfS8+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJ0b3AtY2VudGVyXCIgcmV2ZXJzZU9yZGVyPXtmYWxzZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJcIiBzdHlsZT17eyB0b3A6IFwiLTE4JVwiLCByaWdodDogXCIwXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyXCIgc3R5bGU9e3sgdG9wOiBcIjM2JVwiLCBsZWZ0OiBcIi04cmVtXCIgfX0+PC9kaXY+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsInN0eWxlcyIsIlRvYXN0ZXIiLCJ1c2VTZWxlY3RvciIsIlN0YWNrIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwibG9hZGluZyIsInN0YXRlIiwiYWxlcnRzIiwibGluayIsImhyZWYiLCJyZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzeCIsImNvbG9yIiwic3BhY2luZyIsImRpcmVjdGlvbiIsInNwaW5uZXJfcGFyZW50Iiwic3Bpbm5lcl9ib3JkZXIiLCJwb3NpdGlvbiIsInJldmVyc2VPcmRlciIsInN0eWxlIiwidG9wIiwicmlnaHQiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout__WEBPACK_IMPORTED_MODULE_2__]);\n_components_layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\RASHAD\\\\Desktop\\\\BROCAMP\\\\Project 2\\\\MemeChat\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1c7QUFDTjtBQUNEO0FBRW5DLFNBQVNHLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0osaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNGLDBEQUFNQTtzQkFDTCw0RUFBQ0k7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/alertSlice.js":
/*!*****************************!*\
  !*** ./redux/alertSlice.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alertSlice\": () => (/* binding */ alertSlice),\n/* harmony export */   \"hideLoading\": () => (/* binding */ hideLoading),\n/* harmony export */   \"showLoading\": () => (/* binding */ showLoading)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst alertSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"alerts\",\n    initialState: {\n        loading: false\n    },\n    reducers: {\n        showLoading: (state)=>{\n            state.loading = true;\n        },\n        hideLoading: (state)=>{\n            state.loading = false;\n        }\n    }\n});\nconst { showLoading , hideLoading  } = alertSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hbGVydFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRXhDLE1BQU1DLGFBQWFELDZEQUFXQSxDQUFDO0lBQ3BDRSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsU0FBUyxLQUFLO0lBQ2hCO0lBQ0FDLFVBQVU7UUFDUkMsYUFBYSxDQUFDQyxRQUFVO1lBQ3RCQSxNQUFNSCxPQUFPLEdBQUcsSUFBSTtRQUN0QjtRQUNBSSxhQUFhLENBQUNELFFBQVU7WUFDdEJBLE1BQU1ILE9BQU8sR0FBRyxLQUFLO1FBQ3ZCO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFRSxZQUFXLEVBQUVFLFlBQVcsRUFBRSxHQUFHUCxXQUFXUSxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3JlZHV4L2FsZXJ0U2xpY2UuanM/OTcyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWxlcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImFsZXJ0c1wiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2hvd0xvYWRpbmc6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRlTG9hZGluZzogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzaG93TG9hZGluZywgaGlkZUxvYWRpbmcgfSA9IGFsZXJ0U2xpY2UuYWN0aW9ucztcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWxlcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwicmVkdWNlcnMiLCJzaG93TG9hZGluZyIsInN0YXRlIiwiaGlkZUxvYWRpbmciLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/alertSlice.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_alertSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/alertSlice */ \"./redux/alertSlice.js\");\n/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/userSlice */ \"./redux/userSlice.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst appReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    alerts: _redux_alertSlice__WEBPACK_IMPORTED_MODULE_2__.alertSlice.reducer,\n    users: _redux_userSlice__WEBPACK_IMPORTED_MODULE_3__.userSlice.reducer\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: appReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store); // const makeStore = () => store();\n // export const wrapper = createWrapper() \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNEO0FBQ0Y7QUFDSTtBQUVsRCxNQUFNSyxhQUFhTCxzREFBZUEsQ0FBQztJQUMvQk0sUUFBUUosaUVBQWtCO0lBQzFCTSxPQUFPTCwrREFBaUI7QUFDNUI7QUFFQSxNQUFNTSxRQUFRUixnRUFBY0EsQ0FBQztJQUN6Qk0sU0FBUUY7QUFDWjtBQUVBLGlFQUFlSSxLQUFLQSxFQUFDLENBR3JCLG1DQUFtQztDQUNuQywwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3JlZHV4L3N0b3JlLmpzPzM1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgYWxlcnRTbGljZSB9IGZyb20gJy4uL3JlZHV4L2FsZXJ0U2xpY2UnXHJcbmltcG9ydCB7IHVzZXJTbGljZSB9IGZyb20gJy4uL3JlZHV4L3VzZXJTbGljZSdcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuXHJcbmNvbnN0IGFwcFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgYWxlcnRzOiBhbGVydFNsaWNlLnJlZHVjZXIsXHJcbiAgICB1c2VyczogdXNlclNsaWNlLnJlZHVjZXJcclxufSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6YXBwUmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxyXG5cclxuLy8gY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmUoKTtcclxuLy8gZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKCkgIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvbmZpZ3VyZVN0b3JlIiwiYWxlcnRTbGljZSIsInVzZXJTbGljZSIsImNyZWF0ZVdyYXBwZXIiLCJhcHBSZWR1Y2VyIiwiYWxlcnRzIiwicmVkdWNlciIsInVzZXJzIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./redux/userSlice.js":
/*!****************************!*\
  !*** ./redux/userSlice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUser\": () => (/* binding */ setUser),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"users\",\n    initialState: {\n        user: null\n    },\n    reducers: {\n        setUser: (state, action)=>{\n            console.log(state, action, \"User state called\");\n            state.user = action.payload;\n        },\n        reloadUserData: (state, action)=>{\n            state.user = action.payload;\n        }\n    }\n});\nconst { setUser  } = userSlice.actions;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC91c2VyU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUV4QyxNQUFNQyxZQUFZRCw2REFBV0EsQ0FBQztJQUNuQ0UsTUFBTTtJQUNOQyxjQUFhO1FBQ1hDLE1BQU0sSUFBSTtJQUNaO0lBQ0FDLFVBQVM7UUFDUEMsU0FBVSxDQUFDQyxPQUFPQyxTQUFXO1lBQzNCQyxRQUFRQyxHQUFHLENBQUNILE9BQU1DLFFBQU87WUFDdkJELE1BQU1ILElBQUksR0FBR0ksT0FBT0csT0FBTztRQUMvQjtRQUNBQyxnQkFBaUIsQ0FBQ0wsT0FBT0MsU0FBVztZQUNoQ0QsTUFBTUgsSUFBSSxHQUFHSSxPQUFPRyxPQUFPO1FBQy9CO0lBQ0Y7QUFDRixHQUFFO0FBRUssTUFBTSxFQUFDTCxRQUFPLEVBQUMsR0FBR0wsVUFBVVksT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9yZWR1eC91c2VyU2xpY2UuanM/N2MxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlcnNcIixcclxuICBpbml0aWFsU3RhdGU6e1xyXG4gICAgdXNlcjogbnVsbFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6e1xyXG4gICAgc2V0VXNlciA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLGFjdGlvbixcIlVzZXIgc3RhdGUgY2FsbGVkXCIpO1xyXG4gICAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICByZWxvYWRVc2VyRGF0YSA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7c2V0VXNlcn0gPSB1c2VyU2xpY2UuYWN0aW9uczsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJ1c2VyU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInJlZHVjZXJzIiwic2V0VXNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJyZWxvYWRVc2VyRGF0YSIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/userSlice.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/CircularProgress":
/*!*************************************************!*\
  !*** external "@mui/material/CircularProgress" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ "@mui/material/Stack":
/*!**************************************!*\
  !*** external "@mui/material/Stack" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Stack");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/ProtectedRoutes.js":
/*!***************************************!*\
  !*** ./components/ProtectedRoutes.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/userSlice */ \"./redux/userSlice.js\");\n/* harmony import */ var _redux_alertSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/alertSlice */ \"./redux/alertSlice.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst getServerSideProps = async ()=>{\n    try {\n        const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.users);\n        console.log(user, \"user detaaailsss........11\");\n        const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n        dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_3__.showLoading)());\n        const result = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/user\");\n        console.log(result, \"axios result .................2222\");\n        dispatch((0,_redux_alertSlice__WEBPACK_IMPORTED_MODULE_3__.hideLoading)());\n        const data = result === null || result === void 0 ? void 0 : result.data;\n        if (!user) {\n            dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_2__.setUser)(data));\n        }\n        return {\n            props: {\n                data\n            }\n        };\n    } catch (error) {\n        console.log(error);\n        console.log(error.message);\n    }\n};\nfunction ProtectedRoutes(param) {\n    let { data , ...props } = param;\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>{\n        console.log(state, \"........prtectedroute\", state.users);\n        return state.users;\n    });\n    console.log(data, \"........userData\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // if(userData){\n    // console.log(userData, \"userDataaaaaa\");\n    // }\n    // useEffect(() => {\n    //   if (!user) {\n    //     getUser();\n    //   }\n    // }, [user]);\n    // const getUser = async () => {\n    //   try {\n    //     dispatch(showLoading())\n    //     const response = await axios.get(\"http://localhost:5000/user\");\n    //     console.log(response, \"responseeeeeee ethii\");\n    //     dispatch(hideLoading())\n    //     if (response.status) {\n    //       dispatch(setUser(response.data.user));\n    //     } else {\n    //       console.log(\"Token error\");\n    //       localStorage.clear();\n    //       router.push(\"/\");\n    //     }\n    //   } catch (error) {\n    //     dispatch(hideLoading());\n    //     localStorage.clear();\n    //     console.log(error.message, \"Get User Error\");\n    //     router.push(\"/\");\n    //   }\n    // };\n    if (true) {\n        if (localStorage.getItem(\"token\")) {\n            return props.children;\n        } else {\n            return router.push(\"/\");\n        }\n    }\n}\n_s(ProtectedRoutes, \"pjJ0PRPILXDWex0pjmNeU4qemQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ProtectedRoutes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedRoutes);\nvar _c;\n$RefreshReg$(_c, \"ProtectedRoutes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNlO0FBQ2M7QUFDVjtBQUNrQjtBQUN2QjtBQUVqQyxNQUFNUyxxQkFBcUIsVUFBWTtJQUM1QyxJQUFHO1FBQ0QsTUFBTUMsT0FBT04sd0RBQVdBLENBQUMsQ0FBQ08sUUFBUUEsTUFBTUMsS0FBSztRQUM3Q0MsUUFBUUMsR0FBRyxDQUFDSixNQUFLO1FBQ2pCLE1BQU1LLFdBQVdaLHdEQUFXQTtRQUM1QlksU0FBU1IsOERBQVdBO1FBQ3BCLE1BQU1TLFNBQVMsTUFBTWhCLGlEQUFTLENBQUM7UUFDL0JhLFFBQVFDLEdBQUcsQ0FBQ0UsUUFBTztRQUNuQkQsU0FBU1QsOERBQVdBO1FBQ3BCLE1BQU1ZLE9BQU9GLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsSUFBSTtRQUN6QixJQUFHLENBQUNSLE1BQUs7WUFDUEssU0FBU1YseURBQU9BLENBQUNhO1FBQ25CLENBQUM7UUFDRCxPQUFPO1lBQ0xDLE9BQU07Z0JBQ0pEO1lBQ0Y7UUFDRjtJQUNGLEVBQUMsT0FBTUUsT0FBTTtRQUNYUCxRQUFRQyxHQUFHLENBQUNNO1FBQ1pQLFFBQVFDLEdBQUcsQ0FBQ00sTUFBTUMsT0FBTztJQUMzQjtBQUVGLEVBQUU7QUFFRixTQUFTQyxnQkFBZ0IsS0FBZSxFQUFFO1FBQWpCLEVBQUNKLEtBQUksRUFBQyxHQUFHQyxPQUFNLEdBQWY7O0lBQ3ZCLE1BQU1ULE9BQU9OLHdEQUFXQSxDQUFDLENBQUNPLFFBQVU7UUFDbENFLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBTyx5QkFBeUJBLE1BQU1DLEtBQUs7UUFDdkQsT0FBT0QsTUFBTUMsS0FBSztJQUNwQjtJQUNBQyxRQUFRQyxHQUFHLENBQUNJLE1BQUs7SUFDakIsTUFBTUgsV0FBV1osd0RBQVdBO0lBQzVCLE1BQU1vQixTQUFTZixzREFBU0E7SUFDeEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxJQUFJO0lBQ0osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixzRUFBc0U7SUFDdEUscURBQXFEO0lBQ3JELDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsK0NBQStDO0lBQy9DLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sS0FBSztJQUNMLElBQUksSUFBNkIsRUFBRTtRQUNqQyxJQUFJZ0IsYUFBYUMsT0FBTyxDQUFDLFVBQVU7WUFDakMsT0FBT04sTUFBTU8sUUFBUTtRQUN2QixPQUFPO1lBQ0wsT0FBT0gsT0FBT0ksSUFBSSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0FBQ0g7R0EzQ1NMOztRQUNNbEIsb0RBQVdBO1FBS1BELG9EQUFXQTtRQUNiSyxrREFBU0E7OztLQVBqQmM7QUE2Q1QsK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm90ZWN0ZWRSb3V0ZXMuanM/ZGFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvdXNlclNsaWNlXCI7XHJcbmltcG9ydCB7IGhpZGVMb2FkaW5nLCBzaG93TG9hZGluZyB9IGZyb20gXCIuLi9yZWR1eC9hbGVydFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnl7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcnMpXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLCd1c2VyIGRldGFhYWlsc3NzLi4uLi4uLi4xMScpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBkaXNwYXRjaChzaG93TG9hZGluZygpKVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXJcIilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCwnYXhpb3MgcmVzdWx0IC4uLi4uLi4uLi4uLi4uLi4uMjIyMicpXHJcbiAgICBkaXNwYXRjaChoaWRlTG9hZGluZygpKVxyXG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdD8uZGF0YVxyXG4gICAgaWYoIXVzZXIpe1xyXG4gICAgICBkaXNwYXRjaChzZXRVc2VyKGRhdGEpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6e1xyXG4gICAgICAgIGRhdGFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1jYXRjaChlcnJvcil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gIH1cclxuICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIFByb3RlY3RlZFJvdXRlcyh7ZGF0YSwuLi5wcm9wc30pIHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgXCIuLi4uLi4uLnBydGVjdGVkcm91dGVcIiwgc3RhdGUudXNlcnMpO1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXJzO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsJy4uLi4uLi4udXNlckRhdGEnKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBpZih1c2VyRGF0YSl7XHJcbiAgLy8gY29uc29sZS5sb2codXNlckRhdGEsIFwidXNlckRhdGFhYWFhYVwiKTtcclxuICAvLyB9XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICghdXNlcikge1xyXG4gIC8vICAgICBnZXRVc2VyKCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3VzZXJdKTtcclxuICAvLyBjb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgdHJ5IHtcclxuICAvLyAgICAgZGlzcGF0Y2goc2hvd0xvYWRpbmcoKSlcclxuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdXNlclwiKTtcclxuICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UsIFwicmVzcG9uc2VlZWVlZWUgZXRoaWlcIik7XHJcbiAgLy8gICAgIGRpc3BhdGNoKGhpZGVMb2FkaW5nKCkpXHJcbiAgLy8gICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAvLyAgICAgICBkaXNwYXRjaChzZXRVc2VyKHJlc3BvbnNlLmRhdGEudXNlcikpO1xyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gZXJyb3JcIik7XHJcbiAgLy8gICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgLy8gICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBkaXNwYXRjaChoaWRlTG9hZGluZygpKTtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UsIFwiR2V0IFVzZXIgRXJyb3JcIik7XHJcbiAgLy8gICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xyXG4gICAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkUm91dGVzO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRVc2VyIiwiaGlkZUxvYWRpbmciLCJzaG93TG9hZGluZyIsInVzZVJvdXRlciIsImdldFNlcnZlclNpZGVQcm9wcyIsInVzZXIiLCJzdGF0ZSIsInVzZXJzIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwicmVzdWx0IiwiZ2V0IiwiZGF0YSIsInByb3BzIiwiZXJyb3IiLCJtZXNzYWdlIiwiUHJvdGVjdGVkUm91dGVzIiwicm91dGVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoaWxkcmVuIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProtectedRoutes.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[paramLeague]/[paramPlayer]",{

/***/ "./src/components/Player/StatComparator.tsx":
/*!**************************************************!*\
  !*** ./src/components/Player/StatComparator.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StatComparator: function() { return /* binding */ StatComparator; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar StatComparator = function(param) {\n    var chartCompareTo = param.chartCompareTo, setChartCompareTo = param.setChartCompareTo, compareTo = param.compareTo, setCompareTo = param.setCompareTo;\n    var handleCompareToChange = function(value, index) {\n        setCompareTo(function(prev) {\n            var newCompareTo = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2__._)(prev);\n            newCompareTo[index] = value;\n            return newCompareTo;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        style: {\n            display: \"flex\",\n            marginBottom: \"20px\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                style: {\n                    width: \"200px\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        width: \"1em\",\n                        height: \"1em\",\n                        viewBox: \"0 0 24 24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#666363\",\n                            d: \"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"#666363\",\n                            fontSize: \"12px\",\n                            margin: 0\n                        },\n                        children: [\n                            \"Type a Number\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, _this),\n                            \" to Compare to Stats\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            compareTo.map(function(value, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        width: \"50px\",\n                        height: \"35px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        style: {\n                            width: \"90%\",\n                            height: \"100%\",\n                            border: \"1px solid #000\",\n                            borderRadius: 5,\n                            textAlign: \"center\",\n                            fontSize: \"16px\",\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        type: \"string\",\n                        onChange: function(e) {\n                            return handleCompareToChange(e.target.value, index);\n                        },\n                        value: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, _this)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_c = StatComparator;\nvar _c;\n$RefreshReg$(_c, \"StatComparator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvU3RhdENvbXBhcmF0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3RDtBQVNqRCxJQUFNQyxpQkFBa0M7UUFBR0MsdUJBQUFBLGdCQUFnQkMsMEJBQUFBLG1CQUFtQkMsa0JBQUFBLFdBQVdDLHFCQUFBQTtJQUM1RixJQUFNQyx3QkFBd0IsU0FBQ0MsT0FBZUM7UUFDMUNILGFBQWEsU0FBQ0k7WUFDVixJQUFNQyxlQUFnQixvRUFBR0Q7WUFDekJDLFlBQVksQ0FBQ0YsTUFBTSxHQUFHRDtZQUN0QixPQUFPRztRQUNYO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBR0MsT0FBTztZQUFFQyxTQUFTO1lBQVFDLGNBQWM7WUFBUUMsWUFBWTtRQUFTOzswQkFDckUsOERBQUNDO2dCQUFHSixPQUFPO29CQUFFSyxPQUFPO29CQUFTSixTQUFTO29CQUFRSyxnQkFBZ0I7b0JBQVVILFlBQVk7Z0JBQVM7O2tDQUN6Riw4REFBQ0k7d0JBQUlDLE9BQU07d0JBQTZCSCxPQUFNO3dCQUFNSSxRQUFPO3dCQUFNQyxTQUFRO2tDQUNyRSw0RUFBQ0M7NEJBQUtDLE1BQUs7NEJBQVVDLEdBQUU7Ozs7Ozs7Ozs7O2tDQUUzQiw4REFBQ0M7d0JBQUVkLE9BQU87NEJBQUVlLE9BQU87NEJBQVdDLFVBQVU7NEJBQVFDLFFBQVE7d0JBQUU7OzRCQUFHOzBDQUV6RCw4REFBQ0M7Ozs7OzRCQUFLOzs7Ozs7Ozs7Ozs7O1lBSWIxQixVQUFVMkIsR0FBRyxDQUFDLFNBQUN4QixPQUFPQztxQ0FDbkIsOERBQUN3QjtvQkFBZXBCLE9BQU87d0JBQUVLLE9BQU87d0JBQVFJLFFBQVE7b0JBQU87OEJBQ25ELDRFQUFDWTt3QkFDR3JCLE9BQU87NEJBQ0hLLE9BQU87NEJBQ1BJLFFBQVE7NEJBQ1JhLFFBQVE7NEJBQ1JDLGNBQWM7NEJBQ2RDLFdBQVc7NEJBQ1hSLFVBQVU7NEJBQ1ZmLFNBQVM7NEJBQ1RLLGdCQUFnQjs0QkFDaEJILFlBQVk7d0JBQ2hCO3dCQUNBc0IsTUFBSzt3QkFDTEMsVUFBVSxTQUFDQzttQ0FBTWpDLHNCQUF1QmlDLEVBQUVDLE1BQU0sQ0FBQ2pDLEtBQUssRUFBR0M7O3dCQUN6REQsT0FBT0E7Ozs7OzttQkFmTkM7Ozs7Ozs7Ozs7OztBQXFCekIsRUFBQztLQTNDWVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL1N0YXRDb21wYXJhdG9yLnRzeD84NDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgY2hhcnRDb21wYXJlVG86IG51bWJlcltdLFxyXG4gICAgc2V0Q2hhcnRDb21wYXJlVG86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcltdPj5cclxuICAgIGNvbXBhcmVUbzogc3RyaW5nW10sXHJcbiAgICBzZXRDb21wYXJlVG86IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZ1tdPj5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRDb21wYXJhdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGFydENvbXBhcmVUbywgc2V0Q2hhcnRDb21wYXJlVG8sIGNvbXBhcmVUbywgc2V0Q29tcGFyZVRvIH0pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNvbXBhcmVUb0NoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcGFyZVRvKChwcmV2OiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb21wYXJlVG8gPSBbLi4ucHJldl07XHJcbiAgICAgICAgICAgIG5ld0NvbXBhcmVUb1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0NvbXBhcmVUbztcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzY2NjM2M1wiIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMHMxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE1Yy0uNTUgMC0xLS40NS0xLTF2LTRjMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxdjRjMCAuNTUtLjQ1IDEtMSAxbTEtOGgtMlY3aDJ6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjNjY2MzYzJywgZm9udFNpemU6ICcxMnB4JywgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFR5cGUgYSBOdW1iZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+IHRvIENvbXBhcmUgdG8gU3RhdHNcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgIHtjb21wYXJlVG8ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICczNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDb21wYXJlVG9DaGFuZ2UoKGUudGFyZ2V0LnZhbHVlKSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0YXRDb21wYXJhdG9yIiwiY2hhcnRDb21wYXJlVG8iLCJzZXRDaGFydENvbXBhcmVUbyIsImNvbXBhcmVUbyIsInNldENvbXBhcmVUbyIsImhhbmRsZUNvbXBhcmVUb0NoYW5nZSIsInZhbHVlIiwiaW5kZXgiLCJwcmV2IiwibmV3Q29tcGFyZVRvIiwidHIiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJhbGlnbkl0ZW1zIiwidGgiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50Iiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIiwicCIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW4iLCJiciIsIm1hcCIsInRkIiwiaW5wdXQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/StatComparator.tsx\n"));

/***/ })

});
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

/***/ "./src/components/Player/TableHeader.tsx":
/*!***********************************************!*\
  !*** ./src/components/Player/TableHeader.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TableHeader: function() { return /* binding */ TableHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar TableHeader = function(param) {\n    var statsHeader = param.statsHeader, hasMaps = param.hasMaps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        style: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                className: hasMaps ? \"statsHeaderAndMaps\" : \"statsHeader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"40%\",\n                            display: \"flex\",\n                            justifyContent: \"flex-start\"\n                        },\n                        children: \"Date\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"20%\",\n                            display: \"flex\",\n                            justifyContent: \"flex-start\"\n                        },\n                        children: \"Team\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, _this),\n                    hasMaps ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"20%\",\n                            display: \"flex\",\n                            justifyContent: \"center\"\n                        },\n                        children: \"Maps\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, _this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this),\n            statsHeader.map(function(statObj, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"dropdown-container\",\n                    style: {\n                        position: \"relative\",\n                        width: \"50px\"\n                    },\n                    children: [\n                        statObj.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"dropdown-content\",\n                                children: statObj.underName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\TableHeader.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, _this);\n};\n_c = TableHeader;\nvar _c;\n$RefreshReg$(_c, \"TableHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvVGFibGVIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFXbEIsSUFBTUMsY0FBK0I7UUFBR0Msb0JBQUFBLGFBQWFDLGdCQUFBQTtJQUN4RCxxQkFDSSw4REFBQ0M7UUFBR0MsT0FBTztZQUFFQyxTQUFTO1FBQU87OzBCQUN6Qiw4REFBQ0M7Z0JBQUdDLFdBQVdMLFVBQVUsdUJBQXVCOztrQ0FDNUMsOERBQUNNO3dCQUFJSixPQUFPOzRCQUFDSyxPQUFPOzRCQUFPSixTQUFROzRCQUFRSyxnQkFBZTt3QkFBWTtrQ0FBRzs7Ozs7O2tDQUN6RSw4REFBQ0Y7d0JBQUlKLE9BQU87NEJBQUNLLE9BQU07NEJBQU9KLFNBQVE7NEJBQVFLLGdCQUFlO3dCQUFZO2tDQUFHOzs7Ozs7b0JBQ3ZFUix3QkFDRyw4REFBQ007d0JBQUlKLE9BQU87NEJBQUVLLE9BQU87NEJBQU9KLFNBQVE7NEJBQVFLLGdCQUFlO3dCQUFTO2tDQUFHOzs7OztnQ0FBYTs7Ozs7OztZQUkzRlQsWUFBWVUsR0FBRyxDQUFDLFNBQUNDLFNBQVNDO3FDQUN2Qiw4REFBQ1A7b0JBQ0dDLFdBQVU7b0JBQ1ZILE9BQU87d0JBQUVVLFVBQVU7d0JBQVlMLE9BQU87b0JBQU87O3dCQUc1Q0csUUFBUUcsSUFBSTtzQ0FDYiw4REFBQ1A7NEJBQUlELFdBQVU7c0NBQ1gsNEVBQUNTO2dDQUFHVCxXQUFVOzBDQUNUSyxRQUFRSyxTQUFTOzs7Ozs7Ozs7Ozs7bUJBTHJCSjs7Ozs7Ozs7Ozs7O0FBWXpCLEVBQUM7S0EzQlliIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9UYWJsZUhlYWRlci50c3g/ODhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgdHlwZSBUYWJsZUhlYWRlck9iamVjdCA9IHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHVuZGVyTmFtZTogc3RyaW5nLFxyXG59XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzdGF0c0hlYWRlcjogVGFibGVIZWFkZXJPYmplY3RbXSxcclxuICAgIGhhc01hcHM6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzdGF0c0hlYWRlciwgaGFzTWFwcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9e2hhc01hcHMgPyBcInN0YXRzSGVhZGVyQW5kTWFwc1wiIDogXCJzdGF0c0hlYWRlclwifT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzQwJScsIGRpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonZmxleC1zdGFydCd9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzIwJScsIGRpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonZmxleC1zdGFydCd9fT5UZWFtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7aGFzTWFwcyA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMCUnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicgfX0+TWFwczwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgIHtzdGF0c0hlYWRlci5tYXAoKHN0YXRPYmosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGggXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICc1MHB4JyB9fSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0T2JqLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRPYmoudW5kZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90cj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZUhlYWRlciIsInN0YXRzSGVhZGVyIiwiaGFzTWFwcyIsInRyIiwic3R5bGUiLCJkaXNwbGF5IiwidGgiLCJjbGFzc05hbWUiLCJkaXYiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwibWFwIiwic3RhdE9iaiIsImluZGV4IiwicG9zaXRpb24iLCJuYW1lIiwiaDIiLCJ1bmRlck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/TableHeader.tsx\n"));

/***/ })

});
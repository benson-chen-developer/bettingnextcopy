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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TableHeader: function() { return /* binding */ TableHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar TableHeader = function(param) {\n    var statsHeader = param.statsHeader;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        style: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                style: {\n                    width: \"200px\"\n                },\n                children: \"Team\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/TableHeader.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                style: {\n                    width: \"200px\"\n                },\n                children: \"Date\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/TableHeader.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this),\n            statsHeader.map(function(statObj, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                    className: \"dropdown-container\",\n                    style: {\n                        position: \"relative\",\n                        width: \"50px\"\n                    },\n                    children: [\n                        statObj.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"dropdown-content\",\n                                children: statObj.underName\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/TableHeader.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/TableHeader.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/TableHeader.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/TableHeader.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this);\n};\n_c = TableHeader;\nvar _c;\n$RefreshReg$(_c, \"TableHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvVGFibGVIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFVbEIsSUFBTUMsY0FBK0I7UUFBR0Msb0JBQUFBO0lBQzNDLHFCQUNJLDhEQUFDQztRQUFHQyxPQUFPO1lBQUVDLFNBQVM7UUFBTzs7MEJBQ3pCLDhEQUFDQztnQkFBR0YsT0FBTztvQkFBRUcsT0FBTztnQkFBUTswQkFBRzs7Ozs7OzBCQUMvQiw4REFBQ0Q7Z0JBQUdGLE9BQU87b0JBQUVHLE9BQU87Z0JBQVE7MEJBQUc7Ozs7OztZQUM5QkwsWUFBWU0sR0FBRyxDQUFDLFNBQUNDLFNBQVNDO3FDQUN2Qiw4REFBQ0o7b0JBQ0dLLFdBQVU7b0JBQ1ZQLE9BQU87d0JBQUVRLFVBQVU7d0JBQVlMLE9BQU87b0JBQU87O3dCQUc1Q0UsUUFBUUksSUFBSTtzQ0FDYiw4REFBQ0M7NEJBQUlILFdBQVU7c0NBQ1gsNEVBQUNJO2dDQUFHSixXQUFVOzBDQUNURixRQUFRTyxTQUFTOzs7Ozs7Ozs7Ozs7bUJBTHJCTjs7Ozs7Ozs7Ozs7O0FBWXpCLEVBQUM7S0FyQllUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9UYWJsZUhlYWRlci50c3g/ODhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCB0eXBlIFRhYmxlSGVhZGVyT2JqZWN0ID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB1bmRlck5hbWU6IHN0cmluZ1xufVxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBzdGF0c0hlYWRlcjogVGFibGVIZWFkZXJPYmplY3RbXVxufVxuXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHN0YXRzSGVhZGVyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19PlRlYW08L3RoPlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnIH19PkRhdGU8L3RoPlxuICAgICAgICAgICAge3N0YXRzSGVhZGVyLm1hcCgoc3RhdE9iaiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8dGggXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzUwcHgnIH19IFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRPYmoubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdE9iai51bmRlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdHI+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGVIZWFkZXIiLCJzdGF0c0hlYWRlciIsInRyIiwic3R5bGUiLCJkaXNwbGF5IiwidGgiLCJ3aWR0aCIsIm1hcCIsInN0YXRPYmoiLCJpbmRleCIsImNsYXNzTmFtZSIsInBvc2l0aW9uIiwibmFtZSIsImRpdiIsImgyIiwidW5kZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/TableHeader.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StatComparator: function() { return /* binding */ StatComparator; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar StatComparator = function(param) {\n    var chartCompareTo = param.chartCompareTo, setChartCompareTo = param.setChartCompareTo;\n    var handleCompareToChange = function(value, index) {\n        // Validate only 0-9 or . and max 4 numbers plus one decimal point\n        if (!/^\\d{0,4}(\\.\\d?)?$/.test(value)) return;\n        // Parse the value to a number\n        var parsedValue = value === \"\" ? -1 : parseFloat(value);\n        setChartCompareTo(function(prev) {\n            var newCompareTo = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_2__._)(prev);\n            newCompareTo[index] = parsedValue;\n            return newCompareTo;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        style: {\n            display: \"flex\",\n            marginBottom: \"20px\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                style: {\n                    width: \"200px\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        width: \"1em\",\n                        height: \"1em\",\n                        viewBox: \"0 0 24 24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#666363\",\n                            d: \"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"#666363\",\n                            fontSize: \"12px\",\n                            margin: 0\n                        },\n                        children: [\n                            \"Type a Number\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, _this),\n                            \" to Compare to Stats\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            chartCompareTo.map(function(value, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        width: \"50px\",\n                        height: \"35px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        style: {\n                            width: \"90%\",\n                            height: \"100%\",\n                            border: \"1px solid #000\",\n                            borderRadius: 5,\n                            textAlign: \"center\",\n                            fontSize: \"16px\",\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        type: \"string\",\n                        onChange: function(e) {\n                            return handleCompareToChange(e.target.value, index);\n                        },\n                        value: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, _this)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\StatComparator.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_c = StatComparator;\nvar _c;\n$RefreshReg$(_c, \"StatComparator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvU3RhdENvbXBhcmF0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3RDtBQU9qRCxJQUFNQyxpQkFBa0M7UUFBR0MsdUJBQUFBLGdCQUFnQkMsMEJBQUFBO0lBQzlELElBQU1DLHdCQUF3QixTQUFDQyxPQUFlQztRQUMxQyxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLG9CQUFvQkMsSUFBSSxDQUFDRixRQUFRO1FBRXRDLDhCQUE4QjtRQUM5QixJQUFNRyxjQUFjSCxVQUFVLEtBQUssQ0FBQyxJQUFJSSxXQUFXSjtRQUVuREYsa0JBQWtCLFNBQUNPO1lBQ2YsSUFBTUMsZUFBZ0Isb0VBQUdEO1lBQ3pCQyxZQUFZLENBQUNMLE1BQU0sR0FBR0U7WUFDdEIsT0FBT0c7UUFDWDtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUdDLE9BQU87WUFBRUMsU0FBUztZQUFRQyxjQUFjO1lBQVFDLFlBQVk7UUFBUzs7MEJBQ3JFLDhEQUFDQztnQkFBR0osT0FBTztvQkFBRUssT0FBTztvQkFBU0osU0FBUztvQkFBUUssZ0JBQWdCO29CQUFVSCxZQUFZO2dCQUFTOztrQ0FDekYsOERBQUNJO3dCQUFJQyxPQUFNO3dCQUE2QkgsT0FBTTt3QkFBTUksUUFBTzt3QkFBTUMsU0FBUTtrQ0FDckUsNEVBQUNDOzRCQUFLQyxNQUFLOzRCQUFVQyxHQUFFOzs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNDO3dCQUFFZCxPQUFPOzRCQUFFZSxPQUFPOzRCQUFXQyxVQUFVOzRCQUFRQyxRQUFRO3dCQUFFOzs0QkFBRzswQ0FFekQsOERBQUNDOzs7Ozs0QkFBSzs7Ozs7Ozs7Ozs7OztZQUliN0IsZUFBZThCLEdBQUcsQ0FBQyxTQUFDM0IsT0FBT0M7cUNBQ3hCLDhEQUFDMkI7b0JBQWVwQixPQUFPO3dCQUFFSyxPQUFPO3dCQUFRSSxRQUFRO29CQUFPOzhCQUNuRCw0RUFBQ1k7d0JBQ0dyQixPQUFPOzRCQUNISyxPQUFPOzRCQUNQSSxRQUFROzRCQUNSYSxRQUFROzRCQUNSQyxjQUFjOzRCQUNkQyxXQUFXOzRCQUNYUixVQUFVOzRCQUNWZixTQUFTOzRCQUNUSyxnQkFBZ0I7NEJBQ2hCSCxZQUFZO3dCQUNoQjt3QkFDQXNCLE1BQUs7d0JBQ0xDLFVBQVUsU0FBQ0M7bUNBQU1wQyxzQkFBdUJvQyxFQUFFQyxNQUFNLENBQUNwQyxLQUFLLEVBQUdDOzt3QkFDekRELE9BQU9BOzs7Ozs7bUJBZk5DOzs7Ozs7Ozs7Ozs7QUFxQnpCLEVBQUM7S0FqRFlMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9TdGF0Q29tcGFyYXRvci50c3g/ODQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNoYXJ0Q29tcGFyZVRvOiBudW1iZXJbXSxcclxuICAgIHNldENoYXJ0Q29tcGFyZVRvOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXJbXT4+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0Q29tcGFyYXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hhcnRDb21wYXJlVG8sIHNldENoYXJ0Q29tcGFyZVRvIH0pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNvbXBhcmVUb0NoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgLy8gVmFsaWRhdGUgb25seSAwLTkgb3IgLiBhbmQgbWF4IDQgbnVtYmVycyBwbHVzIG9uZSBkZWNpbWFsIHBvaW50XHJcbiAgICAgICAgaWYgKCEvXlxcZHswLDR9KFxcLlxcZD8pPyQvLnRlc3QodmFsdWUpKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFyc2UgdGhlIHZhbHVlIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB2YWx1ZSA9PT0gXCJcIiA/IC0xIDogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICBcclxuICAgICAgICBzZXRDaGFydENvbXBhcmVUbygocHJldjogbnVtYmVyW10pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29tcGFyZVRvID0gWy4uLnByZXZdO1xyXG4gICAgICAgICAgICBuZXdDb21wYXJlVG9baW5kZXhdID0gcGFyc2VkVmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdDb21wYXJlVG87XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRyIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luQm90dG9tOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjNjY2MzYzXCIgZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwczEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMTVjLS41NSAwLTEtLjQ1LTEtMXYtNGMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2NGMwIC41NS0uNDUgMS0xIDFtMS04aC0yVjdoMnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyM2NjYzNjMnLCBmb250U2l6ZTogJzEycHgnLCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZSBhIE51bWJlciBcclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz4gdG8gQ29tcGFyZSB0byBTdGF0c1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAge2NoYXJ0Q29tcGFyZVRvLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnMzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29tcGFyZVRvQ2hhbmdlKChlLnRhcmdldC52YWx1ZSksIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3RyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdGF0Q29tcGFyYXRvciIsImNoYXJ0Q29tcGFyZVRvIiwic2V0Q2hhcnRDb21wYXJlVG8iLCJoYW5kbGVDb21wYXJlVG9DaGFuZ2UiLCJ2YWx1ZSIsImluZGV4IiwidGVzdCIsInBhcnNlZFZhbHVlIiwicGFyc2VGbG9hdCIsInByZXYiLCJuZXdDb21wYXJlVG8iLCJ0ciIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsImFsaWduSXRlbXMiLCJ0aCIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJwYXRoIiwiZmlsbCIsImQiLCJwIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbiIsImJyIiwibWFwIiwidGQiLCJpbnB1dCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/StatComparator.tsx\n"));

/***/ })

});
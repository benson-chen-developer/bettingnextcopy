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

/***/ "./src/components/Player/Row.tsx":
/*!***************************************!*\
  !*** ./src/components/Player/Row.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Row: function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar formatDate = function(dateString) {\n    var _dateString_split = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(dateString.split(\"-\"), 3), year = _dateString_split[0], month = _dateString_split[1], day = _dateString_split[2];\n    var formattedDay = parseInt(day, 10); // Convert to integer to remove leading zeros\n    var formattedMonth = parseInt(month, 10); // Convert to integer to remove leading zeros\n    return \"\".concat(formattedMonth, \"-\").concat(formattedDay);\n};\nvar Row = function(param) {\n    var game = param.game, chartCompareTo = param.chartCompareTo;\n    if (game.stats.PTS === -1) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        style: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                style: {\n                    width: \"200px\",\n                    display: \"flex\",\n                    justifyContent: \"space-evenly\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    formatDate(game.date),\n                    \"  \",\n                    game.teams[0],\n                    \"@\",\n                    game.teams[1]\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/Row.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this),\n            Object.entries(game.stats).map(function(param) {\n                var _param = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(param, 2), key = _param[0], value = _param[1];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {\n                    amount: value,\n                    compareAmount: chartCompareTo[key]\n                }, key, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/Row.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/Row.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = Row;\nvar Square = function(param) {\n    var amount = param.amount, compareAmount = param.compareAmount;\n    var bgColor = \"#D9D9D9\";\n    var amountParsed = amount % 1 !== 0 ? amount.toFixed(1) : amount;\n    if (amount > compareAmount) bgColor = \"#B1DEA3\";\n    if (amount === compareAmount) bgColor = \"#f7f259\";\n    if (amount < compareAmount) bgColor = \"#f94352\";\n    else if (compareAmount < 0) bgColor = \"#D9D9D9\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"50px\",\n                height: \"35px\",\n                background: bgColor,\n                borderRadius: 5,\n                overflow: \"hidden\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    margin: 0,\n                    padding: 0,\n                    lineHeight: \"35px\",\n                    height: \"35px\",\n                    overflow: \"hidden\"\n                },\n                children: amountParsed\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/Row.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/Row.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/Row.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Square;\nvar _c, _c1;\n$RefreshReg$(_c, \"Row\");\n$RefreshReg$(_c1, \"Square\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvUm93LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFPekIsSUFBTUMsYUFBYSxTQUFDQztJQUNsQixJQUEyQkEsb0JBQUFBLCtEQUFBQSxDQUFBQSxXQUFXQyxLQUFLLENBQUMsVUFBckNDLE9BQW9CRixzQkFBZEcsUUFBY0gsc0JBQVBJLE1BQU9KO0lBQzNCLElBQU1LLGVBQWVDLFNBQVNGLEtBQUssS0FBSyw2Q0FBNkM7SUFDckYsSUFBTUcsaUJBQWlCRCxTQUFTSCxPQUFPLEtBQUssNkNBQTZDO0lBQ3pGLE9BQU8sR0FBcUJFLE9BQWxCRSxnQkFBZSxLQUFnQixPQUFiRjtBQUM5QjtBQUVPLElBQU1HLE1BQXNCO1FBQUVDLGFBQUFBLE1BQU1DLHVCQUFBQTtJQUN6QyxJQUFHRCxLQUFLRSxLQUFLLENBQUNDLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTztJQUVqQyxxQkFDRSw4REFBQ0M7UUFBR0MsT0FBTztZQUFDQyxTQUFRO1FBQU07OzBCQUN0Qiw4REFBQ0M7Z0JBQUdGLE9BQU87b0JBQUNHLE9BQU07b0JBQVNGLFNBQVE7b0JBQVFHLGdCQUFlO29CQUFnQkMsWUFBVztnQkFBUTs7b0JBQzFGcEIsV0FBV1UsS0FBS1csSUFBSTtvQkFBRTtvQkFBR1gsS0FBS1ksS0FBSyxDQUFDLEVBQUU7b0JBQUM7b0JBQUVaLEtBQUtZLEtBQUssQ0FBQyxFQUFFOzs7Ozs7O1lBRXhEQyxPQUFPQyxPQUFPLENBQUNkLEtBQUtFLEtBQUssRUFBRWEsR0FBRyxDQUFDO3dHQUFFQyxpQkFBS0M7cUNBQ3JDLDhEQUFDQztvQkFDQ0MsUUFBUUY7b0JBQ1JHLGVBQWVuQixjQUFjLENBQUNlLElBQW1CO21CQUM1Q0E7Ozs7Ozs7Ozs7OztBQUtqQixFQUFDO0tBakJZakI7QUF3QmIsSUFBTW1CLFNBQTZCO1FBQUVDLGVBQUFBLFFBQVFDLHNCQUFBQTtJQUMzQyxJQUFJQyxVQUFVO0lBQ2QsSUFBSUMsZUFBZUgsU0FBUyxNQUFNLElBQUlBLE9BQU9JLE9BQU8sQ0FBQyxLQUFLSjtJQUUxRCxJQUFHQSxTQUFTQyxlQUFlQyxVQUFVO0lBQ3JDLElBQUdGLFdBQVdDLGVBQWVDLFVBQVU7SUFDdkMsSUFBR0YsU0FBU0MsZUFBZUMsVUFBVTtTQUNoQyxJQUFHRCxnQkFBZ0IsR0FBR0MsVUFBVTtJQUVyQyxxQkFDRSw4REFBQ2Q7UUFBR0YsT0FBTztZQUFDQyxTQUFRO1lBQVFHLGdCQUFlO1FBQVE7a0JBQ2pELDRFQUFDZTtZQUFJbkIsT0FBTztnQkFDVkcsT0FBTztnQkFDUGlCLFFBQVE7Z0JBQ1JDLFlBQVlMO2dCQUNaTSxjQUFjO2dCQUNkQyxVQUFVO1lBQ1o7c0JBQ0UsNEVBQUNDO2dCQUFFeEIsT0FBTztvQkFDTnlCLFFBQVE7b0JBQ1JDLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pQLFFBQVE7b0JBQ1JHLFVBQVU7Z0JBQ2Q7MEJBQUlOOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVo7TUE1Qk1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9Sb3cudHN4PzEyODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgIEdhbWUyLCBTdGF0cyB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9wbGF5ZXJzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGdhbWU6IEdhbWUyLFxuICAgIGNoYXJ0Q29tcGFyZVRvOiBTdGF0c1xufVxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlU3RyaW5nLnNwbGl0KCctJyk7XG4gIGNvbnN0IGZvcm1hdHRlZERheSA9IHBhcnNlSW50KGRheSwgMTApOyAvLyBDb252ZXJ0IHRvIGludGVnZXIgdG8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcbiAgY29uc3QgZm9ybWF0dGVkTW9udGggPSBwYXJzZUludChtb250aCwgMTApOyAvLyBDb252ZXJ0IHRvIGludGVnZXIgdG8gcmVtb3ZlIGxlYWRpbmcgemVyb3NcbiAgcmV0dXJuIGAke2Zvcm1hdHRlZE1vbnRofS0ke2Zvcm1hdHRlZERheX1gO1xufVxuXG5leHBvcnQgY29uc3QgUm93OlJlYWN0LkZDPFByb3BzPiA9ICh7Z2FtZSwgY2hhcnRDb21wYXJlVG99KSA9PiB7XG4gIGlmKGdhbWUuc3RhdHMuUFRTID09PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8dHIgc3R5bGU9e3tkaXNwbGF5OidmbGV4J319PlxuICAgICAgICA8dGggc3R5bGU9e3t3aWR0aDonMjAwcHgnLCBkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seScsIGFsaWduSXRlbXM6J2NlbnRlcid9fT5cbiAgICAgICAgICB7Zm9ybWF0RGF0ZShnYW1lLmRhdGUpfSAge2dhbWUudGVhbXNbMF19QHtnYW1lLnRlYW1zWzFdfVxuICAgICAgICA8L3RoPlxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoZ2FtZS5zdGF0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICA8U3F1YXJlIFxuICAgICAgICAgICAgYW1vdW50PXt2YWx1ZX0gXG4gICAgICAgICAgICBjb21wYXJlQW1vdW50PXtjaGFydENvbXBhcmVUb1trZXkgYXMga2V5b2YgU3RhdHNdfSBcbiAgICAgICAgICAgIGtleT17a2V5fSBcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICA8L3RyPlxuICApXG59XG5cbmludGVyZmFjZSBQcm9wc1R3byB7XG4gIGFtb3VudDogbnVtYmVyLFxuICBjb21wYXJlQW1vdW50OiBudW1iZXJcbn1cblxuY29uc3QgU3F1YXJlOiBSZWFjdC5GQzxQcm9wc1R3bz4gPSAoe2Ftb3VudCwgY29tcGFyZUFtb3VudH0pID0+IHtcbiAgbGV0IGJnQ29sb3IgPSAnI0Q5RDlEOSc7XG4gIGxldCBhbW91bnRQYXJzZWQgPSBhbW91bnQgJSAxICE9PSAwID8gYW1vdW50LnRvRml4ZWQoMSkgOiBhbW91bnQ7XG5cbiAgaWYoYW1vdW50ID4gY29tcGFyZUFtb3VudCkgYmdDb2xvciA9ICcjQjFERUEzJztcbiAgaWYoYW1vdW50ID09PSBjb21wYXJlQW1vdW50KSBiZ0NvbG9yID0gJyNmN2YyNTknO1xuICBpZihhbW91bnQgPCBjb21wYXJlQW1vdW50KSBiZ0NvbG9yID0gJyNmOTQzNTInO1xuICBlbHNlIGlmKGNvbXBhcmVBbW91bnQgPCAwKSBiZ0NvbG9yID0gJyNEOUQ5RDknO1xuXG4gIHJldHVybihcbiAgICA8dGggc3R5bGU9e3tkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cbiAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzVweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBiZ0NvbG9yLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIH19PlxuICAgICAgICA8cCBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgIH19PnthbW91bnRQYXJzZWR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC90aD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9ybWF0RGF0ZSIsImRhdGVTdHJpbmciLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdHRlZERheSIsInBhcnNlSW50IiwiZm9ybWF0dGVkTW9udGgiLCJSb3ciLCJnYW1lIiwiY2hhcnRDb21wYXJlVG8iLCJzdGF0cyIsIlBUUyIsInRyIiwic3R5bGUiLCJkaXNwbGF5IiwidGgiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRhdGUiLCJ0ZWFtcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsIlNxdWFyZSIsImFtb3VudCIsImNvbXBhcmVBbW91bnQiLCJiZ0NvbG9yIiwiYW1vdW50UGFyc2VkIiwidG9GaXhlZCIsImRpdiIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInAiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player/Row.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Home/Trending/TrendingPage.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Home/Trending/TrendingPage.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrendingPage: function() { return /* binding */ TrendingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar TrendingPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"#fff\",\n                    fontWeight: \"bold\",\n                    fontSize: \"2em\",\n                    margin: \"100px 0px \".concat(spaceBetween, \" \").concat(marginLeftSpacing)\n                },\n                children: \"Trending \\uD83D\\uDD25\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginLeft: marginLeftSpacing,\n                    marginBottom: spaceBetween\n                },\n                children: trendings.map(function(trending, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tab, {\n                        name: trending.name,\n                        selectedTab: selectedTab,\n                        setSelectedTab: setSelectedTab,\n                        comingSoon: trending.comingSoon\n                    }, index, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    marginTop: \"10px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"95%\",\n                        height: \"1px\",\n                        background: \"#545454\",\n                        borderRadius: \"10px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"trending-box\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResponsiveTrendingBoxes, {\n                    games: trendingGames,\n                    homePlayersLoaded: homePlayersLoaded\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = TrendingPage;\nvar _c;\n$RefreshReg$(_c, \"TrendingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUVsQixJQUFNQyxlQUFlO0lBQzFCLHFCQUNFOzswQkFDSSw4REFBQ0M7Z0JBQUdDLE9BQU87b0JBQUNDLE9BQU07b0JBQVFDLFlBQVc7b0JBQVFDLFVBQVU7b0JBQU9DLFFBQVEsYUFBNkJDLE9BQWhCQyxjQUFhLEtBQXFCLE9BQWxCRDtnQkFBbUI7MEJBQUc7Ozs7OzswQkFJekgsOERBQUNFO2dCQUFJUCxPQUFPO29CQUFDUSxTQUFRO29CQUFRQyxZQUFZSjtvQkFBbUJLLGNBQWFKO2dCQUFZOzBCQUNoRkssVUFBVUMsR0FBRyxDQUFDLFNBQUNDLFVBQVVDO3lDQUN0Qiw4REFBQ0M7d0JBRUdDLE1BQU1ILFNBQVNHLElBQUk7d0JBQUVDLGFBQWFBO3dCQUNsQ0MsZ0JBQWdCQTt3QkFDaEJDLFlBQVlOLFNBQVNNLFVBQVU7dUJBSDFCTDs7Ozs7Ozs7Ozs7MEJBUWpCLDhEQUFDUDtnQkFBSVAsT0FBTztvQkFBQ29CLE9BQU07b0JBQVFDLFdBQVU7b0JBQVFiLFNBQVE7b0JBQVFjLFlBQVc7b0JBQVVDLGdCQUFlO2dCQUFROzBCQUNyRyw0RUFBQ2hCO29CQUFJUCxPQUFPO3dCQUFDb0IsT0FBTTt3QkFBT0ksUUFBTzt3QkFBT0MsWUFBVzt3QkFBV0MsY0FBYTtvQkFBTTs7Ozs7Ozs7Ozs7MEJBR3JGLDhEQUFDbkI7Z0JBQUlvQixXQUFVOzBCQUNYLDRFQUFDQztvQkFBd0JDLE9BQU9DO29CQUFlQyxtQkFBbUJBOzs7Ozs7Ozs7Ozs7O0FBSTlFLEVBQUM7S0EzQllqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZS50c3g/N2I2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBUcmVuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6JyNmZmYnLCBmb250V2VpZ2h0Oidib2xkJywgZm9udFNpemU6ICcyZW0nLCBtYXJnaW46IGAxMDBweCAwcHggJHtzcGFjZUJldHdlZW59ICR7bWFyZ2luTGVmdFNwYWNpbmd9YH19PlxuICAgICAgICAgICAgVHJlbmRpbmcg8J+UpVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgbWFyZ2luTGVmdDogbWFyZ2luTGVmdFNwYWNpbmcsIG1hcmdpbkJvdHRvbTpzcGFjZUJldHdlZW59fT5cbiAgICAgICAgICAgIHt0cmVuZGluZ3MubWFwKCh0cmVuZGluZywgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgIDxUYWIgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPXt0cmVuZGluZy5uYW1lfSBzZWxlY3RlZFRhYj17c2VsZWN0ZWRUYWJ9IFxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhYj17c2V0U2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbWluZ1Nvb249e3RyZW5kaW5nLmNvbWluZ1Nvb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsIG1hcmdpblRvcDonMTBweCcsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOic5NSUnLCBoZWlnaHQ6JzFweCcsIGJhY2tncm91bmQ6JyM1NDU0NTQnLCBib3JkZXJSYWRpdXM6JzEwcHgnfX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1ib3hcIj5cbiAgICAgICAgICAgIDxSZXNwb25zaXZlVHJlbmRpbmdCb3hlcyBnYW1lcz17dHJlbmRpbmdHYW1lc30gaG9tZVBsYXllcnNMb2FkZWQ9e2hvbWVQbGF5ZXJzTG9hZGVkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVHJlbmRpbmdQYWdlIiwiaDEiLCJzdHlsZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibWFyZ2luIiwibWFyZ2luTGVmdFNwYWNpbmciLCJzcGFjZUJldHdlZW4iLCJkaXYiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsInRyZW5kaW5ncyIsIm1hcCIsInRyZW5kaW5nIiwiaW5kZXgiLCJUYWIiLCJuYW1lIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsImNvbWluZ1Nvb24iLCJ3aWR0aCIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJSZXNwb25zaXZlVHJlbmRpbmdCb3hlcyIsImdhbWVzIiwidHJlbmRpbmdHYW1lcyIsImhvbWVQbGF5ZXJzTG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home/Trending/TrendingPage.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/colors */ \"./src/data/colors.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Home_Trending_TrendingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/Trending/TrendingPage */ \"./src/components/Home/Trending/TrendingPage.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar marginLeftSpacing = \"50px\";\nvar Trending = function() {\n    _s();\n    var trendings = [\n        {\n            name: \"WNBA\",\n            comingSoon: false\n        },\n        {\n            name: \"MLB\",\n            comingSoon: true\n        },\n        {\n            name: \"Soccer\",\n            comingSoon: true\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), trendingGames = _useState[0], setTrendingGames = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(trendings[0].name), 2), selectedTab = _useState1[0], setSelectedTab = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), homePlayersLoaded = _useState2[0], setHomePlayersLoad = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchTodayGames = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n                var newTrendingGames;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                    try {\n                        // const newTrendingGames = await fetchTodayWNBAGames();\n                        newTrendingGames = [];\n                        setHomePlayersLoad(true);\n                        setTrendingGames(newTrendingGames);\n                    } catch (error) {\n                        setHomePlayersLoad(true);\n                        console.error(\"Error fetching today's games:\", error);\n                    }\n                    return [\n                        2\n                    ];\n                });\n            });\n            return function fetchTodayGames() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchTodayGames();\n    }, []);\n    var spaceBetween = \"30px\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Trending Players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Players playing games today and trending\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"ahrefs-site-verification\",\n                        content: \"881627b9cdfce1e5ef0a890ec7d5477594ec45471d470d5eeaadea5976b61433\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    minHeight: \"100vh\",\n                    minWidth: \"100vw\",\n                    background: _data_colors__WEBPACK_IMPORTED_MODULE_2__.black,\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Trending_TrendingPage__WEBPACK_IMPORTED_MODULE_4__.TrendingPage, {}, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Trending, \"L8LRKQrcrIUL6GH27tqbWvJK2l0=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNaO0FBSVQ7QUFDMkM7QUFFeEUsSUFBTU0sb0JBQW9CO0FBUTFCLElBQU1DLFdBQVc7O0lBQ2IsSUFBTUMsWUFBWTtRQUNkO1lBQUNDLE1BQUs7WUFBUUMsWUFBWTtRQUFLO1FBQy9CO1lBQUNELE1BQUs7WUFBT0MsWUFBVztRQUFJO1FBQzVCO1lBQUNELE1BQUs7WUFBVUMsWUFBVztRQUFJO0tBQ2xDO0lBQ0QsSUFBMENSLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUSxFQUFFLE9BQXJEUyxnQkFBbUNULGNBQXBCVSxtQkFBb0JWO0lBQzFDLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVNNLFNBQVMsQ0FBQyxFQUFFLENBQUNDLElBQUksT0FBakVJLGNBQStCWCxlQUFsQlksaUJBQWtCWjtJQUN0QyxJQUFnREEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFVLFlBQTNEYSxvQkFBeUNiLGVBQXRCYyxxQkFBc0JkO0lBRWhERCxnREFBU0EsQ0FBQztRQUNOLElBQU1nQjt1QkFBa0I7b0JBR1ZDOztvQkFGVixJQUFJO3dCQUNBLHdEQUF3RDt3QkFDbERBO3dCQUNORixtQkFBbUI7d0JBQ25CSixpQkFBaUJNO29CQUNyQixFQUNBLE9BQU9DLE9BQU87d0JBQ1ZILG1CQUFtQjt3QkFDbkJJLFFBQVFELEtBQUssQ0FBQyxpQ0FBa0NBO29CQUNwRDs7Ozs7WUFDSjs0QkFYTUY7Ozs7UUFhTkE7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFNSSxlQUFlO0lBQ3JCLHFCQUNJOzswQkFFQSw4REFBQ2pCLGtEQUFJQTs7a0NBQ0QsOERBQUNrQjtrQ0FBTzs7Ozs7O2tDQUNSLDhEQUFDQzt3QkFBS2QsTUFBSzt3QkFBY2UsU0FBUzs7Ozs7O2tDQUNsQyw4REFBQ0Q7d0JBQUtkLE1BQUs7d0JBQTJCZSxTQUFROzs7Ozs7Ozs7Ozs7MEJBR2xELDhEQUFDQztnQkFBSUMsT0FBTztvQkFBQ0MsV0FBVTtvQkFBU0MsVUFBVTtvQkFBU0MsWUFBWTFCLCtDQUFLQTtvQkFBRTJCLFNBQVE7b0JBQVFDLGVBQWM7Z0JBQVE7MEJBQ3hHLDRFQUFDMUIsZ0ZBQVlBOzs7Ozs7Ozs7Ozs7QUFLekI7R0EzQ01FO0tBQUFBO0FBNkNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYmxhY2sgfSBmcm9tICcuLi9kYXRhL2NvbG9ycydcbmltcG9ydCBSZXNwb25zaXZlVHJlbmRpbmdCb3hlcyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvUmVzcG9uc2l2ZVRyZW5kaW5nQm94ZXMnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1RhYic7XG5pbXBvcnQgeyBUcmVuZGluZ0JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9UcmVuZGluZ0JveCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVHJlbmRpbmdQYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZSc7XG5cbmNvbnN0IG1hcmdpbkxlZnRTcGFjaW5nID0gJzUwcHgnO1xuXG5leHBvcnQgdHlwZSBUcmVuZGluZ1BsYXllciA9IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICBsYXN0TmFtZTogc3RyaW5nXG4gICAgd25iYUlkOiBzdHJpbmcsXG59XG5cbmNvbnN0IFRyZW5kaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyZW5kaW5ncyA9IFtcbiAgICAgICAge25hbWU6J1dOQkEnLCBjb21pbmdTb29uOiBmYWxzZX0sXG4gICAgICAgIHtuYW1lOidNTEInLCBjb21pbmdTb29uOnRydWV9LFxuICAgICAgICB7bmFtZTonU29jY2VyJywgY29taW5nU29vbjp0cnVlfVxuICAgIF07XG4gICAgY29uc3QgW3RyZW5kaW5nR2FtZXMsIHNldFRyZW5kaW5nR2FtZXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4odHJlbmRpbmdzWzBdLm5hbWUpO1xuICAgIGNvbnN0IFtob21lUGxheWVyc0xvYWRlZCwgc2V0SG9tZVBsYXllcnNMb2FkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoVG9kYXlHYW1lcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbmV3VHJlbmRpbmdHYW1lcyA9IGF3YWl0IGZldGNoVG9kYXlXTkJBR2FtZXMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUcmVuZGluZ0dhbWVzOiBhbnkgW10gPSBbXTtcbiAgICAgICAgICAgICAgICBzZXRIb21lUGxheWVyc0xvYWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0VHJlbmRpbmdHYW1lcyhuZXdUcmVuZGluZ0dhbWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHNldEhvbWVQbGF5ZXJzTG9hZCh0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0b2RheVxcJ3MgZ2FtZXM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmZXRjaFRvZGF5R2FtZXMoKTtcbiAgICB9LCBbXSk7XG4gICAgXG4gICAgY29uc3Qgc3BhY2VCZXR3ZWVuID0gJzMwcHgnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+eydUcmVuZGluZyBQbGF5ZXJzJ308L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17XCJQbGF5ZXJzIHBsYXlpbmcgZ2FtZXMgdG9kYXkgYW5kIHRyZW5kaW5nXCJ9IC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiYWhyZWZzLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cIjg4MTYyN2I5Y2RmY2UxZTVlZjBhODkwZWM3ZDU0Nzc1OTRlYzQ1NDcxZDQ3MGQ1ZWVhYWRlYTU5NzZiNjE0MzNcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e21pbkhlaWdodDonMTAwdmgnLCBtaW5XaWR0aDogJzEwMHZ3JywgYmFja2dyb3VuZDogYmxhY2ssIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XG4gICAgICAgICAgICA8VHJlbmRpbmdQYWdlIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlbmRpbmc7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJibGFjayIsIkhlYWQiLCJUcmVuZGluZ1BhZ2UiLCJtYXJnaW5MZWZ0U3BhY2luZyIsIlRyZW5kaW5nIiwidHJlbmRpbmdzIiwibmFtZSIsImNvbWluZ1Nvb24iLCJ0cmVuZGluZ0dhbWVzIiwic2V0VHJlbmRpbmdHYW1lcyIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJob21lUGxheWVyc0xvYWRlZCIsInNldEhvbWVQbGF5ZXJzTG9hZCIsImZldGNoVG9kYXlHYW1lcyIsIm5ld1RyZW5kaW5nR2FtZXMiLCJlcnJvciIsImNvbnNvbGUiLCJzcGFjZUJldHdlZW4iLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwiZGl2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrendingPage: function() { return /* binding */ TrendingPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Nav_SearchBar_DropDown_SportDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav/SearchBar/DropDown/SportDropDown */ \"./src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\");\n/* harmony import */ var _PlayerBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerBox */ \"./src/components/Home/Trending/PlayerBox.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TrendingPage = function() {\n    _s();\n    var spaceBetween = \"30px\";\n    var trendings = [\n        {\n            name: \"All\"\n        },\n        {\n            name: \"WNBA\"\n        },\n        {\n            name: \"CS\"\n        },\n        {\n            name: \"Valorant\"\n        },\n        {\n            name: \"LOL\"\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), trendingPlayers = _useState[0], setTrendingPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(trendings[0].name), 2), selectedTab = _useState2[0], setSelectedTab = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var newTrendingPlayers = [\n            {\n                firstName: \"Cait\",\n                lastName: \"Clark\",\n                picId: \"1642286\",\n                team: \"IND\",\n                playerId: \"1642286\",\n                sport: \"WNBA\",\n                oppTeam: \"\",\n                date: \"\",\n                tournament: \"\"\n            },\n            {\n                firstName: \"Wyzo\",\n                lastName: \"\",\n                picId: \"\",\n                team: \"Vitality\",\n                playerId: \"\",\n                sport: \"CS\",\n                oppTeam: \"\",\n                date: \"\",\n                tournament: \"\"\n            }\n        ];\n        setTrendingPlayers(newTrendingPlayers);\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"TrendingPage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"#fff\",\n                    fontWeight: \"bold\",\n                    fontSize: \"2em\",\n                    margin: \"100px 0px \".concat(spaceBetween, \" 0px\")\n                },\n                children: \"Trending \\uD83D\\uDD25\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginBottom: spaceBetween,\n                    overflowX: \"auto\",\n                    whiteSpace: \"nowrap\",\n                    flexWrap: \"nowrap\",\n                    scrollbarWidth: \"none\",\n                    msOverflowStyle: \"none\"\n                },\n                children: trendings.map(function(trending, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_SearchBar_DropDown_SportDropDown__WEBPACK_IMPORTED_MODULE_2__.SportSquare, {\n                        selected: trending.name === selectedTab,\n                        sport: trending.name,\n                        setSport: setSelectedTab,\n                        index: index,\n                        totalLen: trendings.length\n                    }, index, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    marginTop: \"10px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"100%\",\n                        height: \"1px\",\n                        background: \"#545454\",\n                        borderRadius: \"10px\",\n                        marginLeft: \"20px\",\n                        marginRight: \"20px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"trending-box\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginLeft: \"50px\",\n                        marginTop: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__.ClipLoader, {\n                        color: \"#fff\",\n                        loading: true,\n                        size: 150,\n                        \"aria-label\": \"Loading Spinner\",\n                        \"data-testid\": \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"trending-container\",\n                    children: trendingPlayers.filter(function(player) {\n                        return selectedTab === \"All\" || player.sport === selectedTab;\n                    }).length > 0 ? trendingPlayers.filter(function(player) {\n                        return selectedTab === \"All\" || player.sport === selectedTab;\n                    }).map(function(player, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerBox__WEBPACK_IMPORTED_MODULE_3__.PlayerBox, {\n                            player: player\n                        }, index, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 41\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyItems: \"center\",\n                            alignItems: \"center\",\n                            flexDirection: \"column\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#fff\",\n                                    fontSize: \"25px\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"No Trending Players Currently\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#b2b2b2\",\n                                    fontSize: \"20px\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Check Back Later For More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, _this);\n};\n_s(TrendingPage, \"qTacd33w13H0CQ9VLGg361IBCAw=\");\n_c = TrendingPage;\nvar _c;\n$RefreshReg$(_c, \"TrendingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNOO0FBRTRCO0FBQ2hDO0FBRWpDLElBQU1NLGVBQWU7O0lBQ3ZCLElBQU1DLGVBQWU7SUFDdEIsSUFBTUMsWUFBWTtRQUNkO1lBQUNDLE1BQUs7UUFBSztRQUNYO1lBQUNBLE1BQUs7UUFBTTtRQUNaO1lBQUNBLE1BQUs7UUFBSTtRQUNWO1lBQUNBLE1BQUs7UUFBVTtRQUNoQjtZQUFDQSxNQUFLO1FBQUs7S0FDZDtJQUNELElBQThDUCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQW1CLEVBQUUsT0FBcEVRLGtCQUF1Q1IsY0FBdEJTLHFCQUFzQlQ7SUFDOUMsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBVSxXQUF6Q1UsVUFBdUJWLGVBQWRXLGFBQWNYO0lBQzlCLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVNNLFNBQVMsQ0FBQyxFQUFFLENBQUNDLElBQUksT0FBakVLLGNBQStCWixlQUFsQmEsaUJBQWtCYjtJQUV0Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFNZSxxQkFBcUI7WUFDdkI7Z0JBQ0lDLFdBQVc7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLE1BQU07Z0JBQ05DLFlBQVk7WUFDaEI7WUFDQTtnQkFDSVIsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsTUFBTTtnQkFDTkMsWUFBWTtZQUNoQjtTQUNIO1FBRURkLG1CQUFtQks7UUFDbkJILFdBQVc7SUFDZixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHQyxPQUFPO29CQUFDQyxPQUFNO29CQUFRQyxZQUFXO29CQUFRQyxVQUFVO29CQUFPQyxRQUFRLGFBQTBCLE9BQWIxQixjQUFhO2dCQUFLOzBCQUFHOzs7Ozs7MEJBSXhHLDhEQUFDbUI7Z0JBQUlHLE9BQU87b0JBQ1JLLFNBQVM7b0JBQVFDLGNBQWM1QjtvQkFDL0I2QixXQUFXO29CQUFRQyxZQUFZO29CQUFVQyxVQUFVO29CQUNuREMsZ0JBQWdCO29CQUFTQyxpQkFBaUI7Z0JBQzlDOzBCQUVLaEMsVUFBVWlDLEdBQUcsQ0FBQyxTQUFDQyxVQUFVQzt5Q0FDdEIsOERBQUN2Qyw4RUFBV0E7d0JBQ1J3QyxVQUFVRixTQUFTakMsSUFBSSxLQUFLSzt3QkFDNUJRLE9BQU9vQixTQUFTakMsSUFBSTt3QkFBRW9DLFVBQVU5Qjt3QkFDaEM0QixPQUFPQTt3QkFBbUJHLFVBQVV0QyxVQUFVdUMsTUFBTTt1QkFBakNKOzs7Ozs7Ozs7OzswQkFLL0IsOERBQUNqQjtnQkFBSUcsT0FBTztvQkFBQ21CLE9BQU07b0JBQVFDLFdBQVU7b0JBQVFmLFNBQVE7b0JBQVFnQixZQUFXO29CQUFVQyxnQkFBZTtnQkFBUTswQkFDckcsNEVBQUN6QjtvQkFBSUcsT0FBTzt3QkFBQ21CLE9BQU07d0JBQVFJLFFBQU87d0JBQU9DLFlBQVc7d0JBQVdDLGNBQWE7d0JBQVFDLFlBQVc7d0JBQVFDLGFBQVk7b0JBQU07Ozs7Ozs7Ozs7OzBCQUc3SCw4REFBQzlCO2dCQUFJQyxXQUFVOzBCQUNWZix3QkFDRyw4REFBQ2M7b0JBQUlHLE9BQU87d0JBQUUwQixZQUFZO3dCQUFRTixXQUFXO29CQUFPOzhCQUNoRCw0RUFBQzlDLHNEQUFVQTt3QkFDUDJCLE9BQU87d0JBQ1BsQixTQUFTO3dCQUNUNkMsTUFBTTt3QkFDTkMsY0FBVzt3QkFDWEMsZUFBWTs7Ozs7Ozs7OzswQ0FJcEIsOERBQUNqQztvQkFBSUMsV0FBVTs4QkFDVmpCLGdCQUNJa0QsTUFBTSxDQUFDQyxTQUFBQTsrQkFBVS9DLGdCQUFnQixTQUFTK0MsT0FBT3ZDLEtBQUssS0FBS1I7dUJBQzNEaUMsTUFBTSxHQUFHLElBQ1ZyQyxnQkFDS2tELE1BQU0sQ0FBQ0MsU0FBQUE7K0JBQVUvQyxnQkFBZ0IsU0FBUytDLE9BQU92QyxLQUFLLEtBQUtSO3VCQUMzRDJCLEdBQUcsQ0FBQyxTQUFDb0IsUUFBUWxCO3dCQUNWLHFCQUNJLDhEQUFDdEMsaURBQVNBOzRCQUVOd0QsUUFBUUE7MkJBREhsQjs7Ozs7b0JBSWpCLG1CQUVKLDhEQUFDakI7d0JBQUlHLE9BQU87NEJBQUNLLFNBQVE7NEJBQVE0QixjQUFhOzRCQUFTWixZQUFXOzRCQUFVYSxlQUFjO3dCQUFROzswQ0FDMUYsOERBQUNDO2dDQUFFbkMsT0FBTztvQ0FBQ0MsT0FBTTtvQ0FBUUUsVUFBUztvQ0FBUUQsWUFBVztnQ0FBTTswQ0FBRzs7Ozs7OzBDQUc5RCw4REFBQ2lDO2dDQUFFbkMsT0FBTztvQ0FBQ0MsT0FBTTtvQ0FBV0UsVUFBUztvQ0FBUUQsWUFBVztnQ0FBTTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRyxFQUFDO0dBN0dZekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9UcmVuZGluZy9UcmVuZGluZ1BhZ2UudHN4PzdiNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBUcmVuZGluZ1BsYXllciB9IGZyb20gJy4uLy4uLy4uL0NvbnRleHQvUGxheWVyVHlwZXMnO1xuaW1wb3J0IHsgU3BvcnRTcXVhcmUgfSBmcm9tICcuLi8uLi9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1Nwb3J0RHJvcERvd24nXG5pbXBvcnQgeyBQbGF5ZXJCb3ggfSBmcm9tICcuL1BsYXllckJveCc7XG5cbmV4cG9ydCBjb25zdCBUcmVuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgIGNvbnN0IHNwYWNlQmV0d2VlbiA9ICczMHB4JztcbiAgICBjb25zdCB0cmVuZGluZ3MgPSBbXG4gICAgICAgIHtuYW1lOidBbGwnfSxcbiAgICAgICAge25hbWU6J1dOQkEnfSxcbiAgICAgICAge25hbWU6J0NTJ30sXG4gICAgICAgIHtuYW1lOidWYWxvcmFudCd9LFxuICAgICAgICB7bmFtZTonTE9MJ31cbiAgICBdO1xuICAgIGNvbnN0IFt0cmVuZGluZ1BsYXllcnMsIHNldFRyZW5kaW5nUGxheWVyc10gPSB1c2VTdGF0ZTxUcmVuZGluZ1BsYXllcltdPihbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZTxzdHJpbmc+KHRyZW5kaW5nc1swXS5uYW1lKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RyZW5kaW5nUGxheWVycyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiQ2FpdFwiLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIkNsYXJrXCIsXG4gICAgICAgICAgICAgICAgcGljSWQ6IFwiMTY0MjI4NlwiLFxuICAgICAgICAgICAgICAgIHRlYW06IFwiSU5EXCIsXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IFwiMTY0MjI4NlwiLFxuICAgICAgICAgICAgICAgIHNwb3J0OiBcIldOQkFcIixcbiAgICAgICAgICAgICAgICBvcHBUZWFtOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudDogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiV3l6b1wiLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBpY0lkOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRlYW06IFwiVml0YWxpdHlcIixcbiAgICAgICAgICAgICAgICBwbGF5ZXJJZDogXCJcIixcbiAgICAgICAgICAgICAgICBzcG9ydDogXCJDU1wiLFxuICAgICAgICAgICAgICAgIG9wcFRlYW06IFwiXCIsXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgICAgICAgICB0b3VybmFtZW50OiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cblxuICAgICAgICBzZXRUcmVuZGluZ1BsYXllcnMobmV3VHJlbmRpbmdQbGF5ZXJzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVHJlbmRpbmdQYWdlJz5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e2NvbG9yOicjZmZmJywgZm9udFdlaWdodDonYm9sZCcsIGZvbnRTaXplOiAnMmVtJywgbWFyZ2luOiBgMTAwcHggMHB4ICR7c3BhY2VCZXR3ZWVufSAwcHhgfX0+XG4gICAgICAgICAgICAgICAgVHJlbmRpbmcg8J+UpVxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luQm90dG9tOiBzcGFjZUJldHdlZW4sXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsIHdoaXRlU3BhY2U6ICdub3dyYXAnLCBmbGV4V3JhcDogJ25vd3JhcCcsIFxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcldpZHRoOiAnbm9uZScsICBtc092ZXJmbG93U3R5bGU6ICdub25lJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3Nwb3J0U3FhdXJlU2Nyb2xsJz4gKi99XG4gICAgICAgICAgICAgICAge3RyZW5kaW5ncy5tYXAoKHRyZW5kaW5nLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxTcG9ydFNxdWFyZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0cmVuZGluZy5uYW1lID09PSBzZWxlY3RlZFRhYn0gXG4gICAgICAgICAgICAgICAgICAgICAgICBzcG9ydD17dHJlbmRpbmcubmFtZX0gc2V0U3BvcnQ9e3NldFNlbGVjdGVkVGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSB0b3RhbExlbj17dHJlbmRpbmdzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsIG1hcmdpblRvcDonMTBweCcsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsIGhlaWdodDonMXB4JywgYmFja2dyb3VuZDonIzU0NTQ1NCcsIGJvcmRlclJhZGl1czonMTBweCcsIG1hcmdpbkxlZnQ6JzIwcHgnLCBtYXJnaW5SaWdodDonMjBweCd9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctYm94XCI+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNTBweCcsIG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsaXBMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17JyNmZmYnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RyZW5kaW5nUGxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxheWVyID0+IHNlbGVjdGVkVGFiID09PSBcIkFsbFwiIHx8IHBsYXllci5zcG9ydCA9PT0gc2VsZWN0ZWRUYWIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlbmRpbmdQbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxheWVyID0+IHNlbGVjdGVkVGFiID09PSBcIkFsbFwiIHx8IHBsYXllci5zcG9ydCA9PT0gc2VsZWN0ZWRUYWIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXllckJveCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcj17cGxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlJdGVtczonY2VudGVyJyxhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6JyNmZmYnLCBmb250U2l6ZTonMjVweCcsIGZvbnRXZWlnaHQ6J2JvbGQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBUcmVuZGluZyBQbGF5ZXJzIEN1cnJlbnRseSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOicjYjJiMmIyJywgZm9udFNpemU6JzIwcHgnLCBmb250V2VpZ2h0Oidib2xkJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgQmFjayBMYXRlciBGb3IgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpcExvYWRlciIsIlNwb3J0U3F1YXJlIiwiUGxheWVyQm94IiwiVHJlbmRpbmdQYWdlIiwic3BhY2VCZXR3ZWVuIiwidHJlbmRpbmdzIiwibmFtZSIsInRyZW5kaW5nUGxheWVycyIsInNldFRyZW5kaW5nUGxheWVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsIm5ld1RyZW5kaW5nUGxheWVycyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGljSWQiLCJ0ZWFtIiwicGxheWVySWQiLCJzcG9ydCIsIm9wcFRlYW0iLCJkYXRlIiwidG91cm5hbWVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbiIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJvdmVyZmxvd1giLCJ3aGl0ZVNwYWNlIiwiZmxleFdyYXAiLCJzY3JvbGxiYXJXaWR0aCIsIm1zT3ZlcmZsb3dTdHlsZSIsIm1hcCIsInRyZW5kaW5nIiwiaW5kZXgiLCJzZWxlY3RlZCIsInNldFNwb3J0IiwidG90YWxMZW4iLCJsZW5ndGgiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzaXplIiwiYXJpYS1sYWJlbCIsImRhdGEtdGVzdGlkIiwiZmlsdGVyIiwicGxheWVyIiwianVzdGlmeUl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home/Trending/TrendingPage.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrendingPage: function() { return /* binding */ TrendingPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Nav_SearchBar_DropDown_SportDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav/SearchBar/DropDown/SportDropDown */ \"./src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\");\n/* harmony import */ var _PlayerBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerBox */ \"./src/components/Home/Trending/PlayerBox.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TrendingPage = function() {\n    _s();\n    var spaceBetween = \"30px\";\n    var trendings = [\n        {\n            name: \"All\"\n        },\n        {\n            name: \"WNBA\"\n        },\n        {\n            name: \"CS\"\n        },\n        {\n            name: \"Valorant\"\n        },\n        {\n            name: \"LOL\"\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), trendingPlayers = _useState[0], setTrendingPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(trendings[0].name), 2), selectedTab = _useState2[0], setSelectedTab = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var newTrendingPlayers = [\n            {\n                firstName: \"Cait\",\n                lastName: \"Clark\",\n                picId: \"1642286\",\n                team: \"IND\",\n                playerId: \"1642286\",\n                sport: \"WNBA\",\n                oppTeam: \"\",\n                date: \"\",\n                tournament: \"\"\n            },\n            {\n                firstName: \"Wyzo\",\n                lastName: \"\",\n                picId: \"\",\n                team: \"Vitality\",\n                playerId: \"\",\n                sport: \"CS\",\n                oppTeam: \"\",\n                date: \"\",\n                tournament: \"\"\n            }\n        ];\n        setTrendingPlayers(newTrendingPlayers);\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"TrendingPage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"#fff\",\n                    fontWeight: \"bold\",\n                    fontSize: \"2em\",\n                    marginTop: \"100px\",\n                    marginBottom: \"30px\"\n                },\n                className: \"marginSides\",\n                children: \"Trending \\uD83D\\uDD25\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginBottom: spaceBetween,\n                    overflowX: \"auto\",\n                    whiteSpace: \"nowrap\",\n                    flexWrap: \"nowrap\",\n                    scrollbarWidth: \"none\",\n                    msOverflowStyle: \"none\"\n                },\n                children: trendings.map(function(trending, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_SearchBar_DropDown_SportDropDown__WEBPACK_IMPORTED_MODULE_2__.SportSquare, {\n                        selected: trending.name === selectedTab,\n                        sport: trending.name,\n                        setSport: setSelectedTab,\n                        index: index,\n                        totalLen: trendings.length\n                    }, index, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    marginTop: \"10px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"100%\",\n                        height: \"1px\",\n                        background: \"#545454\",\n                        borderRadius: \"10px\"\n                    },\n                    className: \"marginSides\"\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"trending-box\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginLeft: \"50px\",\n                        marginTop: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__.ClipLoader, {\n                        color: \"#fff\",\n                        loading: true,\n                        size: 150,\n                        \"aria-label\": \"Loading Spinner\",\n                        \"data-testid\": \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"trending-container\",\n                    children: trendingPlayers.filter(function(player) {\n                        return selectedTab === \"All\" || player.sport === selectedTab;\n                    }).length > 0 ? trendingPlayers.filter(function(player) {\n                        return selectedTab === \"All\" || player.sport === selectedTab;\n                    }).map(function(player, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerBox__WEBPACK_IMPORTED_MODULE_3__.PlayerBox, {\n                            player: player\n                        }, index, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 41\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyItems: \"center\",\n                            alignItems: \"center\",\n                            flexDirection: \"column\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#fff\",\n                                    fontSize: \"25px\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"No Trending Players Currently\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#b2b2b2\",\n                                    fontSize: \"20px\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Check Back Later For More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, _this);\n};\n_s(TrendingPage, \"qTacd33w13H0CQ9VLGg361IBCAw=\");\n_c = TrendingPage;\nvar _c;\n$RefreshReg$(_c, \"TrendingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNOO0FBRTRCO0FBQ2hDO0FBRWpDLElBQU1NLGVBQWU7O0lBQ3hCLElBQU1DLGVBQWU7SUFDckIsSUFBTUMsWUFBWTtRQUNkO1lBQUNDLE1BQUs7UUFBSztRQUNYO1lBQUNBLE1BQUs7UUFBTTtRQUNaO1lBQUNBLE1BQUs7UUFBSTtRQUNWO1lBQUNBLE1BQUs7UUFBVTtRQUNoQjtZQUFDQSxNQUFLO1FBQUs7S0FDZDtJQUNELElBQThDUCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQW1CLEVBQUUsT0FBcEVRLGtCQUF1Q1IsY0FBdEJTLHFCQUFzQlQ7SUFDOUMsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBVSxXQUF6Q1UsVUFBdUJWLGVBQWRXLGFBQWNYO0lBQzlCLElBQXNDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVNNLFNBQVMsQ0FBQyxFQUFFLENBQUNDLElBQUksT0FBakVLLGNBQStCWixlQUFsQmEsaUJBQWtCYjtJQUV0Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFNZSxxQkFBcUI7WUFDdkI7Z0JBQ0lDLFdBQVc7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLE1BQU07Z0JBQ05DLFlBQVk7WUFDaEI7WUFDQTtnQkFDSVIsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsTUFBTTtnQkFDTkMsWUFBWTtZQUNoQjtTQUNIO1FBRURkLG1CQUFtQks7UUFDbkJILFdBQVc7SUFDZixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHQyxPQUFPO29CQUFDQyxPQUFNO29CQUFRQyxZQUFXO29CQUFRQyxVQUFVO29CQUFPQyxXQUFVO29CQUFTQyxjQUFhO2dCQUFNO2dCQUNoR1AsV0FBVTswQkFDYjs7Ozs7OzBCQUlELDhEQUFDRDtnQkFBSUcsT0FBTztvQkFDUk0sU0FBUztvQkFBUUQsY0FBYzNCO29CQUMvQjZCLFdBQVc7b0JBQVFDLFlBQVk7b0JBQVVDLFVBQVU7b0JBQ25EQyxnQkFBZ0I7b0JBQVNDLGlCQUFpQjtnQkFDOUM7MEJBRUtoQyxVQUFVaUMsR0FBRyxDQUFDLFNBQUNDLFVBQVVDO3lDQUN0Qiw4REFBQ3ZDLDhFQUFXQTt3QkFDUndDLFVBQVVGLFNBQVNqQyxJQUFJLEtBQUtLO3dCQUM1QlEsT0FBT29CLFNBQVNqQyxJQUFJO3dCQUFFb0MsVUFBVTlCO3dCQUNoQzRCLE9BQU9BO3dCQUFtQkcsVUFBVXRDLFVBQVV1QyxNQUFNO3VCQUFqQ0o7Ozs7Ozs7Ozs7OzBCQUsvQiw4REFBQ2pCO2dCQUFJRyxPQUFPO29CQUFDbUIsT0FBTTtvQkFBUWYsV0FBVTtvQkFBUUUsU0FBUTtvQkFBUWMsWUFBVztvQkFBVUMsZ0JBQWU7Z0JBQVE7MEJBQ3JHLDRFQUFDeEI7b0JBQUlHLE9BQU87d0JBQUNtQixPQUFNO3dCQUFRRyxRQUFPO3dCQUFPQyxZQUFXO3dCQUFXQyxjQUFhO29CQUFPO29CQUFHMUIsV0FBVTs7Ozs7Ozs7Ozs7MEJBR3BHLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVmYsd0JBQ0csOERBQUNjO29CQUFJRyxPQUFPO3dCQUFFeUIsWUFBWTt3QkFBUXJCLFdBQVc7b0JBQU87OEJBQ2hELDRFQUFDOUIsc0RBQVVBO3dCQUNQMkIsT0FBTzt3QkFDUGxCLFNBQVM7d0JBQ1QyQyxNQUFNO3dCQUNOQyxjQUFXO3dCQUNYQyxlQUFZOzs7Ozs7Ozs7OzBDQUlwQiw4REFBQy9CO29CQUFJQyxXQUFVOzhCQUNWakIsZ0JBQ0lnRCxNQUFNLENBQUNDLFNBQUFBOytCQUFVN0MsZ0JBQWdCLFNBQVM2QyxPQUFPckMsS0FBSyxLQUFLUjt1QkFDM0RpQyxNQUFNLEdBQUcsSUFDVnJDLGdCQUNLZ0QsTUFBTSxDQUFDQyxTQUFBQTsrQkFBVTdDLGdCQUFnQixTQUFTNkMsT0FBT3JDLEtBQUssS0FBS1I7dUJBQzNEMkIsR0FBRyxDQUFDLFNBQUNrQixRQUFRaEI7d0JBQ1YscUJBQ0ksOERBQUN0QyxpREFBU0E7NEJBRU5zRCxRQUFRQTsyQkFESGhCOzs7OztvQkFJakIsbUJBRUosOERBQUNqQjt3QkFBSUcsT0FBTzs0QkFBQ00sU0FBUTs0QkFBUXlCLGNBQWE7NEJBQVNYLFlBQVc7NEJBQVVZLGVBQWM7d0JBQVE7OzBDQUMxRiw4REFBQ0M7Z0NBQUVqQyxPQUFPO29DQUFDQyxPQUFNO29DQUFRRSxVQUFTO29DQUFRRCxZQUFXO2dDQUFNOzBDQUFHOzs7Ozs7MENBRzlELDhEQUFDK0I7Z0NBQUVqQyxPQUFPO29DQUFDQyxPQUFNO29DQUFXRSxVQUFTO29DQUFRRCxZQUFXO2dDQUFNOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpHLEVBQUM7R0EvR1l6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZS50c3g/N2I2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IFRyZW5kaW5nUGxheWVyIH0gZnJvbSAnLi4vLi4vLi4vQ29udGV4dC9QbGF5ZXJUeXBlcyc7XG5pbXBvcnQgeyBTcG9ydFNxdWFyZSB9IGZyb20gJy4uLy4uL05hdi9TZWFyY2hCYXIvRHJvcERvd24vU3BvcnREcm9wRG93bidcbmltcG9ydCB7IFBsYXllckJveCB9IGZyb20gJy4vUGxheWVyQm94JztcblxuZXhwb3J0IGNvbnN0IFRyZW5kaW5nUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBzcGFjZUJldHdlZW4gPSAnMzBweCc7XG4gICAgY29uc3QgdHJlbmRpbmdzID0gW1xuICAgICAgICB7bmFtZTonQWxsJ30sXG4gICAgICAgIHtuYW1lOidXTkJBJ30sXG4gICAgICAgIHtuYW1lOidDUyd9LFxuICAgICAgICB7bmFtZTonVmFsb3JhbnQnfSxcbiAgICAgICAge25hbWU6J0xPTCd9XG4gICAgXTtcbiAgICBjb25zdCBbdHJlbmRpbmdQbGF5ZXJzLCBzZXRUcmVuZGluZ1BsYXllcnNdID0gdXNlU3RhdGU8VHJlbmRpbmdQbGF5ZXJbXT4oW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGU8c3RyaW5nPih0cmVuZGluZ3NbMF0ubmFtZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUcmVuZGluZ1BsYXllcnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkNhaXRcIixcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJDbGFya1wiLFxuICAgICAgICAgICAgICAgIHBpY0lkOiBcIjE2NDIyODZcIixcbiAgICAgICAgICAgICAgICB0ZWFtOiBcIklORFwiLFxuICAgICAgICAgICAgICAgIHBsYXllcklkOiBcIjE2NDIyODZcIixcbiAgICAgICAgICAgICAgICBzcG9ydDogXCJXTkJBXCIsXG4gICAgICAgICAgICAgICAgb3BwVGVhbTogXCJcIixcbiAgICAgICAgICAgICAgICBkYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIld5em9cIixcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBwaWNJZDogXCJcIixcbiAgICAgICAgICAgICAgICB0ZWFtOiBcIlZpdGFsaXR5XCIsXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BvcnQ6IFwiQ1NcIixcbiAgICAgICAgICAgICAgICBvcHBUZWFtOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgc2V0VHJlbmRpbmdQbGF5ZXJzKG5ld1RyZW5kaW5nUGxheWVycyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RyZW5kaW5nUGFnZSc+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjonI2ZmZicsIGZvbnRXZWlnaHQ6J2JvbGQnLCBmb250U2l6ZTogJzJlbScsIG1hcmdpblRvcDpcIjEwMHB4XCIsIG1hcmdpbkJvdHRvbTonMzBweCd9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmdpblNpZGVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUcmVuZGluZyDwn5SlXG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Cb3R0b206IHNwYWNlQmV0d2VlbixcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdhdXRvJywgd2hpdGVTcGFjZTogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJywgXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6ICdub25lJywgIG1zT3ZlcmZsb3dTdHlsZTogJ25vbmUnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc3BvcnRTcWF1cmVTY3JvbGwnPiAqL31cbiAgICAgICAgICAgICAgICB7dHJlbmRpbmdzLm1hcCgodHJlbmRpbmcsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPFNwb3J0U3F1YXJlIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RyZW5kaW5nLm5hbWUgPT09IHNlbGVjdGVkVGFifSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwb3J0PXt0cmVuZGluZy5uYW1lfSBzZXRTcG9ydD17c2V0U2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IGtleT17aW5kZXh9IHRvdGFsTGVuPXt0cmVuZGluZ3MubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJywgbWFyZ2luVG9wOicxMHB4JywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxcHgnLCBiYWNrZ3JvdW5kOicjNTQ1NDU0JywgYm9yZGVyUmFkaXVzOicxMHB4JyB9fSBjbGFzc05hbWU9XCJtYXJnaW5TaWRlc1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLWJveFwiPlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzUwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbGlwTG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZGluZyBTcGlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImxvYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVuZGluZ1BsYXllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBsYXllciA9PiBzZWxlY3RlZFRhYiA9PT0gXCJBbGxcIiB8fCBwbGF5ZXIuc3BvcnQgPT09IHNlbGVjdGVkVGFiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZW5kaW5nUGxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBsYXllciA9PiBzZWxlY3RlZFRhYiA9PT0gXCJBbGxcIiB8fCBwbGF5ZXIuc3BvcnQgPT09IHNlbGVjdGVkVGFiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJCb3ggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXI9e3BsYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5SXRlbXM6J2NlbnRlcicsYWxpZ25JdGVtczonY2VudGVyJywgZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOicjZmZmJywgZm9udFNpemU6JzI1cHgnLCBmb250V2VpZ2h0Oidib2xkJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gVHJlbmRpbmcgUGxheWVycyBDdXJyZW50bHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjonI2IyYjJiMicsIGZvbnRTaXplOicyMHB4JywgZm9udFdlaWdodDonYm9sZCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIEJhY2sgTGF0ZXIgRm9yIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsaXBMb2FkZXIiLCJTcG9ydFNxdWFyZSIsIlBsYXllckJveCIsIlRyZW5kaW5nUGFnZSIsInNwYWNlQmV0d2VlbiIsInRyZW5kaW5ncyIsIm5hbWUiLCJ0cmVuZGluZ1BsYXllcnMiLCJzZXRUcmVuZGluZ1BsYXllcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJuZXdUcmVuZGluZ1BsYXllcnMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBpY0lkIiwidGVhbSIsInBsYXllcklkIiwic3BvcnQiLCJvcHBUZWFtIiwiZGF0ZSIsInRvdXJuYW1lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5Iiwib3ZlcmZsb3dYIiwid2hpdGVTcGFjZSIsImZsZXhXcmFwIiwic2Nyb2xsYmFyV2lkdGgiLCJtc092ZXJmbG93U3R5bGUiLCJtYXAiLCJ0cmVuZGluZyIsImluZGV4Iiwic2VsZWN0ZWQiLCJzZXRTcG9ydCIsInRvdGFsTGVuIiwibGVuZ3RoIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luTGVmdCIsInNpemUiLCJhcmlhLWxhYmVsIiwiZGF0YS10ZXN0aWQiLCJmaWx0ZXIiLCJwbGF5ZXIiLCJqdXN0aWZ5SXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/Trending/TrendingPage.tsx\n"));

/***/ })

});
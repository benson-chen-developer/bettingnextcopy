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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrendingPage: function() { return /* binding */ TrendingPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Nav_SearchBar_DropDown_SportDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav/SearchBar/DropDown/SportDropDown */ \"./src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\");\n/* harmony import */ var _PlayerBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerBox */ \"./src/components/Home/Trending/PlayerBox.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TrendingPage = function() {\n    _s();\n    var trendings = [\n        {\n            name: \"All\"\n        },\n        {\n            name: \"WNBA\"\n        },\n        {\n            name: \"CS\"\n        },\n        {\n            name: \"Valorant\"\n        },\n        {\n            name: \"LOL\"\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), trendingPlayers = _useState[0], setTrendingPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(trendings[0].name), 2), selectedTab = _useState2[0], setSelectedTab = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var newTrendingPlayers = [\n            {\n                firstName: \"Cait\",\n                lastName: \"Clark\",\n                picId: \"1642286\",\n                team: \"IND\",\n                playerId: \"1642286\",\n                sport: \"WNBA\",\n                oppTeam: \"\",\n                date: \"\",\n                tournament: \"\"\n            },\n            {\n                firstName: \"Wyzo\",\n                lastName: \"\",\n                picId: \"\",\n                team: \"Vitality\",\n                playerId: \"\",\n                sport: \"CS\",\n                oppTeam: \"\",\n                date: \"\",\n                tournament: \"\"\n            }\n        ];\n        setTrendingPlayers(newTrendingPlayers);\n        setLoading(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"TrendingPage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"#fff\",\n                    fontWeight: \"bold\",\n                    fontSize: \"2em\",\n                    marginTop: \"100px\",\n                    marginBottom: \"15px\"\n                },\n                className: \"marginSides\",\n                children: \"Trending \\uD83D\\uDD25\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginBottom: \"25px\",\n                    overflowX: \"auto\",\n                    whiteSpace: \"nowrap\",\n                    flexWrap: \"nowrap\",\n                    scrollbarWidth: \"none\",\n                    msOverflowStyle: \"none\"\n                },\n                className: \"marginSides\",\n                children: trendings.map(function(trending, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_SearchBar_DropDown_SportDropDown__WEBPACK_IMPORTED_MODULE_2__.SportSquare, {\n                        selected: trending.name === selectedTab,\n                        sport: trending.name,\n                        setSport: setSelectedTab,\n                        index: index,\n                        totalLen: trendings.length\n                    }, index, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"100%\",\n                        height: \"3px\",\n                        background: \"#969696\",\n                        borderRadius: \"10px\"\n                    },\n                    className: \"marginSides\"\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"trending-box\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginLeft: \"50px\",\n                        marginTop: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_5__.ClipLoader, {\n                        color: \"#fff\",\n                        loading: true,\n                        size: 150,\n                        \"aria-label\": \"Loading Spinner\",\n                        \"data-testid\": \"loader\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"trending-container\",\n                    children: trendingPlayers.filter(function(player) {\n                        return selectedTab === \"All\" || player.sport === selectedTab;\n                    }).length > 0 ? trendingPlayers.filter(function(player) {\n                        return selectedTab === \"All\" || player.sport === selectedTab;\n                    }).map(function(player, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerBox__WEBPACK_IMPORTED_MODULE_3__.PlayerBox, {\n                            player: player\n                        }, index, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 41\n                        }, _this);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyItems: \"center\",\n                            alignItems: \"center\",\n                            flexDirection: \"column\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#fff\",\n                                    fontSize: \"25px\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"No Trending Players Currently\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 33\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"#b2b2b2\",\n                                    fontSize: \"20px\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: \"Check Back Later For More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 33\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Home/Trending/TrendingPage.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, _this);\n};\n_s(TrendingPage, \"qTacd33w13H0CQ9VLGg361IBCAw=\");\n_c = TrendingPage;\nvar _c;\n$RefreshReg$(_c, \"TrendingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1RyZW5kaW5nUGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNOO0FBRTRCO0FBQ2hDO0FBRWpDLElBQU1NLGVBQWU7O0lBQ3hCLElBQU1DLFlBQVk7UUFDZDtZQUFDQyxNQUFLO1FBQUs7UUFDWDtZQUFDQSxNQUFLO1FBQU07UUFDWjtZQUFDQSxNQUFLO1FBQUk7UUFDVjtZQUFDQSxNQUFLO1FBQVU7UUFDaEI7WUFBQ0EsTUFBSztRQUFLO0tBQ2Q7SUFDRCxJQUE4Q04sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFtQixFQUFFLE9BQXBFTyxrQkFBdUNQLGNBQXRCUSxxQkFBc0JSO0lBQzlDLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsV0FBekNTLFVBQXVCVCxlQUFkVSxhQUFjVjtJQUM5QixJQUFzQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTSyxTQUFTLENBQUMsRUFBRSxDQUFDQyxJQUFJLE9BQWpFSyxjQUErQlgsZUFBbEJZLGlCQUFrQlo7SUFFdENELGdEQUFTQSxDQUFDO1FBQ04sSUFBTWMscUJBQXFCO1lBQ3ZCO2dCQUNJQyxXQUFXO2dCQUNYQyxVQUFVO2dCQUNWQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxVQUFVO2dCQUNWQyxPQUFPO2dCQUNQQyxTQUFTO2dCQUNUQyxNQUFNO2dCQUNOQyxZQUFZO1lBQ2hCO1lBQ0E7Z0JBQ0lSLFdBQVc7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFNBQVM7Z0JBQ1RDLE1BQU07Z0JBQ05DLFlBQVk7WUFDaEI7U0FDSDtRQUVEZCxtQkFBbUJLO1FBQ25CSCxXQUFXO0lBQ2YsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0MsT0FBTztvQkFBQ0MsT0FBTTtvQkFBUUMsWUFBVztvQkFBUUMsVUFBVTtvQkFBT0MsV0FBVTtvQkFBU0MsY0FBYTtnQkFBTTtnQkFDaEdQLFdBQVU7MEJBQ2I7Ozs7OzswQkFJRCw4REFBQ0Q7Z0JBQUlHLE9BQU87b0JBQ1JNLFNBQVM7b0JBQVFELGNBQWM7b0JBQy9CRSxXQUFXO29CQUFRQyxZQUFZO29CQUFVQyxVQUFVO29CQUNuREMsZ0JBQWdCO29CQUFTQyxpQkFBaUI7Z0JBQzlDO2dCQUFHYixXQUFVOzBCQUNSbkIsVUFBVWlDLEdBQUcsQ0FBQyxTQUFDQyxVQUFVQzt5Q0FDdEIsOERBQUN0Qyw4RUFBV0E7d0JBQ1J1QyxVQUFVRixTQUFTakMsSUFBSSxLQUFLSzt3QkFDNUJRLE9BQU9vQixTQUFTakMsSUFBSTt3QkFBRW9DLFVBQVU5Qjt3QkFDaEM0QixPQUFPQTt3QkFBbUJHLFVBQVV0QyxVQUFVdUMsTUFBTTt1QkFBakNKOzs7Ozs7Ozs7OzswQkFLL0IsOERBQUNqQjtnQkFBSUcsT0FBTztvQkFBQ21CLE9BQU07b0JBQVFiLFNBQVE7b0JBQVFjLFlBQVc7b0JBQVVDLGdCQUFlO2dCQUFROzBCQUNuRiw0RUFBQ3hCO29CQUFJRyxPQUFPO3dCQUFDbUIsT0FBTTt3QkFBUUcsUUFBTzt3QkFBT0MsWUFBVzt3QkFBV0MsY0FBYTtvQkFBTztvQkFBRzFCLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdwRyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZmLHdCQUNHLDhEQUFDYztvQkFBSUcsT0FBTzt3QkFBRXlCLFlBQVk7d0JBQVFyQixXQUFXO29CQUFPOzhCQUNoRCw0RUFBQzdCLHNEQUFVQTt3QkFDUDBCLE9BQU87d0JBQ1BsQixTQUFTO3dCQUNUMkMsTUFBTTt3QkFDTkMsY0FBVzt3QkFDWEMsZUFBWTs7Ozs7Ozs7OzswQ0FJcEIsOERBQUMvQjtvQkFBSUMsV0FBVTs4QkFDVmpCLGdCQUNJZ0QsTUFBTSxDQUFDQyxTQUFBQTsrQkFBVTdDLGdCQUFnQixTQUFTNkMsT0FBT3JDLEtBQUssS0FBS1I7dUJBQzNEaUMsTUFBTSxHQUFHLElBQ1ZyQyxnQkFDS2dELE1BQU0sQ0FBQ0MsU0FBQUE7K0JBQVU3QyxnQkFBZ0IsU0FBUzZDLE9BQU9yQyxLQUFLLEtBQUtSO3VCQUMzRDJCLEdBQUcsQ0FBQyxTQUFDa0IsUUFBUWhCO3dCQUNWLHFCQUNJLDhEQUFDckMsaURBQVNBOzRCQUVOcUQsUUFBUUE7MkJBREhoQjs7Ozs7b0JBSWpCLG1CQUVKLDhEQUFDakI7d0JBQUlHLE9BQU87NEJBQUNNLFNBQVE7NEJBQVF5QixjQUFhOzRCQUFTWCxZQUFXOzRCQUFVWSxlQUFjO3dCQUFROzswQ0FDMUYsOERBQUNDO2dDQUFFakMsT0FBTztvQ0FBQ0MsT0FBTTtvQ0FBUUUsVUFBUztvQ0FBUUQsWUFBVztnQ0FBTTswQ0FBRzs7Ozs7OzBDQUc5RCw4REFBQytCO2dDQUFFakMsT0FBTztvQ0FBQ0MsT0FBTTtvQ0FBV0UsVUFBUztvQ0FBUUQsWUFBVztnQ0FBTTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRyxFQUFDO0dBN0dZeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9UcmVuZGluZy9UcmVuZGluZ1BhZ2UudHN4PzdiNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBUcmVuZGluZ1BsYXllciB9IGZyb20gJy4uLy4uLy4uL0NvbnRleHQvUGxheWVyVHlwZXMnO1xuaW1wb3J0IHsgU3BvcnRTcXVhcmUgfSBmcm9tICcuLi8uLi9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1Nwb3J0RHJvcERvd24nXG5pbXBvcnQgeyBQbGF5ZXJCb3ggfSBmcm9tICcuL1BsYXllckJveCc7XG5cbmV4cG9ydCBjb25zdCBUcmVuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdHJlbmRpbmdzID0gW1xuICAgICAgICB7bmFtZTonQWxsJ30sXG4gICAgICAgIHtuYW1lOidXTkJBJ30sXG4gICAgICAgIHtuYW1lOidDUyd9LFxuICAgICAgICB7bmFtZTonVmFsb3JhbnQnfSxcbiAgICAgICAge25hbWU6J0xPTCd9XG4gICAgXTtcbiAgICBjb25zdCBbdHJlbmRpbmdQbGF5ZXJzLCBzZXRUcmVuZGluZ1BsYXllcnNdID0gdXNlU3RhdGU8VHJlbmRpbmdQbGF5ZXJbXT4oW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGU8c3RyaW5nPih0cmVuZGluZ3NbMF0ubmFtZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUcmVuZGluZ1BsYXllcnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkNhaXRcIixcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJDbGFya1wiLFxuICAgICAgICAgICAgICAgIHBpY0lkOiBcIjE2NDIyODZcIixcbiAgICAgICAgICAgICAgICB0ZWFtOiBcIklORFwiLFxuICAgICAgICAgICAgICAgIHBsYXllcklkOiBcIjE2NDIyODZcIixcbiAgICAgICAgICAgICAgICBzcG9ydDogXCJXTkJBXCIsXG4gICAgICAgICAgICAgICAgb3BwVGVhbTogXCJcIixcbiAgICAgICAgICAgICAgICBkYXRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRvdXJuYW1lbnQ6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIld5em9cIixcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBwaWNJZDogXCJcIixcbiAgICAgICAgICAgICAgICB0ZWFtOiBcIlZpdGFsaXR5XCIsXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3BvcnQ6IFwiQ1NcIixcbiAgICAgICAgICAgICAgICBvcHBUZWFtOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRhdGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdG91cm5hbWVudDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgc2V0VHJlbmRpbmdQbGF5ZXJzKG5ld1RyZW5kaW5nUGxheWVycyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RyZW5kaW5nUGFnZSc+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjonI2ZmZicsIGZvbnRXZWlnaHQ6J2JvbGQnLCBmb250U2l6ZTogJzJlbScsIG1hcmdpblRvcDpcIjEwMHB4XCIsIG1hcmdpbkJvdHRvbTonMTVweCd9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcmdpblNpZGVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUcmVuZGluZyDwn5SlXG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Cb3R0b206ICcyNXB4JyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdhdXRvJywgd2hpdGVTcGFjZTogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJywgXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyV2lkdGg6ICdub25lJywgIG1zT3ZlcmZsb3dTdHlsZTogJ25vbmUnXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJtYXJnaW5TaWRlc1wiPlxuICAgICAgICAgICAgICAgIHt0cmVuZGluZ3MubWFwKCh0cmVuZGluZywgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgICAgICA8U3BvcnRTcXVhcmUgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dHJlbmRpbmcubmFtZSA9PT0gc2VsZWN0ZWRUYWJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BvcnQ9e3RyZW5kaW5nLm5hbWV9IHNldFNwb3J0PXtzZXRTZWxlY3RlZFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0ga2V5PXtpbmRleH0gdG90YWxMZW49e3RyZW5kaW5ncy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzNweCcsIGJhY2tncm91bmQ6JyM5Njk2OTYnLCBib3JkZXJSYWRpdXM6JzEwcHgnIH19IGNsYXNzTmFtZT1cIm1hcmdpblNpZGVzXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctYm94XCI+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNTBweCcsIG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsaXBMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17JyNmZmYnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RyZW5kaW5nUGxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxheWVyID0+IHNlbGVjdGVkVGFiID09PSBcIkFsbFwiIHx8IHBsYXllci5zcG9ydCA9PT0gc2VsZWN0ZWRUYWIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlbmRpbmdQbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxheWVyID0+IHNlbGVjdGVkVGFiID09PSBcIkFsbFwiIHx8IHBsYXllci5zcG9ydCA9PT0gc2VsZWN0ZWRUYWIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXllckJveCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcj17cGxheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlJdGVtczonY2VudGVyJyxhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6JyNmZmYnLCBmb250U2l6ZTonMjVweCcsIGZvbnRXZWlnaHQ6J2JvbGQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBUcmVuZGluZyBQbGF5ZXJzIEN1cnJlbnRseSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOicjYjJiMmIyJywgZm9udFNpemU6JzIwcHgnLCBmb250V2VpZ2h0Oidib2xkJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgQmFjayBMYXRlciBGb3IgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpcExvYWRlciIsIlNwb3J0U3F1YXJlIiwiUGxheWVyQm94IiwiVHJlbmRpbmdQYWdlIiwidHJlbmRpbmdzIiwibmFtZSIsInRyZW5kaW5nUGxheWVycyIsInNldFRyZW5kaW5nUGxheWVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsIm5ld1RyZW5kaW5nUGxheWVycyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGljSWQiLCJ0ZWFtIiwicGxheWVySWQiLCJzcG9ydCIsIm9wcFRlYW0iLCJkYXRlIiwidG91cm5hbWVudCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJvdmVyZmxvd1giLCJ3aGl0ZVNwYWNlIiwiZmxleFdyYXAiLCJzY3JvbGxiYXJXaWR0aCIsIm1zT3ZlcmZsb3dTdHlsZSIsIm1hcCIsInRyZW5kaW5nIiwiaW5kZXgiLCJzZWxlY3RlZCIsInNldFNwb3J0IiwidG90YWxMZW4iLCJsZW5ndGgiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5MZWZ0Iiwic2l6ZSIsImFyaWEtbGFiZWwiLCJkYXRhLXRlc3RpZCIsImZpbHRlciIsInBsYXllciIsImp1c3RpZnlJdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home/Trending/TrendingPage.tsx\n"));

/***/ })

});
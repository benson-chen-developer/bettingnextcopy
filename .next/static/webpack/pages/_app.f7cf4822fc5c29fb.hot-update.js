"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Nav/SearchBar/SearchBar.tsx":
/*!****************************************************!*\
  !*** ./src/components/Nav/SearchBar/SearchBar.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchBar: function() { return /* binding */ SearchBar; },\n/* harmony export */   searchPlayer: function() { return /* binding */ searchPlayer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField */ \"./src/components/Nav/SearchBar/InputField.tsx\");\n/* harmony import */ var _DropDown_DropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDown/DropDown */ \"./src/components/Nav/SearchBar/DropDown/DropDown.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DropDown_SportBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropDown/SportBtn */ \"./src/components/Nav/SearchBar/DropDown/SportBtn.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/* Navigates to new page while appending the new player name to the end */ var searchPlayer = function(input, league, correctName) {\n    /* Esports Players Only have firstname so remove the _ (name will be sent as faker_) */ if (input.charAt(input.length - 1) === \"_\") {\n        input = input.slice(0, -1);\n    }\n    /* Correct Name means the name is already parsed so we can just navigate\n     Name must be in jonquel_jones format\n  */ if (correctName) {\n        window.open(\"/player/\".concat(league, \"/\").concat(input.trim()), \"_blank\", \"noopener,noreferrer\");\n    } else {\n        var parsedName = input.trim(); // Remove whitespace\n        parsedName = parsedName.toLowerCase(); // Convert to lowercase\n        var nameParts = parsedName.split(\" \"); // Split the name\n        if (nameParts.length >= 2) {\n            var firstName = nameParts[0];\n            var lastName = nameParts[1];\n            parsedName = \"\".concat(firstName.charAt(0), \"_\").concat(lastName);\n        }\n        if (input.trim()) {\n            window.open(\"/player/\".concat(league, \"/\").concat(parsedName.trim()), \"_blank\", \"noopener,noreferrer\");\n        }\n    }\n};\nvar SearchBar = function(param) {\n    var widthSpacing = param.widthSpacing, marginLeftSpacing = param.marginLeftSpacing;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _router_query = router.query, paramPlayer = _router_query.paramPlayer, paramLeague = _router_query.paramLeague;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), playerName = _useState[0], setPlayerName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WNBA\"), 2), sport = _useState1[0], setSport = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), dropDown = _useState2[0], setDropDown = _useState2[1];\n    var handleInputChange = function(e) {\n        setPlayerName(e.target.value);\n    };\n    var handleSubmit = function(event) {\n        event.preventDefault();\n        searchPlayer(playerName, sport);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (paramLeague) {\n            setSport(paramLeague);\n        }\n    }, [\n        paramLeague,\n        paramPlayer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(dropDown);\n        console.log(dropDown === \"sports\");\n    }, [\n        dropDown\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            width: widthSpacing ? widthSpacing : \"30%\",\n            marginLeft: marginLeftSpacing ? marginLeftSpacing : 30,\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                style: {\n                    display: \"flex\",\n                    background: \"#fff\",\n                    width: \"100%\",\n                    justifyContent: \"space-between\",\n                    borderRadius: 10,\n                    border: \"2px solid #000\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"70%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                style: {\n                                    border: \"none\",\n                                    background: \"none\",\n                                    cursor: \"pointer\",\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    justifyContent: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    viewBox: \"0 0 24 24\",\n                                    fill: \"#000\",\n                                    style: {\n                                        pointerEvents: \"none\",\n                                        color: \"#888484\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_2__.InputField, {\n                                value: playerName,\n                                handleInputChange: handleInputChange,\n                                setDropDown: setDropDown\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown_SportBtn__WEBPACK_IMPORTED_MODULE_5__.SportBtn, {\n                        sport: sport,\n                        dropDown: dropDown,\n                        setDropDown: setDropDown\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                input: playerName,\n                sport: sport,\n                setSport: setSport,\n                dropDown: dropDown,\n                setDropDown: setDropDown\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/SearchBar.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(SearchBar, \"Ekgoz2qhcceR+cehR32YHyH944E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SearchBar;\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyL1NlYXJjaEJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUM5QztBQUNLO0FBQ1A7QUFDTztBQU8vQyx3RUFBd0UsR0FDakUsSUFBTU8sZUFBZSxTQUFDQyxPQUFlQyxRQUFnQkM7SUFDMUQscUZBQXFGLEdBQ3JGLElBQUlGLE1BQU1HLE1BQU0sQ0FBQ0gsTUFBTUksTUFBTSxHQUFHLE9BQU8sS0FBSztRQUMxQ0osUUFBUUEsTUFBTUssS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxQjtJQUVBOztFQUVBLEdBQ0EsSUFBR0gsYUFBWTtRQUNiSSxPQUFPQyxJQUFJLENBQUMsV0FBcUJQLE9BQVZDLFFBQU8sS0FBZ0IsT0FBYkQsTUFBTVEsSUFBSSxLQUFNLFVBQVU7SUFDN0QsT0FBTztRQUNMLElBQUlDLGFBQWFULE1BQU1RLElBQUksSUFBSSxvQkFBb0I7UUFDbkRDLGFBQWFBLFdBQVdDLFdBQVcsSUFBSSx1QkFBdUI7UUFDOUQsSUFBSUMsWUFBWUYsV0FBV0csS0FBSyxDQUFDLE1BQU0saUJBQWlCO1FBRXhELElBQUlELFVBQVVQLE1BQU0sSUFBSSxHQUFHO1lBQ3pCLElBQUlTLFlBQVlGLFNBQVMsQ0FBQyxFQUFFO1lBQzVCLElBQUlHLFdBQVdILFNBQVMsQ0FBQyxFQUFFO1lBQzNCRixhQUFhLEdBQTBCSyxPQUF2QkQsVUFBVVYsTUFBTSxDQUFDLElBQUcsS0FBWSxPQUFUVztRQUN6QztRQUVBLElBQUlkLE1BQU1RLElBQUksSUFBSTtZQUNoQkYsT0FBT0MsSUFBSSxDQUFDLFdBQXFCRSxPQUFWUixRQUFPLEtBQXFCLE9BQWxCUSxXQUFXRCxJQUFJLEtBQU0sVUFBVTtRQUNsRTtJQUNGO0FBQ0YsRUFBRTtBQUVLLElBQU1PLFlBQTZCO1FBQUVDLHFCQUFBQSxjQUFjQywwQkFBQUE7O0lBQ3hELElBQU1DLFNBQVNyQixzREFBU0E7SUFDeEIsSUFBcUNxQixnQkFBQUEsT0FBT0MsS0FBSyxFQUF6Q0MsY0FBNkJGLGNBQTdCRSxhQUFhQyxjQUFnQkgsY0FBaEJHO0lBQ3JCLElBQW9DNUIsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFNBQTlDNkIsYUFBNkI3QixjQUFqQjhCLGdCQUFpQjlCO0lBQ3BDLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsYUFBcEMrQixRQUFtQi9CLGVBQVpnQyxXQUFZaEM7SUFDMUIsSUFBZ0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUExQ2lDLFdBQXlCakMsZUFBZmtDLGNBQWVsQztJQUVoQyxJQUFNbUMsb0JBQW9CLFNBQUNDO1FBQ3pCTixjQUFjTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFDQSxJQUFNQyxlQUFlLFNBQUNDO1FBQ3BCQSxNQUFNQyxjQUFjO1FBQ3BCbkMsYUFBYXVCLFlBQVlFO0lBQzNCO0lBRUE5QixnREFBU0EsQ0FBQztRQUNSLElBQUkyQixhQUFhO1lBQ2ZJLFNBQVNKO1FBQ1g7SUFDRixHQUFHO1FBQUNBO1FBQWFEO0tBQVk7SUFFN0IxQixnREFBU0EsQ0FBQztRQUNSeUMsUUFBUUMsR0FBRyxDQUFDVjtRQUNaUyxRQUFRQyxHQUFHLENBQUNWLGFBQWE7SUFDM0IsR0FBRztRQUFDQTtLQUFTO0lBRWIscUJBQ0UsOERBQUNXO1FBQUlDLE9BQU87WUFDVkMsU0FBUTtZQUFRQyxlQUFjO1lBQzlCQyxPQUFPekIsZUFBZUEsZUFBZTtZQUNyQzBCLFlBQVl6QixvQkFBb0JBLG9CQUFvQjtZQUNwRDBCLFVBQVU7UUFDWjs7MEJBRUUsOERBQUNDO2dCQUFLQyxVQUFVYjtnQkFBY00sT0FBTztvQkFDbkNDLFNBQVM7b0JBQVFPLFlBQVc7b0JBQzVCTCxPQUFPO29CQUFRTSxnQkFBZTtvQkFDOUJDLGNBQWM7b0JBQUdDLFFBQVE7b0JBQWtCQyxZQUFXO2dCQUN4RDs7a0NBQ0UsOERBQUNiO3dCQUFJQyxPQUFPOzRCQUFDQyxTQUFROzRCQUFRRSxPQUFNO3dCQUFLOzswQ0FHdEMsOERBQUNVO2dDQUFPQyxNQUFLO2dDQUFTZCxPQUFPO29DQUN6QlcsUUFBUTtvQ0FBUUgsWUFBWTtvQ0FBUU8sUUFBUTtvQ0FDNUNkLFNBQVM7b0NBQVFXLFlBQVk7b0NBQVVILGdCQUFnQjtnQ0FDM0Q7MENBQ0UsNEVBQUNPO29DQUNDQyxPQUFNO29DQUE2QmQsT0FBTTtvQ0FDekNlLFFBQU87b0NBQU9DLFNBQVE7b0NBQVlDLE1BQUs7b0NBQ3ZDcEIsT0FBTzt3Q0FBQ3FCLGVBQWU7d0NBQVFDLE9BQU87b0NBQVM7OENBRS9DLDRFQUFDQzt3Q0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJWiw4REFBQ25FLG1EQUFVQTtnQ0FDVG9DLE9BQU9UO2dDQUFZTSxtQkFBbUJBO2dDQUN0Q0QsYUFBYUE7Ozs7Ozs7Ozs7OztrQ0FJakIsOERBQUM3Qix3REFBUUE7d0JBQUMwQixPQUFPQTt3QkFBT0UsVUFBVUE7d0JBQVVDLGFBQWFBOzs7Ozs7Ozs7Ozs7MEJBRzNELDhEQUFDL0Isd0RBQVFBO2dCQUNQSSxPQUFPc0I7Z0JBQ1BFLE9BQU9BO2dCQUFPQyxVQUFVQTtnQkFDeEJDLFVBQVVBO2dCQUFVQyxhQUFhQTs7Ozs7Ozs7Ozs7O0FBSXpDLEVBQUU7R0F2RVdaOztRQUNJbEIsa0RBQVNBOzs7S0FEYmtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdi9TZWFyY2hCYXIvU2VhcmNoQmFyLnRzeD9hZDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50LCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL0lucHV0RmllbGQnO1xuaW1wb3J0IHsgRHJvcERvd24gfSBmcm9tICcuL0Ryb3BEb3duL0Ryb3BEb3duJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFNwb3J0QnRuIH0gZnJvbSAnLi9Ecm9wRG93bi9TcG9ydEJ0bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHdpZHRoU3BhY2luZz86IHN0cmluZyxcbiAgbWFyZ2luTGVmdFNwYWNpbmc/OiBzdHJpbmdcbn1cblxuLyogTmF2aWdhdGVzIHRvIG5ldyBwYWdlIHdoaWxlIGFwcGVuZGluZyB0aGUgbmV3IHBsYXllciBuYW1lIHRvIHRoZSBlbmQgKi9cbmV4cG9ydCBjb25zdCBzZWFyY2hQbGF5ZXIgPSAoaW5wdXQ6IHN0cmluZywgbGVhZ3VlOiBzdHJpbmcsIGNvcnJlY3ROYW1lPzogYm9vbGVhbikgPT4ge1xuICAvKiBFc3BvcnRzIFBsYXllcnMgT25seSBoYXZlIGZpcnN0bmFtZSBzbyByZW1vdmUgdGhlIF8gKG5hbWUgd2lsbCBiZSBzZW50IGFzIGZha2VyXykgKi9cbiAgaWYgKGlucHV0LmNoYXJBdChpbnB1dC5sZW5ndGggLSAxKSA9PT0gJ18nKSB7XG4gICAgaW5wdXQgPSBpbnB1dC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICAvKiBDb3JyZWN0IE5hbWUgbWVhbnMgdGhlIG5hbWUgaXMgYWxyZWFkeSBwYXJzZWQgc28gd2UgY2FuIGp1c3QgbmF2aWdhdGVcbiAgICAgTmFtZSBtdXN0IGJlIGluIGpvbnF1ZWxfam9uZXMgZm9ybWF0XG4gICovXG4gIGlmKGNvcnJlY3ROYW1lKXtcbiAgICB3aW5kb3cub3BlbihgL3BsYXllci8ke2xlYWd1ZX0vJHtpbnB1dC50cmltKCl9YCwgJ19ibGFuaycsICdub29wZW5lcixub3JlZmVycmVyJyk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHBhcnNlZE5hbWUgPSBpbnB1dC50cmltKCk7IC8vIFJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcGFyc2VkTmFtZSA9IHBhcnNlZE5hbWUudG9Mb3dlckNhc2UoKTsgLy8gQ29udmVydCB0byBsb3dlcmNhc2VcbiAgICBsZXQgbmFtZVBhcnRzID0gcGFyc2VkTmFtZS5zcGxpdCgnICcpOyAvLyBTcGxpdCB0aGUgbmFtZVxuXG4gICAgaWYgKG5hbWVQYXJ0cy5sZW5ndGggPj0gMikgeyAvLyBCYXNpY2FsbHkgdHVybiBDYWl0IENsYXJrIHRvIENfQ2xhcmtcbiAgICAgIGxldCBmaXJzdE5hbWUgPSBuYW1lUGFydHNbMF07XG4gICAgICBsZXQgbGFzdE5hbWUgPSBuYW1lUGFydHNbMV07XG4gICAgICBwYXJzZWROYW1lID0gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX1fJHtsYXN0TmFtZX1gO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC50cmltKCkpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGAvcGxheWVyLyR7bGVhZ3VlfS8ke3BhcnNlZE5hbWUudHJpbSgpfWAsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHt3aWR0aFNwYWNpbmcsIG1hcmdpbkxlZnRTcGFjaW5nfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwYXJhbVBsYXllciwgcGFyYW1MZWFndWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3BsYXllck5hbWUsIHNldFBsYXllck5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtzcG9ydCwgc2V0U3BvcnRdID0gdXNlU3RhdGU8c3RyaW5nPignV05CQScpO1xuICBjb25zdCBbZHJvcERvd24sIHNldERyb3BEb3duXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRQbGF5ZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VhcmNoUGxheWVyKHBsYXllck5hbWUsIHNwb3J0KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwYXJhbUxlYWd1ZSkge1xuICAgICAgc2V0U3BvcnQocGFyYW1MZWFndWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH0sIFtwYXJhbUxlYWd1ZSwgcGFyYW1QbGF5ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRyb3BEb3duKVxuICAgIGNvbnNvbGUubG9nKGRyb3BEb3duID09PSBcInNwb3J0c1wiKVxuICB9LCBbZHJvcERvd25dKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIFxuICAgICAgd2lkdGg6IHdpZHRoU3BhY2luZyA/IHdpZHRoU3BhY2luZyA6ICczMCUnLFxuICAgICAgbWFyZ2luTGVmdDogbWFyZ2luTGVmdFNwYWNpbmcgPyBtYXJnaW5MZWZ0U3BhY2luZyA6IDMwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9fT5cbiAgICAgIFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDonI2ZmZicsIFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxib3JkZXI6ICcycHggc29saWQgIzAwMCcsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCB3aWR0aDonNzAlJ319PlxuXG4gICAgICAgICAgey8qIFRoZSBNYWduaWZ5aW5nIEdsYXNzIGljb24gKi99XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsIGJhY2tncm91bmQ6ICdub25lJywgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiIzAwMFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ25vbmUnLCBjb2xvcjogJyM4ODg0ODQnfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIm0xOS42IDIxbC02LjMtNi4zcS0uNzUuNi0xLjcyNS45NVQ5LjUgMTZxLTIuNzI1IDAtNC42MTItMS44ODhUMyA5LjV0MS44ODgtNC42MTJUOS41IDN0NC42MTMgMS44ODhUMTYgOS41cTAgMS4xLS4zNSAyLjA3NVQxNC43IDEzLjNsNi4zIDYuM3pNOS41IDE0cTEuODc1IDAgMy4xODgtMS4zMTJUMTQgOS41dC0xLjMxMi0zLjE4N1Q5LjUgNVQ2LjMxMyA2LjMxM1Q1IDkuNXQxLjMxMyAzLjE4OFQ5LjUgMTRcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8SW5wdXRGaWVsZCBcbiAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXJOYW1lfSBoYW5kbGVJbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IFxuICAgICAgICAgICAgc2V0RHJvcERvd249e3NldERyb3BEb3dufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxTcG9ydEJ0biBzcG9ydD17c3BvcnR9IGRyb3BEb3duPXtkcm9wRG93bn0gc2V0RHJvcERvd249e3NldERyb3BEb3dufS8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxEcm9wRG93biBcbiAgICAgICAgaW5wdXQ9e3BsYXllck5hbWV9IFxuICAgICAgICBzcG9ydD17c3BvcnR9IHNldFNwb3J0PXtzZXRTcG9ydH1cbiAgICAgICAgZHJvcERvd249e2Ryb3BEb3dufSBzZXREcm9wRG93bj17c2V0RHJvcERvd259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0RmllbGQiLCJEcm9wRG93biIsInVzZVJvdXRlciIsIlNwb3J0QnRuIiwic2VhcmNoUGxheWVyIiwiaW5wdXQiLCJsZWFndWUiLCJjb3JyZWN0TmFtZSIsImNoYXJBdCIsImxlbmd0aCIsInNsaWNlIiwid2luZG93Iiwib3BlbiIsInRyaW0iLCJwYXJzZWROYW1lIiwidG9Mb3dlckNhc2UiLCJuYW1lUGFydHMiLCJzcGxpdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiU2VhcmNoQmFyIiwid2lkdGhTcGFjaW5nIiwibWFyZ2luTGVmdFNwYWNpbmciLCJyb3V0ZXIiLCJxdWVyeSIsInBhcmFtUGxheWVyIiwicGFyYW1MZWFndWUiLCJwbGF5ZXJOYW1lIiwic2V0UGxheWVyTmFtZSIsInNwb3J0Iiwic2V0U3BvcnQiLCJkcm9wRG93biIsInNldERyb3BEb3duIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImJhY2tncm91bmQiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImFsaWduSXRlbXMiLCJidXR0b24iLCJ0eXBlIiwiY3Vyc29yIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInBvaW50ZXJFdmVudHMiLCJjb2xvciIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Nav/SearchBar/SearchBar.tsx\n"));

/***/ })

});
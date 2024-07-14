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

/***/ "./src/components/Nav/SearchBar.tsx":
/*!******************************************!*\
  !*** ./src/components/Nav/SearchBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchBar: function() { return /* binding */ SearchBar; },\n/* harmony export */   searchPlayer: function() { return /* binding */ searchPlayer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField */ \"./src/components/Nav/InputField.tsx\");\n/* harmony import */ var _NamesDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NamesDropDown */ \"./src/components/Nav/NamesDropDown.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n/* Navigates to new page while appending the new player name to the end */ var searchPlayer = function(input, league, correctName) {\n    /* Correct Name means the name is already parsed so we can just navigate\n     Name must be in jonquel_jones format\n  */ var parsedName = input.trim(); // Remove whitespace\n    parsedName = parsedName.toLowerCase(); // Convert to lowercase\n    var nameParts = parsedName.split(\" \"); // Split the name\n    if (nameParts.length >= 2) {\n        var firstName = nameParts[0];\n        var lastName = nameParts[1];\n        parsedName = \"\".concat(firstName.charAt(0), \"_\").concat(lastName);\n    }\n    if (input.trim()) {\n        window.open(\"/player/\".concat(league, \"/\").concat(parsedName.trim()), \"_blank\", \"noopener,noreferrer\");\n    }\n};\nvar SearchBar = function(param) {\n    var widthSpacing = param.widthSpacing, marginLeftSpacing = param.marginLeftSpacing;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), playerName = _useState[0], setPlayerName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WNBA\"), 2), sport = _useState1[0], setSport = _useState1[1];\n    var handleInputChange = function(e) {\n        setPlayerName(e.target.value);\n    };\n    var handleSubmit = function(event) {\n        event.preventDefault();\n        searchPlayer(playerName, sport);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            width: widthSpacing ? widthSpacing : \"30%\",\n            marginLeft: marginLeftSpacing ? marginLeftSpacing : 30,\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                style: {\n                    display: \"flex\",\n                    background: \"#fff\",\n                    width: \"100%\",\n                    borderRadius: 10,\n                    border: \"2px solid #000\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"70%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                style: {\n                                    border: \"none\",\n                                    background: \"none\",\n                                    cursor: \"pointer\",\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    justifyContent: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    viewBox: \"0 0 24 24\",\n                                    fill: \"#000\",\n                                    style: {\n                                        pointerEvents: \"none\",\n                                        color: \"#888484\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_2__.InputField, {\n                                value: playerName,\n                                handleInputChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SportBtn, {\n                        sport: sport,\n                        setSport: setSport\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NamesDropDown__WEBPACK_IMPORTED_MODULE_3__.NamesDropDown, {\n                input: playerName\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(SearchBar, \"5f4B8jO3sXeRxQMhgDgwPTQlp58=\");\n_c = SearchBar;\nvar SportBtn = function(param) {\n    var sport = param.sport, setSport = param.setSport;\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isDropdownOpen = _useState[0], setIsDropdownOpen = _useState[1];\n    var allSports = [\n        \"WNBA\"\n    ];\n    var toggleDropdown = function() {\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    var handleSportSelect = function(sport) {\n        setSport(sport);\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"relative\",\n            width: \"20%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleDropdown,\n                style: {\n                    width: \"95%\",\n                    height: \"90%\",\n                    borderRadius: 10,\n                    background: \"#000\",\n                    border: \"none\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    margin: 3,\n                    cursor: \"pointer\"\n                },\n                type: \"button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"#fff\",\n                        fontSize: 12,\n                        fontWeight: \"bold\"\n                    },\n                    children: sport\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, _this),\n            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"100%\",\n                    left: 0,\n                    backgroundColor: \"#fff\",\n                    border: \"1px solid #ddd\",\n                    borderRadius: 5,\n                    width: \"100%\",\n                    boxShadow: \"0 8px 16px rgba(0, 0, 0, 0.2)\",\n                    zIndex: 1\n                },\n                children: allSports.map(function(sportName, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return handleSportSelect(sportName);\n                        },\n                        style: {\n                            padding: 10,\n                            cursor: \"pointer\",\n                            backgroundColor: sport === sportName ? \"#f0f0f0\" : \"#fff\"\n                        },\n                        children: sportName\n                    }, index, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 57\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 133,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SportBtn, \"V8e9uWL0aZcxWbWsGpr6VZQUTDg=\");\n_c1 = SportBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"SearchBar\");\n$RefreshReg$(_c1, \"SportBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eD80ZWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50LCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSAnLi9JbnB1dEZpZWxkJztcbmltcG9ydCB7IE5hbWVzRHJvcERvd24gfSBmcm9tICcuL05hbWVzRHJvcERvd24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB3aWR0aFNwYWNpbmc/OiBzdHJpbmcsXG4gIG1hcmdpbkxlZnRTcGFjaW5nPzogc3RyaW5nXG59XG5cbi8qIE5hdmlnYXRlcyB0byBuZXcgcGFnZSB3aGlsZSBhcHBlbmRpbmcgdGhlIG5ldyBwbGF5ZXIgbmFtZSB0byB0aGUgZW5kICovXG5leHBvcnQgY29uc3Qgc2VhcmNoUGxheWVyID0gKGlucHV0OiBzdHJpbmcsIGxlYWd1ZTogc3RyaW5nLCBjb3JyZWN0TmFtZT86IGJvb2xlYW4pID0+IHtcblxuICAvKiBDb3JyZWN0IE5hbWUgbWVhbnMgdGhlIG5hbWUgaXMgYWxyZWFkeSBwYXJzZWQgc28gd2UgY2FuIGp1c3QgbmF2aWdhdGVcbiAgICAgTmFtZSBtdXN0IGJlIGluIGpvbnF1ZWxfam9uZXMgZm9ybWF0XG4gICovXG5cbiAgbGV0IHBhcnNlZE5hbWUgPSBpbnB1dC50cmltKCk7IC8vIFJlbW92ZSB3aGl0ZXNwYWNlXG4gIHBhcnNlZE5hbWUgPSBwYXJzZWROYW1lLnRvTG93ZXJDYXNlKCk7IC8vIENvbnZlcnQgdG8gbG93ZXJjYXNlXG4gIGxldCBuYW1lUGFydHMgPSBwYXJzZWROYW1lLnNwbGl0KCcgJyk7IC8vIFNwbGl0IHRoZSBuYW1lXG5cbiAgaWYgKG5hbWVQYXJ0cy5sZW5ndGggPj0gMikgeyAvLyBCYXNpY2FsbHkgdHVybiBDYWl0IENsYXJrIHRvIENfQ2xhcmtcbiAgICBsZXQgZmlyc3ROYW1lID0gbmFtZVBhcnRzWzBdO1xuICAgIGxldCBsYXN0TmFtZSA9IG5hbWVQYXJ0c1sxXTtcbiAgICBwYXJzZWROYW1lID0gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX1fJHtsYXN0TmFtZX1gO1xuICB9XG5cbiAgaWYgKGlucHV0LnRyaW0oKSkge1xuICAgIHdpbmRvdy5vcGVuKGAvcGxheWVyLyR7bGVhZ3VlfS8ke3BhcnNlZE5hbWUudHJpbSgpfWAsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe3dpZHRoU3BhY2luZywgbWFyZ2luTGVmdFNwYWNpbmd9KSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXJOYW1lLCBzZXRQbGF5ZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbc3BvcnQsIHNldFNwb3J0XSA9IHVzZVN0YXRlPHN0cmluZz4oJ1dOQkEnKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFBsYXllck5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hQbGF5ZXIocGxheWVyTmFtZSwgc3BvcnQpO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJywgXG4gICAgICB3aWR0aDogd2lkdGhTcGFjaW5nID8gd2lkdGhTcGFjaW5nIDogJzMwJScsXG4gICAgICBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0U3BhY2luZyA/IG1hcmdpbkxlZnRTcGFjaW5nIDogMzAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH19PlxuICAgICAgXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOicjZmZmJywgXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxib3JkZXI6ICcycHggc29saWQgIzAwMCcsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJ1xuICAgICAgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4Jywgd2lkdGg6JzcwJSd9fT5cblxuICAgICAgICAgIHsvKiBUaGUgTWFnbmlmeWluZyBHbGFzcyBpY29uICovfVxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzBweFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiMwMDBcIlxuICAgICAgICAgICAgICBzdHlsZT17e3BvaW50ZXJFdmVudHM6ICdub25lJywgY29sb3I6ICcjODg4NDg0J319XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTkuNiAyMWwtNi4zLTYuM3EtLjc1LjYtMS43MjUuOTVUOS41IDE2cS0yLjcyNSAwLTQuNjEyLTEuODg4VDMgOS41dDEuODg4LTQuNjEyVDkuNSAzdDQuNjEzIDEuODg4VDE2IDkuNXEwIDEuMS0uMzUgMi4wNzVUMTQuNyAxMy4zbDYuMyA2LjN6TTkuNSAxNHExLjg3NSAwIDMuMTg4LTEuMzEyVDE0IDkuNXQtMS4zMTItMy4xODdUOS41IDVUNi4zMTMgNi4zMTNUNSA5LjV0MS4zMTMgMy4xODhUOS41IDE0XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e3BsYXllck5hbWV9IGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTGVhZ3VlIERyb3AgRG93biAqL31cbiAgICAgICAgPFNwb3J0QnRuIHNwb3J0PXtzcG9ydH0gc2V0U3BvcnQ9e3NldFNwb3J0fS8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxOYW1lc0Ryb3BEb3duIFxuICAgICAgICBpbnB1dD17cGxheWVyTmFtZX1cbiAgICAgIC8+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuaW50ZXJmYWNlIFNwb3J0QnRuUHJvcHMge1xuICBzcG9ydDogc3RyaW5nLCBcbiAgc2V0U3BvcnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XG59XG5jb25zdCBTcG9ydEJ0bjogUmVhY3QuRkM8U3BvcnRCdG5Qcm9wcz4gPSAoeyBzcG9ydCwgc2V0U3BvcnQgfSkgPT4ge1xuICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgYWxsU3BvcnRzID0gW1xuICAgIFwiV05CQVwiXG4gIF1cblxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xuICB9O1xuICBjb25zdCBoYW5kbGVTcG9ydFNlbGVjdCA9IChzcG9ydDogc3RyaW5nKSA9PiB7XG4gICAgc2V0U3BvcnQoc3BvcnQpO1xuICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOicyMCUnIH19PlxuICAgICAgXG4gICAgICB7LyogICovfVxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJvcGRvd259IFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnOTUlJywgaGVpZ2h0OiBcIjkwJVwiLCBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAzLCBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICB9fSB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjZmZmJywgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAge3Nwb3J0fVxuICAgICAgICA8L3A+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIFRoZSBMZWFndWUgRHJvcCBEb3duICovfVxuICAgICAge2lzRHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgfX0+XG4gICAgICAgICAge2FsbFNwb3J0cy5tYXAoKHNwb3J0TmFtZSwgaW5kZXgpID0+IHsgcmV0dXJuIDxkaXYga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3BvcnRTZWxlY3Qoc3BvcnROYW1lKX0gXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZENvbG9yOiBzcG9ydCA9PT0gc3BvcnROYW1lID8gJyNmMGYwZjAnIDogJyNmZmYnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzcG9ydE5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXRGaWVsZCIsIk5hbWVzRHJvcERvd24iLCJzZWFyY2hQbGF5ZXIiLCJpbnB1dCIsImxlYWd1ZSIsImNvcnJlY3ROYW1lIiwicGFyc2VkTmFtZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm5hbWVQYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjaGFyQXQiLCJ3aW5kb3ciLCJvcGVuIiwiU2VhcmNoQmFyIiwid2lkdGhTcGFjaW5nIiwibWFyZ2luTGVmdFNwYWNpbmciLCJwbGF5ZXJOYW1lIiwic2V0UGxheWVyTmFtZSIsInNwb3J0Iiwic2V0U3BvcnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwicG9zaXRpb24iLCJmb3JtIiwib25TdWJtaXQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9uIiwidHlwZSIsImN1cnNvciIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwb2ludGVyRXZlbnRzIiwiY29sb3IiLCJwYXRoIiwiZCIsIlNwb3J0QnRuIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsImFsbFNwb3J0cyIsInRvZ2dsZURyb3Bkb3duIiwiaGFuZGxlU3BvcnRTZWxlY3QiLCJvbkNsaWNrIiwibWFyZ2luIiwicCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJ6SW5kZXgiLCJtYXAiLCJzcG9ydE5hbWUiLCJpbmRleCIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav/SearchBar.tsx\n"));

/***/ })

});
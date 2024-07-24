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

/***/ "./src/components/Nav/NamesDropDown.tsx":
/*!**********************************************!*\
  !*** ./src/components/Nav/NamesDropDown.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NamesDropDown: function() { return /* binding */ NamesDropDown; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Player_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Player/NotFound */ \"./src/components/Player/NotFound.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/Nav/SearchBar.tsx\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NamesDropDown = function(param) {\n    var input = param.input, sport = param.sport;\n    _s();\n    var _useGlobalContext = (0,_Context_store__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)(), players = _useGlobalContext.players, fetchValorantPlayers = _useGlobalContext.fetchValorantPlayers, fetchLolPlayers = _useGlobalContext.fetchLolPlayers;\n    /*\n        Only need \n            -firstname\n            -lastname\n            -picId\n    */ var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), similarPlayers = _useState[0], setSimilarPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isDropdownOpen = _useState2[0], setIsDropdownOpen = _useState2[1];\n    /*\n        Make the getAllPlayer calls to the respective league\n    */ var getSimilarPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n            var similarPlayers, players1, players2;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        similarPlayers = [];\n                        if (!(sport === \"WNBA\")) return [\n                            3,\n                            1\n                        ];\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_2__.findSimilarLastNames)(players, input, 2);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 1:\n                        if (!(sport === \"Valorant\")) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            fetchValorantPlayers()\n                        ];\n                    case 2:\n                        players1 = _state.sent();\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_2__.findSimilarLastNames)(players1, input, 2);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        if (!(sport === \"LOL\")) return [\n                            3,\n                            5\n                        ];\n                        return [\n                            4,\n                            fetchLolPlayers()\n                        ];\n                    case 4:\n                        players2 = _state.sent();\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_2__.findSimilarLastNames)(players2, input, 2);\n                        _state.label = 5;\n                    case 5:\n                        setSimilarPlayers(similarPlayers);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getSimilarPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsDropdownOpen(true);\n        getSimilarPlayers();\n        setLoading(false);\n    }, [\n        input,\n        sport\n    ]);\n    var handleClickOutside = function(event) {\n        var target = event.target;\n        if (!target.closest(\".sport-dropdown\") && isDropdownOpen) {\n            setIsDropdownOpen(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.addEventListener(\"click\", handleClickOutside);\n        return function() {\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, [\n        isDropdownOpen\n    ]);\n    if (!isDropdownOpen || input.trim().length === 0) return null;\n    if (loading && isDropdownOpen) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            display: \"flex\",\n            alignItems: \"center\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_9__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 25,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, _this);\n    if (loading && isDropdownOpen && similarPlayers.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"50px\",\n                display: \"flex\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginLeft: \"15px\"\n                },\n                children: [\n                    \"Can't Find \",\n                    input\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                lineNumber: 98,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n            lineNumber: 95,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: similarPlayers.map(function(player, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    height: \"50px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    return (0,_SearchBar__WEBPACK_IMPORTED_MODULE_5__.searchPlayer)(\"\".concat(player.firstName, \"_\").concat(player.lastName), sport, true);\n                },\n                children: [\n                    player.picId === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        width: \"25\",\n                        height: \"25\",\n                        viewBox: \"0 0 8 8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#1D1D1D\",\n                            d: \"M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1c-.81 0-1.55-.39-2.09-1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 25\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                        alt: \"Headshot of \".concat(player.firstName, \" \").concat(player.lastName),\n                        width: 50,\n                        height: 35,\n                        style: {\n                            marginLeft: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"15px\"\n                        },\n                        children: [\n                            player.firstName,\n                            \" \",\n                            player.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                lineNumber: 112,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, _this);\n};\n_s(NamesDropDown, \"KWstuMzn7vfSxFU+McnbU5de8t4=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext\n    ];\n});\n_c = NamesDropDown;\nvar _c;\n$RefreshReg$(_c, \"NamesDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWTt3QkFBTTs7NEJBQUlFLE9BQU9JLFNBQVM7NEJBQUM7NEJBQUVKLE9BQU9LLFFBQVE7Ozs7Ozs7O2VBZjdESjs7Ozs7Ozs7Ozs7QUFvQjFCLEVBQUM7R0F0SFk5Qzs7UUFDZ0RILDREQUFnQkE7OztLQURoRUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L05hbWVzRHJvcERvd24udHN4P2JmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZpbmRTaW1pbGFyTGFzdE5hbWVzIH0gZnJvbSAnLi4vUGxheWVyL05vdEZvdW5kJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9Db250ZXh0L3N0b3JlJztcbmltcG9ydCB7IHNlYXJjaFBsYXllciB9IGZyb20gJy4vU2VhcmNoQmFyJztcbmltcG9ydCB7IFdOQkFQbGF5ZXIgfSBmcm9tICcuLi8uLi9Db250ZXh0L1BsYXllclR5cGVzJztcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaW5wdXQ6IHN0cmluZ1xuICAgIHNwb3J0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IE5hbWVzRHJvcERvd246IFJlYWN0LkZDPFByb3BzPiA9ICh7aW5wdXQsIHNwb3J0fSkgPT4ge1xuICAgIGNvbnN0IHtwbGF5ZXJzLCBmZXRjaFZhbG9yYW50UGxheWVycywgZmV0Y2hMb2xQbGF5ZXJzfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICAgIC8qXG4gICAgICAgIE9ubHkgbmVlZCBcbiAgICAgICAgICAgIC1maXJzdG5hbWVcbiAgICAgICAgICAgIC1sYXN0bmFtZVxuICAgICAgICAgICAgLXBpY0lkXG4gICAgKi9cbiAgICBjb25zdCBbc2ltaWxhclBsYXllcnMsIHNldFNpbWlsYXJQbGF5ZXJzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICAvKlxuICAgICAgICBNYWtlIHRoZSBnZXRBbGxQbGF5ZXIgY2FsbHMgdG8gdGhlIHJlc3BlY3RpdmUgbGVhZ3VlXG4gICAgKi9cbiAgICBjb25zdCBnZXRTaW1pbGFyUGxheWVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHNpbWlsYXJQbGF5ZXJzOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgIGlmKHNwb3J0ID09PSBcIldOQkFcIil7XG4gICAgICAgICAgICBzaW1pbGFyUGxheWVycyA9IGZpbmRTaW1pbGFyTGFzdE5hbWVzKHBsYXllcnMsIGlucHV0LCAyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNwb3J0ID09PSBcIlZhbG9yYW50XCIpe1xuICAgICAgICAgICAgY29uc3QgcGxheWVycyA9IGF3YWl0IGZldGNoVmFsb3JhbnRQbGF5ZXJzKCk7XG4gICAgICAgICAgICBzaW1pbGFyUGxheWVycyA9IGZpbmRTaW1pbGFyTGFzdE5hbWVzKHBsYXllcnMsIGlucHV0LCAyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNwb3J0ID09PSBcIkxPTFwiKXtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBmZXRjaExvbFBsYXllcnMoKTtcbiAgICAgICAgICAgIHNpbWlsYXJQbGF5ZXJzID0gZmluZFNpbWlsYXJMYXN0TmFtZXMocGxheWVycywgaW5wdXQsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2ltaWxhclBsYXllcnMoc2ltaWxhclBsYXllcnMpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKHRydWUpO1xuICAgICAgICBnZXRTaW1pbGFyUGxheWVycygpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbaW5wdXQsIHNwb3J0XSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5zcG9ydC1kcm9wZG93bicpICYmIGlzRHJvcGRvd25PcGVuKSB7XG4gICAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgICAgICB9O1xuICAgIH0sIFtpc0Ryb3Bkb3duT3Blbl0pO1xuXG4gICAgaWYoIWlzRHJvcGRvd25PcGVuIHx8IGlucHV0LnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIFxuICAgIGlmKGxvYWRpbmcgJiYgaXNEcm9wZG93bk9wZW4pIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDonNTBweCcsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDbGlwTG9hZGVyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjMDAwJ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNpemU9ezI1fVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGlmKGxvYWRpbmcgJiYgaXNEcm9wZG93bk9wZW4gJiYgc2ltaWxhclBsYXllcnMubGVuZ3RoID09PSAwKSByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtaW5IZWlnaHQ6JzUwcHgnLCBiYWNrZ3JvdW5kOicjZWFlYWVhJywgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJzEwMCUnLCBsZWZ0OiAwLCBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAxMCwgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCBibGFjaycsIFxuICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwcHgnLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT5DYW4ndCBGaW5kIHtpbnB1dH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDonI2VhZWFlYScsIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICcxMDAlJywgbGVmdDogMCwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTAsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgYmxhY2snLCBcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgIH19PlxuICAgICAgICAgICAge3NpbWlsYXJQbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsIGhlaWdodDonNTBweCcsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBjdXJzb3I6J3BvaW50ZXInXG4gICAgICAgICAgICAgICAgfX0gb25DbGljaz17KCkgPT4gc2VhcmNoUGxheWVyKGAke3BsYXllci5maXJzdE5hbWV9XyR7cGxheWVyLmxhc3ROYW1lfWAsIHNwb3J0LCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtwbGF5ZXIucGljSWQgPT09IFwiXCIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCA4IDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzFEMUQxRFwiIGQ9XCJNNCAwQzIuOSAwIDIgMS4xMiAyIDIuNVMyLjkgNSA0IDVzMi0xLjEyIDItMi41UzUuMSAwIDQgME0xLjkxIDVDLjg1IDUuMDUgMCA1LjkyIDAgN3YxaDhWN2MwLTEuMDgtLjg0LTEuOTUtMS45MS0yYy0uNTQuNjEtMS4yOCAxLTIuMDkgMWMtLjgxIDAtMS41NS0uMzktMi4wOS0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vY2RuLnduYmEuY29tL2hlYWRzaG90cy93bmJhL2xhdGVzdC8xMDQweDc2MC8ke3BsYXllci5waWNJZH0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BIZWFkc2hvdCBvZiAke3BsYXllci5maXJzdE5hbWV9ICR7cGxheWVyLmxhc3ROYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfSBoZWlnaHQ9ezM1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDonMTBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PntwbGF5ZXIuZmlyc3ROYW1lfSB7cGxheWVyLmxhc3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmluZFNpbWlsYXJMYXN0TmFtZXMiLCJJbWFnZSIsInVzZUdsb2JhbENvbnRleHQiLCJzZWFyY2hQbGF5ZXIiLCJDbGlwTG9hZGVyIiwiTmFtZXNEcm9wRG93biIsImlucHV0Iiwic3BvcnQiLCJwbGF5ZXJzIiwiZmV0Y2hWYWxvcmFudFBsYXllcnMiLCJmZXRjaExvbFBsYXllcnMiLCJzaW1pbGFyUGxheWVycyIsInNldFNpbWlsYXJQbGF5ZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiZ2V0U2ltaWxhclBsYXllcnMiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJpbSIsImxlbmd0aCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyTGVmdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJjb2xvciIsInNpemUiLCJhcmlhLWxhYmVsIiwiZGF0YS10ZXN0aWQiLCJoZWlnaHQiLCJwIiwibWFyZ2luTGVmdCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiY3Vyc29yIiwib25DbGljayIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGljSWQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbCIsImQiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav/NamesDropDown.tsx\n"));

/***/ })

});
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

/***/ "./src/components/Player/Hero.tsx":
/*!****************************************!*\
  !*** ./src/components/Player/Hero.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Hero = function(param) {\n    var playerName = param.playerName, number = param.number, team = param.team, position = param.position, picUrl = param.picUrl, allPickedBtns = param.allPickedBtns, pickedBtn = param.pickedBtn, setPickedBtn = param.setPickedBtn;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"playerPageHeroContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    height: \"25%\",\n                    display: \"flex\",\n                    alignItems: \"flex-end\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playerPagePfpHeaders\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"playerPagePic\",\n                            children: picUrl !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: picUrl,\n                                style: {\n                                    width: \"150px\",\n                                    height: \"110px\"\n                                },\n                                alt: \"Pic of \".concat(playerName),\n                                width: 150,\n                                height: 110\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"80%\",\n                                height: \"80%\",\n                                viewBox: \"0 0 8 8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"#1D1D1D\",\n                                    d: \"M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1c-.81 0-1.55-.39-2.09-1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"playerPagePfpInfo\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    style: {\n                                        color: \"#fff\",\n                                        fontSize: 45,\n                                        margin: 0\n                                    },\n                                    children: playerName\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    style: {\n                                        color: \"#ccc9c9\",\n                                        fontSize: 25\n                                    },\n                                    children: [\n                                        number !== \"\" ? \"#\".concat(number, \"  -\") : \"\",\n                                        \" \",\n                                        team !== \"\" ? \"\".concat(team) : \"\",\n                                        \" \",\n                                        position !== \"\" ? \"- \".concat(position) : \"\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            color: \"#fff\"\n                        },\n                        children: pickedBtn\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"playerPagescrollableContainer\",\n                        children: allPickedBtns.map(function(btnText, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatBtn, {\n                                onClick: function() {\n                                    return setPickedBtn(btnText);\n                                },\n                                index: index,\n                                pickedBtn: pickedBtn,\n                                btnText: btnText\n                            }, index, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n        lineNumber: 20,\n        columnNumber: 12\n    }, _this);\n};\n_c = Hero;\nvar black = \"#1f202d\";\nvar StatBtn = function(param) {\n    var btnText = param.btnText, pickedBtn = param.pickedBtn, onClick = param.onClick, index = param.index;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            return onClick();\n        },\n        className: \"playerPageStatBtn\",\n        style: {\n            background: pickedBtn === btnText ? \"#fff\" : \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            style: {\n                color: pickedBtn === btnText ? \"#000\" : \"#fff\",\n                fontSize: 12,\n                fontWeight: \"bold\"\n            },\n            children: btnText\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = StatBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"StatBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvSGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQzlDO0FBY3hCLElBQU1FLE9BQXdCO1FBQ2pDQyxtQkFBQUEsWUFBWUMsZUFBQUEsUUFBUUMsYUFBQUEsTUFBTUMsaUJBQUFBLFVBQVVDLGVBQUFBLFFBQVFDLHNCQUFBQSxlQUFlQyxrQkFBQUEsV0FBV0MscUJBQUFBO0lBR3RFLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFbEIsOERBQUNEO2dCQUFJRSxPQUFPO29CQUFDQyxPQUFNO29CQUFRQyxRQUFPO29CQUFPQyxTQUFRO29CQUFRQyxZQUFXO2dCQUFVOzBCQUUxRSw0RUFBQ047b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVkwsV0FBVyxtQkFDUiw4REFBQ04sbURBQUtBO2dDQUNGaUIsS0FBS1g7Z0NBQ0xNLE9BQU87b0NBQUNDLE9BQU87b0NBQVNDLFFBQVE7Z0NBQU87Z0NBQ3ZDSSxLQUFLLFVBQXFCLE9BQVhoQjtnQ0FBY1csT0FBTztnQ0FBS0MsUUFBUTs7Ozs7c0RBR3JELDhEQUFDSztnQ0FBSUMsT0FBTTtnQ0FBNkJQLE9BQU07Z0NBQU1DLFFBQU87Z0NBQU1PLFNBQVE7MENBQ3JFLDRFQUFDQztvQ0FBS0MsTUFBSztvQ0FBVUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNbkMsOERBQUNkOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2M7b0NBQUdiLE9BQU87d0NBQUNjLE9BQU07d0NBQVFDLFVBQVU7d0NBQUlDLFFBQVE7b0NBQUM7OENBQzVDMUI7Ozs7Ozs4Q0FFTCw4REFBQzJCO29DQUFHakIsT0FBTzt3Q0FBQ2MsT0FBTTt3Q0FBV0MsVUFBVTtvQ0FBRTs7d0NBQ3BDeEIsV0FBVyxLQUFLLElBQVcsT0FBUEEsUUFBTyxTQUFPO3dDQUFHO3dDQUFFQyxTQUFTLEtBQUssR0FBUSxPQUFMQSxRQUFTO3dDQUFHO3dDQUFFQyxhQUFhLEtBQUssS0FBYyxPQUFUQSxZQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTNILDhEQUFDSztnQkFBSUUsT0FBTztvQkFBQ0csU0FBUztvQkFBUWUsZUFBZTtvQkFBVUMsZ0JBQWdCO2dCQUFlOztrQ0FDbEYsOERBQUNGO3dCQUFHakIsT0FBTzs0QkFBQ2MsT0FBTzt3QkFBTTtrQ0FBSWxCOzs7Ozs7a0NBRTdCLDhEQUFDRTt3QkFBSUMsV0FBVTtrQ0FDVkosY0FBY3lCLEdBQUcsQ0FBQyxTQUFDQyxTQUFTQztpREFDekIsOERBQUNDO2dDQUNHQyxTQUFTOzJDQUFNM0IsYUFBYXdCOztnQ0FBc0JDLE9BQU9BO2dDQUN6RDFCLFdBQVdBO2dDQUFXeUIsU0FBU0E7K0JBRFlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRSxFQUFDO0tBbERZakM7QUEyRGIsSUFBTW9DLFFBQVE7QUFFZCxJQUFNRixVQUFrQztRQUFHRixnQkFBQUEsU0FBU3pCLGtCQUFBQSxXQUFXNEIsZ0JBQUFBLFNBQVNGLGNBQUFBO0lBQ3BFLHFCQUNJLDhEQUFDSTtRQUNHRixTQUFTO21CQUFNQTs7UUFDZnpCLFdBQVU7UUFDVkMsT0FBTztZQUNIMkIsWUFBWS9CLGNBQWN5QixVQUFVLFNBQVM7UUFDakQ7a0JBRUEsNEVBQUNPO1lBQUU1QixPQUFPO2dCQUNOYyxPQUFPbEIsY0FBY3lCLFVBQVUsU0FBUztnQkFBUU4sVUFBUztnQkFBSWMsWUFBVztZQUM1RTtzQkFDS1I7Ozs7Ozs7Ozs7O0FBSWpCO01BaEJNRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvSGVyby50c3g/YzEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgcGxheWVyTmFtZTogc3RyaW5nXG4gICAgcGljVXJsOiBzdHJpbmcsXG4gICAgbnVtYmVyOiBzdHJpbmcsXG4gICAgdGVhbTogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBzdHJpbmcsXG4gICAgcGlja2VkQnRuOiBzdHJpbmcsXG4gICAgc2V0UGlja2VkQnRuOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcbiAgICBhbGxQaWNrZWRCdG5zOiBzdHJpbmdbXVxufVxuICBcblxuZXhwb3J0IGNvbnN0IEhlcm86IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gICAgcGxheWVyTmFtZSwgbnVtYmVyLCB0ZWFtLCBwb3NpdGlvbiwgcGljVXJsLCBhbGxQaWNrZWRCdG5zLCBwaWNrZWRCdG4sIHNldFBpY2tlZEJ0blxufSkgPT4ge1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyUGFnZUhlcm9Db250YWluZXJcIj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzI1JScsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidmbGV4LWVuZCd9fT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJQYWdlUGZwSGVhZGVyc1wiPlxuICAgICAgICAgICAgICAgIHsvKiBQbGF5ZXIgUGljICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyUGFnZVBpY1wiPlxuICAgICAgICAgICAgICAgICAgICB7cGljVXJsICE9PSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNTBweCcsIGhlaWdodDogJzExMHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgUGljIG9mICR7cGxheWVyTmFtZX1gfSB3aWR0aD17MTUwfSBoZWlnaHQ9ezExMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiODAlXCIgaGVpZ2h0PVwiODAlXCIgdmlld0JveD1cIjAgMCA4IDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiIzFEMUQxRFwiIGQ9XCJNNCAwQzIuOSAwIDIgMS4xMiAyIDIuNVMyLjkgNSA0IDVzMi0xLjEyIDItMi41UzUuMSAwIDQgME0xLjkxIDVDLjg1IDUuMDUgMCA1LjkyIDAgN3YxaDhWN2MwLTEuMDgtLjg0LTEuOTUtMS45MS0yYy0uNTQuNjEtMS4yOCAxLTIuMDkgMWMtLjgxIDAtMS41NS0uMzktMi4wOS0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUGxheWVyIG5hbWUgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJQYWdlUGZwSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjonI2ZmZicsIGZvbnRTaXplOiA0NSwgbWFyZ2luOiAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxheWVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6JyNjY2M5YzknLCBmb250U2l6ZTogMjV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW1iZXIgIT09IFwiXCIgPyBgIyR7bnVtYmVyfSAgLWAgOiBcIlwifSB7dGVhbSAhPT0gXCJcIiA/IGAke3RlYW19YCA6IFwiXCJ9IHtwb3NpdGlvbiAhPT0gXCJcIiA/IGAtICR7cG9zaXRpb259YCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fT57cGlja2VkQnRufTwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyUGFnZXNjcm9sbGFibGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7YWxsUGlja2VkQnRucy5tYXAoKGJ0blRleHQsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRCdG4gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQaWNrZWRCdG4oYnRuVGV4dCl9IGtleT17aW5kZXh9IGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY2tlZEJ0bj17cGlja2VkQnRufSBidG5UZXh0PXtidG5UZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbn1cblxudHlwZSBTdGF0QnRuUHJvcHMgPSB7XG4gICAgYnRuVGV4dDogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgcGlja2VkQnRuOnN0cmluZyxcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkXG59XG4gIFxuY29uc3QgYmxhY2sgPSBcIiMxZjIwMmRcIjtcblxuY29uc3QgU3RhdEJ0bjogUmVhY3QuRkM8U3RhdEJ0blByb3BzPiA9ICh7IGJ0blRleHQsIHBpY2tlZEJ0biwgb25DbGljaywgaW5kZXggfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheWVyUGFnZVN0YXRCdG5cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBwaWNrZWRCdG4gPT09IGJ0blRleHQgPyAnI2ZmZicgOiAnYmxhY2snLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogcGlja2VkQnRuID09PSBidG5UZXh0ID8gJyMwMDAnIDogJyNmZmYnLCBmb250U2l6ZToxMiwgZm9udFdlaWdodDonYm9sZCdcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtidG5UZXh0fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiSGVybyIsInBsYXllck5hbWUiLCJudW1iZXIiLCJ0ZWFtIiwicG9zaXRpb24iLCJwaWNVcmwiLCJhbGxQaWNrZWRCdG5zIiwicGlja2VkQnRuIiwic2V0UGlja2VkQnRuIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwic3JjIiwiYWx0Iiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIiwiaDEiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luIiwiaDIiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJtYXAiLCJidG5UZXh0IiwiaW5kZXgiLCJTdGF0QnRuIiwib25DbGljayIsImJsYWNrIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsInAiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/Hero.tsx\n"));

/***/ })

});
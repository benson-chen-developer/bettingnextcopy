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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Hero = function(param) {\n    var playerName = param.playerName, number = param.number, team = param.team, position = param.position, picUrl = param.picUrl, allPickedBtns = param.allPickedBtns, pickedBtn = param.pickedBtn, setPickedBtn = param.setPickedBtn;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"playerPageHeroContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    height: \"20%\",\n                    display: \"flex\",\n                    alignItems: \"flex-end\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playerPagePfpHeaders\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"playerPagePic\",\n                            children: picUrl !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: picUrl,\n                                style: {\n                                    width: \"150px\",\n                                    height: \"110px\"\n                                },\n                                alt: \"Pic of \".concat(playerName),\n                                width: 150,\n                                height: 110\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"80%\",\n                                height: \"80%\",\n                                viewBox: \"0 0 8 8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    fill: \"#1D1D1D\",\n                                    d: \"M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1c-.81 0-1.55-.39-2.09-1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"playerPagePfpInfo\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    style: {\n                                        color: \"#fff\",\n                                        fontSize: \"2em\",\n                                        margin: 0\n                                    },\n                                    children: playerName\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    style: {\n                                        color: \"#ccc9c9\",\n                                        fontSize: \"1em\"\n                                    },\n                                    children: [\n                                        number !== \"\" ? \"#\".concat(number, \"  -\") : \"\",\n                                        \" \",\n                                        team !== \"\" ? \"\".concat(team) : \"\",\n                                        \" \",\n                                        position !== \"\" ? \"- \".concat(position) : \"\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    justifyContent: \"space-between\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"playerPagescrollableContainer\",\n                    children: allPickedBtns.map(function(btnText, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatBtn, {\n                            onClick: function() {\n                                return setPickedBtn(btnText);\n                            },\n                            index: index,\n                            pickedBtn: pickedBtn,\n                            btnText: btnText\n                        }, index, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n        lineNumber: 20,\n        columnNumber: 12\n    }, _this);\n};\n_c = Hero;\nvar black = \"#1f202d\";\nvar StatBtn = function(param) {\n    var btnText = param.btnText, pickedBtn = param.pickedBtn, onClick = param.onClick, index = param.index;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            return onClick();\n        },\n        className: \"playerPageStatBtn\",\n        style: {\n            background: pickedBtn === btnText ? \"#fff\" : \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            style: {\n                color: pickedBtn === btnText ? \"#000\" : \"#fff\",\n                fontSize: 12,\n                fontWeight: \"bold\"\n            },\n            children: btnText\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Hero.tsx\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = StatBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"StatBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvSGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQzlDO0FBY3hCLElBQU1FLE9BQXdCO1FBQ2pDQyxtQkFBQUEsWUFBWUMsZUFBQUEsUUFBUUMsYUFBQUEsTUFBTUMsaUJBQUFBLFVBQVVDLGVBQUFBLFFBQVFDLHNCQUFBQSxlQUFlQyxrQkFBQUEsV0FBV0MscUJBQUFBO0lBR3RFLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFbEIsOERBQUNEO2dCQUFJRSxPQUFPO29CQUFDQyxPQUFNO29CQUFRQyxRQUFPO29CQUFPQyxTQUFRO29CQUFRQyxZQUFXO2dCQUFVOzBCQUUxRSw0RUFBQ047b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDVkwsV0FBVyxtQkFDUiw4REFBQ04sbURBQUtBO2dDQUNGaUIsS0FBS1g7Z0NBQ0xNLE9BQU87b0NBQUNDLE9BQU87b0NBQVNDLFFBQVE7Z0NBQU87Z0NBQ3ZDSSxLQUFLLFVBQXFCLE9BQVhoQjtnQ0FBY1csT0FBTztnQ0FBS0MsUUFBUTs7Ozs7c0RBR3JELDhEQUFDSztnQ0FBSUMsT0FBTTtnQ0FBNkJQLE9BQU07Z0NBQU1DLFFBQU87Z0NBQU1PLFNBQVE7MENBQ3JFLDRFQUFDQztvQ0FBS0MsTUFBSztvQ0FBVUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNbkMsOERBQUNkOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2M7b0NBQUdiLE9BQU87d0NBQUNjLE9BQU07d0NBQVFDLFVBQVU7d0NBQU9DLFFBQVE7b0NBQUM7OENBQy9DMUI7Ozs7Ozs4Q0FFTCw4REFBQzJCO29DQUFHakIsT0FBTzt3Q0FBQ2MsT0FBTTt3Q0FBV0MsVUFBVTtvQ0FBSzs7d0NBQ3ZDeEIsV0FBVyxLQUFLLElBQVcsT0FBUEEsUUFBTyxTQUFPO3dDQUFHO3dDQUFFQyxTQUFTLEtBQUssR0FBUSxPQUFMQSxRQUFTO3dDQUFHO3dDQUFFQyxhQUFhLEtBQUssS0FBYyxPQUFUQSxZQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTTNILDhEQUFDSztnQkFBSUUsT0FBTztvQkFBQ0csU0FBUztvQkFBUWUsZUFBZTtvQkFBVUMsZ0JBQWdCO2dCQUFlOzBCQUNsRiw0RUFBQ3JCO29CQUFJQyxXQUFVOzhCQUNWSixjQUFjeUIsR0FBRyxDQUFDLFNBQUNDLFNBQVNDOzZDQUN6Qiw4REFBQ0M7NEJBQ0dDLFNBQVM7dUNBQU0zQixhQUFhd0I7OzRCQUFzQkMsT0FBT0E7NEJBQ3pEMUIsV0FBV0E7NEJBQVd5QixTQUFTQTsyQkFEWUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkUsRUFBQztLQWhEWWpDO0FBeURiLElBQU1vQyxRQUFRO0FBRWQsSUFBTUYsVUFBa0M7UUFBR0YsZ0JBQUFBLFNBQVN6QixrQkFBQUEsV0FBVzRCLGdCQUFBQSxTQUFTRixjQUFBQTtJQUNwRSxxQkFDSSw4REFBQ0k7UUFDR0YsU0FBUzttQkFBTUE7O1FBQ2Z6QixXQUFVO1FBQ1ZDLE9BQU87WUFDSDJCLFlBQVkvQixjQUFjeUIsVUFBVSxTQUFTO1FBQ2pEO2tCQUVBLDRFQUFDTztZQUFFNUIsT0FBTztnQkFDTmMsT0FBT2xCLGNBQWN5QixVQUFVLFNBQVM7Z0JBQVFOLFVBQVM7Z0JBQUljLFlBQVc7WUFDNUU7c0JBQ0tSOzs7Ozs7Ozs7OztBQUlqQjtNQWhCTUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL0hlcm8udHN4P2MxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHBsYXllck5hbWU6IHN0cmluZ1xuICAgIHBpY1VybDogc3RyaW5nLFxuICAgIG51bWJlcjogc3RyaW5nLFxuICAgIHRlYW06IHN0cmluZyxcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxuICAgIHBpY2tlZEJ0bjogc3RyaW5nLFxuICAgIHNldFBpY2tlZEJ0bjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4sXG4gICAgYWxsUGlja2VkQnRuczogc3RyaW5nW11cbn1cbiAgXG5cbmV4cG9ydCBjb25zdCBIZXJvOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICAgIHBsYXllck5hbWUsIG51bWJlciwgdGVhbSwgcG9zaXRpb24sIHBpY1VybCwgYWxsUGlja2VkQnRucywgcGlja2VkQnRuLCBzZXRQaWNrZWRCdG5cbn0pID0+IHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclBhZ2VIZXJvQ29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicyMCUnLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonZmxleC1lbmQnfX0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyUGFnZVBmcEhlYWRlcnNcIj5cbiAgICAgICAgICAgICAgICB7LyogUGxheWVyIFBpYyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclBhZ2VQaWNcIj5cbiAgICAgICAgICAgICAgICAgICAge3BpY1VybCAhPT0gXCJcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BpY1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTUwcHgnLCBoZWlnaHQ6ICcxMTBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YFBpYyBvZiAke3BsYXllck5hbWV9YH0gd2lkdGg9ezE1MH0gaGVpZ2h0PXsxMTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjgwJVwiIGhlaWdodD1cIjgwJVwiIHZpZXdCb3g9XCIwIDAgOCA4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMxRDFEMURcIiBkPVwiTTQgMEMyLjkgMCAyIDEuMTIgMiAyLjVTMi45IDUgNCA1czItMS4xMiAyLTIuNVM1LjEgMCA0IDBNMS45MSA1Qy44NSA1LjA1IDAgNS45MiAwIDd2MWg4VjdjMC0xLjA4LS44NC0xLjk1LTEuOTEtMmMtLjU0LjYxLTEuMjggMS0yLjA5IDFjLS44MSAwLTEuNTUtLjM5LTIuMDktMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFBsYXllciBuYW1lICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyUGFnZVBmcEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6JyNmZmYnLCBmb250U2l6ZTogJzJlbScsIG1hcmdpbjogMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3BsYXllck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOicjY2NjOWM5JywgZm9udFNpemU6ICcxZW0nfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bnVtYmVyICE9PSBcIlwiID8gYCMke251bWJlcn0gIC1gIDogXCJcIn0ge3RlYW0gIT09IFwiXCIgPyBgJHt0ZWFtfWAgOiBcIlwifSB7cG9zaXRpb24gIT09IFwiXCIgPyBgLSAke3Bvc2l0aW9ufWAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclBhZ2VzY3JvbGxhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2FsbFBpY2tlZEJ0bnMubWFwKChidG5UZXh0LCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0QnRuIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGlja2VkQnRuKGJ0blRleHQpfSBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrZWRCdG49e3BpY2tlZEJ0bn0gYnRuVGV4dD17YnRuVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG59XG5cbnR5cGUgU3RhdEJ0blByb3BzID0ge1xuICAgIGJ0blRleHQ6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIHBpY2tlZEJ0bjpzdHJpbmcsXG4gICAgb25DbGljazogKCkgPT4gdm9pZFxufVxuICBcbmNvbnN0IGJsYWNrID0gXCIjMWYyMDJkXCI7XG5cbmNvbnN0IFN0YXRCdG46IFJlYWN0LkZDPFN0YXRCdG5Qcm9wcz4gPSAoeyBidG5UZXh0LCBwaWNrZWRCdG4sIG9uQ2xpY2ssIGluZGV4IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygpfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXllclBhZ2VTdGF0QnRuXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcGlja2VkQnRuID09PSBidG5UZXh0ID8gJyNmZmYnIDogJ2JsYWNrJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IHBpY2tlZEJ0biA9PT0gYnRuVGV4dCA/ICcjMDAwJyA6ICcjZmZmJywgZm9udFNpemU6MTIsIGZvbnRXZWlnaHQ6J2JvbGQnXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICB7YnRuVGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkhlcm8iLCJwbGF5ZXJOYW1lIiwibnVtYmVyIiwidGVhbSIsInBvc2l0aW9uIiwicGljVXJsIiwiYWxsUGlja2VkQnRucyIsInBpY2tlZEJ0biIsInNldFBpY2tlZEJ0biIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInNyYyIsImFsdCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJmaWxsIiwiZCIsImgxIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpbiIsImgyIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibWFwIiwiYnRuVGV4dCIsImluZGV4IiwiU3RhdEJ0biIsIm9uQ2xpY2siLCJibGFjayIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJwIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player/Hero.tsx\n"));

/***/ })

});
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

/***/ "./src/pages/player/[paramLeague]/[paramPlayer]/index.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/player/[paramLeague]/[paramPlayer]/index.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metadate: function() { return /* binding */ metadate; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_destructuring_empty */ \"./node_modules/@swc/helpers/esm/_object_destructuring_empty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Player_PlayerPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Player/PlayerPage */ \"./src/components/Player/PlayerPage.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar metadate = {\n    title: \"Player Stats Page\"\n};\n/*\r\n    This page is in the url form of /WNBA/Caitlyn_clark\r\n\r\n    The name has to be perfect or else it doesn't work\r\n*/ var Player = function(param) {\n    var ref = (0,_swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_5__._)(param);\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _router_query = router.query, paramPlayer = _router_query.paramPlayer, paramLeague = _router_query.paramLeague;\n    if (paramLeague) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: paramPlayer ? \"\".concat(paramPlayer.split(\"_\").join(\" \"), \" | Sports Stats\") : \"Player Stats Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: paramPlayer ? \"Check out the latest stats for \".concat(paramPlayer.split(\"_\").join(\" \")) : \"Player Stats Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"WNBA, fantasy, rebounds, points, assists, steals, blocks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Player_PlayerPage__WEBPACK_IMPORTED_MODULE_4__.PlayerPage, {\n                playerName: paramPlayer,\n                league: paramLeague\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"100vh\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            display: \"flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_6__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 150,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\pages\\\\player\\\\[paramLeague]\\\\[paramPlayer]\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxheWVyL1twYXJhbUxlYWd1ZV0vW3BhcmFtUGxheWVyXS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNWO0FBQ0k7QUFHZjtBQUt5QztBQU8vRCxJQUFNSyxXQUFXO0lBQ3BCQyxPQUFPO0FBQ1gsRUFBQztBQUVEOzs7O0FBSUEsR0FDQSxJQUFNQyxTQUEwQjtRQUFDOztJQUM3QixJQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsSUFBcUNPLGdCQUFBQSxPQUFPQyxLQUFLLEVBQXpDQyxjQUE2QkYsY0FBN0JFLGFBQWFDLGNBQWdCSCxjQUFoQkc7SUFFckIsSUFBR0EsYUFBYSxxQkFDWjs7MEJBRUEsOERBQUNSLGtEQUFJQTs7a0NBQ0QsOERBQUNHO2tDQUFPSSxjQUFjLEdBQWdELE9BQTdDLFlBQXdCRSxLQUFLLENBQUMsS0FBS0MsSUFBSSxDQUFDLE1BQUsscUJBQW1COzs7Ozs7a0NBQ3pGLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBU04sY0FBYyxrQ0FBK0UsT0FBN0MsWUFBd0JFLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUMsUUFBUzs7Ozs7O2tDQUNuSSw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVU7Ozs7Ozs7Ozs7OzswQkFPcEMsOERBQUNaLHFFQUFVQTtnQkFDUGEsWUFBWVA7Z0JBQ1pRLFFBQVFQOzs7Ozs7OztJQU1oQixxQkFDSSw4REFBQ1E7UUFBSUMsT0FBTztZQUNSQyxPQUFNO1lBQVFDLFdBQVU7WUFBU0MsZ0JBQWU7WUFBVUMsWUFBVztZQUNyRUMsU0FBUTtRQUNaO2tCQUNJLDRFQUFDdkIsc0RBQVVBO1lBQ1B3QixPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTTtZQUNOQyxjQUFXO1lBQ1hDLGVBQVk7Ozs7Ozs7Ozs7O0FBSTVCO0dBdkNNdkI7O1FBQ2FOLGtEQUFTQTs7O0tBRHRCTTtBQXlDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGxheWVyL1twYXJhbUxlYWd1ZV0vW3BhcmFtUGxheWVyXS9pbmRleC50c3g/MWJiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XHJcbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9QbGF5ZXIvQ29tcG9uZW5ldHMvTm90Rm91bmQnO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vQ29udGV4dC9zdG9yZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IExlYWd1ZVBsYXllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUGxheWVyL0xlYWd1ZS9MZWFndWVQbGF5ZXInO1xyXG5pbXBvcnQgeyBXTkJBUGxheWVyUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUGxheWVyL1dOQkEvV05CQVBsYXllcic7XHJcbmltcG9ydCB7IFZhbFBsYXllclBhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL1BsYXllci9WYWxvcmFudC9WYWxvcmFudFBsYXllcic7XHJcbmltcG9ydCB7IFJhaW5ib3dQbGF5ZXJQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9QbGF5ZXIvUmFpbmJvdy9SYWluYm93UGxheWVyJztcclxuaW1wb3J0IHsgUGxheWVyUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllclBhZ2UnO1xyXG5pbXBvcnQgeyBQR2FtZSB9IGZyb20gJy4uLy4uLy4uLy4uL0NvbnRleHQvUGxheWVyVHlwZXMnO1xyXG5cclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgLy8gYWxsR2FtZXNMb2FkZWQ6IHtsZWFndWU6IHN0cmluZywgbG9hZGVkOiBib29sZWFufVtdXHJcbiAgICAvLyBzZXRBbGxHYW1lc0xvYWRlZDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248e2xlYWd1ZTogc3RyaW5nLCBsb2FkZWQ6IGJvb2xlYW59W10+PlxyXG59XHJcbmV4cG9ydCBjb25zdCBtZXRhZGF0ZSA9IHtcclxuICAgIHRpdGxlOiAnUGxheWVyIFN0YXRzIFBhZ2UnXHJcbn1cclxuXHJcbi8qXHJcbiAgICBUaGlzIHBhZ2UgaXMgaW4gdGhlIHVybCBmb3JtIG9mIC9XTkJBL0NhaXRseW5fY2xhcmtcclxuXHJcbiAgICBUaGUgbmFtZSBoYXMgdG8gYmUgcGVyZmVjdCBvciBlbHNlIGl0IGRvZXNuJ3Qgd29ya1xyXG4qL1xyXG5jb25zdCBQbGF5ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHBhcmFtUGxheWVyLCBwYXJhbUxlYWd1ZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGlmKHBhcmFtTGVhZ3VlKSByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3BhcmFtUGxheWVyID8gYCR7KHBhcmFtUGxheWVyIGFzIHN0cmluZykuc3BsaXQoJ18nKS5qb2luKCcgJyl9IHwgU3BvcnRzIFN0YXRzYCA6ICdQbGF5ZXIgU3RhdHMgUGFnZSd9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cGFyYW1QbGF5ZXIgPyBgQ2hlY2sgb3V0IHRoZSBsYXRlc3Qgc3RhdHMgZm9yICR7KHBhcmFtUGxheWVyIGFzIHN0cmluZykuc3BsaXQoJ18nKS5qb2luKCcgJyl9YCA6ICdQbGF5ZXIgU3RhdHMgUGFnZSd9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2BXTkJBLCBmYW50YXN5LCByZWJvdW5kcywgcG9pbnRzLCBhc3Npc3RzLCBzdGVhbHMsIGJsb2Nrc2B9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICB7LyogeyhwYXJhbUxlYWd1ZSBhcyBzdHJpbmcpLnRvTG93ZXJDYXNlKCkgPT09IFwid25iYVwiICYmIDxXTkJBUGxheWVyUGFnZSAvPn1cclxuICAgICAgICB7KHBhcmFtTGVhZ3VlIGFzIHN0cmluZykudG9Mb3dlckNhc2UoKSA9PT0gXCJ2YWxvcmFudFwiICYmIDxWYWxQbGF5ZXJQYWdlIC8+fVxyXG4gICAgICAgIHsocGFyYW1MZWFndWUgYXMgc3RyaW5nKT8udG9Mb3dlckNhc2UoKSA9PT0gXCJsb2xcIiAmJiA8TGVhZ3VlUGxheWVyIC8+fVxyXG4gICAgICAgIHsocGFyYW1MZWFndWUgYXMgc3RyaW5nKT8udG9Mb3dlckNhc2UoKSA9PT0gXCJyYWluYm93XCIgJiYgPFJhaW5ib3dQbGF5ZXJQYWdlIC8+fSAqL31cclxuICAgICAgICA8UGxheWVyUGFnZSBcclxuICAgICAgICAgICAgcGxheWVyTmFtZT17cGFyYW1QbGF5ZXIgYXMgc3RyaW5nfSBcclxuICAgICAgICAgICAgbGVhZ3VlPXtwYXJhbUxlYWd1ZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOicxMDAlJywgbWluSGVpZ2h0OicxMDB2aCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4J1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8Q2xpcExvYWRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjMDAwJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzaXplPXsxNTB9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZGluZyBTcGlubmVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkNsaXBMb2FkZXIiLCJIZWFkIiwiUGxheWVyUGFnZSIsIm1ldGFkYXRlIiwidGl0bGUiLCJQbGF5ZXIiLCJyb3V0ZXIiLCJxdWVyeSIsInBhcmFtUGxheWVyIiwicGFyYW1MZWFndWUiLCJzcGxpdCIsImpvaW4iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwbGF5ZXJOYW1lIiwibGVhZ3VlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsIm1pbkhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJjb2xvciIsImxvYWRpbmciLCJzaXplIiwiYXJpYS1sYWJlbCIsImRhdGEtdGVzdGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/player/[paramLeague]/[paramPlayer]/index.tsx\n"));

/***/ })

});
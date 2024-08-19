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

/***/ "./src/components/Nav/SearchBar/DropDown/SportDropDown.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Nav/SearchBar/DropDown/SportDropDown.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SportDropDown: function() { return /* binding */ SportDropDown; },\n/* harmony export */   SportSquare: function() { return /* binding */ SportSquare; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SportBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SportBtn */ \"./src/components/Nav/SearchBar/DropDown/SportBtn.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar SportDropDown = function(param) {\n    var input = param.input, sport = param.sport, setSport = param.setSport, dropDown = param.dropDown, setDropDown = param.setDropDown;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), similarSport = _useState[0], setSimilarSport = _useState[1];\n    var handleClickOutside = function(event) {\n        var target = event.target;\n        if (!target.closest(\".sport-dropdown\") && dropDown === \"sports\") {\n            setDropDown(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.addEventListener(\"click\", handleClickOutside);\n        return function() {\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, [\n        dropDown\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"1px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            display: \"flex\",\n            alignItems: \"center\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: _SportBtn__WEBPACK_IMPORTED_MODULE_2__.currentAllSports.map(function(option, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SportSquare, {\n                selected: option === sport,\n                setSport: setSport,\n                sport: option,\n                index: index,\n                totalLen: _SportBtn__WEBPACK_IMPORTED_MODULE_2__.currentAllSports.length\n            }, index, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, _this);\n};\n_s(SportDropDown, \"gtaGMqdLUaPyvcDoPzYUqPdRyDs=\");\n_c = SportDropDown;\nvar SportSquare = function(param) {\n    var selected = param.selected, sport = param.sport, setSport = param.setSport, index = param.index, totalLen = param.totalLen;\n    var handleClick = function() {\n        setSport(sport);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sport-square \".concat(selected ? \"selected\" : \"\"),\n        style: {\n            // marginLeft: index === 0 ? \"0px\" : \"15px\",\n            marginLeft: \"15px\",\n            marginRight: \"15px\"\n        },\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SportBtn__WEBPACK_IMPORTED_MODULE_2__.LeagueIcon, {\n                sport: sport,\n                size: \"40px\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"sport-name\",\n                children: sport\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = SportSquare;\nvar _c, _c1;\n$RefreshReg$(_c, \"SportDropDown\");\n$RefreshReg$(_c1, \"SportSquare\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1Nwb3J0RHJvcERvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUNsQjtBQVVuRCxJQUFNSyxnQkFBaUM7UUFBRUMsY0FBQUEsT0FBT0MsY0FBQUEsT0FBT0MsaUJBQUFBLFVBQVVDLGlCQUFBQSxVQUFVQyxvQkFBQUE7O0lBQzlFLElBQXdDUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVcsRUFBRSxPQUF0RFMsZUFBaUNULGNBQW5CVSxrQkFBbUJWO0lBRXhDLElBQU1XLHFCQUFxQixTQUFDQztRQUN4QixJQUFNQyxTQUFTRCxNQUFNQyxNQUFNO1FBQzNCLElBQUksQ0FBQ0EsT0FBT0MsT0FBTyxDQUFDLHNCQUFzQlAsYUFBYSxVQUFVO1lBQy9EQyxZQUFZO1FBQ2Q7SUFDSjtJQUNBVCxnREFBU0EsQ0FBQztRQUNOZ0IsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0w7UUFDbkMsT0FBTztZQUNMSSxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTTjtRQUN4QztJQUNKLEdBQUc7UUFBQ0o7S0FBUztJQUViLHFCQUNJLDhEQUFDVztRQUFJQyxPQUFPO1lBQ1JDLE9BQU87WUFBUUMsV0FBVTtZQUFPQyxZQUFXO1lBQVdDLFVBQVM7WUFDL0RDLEtBQUs7WUFBUUMsTUFBTTtZQUFHQyx3QkFBd0I7WUFBSUMseUJBQXlCO1lBQzNFQyxZQUFZO1lBQW1CQyxTQUFRO1lBQVFDLFlBQVc7WUFDMURDLGFBQWE7WUFBbUJDLGNBQWM7UUFDbEQ7a0JBQ0svQix1REFBZ0JBLENBQUNnQyxHQUFHLENBQUMsU0FBQ0MsUUFBUUM7aUNBQzNCLDhEQUFDQztnQkFDR0MsVUFBVUgsV0FBVzdCO2dCQUNyQkMsVUFBVUE7Z0JBQVVELE9BQU82QjtnQkFDM0JDLE9BQU9BO2dCQUFPRyxVQUFVckMsdURBQWdCQSxDQUFDc0MsTUFBTTtlQURQSjs7Ozs7Ozs7Ozs7QUFNNUQsRUFBQztHQWhDWWhDO0tBQUFBO0FBeUNOLElBQU1pQyxjQUFxQztRQUFHQyxpQkFBQUEsVUFBVWhDLGNBQUFBLE9BQU9DLGlCQUFBQSxVQUFVNkIsY0FBQUEsT0FBT0csaUJBQUFBO0lBQ25GLElBQU1FLGNBQWM7UUFDaEJsQyxTQUFTRDtJQUNiO0lBQ0EscUJBQ0ksOERBQUNhO1FBQ0d1QixXQUFXLGdCQUEyQyxPQUEzQkosV0FBVyxhQUFhO1FBQ25EbEIsT0FBTztZQUNILDRDQUE0QztZQUM1Q3VCLFlBQVk7WUFDWkMsYUFBYTtRQUNqQjtRQUNBQyxTQUFTSjs7MEJBRVQsOERBQUN0QyxpREFBVUE7Z0JBQUNHLE9BQU9BO2dCQUFPd0MsTUFBSzs7Ozs7OzBCQUMvQiw4REFBQ0M7Z0JBQUdMLFdBQVU7MEJBQ1RwQzs7Ozs7Ozs7Ozs7O0FBSWpCLEVBQUU7TUFwQlcrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1Nwb3J0RHJvcERvd24udHN4PzA2MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3VycmVudEFsbFNwb3J0cywgTGVhZ3VlSWNvbiB9IGZyb20gJy4vU3BvcnRCdG4nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGlucHV0OiBzdHJpbmcsXG4gICAgc3BvcnQ6IHN0cmluZyxcbiAgICBzZXRTcG9ydDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj5cbiAgICBkcm9wRG93bjogc3RyaW5nLFxuICAgIHNldERyb3BEb3duOkRpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XG59XG5cbmV4cG9ydCBjb25zdCBTcG9ydERyb3BEb3duOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2lucHV0LCBzcG9ydCwgc2V0U3BvcnQsIGRyb3BEb3duLCBzZXREcm9wRG93bn0pID0+IHtcbiAgICBjb25zdCBbc2ltaWxhclNwb3J0LCBzZXRTaW1pbGFyU3BvcnRdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJy5zcG9ydC1kcm9wZG93bicpICYmIGRyb3BEb3duID09PSBcInNwb3J0c1wiKSB7XG4gICAgICAgICAgc2V0RHJvcERvd24oXCJcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH07XG4gICAgfSwgW2Ryb3BEb3duXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtaW5IZWlnaHQ6JzFweCcsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgIH19PlxuICAgICAgICAgICAge2N1cnJlbnRBbGxTcG9ydHMubWFwKChvcHRpb24sIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICA8U3BvcnRTcXVhcmUgXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb24gPT09IHNwb3J0fSBcbiAgICAgICAgICAgICAgICAgICAgc2V0U3BvcnQ9e3NldFNwb3J0fSBzcG9ydD17b3B0aW9ufSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IHRvdGFsTGVuPXtjdXJyZW50QWxsU3BvcnRzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgU3F1YXJlUHJvcHMge1xuICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICAgIHNwb3J0OiBzdHJpbmcsXG4gICAgc2V0U3BvcnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+XG4gICAgaW5kZXg6IG51bWJlcixcbiAgICB0b3RhbExlbjogbnVtYmVyXG59XG5leHBvcnQgY29uc3QgU3BvcnRTcXVhcmU6IFJlYWN0LkZDPFNxdWFyZVByb3BzPiA9ICh7IHNlbGVjdGVkLCBzcG9ydCwgc2V0U3BvcnQsIGluZGV4LCB0b3RhbExlbiB9KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFNwb3J0KHNwb3J0KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwb3J0LXNxdWFyZSAke3NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC8vIG1hcmdpbkxlZnQ6IGluZGV4ID09PSAwID8gXCIwcHhcIiA6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgICA8TGVhZ3VlSWNvbiBzcG9ydD17c3BvcnR9IHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzcG9ydC1uYW1lXCI+XG4gICAgICAgICAgICAgICAge3Nwb3J0fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3VycmVudEFsbFNwb3J0cyIsIkxlYWd1ZUljb24iLCJTcG9ydERyb3BEb3duIiwiaW5wdXQiLCJzcG9ydCIsInNldFNwb3J0IiwiZHJvcERvd24iLCJzZXREcm9wRG93biIsInNpbWlsYXJTcG9ydCIsInNldFNpbWlsYXJTcG9ydCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJTcG9ydFNxdWFyZSIsInNlbGVjdGVkIiwidG90YWxMZW4iLCJsZW5ndGgiLCJoYW5kbGVDbGljayIsImNsYXNzTmFtZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJzaXplIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav/SearchBar/DropDown/SportDropDown.tsx\n"));

/***/ })

});
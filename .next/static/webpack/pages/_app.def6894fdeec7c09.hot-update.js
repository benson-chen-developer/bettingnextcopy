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

/***/ "./src/components/Player/NotFound.tsx":
/*!********************************************!*\
  !*** ./src/components/Player/NotFound.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotFound: function() { return /* binding */ NotFound; },\n/* harmony export */   findSimilarLastNames: function() { return /* binding */ findSimilarLastNames; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n/*\n    Don't worry what this does just know it is used to find similar names to the one\n    the user searched\n*/ var levenshteinDistance = function(a, b) {\n    var matrix = [];\n    for(var i = 0; i <= b.length; i++){\n        matrix[i] = [\n            i\n        ];\n    }\n    for(var j = 0; j <= a.length; j++){\n        matrix[0][j] = j;\n    }\n    for(var i1 = 1; i1 <= b.length; i1++){\n        for(var j1 = 1; j1 <= a.length; j1++){\n            if (b[i1 - 1] === a[j1 - 1]) {\n                matrix[i1][j1] = matrix[i1 - 1][j1 - 1];\n            } else {\n                matrix[i1][j1] = Math.min(matrix[i1 - 1][j1 - 1] + 1, matrix[i1][j1 - 1] + 1, matrix[i1 - 1][j1] + 1 // deletion\n                );\n            }\n        }\n    }\n    return matrix[b.length][a.length];\n};\n/*\n    Returns all the player names that are similar to the one we searched\n*/ var findSimilarLastNames = function(players, input, maxAllowedDistance) {\n    var trimmedInput = input.trim();\n    var firstName = \"\";\n    var lastName = \"\";\n    var foundPlayers = [];\n    console.log(trimmedInput.split(\" \"));\n    /* This means if the user has used a space while typing */ if (trimmedInput.split(\" \").length > 0) {\n        console.log(\"2x\");\n        firstName = trimmedInput.split(\" \")[0];\n        lastName = trimmedInput.split(\" \")[1];\n        foundPlayers = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(foundPlayers).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(players.filter(function(player) {\n            return levenshteinDistance(player.firstName, firstName) <= maxAllowedDistance;\n        })));\n        foundPlayers = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(foundPlayers).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(players.filter(function(player) {\n            return levenshteinDistance(player.lastName, lastName) <= maxAllowedDistance;\n        })));\n    } else {\n        console.log(\"1x\");\n        foundPlayers = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(foundPlayers).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(players.filter(function(player) {\n            return levenshteinDistance(player.firstName, trimmedInput) <= maxAllowedDistance;\n        })));\n        foundPlayers = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(foundPlayers).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_5__._)(players.filter(function(player) {\n            return levenshteinDistance(player.lastName, trimmedInput) <= maxAllowedDistance;\n        })));\n        firstName = trimmedInput;\n    }\n    console.log(firstName);\n    console.log(lastName);\n    return foundPlayers;\n};\nvar NotFound = function(param) {\n    var parsedParamName = param.parsedParamName;\n    _s();\n    var players = (0,_Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)().players;\n    var similarPlayers = findSimilarLastNames(players, parsedParamName, 2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"100vh\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        children: similarPlayers.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: parsedParamName\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {},\n                    children: \"Player Doesn't Exist or Has No Games\"\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                flexDirection: \"column\",\n                width: \"100%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Did You Mean\"\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\"\n                    },\n                    children: similarPlayers.map(function(player, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerBox, {\n                            player: player\n                        }, index, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n            lineNumber: 84,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, _this);\n};\n_s(NotFound, \"4zTIQRhQkTHKaDwkME+1AYH/YHg=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = NotFound;\nvar PlayerBox = function(param) {\n    var player = param.player;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/player/WNBA/\".concat(player.firstName[0], \"_\").concat(player.lastName),\n        style: {\n            textDecoration: \"none\",\n            color: \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"200px\",\n                height: \"100px\",\n                border: \"2px solid #1E1E1E\",\n                borderRadius: 20,\n                display: \"flex\",\n                alignItems: \"center\",\n                margin: \"20px\",\n                cursor: \"pointer\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                    style: {\n                        width: \"50%\",\n                        height: \"75%\"\n                    },\n                    alt: \"Pic of \".concat(player.firstName, \" \").concat(player.lastName),\n                    width: 90,\n                    height: 75\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        player.firstName,\n                        \" \",\n                        player.lastName\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n            lineNumber: 105,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Player/NotFound.tsx\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = PlayerBox;\nvar _c, _c1;\n$RefreshReg$(_c, \"NotFound\");\n$RefreshReg$(_c1, \"PlayerBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLLHVEQUFvRSxPQUFiekIsT0FBTzBCLEtBQUssRUFBQztvQkFDekVyQixPQUFPO3dCQUFDQyxPQUFPO3dCQUFPYyxRQUFRO29CQUFLO29CQUNuQ08sS0FBSyxVQUE4QjNCLE9BQXBCQSxPQUFPUCxTQUFTLEVBQUMsS0FBbUIsT0FBaEJPLE9BQU9OLFFBQVE7b0JBQUlZLE9BQU87b0JBQUljLFFBQVE7Ozs7Ozs4QkFFN0UsOERBQUNROzt3QkFBRzVCLE9BQU9QLFNBQVM7d0JBQUM7d0JBQUVPLE9BQU9OLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RDtNQWpCTXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9Ob3RGb3VuZC50c3g/NzNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBQbGF5ZXJUeXBlLCB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vQ29udGV4dC9zdG9yZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgUHJvcHN7XG4gICAgcGFyc2VkUGFyYW1OYW1lOiBzdHJpbmdcbn1cblxuLypcbiAgICBEb24ndCB3b3JyeSB3aGF0IHRoaXMgZG9lcyBqdXN0IGtub3cgaXQgaXMgdXNlZCB0byBmaW5kIHNpbWlsYXIgbmFtZXMgdG8gdGhlIG9uZVxuICAgIHRoZSB1c2VyIHNlYXJjaGVkXG4qL1xuY29uc3QgbGV2ZW5zaHRlaW5EaXN0YW5jZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgbWF0cml4ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xuICAgICAgbWF0cml4W2ldID0gW2ldO1xuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICBtYXRyaXhbMF1bal0gPSBqO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChiW2kgLSAxXSA9PT0gYVtqIC0gMV0pIHtcbiAgICAgICAgICBtYXRyaXhbaV1bal0gPSBtYXRyaXhbaSAtIDFdW2ogLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXhbaV1bal0gPSBNYXRoLm1pbihcbiAgICAgICAgICAgIG1hdHJpeFtpIC0gMV1baiAtIDFdICsgMSwgLy8gc3Vic3RpdHV0aW9uXG4gICAgICAgICAgICBtYXRyaXhbaV1baiAtIDFdICsgMSwgLy8gaW5zZXJ0aW9uXG4gICAgICAgICAgICBtYXRyaXhbaSAtIDFdW2pdICsgMSAvLyBkZWxldGlvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeFtiLmxlbmd0aF1bYS5sZW5ndGhdO1xufTtcblxuLypcbiAgICBSZXR1cm5zIGFsbCB0aGUgcGxheWVyIG5hbWVzIHRoYXQgYXJlIHNpbWlsYXIgdG8gdGhlIG9uZSB3ZSBzZWFyY2hlZFxuKi9cbmV4cG9ydCBjb25zdCBmaW5kU2ltaWxhckxhc3ROYW1lcyA9IChwbGF5ZXJzOiBQbGF5ZXJUeXBlW10sIGlucHV0OiBzdHJpbmcsIG1heEFsbG93ZWREaXN0YW5jZTogbnVtYmVyKTogUGxheWVyVHlwZVtdID0+IHtcbiAgICBjb25zdCB0cmltbWVkSW5wdXQgPSBpbnB1dC50cmltKCk7XG5cbiAgICBsZXQgZmlyc3ROYW1lID0gJyc7IGxldCBsYXN0TmFtZSA9ICcnOyBsZXQgZm91bmRQbGF5ZXJzOiBQbGF5ZXJUeXBlW10gPSBbXTtcbiAgICBjb25zb2xlLmxvZyh0cmltbWVkSW5wdXQuc3BsaXQoJyAnKSlcblxuICAgIC8qIFRoaXMgbWVhbnMgaWYgdGhlIHVzZXIgaGFzIHVzZWQgYSBzcGFjZSB3aGlsZSB0eXBpbmcgKi9cbiAgICBpZih0cmltbWVkSW5wdXQuc3BsaXQoJyAnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgY29uc29sZS5sb2coXCIyeFwiKVxuICAgICAgICBmaXJzdE5hbWUgPSB0cmltbWVkSW5wdXQuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgbGFzdE5hbWUgPSB0cmltbWVkSW5wdXQuc3BsaXQoJyAnKVsxXTtcblxuICAgICAgICBmb3VuZFBsYXllcnMgPSBbLi4uZm91bmRQbGF5ZXJzLCAuLi5wbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gbGV2ZW5zaHRlaW5EaXN0YW5jZShwbGF5ZXIuZmlyc3ROYW1lLCBmaXJzdE5hbWUpIDw9IG1heEFsbG93ZWREaXN0YW5jZSldXG4gICAgICAgIGZvdW5kUGxheWVycyA9IFsuLi5mb3VuZFBsYXllcnMsIC4uLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBsZXZlbnNodGVpbkRpc3RhbmNlKHBsYXllci5sYXN0TmFtZSwgbGFzdE5hbWUpIDw9IG1heEFsbG93ZWREaXN0YW5jZSldXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIxeFwiKVxuICAgICAgICBmb3VuZFBsYXllcnMgPSBbLi4uZm91bmRQbGF5ZXJzLCAuLi5wbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gbGV2ZW5zaHRlaW5EaXN0YW5jZShwbGF5ZXIuZmlyc3ROYW1lLCB0cmltbWVkSW5wdXQpIDw9IG1heEFsbG93ZWREaXN0YW5jZSldXG4gICAgICAgIGZvdW5kUGxheWVycyA9IFsuLi5mb3VuZFBsYXllcnMsIC4uLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiBsZXZlbnNodGVpbkRpc3RhbmNlKHBsYXllci5sYXN0TmFtZSwgdHJpbW1lZElucHV0KSA8PSBtYXhBbGxvd2VkRGlzdGFuY2UpXVxuICAgICAgICBmaXJzdE5hbWUgPSB0cmltbWVkSW5wdXQ7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGZpcnN0TmFtZSlcbiAgICBjb25zb2xlLmxvZyhsYXN0TmFtZSlcblxuICAgIHJldHVybiBmb3VuZFBsYXllcnM7XG59O1xuXG5leHBvcnQgY29uc3QgTm90Rm91bmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7cGFyc2VkUGFyYW1OYW1lfSkgPT4ge1xuICAgIGNvbnN0IHtwbGF5ZXJzfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNpbWlsYXJQbGF5ZXJzID0gZmluZFNpbWlsYXJMYXN0TmFtZXMocGxheWVycywgcGFyc2VkUGFyYW1OYW1lLCAyKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBtaW5IZWlnaHQ6JzEwMHZoJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICAgICAgICBkaXNwbGF5OidmbGV4JywgZmxleERpcmVjdGlvbjonY29sdW1uJ1xuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtzaW1pbGFyUGxheWVycy5sZW5ndGggPT09IDAgP1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57cGFyc2VkUGFyYW1OYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e319PlBsYXllciBEb2Vzbid0IEV4aXN0IG9yIEhhcyBObyBHYW1lczwvaDE+XG4gICAgICAgICAgICAgICAgPC8+IFxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCB3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRpZCBZb3UgTWVhbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaW1pbGFyUGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJCb3ggcGxheWVyPXtwbGF5ZXJ9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbnR5cGUgUGxheWVyQm94UHJvcHMgPSB7XG4gICAgcGxheWVyOiBQbGF5ZXJUeXBlO1xufTtcbiAgXG5jb25zdCBQbGF5ZXJCb3g6IFJlYWN0LkZDPFBsYXllckJveFByb3BzPiA9ICh7IHBsYXllciB9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8TGluayBocmVmPXtgL3BsYXllci9XTkJBLyR7cGxheWVyLmZpcnN0TmFtZVswXX1fJHtwbGF5ZXIubGFzdE5hbWV9YH0gc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjonYmxhY2snfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6JzIwMHB4JywgaGVpZ2h0OicxMDBweCcsIGJvcmRlcjonMnB4IHNvbGlkICMxRTFFMUUnLCBib3JkZXJSYWRpdXM6MjAsXG4gICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbjonMjBweCcsXG4gICAgICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vY2RuLnduYmEuY29tL2hlYWRzaG90cy93bmJhL2xhdGVzdC8xMDQweDc2MC8ke3BsYXllci5waWNJZH0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzUwJScsIGhlaWdodDogJzc1JSd9fVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2BQaWMgb2YgJHtwbGF5ZXIuZmlyc3ROYW1lfSAke3BsYXllci5sYXN0TmFtZX1gfSB3aWR0aD17OTB9IGhlaWdodD17NzV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD57cGxheWVyLmZpcnN0TmFtZX0ge3BsYXllci5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInVzZUdsb2JhbENvbnRleHQiLCJMaW5rIiwibGV2ZW5zaHRlaW5EaXN0YW5jZSIsImEiLCJiIiwibWF0cml4IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwibWluIiwiZmluZFNpbWlsYXJMYXN0TmFtZXMiLCJwbGF5ZXJzIiwiaW5wdXQiLCJtYXhBbGxvd2VkRGlzdGFuY2UiLCJ0cmltbWVkSW5wdXQiLCJ0cmltIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmb3VuZFBsYXllcnMiLCJjb25zb2xlIiwibG9nIiwic3BsaXQiLCJmaWx0ZXIiLCJwbGF5ZXIiLCJOb3RGb3VuZCIsInBhcnNlZFBhcmFtTmFtZSIsInNpbWlsYXJQbGF5ZXJzIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsIm1pbkhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaDEiLCJoMiIsIm1hcCIsImluZGV4IiwiUGxheWVyQm94IiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJoZWlnaHQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJjdXJzb3IiLCJzcmMiLCJwaWNJZCIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/NotFound.tsx\n"));

/***/ })

});
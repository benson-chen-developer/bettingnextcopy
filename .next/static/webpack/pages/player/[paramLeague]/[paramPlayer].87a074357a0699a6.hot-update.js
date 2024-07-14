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

/***/ "./src/functions/players.ts":
/*!**********************************!*\
  !*** ./src/functions/players.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emptyStats: function() { return /* binding */ emptyStats; },\n/* harmony export */   fillStats: function() { return /* binding */ fillStats; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n\nvar emptyStats = {\n    PTS: 0,\n    REB: 0,\n    AST: 0,\n    STL: 0,\n    BLK: 0,\n    TO: 0,\n    PF: 0,\n    FGM: 0,\n    FGA: 0,\n    \"3PM\": 0,\n    \"3PA\": 0,\n    FTM: 0,\n    FTA: 0,\n    FAN: 0\n};\nvar FantasyScoring = function(stat, amount) {\n    if (stat === \"PTS\") return 1 * amount;\n    else if (stat === \"REB\") return 1.2;\n    else if (stat === \"AST\") return 1.5;\n    else if (stat === \"STL\") return 3;\n    else if (stat === \"BLK\") return 3;\n    else if (stat === \"TO\") return -1;\n    else return 0;\n};\n/*\n    condition can be Q1, Q2, Q3, Q4, H1, H2, W\n\n    playerName should be in C. Clark format\n\n    if playerName is \"\" then just get all stats\n*/ var fillStats = function(playerName, condition, actions) {\n    var intialStats = (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_0__._)({}, emptyStats);\n    var didPlay = false;\n    actions.forEach(function(action) {\n        var _action_name;\n        /* This to see if the current action is what the player is looking for */ var conditionMet = false;\n        var playerConditionMet = false;\n        if (condition === \"1st Quarter\" && action.period === 1) conditionMet = true;\n        else if (condition === \"2nd Quarter\" && action.period === 2) conditionMet = true;\n        else if (condition === \"3rd Quarter\" && action.period === 3) conditionMet = true;\n        else if (condition === \"4th Quarter\" && action.period === 4) conditionMet = true;\n        else if (condition === \"1st Half\" && (action.period === 1 || action.period === 2)) conditionMet = true;\n        else if (condition === \"2nd Half\" && (action.period === 3 || action.period === 4)) conditionMet = true;\n        else if (condition === \"Whole Game\") conditionMet = true;\n        if (playerName.toLowerCase() === (action === null || action === void 0 ? void 0 : (_action_name = action.name) === null || _action_name === void 0 ? void 0 : _action_name.toLowerCase())) playerConditionMet = true;\n        else if (playerName === \"\") playerConditionMet = true;\n        if (conditionMet && playerConditionMet) {\n            didPlay = true;\n            intialStats[action.actionType] += action.amount;\n            intialStats[\"FAN\"] += FantasyScoring(action.actionType, action.amount);\n        }\n    });\n    //If did not play then we return -1 PTS so just don't show this game\n    if (!didPlay) intialStats[\"PTS\"] = -1;\n    return intialStats;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3BsYXllcnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCTyxJQUFNQSxhQUFhO0lBQ3RCLEtBQU87SUFBRyxLQUFPO0lBQUcsS0FBTTtJQUMxQixLQUFPO0lBQUcsS0FBTztJQUFHLElBQU07SUFBRyxJQUFNO0lBQ25DLEtBQVE7SUFBRyxLQUFPO0lBQ2xCLE9BQU87SUFBRyxPQUFPO0lBQ2pCLEtBQU87SUFBRyxLQUFPO0lBQ2pCLEtBQU87QUFDWCxFQUFDO0FBaUJELElBQU1DLGlCQUFpQixTQUFDQyxNQUFjQztJQUNsQyxJQUFHRCxTQUFTLE9BQU8sT0FBTyxJQUFFQztTQUN2QixJQUFHRCxTQUFTLE9BQU8sT0FBTztTQUMxQixJQUFHQSxTQUFTLE9BQU8sT0FBTztTQUMxQixJQUFHQSxTQUFTLE9BQU8sT0FBTztTQUMxQixJQUFHQSxTQUFTLE9BQU8sT0FBTztTQUMxQixJQUFHQSxTQUFTLE1BQU0sT0FBTyxDQUFDO1NBQzFCLE9BQU87QUFDaEI7QUFFQTs7Ozs7O0FBTUEsR0FDTyxJQUFNRSxZQUFZLFNBQUNDLFlBQW9CQyxXQUFtQkM7SUFDN0QsSUFBSUMsY0FBYyxrRUFBSVI7SUFDdEIsSUFBSVMsVUFBVTtJQUVkRixRQUFRRyxPQUFPLENBQUNDLFNBQUFBO1lBV29CQTtRQVZoQyx1RUFBdUUsR0FDdkUsSUFBSUMsZUFBZTtRQUFPLElBQUlDLHFCQUFxQjtRQUVuRCxJQUFHUCxjQUFjLGlCQUFpQkssT0FBT0csTUFBTSxLQUFLLEdBQUdGLGVBQWU7YUFDakUsSUFBR04sY0FBYyxpQkFBaUJLLE9BQU9HLE1BQU0sS0FBSyxHQUFHRixlQUFlO2FBQ3RFLElBQUdOLGNBQWMsaUJBQWlCSyxPQUFPRyxNQUFNLEtBQUssR0FBR0YsZUFBZTthQUN0RSxJQUFHTixjQUFjLGlCQUFpQkssT0FBT0csTUFBTSxLQUFLLEdBQUdGLGVBQWU7YUFDdEUsSUFBR04sY0FBYyxjQUFlSyxDQUFBQSxPQUFPRyxNQUFNLEtBQUssS0FBS0gsT0FBT0csTUFBTSxLQUFLLElBQUlGLGVBQWU7YUFDNUYsSUFBR04sY0FBYyxjQUFlSyxDQUFBQSxPQUFPRyxNQUFNLEtBQUssS0FBS0gsT0FBT0csTUFBTSxLQUFLLElBQUlGLGVBQWU7YUFDNUYsSUFBR04sY0FBYyxjQUFjTSxlQUFlO1FBQ25ELElBQUdQLFdBQVdVLFdBQVcsUUFBT0osbUJBQUFBLDhCQUFBQSxlQUFBQSxPQUFRSyxJQUFJLGNBQVpMLG1DQUFBQSxhQUFjSSxXQUFXLEtBQUlGLHFCQUFxQjthQUM3RSxJQUFHUixlQUFlLElBQUlRLHFCQUFxQjtRQUVoRCxJQUFHRCxnQkFBZ0JDLG9CQUFtQjtZQUNsQ0osVUFBVTtZQUNWRCxXQUFXLENBQUNHLE9BQU9NLFVBQVUsQ0FBQyxJQUFJTixPQUFPUixNQUFNO1lBQy9DSyxXQUFXLENBQUMsTUFBTSxJQUFJUCxlQUFlVSxPQUFPTSxVQUFVLEVBQUVOLE9BQU9SLE1BQU07UUFDekU7SUFDSjtJQUVBLG9FQUFvRTtJQUNwRSxJQUFHLENBQUNNLFNBQVNELFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUVuQyxPQUFPQTtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Z1bmN0aW9ucy9wbGF5ZXJzLnRzP2ZkM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQWN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHBlcmlvZDogbnVtYmVyLFxuICAgIGNsb2NrOiBzdHJpbmcsXG4gICAgdGVhbVRyaWNvZGU6IHN0cmluZyxcbiAgICBhY3Rpb25UeXBlOiBrZXlvZiBTdGF0cywgLy9zdHJpbmdcbiAgICBhbW91bnQ6IG51bWJlcixcbiAgICBwaWNJZDogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIFN0YXRzID0ge1xuICAgIFwiUFRTXCI6IG51bWJlciwgXCJSRUJcIjogbnVtYmVyLCBcIkFTVFwiOm51bWJlcixcbiAgICBcIlNUTFwiOiBudW1iZXIsIFwiQkxLXCI6IG51bWJlciwgXCJUT1wiOiBudW1iZXIsIFwiUEZcIjogbnVtYmVyLFxuICAgIFwiM1BNXCI6IG51bWJlciwgXCIzUEFcIjogbnVtYmVyLCBcbiAgICBcIkZHTVwiOiAgbnVtYmVyLCBcIkZHQVwiOiBudW1iZXIsXG4gICAgXCJGVEFcIjogbnVtYmVyLCBcIkZUTVwiOiBudW1iZXIsXG4gICAgXCJGQU5cIjogbnVtYmVyXG59XG5leHBvcnQgY29uc3QgZW1wdHlTdGF0cyA9IHtcbiAgICBcIlBUU1wiOiAwLCBcIlJFQlwiOiAwLCBcIkFTVFwiOjAsXG4gICAgXCJTVExcIjogMCwgXCJCTEtcIjogMCwgXCJUT1wiOiAwLCBcIlBGXCI6IDAsXG4gICAgXCJGR01cIjogIDAsIFwiRkdBXCI6IDAsXG4gICAgXCIzUE1cIjogMCwgXCIzUEFcIjogMCwgXG4gICAgXCJGVE1cIjogMCwgXCJGVEFcIjogMCxcbiAgICBcIkZBTlwiOiAwXG59XG5cbmV4cG9ydCB0eXBlIEdhbWUyID0ge1xuICAgIGRhdGU6IHN0cmluZyxcbiAgICB0ZWFtczogW3N0cmluZywgc3RyaW5nXSxcbiAgICBzdGF0czogU3RhdHMsXG4gICAgYWN0aW9uczogQWN0aW9uW10sXG4gICAgaWQ6IHN0cmluZ1xufVxuXG50eXBlIFRlYW0gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHN0YXRzOiBTdGF0cyxcbiAgICBwbGF5ZXJzOiBzdHJpbmdbXVxuICAgIGFjdGlvbnM6IEFjdGlvbltdXG59XG5cbmNvbnN0IEZhbnRhc3lTY29yaW5nID0gKHN0YXQ6IHN0cmluZywgYW1vdW50OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIGlmKHN0YXQgPT09IFwiUFRTXCIpIHJldHVybiAxKmFtb3VudDtcbiAgICBlbHNlIGlmKHN0YXQgPT09IFwiUkVCXCIpIHJldHVybiAxLjI7XG4gICAgZWxzZSBpZihzdGF0ID09PSBcIkFTVFwiKSByZXR1cm4gMS41O1xuICAgIGVsc2UgaWYoc3RhdCA9PT0gXCJTVExcIikgcmV0dXJuIDM7XG4gICAgZWxzZSBpZihzdGF0ID09PSBcIkJMS1wiKSByZXR1cm4gMztcbiAgICBlbHNlIGlmKHN0YXQgPT09IFwiVE9cIikgcmV0dXJuIC0xO1xuICAgIGVsc2UgcmV0dXJuIDA7XG59XG5cbi8qXG4gICAgY29uZGl0aW9uIGNhbiBiZSBRMSwgUTIsIFEzLCBRNCwgSDEsIEgyLCBXXG5cbiAgICBwbGF5ZXJOYW1lIHNob3VsZCBiZSBpbiBDLiBDbGFyayBmb3JtYXRcblxuICAgIGlmIHBsYXllck5hbWUgaXMgXCJcIiB0aGVuIGp1c3QgZ2V0IGFsbCBzdGF0c1xuKi9cbmV4cG9ydCBjb25zdCBmaWxsU3RhdHMgPSAocGxheWVyTmFtZTogc3RyaW5nLCBjb25kaXRpb246IHN0cmluZywgYWN0aW9uczogQWN0aW9uW10pOiBTdGF0cyA9PiB7XG4gICAgbGV0IGludGlhbFN0YXRzID0gey4uLmVtcHR5U3RhdHN9O1xuICAgIGxldCBkaWRQbGF5ID0gZmFsc2U7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgLyogVGhpcyB0byBzZWUgaWYgdGhlIGN1cnJlbnQgYWN0aW9uIGlzIHdoYXQgdGhlIHBsYXllciBpcyBsb29raW5nIGZvciAqL1xuICAgICAgICBsZXQgY29uZGl0aW9uTWV0ID0gZmFsc2U7IGxldCBwbGF5ZXJDb25kaXRpb25NZXQgPSBmYWxzZTtcblxuICAgICAgICBpZihjb25kaXRpb24gPT09IFwiMXN0IFF1YXJ0ZXJcIiAmJiBhY3Rpb24ucGVyaW9kID09PSAxKSBjb25kaXRpb25NZXQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKGNvbmRpdGlvbiA9PT0gXCIybmQgUXVhcnRlclwiICYmIGFjdGlvbi5wZXJpb2QgPT09IDIpIGNvbmRpdGlvbk1ldCA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYoY29uZGl0aW9uID09PSBcIjNyZCBRdWFydGVyXCIgJiYgYWN0aW9uLnBlcmlvZCA9PT0gMykgY29uZGl0aW9uTWV0ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZihjb25kaXRpb24gPT09IFwiNHRoIFF1YXJ0ZXJcIiAmJiBhY3Rpb24ucGVyaW9kID09PSA0KSBjb25kaXRpb25NZXQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKGNvbmRpdGlvbiA9PT0gXCIxc3QgSGFsZlwiICYmIChhY3Rpb24ucGVyaW9kID09PSAxIHx8IGFjdGlvbi5wZXJpb2QgPT09IDIpKSBjb25kaXRpb25NZXQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKGNvbmRpdGlvbiA9PT0gXCIybmQgSGFsZlwiICYmIChhY3Rpb24ucGVyaW9kID09PSAzIHx8IGFjdGlvbi5wZXJpb2QgPT09IDQpKSBjb25kaXRpb25NZXQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKGNvbmRpdGlvbiA9PT0gXCJXaG9sZSBHYW1lXCIpIGNvbmRpdGlvbk1ldCA9IHRydWU7XG4gICAgICAgIGlmKHBsYXllck5hbWUudG9Mb3dlckNhc2UoKSA9PT0gYWN0aW9uPy5uYW1lPy50b0xvd2VyQ2FzZSgpKSBwbGF5ZXJDb25kaXRpb25NZXQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKHBsYXllck5hbWUgPT09IFwiXCIpIHBsYXllckNvbmRpdGlvbk1ldCA9IHRydWU7XG5cbiAgICAgICAgaWYoY29uZGl0aW9uTWV0ICYmIHBsYXllckNvbmRpdGlvbk1ldCl7XG4gICAgICAgICAgICBkaWRQbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGludGlhbFN0YXRzW2FjdGlvbi5hY3Rpb25UeXBlXSArPSBhY3Rpb24uYW1vdW50O1xuICAgICAgICAgICAgaW50aWFsU3RhdHNbXCJGQU5cIl0gKz0gRmFudGFzeVNjb3JpbmcoYWN0aW9uLmFjdGlvblR5cGUsIGFjdGlvbi5hbW91bnQpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vSWYgZGlkIG5vdCBwbGF5IHRoZW4gd2UgcmV0dXJuIC0xIFBUUyBzbyBqdXN0IGRvbid0IHNob3cgdGhpcyBnYW1lXG4gICAgaWYoIWRpZFBsYXkpIGludGlhbFN0YXRzW1wiUFRTXCJdID0gLTE7XG5cbiAgICByZXR1cm4gaW50aWFsU3RhdHM7XG59Il0sIm5hbWVzIjpbImVtcHR5U3RhdHMiLCJGYW50YXN5U2NvcmluZyIsInN0YXQiLCJhbW91bnQiLCJmaWxsU3RhdHMiLCJwbGF5ZXJOYW1lIiwiY29uZGl0aW9uIiwiYWN0aW9ucyIsImludGlhbFN0YXRzIiwiZGlkUGxheSIsImZvckVhY2giLCJhY3Rpb24iLCJjb25kaXRpb25NZXQiLCJwbGF5ZXJDb25kaXRpb25NZXQiLCJwZXJpb2QiLCJ0b0xvd2VyQ2FzZSIsIm5hbWUiLCJhY3Rpb25UeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/players.ts\n"));

/***/ })

});
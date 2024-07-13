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

/***/ "./src/data/wnbaParsing.ts":
/*!*********************************!*\
  !*** ./src/data/wnbaParsing.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wnbaParsing: function() { return /* binding */ wnbaParsing; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var _functions_players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/players */ \"./src/functions/players.ts\");\n/* harmony import */ var _wnba_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wnba.json */ \"./src/data/wnba.json\");\n\n\n\n\n\n\n\n/*\n    Basically we check the past 2 weeks for games \n    (Not sure if this is a good way since what if they are injured? Need to find a way to find\n    all games players played)\n*/ var wnbaParsing = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(games, startDate, endDate, paramName) {\n        var newGames, wnbaDataSliced, fetchPromises, i, day, currDate, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    newGames = [];\n                    wnbaDataSliced = _wnba_json__WEBPACK_IMPORTED_MODULE_1__.slice(_wnba_json__WEBPACK_IMPORTED_MODULE_1__.findIndex(function(day) {\n                        return new Date(day.gameDate) >= startDate;\n                    }));\n                    // Create an array to store all fetch promises\n                    fetchPromises = [];\n                    for(i = 0; i < wnbaDataSliced.length; i++){\n                        day = wnbaDataSliced[i];\n                        currDate = new Date(day.gameDate);\n                        // This date has passed so we can parse (unless it is the same day)\n                        if (currDate < endDate) {\n                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                            try {\n                                _loop = function() {\n                                    var game = _step.value;\n                                    /* \n                    Look through our games array and if a game with that id is already here then\n                    don't reparse it\n                */ if (!games.find(function(parsedGame) {\n                                        return parsedGame.id === game.gameId;\n                                    })) fetchPromises.push(fetch(\"https://content-api-prod.nba.com/public/1/leagues/wnba/game/\".concat(game.gameId)).then(function(res) {\n                                        return res.json();\n                                    }).then(function() {\n                                        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(gamesRes) {\n                                            var players, playerIndex, parsedName, gameDataRes, gameData;\n                                            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                                                switch(_state.label){\n                                                    case 0:\n                                                        players = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(gamesRes.results.depthCharts[0].players).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(gamesRes.results.depthCharts[1].players));\n                                                        playerIndex = 0;\n                                                        _state.label = 1;\n                                                    case 1:\n                                                        if (!(playerIndex < players.length)) return [\n                                                            3,\n                                                            7\n                                                        ];\n                                                        // Basically takes the name Cait Clark to C. Clark\n                                                        parsedName = \"\".concat(players[playerIndex].firstName[0], \". \").concat(players[playerIndex].lastName);\n                                                        if (!(paramName.toLocaleLowerCase() === parsedName.toLocaleLowerCase())) return [\n                                                            3,\n                                                            6\n                                                        ];\n                                                        return [\n                                                            4,\n                                                            fetch(\"http://localhost:3001/parseGame\", {\n                                                                method: \"GET\",\n                                                                headers: {\n                                                                    \"Content-Type\": \"application/json\",\n                                                                    url: \"https://cdn.wnba.com/static/json/liveData/playbyplay/playbyplay_urlMe.json\",\n                                                                    gameid: game.gameId\n                                                                }\n                                                            })\n                                                        ];\n                                                    case 2:\n                                                        gameDataRes = _state.sent();\n                                                        if (!(gameDataRes.status === 500)) return [\n                                                            3,\n                                                            3\n                                                        ];\n                                                        return [\n                                                            3,\n                                                            5\n                                                        ];\n                                                    case 3:\n                                                        return [\n                                                            4,\n                                                            gameDataRes.json()\n                                                        ];\n                                                    case 4:\n                                                        gameData = _state.sent();\n                                                        newGames.push((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_5__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__._)({}, gameData), {\n                                                            stats: (0,_functions_players__WEBPACK_IMPORTED_MODULE_0__.fillStats)(parsedName, \"Whole Game\", gameData.actions),\n                                                            id: game.gameId\n                                                        }));\n                                                        _state.label = 5;\n                                                    case 5:\n                                                        return [\n                                                            3,\n                                                            7\n                                                        ];\n                                                    case 6:\n                                                        playerIndex++;\n                                                        return [\n                                                            3,\n                                                            1\n                                                        ];\n                                                    case 7:\n                                                        return [\n                                                            2\n                                                        ];\n                                                }\n                                            });\n                                        });\n                                        return function(gamesRes) {\n                                            return _ref.apply(this, arguments);\n                                        };\n                                    }())[\"catch\"](function(err) {\n                                        console.log(\"betterLoadGames err\", err);\n                                    }));\n                                };\n                                for(_iterator = day.games[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();\n                            } catch (err) {\n                                _didIteratorError = true;\n                                _iteratorError = err;\n                            } finally{\n                                try {\n                                    if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                                        _iterator[\"return\"]();\n                                    }\n                                } finally{\n                                    if (_didIteratorError) {\n                                        throw _iteratorError;\n                                    }\n                                }\n                            }\n                        } else {\n                            break;\n                        }\n                    }\n                    // Wait for all fetch promises to complete\n                    return [\n                        4,\n                        Promise.all(fetchPromises)\n                    ];\n                case 1:\n                    _state.sent();\n                    return [\n                        2,\n                        newGames\n                    ];\n            }\n        });\n    });\n    return function wnbaParsing(games, startDate, endDate, paramName) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvZGF0YS93bmJhUGFyc2luZy50cz82Zjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbGxTdGF0cywgR2FtZTIgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL3BsYXllcnNcIjtcbmltcG9ydCB3bmJhRGF0YSBmcm9tICcuL3duYmEuanNvbic7XG5cblxuLypcbiAgICBCYXNpY2FsbHkgd2UgY2hlY2sgdGhlIHBhc3QgMiB3ZWVrcyBmb3IgZ2FtZXMgXG4gICAgKE5vdCBzdXJlIGlmIHRoaXMgaXMgYSBnb29kIHdheSBzaW5jZSB3aGF0IGlmIHRoZXkgYXJlIGluanVyZWQ/IE5lZWQgdG8gZmluZCBhIHdheSB0byBmaW5kXG4gICAgYWxsIGdhbWVzIHBsYXllcnMgcGxheWVkKVxuKi9cbmV4cG9ydCBjb25zdCB3bmJhUGFyc2luZyA9IGFzeW5jIChcbiAgICBnYW1lczogR2FtZTJbXSwgc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlLCBwYXJhbU5hbWU6IHN0cmluZ1xuKTogUHJvbWlzZTxHYW1lMltdPiA9PiB7XG4gICAgbGV0IG5ld0dhbWVzOiBHYW1lMltdID0gW107XG4gICAgY29uc3Qgd25iYURhdGFTbGljZWQgPSB3bmJhRGF0YS5zbGljZSh3bmJhRGF0YS5maW5kSW5kZXgoZGF5ID0+IG5ldyBEYXRlKGRheS5nYW1lRGF0ZSkgPj0gc3RhcnREYXRlKSk7XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgYWxsIGZldGNoIHByb21pc2VzXG4gICAgbGV0IGZldGNoUHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3bmJhRGF0YVNsaWNlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXkgPSB3bmJhRGF0YVNsaWNlZFtpXTtcbiAgICAgICAgY29uc3QgY3VyckRhdGUgPSBuZXcgRGF0ZShkYXkuZ2FtZURhdGUpO1xuICAgIFxuICAgICAgICAvLyBUaGlzIGRhdGUgaGFzIHBhc3NlZCBzbyB3ZSBjYW4gcGFyc2UgKHVubGVzcyBpdCBpcyB0aGUgc2FtZSBkYXkpXG4gICAgICAgIGlmIChjdXJyRGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ2FtZSBvZiBkYXkuZ2FtZXMpIHtcbiAgICAgICAgICAgICAgICAvKiBcbiAgICAgICAgICAgICAgICAgICAgTG9vayB0aHJvdWdoIG91ciBnYW1lcyBhcnJheSBhbmQgaWYgYSBnYW1lIHdpdGggdGhhdCBpZCBpcyBhbHJlYWR5IGhlcmUgdGhlblxuICAgICAgICAgICAgICAgICAgICBkb24ndCByZXBhcnNlIGl0XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZighZ2FtZXMuZmluZChwYXJzZWRHYW1lID0+IHBhcnNlZEdhbWUuaWQgPT09IGdhbWUuZ2FtZUlkKSlcbiAgICAgICAgICAgICAgICBmZXRjaFByb21pc2VzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2NvbnRlbnQtYXBpLXByb2QubmJhLmNvbS9wdWJsaWMvMS9sZWFndWVzL3duYmEvZ2FtZS8ke2dhbWUuZ2FtZUlkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChnYW1lc1JlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBbLi4uZ2FtZXNSZXMucmVzdWx0cy5kZXB0aENoYXJ0c1swXS5wbGF5ZXJzLCAuLi5nYW1lc1Jlcy5yZXN1bHRzLmRlcHRoQ2hhcnRzWzFdLnBsYXllcnNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBsYXllckluZGV4ID0gMDsgcGxheWVySW5kZXggPCBwbGF5ZXJzLmxlbmd0aDsgcGxheWVySW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCYXNpY2FsbHkgdGFrZXMgdGhlIG5hbWUgQ2FpdCBDbGFyayB0byBDLiBDbGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkTmFtZSA9IGAke3BsYXllcnNbcGxheWVySW5kZXhdLmZpcnN0TmFtZVswXX0uICR7cGxheWVyc1twbGF5ZXJJbmRleF0ubGFzdE5hbWV9YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBwYXJzZWROYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVEYXRhUmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wYXJzZUdhbWVgLCB7IC8vTG9hZCBHYW1lIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL2Nkbi53bmJhLmNvbS9zdGF0aWMvanNvbi9saXZlRGF0YS9wbGF5YnlwbGF5L3BsYXlieXBsYXlfdXJsTWUuanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYW1laWQnOiBnYW1lLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdhbWVEYXRhUmVzLnN0YXR1cyA9PT0gNTAwKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGlzIGdhbWUgaGFzbid0IGhhcHBlbmVkIHlldC4gU2hvdWxkIG5ldmVyIGdldCB0byB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hcyB3ZSBuZXZlciBwYXNzIGluIGFuIGVuZCBkYXRlIGFib3ZlIHRoZSBjdXJyZW50IGRheSBzbyBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZW50IHdyb25nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVEYXRhID0gYXdhaXQgZ2FtZURhdGFSZXMuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dhbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5nYW1lRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHM6IGZpbGxTdGF0cyhwYXJzZWROYW1lLCBcIldob2xlIEdhbWVcIiwgZ2FtZURhdGEuYWN0aW9ucyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBnYW1lLmdhbWVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JldHRlckxvYWRHYW1lcyBlcnInLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciBhbGwgZmV0Y2ggcHJvbWlzZXMgdG8gY29tcGxldGVcbiAgICBhd2FpdCBQcm9taXNlLmFsbChmZXRjaFByb21pc2VzKTtcblxuICAgIHJldHVybiBuZXdHYW1lcztcbn07XG4iXSwibmFtZXMiOlsiZmlsbFN0YXRzIiwid25iYURhdGEiLCJ3bmJhUGFyc2luZyIsImdhbWVzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInBhcmFtTmFtZSIsIm5ld0dhbWVzIiwid25iYURhdGFTbGljZWQiLCJmZXRjaFByb21pc2VzIiwiaSIsImRheSIsImN1cnJEYXRlIiwic2xpY2UiLCJmaW5kSW5kZXgiLCJEYXRlIiwiZ2FtZURhdGUiLCJsZW5ndGgiLCJnYW1lIiwiZmluZCIsInBhcnNlZEdhbWUiLCJpZCIsImdhbWVJZCIsInB1c2giLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2FtZXNSZXMiLCJwbGF5ZXJzIiwicGxheWVySW5kZXgiLCJwYXJzZWROYW1lIiwiZ2FtZURhdGFSZXMiLCJnYW1lRGF0YSIsInJlc3VsdHMiLCJkZXB0aENoYXJ0cyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwic3RhdHVzIiwic3RhdHMiLCJhY3Rpb25zIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsImFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/wnbaParsing.ts\n"));

/***/ })

});
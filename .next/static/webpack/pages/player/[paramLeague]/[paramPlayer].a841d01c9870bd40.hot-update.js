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

/***/ "./src/components/Player/Valorant/ValorantPlayer.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Player/Valorant/ValorantPlayer.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValPlayerPage: function() { return /* binding */ ValPlayerPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hero */ \"./src/components/Player/Hero.tsx\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Row */ \"./src/components/Player/Row.tsx\");\n/* harmony import */ var _StatComparator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StatComparator */ \"./src/components/Player/StatComparator.tsx\");\n/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TableHeader */ \"./src/components/Player/TableHeader.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n/*\n    For this page the games array is like this \n\n    date: \"2024/07/14\"\n    maps : (3) ['Ascent', 'Bind', 'Lotus']\n    oppTeam : \"LOUD\"\n    players : Array(10) {name: 'saadhak', team: 'LOUD', kills: Array(12), deaths: Array(12), assists: Array(12)}\n    url: \"/353200/loud-vs-100-thieves-champions-to\"\n\n    1) We load 50 of these games but the maps and players will be empty\n    2) We load each map indivually via the url and fill the maps and players\n    3) Only load <Rows> for games without an empty players and maps array \n*/ var ValPlayerPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _router_query = router.query, paramPlayer = _router_query.paramPlayer, paramLeague = _router_query.paramLeague;\n    var fetchValorantPlayers = (0,_Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)().fetchValorantPlayers;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), 2), player = _useState[0], setPlayer = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allGames = _useState1[0], setAllGames = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), displayedStats = _useState2[0], setDisplayedStats = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState3[0], setLoading = _useState3[1];\n    var allPickedBtns = [\n        \"All Maps\",\n        \"Map 1\",\n        \"Map 2\",\n        \"Map 3\",\n        \"Map 1+2\"\n    ];\n    var statsHeader = [\n        {\n            name: \"K\",\n            underName: \"Kills\"\n        },\n        {\n            name: \"D\",\n            underName: \"Deaths\"\n        },\n        {\n            name: \"A\",\n            underName: \"Assists\"\n        },\n        {\n            name: \"FK\",\n            underName: \"First Kills\"\n        },\n        {\n            name: \"FD\",\n            underName: \"First Deaths\"\n        }\n    ];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(statsHeader.length).fill(-1)), 2), chartCompareTo = _useState4[0], setChartCompareTo = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_8__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allPickedBtns[0]), 2), pickedBtn = _useState5[0], setPickedBtn = _useState5[1];\n    var compareFunction = function(newAllGames, foundPlayer) {\n        var addUpMaps = function(pickedNumbers, game) {\n            var statsArr = Array(statsHeader.length).fill(0);\n            /* Scenrio in which we pick map 3 but there was no played map 3 */ if (pickedNumbers.length === 1 && pickedNumbers[0] === 2) {\n                return Array(statsHeader.length).fill(-1);\n            }\n            pickedNumbers.forEach(function(number) {\n                var map = game.maps[number];\n                if (map.didPlay) {\n                    var playerStats = map.players.find(function(p) {\n                        return p.name === foundPlayer.firstName;\n                    });\n                    statsArr[0] += playerStats.kills;\n                    statsArr[1] += playerStats.deaths;\n                    statsArr[2] += playerStats.assists;\n                    statsArr[3] += playerStats.firstKills;\n                    statsArr[4] += playerStats.firstDeaths;\n                }\n            });\n            return statsArr;\n        };\n        var displayStats = [];\n        if (pickedBtn === \"All Maps\") {\n            displayStats = newAllGames.map(function(game) {\n                return addUpMaps([\n                    0,\n                    1,\n                    2\n                ], game);\n            });\n        } else if (pickedBtn === \"Map 1\") {\n            displayStats = newAllGames.map(function(game) {\n                return addUpMaps([\n                    0\n                ], game);\n            });\n        } else if (pickedBtn === \"Map 2\") {\n            displayStats = newAllGames.map(function(game) {\n                return addUpMaps([\n                    1\n                ], game);\n            });\n        } else if (pickedBtn === \"Map 3\") {\n            displayStats = newAllGames.map(function(game) {\n                return addUpMaps([\n                    2\n                ], game);\n            });\n        } else if (pickedBtn === \"Map 1+2\") {\n            displayStats = newAllGames.map(function(game) {\n                return addUpMaps([\n                    0,\n                    1\n                ], game);\n            });\n        }\n        return displayStats;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchPlayer = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_9__._)(function() {\n                var allValPlayers, foundPlayer, matchRes, games;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_10__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetchValorantPlayers()\n                            ];\n                        case 1:\n                            allValPlayers = _state.sent();\n                            /* Found the player in the load all players array */ foundPlayer = allValPlayers.find(function(player) {\n                                return player.firstName.toLowerCase() === paramPlayer.toLowerCase();\n                            });\n                            setPlayer(foundPlayer);\n                            return [\n                                4,\n                                fetch(\"\".concat(\"http://localhost:3001\", \"/valorant/dummy/games\"), {\n                                    method: \"POST\",\n                                    headers: {\n                                        \"Content-Type\": \"application/json\"\n                                    },\n                                    body: JSON.stringify({\n                                        urls: [\n                                            \"111\"\n                                        ]\n                                    })\n                                })\n                            ];\n                        case 2:\n                            matchRes = _state.sent();\n                            return [\n                                4,\n                                matchRes.json()\n                            ];\n                        case 3:\n                            games = _state.sent();\n                            setAllGames(games);\n                            setDisplayedStats(compareFunction(games, foundPlayer));\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchPlayer() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (paramLeague && paramPlayer) fetchPlayer();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setDisplayedStats(compareFunction(allGames, player));\n    }, [\n        pickedBtn\n    ]);\n    if (!loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero__WEBPACK_IMPORTED_MODULE_4__.Hero, {\n                playerName: player.firstName,\n                picUrl: \"\",\n                team: player.team,\n                number: \"\",\n                position: \"\",\n                pickedBtn: pickedBtn,\n                setPickedBtn: setPickedBtn,\n                allPickedBtns: allPickedBtns\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"playerPageGamesHeader\",\n                children: \"Games\"\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"playerPageStatTableContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"playerPageStatTable\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StatComparator__WEBPACK_IMPORTED_MODULE_6__.StatComparator, {\n                                        chartCompareTo: chartCompareTo,\n                                        setChartCompareTo: setChartCompareTo\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableHeader__WEBPACK_IMPORTED_MODULE_7__.TableHeader, {\n                                        statsHeader: statsHeader\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: allGames.map(function(game, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                                        pickedBtn: pickedBtn,\n                                        chartCompareTo: chartCompareTo,\n                                        displayedStats: displayedStats[index],\n                                        team: game.team1 === (player === null || player === void 0 ? void 0 : player.team) ? game.team2 : game.team1,\n                                        date: game.date\n                                    }, index, false, {\n                                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 33\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"50px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n                lineNumber: 143,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n        lineNumber: 129,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"100vh\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            display: \"flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_11__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 150,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n            lineNumber: 175,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/components/Player/Valorant/ValorantPlayer.tsx\",\n        lineNumber: 171,\n        columnNumber: 12\n    }, _this);\n};\n_s(ValPlayerPage, \"VWnz4a9O+zFmFuMME0unQydIlTY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = ValPlayerPage;\nvar _c;\n$RefreshReg$(_c, \"ValPlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvVmFsb3JhbnQvVmFsb3JhbnRQbGF5ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUNJO0FBQ2M7QUFFM0I7QUFDRjtBQUNzQjtBQUNOO0FBVzdDOzs7Ozs7Ozs7Ozs7QUFZQSxHQUNPLElBQU1VLGdCQUFnQjs7SUFDekIsSUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLElBQXFDUSxnQkFBQUEsT0FBT0MsS0FBSyxFQUF6Q0MsY0FBNkJGLGNBQTdCRSxhQUFhQyxjQUFnQkgsY0FBaEJHO0lBQ3JCLElBQU0sdUJBQXlCVCxnRUFBZ0JBLEdBQXhDVTtJQUNQLElBQTRCYixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQTZCYyxnQkFBMURDLFNBQXFCZixjQUFiZ0IsWUFBYWhCO0lBQzVCLElBQWdDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWlCLEVBQUUsT0FBcERpQixXQUF5QmpCLGVBQWZrQixjQUFlbEI7SUFDaEMsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBYSxFQUFFLE9BQTVEbUIsaUJBQXFDbkIsZUFBckJvQixvQkFBcUJwQjtJQUM1QyxJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFVLFdBQXpDcUIsVUFBdUJyQixlQUFkc0IsYUFBY3RCO0lBRTlCLElBQU11QixnQkFBZ0I7UUFBQztRQUFZO1FBQVM7UUFBUztRQUFTO0tBQVU7SUFDeEUsSUFBTUMsY0FBYztRQUNoQjtZQUFDQyxNQUFNO1lBQUtDLFdBQVc7UUFBTztRQUM5QjtZQUFDRCxNQUFNO1lBQUtDLFdBQVc7UUFBUTtRQUMvQjtZQUFDRCxNQUFNO1lBQUtDLFdBQVc7UUFBUztRQUNoQztZQUFDRCxNQUFNO1lBQU1DLFdBQVc7UUFBYTtRQUNyQztZQUFDRCxNQUFNO1lBQU1DLFdBQVc7UUFBYztLQUN6QztJQUNELElBQTRDMUIsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFXMkIsTUFBTUgsWUFBWUksTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQyxTQUF4RkMsaUJBQXFDOUIsZUFBckIrQixvQkFBcUIvQjtJQUM1QyxJQUFrQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTdUIsYUFBYSxDQUFDLEVBQUUsT0FBNURTLFlBQTJCaEMsZUFBaEJpQyxlQUFnQmpDO0lBRWxDLElBQU1rQyxrQkFBa0IsU0FBQ0MsYUFBNkJDO1FBQ2xELElBQU1DLFlBQVksU0FBQ0MsZUFBeUJDO1lBQ3hDLElBQUlDLFdBQXFCYixNQUFNSCxZQUFZSSxNQUFNLEVBQUVDLElBQUksQ0FBQztZQUV4RCxnRUFBZ0UsR0FDaEUsSUFBR1MsY0FBY1YsTUFBTSxLQUFLLEtBQUtVLGFBQWEsQ0FBQyxFQUFFLEtBQUssR0FBRTtnQkFDcEQsT0FBT1gsTUFBTUgsWUFBWUksTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUMzQztZQUVBUyxjQUFjRyxPQUFPLENBQUNDLFNBQUFBO2dCQUNsQixJQUFJQyxNQUFNSixLQUFLSyxJQUFJLENBQUNGLE9BQU87Z0JBRTNCLElBQUdDLElBQUlFLE9BQU8sRUFBQztvQkFDWCxJQUFJQyxjQUFjSCxJQUFJSSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsU0FBQUE7K0JBQUtBLEVBQUV4QixJQUFJLEtBQUtXLFlBQVljLFNBQVM7O29CQUN4RVYsUUFBUSxDQUFDLEVBQUUsSUFBS00sWUFBYUssS0FBSztvQkFDbENYLFFBQVEsQ0FBQyxFQUFFLElBQUtNLFlBQWFNLE1BQU07b0JBQ25DWixRQUFRLENBQUMsRUFBRSxJQUFLTSxZQUFhTyxPQUFPO29CQUNwQ2IsUUFBUSxDQUFDLEVBQUUsSUFBS00sWUFBYVEsVUFBVTtvQkFDdkNkLFFBQVEsQ0FBQyxFQUFFLElBQUtNLFlBQWFTLFdBQVc7Z0JBQzVDO1lBQ0o7WUFFQSxPQUFPZjtRQUNYO1FBRUEsSUFBSWdCLGVBQTJCLEVBQUU7UUFDakMsSUFBR3hCLGNBQWMsWUFBWTtZQUN6QndCLGVBQWVyQixZQUFZUSxHQUFHLENBQUMsU0FBQ0o7dUJBQVNGLFVBQVU7b0JBQUM7b0JBQUU7b0JBQUU7aUJBQUUsRUFBRUU7O1FBQ2hFLE9BQ0ssSUFBR1AsY0FBYyxTQUFRO1lBQzFCd0IsZUFBZXJCLFlBQVlRLEdBQUcsQ0FBQyxTQUFDSjt1QkFBU0YsVUFBVTtvQkFBQztpQkFBRSxFQUFFRTs7UUFDNUQsT0FDSyxJQUFHUCxjQUFjLFNBQVE7WUFDMUJ3QixlQUFlckIsWUFBWVEsR0FBRyxDQUFDLFNBQUNKO3VCQUFTRixVQUFVO29CQUFDO2lCQUFFLEVBQUVFOztRQUM1RCxPQUNLLElBQUdQLGNBQWMsU0FBUTtZQUMxQndCLGVBQWVyQixZQUFZUSxHQUFHLENBQUMsU0FBQ0o7dUJBQVNGLFVBQVU7b0JBQUM7aUJBQUUsRUFBRUU7O1FBQzVELE9BQ0ssSUFBSVAsY0FBYyxXQUFXO1lBQzlCd0IsZUFBZXJCLFlBQVlRLEdBQUcsQ0FBQyxTQUFDSjt1QkFBU0YsVUFBVTtvQkFBQztvQkFBRTtpQkFBRSxFQUFFRTs7UUFDOUQ7UUFFQSxPQUFPaUI7SUFDWDtJQUVBekQsZ0RBQVNBLENBQUM7UUFDTixJQUFNMEQ7dUJBQWM7b0JBQ1ZDLGVBR0F0QixhQUlBdUIsVUFPRkM7Ozs7NEJBZGtCOztnQ0FBTS9DOzs7NEJBQXRCNkMsZ0JBQWdCOzRCQUV0QixrREFBa0QsR0FDNUN0QixjQUFjc0IsY0FBY1YsSUFBSSxDQUFDakMsU0FBQUE7dUNBQVVBLE9BQU9tQyxTQUFTLENBQUNXLFdBQVcsT0FBTyxZQUF3QkEsV0FBVzs7NEJBQ3ZIN0MsVUFBVW9COzRCQUdPOztnQ0FBTTBCLE1BQU0sR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDLDBCQUF3QjtvQ0FDeEZHLFFBQVE7b0NBQ1JDLFNBQVM7d0NBQ0wsZ0JBQWdCO29DQUNwQjtvQ0FDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dDQUFDQyxJQUFJOzRDQUFHOztvQ0FBTTtnQ0FDdkM7Ozs0QkFOTVosV0FBVzs0QkFPTDs7Z0NBQU1BLFNBQVNhLElBQUk7Ozs0QkFBM0JaLFFBQVE7NEJBQ1oxQyxZQUFZMEM7NEJBRVp4QyxrQkFBa0JjLGdCQUFnQjBCLE9BQU94Qjs0QkFDekNkLFdBQVc7Ozs7OztZQUNmOzRCQXBCTW1DOzs7O1FBc0JOLElBQUc3QyxlQUFlRCxhQUFhOEM7SUFDbkMsR0FBRyxFQUFFO0lBRUwxRCxnREFBU0EsQ0FBQztRQUNOcUIsa0JBQWtCYyxnQkFBZ0JqQixVQUFVRjtJQUNoRCxHQUFHO1FBQUNpQjtLQUFVO0lBRWQsSUFBRyxDQUFDWCxTQUFTLHFCQUNULDhEQUFDb0Q7OzBCQUNHLDhEQUFDckUsdUNBQUlBO2dCQUNEc0UsWUFBWTNELE9BQVFtQyxTQUFTO2dCQUM3QnlCLFFBQU87Z0JBQ1BDLE1BQU03RCxPQUFRNkQsSUFBSTtnQkFDbEJsQyxRQUFPO2dCQUNQbUMsVUFBUztnQkFDVDdDLFdBQVdBO2dCQUNYQyxjQUFjQTtnQkFDZFYsZUFBZUE7Ozs7OzswQkFHbkIsOERBQUMwQjtnQkFBRTZCLFdBQVU7MEJBQXdCOzs7Ozs7MEJBRXJDLDhEQUFDTDtnQkFBSUssV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNRCxXQUFVOzswQ0FDYiw4REFBQ0U7O2tEQUNHLDhEQUFDMUUsMkRBQWNBO3dDQUFDd0IsZ0JBQWdCQTt3Q0FBZ0JDLG1CQUFtQkE7Ozs7OztrREFDbkUsOERBQUN4QixxREFBV0E7d0NBQUNpQixhQUFhQTs7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQ3lEOzBDQUNJaEUsU0FBUzBCLEdBQUcsQ0FBQyxTQUFDSixNQUFNMkM7b0NBQ2pCLHFCQUNJLDhEQUFDN0UscUNBQUdBO3dDQUVBMkIsV0FBV0E7d0NBQ1hGLGdCQUFnQkE7d0NBQ2hCWCxnQkFBZ0JBLGNBQWMsQ0FBQytELE1BQU07d0NBQ3JDTixNQUFNckMsS0FBSzRDLEtBQUssTUFBS3BFLG1CQUFBQSw2QkFBQUEsT0FBUTZELElBQUksSUFBR3JDLEtBQUs2QyxLQUFLLEdBQUc3QyxLQUFLNEMsS0FBSzt3Q0FDM0RFLE1BQU05QyxLQUFLOEMsSUFBSTt1Q0FMVkg7Ozs7O2dDQVFqQjs7Ozs7Ozs7Ozs7O2tDQUlSLDhEQUFDVDt3QkFBSWEsT0FBTzs0QkFBQ0MsY0FBYzt3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTTdDLHFCQUFPLDhEQUFDZDtRQUFJYSxPQUFPO1lBQ2ZFLE9BQU07WUFBUUMsV0FBVTtZQUFTQyxnQkFBZTtZQUFVQyxZQUFXO1lBQ3JFQyxTQUFRO1FBQ1o7a0JBQ0ksNEVBQUMxRix1REFBVUE7WUFDUDJGLE9BQU87WUFDUHhFLFNBQVM7WUFDVHlFLE1BQU07WUFDTkMsY0FBVztZQUNYQyxlQUFZOzs7Ozs7Ozs7OztBQUd4QixFQUFDO0dBdEpZeEY7O1FBQ01QLGtEQUFTQTtRQUVPRSw0REFBZ0JBOzs7S0FIdENLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9WYWxvcmFudC9WYWxvcmFudFBsYXllci50c3g/Mzk3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9Db250ZXh0L3N0b3JlJztcbmltcG9ydCB7IFZhbG9yYW50R2FtZSwgVmFsb3JhbnRQbGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9Db250ZXh0L1BsYXllclR5cGVzJztcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuLi9IZXJvJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uL1Jvdyc7XG5pbXBvcnQgeyBTdGF0Q29tcGFyYXRvciB9IGZyb20gJy4uL1N0YXRDb21wYXJhdG9yJztcbmltcG9ydCB7IFRhYmxlSGVhZGVyIH0gZnJvbSAnLi4vVGFibGVIZWFkZXInO1xuXG5leHBvcnQgdHlwZSBTdGF0Q29tcGFydG9yVmFsb3JhbnQgPSB7XG4gICAga2lsbHM6IG51bWJlciwgXG4gICAgZGVhdGhzOiBudW1iZXIsXG4gICAgYXNzaXN0czogbnVtYmVyLFxuICAgIGZpcnN0S2lsbHM6IG51bWJlcixcbiAgICBmaXJzdERlYXRoczogbnVtYmVyLFxuICAgIC8vIGhlYWRzaG90czogbnVtYmVyXG59XG5cbi8qXG4gICAgRm9yIHRoaXMgcGFnZSB0aGUgZ2FtZXMgYXJyYXkgaXMgbGlrZSB0aGlzIFxuXG4gICAgZGF0ZTogXCIyMDI0LzA3LzE0XCJcbiAgICBtYXBzIDogKDMpIFsnQXNjZW50JywgJ0JpbmQnLCAnTG90dXMnXVxuICAgIG9wcFRlYW0gOiBcIkxPVURcIlxuICAgIHBsYXllcnMgOiBBcnJheSgxMCkge25hbWU6ICdzYWFkaGFrJywgdGVhbTogJ0xPVUQnLCBraWxsczogQXJyYXkoMTIpLCBkZWF0aHM6IEFycmF5KDEyKSwgYXNzaXN0czogQXJyYXkoMTIpfVxuICAgIHVybDogXCIvMzUzMjAwL2xvdWQtdnMtMTAwLXRoaWV2ZXMtY2hhbXBpb25zLXRvXCJcblxuICAgIDEpIFdlIGxvYWQgNTAgb2YgdGhlc2UgZ2FtZXMgYnV0IHRoZSBtYXBzIGFuZCBwbGF5ZXJzIHdpbGwgYmUgZW1wdHlcbiAgICAyKSBXZSBsb2FkIGVhY2ggbWFwIGluZGl2dWFsbHkgdmlhIHRoZSB1cmwgYW5kIGZpbGwgdGhlIG1hcHMgYW5kIHBsYXllcnNcbiAgICAzKSBPbmx5IGxvYWQgPFJvd3M+IGZvciBnYW1lcyB3aXRob3V0IGFuIGVtcHR5IHBsYXllcnMgYW5kIG1hcHMgYXJyYXkgXG4qL1xuZXhwb3J0IGNvbnN0IFZhbFBsYXllclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwYXJhbVBsYXllciwgcGFyYW1MZWFndWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCB7ZmV0Y2hWYWxvcmFudFBsYXllcnN9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICAgIGNvbnN0IFtwbGF5ZXIsIHNldFBsYXllcl0gPSB1c2VTdGF0ZTxWYWxvcmFudFBsYXllciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgICBjb25zdCBbYWxsR2FtZXMsIHNldEFsbEdhbWVzXSA9IHVzZVN0YXRlPFZhbG9yYW50R2FtZVtdPihbXSk7XG4gICAgY29uc3QgW2Rpc3BsYXllZFN0YXRzLCBzZXREaXNwbGF5ZWRTdGF0c10gPSB1c2VTdGF0ZTxudW1iZXJbXVtdPihbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgICBjb25zdCBhbGxQaWNrZWRCdG5zID0gW1wiQWxsIE1hcHNcIiwgXCJNYXAgMVwiLCBcIk1hcCAyXCIsIFwiTWFwIDNcIiwgXCJNYXAgMSsyXCJdO1xuICAgIGNvbnN0IHN0YXRzSGVhZGVyID0gW1xuICAgICAgICB7bmFtZTogXCJLXCIsIHVuZGVyTmFtZTogXCJLaWxsc1wifSxcbiAgICAgICAge25hbWU6IFwiRFwiLCB1bmRlck5hbWU6IFwiRGVhdGhzXCJ9LFxuICAgICAgICB7bmFtZTogXCJBXCIsIHVuZGVyTmFtZTogXCJBc3Npc3RzXCJ9LFxuICAgICAgICB7bmFtZTogXCJGS1wiLCB1bmRlck5hbWU6IFwiRmlyc3QgS2lsbHNcIn0sXG4gICAgICAgIHtuYW1lOiBcIkZEXCIsIHVuZGVyTmFtZTogXCJGaXJzdCBEZWF0aHNcIn0sXG4gICAgXTtcbiAgICBjb25zdCBbY2hhcnRDb21wYXJlVG8sIHNldENoYXJ0Q29tcGFyZVRvXSA9IHVzZVN0YXRlPG51bWJlcltdPihBcnJheShzdGF0c0hlYWRlci5sZW5ndGgpLmZpbGwoLTEpKVxuICAgIGNvbnN0IFtwaWNrZWRCdG4sIHNldFBpY2tlZEJ0bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KGFsbFBpY2tlZEJ0bnNbMF0pXG5cbiAgICBjb25zdCBjb21wYXJlRnVuY3Rpb24gPSAobmV3QWxsR2FtZXM6IFZhbG9yYW50R2FtZVtdLCBmb3VuZFBsYXllcjogVmFsb3JhbnRQbGF5ZXIpOiBudW1iZXJbXVtdID0+IHtcbiAgICAgICAgY29uc3QgYWRkVXBNYXBzID0gKHBpY2tlZE51bWJlcnM6IG51bWJlcltdLCBnYW1lOiBWYWxvcmFudEdhbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBzdGF0c0FycjogbnVtYmVyW10gPSBBcnJheShzdGF0c0hlYWRlci5sZW5ndGgpLmZpbGwoMCk7XG5cbiAgICAgICAgICAgIC8qIFNjZW5yaW8gaW4gd2hpY2ggd2UgcGljayBtYXAgMyBidXQgdGhlcmUgd2FzIG5vIHBsYXllZCBtYXAgMyAqL1xuICAgICAgICAgICAgaWYocGlja2VkTnVtYmVycy5sZW5ndGggPT09IDEgJiYgcGlja2VkTnVtYmVyc1swXSA9PT0gMil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5KHN0YXRzSGVhZGVyLmxlbmd0aCkuZmlsbCgtMSk7XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBwaWNrZWROdW1iZXJzLmZvckVhY2gobnVtYmVyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0gZ2FtZS5tYXBzW251bWJlcl07XG5cbiAgICAgICAgICAgICAgICBpZihtYXAuZGlkUGxheSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJTdGF0cyA9IG1hcC5wbGF5ZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGZvdW5kUGxheWVyLmZpcnN0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgc3RhdHNBcnJbMF0gKz0gKHBsYXllclN0YXRzIS5raWxscylcbiAgICAgICAgICAgICAgICAgICAgc3RhdHNBcnJbMV0gKz0gKHBsYXllclN0YXRzIS5kZWF0aHMpXG4gICAgICAgICAgICAgICAgICAgIHN0YXRzQXJyWzJdICs9IChwbGF5ZXJTdGF0cyEuYXNzaXN0cylcbiAgICAgICAgICAgICAgICAgICAgc3RhdHNBcnJbM10gKz0gKHBsYXllclN0YXRzIS5maXJzdEtpbGxzKVxuICAgICAgICAgICAgICAgICAgICBzdGF0c0Fycls0XSArPSAocGxheWVyU3RhdHMhLmZpcnN0RGVhdGhzKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gc3RhdHNBcnI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGlzcGxheVN0YXRzOiBudW1iZXJbXVtdID0gW107XG4gICAgICAgIGlmKHBpY2tlZEJ0biA9PT0gJ0FsbCBNYXBzJykge1xuICAgICAgICAgICAgZGlzcGxheVN0YXRzID0gbmV3QWxsR2FtZXMubWFwKChnYW1lKSA9PiBhZGRVcE1hcHMoWzAsMSwyXSwgZ2FtZSkpXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYocGlja2VkQnRuID09PSAnTWFwIDEnKXtcbiAgICAgICAgICAgIGRpc3BsYXlTdGF0cyA9IG5ld0FsbEdhbWVzLm1hcCgoZ2FtZSkgPT4gYWRkVXBNYXBzKFswXSwgZ2FtZSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwaWNrZWRCdG4gPT09ICdNYXAgMicpe1xuICAgICAgICAgICAgZGlzcGxheVN0YXRzID0gbmV3QWxsR2FtZXMubWFwKChnYW1lKSA9PiBhZGRVcE1hcHMoWzFdLCBnYW1lKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBpY2tlZEJ0biA9PT0gJ01hcCAzJyl7XG4gICAgICAgICAgICBkaXNwbGF5U3RhdHMgPSBuZXdBbGxHYW1lcy5tYXAoKGdhbWUpID0+IGFkZFVwTWFwcyhbMl0sIGdhbWUpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBpY2tlZEJ0biA9PT0gJ01hcCAxKzInKSB7XG4gICAgICAgICAgICBkaXNwbGF5U3RhdHMgPSBuZXdBbGxHYW1lcy5tYXAoKGdhbWUpID0+IGFkZFVwTWFwcyhbMCwxXSwgZ2FtZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpc3BsYXlTdGF0cztcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFBsYXllciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFZhbFBsYXllcnMgPSBhd2FpdCBmZXRjaFZhbG9yYW50UGxheWVycygpO1xuXG4gICAgICAgICAgICAvKiBGb3VuZCB0aGUgcGxheWVyIGluIHRoZSBsb2FkIGFsbCBwbGF5ZXJzIGFycmF5ICovXG4gICAgICAgICAgICBjb25zdCBmb3VuZFBsYXllciA9IGFsbFZhbFBsYXllcnMuZmluZChwbGF5ZXIgPT4gcGxheWVyLmZpcnN0TmFtZS50b0xvd2VyQ2FzZSgpID09PSAocGFyYW1QbGF5ZXIgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIHNldFBsYXllcihmb3VuZFBsYXllcik7XG5cbiAgICAgICAgICAgIC8qIEdldCB0aGUgTWF0Y2hlcyAqL1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hSZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vdmFsb3JhbnQvZHVtbXkvZ2FtZXNgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsIFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt1cmxzOiBbXCIxMTFcIl19KSBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGdhbWVzID0gYXdhaXQgbWF0Y2hSZXMuanNvbigpO1xuICAgICAgICAgICAgc2V0QWxsR2FtZXMoZ2FtZXMpO1xuXG4gICAgICAgICAgICBzZXREaXNwbGF5ZWRTdGF0cyhjb21wYXJlRnVuY3Rpb24oZ2FtZXMsIGZvdW5kUGxheWVyISkpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXJhbUxlYWd1ZSAmJiBwYXJhbVBsYXllcikgZmV0Y2hQbGF5ZXIoKTtcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldERpc3BsYXllZFN0YXRzKGNvbXBhcmVGdW5jdGlvbihhbGxHYW1lcywgcGxheWVyISkpO1xuICAgIH0sIFtwaWNrZWRCdG5dKVxuXG4gICAgaWYoIWxvYWRpbmcpIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVybyBcbiAgICAgICAgICAgICAgICBwbGF5ZXJOYW1lPXtwbGF5ZXIhLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBwaWNVcmw9XCJcIlxuICAgICAgICAgICAgICAgIHRlYW09e3BsYXllciEudGVhbX1cbiAgICAgICAgICAgICAgICBudW1iZXI9XCJcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPScnXG4gICAgICAgICAgICAgICAgcGlja2VkQnRuPXtwaWNrZWRCdG59XG4gICAgICAgICAgICAgICAgc2V0UGlja2VkQnRuPXtzZXRQaWNrZWRCdG59XG4gICAgICAgICAgICAgICAgYWxsUGlja2VkQnRucz17YWxsUGlja2VkQnRuc31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYXllclBhZ2VHYW1lc0hlYWRlclwiPkdhbWVzPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyUGFnZVN0YXRUYWJsZUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ncGxheWVyUGFnZVN0YXRUYWJsZSc+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0Q29tcGFyYXRvciBjaGFydENvbXBhcmVUbz17Y2hhcnRDb21wYXJlVG99IHNldENoYXJ0Q29tcGFyZVRvPXtzZXRDaGFydENvbXBhcmVUb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciBzdGF0c0hlYWRlcj17c3RhdHNIZWFkZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthbGxHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrZWRCdG49e3BpY2tlZEJ0bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0Q29tcGFyZVRvPXtjaGFydENvbXBhcmVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZFN0YXRzPXtkaXNwbGF5ZWRTdGF0c1tpbmRleF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtPXtnYW1lLnRlYW0xID09PSBwbGF5ZXI/LnRlYW0gPyBnYW1lLnRlYW0yIDogZ2FtZS50ZWFtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2dhbWUuZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICc1MHB4J319PjwvZGl2PiAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgICAgICB3aWR0aDonMTAwJScsIG1pbkhlaWdodDonMTAwdmgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTonZmxleCdcbiAgICB9fT5cbiAgICAgICAgPENsaXBMb2FkZXJcbiAgICAgICAgICAgIGNvbG9yPXsnIzAwMCd9XG4gICAgICAgICAgICBsb2FkaW5nPXt0cnVlfVxuICAgICAgICAgICAgc2l6ZT17MTUwfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxvYWRpbmcgU3Bpbm5lclwiXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImxvYWRlclwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkNsaXBMb2FkZXIiLCJ1c2VHbG9iYWxDb250ZXh0IiwiSGVybyIsIlJvdyIsIlN0YXRDb21wYXJhdG9yIiwiVGFibGVIZWFkZXIiLCJWYWxQbGF5ZXJQYWdlIiwicm91dGVyIiwicXVlcnkiLCJwYXJhbVBsYXllciIsInBhcmFtTGVhZ3VlIiwiZmV0Y2hWYWxvcmFudFBsYXllcnMiLCJ1bmRlZmluZWQiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJhbGxHYW1lcyIsInNldEFsbEdhbWVzIiwiZGlzcGxheWVkU3RhdHMiLCJzZXREaXNwbGF5ZWRTdGF0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWxsUGlja2VkQnRucyIsInN0YXRzSGVhZGVyIiwibmFtZSIsInVuZGVyTmFtZSIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsImNoYXJ0Q29tcGFyZVRvIiwic2V0Q2hhcnRDb21wYXJlVG8iLCJwaWNrZWRCdG4iLCJzZXRQaWNrZWRCdG4iLCJjb21wYXJlRnVuY3Rpb24iLCJuZXdBbGxHYW1lcyIsImZvdW5kUGxheWVyIiwiYWRkVXBNYXBzIiwicGlja2VkTnVtYmVycyIsImdhbWUiLCJzdGF0c0FyciIsImZvckVhY2giLCJudW1iZXIiLCJtYXAiLCJtYXBzIiwiZGlkUGxheSIsInBsYXllclN0YXRzIiwicGxheWVycyIsImZpbmQiLCJwIiwiZmlyc3ROYW1lIiwia2lsbHMiLCJkZWF0aHMiLCJhc3Npc3RzIiwiZmlyc3RLaWxscyIsImZpcnN0RGVhdGhzIiwiZGlzcGxheVN0YXRzIiwiZmV0Y2hQbGF5ZXIiLCJhbGxWYWxQbGF5ZXJzIiwibWF0Y2hSZXMiLCJnYW1lcyIsInRvTG93ZXJDYXNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmxzIiwianNvbiIsImRpdiIsInBsYXllck5hbWUiLCJwaWNVcmwiLCJ0ZWFtIiwicG9zaXRpb24iLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJpbmRleCIsInRlYW0xIiwidGVhbTIiLCJkYXRlIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsIm1pbkhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJjb2xvciIsInNpemUiLCJhcmlhLWxhYmVsIiwiZGF0YS10ZXN0aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/Valorant/ValorantPlayer.tsx\n"));

/***/ })

});
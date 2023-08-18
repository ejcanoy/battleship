/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BattleshipGame.js":
/*!*******************************!*\
  !*** ./src/BattleshipGame.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard.js */ \"./src/GameBoard.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* eslint-disable no-underscore-dangle */\n\n\n\n\nconst BattleshipGame = (() => {\n  const SHIP_TYPES = {\n    \"Carrier\": 5,\n    \"Battleship\": 4,\n    \"Cruiser\": 3,\n    \"Submarine\": 3,\n    \"Destroyer\": 2\n  };\n  let player;\n  const playerBoard = (0,_GameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const aiPlayer = (0,_Player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"AI\");\n  const aiBoard = (0,_GameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let gameOver = false;\n  let curMove;\n  let lastMove;\n  let shipsSunk = 0;\n  const getUser = async () => {\n    const shipKeys = Object.keys(SHIP_TYPES);\n    for (let i = 0; i < shipKeys.length; i++) {\n      let placed = false;\n      const shipName = shipKeys[i];\n      while (!placed) {\n        const curShip = (0,_Ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SHIP_TYPES[shipName], shipName);\n        const coordinants = await _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getShipCoordinates(curShip, playerBoard);\n        placed = playerBoard.placeShip(coordinants.yResult, coordinants.xResult, curShip, coordinants.axis);\n        if (!placed) {\n          console.log(\"Can't place\");\n        }\n      }\n      _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayShips(playerBoard);\n    }\n    _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hideModal();\n  };\n  const startGame = async () => {\n    await getUser();\n    player = (0,_Player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Player\");\n    curMove = player;\n    generateRandomPlaces(aiBoard);\n    _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGame(player, playerBoard);\n    _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGame(aiPlayer, aiBoard);\n    while (!gameOver) {\n      if (aiBoard.areAllShipsSunk() || playerBoard.areAllShipsSunk()) {\n        gameOver = true;\n        continue;\n      } else if (curMove.getName() === \"AI\") {\n        aiPlayer.makeMove(-1, -1, playerBoard);\n        _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGame(player, playerBoard);\n        curMove = player;\n      } else {\n        let validMoveMade = null;\n        while (!validMoveMade) {\n          try {\n            // eslint-disable-next-line no-await-in-loop\n            const move = await _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getMove();\n            validMoveMade = player.makeMove(move.y, move.x, aiBoard);\n          } catch {\n            console.error(\"Try again later\");\n          }\n        }\n        lastMove = validMoveMade;\n        _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGame(aiPlayer, aiBoard);\n        const updatedShipsSunk = aiBoard.getShipsSunk();\n        if (shipsSunk < updatedShipsSunk) {\n          _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayLastMove(lastMove, shipsSunk);\n          shipsSunk = updatedShipsSunk;\n        } else {\n          _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayLastMove(lastMove);\n        }\n        curMove = aiPlayer;\n      }\n    }\n    _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGame(aiPlayer, aiBoard);\n    _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGame(player, playerBoard);\n    _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayWinner(aiBoard, playerBoard);\n  };\n  const generateRandomPlaces = board => {\n    const coordinants = [];\n    const shipKeys = Object.keys(SHIP_TYPES);\n    for (let i = 0; i < shipKeys.length; i++) {\n      const ship = shipKeys[i];\n      let placed = false;\n      const curShip = (0,_Ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SHIP_TYPES[ship], ship);\n      while (!placed) {\n        const xOrY = Math.random() < 0.5 ? \"X\" : \"Y\";\n        const xCoord = Math.floor(Math.random() * 10);\n        const yCoord = Math.floor(Math.random() * 10);\n        if (!coordinants.includes([xCoord, yCoord])) {\n          placed = board.placeShip(xCoord, yCoord, curShip, xOrY);\n        }\n      }\n    }\n  };\n  return {\n    startGame\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BattleshipGame);\n\n//# sourceURL=webpack://battleship/./src/BattleshipGame.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DOM = (() => {\n  const inializeEventListeners = () => {\n    const axisElement = document.querySelector(\"#axis-button\");\n    axisElement.addEventListener(\"click\", () => {\n      if (axisElement.innerHTML === \"X axis\") {\n        axisElement.innerHTML = \"Y axis\";\n      } else {\n        axisElement.innerHTML = \"X axis\";\n      }\n    });\n  };\n  const hideModal = () => {\n    const modal = document.querySelector(\".modal\");\n    modal.style.display = \"none\";\n  };\n  const displayShips = playerBoard => {\n    const curBoard = playerBoard.getBoard();\n    for (let r = 0; r < 10; r++) {\n      for (let c = 0; c < 10; c++) {\n        if (curBoard[r][c].ship) {\n          const cell = document.querySelector(`#grid-${r}-${c}`);\n          cell.classList.add(\"ship-there\");\n        }\n      }\n    }\n  };\n  const getShipCoordinates = (curShip, playerBoard) => new Promise(resolve => {\n    const gridContainer = document.getElementById(\"modal-content\");\n    const gridRows = gridContainer.querySelectorAll(\".grid-row\");\n    let xResult;\n    let yResult;\n    gridRows.forEach(row => {\n      const gridCells = row.querySelectorAll(\".grid-cell\");\n      gridCells.forEach(cell => {\n        const curId = cell.id;\n        const x = parseInt(curId.substring(7, 8));\n        const y = parseInt(curId.substring(5, 6));\n        cell.addEventListener(\"click\", () => {\n          const axisElement = document.querySelector(\"#axis-button\");\n          const axis = axisElement.innerHTML.substring(0, 1);\n          xResult = x;\n          yResult = y;\n          resolve({\n            xResult,\n            yResult,\n            axis\n          });\n        });\n        cell.addEventListener(\"mouseover\", () => {\n          const axisElement = document.querySelector(\"#axis-button\");\n          const axis = axisElement.innerHTML.substring(0, 1);\n          if (playerBoard.canPlaceShip(y, x, curShip, axis)) {\n            cell.style.backgroundColor = \"lightgreen\";\n          } else {\n            cell.style.backgroundColor = \"red\";\n          }\n        });\n        cell.addEventListener(\"mouseout\", () => {\n          if (playerBoard.getBoard()[y][x].ship) {\n            cell.style.backgroundColor = \"lightgreen\";\n          } else {\n            cell.style.backgroundColor = \"\";\n          }\n        });\n      });\n    });\n  });\n  const displayLastMove = (lastMove, shipsSunk = null) => {\n    const turnText = document.getElementById(\"turn-text\");\n    if (shipsSunk !== null) {\n      turnText.innerHTML = \"Ship sunk!\";\n    } else {\n      turnText.innerHTML = `Last move was a ${lastMove}`;\n    }\n  };\n  const displayWinner = (aiBoard, playerBoard) => {\n    const turnText = document.getElementById(\"turn-text\");\n    if (aiBoard.areAllShipsSunk()) {\n      turnText.innerHTML = \"You Won!\";\n    } else {\n      turnText.innerHTML = \"You Lost!\";\n    }\n  };\n  const getMove = () => new Promise(resolve => {\n    const gridContainer = document.getElementById(\"ai-board\");\n    const gridRows = gridContainer.querySelectorAll(\".grid-row\");\n    gridRows.forEach(row => {\n      const gridCells = row.querySelectorAll(\".grid-cell\");\n      gridCells.forEach(cell => {\n        cell.addEventListener(\"click\", () => {\n          const cellId = cell.id;\n          const y = cellId.substring(7, 8);\n          const x = cellId.substring(9, 10);\n          resolve({\n            y,\n            x\n          });\n        });\n      });\n    });\n  });\n  const displayGame = (player, playerBoard) => {\n    let gridName;\n    if (player.getName() === \"AI\") {\n      gridName = \"grid-2-\";\n    } else {\n      gridName = \"grid-1-\";\n    }\n    const curBoard = playerBoard.getBoard();\n    for (let r = 0; r < 10; r++) {\n      for (let c = 0; c < 10; c++) {\n        if (curBoard[r][c].ship) {\n          const cell = document.querySelector(`#${gridName}${r}-${c}`);\n          cell.classList.add(\"ship-there\");\n        }\n        if (curBoard[r][c].hit) {\n          const cell = document.querySelector(`#${gridName}${r}-${c}`);\n          cell.classList.add(\"hit\");\n        }\n      }\n    }\n    const boats = playerBoard.getShips();\n    for (const ship of boats) {\n      if (ship.isSunk()) {\n        const shipName = ship.getName().toLowerCase();\n        const shipElmt = document.querySelector(`#${gridName}${shipName}`);\n        shipElmt.classList.add(\"sunk\");\n      }\n    }\n  };\n  inializeEventListeners();\n  return {\n    displayGame,\n    getMove,\n    displayLastMove,\n    displayWinner,\n    getShipCoordinates,\n    displayShips,\n    hideModal\n  };\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-underscore-dangle */\n// variables\n// board 10x10\n// stores ships in an object\n// carrier 5 \n// battleship 4\n// cruiser 3\n// submarine 3\n// destroyer 2\n\nconst GameBoard = () => {\n  const START_BORDER = 0;\n  const END_BORDER = 9;\n  const _board = Array(10).fill(null).map(() => Array(10).fill(null));\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      _board[i][j] = {\n        \"ship\": null,\n        \"hit\": false\n      };\n    }\n  }\n  const _ships = [];\n  const getBoard = () => _board;\n  const getShipsSunk = () => {\n    let count = 0;\n    for (let i = 0; i < _ships.length; i++) {\n      if (_ships[i].isSunk()) {\n        count += 1;\n      }\n    }\n    return count;\n  };\n  const receiveAttack = (y, x) => {\n    _board[y][x].hit = true;\n    if (_board[y][x].ship) {\n      _board[y][x].ship.hit();\n      return \"Hit!\";\n    }\n    return \"Miss!\";\n  };\n  const shipInCells = (y, x, ship, axis) => {\n    if (axis === \"X\") {\n      for (let i = 0; i < ship.getLength(); i++) {\n        if (_board[y][x + i].ship != null) return false;\n      }\n    } else {\n      for (let i = 0; i < ship.getLength(); i++) {\n        if (_board[y + i][x].ship != null) return false;\n        ;\n      }\n    }\n    return true;\n  };\n  const canPlaceShip = (y, x, ship, axis) => {\n    if (y < START_BORDER || y > END_BORDER || x < START_BORDER || x > END_BORDER || axis === \"X\" && (x + ship.getLength() - 1 > END_BORDER || !shipInCells(y, x, ship, axis)) || axis === \"Y\" && (y + ship.getLength() - 1 > END_BORDER || !shipInCells(y, x, ship, axis))) return false;\n    return true;\n  };\n  const placeShip = (y, x, ship, axis) => {\n    if (!canPlaceShip(y, x, ship, axis)) return false;\n    _ships.push(ship);\n    if (axis === \"X\") {\n      for (let i = 0; i < ship.getLength(); i++) {\n        _board[y][x + i].ship = ship;\n      }\n    } else {\n      for (let i = 0; i < ship.getLength(); i++) {\n        _board[y + i][x].ship = ship;\n      }\n    }\n    return true;\n  };\n  const getShips = () => _ships;\n  const areAllShipsSunk = () => {\n    for (let i = 0; i < _ships.length; i++) {\n      if (!_ships[i].isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  };\n  return {\n    getBoard,\n    getShips,\n    canPlaceShip,\n    placeShip,\n    receiveAttack,\n    areAllShipsSunk,\n    getShipsSunk\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battleship/./src/GameBoard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = name => {\n  const _name = name;\n  const _moves = new Set(); // Use a Set to store unique move coordinates\n\n  const getName = () => _name;\n  const generateLegalMove = () => {\n    let y = -1;\n    let x = -1;\n    while (y < 0 || x < 0 || _moves.has(JSON.stringify([y, x]))) {\n      y = Math.floor(Math.random() * 10);\n      x = Math.floor(Math.random() * 10);\n    }\n    return {\n      y,\n      x\n    };\n  };\n  const makeMove = (y, x, gameBoard) => {\n    if (_name === \"AI\") {\n      const coordinates = generateLegalMove();\n      _moves.add(JSON.stringify([coordinates.y, coordinates.x]));\n      return gameBoard.receiveAttack(coordinates.y, coordinates.x);\n    }\n    if (!_moves.has(JSON.stringify([y, x]))) {\n      _moves.add(JSON.stringify([y, x]));\n      return gameBoard.receiveAttack(y, x);\n    }\n    return null;\n  };\n  const getMoves = () => Array.from(_moves).map(JSON.parse);\n  return {\n    getName,\n    makeMove,\n    getMoves\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-underscore-dangle */\nconst Ship = (length, name) => {\n  const _length = length;\n  let _hits = 0;\n  const _name = name;\n  const isSunk = () => _hits === _length;\n  const hit = () => {\n    _hits += 1;\n  };\n  const getName = () => _name;\n  const getHits = () => _hits;\n  const getLength = () => _length;\n  return {\n    isSunk,\n    hit,\n    getHits,\n    getLength,\n    getName\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BattleshipGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BattleshipGame */ \"./src/BattleshipGame.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", _BattleshipGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startGame());\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n}\n\n.game-container {\n    display: flex;\n    justify-content: space-around;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n}\n\n.turn-container {\n    margin-top: 25px;\n    display: flex;\n    justify-content: center;\n}\n\n.grid-row {\n    display: flex;\n}\n\n.grid-cell {\n    width: 20px;\n    height: 20px;\n    border: 2px solid #000; /* 2px solid black */\n    color: blue\n}\n\n#ai-board > .grid-row > .grid-cell:hover {\n    border: 2px solid white; /* 2px solid black */\n}\n\n.ship-there {\n    background-color: lightgreen;\n}\n\n.hit {\n    background-color: grey;\n}\n\n#ai-board .ship-there {\n    background-color: white;\n}\n\n#ai-board .hit.ship-there,\n.hit.ship-there {\n    background-color: red;\n}\n\n.grid-container {\n    margin-top: 50px;\n}\n\n.player-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.all-ship-container {\n    margin-top: 70px;\n}\n\n.ship-container {\n    display: flex;\n    justify-content: center;\n}\n\n.ship {\n    display: flex;\n    width: 150px;\n}\n\n.ship.sunk {\n    filter: invert(25%) sepia(95%) saturate(6179%) hue-rotate(355deg) brightness(95%) contrast(121%);\n}\n\n.destroyer {\n    width: 75px;\n}\n\n.destroyer.sunk {\n    filter: invert(25%) sepia(95%) saturate(6179%) hue-rotate(355deg) brightness(95%) contrast(121%);\n}\n\n.cruiser {\n    width: 100px;\n}\n\n.ship-description {\n    display: none;\n    position: relative;\n}\n\n.ship:hover + .ship-description,\n.destroyer:hover + .ship-description {\n    display: block;\n    color: red;\n}\n\n/* The Modal (background) */\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content/Box */\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n    height: 50%;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  #modal-title {\n    display: flex;\n    justify-content: center;\n  }\n\n  #place-ships-container {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .button-container {\n    display: flex;\n    justify-content: center;\n    margin-top: 20px; /* Add some spacing from the above content if needed */\n  }\n  \n  .ship-types {\n    margin-top: 35px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center; \n  }\n\n  .ship-types-content {\n    margin-bottom: 25px;\n  }\n  .button-container button {\n    /* Additional styling for the button */\n  }\n\n\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
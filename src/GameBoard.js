/* eslint-disable no-underscore-dangle */
// variables
// board 10x10
// stores ships in an object
// carrier 5 
// battleship 4
// cruiser 3
// submarine 3
// destroyer 2

const { Ship } = require("./Ship");

const GameBoard = () => {
    const START_BORDER = 0;
    const END_BORDER = 9;
    const _board = Array(10).fill(null).map(() => Array(10).fill(null));
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            _board[i][j] = { "ship": null, "hit": false };
        }
    }

    const _ships = [];

    const getBoard = () => _board;

    const receiveAttack = (y, x) => {
        _board[y][x].hit = true;
        if ( _board[y][x].ship) {
            _board[y][x].ship.hit();
            return "Hit!";
        }
        return "Miss!";
    }

    const shipInCells = (y, x, ship, axis) => {
        if (axis === "X") {
            for (let i = 0; i < ship.getLength(); i++) {
                if (_board[y][x + i].ship != null) return false;
            }
        } else {
            for (let i = 0; i < ship.getLength(); i++) {
                if (_board[y + i][x].ship != null) return false;;
            }
        }
        return true;
    }   

    const canPlaceShip = (y, x, ship, axis) => {
        if ((y < START_BORDER || y > END_BORDER || x < START_BORDER || x > END_BORDER) ||
            (axis === "X" && (x + ship.getLength() - 1 > END_BORDER || !shipInCells(y, x, ship, axis))) ||
            (axis === "Y" && (y + ship.getLength() - 1 > END_BORDER || !shipInCells(y, x, ship, axis)))
        ) return false;

        return true;
    }

    const placeShip = (y, x, ship, axis) => {
        if (!canPlaceShip(y, x, ship, axis)) return false;
        _ships.push(ship);
        if (axis === "X") {
            for (let i = 0; i < ship.getLength(); i++) {
                _board[y][x + i].ship = ship;
            }
        } else {
            for (let i = 0; i < ship.getLength(); i++) {
                _board[y + i][x].ship = ship;
            }
        }
        return true;
    }

    const getShips = () => _ships

    const areAllShipsSunk = () => {
        for (let i = 0; i < _ships.length; i++) {
            if (!_ships[i].isSunk()) {
                return false;
            }
        }
        return true;
    }

    return { getBoard, getShips, canPlaceShip, placeShip, receiveAttack, areAllShipsSunk };
}

module.exports = {
    GameBoard
}

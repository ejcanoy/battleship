/* eslint-disable no-underscore-dangle */
import GameBoard from "./GameBoard.js";
import Player from "./Player.js";
import Ship from "./Ship.js";
import DOM from "./DOM.js";

const BattleshipGame = (() => {
    const SHIP_TYPES = {
        "Carrier": 5,
        "Battleship": 4,
        "Cruiser": 3,
        "Submarine": 3,
        "Destroyer": 2
    }
    let player;
    const playerBoard = GameBoard();
    const aiPlayer = Player("AI");
    const aiBoard = GameBoard();
    let gameOver = false;
    let curMove;
    let lastMove;
    let shipsSunk = 0;

    const getUser = async () => {
            
        const shipKeys = Object.keys(SHIP_TYPES);
        for (let i = 0; i < shipKeys.length; i++) {
            let placed = false;
            const shipName = shipKeys[i];
            const curShip = Ship(SHIP_TYPES[shipName]);
            DOM.displayShipToPlace(curShip, shipName);
            while (!placed) {
                const coordinants = await DOM.getShipCoordinates(curShip, playerBoard); 
                placed = playerBoard.placeShip(coordinants.yResult, coordinants.xResult, curShip, coordinants.axis);
                if (!placed) {
                    console.log("Can't place");
                }
            }
            DOM.displayShips(playerBoard)
        }
        DOM.hideModal();
    }

    const startGame = async () => {
        await getUser();
        player = Player("Player");
        curMove = player
        generateRandomPlaces(aiBoard);
        DOM.displayGame(player, playerBoard);
        DOM.displayGame(aiPlayer, aiBoard)
        while (!gameOver) {
            if (aiBoard.areAllShipsSunk() || playerBoard.areAllShipsSunk()) {
                gameOver = true;
                continue;
            } else if (curMove.getName() === "AI") {
                aiPlayer.makeMove(-1, -1, playerBoard);
                DOM.displayGame(player, playerBoard);
                curMove = player;
            } else {
                let validMoveMade = null;
                while (!validMoveMade) {
                    try {
                    // eslint-disable-next-line no-await-in-loop
                    const move = await DOM.getMove();
                    validMoveMade = player.makeMove(move.y, move.x, aiBoard);
                    } catch{
                        console.error("Try again later");
                    }
                }
                lastMove = validMoveMade;
                DOM.displayGame(aiPlayer, aiBoard);
                const updatedShipsSunk = aiBoard.getShipsSunk();
                if (shipsSunk < updatedShipsSunk) {
                    DOM.displayLastMove(lastMove, shipsSunk);
                    shipsSunk = updatedShipsSunk;
                } else {
                    DOM.displayLastMove(lastMove);
                }

                curMove = aiPlayer;
            }
        }
        DOM.displayGame(aiPlayer, aiBoard);
        DOM.displayGame(player, playerBoard);
        DOM.displayWinner(aiBoard, playerBoard);
    }

    



    const generateRandomPlaces = (board) => {
        const coordinants = []
        const shipKeys = Object.keys(SHIP_TYPES);
        for (let i = 0; i < shipKeys.length; i++) {
            const ship = shipKeys[i];
            let placed = false;
            const curShip = Ship(SHIP_TYPES[ship], ship);
            while (!placed) {
                const xOrY = Math.random() < 0.5 ? "X" : "Y";
                const xCoord = Math.floor(Math.random() * 10);
                const yCoord = Math.floor(Math.random() * 10);
                if (!coordinants.includes([xCoord, yCoord])) {
                    placed = board.placeShip(xCoord, yCoord, curShip, xOrY);
                }
            }
        }
    }

    return {
        startGame
    }

})();

export default BattleshipGame;
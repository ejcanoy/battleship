/* eslint-disable no-underscore-dangle */
import { GameBoard } from "./GameBoard";
import { Player } from "./Player";

const BattleshipGame = (() => {
    const SHIP_TYPES = {
        "Carrier" : 5,
        "Battleship" : 4,
        "Cruiser" : 3,
        "Submarine" : 3,
        "Destroyer" : 2
    }
    let player;
    const playerBoard = GameBoard();
    const aiPlayer = Player("AI");
    const aiBoard = GameBoard();
    
    const gameLoop = () => {

    }

    const _startGame = () => {
        // place all the ships from the user
        // 
    }

    const generateRandomPlaces = () => {
         
    }
    // player 1
    // player1Board
    // ai
    // aiBoard
    // isGameOver
    // winner

    // game loop
    // start game()
    // updateScreen
    // while (!isGameOver) {
        // game over
        // if aiBoard.isAllShipsSunk || player1Board.isAllShipSunk
            // gameOver = true;
            // aiBoard.isAllShipSunk
                // winner = player1.getName
            // winner = "AI"
        // game process
            // determine turn
                // player1Move
            // else 
                // aImove
        // update screen


    // figure out module how to get user input?
    

})();
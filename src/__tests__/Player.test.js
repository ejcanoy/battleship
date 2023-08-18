import GameBoard from "../GameBoard";
import Player from "../Player"
import Ship from "../Ship";

describe("Player", () => {
    let player;
    let aiPlayer;
    let gameBoard;
    let carrier;

    beforeEach(() => {
        player = Player("Sammy");
        aiPlayer = Player("AI");
        gameBoard = GameBoard();
        carrier = Ship(5);
        gameBoard.placeShip(0, 2, carrier, "X");
    })

    test("Get Name", () => {
        expect(player.getName()).toBe("Sammy")
    })

    test("Make move with user move", () => {
        expect(player.makeMove(0, 2, gameBoard)).toBe("Hit!");
    })

    test("AI makes a move", () => {
        const mockReceiveAttack = jest.fn(() => "Hit!"); 
        gameBoard = { receiveAttack: mockReceiveAttack };

        const result = aiPlayer.makeMove(0, 0, gameBoard);

        expect(result).toBe("Hit!");
        expect(mockReceiveAttack).toHaveBeenCalledTimes(1);
    });

    test("Get moves", () => {
        expect(player.makeMove(0, 3, gameBoard)).toBe("Hit!");
        expect(player.getMoves()).toStrictEqual([[0,3]]);
    })

})
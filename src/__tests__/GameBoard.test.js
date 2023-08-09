
import { GameBoard } from "../GameBoard"
import { Ship } from "../Ship";

    

describe("GameBoard tests", () => {
    let testGameBoard;
    let testCarrier;
    let testBattleship;
    let testCruiser;
    let testSubmarine;
    let testDestroyer;

    beforeEach(() => {
        testGameBoard = GameBoard();
        testCarrier = Ship(5);
        testBattleship = Ship(4);
        testCruiser = Ship(3);
        testSubmarine = Ship(3);
        testDestroyer = Ship(2);
    });

    // test("board is initialized", () => {
    //     expect(testGameBoard.getBoard()).toStrictEqual(Array(10).fill(Array(10).fill({"ship" : null, "hit" : false})));
    // });

    test("place ship x axis", () => {
        expect(testGameBoard.placeShip(0,0, testCarrier, "X")).toBe(true);
    });

    test("place ship y axis", () => {
        expect(testGameBoard.placeShip(0,0, testCarrier, "Y")).toBe(true);
    });

    test("place ship but starting coordinants is of bounds", () => {
        expect(testGameBoard.placeShip(-1,0, testCarrier, "X")).toBe(false);
    });

    test("place ship but it extends out of bounds x", () => {
        expect(testGameBoard.placeShip(0,6, testCarrier, "X")).toBe(false);
    })

    test("place ship but it extends out of bounds y", () => {
        expect(testGameBoard.placeShip(6,0, testCarrier, "Y")).toBe(false);
    })

    test("ship in bordering cells", () => {
        expect(testGameBoard.placeShip(0,0, testCarrier, "X")).toBe(true);
        expect(testGameBoard.placeShip(0,2, testBattleship, "X")).toBe(false);
    })

    test("there are no ships on gameboard", () => {
        expect(testGameBoard.getShips()).toStrictEqual([]);
    })

    test("there are ships on the the gameboard", () => {
        expect(testGameBoard.placeShip(0,0, testCarrier, "X")).toBe(true);
        expect(testGameBoard.placeShip(0,5, testBattleship, "X")).toBe(true);
        expect(testGameBoard.getShips()).toStrictEqual([testCarrier, testBattleship]);
    })

    test("recived attack and its a hit", () => {
        expect(testGameBoard.placeShip(0,0, testCarrier, "X")).toBe(true);
        expect(testGameBoard.receiveAttack(0, 0)).toBe("Hit!");
        expect(testCarrier.getHits()).toBe(1);
    })

    test("recieved attack and its a miss", () => {
        expect(testGameBoard.placeShip(0,0, testCarrier, "X")).toBe(true);
        expect(testGameBoard.receiveAttack(0, 6)).toBe("Miss!");
    })

    test("are all ships sunk", () => {
        expect(testGameBoard.placeShip(0,0, testDestroyer, "X")).toBe(true);
        expect(testGameBoard.receiveAttack(0,0)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(0,1)).toBe("Hit!");
        expect(testGameBoard.areAllShipsSunk()).toBe(true);
    })

    test("all ships are sunk 2 ships", () => {
        expect(testGameBoard.placeShip(0,0, testDestroyer, "X")).toBe(true);
        expect(testGameBoard.placeShip(1,0, testSubmarine, "Y")).toBe(true);
        expect(testGameBoard.receiveAttack(0,0)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(0,1)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(1,0)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(2,0)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(3,0)).toBe("Hit!");
        expect(testGameBoard.areAllShipsSunk()).toBe(true);
    })

    test("all ships aren't sunk 1 ship", () => {
        expect(testGameBoard.placeShip(0,0, testDestroyer, "X")).toBe(true);
        expect(testGameBoard.receiveAttack(0,0)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(0,2)).toBe("Miss!");
        expect(testGameBoard.areAllShipsSunk()).toBe(false);
    })

    test("all ships aren't sunk 2 ships", () => {
        expect(testGameBoard.placeShip(0,0, testDestroyer, "X")).toBe(true);
        expect(testGameBoard.placeShip(1,0, testSubmarine, "Y")).toBe(true);
        expect(testGameBoard.receiveAttack(0,0)).toBe("Hit!");
        expect(testGameBoard.receiveAttack(0,1)).toBe("Hit!");
        expect(testGameBoard.areAllShipsSunk()).toBe(false);
    })
});


import Ship from "../Ship"

describe("Ship tests", () => {
    let testBoat;
    
    beforeEach(() => {
        testBoat = Ship(1, "Test");
    })

    test("Get ship length", () => {
        expect(testBoat.getLength()).toBe(1);
    })
    
    test("Get # hits", () => {
        expect(testBoat.getHits()).toStrictEqual(0);
    })
    
    test("Hit and correct # of hits", () => {
        testBoat.hit();
        expect(testBoat.getHits()).toStrictEqual(1);
    })
    
    test("# of hits < length and ship isn't sunk", () => {
        expect(testBoat.isSunk()).toBe(false);
    })
    
    test("ship is sunk", () => {
        testBoat.hit();
        expect(testBoat.isSunk()).toBe(true);
    })
})






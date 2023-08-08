import { Ship } from "../Ship"

test("Get ship length", () => {
    expect(Ship(1).getLength()).toBe(1);
})

test("Get # hits", () => {
    expect(Ship(1).getHits()).toStrictEqual(0);
})

test("Hit and correct # of hits", () => {
    const curShip = Ship(1);
    curShip.hit();
    expect(curShip.getHits()).toStrictEqual(1);
})

test("# of hits < length and ship isn't sunk", () => {
    const curShip = Ship(1);
    expect(curShip.isSunk()).toBe(false);
})

test("ship is sunk", () => {
    const curShip = Ship(1);
    curShip.hit();
    expect(curShip.isSunk()).toBe(true);
})





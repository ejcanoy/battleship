import { ship } from "../Ship"



test("Get ship length", () => {
    expect(ship(1).getLength()).toBe(1);
})

test("Get # hits", () => {
    expect(ship(1).getNumHits()).toBe(0);
})

test("Hit and correct # of hits", () => {
    const curShip = ship(1);
    curShip.hit();
    expect(curShip.getNumHits()).toBe(1);
})

test("# of hits < length and ship isn't sunk", () => {
    const curShip = ship(1);
    expect(curShip.isSunk()).toBe(false);
})

test("ship is sunk", () => {
    const curShip = ship(1);
    curShip.hit();
    expect(curShip.isSunk()).toBe(true);
})





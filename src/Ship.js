/* eslint-disable no-underscore-dangle */
// ship
const ship = (length) => {
    const _length = length;
    let _numHits = 0;

    const isSunk = () => _numHits === _length;

    const hit = () => {
        _numHits += 1;
    }

    const getNumHits = () => _numHits;

    const getLength = () => _length;

    return { isSunk, hit, getNumHits, getLength };
  };

module.exports = {
    ship
};
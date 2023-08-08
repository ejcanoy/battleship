/* eslint-disable no-underscore-dangle */
const Ship = (length) => {
    const _length = length;
    let _hits = 0;

    const isSunk = () => _hits === _length;

    const hit = () => {
        _hits += 1;
    }

    const getHits = () => _hits;

    const getLength = () => _length;

    return { isSunk, hit, getHits, getLength };
  };

module.exports = {
    Ship
};
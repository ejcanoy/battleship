
const Player = (name) => {
    const _name = name;
    const _moves = [];

    const getName = () => _name;

    const generateLegalMove = () => {
        let y = -1;
        let x = -1;
        while(y < 0 && x < 0 && !(_moves.includes([y,x]))) {
            y = Math.floor(Math.random() * 10);
            x = Math.floor(Math.random() * 10);
        }
        return {y , x}
    }

    const makeMove = (y, x, gameBoard) => {
        if (_name === "AI") {
            const coordinants = generateLegalMove();
            _moves.push([coordinants.y, coordinants.x]);
            return gameBoard.receiveAttack(coordinants.y, coordinants.x);
        }
        _moves.push([y, x]);
        return gameBoard.receiveAttack(y, x);
    }

    const getMoves = () => _moves;

    return { getName, makeMove, getMoves }
}

module.exports = {
    Player
}
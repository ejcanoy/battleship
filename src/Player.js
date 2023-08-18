const Player = (name) => {
    const _name = name;
    const _moves = new Set(); // Use a Set to store unique move coordinates

    const getName = () => _name;

    const generateLegalMove = () => {
        let y = -1;
        let x = -1;
        while (y < 0 || x < 0 || _moves.has(JSON.stringify([y, x]))) {
            y = Math.floor(Math.random() * 10);
            x = Math.floor(Math.random() * 10);
        }
        return { y, x };
    };

    const makeMove = (y, x, gameBoard) => {
        if (_name === "AI") {
            const coordinates = generateLegalMove();
            _moves.add(JSON.stringify([coordinates.y, coordinates.x]));
            return gameBoard.receiveAttack(coordinates.y, coordinates.x);
        } if (!_moves.has(JSON.stringify([y, x]))) {
            _moves.add(JSON.stringify([y, x]));
            return gameBoard.receiveAttack(y, x);
        } 
        return null;
        

    };

    const getMoves = () => Array.from(_moves).map(JSON.parse);

    return { getName, makeMove, getMoves };
};

export default Player;

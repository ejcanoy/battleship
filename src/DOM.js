const DOM = (() => {
    const inializeEventListeners = () => {
        const axisElement = document.querySelector("#axis-button");

        axisElement.addEventListener("click", () => {
            if (axisElement.innerHTML === "X axis") {
                axisElement.innerHTML = "Y axis";
            } else {
                axisElement.innerHTML = "X axis";
            }
        });
    }

    const hideModal = () => {
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
    }

    const displayShips = (playerBoard) => {
        const curBoard = playerBoard.getBoard();
        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 10; c++) {
                if (curBoard[r][c].ship) {
                    const cell = document.querySelector(`#grid-${r}-${c}`);
                    cell.classList.add("ship-there");
                }
            }
        }
    }


    const getShipCoordinates = (curShip, playerBoard) => new Promise(resolve => {
        const gridContainer = document.getElementById("modal-content");
        const gridRows = gridContainer.querySelectorAll(".grid-row");
        let xResult;
        let yResult;
        gridRows.forEach(row => {

            const gridCells = row.querySelectorAll(".grid-cell");
            gridCells.forEach(cell => {
                const curId = cell.id;
                const x = parseInt(curId.substring(7, 8));
                const y = parseInt(curId.substring(5, 6));

                cell.addEventListener("click", () => {
                    const axisElement = document.querySelector("#axis-button");
                    const axis = axisElement.innerHTML.substring(0, 1);
                    xResult = x;
                    yResult = y;
                    resolve({ xResult, yResult, axis })
                })

                cell.addEventListener("mouseover", () => {
                    const axisElement = document.querySelector("#axis-button");
                    const axis = axisElement.innerHTML.substring(0, 1);

                    if (playerBoard.canPlaceShip(y, x, curShip, axis)) {
                        cell.style.backgroundColor = "lightgreen";
                    } else {
                        cell.style.backgroundColor = "red";
                    }
                });

                cell.addEventListener("mouseout", () => {
                    if (playerBoard.getBoard()[y][x].ship) {
                        cell.style.backgroundColor = "lightgreen";
                    } else {
                        cell.style.backgroundColor = "";
                    }
                });
            });
        });
    })

    const displayLastMove = (lastMove, shipsSunk = null) => {
        const turnText = document.getElementById("turn-text");
        if (shipsSunk !== null) {
            turnText.innerHTML = "Ship sunk!";

        } else {
            turnText.innerHTML = `Last move was a ${lastMove}`;

        }
    }

    const displayWinner = (aiBoard, playerBoard) => {
        const turnText = document.getElementById("turn-text");
        if (aiBoard.areAllShipsSunk()) {
            turnText.innerHTML = "You Won!"

        } else {
            turnText.innerHTML = "You Lost!"

        }
    }

    const getMove = () => new Promise(resolve => {
        const gridContainer = document.getElementById("ai-board");
        const gridRows = gridContainer.querySelectorAll(".grid-row");

        gridRows.forEach(row => {
            const gridCells = row.querySelectorAll(".grid-cell");
            gridCells.forEach(cell => {
                cell.addEventListener("click", () => {
                    const cellId = cell.id;
                    const y = cellId.substring(7, 8);
                    const x = cellId.substring(9, 10)
                    resolve({ y, x });
                });
            });
        });
    });

    const displayGame = (player, playerBoard) => {
        let gridName;
        if (player.getName() === "AI") {
            gridName = "grid-2-";
        } else {
            gridName = "grid-1-";
        }
        const curBoard = playerBoard.getBoard();
        for (let r = 0; r < 10; r++) {
            for (let c = 0; c < 10; c++) {
                if (curBoard[r][c].ship) {
                    const cell = document.querySelector(`#${gridName}${r}-${c}`);
                    cell.classList.add("ship-there");
                }

                if (curBoard[r][c].hit) {
                    const cell = document.querySelector(`#${gridName}${r}-${c}`);
                    cell.classList.add("hit");
                }

            }
        }

        const boats = playerBoard.getShips();
        for (const ship of boats) {
            if (ship.isSunk()) {
                const shipName = ship.getName().toLowerCase();
                const shipElmt = document.querySelector(`#${gridName}${shipName}`);
                shipElmt.classList.add("sunk");
            }
        }
    }

    inializeEventListeners();

    return {
        displayGame,
        getMove,
        displayLastMove,
        displayWinner,
        getShipCoordinates,
        displayShips,
        hideModal
    }
})();

export default DOM;
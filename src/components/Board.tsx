import Square from "./Square";
import { useState } from "react";

const Board = () => {
    const size = 3;
    const [player, setPlayer] = useState("X");
    const [squareValues, setSquareValues] = useState(new Array(9).fill(""));

    const switchPlayer = () => {
        player === "X" ? setPlayer("O") : setPlayer("X");
    };

    const handleSquareClick = (key: number) => {
        let newSquares = squareValues.slice();
        newSquares[key] = player;
        switchPlayer();
        setSquareValues(newSquares);
    };

    // create squares in a row
    const createSquareRows = (rowLength: number, numOfSquares: number) => {
        const rows = [];

        for (let i = 0; i < rowLength; i++) {
            let squares = [];
            for (let j = 0; j < numOfSquares; j++) {
                squares.push(
                    <Square
                        value={squareValues[i * numOfSquares + j]}
                        key={i * numOfSquares + j}
                        onSquareClick={() =>
                            handleSquareClick(i * numOfSquares + j)
                        }
                    ></Square>
                );
            }
            rows.push(
                <div className="board-row" key={`row-${i}`}>
                    {squares}
                </div>
            );
        }

        return <>{rows}</>;
    };

    return <div className="board">{createSquareRows(size, size)}</div>;
};

export default Board;

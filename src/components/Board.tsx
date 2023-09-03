import Square from "./Square";
import { useState, useEffect } from "react";

const Board = () => {
    const size = 3;
    const [player, setPlayer] = useState("X");
    const [squareValues, setSquareValues] = useState(new Array(9).fill(""));
    const [history, setHistory] = useState([new Array(9).fill("")]);

    useEffect(() => {
        console.log(history);
    }, [history]);

    const switchPlayer = () => {
        player === "X" ? setPlayer("O") : setPlayer("X");
    };

    const handleSquareClick = (key: number) => {
        let newSquares = squareValues.slice();

        if (!newSquares[key]) {
            newSquares[key] = player;
            switchPlayer();
            setSquareValues(newSquares);

            let newState = history.slice();
            newState.push(newSquares);
            setHistory(newState);
        }
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

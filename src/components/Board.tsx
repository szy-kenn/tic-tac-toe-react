import Square from "./Square";
import { useState, useEffect } from "react";

const countItem = <T,>(item: T, array: T[]) => {
    let count = 0;
    array.forEach((i) => {
        if (i === item) {
            count++;
        }
    });
    return count;
};

const Board = () => {
    const size = 3;
    const [player, setPlayer] = useState("X");
    const [currentKey, setCurrentKey] = useState(-1);
    const [squareValues, setSquareValues] = useState(new Array(9).fill(""));
    const [winner, setWinner] = useState("");

    useEffect(() => {
        if (currentKey !== -1) {
            if (countItem("", squareValues) < 5) {
                setWinner(checkWinner());
            }
            switchPlayer();
        }
    }, [currentKey]);

    const checkWinner = (): string => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squareValues[a] &&
                squareValues[a] === squareValues[b] &&
                squareValues[b] === squareValues[c]
            ) {
                return squareValues[a];
            }
        }

        if (countItem("", squareValues) === 0) {
            return "Tie";
        }

        return "";
    };

    const switchPlayer = () => {
        player === "X" ? setPlayer("O") : setPlayer("X");
    };

    const handleSquareClick = (key: number) => {
        if (winner) {
            return;
        }

        let newSquares = squareValues.slice();

        if (!newSquares[key]) {
            newSquares[key] = player;
            setCurrentKey(key);
            setSquareValues(newSquares);
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

    return (
        <>
            <div className="board">{createSquareRows(size, size)}</div>
            <div className="game-info">
                <p>
                    {winner
                        ? winner === "Tie"
                            ? "Result: Tie"
                            : `Winner: ${winner}`
                        : `Player to move: ${player}`}
                </p>
            </div>
        </>
    );
};

export default Board;

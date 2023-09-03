function Header({title}) {
    return <h1>{title ? title : "Tic-Tac-Toe"}</h1>
}

function Square() {
    return <button className="square">X</button>
}

function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}

export default function App() {
    return (
        <div className="wrapper">
            <Header />
            <Board />
        </div>
    );
}
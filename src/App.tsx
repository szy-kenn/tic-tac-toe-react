import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

interface Props {
    title: string;
}

function App({ title }: Props) {
    return (
        <div className="wrapper">
            <Header title={title} />
            <Board />
        </div>
    );
}

export default App;

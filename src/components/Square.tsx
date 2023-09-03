interface SquareProps {
    value: string;
    onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
    return (
        <div className="square" onClick={onSquareClick}>
            <p>{value}</p>
        </div>
    );
};

export default Square;

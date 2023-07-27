import { useState } from "react";
/*
Learning React:
https://react.dev/learn/tutorial-tic-tac-toe
*/

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   // console.log("clicked");
  //   setValue("X");
  // }
  // return (
  //   <button className="square" onClick={handleClick}>
  //     {value}
  //   </button>
  // );
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function Board({ xIsNext, squares, onPlay }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  //Player Switch
  // const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      //If already filled, disable update by returning early
      return;
    }
    const nextSquares = squares.slice(); //creates a copy of "squares" array
    // nextSquares[i] = "X";
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    onPlay(nextSquares);

    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  winner
    ? (status = "Winner: " + winner)
    : (status = "Next player: " + (xIsNext ? "X" : "O"));

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <br />
      <br />
      <br />
      <div>
        <h3>Current Task:</h3>
        <p>Learning React: https://react.dev/learn/tutorial-tic-tac-toe</p>
        {/* <h6>========== On Break, BRB ========== </h6> */}
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        {/*  */}
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

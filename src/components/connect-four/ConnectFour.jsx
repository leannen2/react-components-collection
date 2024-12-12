import { useState } from "react";
import "./styles.css";
import Modal from "../modal/Modal";

export default function Board() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
  const [gameOver, setGameOver] = useState(false);

  function resetGame() {
    setBoard([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
    setGameOver(false);
    setPlayer(1);
  }

  function checkWin(row, col) {
    // check row
    let count = 1;
    for (let c = col - 1; c >= 0; c--) {
      if (board[row][c] === player) {
        count++;
      } else {
        break;
      }
    }

    for (let c = col + 1; c < board[0].length; c++) {
      if (board[row][c] === player) {
        count++;
      } else {
        break;
      }
    }

    if (count === 4) {
      setGameOver(true);
      return true;
    }

    // check column
    count = 1;
    for (let r = row - 1; r >= 0; r--) {
      if (board[r][col] === player) {
        count++;
      } else {
        break;
      }
    }

    for (let r = row + 1; r < board.length; r++) {
      if (board[r][col] === player) {
        count++;
      } else {
        break;
      }
    }

    if (count === 4) {
      setGameOver(true);
      return true;
    }

    // check diagnol
    count = 1;
    for (let i = 1; i < board.length; i++) {
      if (row - i >= 0 && col - i >= 0 && board[row - i][col - i] === player) {
        count++;
      } else {
        break;
      }
    }

    for (let i = 1; i < board.length; i++) {
      if (
        row + i < board.length &&
        col + i < board[0].length &&
        board[row + i][col + i] === player
      ) {
        count++;
      } else {
        break;
      }
    }

    if (count === 4) {
      setGameOver(true);
      return true;
    }

    // check other diagnol
    count = 1;
    for (let i = 1; i < board.length; i++) {
      if (
        row + i < board.length &&
        col - i >= 0 &&
        board[row + i][col - i] === player
      ) {
        count++;
      } else {
        break;
      }
    }

    for (let i = 1; i < board.length; i++) {
      if (
        row - i >= 0 &&
        col + i < board[0].length &&
        board[row - i][col + i] === player
      ) {
        count++;
      } else {
        break;
      }
    }

    if (count === 4) {
      setGameOver(true);
      return true;
    }

    return false;
  }

  function checkTie() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === 0) {
          return false;
        }
      }
    }

    setPlayer(0);
    setGameOver(true);
    return true;
  }

  function moveHandler(colIndex) {
    // console.log(board);
    if (board[0][colIndex] !== 0) {
      return;
    }

    for (let i = 0; i < board.length; i++) {
      if (board[board.length - i - 1][colIndex] === 0) {
        let newBoard = [...board];
        newBoard[board.length - i - 1][colIndex] = player;
        setBoard(newBoard);
        if (checkWin(board.length - i - 1, colIndex) || checkTie()) {
          return;
        }
        setPlayer(player === 1 ? 2 : 1);
        break;
      }
    }
  }

  return (
    <div className="connect-four-container padding-20">
      <h3>{!gameOver ? `Player ${player}'s turn` : `Player ${player} won!`}</h3>
      <table className="connect-four-table">
        <tbody>
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <Row
              key={row}
              rowIndex={row}
              rowNums={board[row]}
              moveHandler={moveHandler}
            />
          ))}
        </tbody>
      </table>
      <Modal open={gameOver}>
        <p>{player === 0 ? "It's a tie!" : `Player ${player} won!`}</p>
        <button onClick={resetGame}>Play Again</button>
      </Modal>
    </div>
  );
}

function Row({ rowIndex, rowNums, moveHandler }) {
  // Render each space
  return (
    <tr className="connect-four-row">
      {[0, 1, 2, 3, 4, 5, 6].map((colIndex) => (
        <Space
          key={(rowIndex, colIndex)}
          colIndex={colIndex}
          num={rowNums[colIndex]}
          moveHandler={moveHandler}
        />
      ))}
    </tr>
  );
}

function Space({ colIndex, num, moveHandler }) {
  return (
    <td
      onClick={() => {
        moveHandler(colIndex);
      }}
    >
      <div
        className={
          "piece" +
          (num === 1 ? " space-red" : num === 2 ? " space-yellow" : "")
        }
      ></div>
    </td>
  );
}

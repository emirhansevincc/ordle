import { useEffect, useState } from "react";
import "./App.css";
import Board from "./companents/Board";
import Keyboard from "./companents/Keyboard";
import { createContext } from "react";
import { emptyLayout, generateWordSet } from "./companents/Words";
import GameOver from "./companents/GameOver";

export const AppContext = createContext();
function App() {
  const [board, setBoard] = useState(emptyLayout);
  const [currentAttempt, setCurrentAttempt] = useState({
    rowAttempt: 0,
    letterAttempt: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [makeTheWordsDisappear, setMakeTheWordsDisappear] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.whatIsTheTodaysWord);
    });
  }, []);

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterAttempt > 4) return;
    const emptyBoard = [...board];
    emptyBoard[currentAttempt.rowAttempt][currentAttempt.letterAttempt] =
      keyValue;
    setBoard(emptyBoard);
    setCurrentAttempt({
      rowAttempt: currentAttempt.rowAttempt,
      letterAttempt: currentAttempt.letterAttempt + 1,
    });
  };
  const enterFunction = () => {
    if (currentAttempt.letterAttempt !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.rowAttempt][i];
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        rowAttempt: currentAttempt.rowAttempt + 1,
        letterAttempt: 0,
      });
    } else {
      alert("Word not found in the word set");
    }

    if (currentWord.toLowerCase() === correctWord.toLowerCase()) {
      setGameOver({
        gameOver: true,
        guessedWord: true,
      });
      return;
    }

    if (currentAttempt.rowAttempt === 5) {
      setGameOver({
        gameOver: true,
        guessedWord: false,
      });
      return;
    }
  };
  const deleteFunction = () => {
    if (currentAttempt.letterAttempt == 0) return;
    const emptyBoard = [...board];
    emptyBoard[currentAttempt.rowAttempt][currentAttempt.letterAttempt - 1] =
      "";
    setBoard(emptyBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterAttempt: currentAttempt.letterAttempt - 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Ordle</h1>
      </nav>

      <div className="game">
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttempt,
            setCurrentAttempt,
            onSelectLetter,
            deleteFunction,
            enterFunction,
            setMakeTheWordsDisappear,
            makeTheWordsDisappear,
            gameOver,
            setGameOver,
            correctWord,
          }}
        >
          {gameOver.gameOver ? (
            <GameOver />
          ) : (
            <>
              <Board />
              <Keyboard />
            </>
          )}
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;

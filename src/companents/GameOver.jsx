import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currentAttempt } =
    useContext(AppContext);

  return (
    <div className="gameOver">
      <h1 className="finish">
        {gameOver.guessedWord ? "You Won!" : "You Failed"}
      </h1>
      <h1>Correct Word : {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.rowAttempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;

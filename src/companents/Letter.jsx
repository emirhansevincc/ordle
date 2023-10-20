import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPosition, rowCount }) => {
  const { board, correctWord, currentAttempt, setMakeTheWordsDisappear } =
    useContext(AppContext);
  const letter = board[rowCount][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almostCorrect =
    !correct && correctWord.toUpperCase().includes(letter) && letter !== "";
  const status =
    currentAttempt.rowAttempt > rowCount &&
    (correct ? "correct" : almostCorrect ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almostCorrect) {
      setMakeTheWordsDisappear((prev) => [...prev, letter]);
    }
  }, [currentAttempt.rowAttempt]);

  return (
    <div className="letter" id={status}>
      {letter}
    </div>
  );
};

export default Letter;

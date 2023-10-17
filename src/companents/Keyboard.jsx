import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    onSelectLetter,
    deleteFunction,
    enterFunction,
    makeTheWordsDisappear,
  } = useContext(AppContext);

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      enterFunction();
    } else if (e.key === "Backspace") {
      deleteFunction();
    } else {
      keys1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key
              keyValue={key}
              disabledKey={makeTheWordsDisappear.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key
              keyValue={key}
              disabledKey={makeTheWordsDisappear.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigText />
        {keys3.map((key) => {
          return (
            <Key
              keyValue={key}
              disabledKey={makeTheWordsDisappear.includes(key)}
            />
          );
        })}
        <Key keyValue={"DELETE"} bigText />
      </div>
    </div>
  );
};

export default Keyboard;

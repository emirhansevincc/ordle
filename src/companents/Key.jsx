import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, bigText, disabledKey }) => {
  const { onSelectLetter, deleteFunction, enterFunction } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      enterFunction();
    } else if (keyValue === "DELETE") {
      deleteFunction();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div
      className="key"
      id={bigText ? "big" : disabledKey && "disabled"}
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
};

export default Key;

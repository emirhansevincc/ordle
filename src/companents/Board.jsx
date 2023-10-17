import React from "react";
import Letter from "./Letter";

const Board = () => {
  return (
    <>
      <div className="board">
        <div className="row">
          <Letter letterPosition={0} rowCount={0} />
          <Letter letterPosition={1} rowCount={0} />
          <Letter letterPosition={2} rowCount={0} />
          <Letter letterPosition={3} rowCount={0} />
          <Letter letterPosition={4} rowCount={0} />
        </div>
        <div className="row">
          <Letter letterPosition={0} rowCount={1} />
          <Letter letterPosition={1} rowCount={1} />
          <Letter letterPosition={2} rowCount={1} />
          <Letter letterPosition={3} rowCount={1} />
          <Letter letterPosition={4} rowCount={1} />
        </div>
        <div className="row">
          <Letter letterPosition={0} rowCount={2} />
          <Letter letterPosition={1} rowCount={2} />
          <Letter letterPosition={2} rowCount={2} />
          <Letter letterPosition={3} rowCount={2} />
          <Letter letterPosition={4} rowCount={2} />
        </div>
        <div className="row">
          <Letter letterPosition={0} rowCount={3} />
          <Letter letterPosition={1} rowCount={3} />
          <Letter letterPosition={2} rowCount={3} />
          <Letter letterPosition={3} rowCount={3} />
          <Letter letterPosition={4} rowCount={3} />
        </div>
        <div className="row">
          <Letter letterPosition={0} rowCount={4} />
          <Letter letterPosition={1} rowCount={4} />
          <Letter letterPosition={2} rowCount={4} />
          <Letter letterPosition={3} rowCount={4} />
          <Letter letterPosition={4} rowCount={4} />
        </div>
        <div className="row">
          <Letter letterPosition={0} rowCount={5} />
          <Letter letterPosition={1} rowCount={5} />
          <Letter letterPosition={2} rowCount={5} />
          <Letter letterPosition={3} rowCount={5} />
          <Letter letterPosition={4} rowCount={5} />
        </div>
      </div>
    </>
  );
};

export default Board;

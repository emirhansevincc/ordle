import React from "react";

const Rules = () => {
  return (
    <div className="rules-container">
      <h1>Wordle Rules</h1>
      <p>Wordle is a word puzzle game with the following rules:</p>
      <ol className="rules">
        <li>Guess a five-letter word within six attempts.</li>
        <li>The game provides feedback for each guess:</li>
        <ul>
          <li>
            Correct letters are highlighted in{" "}
            <span style={{ color: "green" }}>green</span>.
          </li>
          <li>
            Letters that are in the word but in the wrong position are
            highlighted in <span style={{ color: "yellow" }}>yellow</span>.
          </li>
          <li>
            Letters that are not in the word are highlighted in{" "}
            <span style={{ color: "gray" }}>gray</span>.
          </li>
        </ul>
        <li>
          Use the feedback to strategically guess words and narrow down the
          possibilities.
        </li>
        <li>Try to guess the target word within the allotted six attempts.</li>
      </ol>
    </div>
  );
};

export default Rules;

import React, { useState } from "react";
import VisualMemoryGame from "../components/visualMemoryGame/VisualMemoryGame";
import "../css/VisualMemoryGame.css";

export default function VisualMemoryPage() {
  const [started, setStarted] = useState(false);
  const [levelReached, setLevelReached] = useState(0);

  function startGame() {
    setStarted(true);
  }

  function endGame() {
    setStarted(false);
  }

  return (
    <div className="page">
      <h1>Visual Memory Test</h1>

      {levelReached > 0 ? <h2>you reached level {levelReached}</h2> : <></>}

      {started ? (
        <VisualMemoryGame
          endGame={endGame}
          setLevelReached={setLevelReached}
        ></VisualMemoryGame>
      ) : (
        <button className="start-game-button" onClick={startGame}>
          start
        </button>
      )}
    </div>
  );
}

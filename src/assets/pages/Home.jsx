import React from "react";
import Preview from "../components/main/Preview";

function Home() {
  return (
    <div className="page">
      <Preview
        name={"Visual Memory game"}
        path={"/VisualMemory"}
        img={"VisualMemoryGame.png"}
      ></Preview>

      <span>
        <h1 className="message">more games to come!</h1>
      </span>
    </div>
  );
}

export default Home;

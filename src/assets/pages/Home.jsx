import React from "react";
import Preview from "../components/main/Preview";

function Home() {
  return (
    <div className="page">
      <Preview
        name={"Visual Memory game"}
        path={"/VisualMemory"}
        img={"src/assets/img/VisualMemoryGame.png"}
      ></Preview>
    </div>
  );
}

export default Home;

import { useState } from "react";
import "./assets/css/App.css";
import VisualMemoryPage from "./assets/pages/VisualMemoryPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./assets/components/main/Header";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";

function App() {
  return (
    <>
      <BrowserRouter basename="/littleGames/">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/VisualMemory" element={<VisualMemoryPage />} />
          <Route path="/about" element={<About></About>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

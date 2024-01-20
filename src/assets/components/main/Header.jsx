import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

export default function Header() {
  return (
    <header>
      <nav id="main-nav">
        <div className="brand">
          <Link to="/">
            <img src="game.svg"></img>
            <span>
              little
              <strong>Games</strong>
            </span>
          </Link>
        </div>
        <div id="menu">
          <ul>
            <li>
              <Link to="https://github.com/louisssxu/littleGames">github</Link>
            </li>

            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

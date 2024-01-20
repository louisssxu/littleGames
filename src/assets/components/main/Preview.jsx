import React from "react";
import { Link } from "react-router-dom";
import "../../css/Preview.css";

function Preview({ name, path, img }) {
  return (
    <Link to={path}>
      <div className="preview-box">
        <img className="preview-img" src={img}></img>
        <div className="title">{name}</div>
      </div>
    </Link>
  );
}

export default Preview;

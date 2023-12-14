// Hbtn.js
import React from "react";
import "./hbtn.css";
import '@fortawesome/fontawesome-free/css/all.css';

function Hbtn() {
  return (
    <div className="inputContainer">
      <input
        type="text"
        name="search"
        className="inputBox"
        placeholder="Begin Your Search Here..."
        autoComplete="off"
      />
      <i className="fa fa-angle-right"></i>
      <div className="blinking-bar"></div>
    </div>
  );
}

export default Hbtn;

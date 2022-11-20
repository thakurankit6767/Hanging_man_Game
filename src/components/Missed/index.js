import React from "react";
import "./styled.sass";

export default ({ failedLetters }) => (
  <div className="fail-box">
    <h1 className="fail-box-title">You missed:</h1>
    <div className="fail-box-menu">
      {failedLetters.map((item) => (
        <div className="fail-box-menu-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  </div>
);

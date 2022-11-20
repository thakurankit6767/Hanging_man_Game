import React from "react";
import "./styled.sass";

export default ({ blank_space, corrWords, wordApi }) => (
  <div className="word_box_main">
    {blank_space.map((item, index) => (
      <div className="word_box" disabled key={`space-${index}`} />
    ))}
    {wordApi.map((words, index) => {
      return (
        <div className="word_box" key={index}>
          {corrWords.find((x) => x === words) ? words : ""}
        </div>
      );
    })}
  </div>
);

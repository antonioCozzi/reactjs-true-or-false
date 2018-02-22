import React from "react";

const Button = ({ answerValue, onClick }) => (
  <button
    className="button col-md-6"
    value={answerValue}
    onClick={onClick}
    className={
      answerValue === "true"
        ? "button-true"
        : answerValue === "false" ? "button-false" : "button-restart"
    }
  >
    {answerValue.toUpperCase()}
  </button>
);

export default Button;

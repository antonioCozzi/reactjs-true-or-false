import React from "react";
import questions from "../questions.json";

const Question = ({ index = 0, value = questions[0] }) => (
  <p key={index}>{value.question}</p>
);

export default Question;

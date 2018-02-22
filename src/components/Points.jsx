import React from "react";

const Points = ({ points = 0 }) => (
  <p className="points">
    Your score: <span className="number">{points}</span>
  </p>
);

export default Points;

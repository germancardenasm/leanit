import React from "react";
import "./Result.css";
import Truck from "../UI/Truck/Truck";

const Result = props => {
  return (
    <div className="result">
      <Truck />
      <p>$250.00</p>
      <p className="total">1</p>
    </div>
  );
};

export default Result;

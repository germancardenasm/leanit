import React from "react";
import "./Result.css";
import Truck from "../UI/Truck/Truck";

const Result = props => {
  return (
    <div className="result">
      <Truck />
      <p>${props.price}</p>
      <p className="total">{props.qty}</p>
    </div>
  );
};

export default Result;

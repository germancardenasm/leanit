import React from "react";
import "./Quotation.css";
import Date from "../Date/Date";
import Destination from "../Destination/Destination";
import Result from "../Result/Result";
import Options from "../Options/Options";
import Check from "../UI/Check/Check";

const Quotation = () => {
  return (
    <div className="quote">
      <Check />
      <div className="quotation">
        <Date />
        <Destination />
        <Result />
        <Options />
      </div>
    </div>
  );
};

export default Quotation;

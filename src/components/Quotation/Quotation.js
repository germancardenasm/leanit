import React from "react";
import "./Quotation.css";
import Date from "../Date/Date";
import Destination from "../Destination/Destination";
import Result from "../Result/Result";
import Options from "../Options/Options";

const Quotation = () => {
  return (
    <div className="quotation">
      <Date />
      <Destination />
      <Result />
      <Options />
    </div>
  );
};

export default Quotation;

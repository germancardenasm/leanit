import React from "react";
import "./Quotation.css";
import Date from "../Date/Date";
import Destination from "../Destination/Destination";
import Result from "../Result/Result";
import Options from "../Options/Options";
import Check from "../UI/Check/Check";

const Quotation = props => {
  return (
    <div className="quote">
      <Check status={props.status} />
      <div className="quotation">
        <Date date={props.date} />
        <Destination {...props} />
        <Result qty={props.qty} price={props.price} />
        <Options id={props.id} />
      </div>
    </div>
  );
};

export default Quotation;

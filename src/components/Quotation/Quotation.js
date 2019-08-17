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
      <Check delivered={props.delivered} />
      <div className="quotation">
        <Date date={props.date} />
        <Destination origin={props.origin} destination={props.destination} />
        <Result qty={props.qty} price={props.price} />
        <Options />
      </div>
    </div>
  );
};

export default Quotation;

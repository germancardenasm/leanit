import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Result.css";
import Truck from "../UI/Truck/Truck";

const Result = props => {
  return (
    <div className="result">
      <Truck />
      <p>${props.price}</p>

      <OverlayTrigger
        placement={"top"}
        overlay={<Tooltip id={`tooltip-top`}>Qty of Boxes</Tooltip>}
      >
        <p className="total">{props.qty}</p>
      </OverlayTrigger>
    </div>
  );
};

export default Result;

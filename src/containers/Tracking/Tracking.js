import React from "react";
import "./Tracking.css";
import Check from "../../components/UI/Check/Check";
import Quotation from "../../components/Quotation/Quotation";

const Tracking = props => {
  return (
    <div className="tracking">
      <Check />
      <Quotation />
    </div>
  );
};

export default Tracking;

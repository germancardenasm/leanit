import React from "react";
import "./Tracking.css";
import Check from "../../components/UI/Check/Check";
import Destination from "../../components/Destination/Destination";

const Tracking = props => {
  return (
    <div className="tracking">
      <Check />
      <Destination />
    </div>
  );
};

export default Tracking;

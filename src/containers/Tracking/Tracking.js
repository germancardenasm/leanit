import React from "react";
import "./Tracking.css";
import Check from "../../components/UI/Check/Check";
import Quotation from "../../components/Quotation/Quotation";
import AddRoute from "../../components/AddRoute/AddRoute";

const Tracking = props => {
  return (
    <div className="tracking">
      <Quotation />
      <Quotation />
      <Quotation />
      <AddRoute />
    </div>
  );
};

export default Tracking;

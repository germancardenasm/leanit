import React from "react";
import "./Tracking.css";
import Quotation from "../../components/Quotation/Quotation";
import AddRoute from "../../components/AddRoute/AddRoute";
import { connect } from "react-redux";

const Tracking = props => {
  const quotations =
    props.quotations.map(routeInfo => (
      <Quotation key={routeInfo.id} {...routeInfo} />
    )) || null;

  return (
    <div className="tracking">
      {quotations}
      <AddRoute />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotations: state.quotesOnScreen
  };
};

export default connect(mapStateToProps)(Tracking);

import React from "react";
import "./Tracking.css";
import Quotation from "../../components/Quotation/Quotation";
import AddRoute from "../../components/AddRoute/AddRoute";
import { connect } from "react-redux";

const Tracking = props => {
  const quotesOnScreen = props.quotesOnScreen;
  const quotes =
    props.quotations
      .filter(elem => quotesOnScreen.includes(elem.id))
      .map(routeInfo => <Quotation key={routeInfo.id} {...routeInfo} />) ||
    null;

  return (
    <div className="tracking">
      {quotes}
      <AddRoute />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotations: state.quotations,
    quotesOnScreen: state.quotesOnScreen
  };
};

export default connect(mapStateToProps)(Tracking);

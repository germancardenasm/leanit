import React from "react";
import "./Tracking.css";
import Quotation from "../../components/Quotation/Quotation";
import AddRoute from "../../components/AddRoute/AddRoute";
import { connect } from "react-redux";

const Tracking = props => {
  const quotations = props.quotations.map(routeInfo => (
    <Quotation key={routeInfo.id} {...routeInfo} />
  ));

  return (
    <div className="tracking">
      {quotations}
      <AddRoute click={props.onAddRoute} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotations: state.quotations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddRoute: () => dispatch({ type: "ADD_ROUTE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracking);

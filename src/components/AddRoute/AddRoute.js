import React from "react";
import { connect } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./AddRoute.css";

const AddRoute = props => {
  return (
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip id={`tooltip-top`}>Add Shipping</Tooltip>}
    >
      <div className="addRoute" onClick={props.onAddRoute}>
        +
      </div>
    </OverlayTrigger>
  );
};

const mapStateToProps = state => {
  return {
    show: state.addingRoute
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
)(AddRoute);

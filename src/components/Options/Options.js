import React from "react";
import { connect } from "react-redux";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./Options.css";

const Options = props => {
  return (
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip id={`tooltip-top}`}>Delete</Tooltip>}
    >
      <div
        className="options"
        id={props.id}
        title="Delete Shipping Label"
        onClick={() => props.onClickHandler(props.id)}
      >
        <div />
        <div />
        <div />
      </div>
    </OverlayTrigger>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClickHandler: id =>
      dispatch({
        type: "DELETE_ROUTE",
        value: { id }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Options);

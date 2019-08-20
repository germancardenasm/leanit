import React from "react";
import { connect } from "react-redux";
import "./Options.css";

const Options = props => {
  return (
    <div
      className="options"
      id={props.id}
      onClick={() => props.onClickHandler(props.id)}
    >
      <div />
      <div />
      <div />
    </div>
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

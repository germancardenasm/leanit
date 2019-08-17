import React from "react";
import { connect } from "react-redux";
import "./AddRoute.css";

const AddRoute = props => {
  return (
    <div className="addRoute" onClick={props.onAddRoute}>
      +
    </div>
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

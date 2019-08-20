import React from "react";
import { connect } from "react-redux";
import "./Status.css";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Status = props => {
  return (
    <div className="status">
      <Title title="Status" />
      <Input
        key="statusSearch"
        elementType="input"
        value={props.value}
        elementConfig={{
          type: "text",
          placeholder: "Search"
        }}
        changed={event => props.onChangeInput(event)}
      />
      <Button name="DELIVERED" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.statusInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeInput: event =>
      dispatch({ type: "CHANGE_STATUS_INPUT", value: event.target.value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);

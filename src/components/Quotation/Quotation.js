import React from "react";
import { connect } from "react-redux";
import "./Quotation.css";
import Date from "../Date/Date";
import Destination from "../Destination/Destination";
import Result from "../Result/Result";
import Options from "../Options/Options";
import Check from "../UI/Check/Check";

const Quotation = props => {
  return (
    <div className="quote">
      <Check status={props.status} />
      <div
        className="quotation"
        id={props.id}
        onClick={() => props.onClickHandler(props.id)}
      >
        <Date date={props.date} />
        <Destination {...props} />
        <Result qty={props.qty} price={props.price} />
        <Options id={props.id} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quotations: state.quotations,
    form: state.shippingForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickHandler: id => dispatch({ type: "LOAD_ROUTE", value: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quotation);

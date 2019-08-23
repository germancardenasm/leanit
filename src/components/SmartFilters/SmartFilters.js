import React from "react";
import { connect } from "react-redux";
import Filter from "./Filter/Filter";
import sale from "../../assets/images/sale.png";
import calendar from "../../assets/images/calendar.png";
import heart from "../../assets/images/heart.png";
import "./SmartFilters.css";

const SmartFilters = props => {
  const images = [sale, calendar, heart];
  const labels = ["In Transit", "Delivered", "Delayed"];

  const filters = Object.keys(props.filters).map((el, index) => (
    <Filter
      image={images[index]}
      key={el}
      value={props.filters[el]}
      label={labels[index]}
      click={props.onClickHandler}
    />
  ));
  return <div className="smartFilters">{filters}</div>;
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
    quotations: state.quotations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickHandler: id => {
      dispatch({ type: "TOGGLE_FILTER", value: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartFilters);

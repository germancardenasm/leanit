import React, { Component } from "react";
import "./ControlPanel.css";
import sale from "../../assets/images/sale.png";
import calendar from "../../assets/images/calendar.png";
import heart from "../../assets/images/heart.png";
import Filter from "../../components/SmartFilters/Filter/Filter";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Filter image={sale} id={"sale"} />
        <Filter image={calendar} id={"calendar"} />
        <Filter image={heart} id={"heart"} />
      </div>
    );
  }
}

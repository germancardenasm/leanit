import React, { Component } from "react";
import "./ControlPanel.css";
import SmartFilters from "../../components/SmartFilters/SmartFilters";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <SmartFilters />
      </div>
    );
  }
}

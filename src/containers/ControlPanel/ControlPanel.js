import React, { Component } from "react";
import "./ControlPanel.css";
import SmartFilters from "../../components/SmartFilters/SmartFilters";
import Status from "../../components/Status/Status";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <SmartFilters />
        <Status />
      </div>
    );
  }
}

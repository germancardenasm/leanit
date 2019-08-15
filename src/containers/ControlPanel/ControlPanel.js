import React, { Component } from "react";

import "./ControlPanel.css";
import ToggleBtn from "../../components/UI/ToggleBtn/ToggleBtn";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <ToggleBtn />
      </div>
    );
  }
}

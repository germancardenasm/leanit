import React, { Component } from "react";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Sidebar />
      </div>
    );
  }
}

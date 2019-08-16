import React, { Component } from "react";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Sidebar />
        <Navbar />
      </div>
    );
  }
}

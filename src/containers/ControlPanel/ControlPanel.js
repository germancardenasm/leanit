import React, { Component } from "react";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Aux from "../../hoc/Aux";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tracking from "../Tracking/Tracking";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Sidebar />
        <Aux>
          <Navbar />
          <SearchBar />
          <Tracking />
        </Aux>
      </div>
    );
  }
}

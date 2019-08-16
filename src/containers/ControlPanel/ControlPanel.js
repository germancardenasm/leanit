import React, { Component } from "react";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Input from "../../components/UI/Input/Input";
import Aux from "../../hoc/Aux";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Sidebar />
        <Aux>
          <Navbar />
        </Aux>
      </div>
    );
  }
}

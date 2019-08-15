import React, { Component } from "react";
import "./ControlPanel.css";
import ToggleBtn from "../../components/UI/ToggleBtn/ToggleBtn";
import Logo from "../../components/UI/Logo/Logo";
import calendar from "../../assets/images/calendar.png";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Logo image={calendar} />
        <ToggleBtn />
      </div>
    );
  }
}

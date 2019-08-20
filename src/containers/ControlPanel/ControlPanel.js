import React, { Component } from "react";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tracking from "../Tracking/Tracking";
import Modals from "../../components/UI/Modals/Modals";
import ShippingForm from "../ShippingForm/shippingForm";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Modals>
          <ShippingForm />
        </Modals>
        <Sidebar />
        <div className="mainContent">
          <Navbar />
          <SearchBar />
          <Tracking />
        </div>
      </div>
    );
  }
}

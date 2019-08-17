import React, { Component } from "react";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tracking from "../Tracking/Tracking";
import Modal from "../../components/UI/Modal/Modal";

export default class Panel extends Component {
  render() {
    return (
      <div className="controlPanel">
        <Modal> Form to create new shipping </Modal>
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

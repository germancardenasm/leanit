import React, { Component } from "react";
import { connect } from "react-redux";
import "./ControlPanel.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tracking from "../Tracking/Tracking";
import Modals from "../../components/UI/Modals/Modals";
import ShippingForm from "../ShippingForm/shippingForm";

class Panel extends Component {
  componentDidMount() {
    console.table("Component did mount", this.props);
    this.props.onShowAllTracking();
  }

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

const mapStateToProps = state => {
  return {
    quotations: state.quotations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowAllTracking: () => dispatch({ type: "SHOW_ALL_TRACKING" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

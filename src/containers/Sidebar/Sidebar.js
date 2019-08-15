import React from "react";
import SmartFilters from "../../components/SmartFilters/SmartFilters";
import Status from "../../components/Status/Status";
import MainLogo from "../../components/UI/MainLogo/MainLogo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MainLogo />
      <SmartFilters />
      <Status />
    </div>
  );
};

export default Sidebar;

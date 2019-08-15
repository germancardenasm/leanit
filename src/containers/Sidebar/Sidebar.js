import React from "react";
import SmartFilters from "../../components/SmartFilters/SmartFilters";
import Status from "../../components/Status/Status";
import Title from "../../components/UI/Title/Title";
import MainLogo from "../../components/UI/MainLogo/MainLogo";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MainLogo />
      <Title title="Smart Filters" />
      <SmartFilters />
      <Status />
    </div>
  );
};

export default Sidebar;

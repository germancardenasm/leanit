import React from "react";
import SmartFilters from "../../components/SmartFilters/SmartFilters";
import Status from "../../components/Status/Status";
import Title from "../../components/UI/Title/Title";
import MainLogo from "../../components/UI/MainLogo/MainLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <MainLogo />
      <FontAwesomeIcon icon={faLightbulb} size="1x">
        {"  "}
      </FontAwesomeIcon>
      <Title title="   Smart Filters" />
      <SmartFilters />
      <Status />
    </div>
  );
};

export default Sidebar;

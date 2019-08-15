import React from "react";
import Title from "../UI/Title/Title";
import Filter from "./Filter/Filter";
import sale from "../../assets/images/sale.png";
import calendar from "../../assets/images/calendar.png";
import heart from "../../assets/images/heart.png";

import "./SmartFilters.css";

const SmartFilters = props => {
  return (
    <div className="smartFilters">
      <Title title="Smart Filters" />
      <Filter image={sale} id={"sale"} />
      <Filter image={calendar} id={"calendar"} />
      <Filter image={heart} id={"heart"} />
    </div>
  );
};

export default SmartFilters;

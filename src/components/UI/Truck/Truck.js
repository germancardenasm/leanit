import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "./Truck.css";

const Truck = props => {
  return (
    <FontAwesomeIcon
      className="truck"
      icon={faTruck}
      flip="horizontal"
      size="3x"
    />
  );
};

export default Truck;

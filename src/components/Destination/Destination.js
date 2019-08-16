import React from "react";
import "./Destination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  return (
    <div className="destination">
      <div>Houston, Tx, 33619</div>
      <FontAwesomeIcon className="arrow" icon={faChevronDown} size="2x" />
      <div>Atlanta, GA, 30123</div>
    </div>
  );
};

export default Destination;

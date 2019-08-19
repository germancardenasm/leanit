import React from "react";
import "./Destination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Destination = props => {
  return (
    <div className="destination">
      <div>
        {props.fromCity}, {props.fromState},{props.fromZipCode}
      </div>
      <FontAwesomeIcon className="arrow" icon={faChevronDown} size="2x" />
      <div>
        {props.toCity}, {props.toState},{props.toZipCode}
      </div>
    </div>
  );
};

export default Destination;

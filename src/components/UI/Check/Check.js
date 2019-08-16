import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Check.css";

const Check = props => {
  return (
    <FontAwesomeIcon className="searchIcon" icon={faCheckCircle} size="2x" />
  );
};

export default Check;

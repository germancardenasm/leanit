import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./Check.css";

const Check = props => {
  const icon = props.delivered ? faCheckCircle : faTimesCircle;
  const statusClass = props.delivered ? "searchIcon" : "searchIcon inTransit";
  return <FontAwesomeIcon className={statusClass} icon={icon} size="2x" />;
};

export default Check;

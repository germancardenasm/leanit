import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Check.css";

const Check = props => {
  let icon = faMinusCircle;
  let toolTipText = "In Transit";
  let statusClass = "statusIcon";

  switch (props.status) {
    case "transit":
      icon = faMinusCircle;
      toolTipText = "In Transit";
      statusClass = "statusIcon inTransit";
      break;
    case "delayed":
      icon = faTimesCircle;
      toolTipText = "Delayed";
      statusClass = "statusIcon delayed";
      break;
    case "delivered":
      icon = faCheckCircle;
      toolTipText = "Delivered";
      statusClass = "statusIcon";
      break;
    default:
      icon = faMinusCircle;
      toolTipText = "In Transit";
      statusClass += " inTransit";
      break;
  }

  return (
    <OverlayTrigger
      placement={"top"}
      overlay={<Tooltip id={`tooltip-top`}>{toolTipText}</Tooltip>}
    >
      <FontAwesomeIcon className={statusClass} icon={icon} size="2x" />
    </OverlayTrigger>
  );
};

export default Check;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavLink.css";

const Navlink = props => {
  return (
    <li className="navLink">
      <FontAwesomeIcon icon={props.icon} size="2x" />
      <span className="linkName">{props.alt}</span>
    </li>
  );
};

export default Navlink;

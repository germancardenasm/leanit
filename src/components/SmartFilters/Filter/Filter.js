import React from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ToggleBtn from "../../UI/ToggleBtn/ToggleBtn";
import Logo from "../../../components/UI/Logo/Logo";

import "./Filter.css";

const Filter = props => {
  return (
    <div className="filter" key={props.id}>
      <Logo image={props.image} />
      <OverlayTrigger
        placement={"top"}
        overlay={<Tooltip id={`tooltip-s`}>{props.label}</Tooltip>}
      >
        <div className="toggleBtn">
          <ToggleBtn
            value={props.value}
            label={props.label}
            click={props.click}
          />
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default Filter;

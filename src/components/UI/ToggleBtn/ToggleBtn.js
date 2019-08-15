import React from "react";
import "./ToggleBtn.css";

const ToggleBtn = props => {
  return <input type="checkbox" onClick={props.click} />;
};

export default ToggleBtn;

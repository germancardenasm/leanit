import React from "react";
import "./ToggleBtn.css";

const ToggleBtn = props => {
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={() => props.click(props.label)}
    />
  );
};

export default ToggleBtn;

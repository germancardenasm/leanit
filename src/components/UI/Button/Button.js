import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button type={props.type} className="Button" onClick={props.click}>
      {props.name}
    </button>
  );
};

export default Button;

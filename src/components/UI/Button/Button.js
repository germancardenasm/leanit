import React from "react";
import "./Button.css";

const Button = props => {
  return <button className="Button">{props.name}</button>;
};

export default Button;

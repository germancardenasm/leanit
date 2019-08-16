import React from "react";

import "./Input.css";

const Input = props => {
  return (
    <input
      className="Input"
      placeholder="Search"
      type="text"
      value={props.value}
      onChange={props.change}
    />
  );
};

export default Input;

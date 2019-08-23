import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          required="required"
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          disabled={props.disable ? true : false}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          required="required"
          value={props.value}
          onChange={props.changed}
          disabled={props.disable ? true : false}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          required="required"
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          disabled={props.disable ? true : false}
        />
      );
  }

  return (
    <div className="input">
      <label className="label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;

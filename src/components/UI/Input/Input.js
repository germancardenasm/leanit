import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          disabled={props.disable ? true : false}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
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
          className="inputElement"
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

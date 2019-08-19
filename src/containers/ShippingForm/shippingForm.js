import React from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { getDefaultFormFields } from "../../store/Actions";
import { connect } from "react-redux";
import "./ShippingForm.css";

const shippingForm = props => {
  const fromElements = convertObjInIterable("from");
  const toElements = convertObjInIterable("to");
  const optionsElements = convertObjInIterable("options");

  return (
    <form
      className="form"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <div className="from">
        <label>From:</label>
        {fromElements.map(element => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            required={element.config.validation.required}
            value={element.config.va}
            changed={event => props.onChangeInput(event, element.id)}
          />
        ))}
      </div>
      <div className="to">
        <label>To:</label>
        {toElements.map(element => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.va}
            changed={event => props.onChangeInput(event, element.id)}
          />
        ))}
      </div>
      <div className="shippingOptions">
        <label>Options:</label>
        {optionsElements.map(element => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.va}
            changed={event => props.onChangeInput(event, element.id)}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="save" onClick={props.onSaveShipping}>
          Save
        </button>
        <button onClick={props.onCloseForm}>Cancel</button>
      </div>
    </form>
  );
};

const convertObjInIterable = objKey => {
  const fields = getDefaultFormFields().shippingForm[objKey];
  const fromElements = [];
  for (let key in fields) {
    fromElements.push({
      id: key,
      config: fields[key]
    });
  }
  return fromElements;
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveShipping: () => dispatch({ type: "SAVE_NEW_ROUTE" }),
    onCloseForm: () => dispatch({ type: "CLOSE_MODAL" }),
    onChangeInput: (event, id) =>
      dispatch({
        type: "CHANGE_FORM_INPUT",
        identifier: id,
        value: event.target.value
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(shippingForm);

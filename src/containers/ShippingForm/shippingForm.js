import React from "react";
import Input from "../../components/UI/Input/Input";
import { getDefaultFormFields } from "../../store/Actions";
import { connect } from "react-redux";
import "./ShippingForm.css";

const shippingForm = props => {
  const fromElements = convertObjInIterable(props, "from");
  const toElements = convertObjInIterable(props, "to");
  const optionsElements = convertObjInIterable(props, "options");

  return (
    <form className="form" onSubmit={props.onSaveShipping}>
      <div className="from">
        <label>From:</label>

        {fromElements.map(element => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            required={element.config.validation.required}
            value={props.form.value}
            validation={element.config.validation}
            valid={element.config.valid}
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
            value={props.form.value}
            validation={element.config.validation}
            valid={element.config.valid}
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
            value={props.form.value}
            validation={element.config.validation}
            valid={element.config.valid}
            changed={event => props.onChangeInput(event, element.id)}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="save" type="submit">
          Save
        </button>
        <button onClick={props.onCloseForm}>Cancel</button>
      </div>
    </form>
  );
};

const convertObjInIterable = (props, objKey) => {
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

const mapStateToProps = state => {
  return {
    form: state.shippingForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveShipping: event => {
      event.preventDefault();
      dispatch({ type: "SAVE_NEW_ROUTE" });
    },
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
  mapStateToProps,
  mapDispatchToProps
)(shippingForm);

import React from "react";
import Input from "../../components/UI/Input/Input";
import { getDefaultFormFields } from "../../store/Actions";
import { connect } from "react-redux";
import "./ShippingForm.css";

const shippingForm = props => {
  const fromElements = convertObjInIterable(props, "from");
  const toElements = convertObjInIterable(props, "to");
  const optionsElements = convertObjInIterable(props, "options");

  const inputElement = element => (
    <Input
      key={element.id}
      elementType={element.config.elementType}
      elementConfig={element.config.elementConfig}
      required={element.config.validation.required}
      value={props.form[element.id]}
      validation={element.config.validation}
      valid={element.config.valid}
      disable={props.disable}
      changed={event => props.onChangeInput(event, element.id)}
    />
  );

  return (
    <form className="form" onSubmit={e => e.preventDefault()}>
      <div className="tracking_number">
        <label>Tracking Number: </label>
        <span>{props.form.id}</span>
      </div>
      <div className="from">
        <label>From:</label>
        {fromElements.map(element => inputElement(element))}
      </div>
      <div className="to">
        <label>To:</label>
        {toElements.map(element => inputElement(element))}
      </div>
      <div className="shippingOptions">
        {optionsElements.map(element => inputElement(element))}
      </div>
      <div className="buttons">
        {props.disable ? null : (
          <button
            onClick={() => props.onSaveShipping(props.form)}
            className="save"
            type="submit"
          >
            Save
          </button>
        )}
        <button className="cancel" onClick={props.onCloseModal}>
          Cancel
        </button>
      </div>
      {props.formInvalid ? (
        <p style={{ color: "red" }}>All Fields Required</p>
      ) : null}
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
    form: { ...state.shippingForm },
    disable: state.formDisable,
    formInvalid: state.formInvalid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch({ type: "CLOSE_MODAL" }),
    onSaveShipping: form => {
      const formFields = form;
      const validation = Object.keys(form).filter(el => formFields[el] !== "");
      if (validation.length < 12) {
        dispatch({ type: "FORM_INVALID" });
      } else {
        dispatch({ type: "SAVE_NEW_ROUTE" });
      }
    },
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

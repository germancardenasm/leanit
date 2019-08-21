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
      changed={event => props.onChangeInput(event, element.id)}
    />
  );

  return (
    <form className="form" onSubmit={e => e.preventDefault()}>
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
        <button onClick={props.onSaveShipping} className="save" type="submit">
          Save
        </button>
        <button onClick={props.onCloseModal}>Cancel</button>
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
    form: { ...state.shippingForm }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch({ type: "CLOSE_MODAL" }),
    onSaveShipping: event => {
      dispatch({ type: "SAVE_NEW_ROUTE" });
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

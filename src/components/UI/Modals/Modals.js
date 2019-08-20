import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import { connect } from "react-redux";
import "./Modals.css";

const Modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} close={props.onCloseModal} />
      <div
        className="modals"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    show: state.addingRoute
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: () => dispatch({ type: "CLOSE_MODAL" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

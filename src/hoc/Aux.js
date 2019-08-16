import React from "react";
import "./Aux.css";

const Aux = props => {
  return <div className="mainContent">{props.children}</div>;
};

export default Aux;

import React from "react";
import "./Logo.css";

const Logo = props => {
  return (
    <div className="logo">
      <img src={props.image} />
    </div>
  );
};

export default Logo;

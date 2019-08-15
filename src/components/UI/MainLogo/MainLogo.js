import React from "react";
import logo from "../../../assets/images/logo.png";
import "./MainLogo.css";

const MainLogo = props => {
  return (
    <div className="mainLogo">
      <img src={logo} />
    </div>
  );
};

export default MainLogo;

import React from "react";
import logo from "../../../assets/images/logo.png";
import "./MainLogo.css";

const MainLogo = props => {
  return (
    <div className="mainLogo">
      <img src={logo} alt="Dragon Trasport Logo" />
    </div>
  );
};

export default MainLogo;

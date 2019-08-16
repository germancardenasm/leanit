import React from "react";
import NavLink from "../../components/NavLink/NavLink";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navBar">
      <ul>
        <NavLink icon={faHome} alt="Home" />
        <NavLink icon={faEnvelope} alt="Messages" />
        <NavLink icon={faStar} alt="Whishlist" />
        <NavLink icon={faCog} alt="Settings" />
        <NavLink icon={faUser} alt="My Account" />
      </ul>
    </div>
  );
};

export default Navbar;

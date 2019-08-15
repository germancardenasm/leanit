import React from "react";
import ToggleBtn from "../../UI/ToggleBtn/ToggleBtn";
import Logo from "../../../components/UI/Logo/Logo";
import "./Filter.css";

const Filter = props => {
  return (
    <div className="filter" key={props.id}>
      <Logo image={props.image} />
      <ToggleBtn />
    </div>
  );
};

export default Filter;

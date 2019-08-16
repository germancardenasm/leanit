import React from "react";
import Input from "../UI/Input/Input";
import "./SearchBar.css";
import Logo from "../UI/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon className="searchIcon" icon={faCheckCircle} size="2x" />
      <Input />
    </div>
  );
};

export default SearchBar;

import React from "react";
import Input from "../UI/Input/Input";
import "./SearchBar.css";
import Logo from "../UI/Logo/Logo";
import Check from "../UI/Check/Check";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <Check />
      <Input />
    </div>
  );
};

export default SearchBar;

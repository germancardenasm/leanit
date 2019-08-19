import React from "react";
import { connect } from "react-redux";
import Input from "../UI/Input/Input";
import "./SearchBar.css";
import Check from "../UI/Check/Check";

const SearchBar = props => {
  return (
    <div className="searchBar">
      {/*     <Check /> */}
      <Input
        key="statusSearch"
        elementType="input"
        value={props.value}
        placeholder="Search"
        changed={event => props.onChangeInput(event)}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.searchInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeInput: event =>
      dispatch({ type: "CHANGE_SEARCH_INPUT", value: event.target.value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

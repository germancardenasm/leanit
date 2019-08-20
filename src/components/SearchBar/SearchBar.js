import React from "react";
import { connect } from "react-redux";
import Input from "../UI/Input/Input";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBar">
      <Input
        key="statusSearch"
        elementType="input"
        value={props.value}
        elementConfig={{
          type: "text",
          placeholder: "Search"
        }}
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

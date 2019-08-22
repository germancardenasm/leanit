import React from "react";
import { connect } from "react-redux";
import "./Status.css";
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import SearchResults from "../SearchResults/SearchResults";

const Status = props => {
  let trackingNumbers = [];
  let inputValue = props.value.toString();

  if (props.searchResults) {
    trackingNumbers = props.quotations
      .map(element => element.id.toString())
      .filter(trackNumber => {
        const reg = new RegExp("^" + inputValue); //?
        const isContained = reg.test(trackNumber); //?
        return isContained;
      });
  }
  console.log("Tracking Numbers that Match", trackingNumbers);
  debugger;
  const results =
    props.showSearchResults && trackingNumbers.length ? (
      <SearchResults list={trackingNumbers} click={props.onSelectShipping} />
    ) : null;

  return (
    <div className="status">
      <Title title="Status" />
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
      {results}
      <Button name="DELIVERED" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.statusInput,
    searchResults: state.statusInput,
    showSearchResults: state.showSearchResults,
    quotations: state.quotations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeInput: event => {
      dispatch({ type: "CHANGE_STATUS_INPUT", value: event.target.value });
    },
    onSelectShipping: id => {
      dispatch({ type: "SELECT_ROUTE_STATUS", value: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);

import React from "react";
import "./SearchResults.css";

const SearchResults = props => {
  const list = props.list.map(li => (
    <li key={li} id={li}>
      {li}
    </li>
  ));

  return (
    <div className="search_results">
      <ul onClick={e => props.click(e.target.id)}>{list}</ul>
    </div>
  );
};

export default SearchResults;

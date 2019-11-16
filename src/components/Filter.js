import React from "react";
import glass from "../images/magnifying-glass.svg";
import "../styles/Filter.scss";

const Filter = props => {
  const { handleFilter } = props;
  return (
    <form className="filter">
      <img src={glass} alt="search bar icon" className="filter-icon"></img>
      <input
        type="text"
        onChange={handleFilter}
        className="filter-input"
        placeholder="Search by name"
      ></input>
    </form>
  );
};

export default Filter;

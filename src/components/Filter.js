import React from "react";

const Filter = props => {
  const { handleFilter } = props;
  return (
    <form className="filter">
      <input
        type="text"
        onChange={handleFilter}
        className="filter_input"
      ></input>
    </form>
  );
};

export default Filter;

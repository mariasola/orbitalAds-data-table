import React from "react";
import Filter from "./Filter";
import CityItem from "./CityItem";

class CityList extends React.Component {
  render() {
    const { cities, handleFilter } = this.props;
    return (
      <React.Fragment>
        <Filter handleFilter={handleFilter} />
        <ul>
          {cities.map(item => (
            <CityItem
              id={item.id}
              name={item.name}
              chineseName={item.chineseName}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default CityList;

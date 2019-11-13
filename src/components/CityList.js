import React from "react";
import CityItem from "./CityItem";

class CityList extends React.Component {
  render() {
    const { cities } = this.props;
    return (
      <ul>
        {cities.map(item => (
          <CityItem
            id={item.id}
            name={item.name}
            chineseName={item.chineseName}
          />
        ))}
      </ul>
    );
  }
}

export default CityList;

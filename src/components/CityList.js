import React from "react";
import "../styles/CityList.scss";

import CityItem from "./CityItem";

class CityList extends React.Component {
  render() {
    const { cities, click } = this.props;
    return (
      <section className="left-section">
        <ul className="cityList">
          {cities.map(item => (
            <li>
              <CityItem
                key={item.id}
                id={item.id}
                name={item.name}
                chineseName={item.chineseName}
                isPicked={item.isPicked}
                click={click}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default CityList;

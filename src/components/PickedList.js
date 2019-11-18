import React from "react";
import CityItem from "./CityItem";
import "../styles/PickedList.scss";

class PickedList extends React.Component {
  render() {
    const { pickedCity, clearAll, click } = this.props;
    return (
      <section className="rightSection">
        <div className="clearCount">
          <p className="clearCount-p">{pickedCity.length} items</p>
          <button className="clearCount-btn" onClick={clearAll}>
            Clear All
          </button>
        </div>
        <div>
          <ul className="cityPickedList">
            {pickedCity.map(pickedCity => (
              <li className="pickedCityItem">
                <CityItem
                  key={pickedCity.id}
                  id={pickedCity.id}
                  name={pickedCity.name}
                  chineseName={pickedCity.chineseName}
                  isPicked={pickedCity.isPicked}
                  clearAll={clearAll}
                  click={click}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default PickedList;

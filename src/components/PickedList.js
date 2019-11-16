import React from "react";
import CityItem from "./CityItem";
import "../styles/PickedList.scss";

class PickedList extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.unselectCity = this.unselectCity.bind(this);
  // }
  changeStyle() {
    let pickedClassName = "cityItem-checkbox ";
    const { isPicked } = this.props;
    if (isPicked === true) {
      pickedClassName += "displayNone";
      return pickedClassName;
    } else {
      pickedClassName += "defaultStyle";
      return pickedClassName;
    }
  }
  // unselectCity() {
  //   this.props.click(this.props.id, false);
  // }
  render() {
    console.log(this.props.pickedCity);
    const { pickedCity, clearAll, click } = this.props;
    return (
      <section className="rightSection">
        <div className="clearCount">
          <p className="clearCount-p">{pickedCity.length} items</p>
          <button className="clearCount-btn" onClick={clearAll}>
            Clear All
          </button>
        </div>
        <ul className="cityPickedList">
          {pickedCity.map(pickedCity => (
            <CityItem
              key={pickedCity.id}
              id={pickedCity.id}
              name={pickedCity.name}
              chineseName={pickedCity.chineseName}
              isPicked={pickedCity.isPicked}
              clearAll={clearAll}
              click={click}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default PickedList;

import React from "react";
import "../styles/CityItem.scss";
import cityIcon from "../images/city-icon.png";

class CityItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCity = this.toggleCity.bind(this);
    this.unselectCity = this.unselectCity.bind(this);
  }
  toggleCity() {
    this.props.click(this.props.id);
  }
  unselectCity() {
    debugger;
    this.props.click(this.props.id, false);
  }
  render() {
    const { id, name, chineseName, isPicked } = this.props;
    return (
      <li className="cityItem">
        <input
          type="checkbox"
          id={id}
          checked={isPicked}
          onChange={this.toggleCity}
          className="cityItem-checkbox"
        />
        <img className="cityItem-img" src={cityIcon} alt={name} />
        <div className="cityItem-text">
          <h3 className="cityItem-text-title">{name}</h3>
          <p className="cityItem-text-subtitle">{chineseName}</p>
        </div>
        <span onClick={this.unselectCity} className="cityItem-x">
          X
        </span>
      </li>
    );
  }
}

export default CityItem;

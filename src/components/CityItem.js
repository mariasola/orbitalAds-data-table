import React from "react";

class CityItem extends React.Component {
  render() {
    const { id, name, chineseName } = this.props;
    return (
      <li>
        <small>{id}</small>
        <h3>{name}</h3>
        <p>{chineseName}</p>
      </li>
    );
  }
}

export default CityItem;

import React from "react";
import "../styles/App.scss";
import cities from "../services/getChinaCities";
import CityList from "./CityList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: cities.map(
        item =>
          (item = {
            id: item.id,
            name: item.name,
            chineseName: item.chineseName
          })
      )
    };
  }
  render() {
    return (
      <div className="App">
        <CityList cities={this.state.cities} />
      </div>
    );
  }
}

export default App;

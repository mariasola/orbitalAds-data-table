import React from "react";
import "../styles/App.scss";
import cities from "../services/getChinaCities";
import CityList from "./CityList";
import Header from "./Header";

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
      ),
      filterValue: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(event) {
    const newState = {
      ...this.state,
      filterValue: event.currentTarget.value
    };
    this.setState(newState);
  }
  render() {
    const filteredCities = this.state.cities.filter(city =>
      city.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
    );
    return (
      <div className="App">
        <Header />
        <CityList cities={filteredCities} handleFilter={this.handleFilter} />
      </div>
    );
  }
}

export default App;

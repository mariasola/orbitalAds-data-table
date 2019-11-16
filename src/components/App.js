import React from "react";
import "../styles/App.scss";
import cities from "../services/getChinaCities";
import CityList from "./CityList";
import PickedList from "./PickedList";
import Filter from "./Filter";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: cities.map(
        item =>
          (item = {
            key: item.id,
            id: item.id,
            name: item.name,
            chineseName: item.chineseName,
            isPicked: false
          })
      ),
      filterValue: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.filterCity = this.filterCity.bind(this);
  }
  handleFilter(event) {
    const newState = {
      ...this.state,
      filterValue: event.currentTarget.value
    };
    this.setState(newState);
  }
  handleClick(idClicked, newStatus) {
    debugger;
    this.setState(prevState => {
      const cities = prevState.cities.map(city => {
        if (city.id === idClicked) {
          if (newStatus !== undefined) {
            city.isPicked = newStatus;
          } else {
            city.isPicked = !city.isPicked;
          }
        }
        return city;
      });
      return {
        cities: cities
      };
    });
  }
  clearAll() {
    this.setState(prevState => {
      const cities = prevState.cities.map(city => {
        city.isPicked = false;
        return city;
      });
      return {
        cities: cities
      };
    });
  }
  toggleAll(toggleAll) {
    this.setState(prevState => {
      const cities = prevState.cities.map(city => {
        if (this.filterCity(city)) {
          city.isPicked = toggleAll; //para ti toggleAll;
        }
        return city;
      });
      return {
        cities: cities,
        toggleAll: toggleAll
      };
    });
  }
  filterCity(city) {
    return city.name
      .toLowerCase()
      .includes(this.state.filterValue.toLowerCase());
  }
  render() {
    const filteredCities = this.state.cities.filter(this.filterCity);
    return (
      <div className="App">
        <Header />
        <Filter handleFilter={this.handleFilter} />
        <div className="allItems">
          <label>
            <input
              type="checkbox"
              onClick={this.toggleAll}
              className="cityItem-checkbox"
            ></input>
            {cities.length} items
          </label>
        </div>
        <div className="modules">
          <CityList cities={filteredCities} click={this.handleClick} />
          <PickedList cities={filteredCities} clearAll={this.clearAll} />
        </div>
      </div>
    );
  }
}

export default App;

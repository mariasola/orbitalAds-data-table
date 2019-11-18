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
    this.clearAll = this.clearAll.bind(this);
    this.areAllSelected = this.areAllSelected.bind(this);
  }
  handleFilter(event) {
    const newState = {
      ...this.state,
      filterValue: event.currentTarget.value
    };
    this.setState(newState);
  }
  handleClick(idClicked, newStatus) {
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
  toggleAll(ev) {
    const toggleAllStatus = ev.target.checked;
    this.setState(prevState => {
      const cities = prevState.cities.map(city => {
        if (this.filterCity(city)) {
          city.isPicked = toggleAllStatus;
        }
        return city;
      });
      return {
        cities: cities
      };
    });
  }
  filterCity(city) {
    return city.name
      .toLowerCase()
      .includes(this.state.filterValue.toLowerCase());
  }
  areAllSelected(cities) {
    return cities.reduce((acc, city) => {
      if (city.isPicked === false) {
        return false;
      } else {
        return acc;
      }
    }, true);
  }
  // Here in areAllSelected a reduce was chosen because, even if a for is more eficient, as it is a test I wanted to display all the knowledge I have.

  render() {
    const filteredCities = this.state.cities.filter(this.filterCity);
    const pickedCity = this.state.cities.filter(city => {
      return city.isPicked;
    });
    return (
      <div className="App">
        <Header />
        <div className="modules">
          <div className="modules-one">
            <Filter handleFilter={this.handleFilter} />
            <div className="allItems">
              <input
                checked={this.areAllSelected(filteredCities)}
                type="checkbox"
                onChange={this.toggleAll}
                className="cityItem-checkbox"
              ></input>
              <p className="allItems-p">{filteredCities.length} items</p>
            </div>
            <CityList cities={filteredCities} click={this.handleClick} />
          </div>
          <div className="modules-two">
            <PickedList
              pickedCity={pickedCity}
              clearAll={this.clearAll}
              click={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

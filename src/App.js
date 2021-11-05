import { Component } from "react";

import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";

class App extends Component {
  state = {
    weather: {},
    city: "",
  };

  handleChangeWeather = (weatherData, city) => {
    this.setState({ weather: weatherData, city: city });
  };

  render() {
    return (
      <div className="App">
        <SearchWeather handleChangeWeather={this.handleChangeWeather} />
        <DisplayWeather info={this.state} />
      </div>
    );
  }
}

export default App;

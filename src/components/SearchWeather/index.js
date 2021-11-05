import { Component } from "react";

import "./style.css";

class SearchWeather extends Component {
  state = {
    inputValue: "Curitiba",
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { inputValue } = this.state;
    const { handleChangeWeather } = this.props;

    fetch(`https://goweather.herokuapp.com/weather/${this.state.inputValue}`)
      .then((response) => response.json())
      .then((response) => handleChangeWeather(response, inputValue));
  };

  render() {
    return (
      <div className="search-container">
        <div>
          <input
            className="search-input"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
        </div>
        <div>
          <button className="search-button" onClick={this.handleSubmit}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchWeather;

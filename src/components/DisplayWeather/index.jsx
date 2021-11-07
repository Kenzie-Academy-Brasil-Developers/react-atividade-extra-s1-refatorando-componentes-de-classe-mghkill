import "./style.css";

const DisplayWeather = ({ weather, city }) => {
  return (
    <div className="display-container">
      <div className="display-city">{city}</div>
      <div className="display-temperature">{weather.temperature}</div>
    </div>
  );
};
export default DisplayWeather;

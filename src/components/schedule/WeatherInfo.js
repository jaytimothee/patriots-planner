import React from "react";

class WeatherInfo extends React.Component {
  state = {
    humidity: "",
    temp: "",
    visibility: "",
    desc: "",
    windSpeed: ""
  };
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    const API_KEY = "2e3faa04ecd203b48d84d41645f9b078";
    const API_CALL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.props.city},US&appid=${API_KEY}&units=imperial`
    );
    const data = await API_CALL.json();

    this.setState({
      humidity: data.main.humidity,
      temp: data.main.temp,
      windDirection: data.wind.deg,
      desc: data.weather[0].description,
      windSpeed: data.wind.speed
    });
  };
  render() {
    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h5>Weather in {this.props.city}</h5>
        </li>
        <li className="collection-item">
          <div>
            Temperatuer
            <span className="secondary-content">
              <span>{this.state.temp}°F</span>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Wind Speed
            <span className="secondary-content">
              <span>{this.state.windSpeed}/mph</span>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Wind Direction
            <span className="secondary-content">
              <span>{this.state.windDirection}°</span>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Humidity
            <span className="secondary-content">
              <span>{this.state.humidity}%</span>
            </span>
          </div>
        </li>
        <p className="center-align">{this.state.desc}</p>
      </ul>
    );
  }
}

export default WeatherInfo;

import React, { useState } from "react";
import axios from "axios";

import "./DisplayCity.css";

export default function DisplayCity(props) {
  let [weather, setWeather] = useState(null);

  function weatherData(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather) {
    return (
      <div>
        <div container="container-display-weather">
          <div className="row weather-information">
            <div className="col-3">
              {" "}
              <h1>{props.city}</h1>
              <p className="weather-description">{weather.description}</p>
            </div>
            <div className="col-3">
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="col-3">
              <h2>{Math.round(weather.temperature)}°C</h2>
            </div>
            <div className="col-3">
              {" "}
              <p>
                Humidity: {weather.humidity}% Wind: {Math.round(weather.wind)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "21d3636317e4ed6c448afdbbc3833fb2";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(weatherData);
    return <p>Loading Data ... </p>;
  }
}

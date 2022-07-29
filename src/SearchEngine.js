import React, { useState } from "react";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("Tokyo");
  let [weatherData, setWeatherData] = useState({ ready: false });

  function GetWeatherData(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiKey = "21d3636317e4ed6c448afdbbc3833fb2";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(GetWeatherData);
  }
  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your City"
            onChange={showCity}
          />
          <input type="submit" value="Search" />
          <input type="submit" value="Current-location" />
        </form>
        <div className="container-center">
          <div className="container-display-city">
            <DisplayWeather data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return <h1>Loading</h1>;
  }
}

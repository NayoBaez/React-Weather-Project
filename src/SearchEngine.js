import React, { useState } from "react";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";
import Forecast from "./Forecast";
import Photos from "./Photos";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    console.log(response.data.photos);
    setPhotos(response.data.photos);
  }

  function GetWeatherData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "bc62018103de1e194675d5c344746370";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(GetWeatherData);

    let pexelsApiKey =
      "563492ad6f91700001000001f2ddcd4d8c2040a1a5a92d54eeab8675";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${city}&per_page=3`;
    let header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: header }).then(handlePexelsResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <div className="panel1">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your City"
              autoFocus="on"
              onChange={showCity}
            />
            <input type="submit" value="Search" />
          </form>
          <DisplayWeather data={weatherData} />
        </div>
        <div className="panel2">
          <Photos photos={photos} />
          <Forecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}

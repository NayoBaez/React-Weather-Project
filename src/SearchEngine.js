import React, { useState } from "react";
import DisplayCity from "./DisplayCity";

import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();

    setWeather(city);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your City" onChange={showCity} />
        <input type="submit" value="Search" />
        <input type="submit" value="Current-location" />
      </form>
      <div className="container-center">
        <div className="container-display-city">
          <DisplayCity city={weather} />
        </div>
      </div>
    </div>
  );
}

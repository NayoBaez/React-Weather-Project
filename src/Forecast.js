import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function GetForecastData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function loadForecast() {
    let apiKey = "bc62018103de1e194675d5c344746370";
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(GetForecastData);
  }

  if (loaded) {
    return (
      <div className="container forecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 8) {
              return (
                <div className="col-2 weekday" key={index}>
                  <ForecastDay data={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadForecast();
    return null;
  }
}

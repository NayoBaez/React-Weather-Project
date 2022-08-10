import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function GetForecastData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container forecast">
        <div className="row">
          <div className="col-2 weekday">
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col-2 weekday"> Mon </div>
          <div className="col-2 weekday">Tue </div>
          <div className="col-2 weekday"> Wed </div>
          <div className="col-2 weekday">Thu</div>
          <div className="col-2 weekday">Fri </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bc62018103de1e194675d5c344746370";
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(GetForecastData);
    return null;
  }
}

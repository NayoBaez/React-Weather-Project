import React, { useState } from "react";
import axios from "axios";
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
            <div className="Forecast-day">Sun</div>
            <div className="Icon"></div>
            <div className="temp">
              <span className="temperature-max">{forecast[0].temp.max}</span>{" "}
              <span className="temperature-min">{forecast[0].temp.min}</span>
            </div>
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
    let apiKey = "33647c77ef0a58c9d41e6aeefa25ae5c";
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(GetForecastData);
    return null;
  }
}

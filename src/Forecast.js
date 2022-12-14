import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import Sunrise from "./Sunrise";
import Moonrise from "./Moonrise";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [moonSun, setMoonSun] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function GetForecastData(response) {
    setForecast(response.data.daily);
    setMoonSun({
      moonrise: response.data.daily[0].moonrise,
      moonset: response.data.daily[0].moonset,
      sunrise: response.data.daily[0].sunrise,
      sunset: response.data.daily[0].sunset,
    });
    setLoaded(true);
  }
  function loadForecast() {
    let apiKey = `${process.env.REACT_APP_OPENWEATHER_TOKEN}`;
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(GetForecastData);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <section>
          <div className="container">
            <div className="row">
              {forecast.map(function (dailyforecast, index) {
                if (index < 8) {
                  return (
                    <div className="col-sm-3 g-0" key={index}>
                      <div className="dailyforecast">
                        <ForecastDay data={dailyforecast} />
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-sm-6">
              <div className="sunsetpanel">
                <Sunrise data={moonSun} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="moonsetpanel">
                <Moonrise data={moonSun} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    loadForecast();
    return null;
  }
}

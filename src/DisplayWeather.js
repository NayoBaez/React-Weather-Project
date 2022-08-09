import React from "react";
import FormattedDate from "./FormattedDate";
import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <div>
      <div container="container-display-weather">
        <div className="row weather-information">
          <div className="col-3">
            {" "}
            <h1>{props.data.city}</h1>
            <FormattedDate />
            <p className="weather-description text-capitalize">
              {props.data.description}
            </p>
          </div>
          <div className="col-3">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <DisplayTemperature celsius={props.data.temperature} />
          <div className="col-3">
            {" "}
            <p>Humidity: {props.data.humidity}%</p>{" "}
            <p>
              Wind:
              {Math.round(props.data.wind)} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

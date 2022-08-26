import React from "react";
import FormattedDate from "./FormattedDate";
import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <div>
      <div container="container-display-weather">
        <div className="col">
          {" "}
          <h1>{props.data.city}</h1>
          <FormattedDate />
          <p className="weather-description text-capitalize">
            {props.data.description}
          </p>
        </div>
        <div className="col">
          <img src={props.data.icon} alt={props.data.description} />
        </div>
        <DisplayTemperature celsius={props.data.temperature} />
        <div className="col">
          {" "}
          <p>Humidity: {props.data.humidity}%</p>{" "}
          <p>
            Wind:
            {Math.round(props.data.wind)} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

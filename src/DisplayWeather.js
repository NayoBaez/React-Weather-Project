import React from "react";
import FormattedDate from "./FormattedDate";
import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <div>
      <div container="container-display-weather">
        <ul>
          <li>
            {" "}
            <h1>{props.data.city}</h1>
          </li>

          <li>
            <p className="weather-description text-capitalize">
              {props.data.description}
            </p>
          </li>
          <li>
            {" "}
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon"
            />
            <DisplayTemperature celsius={props.data.temperature} />
          </li>

          <li>
            <FormattedDate />
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>
            Wind:
            {Math.round(props.data.wind)} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}

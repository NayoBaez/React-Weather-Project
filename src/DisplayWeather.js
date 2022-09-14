import React from "react";

import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <section>
      <div className="DisplayWeather">
        <div className="row">
          <div className="col-4">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="col-8">
            <h4>
              {props.data.city}, {props.data.country}
            </h4>
            <p className="text-capitalize">{props.data.description}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            {" "}
            <DisplayTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-6">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon"
            />
          </div>
          <ul>
            <li>
              Fahrenheit: {Math.round(props.data.temperature * 9) / 5 + 32}
            </li>
            <li>Max Temp: {Math.round(props.data.maxtemp)}</li>
            <li>Min Temp: {Math.round(props.data.mintemp)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

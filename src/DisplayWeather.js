import React from "react";

import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <section>
      <div className="DisplayWeather">
        <div>
          <div>
            <h4 className="city-name">
              {props.data.city}, {props.data.country}
            </h4>
            <p className="text-capitalize">{props.data.description}</p>
          </div>
        </div>

        <div>
          <div className="temperaturedisplay">
            <DisplayTemperature celsius={props.data.temperature} />
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon"
            />
          </div>

          <span className="details">
            {" "}
            Max: {Math.round(props.data.maxtemp)}
          </span>
          <span className="details">
            {" "}
            Min: {Math.round(props.data.mintemp)}
          </span>
          <span className="details">
            {" "}
            {Math.round(props.data.temperature * 9) / 5 + 32} °F
          </span>
        </div>
      </div>
    </section>
  );
}

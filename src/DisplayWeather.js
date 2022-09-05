import React from "react";

import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <div>
      <section>
        <div className="DisplayWeather">
          <div>
            <h1>
              <i className="fa-solid fa-location-dot"></i> {props.data.city},{" "}
              {props.data.country}
            </h1>
          </div>
          <div>
            <p className="weather-description text-capitalize">
              {props.data.description}
            </p>
          </div>
          <div>
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon"
            />
          </div>
          <div>
            {" "}
            <DisplayTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

import DisplayTemperature from "./DisplayTemperature";

import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <div>
      <section>
        <div className="DisplayWeather">
          <ul>
            <li>
              {" "}
              <h1>
                {props.data.city}, {props.data.country}
              </h1>
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
          </ul>
        </div>
      </section>
    </div>
  );
}

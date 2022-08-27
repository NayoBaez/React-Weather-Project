import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <ul>
        <li className="humidity">Humidity: {props.data.humidity}%</li>
        <li className="wind">
          Wind:
          {Math.round(props.data.wind)} km/h
        </li>
      </ul>
    </div>
  );
}

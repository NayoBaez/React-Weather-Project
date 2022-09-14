import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function humidity() {
    let humidity = Math.round(props.data.humidity);
    return `${humidity}`;
  }

  function wind() {
    let wind = Math.round(props.data.wind_speed);
    return `${wind}`;
  }

  function Description() {
    let description = props.data.weather[0].main;
    return `${description}`;
  }

  function weekDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="row">
        <div className="col-sm-2 mb-4 ">
          <div className="weekday">{weekDay()}</div>
          <div className="description">{Description()}</div>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-6">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="weather-icon"
            className="icon-daily"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1">
          <i className="fa-solid fa-wind"></i>
        </div>
        <div className="col-sm-6">
          <span className="wind">{wind()} km/h</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <i className="fa-solid fa-droplet"></i>
        </div>
        <div className="col-sm-2">
          <span className="humidity">{humidity()}%</span>
        </div>
        <div className="col-sm-8 text-end">
          <span className="temperature-max">{maxTemperature()}</span>{" "}
          <span className="temperature-min">{minTemperature()}</span>{" "}
        </div>
      </div>
    </div>
  );
}

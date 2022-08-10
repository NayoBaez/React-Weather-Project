import React from "react";

export default function ForecastDay(props) {
  return (
    <div>
      <div className="Forecast-day">Sun</div>
      <div className="Icon">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
      </div>
      <div className="temp">
        <span className="temperature-max">{props.data.temp.max}°</span>{" "}
        <span className="temperature-min">{props.data.temp.min}°</span>
      </div>
    </div>
  );
}

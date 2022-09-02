import React from "react";
import "./Sunrise.css";

export default function Sunrise(props) {
  function sunrise() {
    let unix = props.data.sunrise;
    let sunrise = new Date(unix * 1000);
    let hour = sunrise.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = sunrise.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = sunrise.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let sunriseTime = `${hour}:${minutes}:${seconds}`;
    return `${sunriseTime}`;
  }

  function sunset() {
    let unix = props.data.sunset;
    let sunset = new Date(unix * 1000);

    let hour = sunset.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = sunset.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = sunset.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let sunsetTime = `${hour}:${minutes}:${seconds}`;
    return `${sunsetTime}`;
  }
  return (
    <div className="container">
      <h4>Sunrise & Sunset</h4>
      <div className="row">
        <div className="col-6">
          {" "}
          <i className="fa-solid fa-sun"></i> {sunrise()}
        </div>
        <div className="col-6">
          {" "}
          <i className="fa-regular fa-sun"></i> {sunset()}
        </div>
      </div>
    </div>
  );
}

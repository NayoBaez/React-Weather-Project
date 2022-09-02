import React from "react";
import "./Moonrise.css";

export default function Moonrise(props) {
  function moonrise() {
    let unix = props.data.moonrise;
    let moonrise = new Date(unix * 1000);
    let hour = moonrise.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = moonrise.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = moonrise.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let moonriseTime = `${hour}:${minutes}`;

    return `${moonriseTime}`;
  }

  function moonset() {
    let unix = props.data.moonset;
    let moonset = new Date(unix * 1000);
    let hour = moonset.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = moonset.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = moonset.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let moonsetTime = `${hour}:${minutes}`;
    return `${moonsetTime}`;
  }

  return (
    <div className="contaner">
      <div className="row">
        <p className="titel-moon">Moonrise & Moonset</p>
        <div className="col-sm-6">
          {" "}
          <i className="fa-solid fa-moon"></i>{" "}
          <span className="moonriseTime"> {moonrise()}</span>
        </div>
        <div className="col-sm-6">
          {" "}
          <i className="fa-regular fa-moon"></i>
          <span className="moonsetTime"> {moonset()}</span>
        </div>
      </div>
    </div>
  );
}

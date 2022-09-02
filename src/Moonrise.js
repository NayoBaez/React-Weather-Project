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
    let moonriseTime = `${hour}:${minutes}:${seconds}`;

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
    let moonsetTime = `${hour}:${minutes}:${seconds}`;
    return `${moonsetTime}`;
  }

  return (
    <div className="contaner">
      <h4>Moonrise & Moonset</h4>
      <div className="row">
        <div className="col-6">
          {" "}
          <i class="fa-solid fa-moon"></i> {moonrise()}
        </div>
        <div className="col-6">
          {" "}
          <i class="fa-regular fa-moon"></i> {moonset()}
        </div>
      </div>
    </div>
  );
}

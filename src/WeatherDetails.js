import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <section>
      <div className="WeatherDetails">
        <div className="row">
          <div className="col-4">
            <i className="fa-solid fa-wind"></i>
          </div>
          <div className="col-4 text-start">Wind</div>
          <div className="col-4 text-start">
            {Math.round(props.data.wind)} km/h
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <i className="fa-solid fa-temperature-three-quarters"></i>
          </div>
          <div className="col-4 text-start">Pressure</div>
          <div className="col-4 text-start">{props.data.pressure}</div>
        </div>
        <div className="row">
          <div className="col-4">
            <i className="fa-solid fa-droplet"></i>
          </div>
          <div className="col-4 text-start">Humidity</div>
          <div className="col-4 text-start">{props.data.humidity} %</div>
        </div>

        <div className="row">
          <div className="col-4 ">
            <i className="fa-solid fa-equals"></i>
          </div>
          <div className="col-4 text-start">Feels like</div>
          <div className="col-4 text-start">
            {Math.round(props.data.feels)} °C
          </div>
        </div>
      </div>
    </section>
  );
}

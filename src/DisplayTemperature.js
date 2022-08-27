import React, { useState } from "react";
import "./DisplayTemperature.css";

export default function DisplayTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)} </span>{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={ShowFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(convertToFahrenheit())}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={ShowCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}

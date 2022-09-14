import React, { useState } from "react";
import "./DisplayTemperature.css";

export default function DisplayTemperature(props) {
  return (
    <span>
      <span className="temperature">{Math.round(props.celsius)} </span>{" "}
      <span className="unit">°C</span>
    </span>
  );
}

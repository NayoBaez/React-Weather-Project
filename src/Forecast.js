import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="container forecast">
      <div className="row">
        <div className="col-2 weekday">Sun </div>
        <div className="col-2 weekday"> Mon </div>
        <div className="col-2 weekday">Tue </div>
        <div className="col-2 weekday"> Wed </div>
        <div className="col-2 weekday">Thu</div>
        <div className="col-2 weekday">Fri </div>
      </div>
    </div>
  );
}

import React from "react";
import "./FormattedDate.css";

export default function FormattedDate() {
  const currentDate = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = weekDays[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <>
      <section>
        <div className="FormattedDate">
          <h1>
            {hour}:{minutes} PM
          </h1>
          <p>
            {day}, {month} {date} {year}
          </p>
        </div>
      </section>
    </>
  );
}

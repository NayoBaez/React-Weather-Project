import React from "react";

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
  const hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  const minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <>
      <div>
        <p>
          {day} {month} {date} {year}, {hour}:{minutes}
        </p>
      </div>
    </>
  );
}

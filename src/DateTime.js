import React from "react";

export default function DateTime(props) {
  function dayNight() {
    if (props.dateFormatted.getHours() > 12) {
      return "PM";
    } else {
      return "AM";
    }
  }
  console.log(props.dateFormatted);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dateFormatted.getDay()];
  let hour = [
    12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11,
  ];
  let hours = hour[props.dateFormatted.getHours()];
  if (hours < 10) {
    hours = `${hours}`;
  }
  let minutes = props.dateFormatted.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "january",
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
  let month = months[props.dateFormatted.getMonth()];
  let date = props.dateFormatted.getDate();
  return (
    <div className="DateTime">
      <h3> {day} |</h3>
      <h3>
        {" "}
        {month} {date} |
      </h3>
      <h3>
        {" "}
        {hours}:{minutes}{" "}
      </h3>
      <h3>{dayNight()}</h3>
    </div>
  );
}

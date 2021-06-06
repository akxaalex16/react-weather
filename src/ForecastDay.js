import React from "react";
import AnimatedIcon from "./AnimatedIcon";

export default function ForecastDay(props) {
  function forecastTempMax() {
    let tempMax = `${Math.round(props.data.temp.max)}`;
    return tempMax;
  }

  function forecastTempMin() {
    let tempMin = `${Math.round(props.data.temp.min)}`;
    return tempMin;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  if (props.units === "fahrenheit") {
    return (
      <div className="Forecast">
        <span className="forecast-date"> {day()} </span>
        <main className="forecast-icon">
          <AnimatedIcon code={props.data.weather[0].icon} size={40} />
        </main>
        <span className="forecast-temperature">
          <span className="forecast-temp-max">{forecastTempMax()} °F | </span>
          <span className="forecast-temp-min"> {forecastTempMin()} °F</span>
        </span>
      </div>
    );
  } else {
    let celsiusTempMin = Math.round(((forecastTempMin() - 32) * 5) / 9);
    let celsiusTempMax = Math.round(((forecastTempMax() - 32) * 5) / 9);
    return (
      <div className="Forecast">
        <span className="forecast-date"> {day()} </span>
        <main className="forecast-icon">
          <AnimatedIcon code={props.data.weather[0].icon} size={40} />
        </main>
        <span className="forecast-temperature">
          <span className="forecast-temp-max">{celsiusTempMax} °C | </span>
          <span className="forecast-temp-min"> {celsiusTempMin} °C</span>
        </span>
      </div>
    );
  }
}

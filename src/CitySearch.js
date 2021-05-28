import React from "react";
import DateTime from "./DateTime";
import "./DateTime.css";
import MainTemp from "./MainTemp";
import "./MainTemp.css";
import Conditions from "./Conditions";
import "./Conditions.css";
import Forecast from "./Forecast";
import "./Forecast.css";

export default function CitySearch(props) {
  return (
    <div className="CitySearch">
      <h1>{props.city}</h1>
      <DateTime dateFormatted={props.date} />
      <MainTemp
        temperature={Math.round(props.data.temperature)}
        description={props.data.description}
        min={props.data.min}
        max={props.data.max}
        icon={props.data.icon}
        units={props.units}
      />
      <Conditions humidity={props.data.humidity} wind={props.data.wind} />
      <span className="forecast-title">Weekly Forecast</span>
      <hr />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
    </div>
  );
}

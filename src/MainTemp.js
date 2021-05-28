import React from "react";
import AnimatedIcon from "./AnimatedIcon";

export default function MainTemp(props) {
  if (props.units === "fahrenheit") {
    return (
      <div className="MainTemp">
        <h1>
          <span className="temperature-now"> {props.temperature} </span>
          <span className="symbol">°F</span>
        </h1>
        <main className="icon-background">
          <AnimatedIcon code={props.icon} />
        </main>
        <p>{props.description}</p>
        <h4>⬆ {props.max}° | </h4>
        <h4>⬇ {props.min}°</h4>
      </div>
    );
  } else {
    let celsius = Math.round(((props.temperature - 32) * 5) / 9);
    let celsiusTempMin = Math.round(((props.min - 32) * 5) / 9);
    let celsiusTempMax = Math.round(((props.max - 32) * 5) / 9);
    return (
      <div className="MainTemp">
        <h1>
          <span className="temperature-now"> {celsius} </span>
          <span className="symbol">°C</span>
        </h1>
        <main className="icon-background">
          <AnimatedIcon code={props.icon} />
        </main>
        <p>{props.description}</p>
        <h4>⬆ {celsiusTempMax}° | </h4>
        <h4>⬇ {celsiusTempMin}°</h4>
      </div>
    );
  }
}

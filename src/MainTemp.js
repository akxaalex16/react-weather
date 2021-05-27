import React from "react";
import AnimatedIcon from "./AnimatedIcon";

export default function MainTemp(props) {
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
}

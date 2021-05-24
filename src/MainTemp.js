import React from "react";

export default function MainTemp(props) {
  return (
    <div className="MainTemp">
      <h1>
        <span className="temperature-now"> {props.temperature} </span>
        <span className="symbol">°F</span>
      </h1>
      <main className="icon-background">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="Light Rain"
        />
      </main>
      <p>{props.description}</p>
      <h4>⬆ {props.max} ° | </h4>
      <h4>⬇ {props.min} °</h4>
    </div>
  );
}

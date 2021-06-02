import React from "react";
import AnimatedIcon from "./AnimatedIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <span className="forecast-date"> Sunday </span>
      <main className="forecast-icon">
        <AnimatedIcon code="01d" size={40} />
      </main>
      <span className="forecast-temperature">
        <span className="forecast-temp-max">82° | </span>
        <span className="forecast-temp-min"> 60°</span>
      </span>
    </div>
  );
}

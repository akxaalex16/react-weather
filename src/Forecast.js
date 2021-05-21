import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <span className="forecast-date"> Sunday </span>
      <main className="forecast-icon">
        <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" />
      </main>
      <span className="forecast-temperature">
        <span className="forecast-temp-max">82° | </span>
        <span className="forecast-temp-min"> 60°</span>
      </span>
    </div>
  );
}

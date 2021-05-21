import React from "react";

export default function MainTemp() {
  return (
    <div className="MainTemp">
      <h1>
        <span className="temperature-now"> 73 </span>
        <span className="symbol">°F</span>
      </h1>
      <main className="icon-background">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Light Rain"
        />
      </main>
      <p>Light Rain</p>
      <h4>⬆ 82 ° | </h4>
      <h4>⬇ 60 °</h4>
    </div>
  );
}

import React from "react";
import "./UVI.css";

export default function UVI(props) {
  let uvi = Math.round(props.uvi);
  function changeUvi() {
    if (uvi <= 2) {
      return "Low";
    }
    if (uvi > 2 && uvi <= 5) {
      return "Moderate";
    }
    if (uvi > 5 && uvi <= 7) {
      return "High";
    }
    if (uvi > 7 && uvi <= 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }
  return (
    <div className="UVI">
      <div className="row">
        <div className="col-4">
          <div className="UV-Index">
            <div>UV Index</div>
            {changeUvi()}
          </div>
        </div>
      </div>
    </div>
  );
}

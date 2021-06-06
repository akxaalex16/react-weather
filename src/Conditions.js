import React from "react";

export default function Humidity(props) {
  return (
    <div className="Conditions">
      <div className="row">
        <div className="col-4">
          <div className="Humidity">
            <div>Humidity</div>
            <div>{props.humidity} %</div>
          </div>
        </div>
        <div className="col-4">
          <div className="Wind">
            <div>Wind</div>
            <div>{props.wind} mph </div>
          </div>
        </div>
      </div>
    </div>
  );
}

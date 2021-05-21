import React from "react";

export default function Humidity() {
  return (
    <div className="Conditions">
      <div className="row">
        <div className="col-4">
          <div className="Humidity">
            <div>Humidity</div>
            <div>76 %</div>
          </div>
        </div>
        <div className="col-4">
          <div className="Wind">
            <div>Wind</div>
            <div>3 mph </div>
          </div>
        </div>
        <div className="col-4">
          <div className="UV-Index">
            <div>UV Index</div>
            <div>Low</div>
          </div>
        </div>
      </div>
    </div>
  );
}

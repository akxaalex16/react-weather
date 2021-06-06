import React from "react";
import "./UVI.css";

export default function UVI(props) {
  let uvi = Math.round(props.uvi);
  return (
    <div className="UVI">
      <div className="row">
        <div className="col-4">
          <div className="UV-Index">
            <div>UV Index</div>
            {uvi}
          </div>
        </div>
      </div>
    </div>
  );
}

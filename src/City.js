import React from "react";
import "./City.css";
import DateTime from "./DateTime";
import "./DateTime.css";
import MainTemp from "./MainTemp";
import "./MainTemp.css";

export default function City() {
  return (
    <div className="City">
      <h1>Los Angeles</h1>
      <DateTime />
      <MainTemp />
    </div>
  );
}

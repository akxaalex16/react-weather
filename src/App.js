import React from "react";
import City from "./City";
import "./Conditions.css";
import Forecast from "./Forecast";
import "./Forecast.css";
import Footer from "./Footer";
import "./Footer.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <City />
        <span className="forecast-title">Weekly Forecast</span>
        <hr />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;

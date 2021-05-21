import React from "react";
import City from "./City";
import Conditions from "./Conditions";
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
        <form>
          <input
            className="search-input"
            type="search"
            placeholder="Search city here"
          ></input>
          <input className="search-button" type="submit" value="Search"></input>
          <input className="fahrenheit" type="submit" value="°F"></input>
          <input className="celsius" type="submit" value="°C"></input>{" "}
        </form>
        <hr />
        <City />
        <Conditions />
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

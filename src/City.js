import React, { useState } from "react";
import "./City.css";
import DateTime from "./DateTime";
import "./DateTime.css";
import MainTemp from "./MainTemp";
import "./MainTemp.css";
import axios from "axios";
import Conditions from "./Conditions";
import "./Conditions.css";
import Forecast from "./Forecast";
import "./Forecast.css";

export default function City() {
  let [city, setCity] = useState("Los Angeles");
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      icon: response.data.weather[0].icon,
    });
  }

  function showCity(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="City">
        <form onSubmit={showCity}>
          <input
            onChange={updateCity}
            className="search-input"
            type="search"
            placeholder="Search city here"
          ></input>
          <input className="search-button" type="submit" value="Search"></input>
          <input className="fahrenheit" type="submit" value="°F"></input>
          <input className="celsius" type="submit" value="°C"></input>{" "}
        </form>
        <hr />
        <h1>{city}</h1>
        <DateTime />
        <MainTemp
          temperature={Math.round(weatherData.temperature)}
          description={weatherData.description}
          min={weatherData.min}
          max={weatherData.max}
          icon={weatherData.icon}
        />
        <Conditions humidity={weatherData.humidity} wind={weatherData.wind} />
        <span className="forecast-title">Weekly Forecast</span>
        <hr />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
    );
  } else {
    let apiKey = "4c66a798f5a323cb9ebdeec9b1a19ca2";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...;";
  }
}

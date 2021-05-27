import React, { useState } from "react";
import "./City.css";
import axios from "axios";
import CitySearch from "./CitySearch";

export default function City(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      icon: response.data.weather[0].icon,
      city: response.data.main,
    });
  }

  function search() {
    let apiKey = "4c66a798f5a323cb9ebdeec9b1a19ca2";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showCity(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
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
        <CitySearch data={weatherData} date={weatherData.date} city={city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

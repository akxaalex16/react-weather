import React, { useState } from "react";
import "./City.css";
import DateTime from "./DateTime";
import "./DateTime.css";
import MainTemp from "./MainTemp";
import "./MainTemp.css";
import axios from "axios";
import Conditions from "./Conditions";
import "./Conditions.css";

export default function City() {
  let [city, setCity] = useState("Los Angeles");
  let [temperature, setTemperature] = useState(73);
  let [humidity, setHumidity] = useState(76);
  let [wind, setWind] = useState(3);
  let [description, setDescription] = useState("Light Rain");
  let [min, setMin] = useState(60);
  let [max, setMax] = useState(82);
  let [icon, setIcon] = useState("10d");

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setMin(response.data.main.temp_min);
    setMax(response.data.main.temp_max);
    setIcon(response.data.weather[0].icon);
  }

  function showCity(event) {
    event.preventDefault();
    let apiKey = "4c66a798f5a323cb9ebdeec9b1a19ca2";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
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
        temperature={Math.round(temperature)}
        description={description}
        min={Math.round(min)}
        max={Math.round(max)}
        icon={icon}
      />
      <Conditions humidity={humidity} wind={Math.round(wind)} />
    </div>
  );
}

import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import UVI from "./UVI";

export default function Forecast(props) {
  let [uvi, setUvi] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setUvi(response.data.current.uvi);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        {forecastData.map(function (weeklyForecast, index) {
          if (index > 0 && index < 7) {
            return (
              <div key={index}>
                <ForecastDay data={weeklyForecast} units={props.units} />
              </div>
            );
          } else {
            return null;
          }
        })}
        <UVI uvi={uvi} />
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "4c66a798f5a323cb9ebdeec9b1a19ca2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

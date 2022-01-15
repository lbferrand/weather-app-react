import React, { useState } from "react";
import axios from "axios";
import FormatDay from "./FormatDay.js";

export default function Forecast() {
  return (
    (<FormatDay />),
    function displayForecast(response) {
      let forecast = response.data.daily;
      let [forecastElement, setForecastElement] = useState(" ");
      document.querySelector("#forecast");

      let forecastHTML = `<div class="row">`;
      forecast.forEach(function (forecastDay, index) {
        if (index < 6) {
          forecastHTML =
            forecastHTML +
            `
        <div class="col-2">
          <div class="weather-forecast-date">{formatDay(forecastDay.dt)}</div>
          <img
              src="http://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png"
              alt=""
              width="36"
            />
            <div class="weather-forecast-temperatures">
              <span class="weather-temp-max">${Math.round(
                forecastDay.temp.max
              )}°</span>
              <span class="weather-temp-min">${Math.round(
                forecastDay.temp.min
              )}°</span>
            </div>
          </div>`;
        }
      });

      forecastHTML = forecastHTML + `</div>`;
      forecastElement.innerHTML = forecastHTML;
    },
    function getForecast(coordinates) {
      let apiKey = "111d251bac5a6929ec7b388bf51f6a63";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(displayForecast);
    }
  );
}

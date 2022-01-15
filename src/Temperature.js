import React, { useState } from "react";
import axios from "axios";
import FormatDay from "./FormatDay.js";
import Forecast from "./Forecast.js";

export default function Temperature() {
  const [weather, setWeather] = useState({});
  return (
    (<FormatDay />),
    (<Forecast />),
    function showTemperature(response) {
      setLoaded(true);
      setWeather({
        celsiusTemperature: response.data.main.temp,
        temperatureElement: Math.round(celsiusTemperature),
        cityElement: response.data.name,
        descriptionElement: response.data.weather[0].description,
        humidityElement: response.data.main.humidity,
        windElement: Math.round(response.data.wind.speed),
        feelsLikeElement: Math.round(response.data.main.feels_like),
        dateElement: formatDate(response.data.dt * 1000),
        iconElement: setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        ),
        iconElement: setAttribute("alt", response.data.weather[0].description),
        getForecast: response.data.coord,
      });
    },
    function handleSubmit(event) {
      event.preventDefault();
      //have access to the city
      //alert(city);
      //make an api call
      let apiKey = "a0321581dcecd509e313e60aef62d42d";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      console.log(apiUrl);
      axios.get(apiUrl).then(showTemperature);
      //update the weather UI by creating function showTemperature above
    },
    //let form = <Search />

    search("Miami"),
    displayForescast()
  );
}

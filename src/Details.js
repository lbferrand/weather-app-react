import React from "react";
import Temperature from "./Temperature.js";

export default function Details() {
  return (
    <div className="overview">
      <h1 id="city"></h1>
      <ul>
        <li>
          Last updated:
          <span id="date"></span>
        </li>
        <li id="description"></li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="#" alt="image" id="icon" className="float-left" />
            <strong id="temperature"></strong>
            <span className="units">°F </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> mph
            </li>
            <li>
              Precipitation: <span id="precipitation"></span>%
            </li>
            <li>
              Feels Like: <span id="feels-like"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
      <Temperature />
    </div>
  );
}

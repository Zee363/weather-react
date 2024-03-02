import React from "react";
import "./style.css";

export default function Main() {
  return (
    <div className="weather-data">
      <div>
        <h1 id="city">Cape Town</h1>
        <p>
          <span id="time">19</span> : <span id="description">17</span>
          <br />
          Humidity: 26% <strong id="humidity"></strong>
          <br />
          Wind: 45km/h <strong id="speed-of-wind"></strong>
        </p>
      </div>

      <div>
        <div className="weather-app-temp-container"></div>
        <div className="weather-temperature" id="temperature">
          8
        </div>
        <div className="weather-app-unit">&deg;C</div>
      </div>
      </div>  
  );
}

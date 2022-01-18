import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="city-seach-form">
        <div className="row m-3">
          <div className="col-6 search-box">
            <input
              type="search"
              className="input_search"
              placeholder="Enter a City"
              id="search-text-input"
            />
          </div>
          <div className="col-2 button">
            <button className="search" id="searchCity">
              Search
            </button>
          </div>
          <div className="col-4 button">
            <button className="location" id="currentCity">
              Current City
            </button>
          </div>
        </div>
      </form>
      <div className="row m-3">
        <div className="col-4 date">
          <h2>Coimbra</h2>
          <p className="date">Friday, 14 jan </p>
          <p className="description">Clear Sky</p>
        </div>
        <div className="col-4 conditions">
          <span className="temperature" id="currentTemperature">
            12
          </span>
          <span className="units">
            <a href="/" className="celcius" id="degreesC">
              ºC
            </a>
            |
            <a href="/" className="fahrenheit" id="degreesF">
              ºF
            </a>
          </span>
          <h3>
            <span id="max">3</span>º/
            <span id="min">13</span>º
          </h3>
          <p>
            Humidity: <span id="humidity">44</span>%
          </p>
          <p>
            Wind:<span id="wind"></span> 12km/h
          </p>
        </div>
        <div className="col-4 present-weather">
          <img src={`http://openweathermap.org/img/wn/01d@2x.png`} alt="" />
        </div>
      </div>
    </div>
  );
}

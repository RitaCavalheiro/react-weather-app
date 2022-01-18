import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: "Friday, 14 jan",
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.loaded) {
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
            <h2>{weatherData.city}</h2>
            <p className="date">{weatherData.date} </p>
            <p className="description">{weatherData.description}</p>
          </div>
          <div className="col-4 conditions">
            <span className="temperature" id="currentTemperature">
              {weatherData.temperature}
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
              <span id="max">{weatherData.max}</span>º/
              <span id="min">{weatherData.min}</span>º
            </h3>
            <p>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </p>
            <p>
              Wind:<span id="wind"></span> {weatherData.wind}km/h
            </p>
          </div>
          <div className="col-4 present-weather">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="{weatherData.description}"
            />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "14a11ca12b8325f528737d829fa8d1b3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

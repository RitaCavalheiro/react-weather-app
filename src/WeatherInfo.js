import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row m-3">
        <div className="col-4 date">
          <h2>{props.data.city}</h2>
          <FormattedDate date={props.data.date} />{" "}
          <p className="description">{props.data.description}</p>
        </div>
        <div className="col-4 conditions">
          <span className="temperature" id="currentTemperature">
            {props.data.temperature}
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
            <span id="max">{props.data.max}</span>º/
            <span id="min">{props.data.min}</span>º
          </h3>
          <p>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </p>
          <p>
            Wind:<span id="wind"></span> {props.data.wind}km/h
          </p>
        </div>
        <div className="col-4 present-weather">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt="{weatherData.description}"
          />
        </div>
      </div>
    </div>
  );
}

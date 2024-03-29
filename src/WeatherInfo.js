import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row m-3">
        <div className="col-6 date">
          <h2>{props.data.city}</h2>
          <FormattedDate date={props.data.date} />{" "}
          <p className="description">{props.data.description}</p>
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
        <div className="col-6 mt-3 conditions">
          <WeatherTemperature celcius={props.data.temperature} />
          <h3>
            <span id="max">{props.data.max}</span>º |{" "}
            <span id="min">{props.data.min}</span>º
          </h3>
          <p>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </p>
          <p>
            Wind:<span id="wind"></span> {props.data.wind}km/h
          </p>
        </div>
      </div>
    </div>
  );
}

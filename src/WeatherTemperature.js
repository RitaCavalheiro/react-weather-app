import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahreinheit(event) {
    event.preventDefault();
    setUnit("fahreinheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        <span className="temperature" id="currentTemperature">
          {Math.round(props.celcius)}
        </span>
        <span className="units">
          <a href="/" className="celcius fw-bold" id="degreesC">
            ºC
          </a>
          |
          <a
            href="/"
            className="fahrenheit"
            id="degreesF"
            onClick={showFahreinheit}
          >
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature" id="currentTemperature">
          {Math.round(fahrenheit)}
        </span>
        <span className="units">
          <a href="/" className="celcius" id="degreesC" onClick={showCelcius}>
            ºC
          </a>
          |
          <a href="/" className="fahrenheit fw-bold" id="degreesF">
            ºF
          </a>
        </span>
      </div>
    );
  }
}

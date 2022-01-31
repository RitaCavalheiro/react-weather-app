import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="temperature" id="currentTemperature">
        {Math.round(props.celcius)}
      </span>
      <span className="units">
        <a href="/" className="celcius fw-bold" id="degreesC">
          ºC
        </a>
      </span>
    </div>
  );
}

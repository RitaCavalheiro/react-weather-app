import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a
          href="https://github.com/RitaCavalheiro/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourse code{" "}
        </a>{" "}
        by Rita Cavalheiro{" "}
      </footer>
    </div>
  );
}

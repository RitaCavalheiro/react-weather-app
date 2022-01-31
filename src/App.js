import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Coimbra" />
      </div>
      <footer>
        <a
          className="gitLink"
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

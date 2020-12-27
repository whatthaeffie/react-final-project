import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="New York" />
    <footer>
      Open-sourced code created by Effie Fletcher{" "}
    <a href="https://github.com/whatthaeffie/react-final-project"> available on Github </a>
    </footer>
    </div>
    </div>
  );
}


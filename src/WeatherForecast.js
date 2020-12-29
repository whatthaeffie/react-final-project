import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherPreview from "./WeatherPreview";
import axios from "axios";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

   if (loaded && props.city === forecast.city.name) {
    return (
        <div className="WeatherForecast row">
              <WeatherPreview data={forecast.list[0]} />
              <WeatherPreview data={forecast.list[1]} />
              <WeatherPreview data={forecast.list[2]} />
              <WeatherPreview data={forecast.list[3]} />
              <WeatherPreview data={forecast.list[4]} />
              <WeatherPreview data={forecast.list[5]} />
        </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleForecast);
return null;
  }
}


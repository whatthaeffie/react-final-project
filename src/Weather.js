import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "http://openweathermap.org/img/wn/03d@2x.png",
        date: new Date(response.data.dt * 1000)
        });
    }
    if (weatherData.ready) {
        return (
   <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Which city do you want to visit?"
                className="form-control"
                autoFocus="on"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
           <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <i class="fas fa-tree"></i>
            <i class="fas fa-tree"></i>
            <i className="fas fa-tree"></i>
            <i className="fas fa-tree"></i>
          </li>
              <li><FormatDate date={weatherData.date} /></li>
              <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        <div className="row">
            <div className="col-6">
                <div class="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" class="float-left" />
              <div class="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span> 
            <span className="unit">°C</span>
            </div>
            </div>   
            </div>
             <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind}mph</li>
                </ul>
            </div>     
        </div>
    </div>
        ); 
    } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
        
    }
}
   
   
 
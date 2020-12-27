import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
           <h1>{props.data.city}</h1>
        <ul>
          <li>
            <i class="fas fa-tree"></i>
            <i class="fas fa-tree"></i>
            <i className="fas fa-tree"></i>
            <i className="fas fa-tree"></i>
          </li>
              <li><FormatDate date={props.data.date} /></li>
              <li className="text-capitalize">{props.data.description}</li>
          </ul>
        <div className="row">
            <div className="col-6">
                <div class="clearfix">
              <img src={props.data.iconUrl} alt={props.data.description} id="icon" class="float-left" />
              <div class="float-left">
            <span className="temperature">{Math.round(props.data.temperature)}</span> 
            <span className="unit">°C</span>
            </div>
            </div>   
            </div>
             <div className="col-6">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind}mph</li>
                </ul>
            </div>     
        </div>
        </div>
    );
}
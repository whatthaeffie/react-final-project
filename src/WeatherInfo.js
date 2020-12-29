import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import Tree from './icons/Tree.svg';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
           <h1>{props.data.city}</h1>
        <ul>
          <li>
              <div className="trees">
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           <img src={Tree} alt="icon" />
           </div>
          </li>
              <li><FormatDate date={props.data.date} /></li>
              <li className="text-capitalize">{props.data.description}</li>
          </ul>
        <div className="row">
            <div className="col-6">
                <div class="clearfix">
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon} /></div>
              <div class="float-left">
                  <WeatherTemp fahr={props.data.temperature} />
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
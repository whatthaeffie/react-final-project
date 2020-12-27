import React from "react";
import "./Weather.css";

export default function Weather() {
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
           <h1>New York</h1>
        <ul>
          <li>
            <i class="fas fa-tree"></i>
            <i class="fas fa-tree"></i>
            <i className="fas fa-tree"></i>
            <i className="fas fa-tree"></i>
          </li>
              <li>Wednesday 07:00</li>
              <li>Mostly Cloudy</li>
          </ul>
        <div className="row">
            <div className="col-6">
                <div class="clearfix">
              <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" id="icon" class="float-left" />
              <div class="float-left">
            <span className="temperature">6</span> 
            <span className="unit">°C</span>
            </div>
            </div>   
            </div>
             <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 10%</li>
                    <li>Wind: 5mph</li>
                </ul>
            </div>     
        </div>
    </div>
   ) 
}
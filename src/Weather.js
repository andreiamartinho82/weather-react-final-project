import React, {useState} from 'react';
import Axios from "axios";
import './Weather.css';
import axios from 'axios';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

export default function Weather(props){
    const [ready, setReady]=useState(false);
    const [weatherData, setWeatherData]=useState({});
    
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp, 
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            wind: response.data.wind.speed,
            date: "Wednesday 07:00",
            city: response.data.name,
            
        });       
        setReady(true);

    }

    if(ready){
  return (
        
    
  <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search for a city" className="form-control" autoFocus="on" />
               </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
<h1>{props.defaultCity}</h1>
<ul>
    <li>
        {weatherData.date}
    </li>
    <li className="text-capitalize">
        {weatherData.description}
    </li>
</ul>
<div className="row" mt-3>
<div className="col-6">
<img src={weatherData.icon} alt={weatherData.description}/>
<span className="temperature">{Math.round(weatherData.temperature)}</span><span className="units">ºC</span>
</div>
<div className="col-6">
    <ul>
        <li>
            Humidity: {weatherData.humidity}%
        </li>
         <li>
           Wind: {weatherData.wind} km/h
        </li>
    </ul>
</div>


</div>

        </div>
)
    } else{

  let city=`london`;
  let apiKey=`0ede9060c9da0e5d78059f6085416d96`;
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
    }




        



}
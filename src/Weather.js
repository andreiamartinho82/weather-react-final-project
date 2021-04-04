import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";




export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    
        function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp, 
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            
        });       
         }

     function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityInput(event){
     setCity(event.target.value);
    }

    function search(){
        
  const apiKey="0ede9060c9da0e5d78059f6085416d96";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    }
    
   

 if (weatherData.ready){
  return (
         <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Search for a city" className="form-control" autoFocus="on" onChange={handleCityInput} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                 </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}/>
           
    </div>
);
    } else {
        search();

  return "Loading...";
    }
 }
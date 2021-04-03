import React, {useState} from 'react';
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";



export default function Weather(props){
    const [ready, setReady]=useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity]=useState(props.defaultCity);
    
    function handleResponse(response){
             setWeatherData({
            ready: true,
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

    function handleCityinput(event){
     setCity(event.target.value);
    }

    function search(){
        
  let apiKey=`0ede9060c9da0e5d78059f6085416d96`;
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    }
    
   

 if (weatherData.ready){
  return (
        
    
  <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Search for a city" className="form-control" autoFocus="on" onChange={handleCityinput} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                 </div>
            </form>
            <WeatherInfo data={weatherData}/>


    </div>
)
    } else{
        search();

  return "Loading...";
    }




        



}
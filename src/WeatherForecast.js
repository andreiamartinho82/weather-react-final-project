import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props){
   
    let[loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);

    }

    
    if (loaded){
    
          return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast,index){

                    if(index<5){

                         return (
                     <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                    </div>  
                    
                    );
                    }
    
                })}
             
            </div>
        </div>

    );

    }else{


    let apiKey="0ede9060c9da0e5d78059f6085416d96";
    let longitude = props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);
   
return null;
       
    }
   
   
}
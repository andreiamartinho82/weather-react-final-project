import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function Max(){
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}º` ;
    }

    function Min (){
         let temperature= Math.round(props.data.temp.min);
        return `${temperature}º` ;
    }

    function Day(){
       let date=new Date (props.data.dt*1000);
       let day= date.getDay();
       let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];


       return days[day];
    }

return (

    <div >
        <div className="WeatherForecastDay">
        {Day()}
         </div>
        <WeatherIcon code={props.data.weather[0].icon} size={32}/>
            <div className="WeatherForecastTemperature">
                            <span className="WeatherForecastTemperatureMax">{Max()}</span>
                            <span className="WeatherForecastTemperatureMin">{Min()}</span>  
            
            </div>
     </div>       
);
}
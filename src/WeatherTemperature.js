import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius");

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("farenheit");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}

if (unit === "celsius"){
    return (
        <div>
         <span className="temperature">
             {Math.round(props.celsius)}
        </span>
        <span className="units">
            ºC | <a href="*" onClick={convertToFahrenheit}>ºF</a>
        </span>
        </div>
)

}else{
    let far=(props.celsius*9/5)+32;
  return (
        <div>
         <span className="temperature">
             {Math.round(far)}
        </span>
        <span className="units">
            <a href="*" onClick={convertToCelsius}>ºC</a> | ºF
        </span>
        </div>
)
}

    
}
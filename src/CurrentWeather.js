import "./CurrentWeather.css";
import { useState, useEffect } from "react";


export default function CurrentWeather(props) {
    const [convertTemp, setConvertTemp] = useState("");

   
    useEffect(() => {
        setConvertTemp(Math.round(props.weatherData.temperature));    
    }, [props.weatherData])

    //temperature in celcius handle click
    function handleClickCel() {
        setConvertTemp(Math.round(props.weatherData.temperature));        
        changeColor('.celsius', '.fahrenheit');
    }
    //temperature in fehrenheit handle click
    function handleClickFeh() {
        setConvertTemp(Math.round((props.weatherData.temperature * 9/5) + 32));
        changeColor('.fahrenheit','.celsius');
    }    

    // celcius & fehrenheit color change
    function changeColor(onClass, offClass) {
        document.querySelector(onClass).style.fontWeight="bold";
        document.querySelector(offClass).style.fontWeight="300";
    }

    function roundNumbers(data) {
        return Math.round(data)
    }

    const humidityResult = roundNumbers(props.weatherData.humidity);
    const windResult = roundNumbers(props.weatherData.wind);
    const uvResult = roundNumbers(props.weatherData.uv);
   
    if(props.visibility) {
        return (
            <div>
                <h3 className="text-center">{props.city}
                {props.visibility && <span className="badge badge-pill bg-info rounded mx-2 px-2">Now</span>}
                </h3> 
                {props.visibility && <p className="currentDate text-center">{props.currentTime}</p>}            

                <div className="row">
                    <div className="col-12 col-lg-6 text-center bg-light">
                        <img src={`https://www.weatherbit.io/static/img/icons/${props.weatherData.icon}.png`} alt="weatherIcon" />
                        <p className="currentTemp">
                            <span className="fw-bold currentTemperature">{convertTemp}</span>
                            <span className="celsius" onClick={handleClickCel}> °C</span>
                            <span> | </span>
                            <span className="fahrenheit" onClick={handleClickFeh}>°F</span>
                        </p>
                        <p className="description">{props.weatherData.description}</p>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-around text-light py-2 otherInfo bg-black">
                        <p className="humidity mx-3 my-0 text-center">
                            Humidity
                            <span className="d-block">{humidityResult} %</span>
                        </p>
                        <p className="windSpeed mx-3 my-0 text-center">
                            Wind Speed
                            <span className="d-block">{windResult} m/s</span>
                        </p>
                        <p className="uvStrength mx-3 my-0 text-center">
                            UV Strength
                            <span className="d-block">{uvResult}</span>
                        </p>
                    </div>
                </div>
            </div>        
            )
    } else {
        return null;
    }

        
}
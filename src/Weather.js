import Form from "./Form";
import "./Weather.css";
import { useState, useEffect } from "react";
import WeatherGroup from "./WeatherGroup";

import axios from "axios";


export default function Weather(props) {

    const [city, setCity] = useState(props.defaultCity);
    const [visibility, setVisibility] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false });

    useEffect(() => {
        return weatherData.temperature;
    },[weatherData])


    const apiKey = '6cc56a1d52494b9faef23339221003';       

    function currentWeatherResponse(response) {
        console.log(response)
        setWeatherData({
            ready: true,
            city:response.data.location.name,
            time:response.data.location.localtime,
            timezone: response.data.tz_id,
            temperature: response.data.current.temp_c,
            description: response.data.current.condition.text,
            icon: response.data.current.condition.icon,
            wind: response.data.current.wind_mph,
            uv: response.data.current.uv,
            humidity: response.data.current.humidity,
            latitude: response.data.location.lat,
            longitude: response.data.location.lon
        })
    }    

    function getCurrentWeather() {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        axios
            .get(url)
            .then(currentWeatherResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getCurrentWeather();
        setVisibility(true);   
    }   

    function handleSearch(e) {        
        setCity(e.target.value);        
    }

    let currentTime = new Date(weatherData.time).toLocaleString("en-US", {weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: weatherData.timezone}); // get local time through conversion

    if(weatherData.ready) {
            return (
                <div className="Weather shadow rounded py-5">
                    <Form 
                        handleSubmit={handleSubmit}
                        handleSearch={handleSearch}
                    />
                    {visibility && <WeatherGroup 
                        visibility={visibility}
                        weatherData={weatherData}
                        currentTime={currentTime}
                        apiKey={apiKey}
                    />}
                                           
                </div>
            );
        } else {
            getCurrentWeather();
            return 'something...';
        }   
}
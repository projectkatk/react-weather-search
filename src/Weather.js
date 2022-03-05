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


    const apiKey = 'd4d30a1e27ac44be930c6e0af22ec9e1';       

    function currentWeatherResponse(response) {
        const responseData = response.data.data[0];
        setWeatherData({
            ready: true,
            city:responseData.city_name,
            time:responseData.ts,
            timezone: responseData.timezone,
            temperature: responseData.temp,
            description: responseData.weather.description,
            icon: responseData.weather.icon,
            wind: responseData.wind_spd,
            uv: responseData.uv,
            humidity: responseData.rh,
            latitude: responseData.lat,
            longitude: responseData.lon             
        })
    }    

    function getCurrentWeather() {
        const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=metric`;
        axios
            .get(url)
            .then(currentWeatherResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setVisibility(true);
        getCurrentWeather();       
    }   

    function handleSearch(e) {
        setCity(e.target.value)
    }

    let currentTime = new Date().toLocaleString("en-US", {weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: weatherData.timezone}); // get local time through conversion


    
    if(weatherData.ready) {
        return (
            <div className="Weather shadow rounded py-5">
                <Form 
                    handleSubmit={handleSubmit}
                    handleSearch={handleSearch}
                />
                <WeatherGroup 
                    visibility={visibility}
                    weatherData={weatherData}
                    currentTime={currentTime}
                    apiKey={apiKey}
                />                              
            </div>
        );
    } else {
        getCurrentWeather();
        return 'something...';
    }   
}
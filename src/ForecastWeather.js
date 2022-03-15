import { useState, useEffect } from "react";
import axios from "axios"
import "./ForecastWeather.css"
import DailyForecast from "./DailyForecast";

export default function ForecastWeather(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState();


    useEffect(() => {
        setLoaded(false)
    }, [props.city])

    function handleResponse(response) {
        setForecast(response.data.forecast.forecastday)
        setLoaded(true)
    }

    function load() {
        try {
            const forecastApiKey = `6cc56a1d52494b9faef23339221003`;
            const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${forecastApiKey}&q=${props.city}&days=3&aqi=no&alerts=no`
            axios
                .get(forecastURL)
                .then(handleResponse)
        } catch(error) {
            console.log(error)
        }       
    }
    
    if(loaded) {
        return (
        <div className="Forecast">
            <DailyForecast 
                forecast={forecast}                
            />            
        </div>
    )} else {
        load();
        return null;
    }
   
}
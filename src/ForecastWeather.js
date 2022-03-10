import { useState, useEffect } from "react";
import axios from "axios"
import "./ForecastWeather.css"

export default function ForecastWeather(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState();


    useEffect(() => {
        setLoaded(false)
        console.log('forecast effect used')
    }, [props.city])

    function handleResponse(response) {
        console.log(response.data.forecast)
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
    const convertDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const convertMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    

    if(loaded) {
        return (
        <div className="Forecast">
        <h4 className="text-center pt-3 mb-0 text-white">Next 3 days Forecast</h4>
            <div className="row d-flex justify-content-center pt-3">
                {forecast.map((dailyForecast, index) => {
                    let getDay = new Date(dailyForecast.date_epoch*1000).getDay();
                    let getDate = new Date(dailyForecast.date_epoch*1000).getDate();
                    let getMonth = new Date(dailyForecast.date_epoch*1000).getMonth();
                    if(index < 3) {
                        return (
                        <div className="col-sm-3 d-flex d-sm-block justify-content-around align-items-center forecast-style text-white mx-3 my-3" key={index}>
                            <div className="d-flex justify-content-center dateConfig">
                                <span className="d-inline-block">{convertDay[getDay]}, </span>                                
                                <p className="d-inline-block mb-1"> {getDate} {convertMonth[getMonth]}</p>   
                            </div>
                            <div>
                                <img className="forecast-icon d-inline-block" src={`${dailyForecast.day.condition.icon}`} alt="forecast Icon" />
                                <div>
                                    <small className="px-1 minmax d-inline-block">{Math.round(dailyForecast.day.mintemp_c)}°C</small>
                                    <small className="px-1 minmax d-inline-block">{Math.round(dailyForecast.day.maxtemp_c)}°C</small>
                                </div>   
                            </div>                             
                                                     
                        </div>
                    )
                    } else {
                        return null;
                    }                        
                })}                   
            </div>
        </div>
    )} else {
        load();
        return null;
    }
   
}
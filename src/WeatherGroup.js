import "./WeatherGroup.css"
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";




export default function WeatherGroup(props) {
        return (
            <div className="container WeatherGroup mt-5">              
               <CurrentWeather 
                   visibility={props.visibility}
                   city={props.weatherData.city}
                   currentTime={props.currentTime}
                   weatherData={props.weatherData}                   
               />
               <ForecastWeather 
                   latitude={props.weatherData.latitude.toFixed(2)}
                   longitude={props.weatherData.longitude.toFixed(2)}
                   visibility={props.visibility}
                   weatherData={props.weatherData}
                   city={props.weatherData.city}
                   loadData={props.loadData}
               />              
            </div>
        )


    
}
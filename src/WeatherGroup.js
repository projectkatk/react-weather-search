import "./WeatherGroup.css"
import CurrentWeather from "./CurrentWeather";



export default function WeatherGroup(props) {
        return (
            <div className="container WeatherGroup mt-5">              
               <CurrentWeather 
                   visibility={props.visibility}
                   city={props.weatherData.city}
                   currentTime={props.currentTime}
                   weatherData={props.weatherData}                   
               />               
            </div>
        )


    
}
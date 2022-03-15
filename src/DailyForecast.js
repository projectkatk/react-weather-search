export default function DailyForecast(props) {
    const convertDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const convertMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    
    return (
        <div>
         <h4 className="text-center pt-3 mb-0 text-white">Next 3 days Forecast</h4>
            <div className="row d-flex justify-content-center pt-3">
                {props.forecast.map((dailyForecast, index) => {
                    let getDay = new Date(dailyForecast.date_epoch*1000).getDay();
                    let getDate = new Date(dailyForecast.date_epoch*1000).getDate();
                    let getMonth = new Date(dailyForecast.date_epoch*1000).getMonth();
                    if(index < 3) {
                        return (
                        <div className="col-sm-3 d-flex d-sm-block justify-content-around align-items-center forecast-style text-white mx-3 my-3 shadow" key={index}>
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
       
    )
}
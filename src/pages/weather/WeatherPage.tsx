import { useState } from "react"
import { WeatherData } from "../../types/weatherType";
import { getForecast } from "../../utils/weatherAPICalls";
import WeatherCardComponent from "../../components/weatherCard";
import ForecastComponent from "../../components/forecast";
import WeatherSearchComponent from "../../components/weatherSearch";

export const WeatherPage = () => {
    const [weather,setWeather] = useState<WeatherData>();
    const [location,setLocation] = useState("")
    const [days,setDays] = useState(1)

    const updateForecast = () => {
        getForecast(location,days)
        .then(resp => setWeather(resp))
    };

    return (
        <>
        <div style = {{height: '100vh', width: '100vw', justifyItems: 'center'}}>
            <h1>Check Your Destination</h1>
            <WeatherSearchComponent setDays={setDays} location={location} setLocation={setLocation} getForecastCB={() => {updateForecast()}}/>
            {weather?.current && <WeatherCardComponent currentWeather={weather?.current} />}
            {weather?.forecast.forecastday && <ForecastComponent forecastDays={weather?.forecast.forecastday}/>}
        </div>
        </>
    )
}
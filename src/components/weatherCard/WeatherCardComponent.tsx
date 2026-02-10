import { useContext } from "react"
import { Current } from "../../types/weatherType"
import { ThemeContext } from "../../App"

interface WeatherCardProps {
    currentWeather: Current
}

export const WeatherCardComponent = ({currentWeather}:WeatherCardProps) => {
    const theme = useContext(ThemeContext);
    const date = new Date().toLocaleDateString();

    return (
    <>
        <div style = {{width: '80%', height: '400px' ,justifyItems: 'center', alignContent: 'center',textAlign: 'center', backgroundColor: theme?.theme.surface, borderRadius: 10, boxShadow: ` 10px 10px 10px #00000025`}}>
            <img src = {currentWeather.condition.icon} style= {{width: '100px'}} alt = "" />
            <div style = {{display: 'flex', alignItems: 'center', gap: 10}}>
            <h1 style = {{fontWeight: 800}}>Today</h1>
            <h1 style = {{color: theme?.theme.textSecondary, fontWeight: 800}}>{date.slice(0,date.length-5)}</h1>
            </div>
            <p>Temperature</p> <p style = {{color: theme?.theme.textSecondary, fontWeight: 800}}>{currentWeather.temp_f}°</p>
            <p>Feels Like</p> <p style = {{color: theme?.theme.textSecondary , fontWeight: 800}}>{currentWeather.feelslike_f}°</p>
        </div>
    </>)
}
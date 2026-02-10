import { useContext } from "react";
import { daysOfTheWeek, ForecastDay } from "../../types/weatherType"
import { ThemeContext } from "../../App";

interface ForecastCardComponentProps {
    forecast: ForecastDay
}

export const ForecastCardComponent = ({forecast}:ForecastCardComponentProps) => {
    const theme = useContext(ThemeContext);
    const date = new Date(forecast.date);

    return (
        <>
        <div style = {{display: 'flex', flexDirection: 'column', width: '200px', height: '220px',padding: 10, alignItems: 'center', margin: 10, borderRadius: 10, flexShrink:0, backgroundColor: theme?.theme.surface, boxShadow: ` 10px 10px 10px #00000025`}}>
            <img src = {forecast.day.condition.icon} alt = ""/>
            <p style = {{fontWeight: 800, marginBottom: 0}}>{daysOfTheWeek[new Date(forecast.date).getDay()]}</p>
            <p style = {{fontWeight: 800, opacity: 0.5, padding: 0, margin: 0, fontSize: '0.8em'}}>{date.toLocaleDateString().slice(0,date.toLocaleDateString().length-5)}</p>
            <p style = {{fontWeight:800, marginBottom: 1}}>{forecast.day.condition.text}</p>
            <p style = {{color: theme?.theme.textSecondary, fontWeight: 600}}><span style = {{color: theme?.theme.accent}}>{forecast.day.mintemp_f}°</span> / {forecast.day.maxtemp_f}</p>
        </div>
        </>
    )
}
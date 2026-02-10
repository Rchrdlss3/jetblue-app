import { ForecastDay } from "../../types/weatherType"
import { ForecastCardComponent } from "./ForecastCardComponent";

interface ForecastComponentProps {
    forecastDays: ForecastDay[];
}
export const ForecastComponent = ({forecastDays}:ForecastComponentProps) => {
    return (
        <>
            <div style = {{display: 'flex', width: '80%', overflow: 'scroll'}}>
                {forecastDays.map((day) => <ForecastCardComponent key = {day.date} forecast={day}/>)}
            </div>
        </>
    )
}
import { Dispatch, SetStateAction, useContext, useRef, useState } from "react"
import { ThemeContext } from "../../App"

interface WeatherSearchComponentProps {
    setDays: Dispatch<SetStateAction<number>>;
    location: string;
    setLocation: Dispatch<SetStateAction<string>>;
    getForecastCB?: () => void;
};

export const WeatherSearchComponent = ({setDays,location,setLocation,getForecastCB}:WeatherSearchComponentProps) => {
    const theme = useContext(ThemeContext);
    const forecastDays = Array.from({ length: 7 }, (_, index) => index + 1)
    const [hover,setHover] = useState(false);
    const locationRef = useRef(location);

    return (
        <>
        <div style = {{display: 'flex' , width: '100%', justifyContent:'center', marginBottom: 20, gap: 10, alignItems: 'center'}}>
        <input 
        value = {location}
        style = {{
            width: '500px', 
            height: '40px', 
            backgroundColor: 'transparent', 
            border: `2px solid ${theme?.theme.surface}`, 
            borderRadius: 10, 
            gap: 5,
            color: theme?.theme.textPrimary,
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '1.2em',
            outline: 'none',
        }} 
        type ="search"
        onChange = {(e) => {
            setLocation(e.target.value)  
        }}
        onKeyDown={(e) => {
            if (e.key === "Enter" && location) {
                locationRef.current = e.currentTarget.value
                getForecastCB?.()
            }
        }}
        ></input>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, height: '100%', border: `2px solid ${theme?.theme.border}`, borderRadius: 10}}>
        <label htmlFor = "amount-of-days">Days</label>
        <select
        id="amount-of-days"
        style = {{
            width: '50px',
            backgroundColor: 'transparent', 
            border: 'none',
            gap: 10,
            color: theme?.theme.textPrimary,
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '1.2em',
            outline: 'none',     
        }}
        onChange = {(e) => {
            setDays(Number(e.target.value))
        }}>{forecastDays.map((day) => {
            return <option
            key = {day} 
            value = {day}
            >{day}</option>
        })}
        </select>
        </div>
        <button 
        onClick = {() => {getForecastCB?.()}}
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={()=>setHover(false)}
        style = {{borderRadius: 10, backgroundColor: 'transparent', color: theme?.theme.textPrimary, border: `none`, fontWeight: 800, cursor: hover ? 'pointer' : ''}}>Search</button>
        </div>
        <h1 style = {{margin: 0,color: theme?.theme.textSecondary, fontWeight: 800}}>Weather for {locationRef.current}</h1>
        </>
    )
}
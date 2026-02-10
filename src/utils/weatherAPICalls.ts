export const getForecast = async (location:string,days:number) => {
    try {
        const resp =  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`)
        const data = (await resp).json()
        return data
    } catch (e) {
        console.log(e)
    }
}
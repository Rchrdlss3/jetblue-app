import { APIUrl } from "./constants";

export const getFlights = async () => {
    try {
        const response = await fetch(`${APIUrl}flights?access_key=${process.env.REACT_APP_API_KEY}`)
        const data = response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}
import { FlightData } from "../types/flightType";

export const storeFlights = (flights: Array<FlightData>) => {
    localStorage.setItem("FLIGHTS",JSON.stringify(flights))
}

export const getStoredFlights = ():Array<FlightData> => {
    let flights:Array<FlightData> = []
    flights = JSON.parse(localStorage.getItem("FLIGHTS")!);
    return flights
}
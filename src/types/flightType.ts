type AirCraft = {
    iata?: string;
    icao?:string;
    icao24?:string;
    registration?:string
};

type Airline = {
    iata?: string;
    icao?: string;
    name?: string;
};

export type Arrival = {
    actual?:string;
    actual_runway?:string;
    airport?:string;
    baggage?:string;
    delay?:string;
    estimated?:string;
    estimated_runway?:string;
    gate?:string;
    iata?:string;
    icao?:string;
    scheduled?:string;
    terminal?:string;
    timezone?:string;
};

export type Departure = {
    actual?: string;
    actual_runway?: string;
    airport?:string;
    delay?: string;
    estimated?: string;
    estimated_runway?: string;
    gate?:string; 
    iata?:string
    icao?:string; 
    scheduled?:string;
    terminal?:string;
    timezone?:string;
};
type CodeShared = {
    airline_name?: string;
    airline_icao?: string;
    airline_iata?: string;
    flight_name?: string;
    flight_icao?: string;
    flight_iata?: string;
};

export type Flight = {
    codeshared?:CodeShared;
    iata?:string;
    icao?:string;
    number?:string;
};

export enum FLIGHT_STATUS {
    SCHEDULED ="scheduled",
    ACTIVE = "active",
    LANDED = "landed",
    CANCELLED = "cancelled",
    INCIDENT = "incident",
    DIVERTED = "diverted"
};

export enum FLIGHT_TABLE_SELECTIONS {
    DEPARTURE = "Departures",
    ARRIVALS = "Arrivals"
};

export type FlightData = {
    aircraft: AirCraft;
    airline: Airline;
    arrival: Arrival;
    departure: Departure;
    flight: Flight;
    flight_date?: string;
    flight_status?: FLIGHT_STATUS;
    live?:string;
}
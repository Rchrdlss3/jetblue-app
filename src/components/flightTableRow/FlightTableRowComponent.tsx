import { useContext, useEffect, useState } from "react"
import { Arrival, Departure, FLIGHT_TABLE_SELECTIONS, FlightData } from "../../types/flightType"
import { TableSelectionContext } from "../flightTable/FlightTableComponent";
import { ThemeContext } from "../../App";

interface FlighTableRowProps {
    flight: FlightData;
};

export const FlightTableRowComponent = ({flight}:FlighTableRowProps) => {
    const [flightType,setFlightType] = useState<Arrival | Departure >();
    const tableSelection = useContext(TableSelectionContext);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        switch(tableSelection?.tableSelection) {
            case FLIGHT_TABLE_SELECTIONS.ARRIVALS:
                setFlightType(flight.arrival)
                break
            case FLIGHT_TABLE_SELECTIONS.DEPARTURE:
                setFlightType(flight.departure)
                break
            default:
                setFlightType(flight.departure)
        }
    },[tableSelection?.tableSelection]);

    return (
        <>
            <tr style  = {{height: 50, border: `1px solid ${theme?.theme.accent}`}}>
                <td>{flightType?.scheduled && new Date(flightType?.scheduled).toUTCString().substring(17,25) }</td>
                {flightType?.estimated && <td>{new Date(flightType?.estimated).toUTCString().substring(17,25)}</td>}
                <td>{flightType?.airport && flightType.airport}</td>
                <td>{flight.flight.number}</td>
                <td>{flight.airline.name}</td>
                <td>{flight.flight_status}</td>
                <td>{flight.departure.gate}</td>
            </tr>
        </>
    )
}
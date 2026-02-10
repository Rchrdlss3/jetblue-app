import { useContext } from "react"
import { TableSelectionContext } from "../flightTable/FlightTableComponent"
import { TableHeaderRowStyle } from "../../styles/tableStyles";
import { ThemeContext } from "../../App";
import { FLIGHT_TABLE_SELECTIONS } from "../../types/flightType";

export const FlightTableHeaderComponent = () => {
    const theme = useContext(ThemeContext);
    const tableSelection = useContext(TableSelectionContext);

    return (
        <thead style = {{...TableHeaderRowStyle(theme?.theme!),width: '100%', textAlign: 'center', backdropFilter: 'blur(10px)', border:'1px soldi red'}}>
        <tr>
                <th style = {{width: '130px'}}>Scheduled Time</th>
                {tableSelection?.tableSelection === FLIGHT_TABLE_SELECTIONS.DEPARTURE &&<th>Estimate Time</th>}
                <th>To</th>
                <th>Flight No.</th>
                <th>Airline</th>
                <th>Status</th>
                <th>Gate</th>
        </tr>
        </thead>
    )
}
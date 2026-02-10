import { useContext, useState, Dispatch, SetStateAction, createContext } from "react";
import { FlightDataContext, ThemeContext } from "../../App";
import FlightTableHeaderComponent from "../flightTableHeader";
import FlightTableRowComponent from "../flightTableRow";
import { TableButtonStyle, TableStyle, TableWrapperStyle } from "../../styles/tableStyles";
import jetBlueImg from '../../assets/jetblueimg.jpg'
import { FLIGHT_TABLE_SELECTIONS } from "../../types/flightType";

type TableSelectionContextType = {
    tableSelection: string;
    setTableSelection: Dispatch<SetStateAction<FLIGHT_TABLE_SELECTIONS>>
};

export const TableSelectionContext = createContext<TableSelectionContextType | null>(null);

export const FlightTableComponent = () => {
    const flightData = useContext(FlightDataContext);
    const theme = useContext(ThemeContext);
    const [tableSelection,setTableSelection] = useState<FLIGHT_TABLE_SELECTIONS>(FLIGHT_TABLE_SELECTIONS.DEPARTURE);

    return (
        <>
        <TableSelectionContext.Provider value = {{tableSelection,setTableSelection}}>
        <div style = {{boxShadow: ` 10px 10px 10px ${theme?.theme.border}50`}}>
        <div style = {{width: '900px', position: 'relative', margin:0, marginBottom: '-3px'}}>
            <img width="100%" height ="200px" style= {{objectFit: 'cover'}} src = {jetBlueImg} alt = ""/>
            <div style ={{position: 'absolute', top: '73.9%'}}>
            <button 
            value = {FLIGHT_TABLE_SELECTIONS.DEPARTURE}
            style = {TableButtonStyle(theme?.theme!,tableSelection === FLIGHT_TABLE_SELECTIONS.DEPARTURE)}
            onClick = {() => {setTableSelection(FLIGHT_TABLE_SELECTIONS.DEPARTURE)}}>Departures</button>
            <button 
            value = {FLIGHT_TABLE_SELECTIONS.ARRIVALS}
            style = {TableButtonStyle(theme?.theme!,tableSelection === FLIGHT_TABLE_SELECTIONS.ARRIVALS)}
            onClick = {() => {setTableSelection(FLIGHT_TABLE_SELECTIONS.ARRIVALS)}}>Arrivals</button>
        </div>
        </div>

            <div style = {TableWrapperStyle(theme?.theme!)}>
            <table style = {TableStyle(theme?.theme!)}>
                <FlightTableHeaderComponent />
                <tbody>
                {flightData?.flightData.map((flight) => {return <FlightTableRowComponent flight={flight} />})}
                </tbody>
            </table>
            </div>
            </div>
        </TableSelectionContext.Provider>
        </>
    )
}
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getFlights } from './utils/aviationAPICalls';
import { FlightData } from './types/flightType';
import { ColorTheme, JetBlueTheme } from './types/themeTypes';
import { AppStyle } from './styles/generalStyles';
import { getStoredFlights, storeFlights } from './utils/flightAPIStorage';
import NavigationComponent from './components/navigationComponent';
import { HashRouter, Routes } from 'react-router';
import { AppRoutes } from './utils/constants';

type FlightDataContextType = {
  flightData: Array<FlightData>
  setFlightData: Dispatch<SetStateAction<FlightData[]>>
};

type ThemeContextType = {
  theme: ColorTheme;
  setTheme: Dispatch<SetStateAction<ColorTheme>>
};

export const FlightDataContext = createContext<FlightDataContextType | null>(null);
export const ThemeContext = createContext<ThemeContextType | null>(null)
function App() {
  const [flightData,setFlightData] = useState<Array<FlightData>>([]);
  const [theme,setTheme] = useState<ColorTheme>(JetBlueTheme.Dark);
 
  useEffect(() => {
    if (localStorage.getItem("FLIGHTS")) {
      setFlightData(getStoredFlights())
    } else {
      getFlights().then(res => {
        setFlightData(res.data)
        storeFlights(res.data)
      })
    }
  },[]);

  return (
    <HashRouter>
    <FlightDataContext.Provider value = {{flightData,setFlightData}}>
      <ThemeContext.Provider value = {{theme,setTheme}}>
        <div style = {AppStyle(theme)}>
          <NavigationComponent />
          <Routes>
            {AppRoutes()}
          </Routes>
        </div>
    </ThemeContext.Provider>
    </FlightDataContext.Provider>
    </HashRouter>
  );
}

export default App;

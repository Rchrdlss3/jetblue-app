import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { JetBlueTheme } from "../../types/themeTypes";
import { getTheme, switchTheme } from "../../utils/theme";

export const  ThemeSwitchComponent = () => {
    const theme = useContext(ThemeContext);
    const [isChecked,setIsChecked] = useState(getTheme() === JetBlueTheme.Dark)

    const buttonText = () => {
        switch(true){
            case getTheme() === JetBlueTheme.Dark:
                return '🌙'
            case getTheme() === JetBlueTheme.Light:
                return '☀️'
            default:
                return 'A'
        }
    }
    return (
        <>
        <button style = {{
            width: '30px',
            height: '30px',
            borderRadius: '100%',
            backgroundColor: theme?.theme.background,
            border: `1px solid ${theme?.theme.textPrimary}30`,
            color: 'transparent',
            textShadow: `0 0 0 ${theme?.theme.textPrimary}`
        }}
        onMouseOver={() => {}}
        onClick = {(e) => {
            setIsChecked(!isChecked)
            theme?.setTheme(switchTheme())
        }}
        >
        {buttonText()}
        </button>
        </>
    )
}
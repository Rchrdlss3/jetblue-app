import { useContext } from "react"
import { ThemeContext } from "../../App"
import { NavLink } from "react-router";
import { navigationLinks } from "../../utils/constants";
import ThemeSwitchComponent from "../themeSwitchComponent";

export const NavigationComponent = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
        <div style = {{
            display: 'flex',
            width: '100%', 
            height: 50, 
            position: 'sticky', 
            top:0, 
            backgroundColor: `${theme?.theme.background}20`, 
            color: theme?.theme.textPrimary,
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
            }}>
            {navigationLinks.map((link) => {
                return <NavLink 
                key = {link.name}
                to = {link.path}
                        style = {({isActive}) => ({
                        margin: 5,
                        color: isActive ? theme?.theme.accent: 'inherit',
                        fontWeight: 800,
                        textDecoration: 'none',
                        transition: '1s'
                    })}
                >{link.name}</NavLink>
            })}
            <ThemeSwitchComponent />
        </div>
        </>
    )
}
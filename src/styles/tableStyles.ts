import { CSSProperties } from "react";
import { ColorTheme } from "../types/themeTypes";

export const TableWrapperStyle = (theme:ColorTheme):CSSProperties => {
    return {
        display: 'flex', 
        maxWidth: '900px', 
        width: '900px',
        overflow: 'scroll',
        maxHeight: "500px", 
        overflowY: 'scroll',
        backgroundColor: theme.surface, margin:0
    }
}

export const TableStyle = (theme:ColorTheme):CSSProperties => {
    return {
        tableLayout: 'fixed', 
        padding: 10,     
    }
}

export const TableHeaderRowStyle = (theme:ColorTheme):CSSProperties => {
    return {
            padding: '10px',
            height: '50px',
            textAlign: 'center',
            position: 'sticky',
            top: 0
        }
}

export const TableButtonStyle = (theme:ColorTheme,active:boolean):CSSProperties => {
    return {
        backgroundColor: active ? theme.accent: theme.surface,
        color: active ? theme.background : theme.textPrimary,
        border: 'none',
        width: '250px',
        height: '50px',
        fontSize: '1.2em',
        fontWeight: 800,
        transition: '1s'
    }
}
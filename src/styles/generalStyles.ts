import { CSSProperties } from "react";
import { ColorTheme } from "../types/themeTypes";

export const AppStyle = (theme:ColorTheme):CSSProperties => {
    return {
        margin: 0,
        padding:0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        backgroundColor: theme.background,
        color: theme.textPrimary
    }
}
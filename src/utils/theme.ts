import { JetBlueTheme } from "../types/themeTypes"

const setTheme = (inputTheme:THEME) => {
    localStorage.setItem("THEME",inputTheme)
}

enum THEME {
    dark = "DARK_THEME",
    light = "LIGHT_THEME"
}

export const getTheme = () => {
    const currentTheme = localStorage.getItem("THEME")
    switch(true) {
        case currentTheme === THEME.light:
            return JetBlueTheme.Light
        case currentTheme === THEME.dark:
            return JetBlueTheme.Dark
        case (window.matchMedia('(prefers-color-scheme: dark)').matches):
        return JetBlueTheme.Dark
        default:
            setTheme(THEME.light)
            return JetBlueTheme.Light
    }
}

export function switchTheme() {
    const currentTheme = localStorage.getItem("THEME")
    switch(true) {
        case currentTheme === THEME.dark:
            setTheme(THEME.light)
            return JetBlueTheme.Light
        case currentTheme === THEME.light:
            setTheme(THEME.dark)
            return JetBlueTheme.Dark
        default:
                setTheme(THEME.light)
                return JetBlueTheme.Light
    }
}
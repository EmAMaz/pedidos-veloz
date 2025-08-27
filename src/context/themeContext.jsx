import { useState, useContext, createContext } from "react";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

export const ThemeProvider = ({ themeValue, children }) => {
    const [theme, setTheme] = useState(themeValue);

    return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
}
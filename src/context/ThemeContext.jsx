import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isMono, setIsMono] = useState(false);

    useEffect(() => {
        if (isMono) {
            document.documentElement.classList.add("mono");
        } else {
            document.documentElement.classList.remove("mono");
        }
    }, [isMono]);

    return (
        <ThemeContext.Provider value={{ isMono, toggle: () => setIsMono(prev => !prev) }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

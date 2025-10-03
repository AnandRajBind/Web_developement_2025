import { createContext, useState } from "react";

export const ThemeContext = createContext();  // step -1 Create Context using CreateContext() hook 

export const ThemeProvider = ({ children }) => { //step-2  Create contextProvider component
    // step 3-  Manage the global state by using context API
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        // step-5 Pass the data for another component.
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {/* step-4 pass  children as a props  in the context Provider */}
            {children}
        </ThemeContext.Provider>
    )
}
 
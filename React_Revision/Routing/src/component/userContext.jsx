import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({ 
    
    children }) => {
    const [user, setUser] = useState("Anand");

    const UpdateNameGlobally = (value) => {
        setUser(value)
    }
    return (
        <UserContext.Provider value={{ user, UpdateNameGlobally }}>
            {children}
        </UserContext.Provider>
    )
}

import { createContext } from "react";

export const GlobalValue = createContext(null)

export const GlobalValueProvider = ({ children }) => {

    const url = `http://localhost:5000`

    const GlobVal = {
        url,
    }

    return (
        <GlobalValue.Provider value={GlobVal}>
            {children}
        </GlobalValue.Provider>
    )
}
import { createContext } from "react";

export const GlobalValue = createContext(null)

export const GlobalValueProvider = ({ children }) => {

    const url = `https://mern-stack-crud-api-two.vercel.app`

    const GlobVal = {
        url,
    }

    return (
        <GlobalValue.Provider value={GlobVal}>
            {children}
        </GlobalValue.Provider>
    )
}

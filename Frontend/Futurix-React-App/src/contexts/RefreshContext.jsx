import { createContext, useState } from "react";

const RefreshContext = createContext(0);

const RefreshContextProvider = ({children}) => {
    const [number, setNumber] = useState(1)
    return(
        <RefreshContext.Provider value={{number, setNumber}}>
            {children}
        </RefreshContext.Provider>
    )
}

export { RefreshContext, RefreshContextProvider }
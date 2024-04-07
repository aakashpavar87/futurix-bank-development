import { createContext, useState } from "react";

const InvestmentContext = createContext()

const InvestmentProvider = ({children}) => {
    const [isInvested, setIsInvested] = useState(false)

    return (
        <InvestmentContext.Provider value={{isInvested, setIsInvested}}>
            {children}
        </InvestmentContext.Provider>
    )
}

export {
    InvestmentContext,
    InvestmentProvider
}
import { createContext, useState } from "react";

export const EmailContext = createContext(null);

export const EmailProvider = ({children})=>{
    const [email, setEmail] = useState("")
    return (
        <EmailContext.Provider value={{email, setEmail}}>
            {children}
        </EmailContext.Provider>
    )
}
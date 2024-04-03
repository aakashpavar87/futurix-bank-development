import { createContext } from "react";

const EmailContext = createContext(null);

export const EmaiProvider = ({children})=>{
    const [email, setEmail] = useState("")
    return (
        <EmailContext.Provider value={{email, setEmail}}>
            {children}
        </EmailContext.Provider>
    )
}
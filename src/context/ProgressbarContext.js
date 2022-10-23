import { createContext, useState } from "react";
export const ProgressbarContext = createContext()

export const ProgressbarContextProvider = ({children}) => {
    const [done, setDone] = useState()
    return(
        <ProgressbarContext.Provider value={{done, setDone}}>
            {children}
        </ProgressbarContext.Provider>
        
    )
}
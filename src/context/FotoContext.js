import { createContext, useState } from "react";
export const FotoContext = createContext()

export const FotoContextProvider = ({children}) => {
    const [foto, setFoto] = useState()
    return(
        <FotoContext.Provider value={{foto, setFoto}}>
            {children}
        </FotoContext.Provider>
        
    )
}
import { createContext, useState } from "react";


//create context 
export const GlobalContext = createContext(null)


// create the global state that recieve component as a children 
function GlobalState({children}){
    const [theme,setTheme] = useState("light") 
    
    function handleBackgroundToggle(){
        setTheme(theme ==="light" ? "dark" : "light")
    }

    return <GlobalContext.Provider value={{theme,setTheme,handleBackgroundToggle}}>{children}</GlobalContext.Provider>
}

export default GlobalState
import { useContext } from "react"
import { GlobalContext } from '../../context/index'

function ContextTextComponent(){

    const {theme} = useContext(GlobalContext)
    console.log(theme)
    return <h1 style={{fontSize:theme === "light" ? "50px":"100px",backgroundColor:theme==="light" ? "white" : "black" , color: theme === "light" ?"black" :"white" }}>Static Routes</h1>
}

export default ContextTextComponent
import { useContext } from "react"
import { GlobalContext } from "../../context"


function ToggleFromFunction(){

    const {handleBackgroundToggle} = useContext(GlobalContext)
    return (
        <button onClick={handleBackgroundToggle} className="border mx-2 my-3 px-2 py-1">Toggle</button>
    )


}

export default ToggleFromFunction
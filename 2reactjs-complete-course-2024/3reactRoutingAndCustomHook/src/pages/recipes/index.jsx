import { useLocation } from "react-router-dom"


function ReceipeList(){

    const location = useLocation()  //this hook is use to get the current pathname / search 
    console.log(location)
    return(
        <div>
            <h1>Reciepe List page</h1>
        </div>
    )
}

export default ReceipeList
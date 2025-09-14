import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch"


function ReceipeList(){

    const location = useLocation()  //this hook is use to get the current pathname / search 
    // console.log(location)

    const {data,loading,error} = useFetch('https://dummyjson.com/recipes')

    if(loading)
        return <h1>Fetching recipes! Please wait</h1>


    return(
        <div>
            <h1>Reciepe List page</h1>
            <ul>
                {
                    data?.recipes?.length > 0 ? data?.recipes.map(recipeItem=><div>
                        <img src={recipeItem.image} alt="" />
                        <label>{recipeItem.name}</label>
                    </div>) : null
                }
            </ul>
        </div>
    )
}

export default ReceipeList
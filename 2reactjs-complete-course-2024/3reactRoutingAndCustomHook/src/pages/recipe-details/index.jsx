import { useParams } from "react-router-dom";

function RecipeDetailsPage() {

    const params = useParams()  //this hook is use to get the dynamic value from the URL
    console.log(params) 
    const {id} = params
   return (
    <div>
      <h1>Reciepe Details of recipe item {id}</h1>
    </div>
  );
}

export default RecipeDetailsPage;

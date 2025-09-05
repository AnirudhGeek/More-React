//Ternary operator
let showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipetwoName(recipeName) {
  return recipeName;
}

if(showRecipeOne){
    console.log(getRecipeOneName("Pizza"))
}else{
    console.log(getRecipetwoName("Coke"))
}

// conditino ? statement1 : statement2

showRecipeOne ? console.log(getRecipeOneName("Pizza")): console.log(getRecipeOneName('Coke'))


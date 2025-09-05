const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

const product2 = {
    description : "Product 2 description",
    id,
    productName,
    rating 
}

const getProductTwoDescription = product2.description
console.log(getProductTwoDescription)

//OR
//destructing the object 
const {description} = product2
console.log(description)


//In Array
const array = [1,2,3]
let getArrayFirstValue = array[0]
let getArraySecondValue = array[1]

console.log(getArrayFirstValue, getArraySecondValue)

//destructing the array 
const [arrayFirstElement,arraySecondElement,arrayThirdElement,arrayFourthElement]= array
console.log(arrayFirstElement,arraySecondElement,arrayThirdElement,arrayFourthElement) // here the fourth element will return undefined




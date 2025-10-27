//default parameters, spread and rest operators
function mulOfTwoNums(num1, num2) {
  return num1 * num2;
}

console.log(mulOfTwoNums(2,3))

//default value is when, you don't pass the value while calling the function and you have given it a default value

function mulOFNum(num1 =5,num2=3){
    return num1 * num2
}

console.log(mulOFNum(6)) // will take 3 as a default value of num2



//spread
const array2 = [2,3,4]
const array3 = [10,11,12]

console.log(...array2)
console.log([...array2])  // spread in the form of array 

//merging these 2 arrays by spread operator 
console.log([...array2,...array3])
console.log([999,...array2,...array3,1000])



//rest parameters
function getInfo(a,b,...c){    //here we are only asking for the value of 'a' and 'b' and all the other values will come as an array into the spread operator 'c' 

//catch is you can only add this spread operator in the end not in the begining 
    console.log(a,b,c)
    return 'Anirudh Raturi'
}

console.log(getInfo(1,2,3,4,5))


//es6 revision
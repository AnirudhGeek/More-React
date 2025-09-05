//map ,index , find, some , every,includes ,indexOf, findIndex

const personsArray = [
  {
    name: "Person 1",
    age: 30,
    country: "USA",
  },
  {
    name: "Person 2",
    age: 40,
    country: "Russia",
  },
  {
    name: "Person 3",
    age: 50,
    country: "India",
  },
  {
    name: "Person 4",
    age: 60,
    country: "USA",
  },
];

let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return `${singlePerson.name} age is ${singlePerson.age} is from ${singlePerson.country}.`;
});

console.log(getAllNames);

//find=> it will check any condition which is satisfying
//NOTE :- it will only return the first element
let getPersonFromUSA = personsArray.find((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getPersonFromUSA);


//fiter=>return all the objects that satisfies the condition (more than 1 objects are allowed)
// NOTE => filter is opposite the nature of find 
let getAllPersonFromUSA = personsArray.filter((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getAllPersonFromUSA)



//some => will return a boolean flag based on if any condition satisfies
//every => will return true when all the conditions satisfies 

let checkSomeArrayMethodWithExample = personsArray.some((singlePerson)=>{
    return singlePerson.age > 55
})

console.log(checkSomeArrayMethodWithExample)

//every
let checkEveryArrayMethodWithExample = personsArray.every((singlePerson)=>{
    return singlePerson.age<55
})
console.log(checkEveryArrayMethodWithExample)


//includes 
const fruitsArray = ['apple','banana','grapes']
console.log(fruitsArray.includes('apple'))


//indexOf => return the current address of the element and if the element is not present then it will return -1
console.log(fruitsArray.indexOf('banana'))
console.log(fruitsArray.indexOf('pear'))


//findIndexOf
let getIndexOfPersonWhoIsFromRussia = personsArray.findIndex(singlePerson=>{
    return singlePerson.country==='India'
})

console.log(getIndexOfPersonWhoIsFromRussia)
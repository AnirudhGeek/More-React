//Logical AND(&&) or Logical OR(||)

function getName(name) {
  return name;
}

let a = false;
let b = true;

console.log(a && getName("Anirudh")); //  if 'a' is false then it will not check then check the other it will just simply return false

console.log(a || (b && getName("StaticRoutes"))); // if any of the 'a' or 'b' is true it will gets true

console.log(a || getName("Anni")); // here 'a' is false then also it will return because 2nd parameter is true

// ## primitive  => call by value

// $$ 7 types :: string, Number, Boolean, null, undefined, symbol, BigIint=> scientfic value


//const score = 39
const scoreValue = 100.8  //number

//const isLoggedIn = false
const outsideTemp = null //object
//let userEmail;

//const id = Symbol('123')
//const anotherId = symbol('123')

//console.log(id === anotherId);  // false

//const bigNumber = 234567899098776575n  //bigint

// ## Non primitive =>call by reference

// Array, Objects, Function

//const heros = ["shaktiman", "naagraj", "doga"]  //Array

//let myobj = {
  //  name:"Aaryan rajput",
  //  age:19,
//}

//const myFunction = function(){
  //  console.log("Hello world");

//}

//console.log(typeof scoreValue);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack(memory)=>primitive, heap(memory)=> non-primitive  => call by reference(orignalvalue)

//let myYoutubename = "aaryanrajput@.com"

//let anothername = "myYoutubename"
//anothername = "chaiaurcode"

//console.log(myYoutubename);
//console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne
userTwo.email = "aaryan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

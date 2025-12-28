// array



const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// arrays methods 

//myArr.push(6)
//myArr.push(7)
//myArr.pop(7)  // remove last elements of array

//myArr.unshift(9)  // add elements first of the infex
//myArr.shift()     // remove elements add of the first index

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);  // convert a string


// slice,splice

console.log("A ",myArr); // [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1);   // [1, 2]
console.log("B ",myArr);  // [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)
console.log("c ",myArr);  // [0, 4, 5]
console.log(myn2);    // [1, 2, 3]


















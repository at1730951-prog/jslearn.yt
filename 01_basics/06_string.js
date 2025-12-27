const name = "aryan"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log('Hello my name is ${name} and my repo count is ${repocount}');

const gamename = new String('aaryan-hc-com')

console.log(gamename[0]); //  a
console.log(gamename.__proto__);   // {}

console.log(gamename.length);  // 6
console.log(gamename.toUpperCase());  //AARYAN
console.log(gamename.charAt(2));  //r
console.log(gamename.indexOf('y')); //3

const newString = gamename.substring(0, 4)
console.log(newString);  // aary

const anotherString = gamename.slice(-5, 4)
console.log(anotherString);  //ary

const newStringOne ="    Aaryan    "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim => remove start and ending space

const url = "https:aaryan.com/aaryan%20rajput"
console.log(url.replace('%20', '-'))   /// https:aaryan.com/aaryan-rajput
console.log(url.includes('aaryan'))   // true
console.log(url.includes('rajptani')) // false

console.log(gamename.split('-'));  //[ 'aaryan', 'hc', 'com' ]
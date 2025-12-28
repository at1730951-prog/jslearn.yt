//date

let mayDate = new Date()
//console.log(mayDate.toString());
//console.log(mayDate.toDateString());
//console.log(mayDate.toLocaleString());
//console.log(typeof mayDate);  // object

// let mycreateDate = new Date(2023, 0, 23)
//let mycreateDate = new Date(2023, 0, 23)
//console.log(mycreateDate.toDateString());
let mycreateDate = new Date("01-14-25")
//console.log(mycreateDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(mycreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

//'$'{newDate.getDay()} and the time

newDate.toLocaleString('default',{
    weekday:"long",
})
// Date object
// consider 1 january 1970.
// Time calculated in milisecond.
let myDate=new Date(); // instance of date
console.log(myDate); 
console.log(myDate.toString());//output:-Fri Jan 31 2025 15:50:51 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());//output:-2025-01-31T10:20:51.839Z
console.log(myDate.toDateString());//output:-Fri Jan 31 2025
console.log(myDate.toLocaleString());//output:- 1/31/2025, 3:50:51 PM

console.log(typeof myDate);// output:- object 

// note:- in the js month is start from the zero.
let myCreatedDate= new Date(2025, 0, 31);         // syntax: year month date                   output:- 1/31/2025, 12:00:00 AM
// let myCreatedDate= new Date(2025, 0, 31, 4,21); // syntax: year month date hours minutes      output:-1/31/2025, 4:21:00 AM
// let myCreatedDate= new Date("2025-01-31");     // custom formate:-  year month date           output:-1/31/2025, 5:30:00 AM
// let myCreatedDate= new Date("01-31-2025");       // custom formate:-   month date year           output:-1/31/2025, 12:00:00 AM
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp= Date.now();
console.log(myTimeStamp);// current time in milisecond
console.log(myCreatedDate.getTime());//current time in milisecond
console.log(Math.floor(Date.now()/1000));// convert milisecond in second 



let newDate= new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);

console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`)


console.log(newDate .toLocaleString('default', {weekday:"long"}));
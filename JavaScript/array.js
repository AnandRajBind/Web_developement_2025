
// in the javaScript array is a object.resizeable, multiple data types ke data store ker sakte hai.
const myArr=[0,11,21,15,13,15, "anand", true];
const myHeros=["amish Puri ", "Ammitabh Bacchan"]

console.log(typeof myArr);// object

console.log(myArr[1]);

const myArr2=new Array(10,20,30,50,20)
console.log(myArr2[1]);


// Array methods

myArr.push(6);// insert the value last position of the array.
myArr.push(7);

console.log(myArr);

myArr.pop();//remove value from the last index.
console.log(myArr);

console.log(myArr.unshift(7));// insert the value first position of the array.and return the 
// console.log(myArr.shift());//remove value from the first index.

console.log(myArr);

console.log(myArr.includes(21));//check the element present or not in the given array. true/false
console.log(myArr.indexOf(21));//check the  particular element kis index per present hai. if element present in the array return the element index otherwise -1 .

console.log(myArr);


const newArr=myArr.join(); // join() method is used to bind the two array and  convert array data type to string data type.

console.log(myArr);
console.log(newArr);


// slice and splice 

console.log("A ", myArr);// original array 
let myNewArr1=myArr.slice(1,3);// slice method is used to create a new array by using the existing array based on the array index.in the slice last index include nhi hota hai.index value pass as a parameer.

console.log(myNewArr1);
console.log("B", myArr);// slice used 


let myNewArr2=myArr.splice(1,3); // the main difference slice and splice, splice is manupulate/change original array.while in the slice not possible.and include the  last index.
console.log(myNewArr2);
console.log("C", myArr);//splice used

 
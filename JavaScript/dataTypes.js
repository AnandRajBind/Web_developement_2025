// dataTypes 
//primitives 
// 7 types: String , Number, Boolean, null,undefined, Symbol, BigInt.

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id === anotherId);
// const bigNumber=94842424485785454n;

// Reference (non primitives)
// Array,objects, Functions
// Note:- all non primitives data types ka data type function hoga.aur function ka return type function object hoga.


const heros=["varun Dhawan" , "Tiger","Akshya Kumar"]; 

let myObj={
    name:"Anand",
    age: 22,
}

const myfunction=function(){
    console.log("My first function in Java");
}
// console.log(bigNumber);
console.log(typeof score);// data types:- number 
console.log(typeof scoreValue);// data types:- number 
console.log(typeof isLoggedIn);// data types:- boolean
console.log(typeof outsideTemp);// data types:- object (null ka data types object hota hai)
console.log(typeof userEmail);// data types:- undefined (undefined ka data types undefined hota hai)
console.log(typeof id);//  data types:- symbol (symbol ka data types symbol hota hai)
 console.log(typeof BigInt);// data types:- function (BigInt ka data types object hota hai)
console.log(typeof heros);// data types:- object (array ka data types object hota hai)
console.log(typeof myObj);//  data types:- object (object ka data types object hota hai)
 console.log(typeof myfunction);//  data types:- function (function ka data types function hota hai)
 

//  ************************************Memory**************************************
// Stack Memeory:- primitive data type store in the stack memory.accesd to copy data.Is known as call by value.orginal value not change. 
// Heap Memory:- Non- primitive data type store in the Heap memory.accesed to original data.Is known as call by reference.original value canged.
let myYoutubeName="Anand Raj Bind";

let anotherName=myYoutubeName;
anotherName="Anurag";

console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email:"anandrajabind@gmail.com",
    upi:"user@ybl"
}
let userTwo= userOne;

userTwo.email="anurag@gmail.com";
console.log(userOne);
console.log(userTwo);




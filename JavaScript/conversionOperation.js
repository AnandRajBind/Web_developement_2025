// let score ="33";
let score ="33adjk"; // iska type number hai. but value NaN hogi.  


console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);

console.log(typeof(valueInNumber));//output:-  number
console.log(valueInNumber);// output:- NaN "Not a Number"

// let scoreValue =null;
// let scoreValue =undefined;
let scoreValue =true;


let scorevalueInString=String(scoreValue);
console.log(scorevalueInString);//output:- null variable ka output null. and undefined ka undefined hi hoga.

let scorevalueInNumber=Number(scoreValue);
console.log(scorevalueInNumber);//output:- null variable ka value 0 hogi. while undefined ki value NaN hogi.and boolean value "true" ka 1 hoga.and string ko number me convertkarne per NaN output hoga.



// in sabhi variable ko Boolean me convert karne per.
// let isLoggedIn=10007988279798789;//output:- true
let isLoggedIn=0;//false
// let isLoggedIn="";//false
// let isLoggedIn="Anand";//output:true


console.log(isLoggedIn);

let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


let someNumber=255;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);// output:- string



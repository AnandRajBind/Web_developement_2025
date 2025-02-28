// operator Comparision 
// note:- always prefer to same data type is compare.because difference data type compare karte hai to some time predict output nhi milta hai.
console.log("2">1);
console.log("02">1);
// never prefer this type of comparision 
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

// never prefer this type of comparision. sabhi ka false output
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0); 


//strictly check. compare with check same data types or not 

console.log("2" === 2); // false 
console.log(2 === 2); // true





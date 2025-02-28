let score= 4000;// bydefault number. data type number hai.
let  balance =new Number(5000) ;// creating number by using the new keyword.data type object hai.
console.log(score);
console.log(balance);
console.log(typeof score);// number  data type
console.log(typeof balance);// object data type 

console.log(balance.toString().length);// toString method is used to convert number to string.

console.log(balance.toFixed(2));// toFixed method is used to print the precies value(point ke bad kitne zero hoga) length.Ex- 100.00

const otherNumber=123.8966;
console.log(otherNumber.toPrecision(3));//toPrecision method is used to formats a number to a specified length.Ex- 123.8966 ko 124 me round off ker diya gaya hai.

const hundreds = 1000000;
console.log(hundreds.toLocaleString());// output:- 1,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000



// ********************************Maths***************************************
console.log(Math);// Library  or object 
console.log(Math.abs(-5));//abs() method negative value ko positive me convert ker deta hai.output:- 5
console.log(Math.round(4.4));//round() method value ko round of ker deta hai output:- 4
console.log(Math.ceil(4.1));// always consider upper value.output:- 5
console.log(Math.floor(4.9));//always consider lower value.output:- 4

console.log(Math.min(10,5,2,6,5,10,2,0))// find the minimum value from the given array. output:- 0
console.log(Math.max(10,5,2,6,5,10,2,0))//find the maximum value from the given array.output:- 10


console.log(Math.random());// random() method is generate the random number between 0 to 1. // output:- (0.21222 zero point some digit)
console.log(Math.random()*10+1);// yaha 1 isliye add kiya gaya hai tki 0 value n aye.
console.log(Math.floor(Math.random()*10)+1);//output:-yaha  floor() method ka use  only single digit print karne ke liye kiya gaya hai.

let min=10;
let max=20;
console.log(Math.floor((Math.random()*(max-min)+1)+min));// it is print minimum 10 and maximum 20.

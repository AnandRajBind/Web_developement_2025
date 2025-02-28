let value=10;
let negValue= -value;

console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2%3);
*/
let str1="Anand";
let str2=" Raj";
let str3=str1 + str2;

console.log(str3);
console.log(str1+str2);

console.log(1 + 2);//3
console.log("1" + 2);//12
console.log(1 + "2");//12

console.log("1" +2+ 2);// 122
console.log(1 + 2 + "2");//32

console.log((3+4)*5%3);//2
console.log(3+4*5%3);//5


console.log((3+4)*5/3);//11.67
console.log(3+4*5/3);//9.67

// yaha per + operator se conversion ho raha hai.
console.log(+true);//1 
console.log(true);//true
console.log(+""); //0

let gameCounter=100;
gameCounter++;
console.log(gameCounter);

//post increment
let a=3;
let b= a++;
console.log(a , b );// output:- 4  3

//pre increment
let x= 5;
let y=++x;
console.log(x , y);// output:- 6  6
/*
function sayMyName(){ // function definition
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

sayMyName //function reference 
sayMyName(); // function execution or call
*/

/* ************************************************************************************************************** */

/*
function addTwoNumbers(number1 , number2){   // function with parameter without return statement
console.log(number1+number2);
}

// addTwoNumbers(5,"5");
 const result= addTwoNumbers(5,4);  // function call with argument
 console.log(result);               // output undefined
 */

/* ************************************************************************************************************** */
/*
function addTwoNumbers(number1, number2) {
  // function with return statement
  // let result = number1+number2;
  // return result;

  return number1 + number2;
}
const result = addTwoNumbers(10, 20);

console.log("Result: ", result);
*/

/* ************************************************************************************************************** */

/*
function loginUserMessage(username = "demo") {// here demo is default value hai. yadi parameter me kuch nhi pass hoga to demo execute hoga jo parameter pass karenge vo override ker dega default value ko. default value if statement ka alternative method hai.ya to if statement lagaye ya default value set ker de.
  if (!username ) {                       //line  number 42 and 43 are same 
//   if (username === undefined) {
    console.log("Please enter the username");
    return
  }
  return `${username} logged in Successfully`;
}

*/
//console.log(loginUserMessage("Anand")); //output:-  Anand logged in Successfully
//console.log(loginUserMessage("Anand"));   //output:-     undefined  



/* ************************************************************************************************************** */

/*
function calculateCartPrice( val1, val2, ...num1){// rest operator  inside the function parameter. rest operator use ham karte hai jab hame pata nhi hota hai ki kitne number of argument pass hona hai.
    return  num1;
}
console.log(calculateCartPrice(200,400,600,200));//output:-  [ 600, 200 ] yaha num1 ke ander ki value ko hi return kiya gaya hai. val1 and val2 ko nhi.

*/
/* ************************************************************************************************************** */
// object pass as a parameter
/*
const user ={
    username:"Anand",
    price:1999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}
/*
//handleObject(user);// pahale se bane object ko pass kiya gaya. 


handleObject({// directly object banaker pass ker diya gaya hai. 
    username:"Anurag Bind",
    price:200
})
 
 /* ************************************************************************************************************** */


//  array pass as a parameter
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray;
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 30]));



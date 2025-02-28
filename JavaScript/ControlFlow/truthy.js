const userEmail= [];

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Dont Have User Email");
}

// false values( false value  ake aise value hoti hai jise assume ker liya jata hai ki ye false hi hogi).

if(false == 0){
    console.log("True Statement ");
    
}
else{
    console.log("false Statement ");

}

/* 
false
null
undefined
NaN
0
-0
""
BingInt 0n
*/ 

// truthy values( truthy value ake aisi value hoti hai jise assume ker liya jata hai ki true hi hogi)
/*
[]
"0"
" "
'false'
{}
function(){}
*/
 
if(userEmail.length ===0){// check array empty or not 
    console.log("Array is empty");
}

const emptyObj= {};

if(Object.keys(emptyObj).length === 0){// check object empty or not
console.log("Object is empty");
}


/* ************************************Nullish coalescing Operator (??) working on only: null, Undefined */
//jab databse ko call karte hai.to usme error check karne ke liye ishe use karte hai.
let val1 ;
// val1 = 5 ?? 10;  // output:- 5
// val1 =  null ?? 10; //  output:- 10
// val1 = undefined ?? 20; // output:- 10
 val1 = undefined ?? 10 ?? 20;   // output:- 10

console.log(val1);

/* ************************************Ternary Operator **************************************************** */
// condition ? true : false

const iceTeaPrice=100;

iceTeaPrice <= 80?console.log("iceTeaPrice is less than 80") :console.log(" iceTeaPrice is Greater than 80") ;

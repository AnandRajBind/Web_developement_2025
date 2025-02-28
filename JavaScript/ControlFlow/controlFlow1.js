/*
const isUserloggedin=true;
const temperature=52;

if(temperature<50){
    console.log("Temperature less 50");
}
else{
    console.log("Temperature is greater than 50");
}

 if(3 != 2 ){
 console.log("true");
}
 if(2 === "2" ){
 console.log("It is strict equal operator: Because it is Check the same data type");
}

*/
/* *************************************************************************************************************** */ 
/*
< , >,  >=,  <=, !=, !==, !== 
2== "2"   => true 
2 === "2" => false
*/


/* *************************************************************************************************************** */ 

/*
const score =200;
if(score>100){
    let power="fly";
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

*/


/* *********************************************************************************************** */ 
/*
const balance =1000;

// if(balance>500)  console.log("test"), console.log("test2");

 if(balance < 500){
    console.log("Less than 500");
 }
else if(balance < 750){
    console.log("Less than 750");
}else if(balance<900){
    console.log("Less than 900");
}else{
    console.log("less than 1200");
}

*/

// ***************************************************************************************************************

const userLoggedIn= true
const debitcard =true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitcard && 2==3){
    console.log("Allow to buy course");
}
else{
    console.log("User Not Login");
}



if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}


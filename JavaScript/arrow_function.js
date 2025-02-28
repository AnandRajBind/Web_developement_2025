/* ********************************************************** this keyword ************************************************************* */

/*
const user={
    username:"Anand",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);// this keyword current context ko refer karta hai.ya current object ko refer karta hai.
        console.log(this); // current context ko print ker raha hai.
    }
}
*/

/*user.welcomeMessage();       // output:- Anand, welcome to website
user.username = "yuvraj";   // output:-context ki value change ker di gai.
user.welcomeMessage(); */     // output:- yuvraj, welcome to website


//console.log(this);//output:- {}  standalone node ke ander global object ake {} empty object hai.while browser ke ander jo global object hota hai vo window object hai.  

/* ********************************************************** arrow function ************************************************************* */

// node ke ander -> function ke ander this ko print karne per. kai value milti hai like global value, microtask, ideal time , fetch etc.
/*function chai(){  // function decleration method 1
    let username="hitesh"
    console.log(this.username);//output:- undefined. this keyword only object me hi work kerta hai function me nhi.
    console.log(this);
}
chai();
*/


/*
const chai=function (){  // function decleration method 2 (variable me function store)
    let username="hitesh"
    console.log(this);//output:- undefined. this keyword only object me hi work kerta hai function me nhi.
}
chai();
 */
const chai=  () => {  // function decleration method 3 (arrow function). arrow function me function keyword use nhi hota.
    let username="hitesh"
    console.log(this.username);//output:- undefined. this keyword only object me hi work kerta hai function me nhi.
    console.log(this);// output:- {} empty object
}
chai();

/* *****************************************************detail description on  arrow function ************************************************ */

()=>{}// basic syntax of arrow function 


 /*
// note:- explicit return. in the explicit return mannualy return keyword lagana padta hai.

const addTwo=(num1, num2)=>{   // arrow function store in variables. 
    return num1+num2;
}
console.log(addTwo(10,20));
*/

// implicet return. return keyword nhi use hota hai.

 
addTwo=(num1, num2)=> num1+num2;// implicit value return without ().
 
addTwo=(num1, num2)=> (num1+num2);// implicit value return using (). () ka use karne se object ko bhi return ker sakte hai. jo ki without () not possible.
addTwo=(num1, num2)=> ({username: "Anand"});// implicit object return. 
console.log(addTwo(10,5));


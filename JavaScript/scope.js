// var c=300; // global scope/variable
/*
let a = 300;
if (true) {
  let a = 10; // local/block  scope/variable
  const b = 20;
  var c = 30;
  // c=30;
  console.log("inner", a);
}

//console.log(a);
// console.log(b);
// console.log(c);

*/
// ***************************************************************************************************************

// nested scope
/*
function one() {
  const username = "hitesh";
  function two() {
    // nested function
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);//Error: website is not defined
  two();
}
one();

*/
// ***************************************************************************************************************

/*
if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website);
  }
//   console.log(website); // output:- Error website is not defined
  
}
// console.log(username); // output:- Error username is not defined
*/

// ******************************************interesting*******************************************************

console.log(addOne(5));// FUNCTION DECLERATION SE PAHALE FUNCTION CALL HO RAHA HAI. FUNCTION KA ye syntax allow kerta hai function ko declare karne se pahale function ko call ker sakte hai.
function addOne(num)
{
  return  num + 1;
}

//while  FUNCTION KA ish syntax me aisa nhi hita  hai. function ko declare karne se pahale function ko call nhi  ker sakte hai.

// addtwo(10); //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){// function store ho raha hai ake variable me.
    return num + 2;
}


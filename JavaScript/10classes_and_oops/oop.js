// object literals
//object is collection of properties and method

/*
const user = {
  username: "anand", // properties
  loginCount: "10",
  signedIn: true,
  getUserDetails: function () {
    // method inside object
    //console.log("Got user details from database");
    console.log(`Username: ${this.username}`); // output:- Username: anand
    console.log(this);
 
//   output:- {
//   username: 'anand',
//   loginCount: '10',
//   signedIn: true,
//   getUserDetails: [Function: getUserDetails]
// }

  }
};
*/

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// new keyword is a constructor function.jo ki allwo karta hai ake hi object se mutiple object literals create ker sake. ake new context create karne me help karta hai.
// jaha bhi ham new keyword ka use karte hai waha ake empty object create hota hai jise instance bola jata hai.
// constructor function call hota hai new keyword ka karan.
// 
/******************************************************************************************************* */
function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
//   return this;  // return this bydefault implicitly  define hota hai. 
}
const userOne =new user("anand", 122, true);
const userTwo =new user("Raj ", 222001, false);
//const userTwo = user("Raj ", 222001, false);// userOne ki value Override ho jayegi yadi ham new keyword ka use nhi karte hai to. new keyword ake new instance/context ko create karke deta hai.
console.log(userOne);
console.log(userTwo);

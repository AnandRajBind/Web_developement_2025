// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.by using the Promise we can achived async code/programming in js.

/*A Promise is in one of these states:
pending:-  initial state, neither fulfilled nor rejected.
fulfilled:-   meaning that the operation was completed successfully.
rejected:-  meaning that the operation failed.*/

// create our custom Promise.

/*

const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // Database connection, network , cryptography
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()// resolve() is a method which is directly connected .then() method.
    },1000)
});
// consumed the promise
promiseOne.then(function(){
    console.log('Promise consumed');
})

*/
/*****************************create and consumed the promise in one part************************************************************ */

/*

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve()
    },1000)
}).then(function(){
console.log('Async 2 resolved');
})

*/

/*****************************parameter pass in the resolve and the method()************************************************************ */

/*
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username: 'Anand',email:'anandrajbind@gmail.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
*/

/***************************resolve() , reject(),finally()  and catch() method in promise*********************************** */

/*
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      // isme error bydefault true consider kar raha hai. ! ka meaning hai ki true ko false, false ko true ker disiye.
      resolve({ username: "Anand", password: "123456" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
// multiple then() method can be used. its processs known as chaining.
promiseFour
  .then((user) => {
    console.log(user); //output:- { username: 'Anand', password: '123456' }
    return user.username;
  })
  .then(function (myUserName) {
    console.log(myUserName); //output:- Anand
  })
  .catch(function (error) {
    console.log(error); // output:- Error: Something went wrong
  })
  .finally(() => {
    console.log("promise can be resolved or not");
  });

  */
// *********************handle promise by using the Async await ****************************************************

/*
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "143" });
    } else {
      reject("Error: Js went wrong ");
    }
  }, 1000);
});
//await directly not handle the error
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (e) {
    console.log(e); // error handle gracefully
  }
}
consumePromiseFive();

*/

// ******************************fetch access the api *************************************

/*
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const data =await response.json();
    console.log(  data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers();
*/
fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch((error)=>console.log(error));


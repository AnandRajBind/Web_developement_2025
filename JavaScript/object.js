// singleton
// in the javaScript two types created object by using the constructor and literals. if we can use literals then can not create singleton.if constructor use then always create singleton.
// object constructor (singleton create hoga)
// ex:- Object.create

// object literals (singleton create nhi  hoga)


const mySym=Symbol("key1");// symbol

const JsUser={
    name:"Anand",
    "full name":"Anand raj Bind",
    age:22,
    location:"Jaunpur Uttar pradesh",
    email:"anand@gmail.com",
    isLoggedIn: false,
    lastLoggedinDay:["sunday", "monday"],
        // mySym:"myKey1",    // typeof string 
        [mySym]:"myKey1"   // typeof symbol
}
// string access method 1
console.log(JsUser.email);// key ko bydefault treat karta hai as a string 
// string access method 2

console.log(JsUser["email"]);//customize karke string dena padta hai.
console.log(JsUser["full name"]);
console.log( typeof JsUser[mySym] );// output:- string
console.log(JsUser[mySym]);// output:- mykey1


JsUser.email="anurag@gmail.com";// update object value 

//Object.freeze(JsUser);// lock object.

JsUser.email="Yuvraj@gmail.com";//object value  update kiya gaya but huwa nhi because object ko lock ker diya gaya hai.
console.log(JsUser);
/* output:- {
    name: 'Anand',
    'full name': 'Anand raj Bind',
    age: 22,
    location: 'Jaunpur Uttar pradesh',
    email: 'anurag@gmail.com',
    isLoggedIn: false,
    lastLoggedinDay: [ 'sunday', 'monday' ],
    [Symbol(key1)]: 'myKey1'
  }*/


    JsUser.greeting=function(){
        console.log("Hello Js User");
    }
    JsUser.greetingTwo=function(){
        console.log(`Hello Js User, ${this["full name"]}`);// same/current object ko reference karne ke liye this ka use liya gaya hai.
    }
    
    console.log(JsUser.greeting);// output:- [Function (anonymous)], here function excute nhi huwa hai kwl function ka reference aya hai.
    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());
    
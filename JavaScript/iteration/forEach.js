// HOF( Higher order function) also konwn as "first class function". A function that returns a function or takes other functions argument is called a Higher Order Function.

// Higher Order Function
function sayHello(){
    return ()=>{ // Anonymous function or arrow function
        console.log("Hello Dosto");
    }
}
console.log(sayHello());

/* **************************for Each Loop using HOF***************************************** */

// syntax:- forEach(CallbackFunction);

let array=[1,2,3,4,5,6,4]

array.forEach(function(element,index,arr) {
    console.log(`Element is:${element} Index is: ${index}, array is ${arr}`);

});

// foreach loop usig arrow function 
array.forEach((element)=>{
    console.log(element);
})

// ***************************function pass as a argument *************************************************
coding=['Js', 'java', 'Python', 'C', 'CPP']
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);
/*output:- 
Js
java
Python
C
CPP
*/
//****************************** access the array object ki keys/value**********************************************
const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js",
    },
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"Python",
        languageFileName:"py",
    }
]
/*
myCoding.forEach((item)=>
{
console.log(item);
})
*/


myCoding.forEach((item)=>
{
console.log(item.languageName);
})

/*
output:-
javaScript
java
Python

*/


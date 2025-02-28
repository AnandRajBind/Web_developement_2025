// note:- for in loop ka use object and array dono per ho sakta hai.while for of loop ka use only array per hota hai.

// *************************************for in loop work on the object *********************************************
const myObj={
    js:'javaScript',
    cpp:'C++',
    rb:'ruby',
swift:'swift by apple'
}
/*
for(let key in myObj){
    console.log(key);
}
*/

/* Output:- only key print hoga 
js
cpp
rb
swift
*/
 // ******************************object ka key and value print ho rah hai****************************************
for(let key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]} `);
}

/*
output:- 

js shortcut is for javaScript 
cpp shortcut is for C++ 
rb shortcut is for ruby 
swift shortcut is for swift by apple 
 */

 // ************************print only (bydefault) key using for in loop *********************************************
//ish tarah print karne per "for in loop" key ko print karta hai. while "for of loop" direct value ko print kar leta hai.
const programming=['c', 'js', 'cpp','java']
for(let key in programming){ 
    console.log(key);
}
// array me keys only number(like:- 0,1,2,3,4) hi ho sakta hai. while object me keys kuch bhi ho sakta haia(like:- number, string)
/*output:-  0
            1
            2
            3
            */
 // ************************print key and value using for in loop *********************************************

 for(let key in programming){
    console.log(programming[key]);
}
/*
output:-
c
js
cpp
java
*/
// *************************************for in  loop on the map************************************************
/*
// not itteratable. iska output kuch nhi ayega.


const map = new Map();
map.set("In", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

for( let key in map){
    console.log(key);
}
*/


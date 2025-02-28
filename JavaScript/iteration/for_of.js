// *********************************************for of loop work on the array *******************************************************

// ["","", "" ]
// [{}, {},{}]
/*

const arr = [1, 2, 3, 4]; //*********************************** for of loop on the array
for (let num of arr) {
  console.log(num);
}

const greetings = "Hello world"; // ****************************** for of loop on the string
for (const greet of greetings) {
  console.log(`Each Character is: ${greet}`);
}
*/

//************************************ Map, and for of loop on the map  *********************************** */

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Duplicate value not allow onle unique value is allow.

const map = new Map();
map.set("In", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

// map.set("Fr", "France") // not allow because it is duplicate value

//console.log(map);
/* output:-   Map(3)    {
                                                      'In' => 'India',
                                                      'USA' => 'United State of America',
                                                      'Fr' => 'France'
                                                      }
                    */
// **************************************for of loop on the map**************************************

for (const key of map) {
  // print map ka key value in the array formate
  console.log(key);
}

/* output:-
[ 'In', 'India' ]
[ 'USA', 'United State of America' ]
[ 'Fr', 'France' ]
 */

for (const [key, value] of map) {
  //destructure map ka key value
  console.log(key, ":-", value);
}
/*output                         In :- India
                                 USA :- United State of America
                                 Fr :- France

                              */
//************************************for of loop on the object  *********************************** */
// for of loop object per nhi iteratable hota hai.

/*
const myobject={
  'game1': 'NFS',
  'game2':'spiderman'
}

for(let [key, value] of myobject){
  console.log(key, '-:' , value);
}

*/
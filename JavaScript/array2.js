const marval_heros=["thor", "Ironman", "spiderman"]
const dc_heros=["superman", "flash", "batman"]
//marval_heros.push(dc_heros);// dc_heros array treat as a single element in the marval_heros array.push operation perform only existing array.
//console.log(marval_heros);// output:- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marval_heros[3][1]);// third element ka first element access. output:- flash



const all_Heros=marval_heros.concat(dc_heros);// concate array is used to combine two array  and return a new array.
console.log(all_Heros);//output:- [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// another alternate way combine and spread the array element.it is possible by using the spread operator.

const all_new_heros=[...marval_heros, ...dc_heros];

console.log(all_new_heros);//output:- [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const anotherArray=[1,2,3, [4,5,6],7,[6,7,[4,5]]];
 
const real_another_array=anotherArray.flat(Infinity);//flat method is used to merge/combine array inside array ko.it is take a parameter how many depth tk solve karna hai.

console.log(real_another_array);
/* output:- [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

console.log(Array.isArray("Anand"));//output:- false , isArray() method ka use karte hai check karne ke liye ki jo data ham frontend se fetch ker rahe hai or parameter me pass ker rahe hai vo array hai ya nhi.

console.log(Array.from("Anand"));//output:- [ 'A', 'n', 'a', 'n', 'd' ] , from() method is used to convert another data type(like string , object) to array.

console.log(Array.from({name: "Anand"}));//output:- [] empty array. from() method object ko directly array me nhi convert ker pata hai ise batana padta hai ki. key or value ko array me convert karna hai.

let score1 =100;
let score2 =200;
let score3 =300;
let name="Anand Raj"

console.log(Array.of(score1,score2,score3, name));// from() method ki tarah of() method ka bhi use variables ,array any thing  ko array me convert karne ke liye karte hai.
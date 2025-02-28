/*Map, Reduce, and Filter are key operations in data processing. The Map function transforms input data into key-value pairs, Filter removes unwanted data based on conditions, and Reduce aggregates the filtered results into a final output
*/
const myNums=[1,2,3,4,5,6,7,8,9,10]

// map is same as filter.and also it return value.both are work same as eorEach loop

const myNewNums=myNums.map((num)=>{
return num+10;
})
console.log(myNewNums);
/*
output:-
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] */


// ************************Chaining***************************************

/*
const myNewNums=myNums.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=> num>40);
console.log(myNewNums);
*/

/*
output:-
[
  41, 51,  61, 71,
  81, 91, 101
]

*/

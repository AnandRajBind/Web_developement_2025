/******************************** for each loop*********************************** */
/*
coding=['Js', 'java', 'Python', 'C', 'CPP']

const values=coding.forEach((item)=>{
    // console.log(item);
    return item; 
})
console.log(values); // output:- undefined because forEach Loop not return any values.
*/
/********************************  filter values using filter() method *********************************** */

// note:- it is workig same as foreach loop. but filter() method is return the value while forEach loop is not.
// syntax:- filter((callbackFunction) => {condition} )

// Example:-

const myNums=[1,2,3,4,5,6,7,8,9,10]
newNums=myNums.filter((item)=>{
return item>4
});
console.log(newNums);

// output:- [ 5, 6, 7, 8, 9, 10 ]



/********************************  filter values using forEach  loop *********************************** */
/*const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    // console.log(num);
    newNums.push(num);
  }
});
console.log(newNums);

*/
// output:- [ 5, 6, 7, 8, 9, 10 ]
/********************************************************************************************************** */
const books = [
  { title: "Book one", genre: "science", publish: 1986 },
  { title: "Book two", genre: "history", publish: 1992 },
  { title: "Book three", genre: "history", publish: 1999 },
  { title: "Book four", genre: "non-ficition", publish: 1989 },
  { title: "Book five", genre: "science", publish: 2009 },
  { title: "Book six", genre: "ficition", publish: 1987 },
  { title: "Book seven", genre: "history", publish: 1986 },
  { title: "Book Eight", genre: "science", publish: 2011 },
  { title: "Book nine", genre: "non-ficition", publish: 1981 },
  { title: "Book ten", genre: "science", publish: 1986 },
];

// only history wali book print kisiye.

//let userbooks=books.filter((bk)=> bk.genre === 'history');

// print history book after publised 1995
let userbooks=books.filter((bk)=>{
return bk.genre === 'history' && bk.publish >= 1995
})

console.log(userbooks);


const myNums=[1,2,3];
// ****************************************reduce method**********************************************
/* 
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.



syntax:-

reduce(callbackFn)
reduce(callbackFn, initialValue)

  */


 /*
const myTotal=myNums.reduce(function(acc,currValue){
console.log(`Accumulator is: ${acc} and CurretValue is: ${currValue}`);

return acc+currValue;
},0);
console.log(myTotal);
*/

/*output:-
Accumulator is: 0 and CurretValue is: 1
Accumulator is: 1 and CurretValue is: 2
Accumulator is: 3 and CurretValue is: 3
6
*/
// ****************************************reduce method using arrow function******************************************

const myTotal=myNums.reduce((acc,currValue)=>(acc+currValue),0);
 console.log(myTotal);

 /********************************************************************************************************* */
 const shoppingCart=[
    {
        itemName:"Js course",
        price:3999
    },
    {
        itemName:"Java course",
        price:5999
    },
    {
        itemName:"web Dev course",
        price:2999
    },
    {
        itemName:"DataScience course",
        price:9999
    }
 ]

 TotalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0);
 console.log("Total Price is:"+TotalPrice);

 /*
 output:-
 6
Total Price is:22996

 */
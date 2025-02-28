// for
/* ************************************************************************************************************* */
for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is Best number");
    }
    console.log(element);
}
/* ************************************************************************************************************* */

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop Value: ${i}`);
    
    for(let j=1; j<= 10; j++){
        // console.log(`Inner loop Value: ${j} and Outer loop ${i}`);
console.log(i + " x "+ j + " = " + i*j);

    }
     
}
/* ************************************************************************************************************* */

let myArray=["aman", "rama", "saman"]
console.log("Array Length is: " + myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

/* ************************************** break and continue *************************************** */

for (let i = 1; i <= 20; i++) {
    // const element = array[i];
    if(i==5){
        console.log("value 5 is detected and loop is break");
        break;
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    // const element = array[i];
    if(i==5){
        console.log("Value  5 is skip please continue next itteration ");
        continue;
    }
    console.log(`value of i is ${i}`);
}


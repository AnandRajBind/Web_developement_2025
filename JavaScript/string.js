// //String declare method 1

const name = "anand";
const repoCount= 50;
//console.log(name +  reoCount + "value" ); // outdated syntex

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// modern syntax


//String declare method 2
const gameName=new String('Anand Raj Bind'); // this method is provide the length and some string method.here it is treat as object.

console.log(gameName[0]);// 0 index ki valu "A"
console.log(gameName.__proto__);// output:- {} empty object

// String Method
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("B"));
// negtive value not allow.negative value ko ignore karke 0 se index start ker deta hai.
const newString= gameName.substring(0,4);// output:-Anan
console.log(newString);

const anOtherString=gameName.slice(-13,4);// allow negtive value.
console.log(anOtherString);

const newStringOne="   anand    raj   ";
console.log(newStringOne)
console.log(newStringOne.trim())//remove starting and ending space

const url="https://anand.com/hitesh%20Bind"
console.log(url.replace("%20", "__"));
console.log(url.includes( "anand"));
 

console.log(gameName.split(" "));// string ko array me convert ker rahe hai based on the space.

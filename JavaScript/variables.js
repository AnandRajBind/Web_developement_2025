const accountNumber=15245;
let email = "anand123@gmail.com";
var password= "abcd@123";
accountCity = "Jaunpur";
let accountState;  //default value is  undefind 
var accountCountry;  // default value is undefind 

/*
Not use var because issue in block scope and functional scope.
*/ 
// accountNumber = 25152 // Not Allowed 


email = "anurag@gmail.com";
password= "jdhjdg@123";
accountCity = "varanasi";

console.log(accountNumber);
console.table([email, password, accountCity, accountState,accountCountry])
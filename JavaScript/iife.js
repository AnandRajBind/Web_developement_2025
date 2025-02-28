// IIFE (Immediately Invoked Function Expression). IIFE ake function hota hai jo function deceleration ke turant (Immediately Execute) bad execute/call hota hai.global scope ke variable  problem hoti hai kai bar. to global scope ke variable ke polution ko  avoide karne ke liye IIFE use hota hai.
// Note:- IIFE function ko terminate karne ke liye semicollon ( Explicitly ; lagana hota hai bydefault nhi leta hai)must hota hai.ye invoked ho jata hai but pata nhi hota hai ki kaha ishe rokna hai.
// without semicollon:- TypeError: (intermediate value)(...) is not a function


(function (){//without Named IIFE
    console.log("Database Connected");
    
})(); // IIFE Syntax:- (function(){})();


(function Chai(){// Named IIFE
    console.log("Database Connected");
    
})(); // IIFE Syntax:- (function(){})();
       


// arrow function with IIFE and parameter passed with IIFE
((name)=>{
    console.log(`Database Connected Two ${name}`);
})("Anand");


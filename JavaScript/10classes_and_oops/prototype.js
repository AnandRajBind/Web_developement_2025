// javascript ka default behaviour prototypel behavior hai.that means yadi low level per value nhi mil rhi hai to parent layer search karega.agr yaha bhi nhi mila to grand parent per search karega.ye tab tk karta rahega   jab tk ki ishe  null value n mil jaye.
// arrow function ke ander this ka access nhi hota hai because prototype yaha a jata hai.
//new, this, classes and prototypl inheritance sb kuch prototype ke hi through possible hai. 

/*
let myName="Anand  ";
let myAddress='jaunpur    ';

console.log(myName.trim().length);
console.log(myName.trueLength);
*/

let myHeros=['thor','spiderman'];

let heroPower={
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPowe: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.anand=function(){// 
    console.log(`anand is present all objects`);
}

Array.prototype.heyAnand=function(){
    console.log(`value inject in the array `);
}
heroPower.anand();
myHeros.anand();
myHeros.heyAnand();
// heroPower.heyAnand();// not allow


// **************************prototypel inheritance*****************************

const User={
    name:"userName",
    email:'anand@google.com'
}
const Teacher={
    makeVide: true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'Js Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User
// Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

/*********************************by using prototype remove the extra space *************************************** */

let anotherUser='chaiAurCode        '

String.prototype.trueLength=function(){
    console.log(`${this}`);
     console.log(`True length is: ${this.trim().length}`);
}
anotherUser.trueLength();
"anand   ".trueLength();
"iceTea ".trueLength();

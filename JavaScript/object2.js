

//const tinderUser=new Object();// Object by using Constructor. Singelton create hoga.
const tinderUser =  {};// Object by using literals. Singelton create nhi hoga.

tinderUser.id="123abc";
tinderUser.name="Anand";
tinderUser.isLoggedIn=true;

// console.log(tinderUser);

const regularUser={
    email:"anandrajbind@gmail.com",
    fulllname:{
        userFullName:{
            firstName:"Anand",
            middleName:"Raj",
            lastName:"Bind"
        }
    }
}

console.log(regularUser.fulllname.userFullName.firstName);

// merge two object into single object.
 
const obj1={1: "a", 2: "b"};
const obj2={3: "c", 4: "d"};

//const obj3={obj1,obj2};
//console.log(obj3);//output:- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

 //const obj3=Object.assign({}, obj1,obj2);   // here {} is optional parameter. {} is treat as a target. and another obj1 and obj2 treat as a source.yadi ham {} nhi pass karenge to obj1 ko target treat kiya jata hai.

 const obj3= {...obj1,...obj2} ; // using spread operator
 console.log(obj3);// output:- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// Array object
const users=[
    {
        id:"1abc",
        name:"anand"
    },
    {
        id:"2abc",
        name:"raj"
    },
    {
        id:"3abc",
        name:"bind"
    }
]
 console.log(users[1].name);//output:- raj
// object method
 console.log(Object.keys(tinderUser));//output:- [ 'id', 'name', 'isLoggedIn' ] here object ke key ko treat as array.
 console.log(Object.values(tinderUser));//output:- [ '123abc', 'Anand', false ] here object ke value ko treat as array.

 console.log(Object.entries(tinderUser));// key value dono ake hi me bind karke array return karega.
 console.log(tinderUser.hasOwnProperty("isLoggedIn"));// koi bhi key value present hai nhi object me.

const course={                    // object
    courseName: "Js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor  ------> 


//  object destructruing 

//  const {courseInstructor }=course   
// console.log(courseInstructor);

// or
 const {courseInstructor:Instructor }=course  // here Instructor is optional.
console.log(Instructor);
 

// json. it is just like object. but json ka koi name nhi hota.isme key and value dono string hti hai.
// jab ham kisi API ko call karte hai to backend se value JSON ke formate me ata hai.

{
   "courseName": "Js in Hindi",// JSON formate 1
    "price":"999",
    "courseInstructor":"Hitesh"
}

// JSON formate 2
[
    {}
    {}
    {}
]
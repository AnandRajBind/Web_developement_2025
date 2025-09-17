
// ake file me only one default export ho skta hai. and file me multiple named export ho skte hai. 

//export types-> default export and  Named Export. Named export ko import karte time same name se {} me likhna padta hai. while default export ko import karte time koi bhi name de skte hai.

// default export by arrow function
const ComponentA = () => {
    return (
        <div>

            <h1>This is Component by using arrow function. and used to default export.  </h1>
        </div>
    )
} 
// named export by arrow function. and props pass by destruting method. in the child component props is immutable we can use only that can not be any modification.
 export const ComponentB=({username})=>{
    return (
        <div>
            <h1>This is Component by using function keyword. and  props is {username}</h1>
        </div>
    );
}

// named export by function keyword. and props pass by destruting method.
 export function ComponentC({roll, age}){
    return (
        <div>
            <h1>This is Component by using function keyword roll={roll} and age={age}</h1>
        </div>
    );
}


export default ComponentA;
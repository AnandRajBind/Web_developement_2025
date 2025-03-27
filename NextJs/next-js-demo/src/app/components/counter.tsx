 "use client"
 import { useState } from "react"
 import { useUser } from "@clerk/nextjs"

 export const Counter=()=>{
    const { isLoaded, user } = useUser();

    console.log("Counter component ");
    const [count, setCount]=useState(0);
    if(!isLoaded || !user){
        return null;
    }

    return(
        <button onClick={()=> setCount(count+1)}> Clicked {count} times</button>
    );
 };
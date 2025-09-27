import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [count, setCount]=useState(0);  

 

//****************** */ No Dependency Array(Run After Every Render, just like loop)**********************
useEffect(()=>{
  console.log(count);
  
  // setCount(prev=>prev+1); // it is run infinite time. if does not provide any dependency. {check the console}
})
  
//****************** */ Empty  Dependency Array(Run only onceAfter the Initial Render. Chahe component Rerender ho or na ho kwl 1 hi bar render hoga), just like ComponentDidMount)**********************

useEffect(()=>{
  setCount(prev=>prev+1); // Run only onceAfter the Initial Render.  
  console.log(count);
},[])


// const increaseFunction=()=>{
//   setCount(prev=>prev+1); 
// }

return (
    <>
    {/* <h1 onClick={increaseFunction}>click Me</h1> */}
    <h1 >click Me</h1>
     </>
  )
}

export default App

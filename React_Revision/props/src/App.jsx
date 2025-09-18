import Button from './Function_props'
import './App.css'
import Home from './home'
import React from 'react';


function App() {

  // function 
  // let name = "Anand"
  // name is parameter of function. and value is passed when function is called. from child component
  
  /*
  function handleLogin(name) {
    //  return (alert("You are logged in")) 
    alert(`You are logged in ${name}`)
  }
  */

  let a=20;  

  return (

    // React.Fragment syntax
     <React.Fragment >

      {/* passing data as a props  */}
      {/* <Button name={"Anand"} roll={"Software Engineer"} age={22}/>
    <Button name={"Dheeraj"} roll={"Software Engineer"} age={21}/>
      */}

      {/* passing function as a props */}
      {/* <Button handleLogin={handleLogin}  text={"alert"}/> */}

      {/* passing component as a props */}

<Home data={a} name={"codingHunger"}/>
{/* default props */}
<Home />

  </React.Fragment >
  )
}

export default App

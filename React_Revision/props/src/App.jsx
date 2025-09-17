import Button from './Function_props'
import './App.css'

function App() {

// function 
// let name = "Anand"
// name is parameter of function. and value is passed when function is called. from child component
function handleLogin(name){
//  return (alert("You are logged in")) 
  alert(`You are logged in ${name}`) 
}

  return (
    <>
    {/* <Button name={"Anand"} roll={"Software Engineer"} age={22}/>
    <Button name={"Dheeraj"} roll={"Software Engineer"} age={21}/>
      */}

      {/* passing function as a props */}
     <Button handleLogin={handleLogin}  text={"alert"}/>
    </>
  )
}

export default App

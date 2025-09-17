import Comp from './ComponentA' 
import { ComponentB, ComponentC } from './ComponentA'
import './App.css'

function App() {

 let username="Anand";
  return (
    <>
     {/* <Comp/> */}
     {/* props pass parent component to child component using destruting method*/}
     <ComponentB  username={username} />
     <ComponentC roll={"Software Engineere"} age={23}/>
    </>
  )
}

export default App

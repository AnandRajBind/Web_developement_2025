// Embedding expressions in JSX
import './App.css'


function App() {
  //   Simple expression 
  var element = <h1>I am Simple Expression </h1>

  //  functional expression 
  const elementB = ()=>{
    return(
      <div>
        <h1>This is functional expression</h1>
      </div>
    );
  }
  const elementC= () => {
    return(
      <div>
        <h1>I am conditional renderiong </h1>
      </div>
    )
  }
let num=10;


  return (
    <>
      {/* simple expression call */}
      {element}

      {/* functional expression call */}
      {/* {elementB()} */}

      {/* conditional rendering */}
      {num%2 == 0? elementB():elementC()}

    </>
  )
}

export default App

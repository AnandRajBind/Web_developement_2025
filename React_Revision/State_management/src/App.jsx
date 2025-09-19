import './App.css'
import React, { useState } from 'react'


function App() {


  // internal css
  const heading = {
    color: "red",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "10px",
  }

  const [data, setdata] = useState(0);
  const [name, setname] = useState("codingHunger");

  // const handleClick = () => {
  //   setdata(data + 1)
  // }
  const handleAddition = () => {

    // setdata(data + 1)// it is not store the previous value add directly

    // another way to write/update the  function value
    setdata(prev => prev + 1)// it is store the previous value and add 1

    setname("It is Increasing......... value ")
  }
  const handleSubstraction = () => {
    // setdata(data - 1)

    // correct way to write/update the function
    setdata(prev => prev - 1)
    setname("It is Decreasing......... value ")
  }

  return (
    <>
      <div>
        {/* <div onClick={ handleClick }> */}
        {/* <h1>{data}</h1> */}
        <div >
          {/* use internal css */}
          <h1 style={heading}> Counter   App  {data} </h1>
          <div class="codingHunger">{name}</div>
          {/* inline css used */}
          <button style={{ backgroundColor: "aqua", margin: 5 }} onClick={handleAddition}>Addition + </button>
          <button style={{ backgroundColor: "aqua", margin: 5 }} onClick={handleSubstraction}>Substraction -

          </button>
        </div>
      </div>
    </>
  )

}

export default App;
import './App.css'
import React, { useState } from 'react'


function App() {
  const [data, setdata] = useState(0);

  // const handleClick = () => {
  //   setdata(data + 1)
  // }
const handleAddition=() => {
  setdata(data + 1)
}
const handleSubstraction=() =>{
  setdata(data - 1)
}

  return (
    <>
      <div>
      {/* <div onClick={ handleClick }> */} 
        {/* <h1>{data}</h1> */}



        <div >
          <h1> Counter   App  {data} </h1>
          <button onClick={handleAddition}>Addition + </button>
          <button onClick={handleSubstraction}>Substraction -

          </button>
          </div>
      </div>
    </>
  )

}

export default App;
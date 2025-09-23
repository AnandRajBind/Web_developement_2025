
import './App.css'

function App() {

  // arrow function 
  const handleClick = () => {
    alert("Button Clicked")
  }

  // ananymous function 
  //  const handleOnchange=function(e){
  // console.log(e)
  //  }

  const handleSubmit = (e, val) => {
    e.preventDefault()
    console.log(val);
     
  }

  return (
    <>
      {/* onclick event */}
      <h1 onClick={handleClick}>Hello Developer</h1>

      {/* onchange */}
      {/* <input type="text" onChange={handleOnchange} name='input field' value={"Anand"}  placeholder='Enter Your Name'/> */}


{/* pass the argumet on the submit form. by using arrow function*/}
      {/* <form onSubmit={(e)=>handleSubmit(e,"hii")}>  */}
      <form onSubmit={handleSubmit()}>
        <input type="text" placeholder='Enter your name' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App

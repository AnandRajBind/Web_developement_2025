 
import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  // handle limited form field
 /* const [name,setName]=useState("");
  const [email,setEmail]=useState("");

const  HandleOnChange=(e)=>{
setName(e.target.value);
 }
*/
 
const [data, setData]=useState({

  name:"",
  email:""
})
console.log(data);

const HandleOnChange=(e,key)=>{
  setData({
    ...data, 
    [key]:e.target.value
  })
}
  return (
    <>
    {/* handle limited form field   */}
{/* 
    {name}
    <br />
    {email}
       <form >
        <label htmlFor="name">Name</label>
        <input  type="text" value={name}  onChange={HandleOnChange}  placeholder='Enter Your Name ' id='name'/>
        <br />
        <label htmlFor="email" >Email</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Your Email ' id='email'/>
       </form> */}


           {/* handle Unlimited form field   */}

   
       <form >
        <label htmlFor="name">Name</label>
        <input  type="text" value={"name"} HandleOnChange={(e)=>{e.target.name}} placeholder='Enter Your Name ' id='name'/>
        <br />
        <label htmlFor="email" >Email</label>
        <input type="text"  placeholder='Enter Your Email ' id='email'/>
       </form>

    </>
  )
}

export default App

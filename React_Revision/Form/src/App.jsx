 
import React from 'react'
import { useState } from 'react'
import './App.css'
import { HomePage } from './component/HomePage';
import Navbar from './component/Navbar';

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
  email:"",
  password:""
})

console.log(data);

const HandleOnChange=(e,key)=>{
  setData({
    ...data, 
    [key]:e.target.value
  })
}

// lifting up state
const [searchText,setSearchText]=useState("");

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

   
       <form style={{padding:10}}>
        <label htmlFor="name">Name</label>
        <input  type="text" value={data.name} onChange={(e)=>HandleOnChange(e,'name')} placeholder='Enter Your Name ' id='name'/>
        <br />
        <label htmlFor="email" >Email</label>
        <input type="text" value={data.email} onChange={(e)=>HandleOnChange(e,'email')}  placeholder='Enter Your Email ' id='email'/>
        <br />
        <label htmlFor="email" >Password</label>
        <input type="text" value={data.password} onChange={(e)=>HandleOnChange(e,'password')}  placeholder='Enter Your Email ' id='password'/>
       </form>
       <Navbar searchText={searchText} setSearchText={setSearchText}/>
       <HomePage searchText={searchText} setSearchText={setSearchText}/>
    </>
  )
}

export default App

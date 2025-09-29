import React from 'react'
import { useParams } from 'react-router-dom'


export const ProfileDetails = () => {

    // The useParams hook is a feature of React Router that allows functional components to access dynamic parameters from the URL.
    
    const {username}=useParams();// here variable name must be same as dynamic query parameter name like:- id, username etc.
  return (
 
 <div style={{backgroundColor:'skyblue', padding:20}}>
 <div>{username} Details page</div>
 </div>
  )
}

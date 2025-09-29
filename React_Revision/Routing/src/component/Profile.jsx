import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    < div style={{display:'flex',  gap:20, fontSize:20 }}>
      <Link to={`/profile/${'Anand'}`}> Anand Profile</Link>
      <Link to={`/profile/${'Raj'}`}> Raj Profile</Link>
      <Link to={`/profile/${'Hritik'}`}> Hritik Profile</Link>
      <Link to={`/profile/${'Dheeraj'}`}>Dheeraj Profile</Link>
      </div >
      )
}

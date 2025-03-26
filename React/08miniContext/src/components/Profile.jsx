import React, { useState, useContext } from "react";
import UserContext from '../context/UserContext';

<<<<<<< HEAD
function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div> pleaselogin </div>
    return <div>Welcome{user.username}</div>
} 
=======
export default function Profile() {
  const { user } = useContext(UserContext)
  if (!user) return <div> pleaselogin </div>
  return <div>Welcome{user.username}</div>
}
>>>>>>> 01ae6ece1f058b0b80ceb393a2cf7df7ec4446a8

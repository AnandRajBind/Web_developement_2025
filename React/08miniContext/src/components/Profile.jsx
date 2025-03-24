import React, { useState, useContext } from "react";
import UserContest from '../context/UserContext';

function Profile() {

  const { user } = useContext(UserContext)
  if (!user) return <div> pleaselogin </div>
  return <div>Welcome{user.username}</div>
} 
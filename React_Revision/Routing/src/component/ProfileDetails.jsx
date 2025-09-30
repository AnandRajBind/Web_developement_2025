import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export const ProfileDetails = () => {

    // The useParams hook is a feature of React Router that allows functional components to access dynamic parameters from the URL.
    
    const { username } = useParams();// here variable name must be same as dynamic query parameter name like:- id, username etc.


    //useNavigate Hook
    const navigate=useNavigate();

const handleChange=()=>{
navigate('/')
}
    return (

        <div style={{ backgroundColor: 'skyblue', padding: 20 }}>
            <div>{username} Details page</div>

            <div>
                <button onClick={handleChange}>Go Back </button>
            </div>


        </div>
    )
}

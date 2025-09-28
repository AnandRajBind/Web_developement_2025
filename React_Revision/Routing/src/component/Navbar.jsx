import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div style={{ backgroundColor: 'pink', margin: 0, padding: 15, display: 'flex', gap: 20, color:'black', fontSize:20 }}>
                <Link to='/' >Home Page</Link>
                <Link to='/profile'>Profile Page</Link>
            </div>
        </>
    )
}

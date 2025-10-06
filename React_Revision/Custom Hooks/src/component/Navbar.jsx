import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <div style={{ backgroundColor: 'pink', margin: 0, padding: 15, display: 'flex', gap: 20, color:'black', fontSize:20 }}>
                <Link to='/' >Home </Link>
                <Link to='/page1'>Page 1</Link>
                <Link to='/page2'>Page 2</Link>
                {/* <Link to='/page3'>Page 3</Link> */}
            </div>
        </>
    )
}

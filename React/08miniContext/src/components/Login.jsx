
import React, { useState, useContext, useContext } from 'react'
import UserContest from '../context.UserContext'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { SetUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        SetUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='pssword' />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Login
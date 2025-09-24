import React from 'react'

function condition() {

    let isLogin = false;

    if (isLogin) {
        return <h1>Welcome user</h1>

    } else {
        return <h1>Login First</h1>
    }
}

export default condition
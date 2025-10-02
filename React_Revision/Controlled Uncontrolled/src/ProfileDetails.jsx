import React from 'react'
import { useRef, useEffect } from 'react'



function ProfileDetails() {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleClick = () => {
        const value = inputRef.current.value;
        console.log(value);
    }
    return (
        <div>
            <div style={{ marginTop: 20 }}>Uncontrolled Component</div>
            <input ref={inputRef} placeholder='Enter name' type="text" />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}
export default ProfileDetails
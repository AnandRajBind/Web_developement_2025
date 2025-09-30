
import { Home } from './component/Home'
import { Navbar } from './component/Navbar'
import { NotFound } from './component/NotFound'
import { Profile } from './component/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProfileDetails } from './component/ProfileDetails'
import { useEffect, useRef, useState } from 'react'

function App() {
  //1. By using useref() hook Accessing DOM Element Directly. 2.Storing mutable Values Without Re-rendering (Example:- store previous count value).
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    const value = inputRef.current.value;
    console.log(value);
  }

  //counter app 
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='profile' element={<Profile />} />
            {/* Dynamic Routing */}
            <Route path='profile/:username' element={<ProfileDetails />} />

            {/* It is must be last Routs. if above routes are not match then show the NotFound Error  */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </>
      </Router>

      {/* useref example */}
      <input type="text" ref={inputRef} placeholder='enter your name' />
      <button onClick={handleSubmit}>send</button>

      <h1>Counter App</h1>
      <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {prevCountRef.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}
export default App;
 


import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './component/Navbar'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import ErrorBoundries from './ErrorBoundries'
import Demo from './component/demo'

function App() {

  const customUI = () => {
    return (
      <div style={{ backgroundColor: 'skyblue' }}>This is custom component for page breaking</div>
    )
  }

  return (
    <>
      {/* <ErrorBoundries fallback={<p> Navabar Faild</p>}> */}
      <Navbar />
      {/* </ErrorBoundries> */}
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>

      <ErrorBoundries fallBack={customUI}>
        <Demo />
      </ErrorBoundries>
    </>
  )
}

export default App

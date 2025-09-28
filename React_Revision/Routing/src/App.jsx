
import { Home } from './component/Home'
import { Navbar } from './component/Navbar'
import { NotFound } from './component/NotFound'
import { Profile } from './component/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          {/* It is must be last Routs  */}
          <Route path='*' element={<NotFound />} /> 
        
        </Routes>
      </>
    </Router>
  )
}

export default App


import { Home } from './component/Home'
import { Navbar } from './component/Navbar'
import { NotFound } from './component/NotFound'
import { Profile } from './component/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProfileDetails } from './component/ProfileDetails'
function App() {

  return (
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
  )
}
export default App;


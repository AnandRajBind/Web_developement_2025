import HompePage from "./Component/HompePage"
import Navabar from "./Component/Navabar"
import { WithAuthHOC } from "./utils/withAuthHOC"

function App() {

const secureHomePage=WithAuthHOC(HompePage) // wrapped home page inside HOC Components

  return (
    <>
      <Navabar/>
      {/* <HompePage/> */}
      {/* render HOC Component */}
      <secureHomePage/> 
    </>
  )
}

export default App

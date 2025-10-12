import HompePage from "./Component/HompePage"
import Navabar from "./Component/Navabar"
import { withAuthHOC } from "./utils/withAuthHOC"

function App() {

const SecureHomePage = withAuthHOC(HompePage) // wrapped home page inside HOC Components

  return (
    <>
      <Navabar/>
      {/* <HompePage/> */}
      {/* render HOC Component */}
      <SecureHomePage /> 
    </>
  )
}
export default App

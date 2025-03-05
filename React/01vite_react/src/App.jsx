// note:- component extension is always .jsx in vite.while in react .jsx or .js do not matter.

import Chai from "./chai"

function App() {
 
  //in jsx at a time only one element is export/return. if we can return  multiple element then wrapped the  all element in a single element like (<div> multiple element pass using div <div/> ,<>multiple element pass using fragment   </> )
  return (
<>
<h1>Chai aur React </h1>
<Chai/>
<p>test para</p>
</>
)
}

export default App

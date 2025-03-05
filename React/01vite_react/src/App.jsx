// note:- component extension is always .jsx in vite. while in react .jsx or .js does not matter.

import Chai from "./chai"

function App() {
 const username="Anand Raj Bind"
  //in jsx at a time only one element can be exported/returned. if we want to return  multiple element then wrap  all elements in a single element like (<div> multiple element pass using div <div/> ,<>multiple element pass using fragment   </> )
  return (
<>
// here {username} is evaluated expression.username is treated as a variable. 
<h1>Chai aur React with {username} </h1>
<Chai/>
<p>test para</p>
</>
)
}

export default App

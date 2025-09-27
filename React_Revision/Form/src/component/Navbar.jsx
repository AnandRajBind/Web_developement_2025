import React  from 'react'
import App from '../App';
const Navbar = ({searchText,setSearchText}) => {
    // const [searchText,setSearchText]=useState("");

  return (
    <div>    
        
        <h1>It is Lifting up Example</h1>
        <div style={{padding:20, backgroundColor:'green'}}>
            <h4>Navebar</h4>
            <input value={searchText} 
            onChange={(e)=>setSearchText(e.target.value)}
            type="text" />
        </div>
    </div>
  )
}
export default Navbar;
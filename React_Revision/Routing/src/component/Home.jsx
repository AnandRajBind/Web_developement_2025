import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';


// QueryParameters
export const Home = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchQueryValue = searchParams.get('searchParams')

  const handleSubmit = (e) => {
    e.preventDefault();
    //set Query Parameters 
    navigate(`/?searchParams=${searchText}`)
    setSearchText("")
  }

  return (
       <form onSubmit={handleSubmit}>

        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button >Submit</button>
        {/* show query parameter in home page  */}
        {searchQueryValue}
      </form>

     // <div style={{backgroundColor:'purple', padding:20, fontSize:20}}>Home</div>
  )
}

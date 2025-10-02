import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from './userContext';

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

  const { user, updateNameGlobally } = useContext(UserContext);


  return (


    <form onSubmit={handleSubmit}>
      <div style={{ margin: 20 }}>{user} Fetch data Api</div>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button >Submit</button>
      {/* show query parameter in home page  */}
      {searchQueryValue}
    </form>

    // <div style={{backgroundColor:'purple', padding:20, fontSize:20}}>Home</div>
  )
}

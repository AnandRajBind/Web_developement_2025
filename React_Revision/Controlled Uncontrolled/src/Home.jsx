import React from 'react'
import { useState } from 'react'

export default function Home() {
const [searchText, setSearchText]=useState("");

  return (
<form action="">
<div style={{marginTop:20}}>Controlled Component</div>
<input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
<button>Submit</button>
</form>  )
}

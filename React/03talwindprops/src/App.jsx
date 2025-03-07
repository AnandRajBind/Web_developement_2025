import React from "react";
import Card from "./components/Card";
function App() {
  
//props means properties.it is used to pass(set) data(value) from one component to another component.And it can be acces/recive in the another component. bydefault props empty object hota hai.
// in the props can not be directly set Array, object etc.but through the variable can be possible.
//object variable
const myObj={
  username: 'anand',
  age: '22'
}
const myArr=[1,2,3];

  return (
    <>
    <h1 className="bg-green-400 p-4 rounded-xl flex items-center justify-center">Tailwind Test </h1>
    <Card username='chaiaurcode' btnText='clicked me' obj={myObj} arr={myArr}/>  
    {/* kisi bhi component (like:Card ) ko access karte time jo kuch bhi ham pass karte hai vo props me pass ho jata hai. */}
    <Card username='comedyShow' />
    </>
  )
}

export default App;

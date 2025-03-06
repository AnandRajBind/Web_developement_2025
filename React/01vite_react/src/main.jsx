import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
 import React from 'react'

 function MyApp(){
  return(
    <>
    <h1>custom app </h1>
     </>
  )
 }/*
 const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
 */


const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

// create react element by using React class.
//createElement() method  is used to three parameter first is html tag (a,h1)second is attributes in {}, and third is text.
const anotherUser=' chai aur code '
const ReactElement=React.createElement(
  'a', 
  {href: 'https://google.com', target:'blank'},
  'click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
    //  MyApp()
    // <MyApp />
    // <App />
    ReactElement
    // anotherElement
   )
 
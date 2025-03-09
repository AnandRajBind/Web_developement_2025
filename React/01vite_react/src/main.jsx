import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
 import React from 'react'

// ***************************************************Dependency*********************************
//Dependency:- ****A dependency is some third-party code that your application depends on. Just like a child depends on its parent, your application depends on other people's code. A piece of code becomes a true dependency when your own application cannot function without it.
//Example:-   if you want to add routing(moving from one page to another which changes your URL) in your react project then you need to install react-router-dom dependency by doing.
// npm install react-router-dom
//*************************************API(Application Programming Interface)************************************************ */
// API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other.

//API:-  APIs function as intermediaries between a client and a server. The client sends a request to the server through the API, and the server processes this request and sends back a response. 
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
//VirtualDom:-  createRoot method behind the schene create a dom like structure. because its compare the main dom and own dom,phir usi chij ko update karta hai jo actually me UI me update huwa.  but browser pure dom ko remove karta hai aur repaint karta hai tabhi hame reload ka icon show hota hai.  
// Fiber:-React fiber algorithm is used to update the Virtual DOM.The goal of  react fiber is to increase its suitability for areas like animation,layout and gestures.Key Features:- ability to pause,abort or reuse as a new update.
//reconcilition:-The alogorithm react uses to different one tree with another to determine which parts need to be changed.in other words we can say that virtual DOM.
createRoot(document.getElementById('root')).render(
    //  MyApp()
    // <MyApp />
    // <App />
    ReactElement
    // anotherElement
   )
 
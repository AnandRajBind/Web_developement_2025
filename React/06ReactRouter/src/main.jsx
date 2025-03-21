import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router.jsx'
import './index.css'
import {RouterProvider} from 'react-router'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   </StrictMode>,
)

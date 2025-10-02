import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Step-6 wrap the react application with the contextProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
 
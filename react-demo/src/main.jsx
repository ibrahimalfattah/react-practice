import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// StrictMode : this will check for any errors in the code
// createRoot is a function that will create the root element
// document.getElementById('root') is the root element
// render is a function that will render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  />
  </StrictMode>,
)


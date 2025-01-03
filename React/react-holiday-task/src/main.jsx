import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FlowersContextProvider from './context/FlowersContext.jsx'

createRoot(document.getElementById('root')).render(
  <FlowersContextProvider>
    <App />
  </FlowersContextProvider>,
)

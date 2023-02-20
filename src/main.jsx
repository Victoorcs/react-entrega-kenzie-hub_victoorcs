import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from './global'
import { TechProvider } from './providers/TechContext'
import { UserProvider } from './providers/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <TechProvider>
      <GlobalStyle/>
    <App />
    </TechProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

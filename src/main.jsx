import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from './global'
import { UserProvider } from './providers/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <GlobalStyle/>
    <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

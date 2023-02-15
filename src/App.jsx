import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './routes'
import { StyledApp } from './style'

function App() {
  

  return (
    <StyledApp>
      <AppRoutes/>
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </StyledApp>
  )
}

export default App

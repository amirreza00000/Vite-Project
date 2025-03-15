import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { authRoutes } from '../config/router/auth.router'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0)

  return (
    <>
     {/* routers */}
     {isLoggedIn ? <Auth/> : <Public/>}
     <RouterProvider routes={ isLoggedIn ? authRoutes : pablicRoutes} />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { authRoutes } from '../config/router/auth.router'
import Panel from '../screens/Panel'

function App() {
  const [count, setcount] = useState(0)

  return (
    <>
     {/* routers */}
      <Panel/>
    </>
  )
}

export default App

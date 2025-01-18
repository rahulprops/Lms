import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Registor'
import Navbar from './components/ui/Navbar'
import HeroSection from './student/HeroSection'


function App() {
  

  return (
    <>
    
      <Navbar/>
      <HeroSection/>
      <Login/>
      <Register/>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage' // ✅ Import it
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

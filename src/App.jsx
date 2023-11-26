// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import stocks from './data'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'


function App() {
  

  return (
    <>
      <Nav />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/stocks' element={<Dashboard/>} />
        <Route path='/stock/:symbol' element={<Stock />} />
      </Routes>
    </>
  )
}

export default App

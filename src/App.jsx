import { useState } from 'react'

import './App.css'
import Navbar from './assets/Navbar'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/cart" element={<Cart/>} />
<Route path="/footer" element={<Footer />} />

</Routes>
    </>
  )
}

export default App

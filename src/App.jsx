import { useState } from 'react'

import './App.css'
// import Navbar from './assets/Navbar'
import { Routes,Route } from 'react-router-dom'
import Cart from './assets/Cart'
import Footer from './assets/Footer'
import Home from './assets/Home'
import ContactUs from './assets/ContactUs'
import Search from './assets/Search'
import IskconNav from './assets/IskconNav'


function App() {

  return (
    <>
{/* <Navbar/> */}
<IskconNav/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="/footer" element={<Footer/>} />
<Route path="/contact" element={<ContactUs/>} />
<Route path="/search" element={<Search/>} />



</Routes>
    </>
  )
}

export default App

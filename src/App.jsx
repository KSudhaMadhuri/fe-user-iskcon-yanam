import { createContext, useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cart from './assets/Cart'
import Footer from './assets/Footer'
import Home from './assets/Home'
import ContactUs from './assets/ContactUs'
import Search from './assets/Search'
import Navbar from './assets/Navbar'
import axios from 'axios'
import ProductOverView from './assets/ProductOverView'
import "react-toastify/dist/ReactToastify.css";

export const productsContext = createContext()

function App() {
  const api = import.meta.env.VITE_API;
  const [products, setProducts] = useState([])
  const [cart , setCart]= useState([])
 

useEffect(()=>{
const cart = localStorage.getItem("cart")
if(cart){
  setCart(JSON.parse(cart))
}
},[])

  // fetching books data from server
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${api}/book/getbooks`);
        if (response) {
          setProducts(response.data.reverse());
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <productsContext.Provider value={{ products, setProducts , cart , setCart}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
          <Route path='/:bookId' element={<ProductOverView/>}/>
        </Routes>
      </productsContext.Provider>
    </>
  )
}

export default App

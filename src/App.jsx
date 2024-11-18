import { createContext, useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./assets/Cart";
import Footer from "./assets/Footer";
import Home from './assets/Home'
import ContactUs from "./assets/ContactUs";
import Search from "./assets/Search";
import Navbar from "./assets/Navbar";
import axios from "axios";
import ProductOverView from "./assets/ProductOverView";
import "react-toastify/dist/ReactToastify.css";
import Order from "./assets/Order";

export const productsContext = createContext();

function App() {
  const api = import.meta.env.VITE_API;
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])


  // retrieveing cart items from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cart")
    if (cartData) {
      setCart(JSON.parse(cartData))
    }
  }, [])


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
      <productsContext.Provider value={{ products, setProducts, cart, setCart }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policies/:name" element={<Policies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product_over_view/:bookId" element={<ProductOverView />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </productsContext.Provider>
    </>
  );
}

export default App;

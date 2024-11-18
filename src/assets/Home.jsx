import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../App'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Carousel from './Carousel'
import { toast, ToastContainer } from 'react-toastify'


const Home = () => {
  const { products, cart, setCart } = useContext(productsContext)


  // added cart function 
  const addCartFunc = (bookId) => {
    const addedItem = products.find((item) => item._id === bookId)
    const addCart = [...cart, { ...addedItem, qty: 1 }]
    setCart(addCart)
    toast.success("Item added to cart")
    localStorage.setItem("cart", JSON.stringify(addCart))
  }



  useEffect(() => {
    document.title = "ISKCON Yanam Stores"
  }, [])

  return (
    <>

      <ToastContainer position='bottom-center' theme='dark' />
      <Carousel />
      <div className="bg-white mt-5" >
        <div className="mx-auto max-w-2xl px-4  sm:px-3  lg:max-w-7xl lg:px-10">

          <div className='flex justify-between'>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">
              Latest Products
            </h2>
          </div>
          <hr className='my-3 border-orange-400' />
          <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-5 md:gap-y-7 lg:gap-y-6  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {products.length ? <>
              {products.map((item) => (

                <div key={item.id} className="group border-2 rounded border-red-300 w-full sm:w-[12rem]  md:w-52   lg:w-72   p-3 relative  hover:opacity-85">
                  <Link to={`/product_over_view/${item._id}`} className=''>
                    <img
                      src={item.bookImage}
                      alt={item.bookName}
                      className="h-44 w-full sm:w-[10rem] md:w-full md:h-56 lg:h-80 lg:w-72 rounded"
                    />
                  </Link>

                  <div className="mt-2 flex justify-between ">
                    <div className=''>
                      <h3 className="text-[0.9rem] h-6 overflow-y-auto sm:text-sm text-gray-700">

                        {item.bookName.substring(0, 20)}..
                      </h3>
                    </div>
                    <p className="text-sm  font-medium text-nowrap text-gray-900">₹ {item.bookPrice}</p>
                  </div>
                  {item.outOfStock === "outofstock"
                    ?
                    <button
                       
                      className='rounded h-8 mt-2 bg-red-500 text-white w-full'
                    >
                      Out of stock
                    </button> : <>
                      {cart.some(cartItem => cartItem._id === item._id) ? (
                        <Link to="/cart" className='rounded-full h-8 mt-2 bg-indigo-800  flex justify-center items-center text-center text-white w-full'>
                          Go To Cart
                        </Link>
                      ) : (
                        <button
                          onClick={() => addCartFunc(item._id)}
                          className='rounded-full h-8 mt-2 bg-orange-500 text-white w-full'
                        >
                          Add To Cart
                        </button>
                      )}
                    </>}

                </div>
              ))}
            </> : (
              [...Array(8)].map((_, index) => (
                <div key={index} className=" animate-pulse group w-full h-62 md:w-52 md:h-64 lg:w-72 lg:h-96 p-3 relative rounded">
                  <div className="bg-slate-400 h-44 w-full md:w-full md:h-56 lg:h-80 lg:w-72 rounded "
                  ></div>
                  <div className="mt-4 flex gap-2 justify-between items-center ">
                    <div className='w-full'>
                      <h3 className="text-sm  bg-slate-400 h-4  ">
                      </h3>
                    </div>
                    <h3 className="text-sm bg-slate-400 h-4 w-8 ">
                    </h3>
                  </div>
                </div>
              ))
            )
            }
          </div>
        </div>
      </div>

      {/* introduction section  */}

      <section className="text-gray-600 body-font mt-10">
        <div className=' bg-blue-600 h-[0.1rem] mx-10'></div>
        <div className="container px-5 py-10 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <img src="/iskcon_logo.jpg" className="inline-block w-[10rem] h-[10rem] text-gray-400 mb-4"
              alt="logo" />
            <h5 className='mb-4 text-2xl font-semibold'>Welcome to Our ISKCON YANAM STORES</h5>
            <p className="leading-relaxed text-lg">
              Discover the timeless wisdom of the International Society for Krishna Consciousness (ISKCON) through our curated collection of spiritual books. Whether you are a long-time devotee or just beginning your spiritual journey, our books offer deep insights into the teachings of Bhagavad-gita, Srimad Bhagavatam, and the works of A.C. Bhaktivedanta Swami Prabhupada.
            </p>
          </div>

        </div>
      </section>




      <Footer />
    </>
  )
}

export default Home
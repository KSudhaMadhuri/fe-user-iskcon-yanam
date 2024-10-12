import React, { useContext, useState } from 'react'
import { productsContext } from '../App'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Carousel from './Carousel'


const Home = () => {
  const { products } = useContext(productsContext)

  return (
    <>
    <Carousel/>
      <div className="bg-white " >
        <div className="mx-auto max-w-2xl px-4  sm:px-3  lg:max-w-7xl lg:px-10">

          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Latest Products
            </h2>
          </div>
          <hr className='my-3' />
          <div className="mt-6 grid grid-cols-2 gap-y-4 md:gap-y-7 lg:gap-y-6  md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">

            {products.length ? <>
              {products.map((item) => (

                <Link to={`/${item._id}`} key={item.id} className="group w-40 h-62 md:w-52 md:h-64 lg:w-72 lg:h-96 p-3 relative  hover:opacity-85">
                  <div className=''>
                    <img
                      src={item.bookImage}
                      alt={item.bookName}
                      className="h-44 w-full md:w-full md:h-56 lg:h-80 lg:w-72 rounded"
                    />
                  </div>

                  <div className="mt-2 flex justify-between ">
                    <div>
                      <h3 className="text-[0.9rem] sm:text-sm text-gray-700">

                        {item.bookName.substring(0, 17)}..
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-nowrap text-gray-900">₹ {item.bookPrice}</p>
                  </div>
                </Link>
              ))}
            </> : (
            
            
              [...Array(8)].map((_, index)=>(
                <div key={index} className=" animate-pulse group w-40 h-62 md:w-52 md:h-64 lg:w-72 lg:h-96 p-3 relative rounded">
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


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <img src="/iskcon_logo.jpg" className="inline-block w-[10rem] h-[10rem] text-gray-400 mb-6"
              alt="" />
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
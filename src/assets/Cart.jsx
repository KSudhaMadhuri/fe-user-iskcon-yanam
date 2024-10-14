import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { productsContext } from '../App'

const Cart = () => {
const {cart , setCart} = useContext(productsContext)



  useEffect(()=>{
    document.title = "My cart products"
      },[])
  return (
    <>
     <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {cart.length ? <>  {cart.map((item) => (
              <div key={item.id} className="py-8 flex lg:gap-x-8 flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col m-auto">
                  <img src={item.bookImage} alt={item.title} className='w-72 h-72' />

                </div>
                <div className="md:flex-grow">
                   
                  <h2 className="text-2xl font-medium  text-gray-900 title-font mb-2">
                    {item.bookName}
                  </h2>
                  <p className="leading-relaxed">
                    {item.bookSummary.substring(0, 260)}...
                  </p>
                  <div className='flex'>
                    <div className='items-center mt-2 flex flex-col'>

                      <h6 className='mb-1 font-semibold capitalize '>qty</h6>

                      <div className='flex gap-3 items-center'>
                        <button onClick={() =>decQtyFunc(item.id)} className="border-black text-center font-semibold rounded border py-1  pl-3 pr-3" disabled={item.qty === 1 && "true"}>
                          -
                        </button>
                        <h5 className='font-semibold'>{item.qty}</h5>
                        <button onClick={() => qtyFunc(item.id)} className="border-black text-center font-semibold rounded border py-1  pl-3 pr-3">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-3 title-font font-medium text-2xl text-gray-900">
                    ${item.price.toFixed(2) * item.qty}
                  </h6>
                  <button className="font-semibold p-1 mr-5 rounded border-2 border-blue-600 hover:border-slate-600 bg-blue-600 text-white hover:bg-slate-600  w-32  mt-4">
                    BUY NOW
                  </button>
                  <button onClick={() => removeFunction(item.id)} className="font-semibold border-2 p-1 hover:border-red-600 rounded hover:bg-red-600 hover:text-white border-black w-32 text-center text-black mt-4">
                    REMOVE
                  </button>


                </div>
              </div>

            ))}
            </> : <div className='h-96 w-full flex justify-center items-center font-semibold text-xl'>Cart Is Empty</div>}




          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Cart
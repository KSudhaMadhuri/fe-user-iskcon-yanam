import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Products from './Products';
import Footer from './Footer';

const ProductOverView = () => {
  const api = import.meta.env.VITE_API;
  const [data, setData] = useState({})
  const { bookId } = useParams()
  const previousTitle = useRef(document.title)
  const [spin, setSpin] = useState(false)


  // fetching single book data from server
  useEffect(() => {
    const fetchBook = async () => {
      setSpin(true)
      try {
        const response = await axios.get(`${api}/book/getsinglebook/${bookId}`);
        if (response) {
          setData(response.data);
          setSpin(false)

        }
      } catch (error) {
        console.log(error);


      }
    };
    fetchBook();
  }, [bookId]);


  // title changing dyanmically 
  useEffect(() => {
    if (data && data.bookName) {
      document.title = data.bookName
      previousTitle.current = data.bookName
    } else {
      document.title = previousTitle.current
    }
  }, [data])

  return (
    <>

      {spin ?


        <div className='mt-20 pt-20 flex justify-center items-center font-semibold text-xl ' style={{ height: "70vh" }}>

          Loading...
        </div> : <section className="text-gray-600 body-font overflow-hidden">
          <div className=" px-5 py-24 pb-8 mx-auto">
            <div className="flex flex-row gap-4  justify-betweeen w-full flex-wrap">
              <div className=' w-full  h-auto flex justify-center sm:w-[40%]'>

                <img
                  alt="ecommerce"
                  className="w-full h-auto sm:h-[29rem] md:h-[28rem] lg:w-96 lg:h-[32rem] rounded "
                  src={data.bookImage}
                />
              </div>
              <div className="w-full sm:w-1/2  mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">

                </h2>
                <div className="flex gap-1 mb-3 justify-start  items-start ">
                  <span className='font-semibold text-nowrap'>Book Name : </span>
                  <span className='text-xl font-semibold'>{data.bookName}</span>
                </div>
                <div className="flex gap-1 mb-3 items-start">
                  <span className='font-semibold text-nowrap'>Book Author : </span>
                  <span className='text-lg'>{data.bookAuthor}</span>
                </div>

                <div className="flex gap-1 mb-4 items-center">
                  <span className='font-semibold text-nowrap'>Book Price : </span>
                  <span className='text-lg font-semibold text-black'>  ₹{data.bookPrice}</span>
                </div>


                <div className="flex gap-4 mb-4 items-center">
                  <h5 className='font-semibold mb-3'>Quantity :</h5>
                  <div className='font-semibold border-2 rounded text-orange-600 h-10 w-10 flex justify-center border-orange-700 items-center'><FaMinus /></div>
                  <h5 className='text-lg font-semibold'>1</h5>
                  <div className='text-lg font-semibold rounded  text-orange-600 h-10 w-10  border-2 border-orange-700 flex justify-center items-center'><FaPlus /></div>
                </div>


                <div className="flex gap-3 justify-start my-5">
                  <button className=" bg-indigo-800 font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    ADD TO CART
                  </button>
                  <button className="bg-orange-500 font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded">
                    BUY NOW
                  </button>
                </div>
                <div className='w-full'>

                  <h4 className='font-semibold text-xl text-gray-900'>Product Details</h4>
                  <hr className='my-2 border-1 border-black' />
                  <div className="flex gap-1 mb-3 items-center">
                    <span className='font-semibold text-nowrap'>Book Weight : </span>
                    <span className='text-lg'>{data.bookWeight} grams</span>
                  </div>
                  <div className="flex gap-1 mb-3 items-center">
                    <span className='font-semibold text-nowrap'>Book Pages : </span>
                    <span className='text-lg'>{data.bookPages}</span>
                  </div>
                  <div className="flex gap-1 mb-3 items-center">
                    <span className='font-semibold text-nowrap'>Book Size : </span>
                    <span className='text-lg'>{data.bookSize}</span>
                  </div>
                  <div className="flex flex-col gap-1 mb-3 items-start">
                    <span className='font-semibold text-black text-lg text-nowrap'>Summary</span>
                    <span className='text-lg'>{data.bookSummary}</span>
                  </div>
                </div>

              </div>



            </div>
          </div>

        </section>}

      {/* you may also like products page */}
      {
        spin ? "" : <>  <Products />
          <Footer /></>
      }

    </>
  )
}

export default ProductOverView
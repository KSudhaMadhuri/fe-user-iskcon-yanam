import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const ProductOverView = () => {
  const api = import.meta.env.VITE_API;
  const [data, setData] = useState({})
  const { bookId } = useParams()
  const previousTitle = useRef(document.title)



  // fetching single book data from server
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${api}/book/getsinglebook/${bookId}`);
        if (response) {
          setData(response.data);
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
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-row justify-evenly w-full flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-96 lg:h-96 rounded "
              src={data.bookImage}

            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">

              </h2>
              <div className="flex gap-1 mb-3 items-center">
                <span className='font-semibold'>Book Name : </span>
                <span className='text-2xl font-semibold'>{data.bookName}</span>
              </div>
              <div className="flex gap-1 mb-3 items-center">
                <span className='font-semibold'>Book Author : </span>
                <span className='text-lg'>{data.bookAuthor}</span>
              </div>
              <div className="flex gap-1 mb-4 items-center">
                <span className='font-semibold'>Book Price : </span>
                <span className='text-lg font-semibold text-black'>  ₹{data.bookPrice}</span>
              </div>

              
                <div className="flex gap-4 mb-4 items-center">
                <h5 className='font-semibold mb-3'>Quantity :</h5>
                  <div className='font-semibold border-2 rounded text-orange-600 h-10 w-10 flex justify-center border-orange-700 items-center'><FaMinus /></div>
                  <h5 className='text-lg font-semibold'>1</h5>
                  <div className='text-lg font-semibold rounded  text-orange-600 h-10 w-10  border-2 border-orange-700 flex justify-center items-center'><FaPlus /></div>
                </div>
           

              <div className="flex gap-3 justify-start my-5">
                <button className="  bg-indigo-800 font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  ADD TO CART
                </button>
                <button className="  bg-orange-500 font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded">
                  BUY NOW
                </button>
              </div>
<div>

              <h4 className='font-semibold text-xl text-gray-900'>Product Details</h4>
              <hr className='my-2 border-1 border-black' />
              <p className="leading-relaxed">
                Book Summary : {data.bookSummary}
              </p>
</div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductOverView
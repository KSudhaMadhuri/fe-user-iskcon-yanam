import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Products from './Products';
import Footer from './Footer';
import { productsContext } from '../App';
import { toast, ToastContainer } from 'react-toastify';

const ProductOverView = () => {
  const api = import.meta.env.VITE_API;
  const [data, setData] = useState({})
  const { bookId } = useParams()
  const previousTitle = useRef(document.title)
  const [spin, setSpin] = useState(false)
  const { cart, products, setCart } = useContext(productsContext)




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


  // added cart function 
  const addCartFunc = (bookId) => {
    const addedItem = products.find((item) => item._id === bookId)
    const addCart = [...cart, { ...addedItem, qty: 1 }]
    setCart(addCart)
    toast.success("Book added to cart")
    localStorage.setItem("cart", JSON.stringify(addCart))
  }

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
      <ToastContainer position='bottom-center' theme='dark' />
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
                  {data.itemType === "book" && <span className='font-semibold text-nowrap'>Book Name : </span>}
                  <span className='text-xl font-semibold'>{data.bookName}</span>
                </div>

                {data.itemType === "book" &&
                  <div className="flex gap-1 mb-3 items-start">
                    <span className='font-semibold text-nowrap'>Book Author : </span>
                    <span className='text-lg'>{data.bookAuthor}</span>
                  </div>
                }
                <div className="flex gap-1 mb-4 items-center">
                  <span className='font-semibold text-nowrap'>{data.itemType === "other" ? "Price" : "Book Price"} : </span>
                  <span className='text-lg font-semibold text-black'>  ₹{data.bookPrice}</span>
                </div>

                {data.outOfStock === "stock" && (<>

                  <div className="flex gap-3 justify-start my-5">

                    {cart.some((item) => item._id === data._id) ? <Link to="/cart" className=" bg-indigo-800 w-[12rem] text-center font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">
                      GO TO CART
                    </Link> : <button onClick={() => addCartFunc(data._id)} className="bg-gradient-to-r w-[12rem] from-indigo-700 to-orange-500 font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">
                      ADD TO CART
                    </button>}
                    {/* <Link to="/order" onClick={() => addCartFunc(data._id)} className="bg-yellow-500 font-semibold text-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded-full">
                      BUY NOW
                    </Link> */}
                  </div>

                </>)}

                {data.outOfStock === "outofstock" &&

                  <h5 className='text-lg mb-3 font-semibold text-red-600'>Currently out of stock</h5>
                }
                <div className='w-full'>

                  <h4 className='font-semibold text-xl text-gray-900'>Product Details</h4>
                  <hr className='my-2 border-1 border-black' />
                  <div className="flex gap-1 mb-3 items-center">
                    <span className='font-semibold text-nowrap'>{data.itemType === "other" ? "Weight" : "Book Weight"} : </span>
                    <span className='text-lg'>{data.bookWeight} grams</span>
                  </div>
                  {data.itemType === "book" && <>
                    <div className="flex gap-1 mb-3 items-center">
                      <span className='font-semibold text-nowrap'>Book Pages : </span>
                      <span className='text-lg'>{data.bookPages}</span>
                    </div>
                    <div className="flex gap-1 mb-3 items-center">
                      <span className='font-semibold text-nowrap'>Book Size : </span>
                      <span className='text-lg'>{data.bookSize}</span>
                    </div>
                  </>}
                  {data.bookSummary !== "" &&
                    <div className="flex flex-col gap-1 mb-3 items-start">
                      <span className='font-semibold text-black text-lg text-nowrap'>Summary</span>
                      <span className='text-lg'>{data.bookSummary}</span>
                    </div>
                  }
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
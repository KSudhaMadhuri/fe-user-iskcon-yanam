import React, { useContext, useEffect, useRef, useState } from 'react'
import { productsContext } from '../App'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Search = () => {
  const { products } = useContext(productsContext)
  const [searchBooks, setSearchBooks] = useState(products)
  const [text, setText] = useState("")
  const searchRef = useRef()

  const changeHandling = (e) => {
    setText(e.target.value)

  }

  // search function 
  useEffect(() => {
    const searchresults = products.filter((item) =>
      item.bookName.toLowerCase().includes(text.toLowerCase())
    );
      setSearchBooks(searchresults);
  }, [text]);


  useEffect(() => {
    document.title = "Search for books"
    searchRef.current.focus()
  }, [])

  return (
    <div className='mt-20 px-5 pb-10'>
      <div className='flex justify-center pt-5 mb-7'>
        <div className='relative w-full sm:w-auto'>

          <input ref={searchRef} value={text} onChange={changeHandling} placeholder="Search for books" type="text" name="text" id="text" className=' w-full h-[3rem] lg:w-96 rounded-full border-2  py-1.5 pl-12 pr-20 text-gray-900 outline-none border-orange-600 placeholder:text-gray-800   sm:text-md sm:leading-6 placeholder="0.00' />
          <span className='left-4 top-[0.9rem] absolute text-orange-600  text-gray-600'><FaSearch size={20} /></span>
        </div>
      </div>

      <h5 className='text-xl font-semibold mt-4'>Search Results</h5>

      <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-5 md:gap-y-7 lg:gap-y-6  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

        {searchBooks.length ? <>
          {searchBooks.map((item) => (

            <div key={item.id} className="group border-2 rounded border-red-300 w-full   md:w-52   lg:w-72   p-3 relative  hover:opacity-85">
              <Link to={`/${item._id}`} className=''>
                <img
                  src={item.bookImage}
                  alt={item.bookName}
                  className="h-44 w-full md:w-full md:h-56 lg:h-80 lg:w-72 rounded"
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
            </div>
          ))}
        </> :
          <div className="text-lg font-medium text-center w-screen">
            No results found
          </div>
        }
      </div>
    </div>
  )
}

export default Search
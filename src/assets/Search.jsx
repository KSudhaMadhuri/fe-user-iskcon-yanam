import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../App'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const { products, setProducts } = useContext(productsContext)
const [SearchBooks , setSearchBooks] = useState([])

  useEffect(() => {
    document.title = "Search for books"
  }, [])

  return (
    <div className='mt-20 px-5'>
      <div className='flex justify-center w-full pt-5  '>
        <div className='relative flex w-full'>

        <input placeholder="Search for books" type="text" name="text" id="text" className=' w-full h-[3rem] lg:w-96 rounded-md border-2 border-gray-500 py-1.5 pl-12 pr-20 text-gray-900 outline-none placeholder:text-gray-800   sm:text-md sm:leading-6 placeholder="0.00' />
      <span className='left-4 top-[0.9rem] absolute'><FaSearch  size={20}/></span>
        </div>
      </div>

    </div>
  )
}

export default Search
import React, { useContext } from 'react'
import { productsContext } from '../App'
import { Link } from 'react-router-dom'

const Products = () => {
    const { products } = useContext(productsContext)
    return (
        <div className='px-5 mb-6'>
            <h5 className='text-xl font-semibold '>YOU MAY ALSO LIKE</h5>
            <div className='pb-4 flex gap-4 flex-nowrap overflow-x-auto mt-4 '>

                {products.map((item) => (
                    <div key={item.id} className=" border-2 rounded border-red-300 p-3 h-[20rem] w-[14rem] lg:w-[16rem] hover:opacity-85">
                        <Link to={`/${item._id}`} className=''>
                            <img
                                src={item.bookImage}
                                alt={item.bookName}
                                className="rounded h-[16rem] w-[12rem] lg:w-[14.5rem]"
                            />
                        </Link>

                        <div className="mt-2 flex justify-between  w-[12rem] lg:w-[14rem]">
                            <div className=''>
                                <h3 className="text-sm text-gray-700">

                                    {item.bookName.substring(0, 15)}..
                                </h3>
                            </div>
                            <p className="text-sm  font-medium text-nowrap text-gray-900">₹ {item.bookPrice}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products
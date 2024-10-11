import React, { useContext, useState } from 'react'
import { productsContext } from '../App'
import { Link } from 'react-router-dom'

const Home = () => {
  const { products } = useContext(productsContext)

  return (
    <>
      <div className="bg-white pt-0" >
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Latest Products
            </h2>



          </div>
          <hr className='my-3' />
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {products.length ? <>
              {products.map((item) => (

                <Link to={`/${item._id}`} key={item.id} className="group w-72 p-3 relative  hover:opacity-85">
                  <div className=''>
                    <img
                      src={item.bookImage}
                      alt={item.bookName}
                      className="h-72 w-72 rounded"
                    />
                  </div>

                  <div className="mt-4 flex justify-between ">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {item.bookName.substring(0, 22)}..
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-nowrap text-gray-900">₹ {item.bookPrice}</p>
                  </div>
                </Link>
              ))}
            </> : <>

              <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div> <div className="w-72 animate-pulse rounded">
                <div className="bg-slate-400 rounded h-72 w-72 "
                ></div>
                <div className="mt-4 flex justify-between ">
                  <div>
                    <h3 className="text-sm  bg-slate-400 h-4 w-72 ">
                    </h3>
                    <h3 className="text-sm mt-2 bg-slate-400 h-4 w-48 ">
                    </h3>
                  </div>
                </div>
              </div>

            </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
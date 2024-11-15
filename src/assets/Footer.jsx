import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaDownload, FaShareSquare } from 'react-icons/fa';


const Footer = () => {


  // share app function 

  const shareApp = async () => {
    try {
      await navigator.share(({
        text: "Have a look at our ISKCON book collection! Discover spiritual wisdom and inspiration at : ",
        url: "https://iskconyanamstores.netlify.app"
      }))
    } catch (error) {
      console.error(error);

    }
  }

  return (
    <footer className="text-white-600 body-font text-white bg-black">
      <div className="container px-5 pt-10 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            ISKCON YANAM STORES
          </h2>
          <h1 className=" text-md font-medium title-font text-white">
            Download our app for a better experience! Get faster access, exclusive features, and more.

          </h1>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-3 w-full">
          <a href='/Iskconyanamstores.apk' download="/Iskconyanamstores.apk" className="bg-gray-100 text-center h-10 inline-flex gap-2 text-black py-2 px-5 rounded-full items-center hover:bg-gray-200 focus:outline-none w-[11rem]">
            <FaDownload

              className="w-4 h-4"

            />
            <span className="title-font font-medium">Download App</span>

          </a>
          <button onClick={shareApp} className='bg-blue-600 text-white flex items-center justify-center gap-2 font-semibold h-10 rounded-full w-[11rem]'>

            <FaShareSquare className=' text-white' />Share App
          </button>

        </div>
      </div>
      <div className="container px-5 py-24 pt-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="/iskcon_logo.jpg" className='w-16 h-16 text-white   rounded' alt="logo" />
            <span className="ml-3 text-xl">   ISKCON YANAM STORES</span>
          </Link>
          <p className="mt-2 text-sm text-white-500">
            Read page by page, escape the cage before you age.        </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-orange-600 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white-600 hover:text-white-800">About Srila Prabhupada</a>
              </li>
              <li>
                <a className="text-white-600 hover:text-white-800">About BBT</a>
              </li>
              <li>
                <a className="text-white-600 hover:text-white-800">About ISKCON</a>
              </li>
              <li>
                <a href='mailto:iskconyanamstores@gmail.com' className="text-white-600 hover:text-white-800">Contact</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-orange-600 tracking-widest text-sm mb-3">
              BOOKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white-600 hover:text-white-800">Books</a>
              </li>
              <li>
                <a className="text-white-600 hover:text-white-800">eBooks and Audio Books</a>
              </li>

            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-orange-600 tracking-widest text-sm mb-3">
              HELP
            </h2>
            <nav className="list-none mb-10">
            <li>
                <Link to="/policies/terms" className="text-white-600 hover:text-white-800">Terms and Conditions</Link>
              </li>
              <li>
                <Link to='/policies/privacy' className="text-white-600 hover:text-white-800">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/policies/refund" className="text-white-600 hover:text-white-800">Refund and Cancellation</Link>
              </li>
              <li>
                <Link to="/policies/shipping" className="text-white-600 hover:text-white-800">
                  Shipping and Delivery Policy  </Link>
              </li>
            </nav>
          </div>
          {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-orange-600 tracking-widest text-sm mb-3">
              Share App
            </h2>
            <nav className="list-none mb-10 flex justify-center">
               

                <button onClick={shareApp} className='bg-blue-600 text-white flex items-center justify-center gap-2 font-semibold h-8 rounded-full w-[10rem]'>

                  <FaShareSquare className=' text-white' />Share App
                </button>
        

            </nav>
          </div> */}


        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className=" text-black text-sm text-center sm:text-left">
            © 2024 ISKCON Yanam Stores. All rights reserved

          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className=" text-black">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3  text-black">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3  text-black">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="mailto:iskconyanamstores@gmail.com">

              <MdEmail className='text-black ml-3 w-5 h-5' />
            </a>
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer
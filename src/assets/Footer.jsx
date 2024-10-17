import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaShare, FaShareSquare } from 'react-icons/fa';


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
        <div className="flex items-center flex-wrap justify-center gap-2 w-full">
          <a href='/Iskconyanamstores.apk' download="/Iskconyanamstores.apk" className="bg-gray-100 inline-flex text-black py-2 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none lg:w-[12rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 512 512"
            >
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
            </svg>
            <span className="ml-4 flex items-center flex-col leading-none">
              <span className="text-xs text-black mb-1">GET IT ON</span>
              <span className="title-font font-medium">Google Play</span>
            </span>
          </a>
          <a href='/Iskconyanamstores.apk' download="/Iskconyanamstores.apk" className="bg-gray-100 text-black inline-flex py-2 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none lg:w-[12rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 305 305"
            >
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
            </svg>
            <span className="ml-4 flex items-center flex-col leading-none">
              <span className="text-xs text-black mb-1">Download on the</span>
              <span className="title-font font-medium">App Store</span>
            </span>
          </a>
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
                <a className="text-white-600 hover:text-white-800">FAQ</a>
              </li>
              <li>
                <Link to="/contact" className="text-white-600 hover:text-white-800">Returns & Refunds</Link>
              </li>
              <li>
                <a className="text-white-600 hover:text-white-800">Privacy Policy</a>
              </li>
              <li>
                <Link to="/contact" className="text-white-600 hover:text-white-800">Shipping & Delivery</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-orange-600 tracking-widest text-sm mb-3">
              Share App
            </h2>
            <nav className="list-none mb-10 flex justify-center">
               

                <button onClick={shareApp} className='bg-blue-600 text-white flex items-center justify-center gap-2 font-semibold h-8 rounded-full w-[10rem]'>

                  <FaShareSquare className=' text-white' />Share App
                </button>
        

            </nav>
          </div>


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
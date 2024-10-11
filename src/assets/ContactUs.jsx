import React, { useState } from 'react'
import Footer from './Footer'

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      For any Product Delivery & Queries, feel free to reach out to us here. We’re here to help!
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">example@email.com</a>
          <p className="leading-normal my-5">
            49 Smith St.
            <br />
            Saint Cloud, MN 56301
          </p>
          <span className="inline-flex">
            <a className="text-gray-500">
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
            <a className="ml-4 text-gray-500">
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
            <a className="ml-4 text-gray-500">
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
            <a className="ml-4 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="space-y-4">
        {/* Accordion Item 1 */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
          >
            <span className="text-lg font-medium">How do I track my order?</span>
            <span>{activeIndex === 0 ? '-' : '+'}</span>
          </button>
          <div className={`p-4 text-gray-700 ${activeIndex === 0 ? '' : 'hidden'}`}>
            Once your order has been shipped, you will receive an email with your tracking number and a link to track your shipment.
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
          >
            <span className="text-lg font-medium">What if my book arrives damaged?</span>
            <span>{activeIndex === 1 ? '-' : '+'}</span>
          </button>
          <div className={`p-4 text-gray-700 ${activeIndex === 1 ? '' : 'hidden'}`}>
            If your book arrives in less-than-perfect condition, please contact our customer support team within 7 days of receiving your order. We will be happy to assist you with a replacement or refund.
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
          >
            <span className="text-lg font-medium">Can I change or cancel my order?</span>
            <span>{activeIndex === 2 ? '-' : '+'}</span>
          </button>
          <div className={`p-4 text-gray-700 ${activeIndex === 2 ? '' : 'hidden'}`}>
           Once dispatched, we are unable to make changes. Contact our support team as soon as possible if you need assistance.
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(3)}
            className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
          >
            <span className="text-lg font-medium">Do you ship internationally?</span>
            <span>{activeIndex === 3 ? '-' : '+'}</span>
          </button>
          <div className={`p-4 text-gray-700 ${activeIndex === 3 ? '' : 'hidden'}`}>
          Thank you for your interest! Unfortunately, we currently do not offer international shipping. We appreciate your understanding!
              </div>
        </div>

        {/* Accordion Item 5 */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleAccordion(4)}
            className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
          >
            <span className="text-lg font-medium">What if my order is delayed?</span>
            <span>{activeIndex === 4 ? '-' : '+'}</span>
          </button>
          <div className={`p-4 text-gray-700 ${activeIndex === 4 ? '' : 'hidden'}`}>
            While we work with trusted carriers, sometimes delays may occur due to unforeseen circumstances. If your order is delayed beyond the estimated delivery time, please contact us for further assistance.
          </div>
        </div>
      </div>
    </div>


<Footer/>
    </>

  )
}

export default ContactUs
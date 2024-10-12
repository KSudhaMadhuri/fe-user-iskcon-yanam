import React, { useState } from "react";
import Footer from "./Footer";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const ContactUs = () => {
  const api = import.meta.env.VITE_API;

  const [activeIndex, setActiveIndex] = useState(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitSpin, setSubmitSpin] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const formData = {
    to: "iskconyanamstores@gmail.com",
    subject: "ISKCON YANAM STORES Customer product query",
    html: `<h3>Customer Name : ${name}</h3>
    <h3>Customer email : ${email}</h3>
    <h3>Customer message : ${message}</h3>`,
  };
  // sending mail function
  const submitFunc = async (res) => {
    setSubmitSpin(true);
    try {
      const res = await axios.post(`${api}/mail/sendmail`, formData);
      if (res) {
        toast.success(
          "Thank you for reaching out. Our customer service team will be in touch with you shortly."
        );
        setSubmitSpin(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please try again");
      setSubmitSpin(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" theme="dark" />

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-24 pb-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              For any Product Delivery & Queries, feel free to reach out to us
              here. We’re here to help!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    placeholder="Enter your full name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
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
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your query"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                {submitSpin ? (
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submitting...
                  </button>
                ) : (
                  <button
                    onClick={submitFunc}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                )}
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
              <span className="text-lg font-medium">
                How do I track my order?
              </span>
              <span>{activeIndex === 0 ? "-" : "+"}</span>
            </button>
            <div
              className={`p-4 text-gray-700 ${
                activeIndex === 0 ? "" : "hidden"
              }`}
            >
              Once your order has been shipped, you will receive an email with
              your tracking number and a link to track your shipment.
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="border rounded-lg">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-medium">
                What if my book arrives damaged?
              </span>
              <span>{activeIndex === 1 ? "-" : "+"}</span>
            </button>
            <div
              className={`p-4 text-gray-700 ${
                activeIndex === 1 ? "" : "hidden"
              }`}
            >
              If your book arrives in less-than-perfect condition, please
              contact our customer support team within 7 days of receiving your
              order. We will be happy to assist you with a replacement or
              refund.
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="border rounded-lg">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-medium">
                Can I change or cancel my order?
              </span>
              <span>{activeIndex === 2 ? "-" : "+"}</span>
            </button>
            <div
              className={`p-4 text-gray-700 ${
                activeIndex === 2 ? "" : "hidden"
              }`}
            >
              Once dispatched, we are unable to make changes. Contact our
              support team as soon as possible if you need assistance.
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="border rounded-lg">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-medium">
                Do you ship internationally?
              </span>
              <span>{activeIndex === 3 ? "-" : "+"}</span>
            </button>
            <div
              className={`p-4 text-gray-700 ${
                activeIndex === 3 ? "" : "hidden"
              }`}
            >
              Thank you for your interest! Unfortunately, we currently do not
              offer international shipping. We appreciate your understanding!
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="border rounded-lg">
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full text-left p-4 bg-gray-100 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-medium">
                What if my order is delayed?
              </span>
              <span>{activeIndex === 4 ? "-" : "+"}</span>
            </button>
            <div
              className={`p-4 text-gray-700 ${
                activeIndex === 4 ? "" : "hidden"
              }`}
            >
              While we work with trusted carriers, sometimes delays may occur
              due to unforeseen circumstances. If your order is delayed beyond
              the estimated delivery time, please contact us for further
              assistance.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
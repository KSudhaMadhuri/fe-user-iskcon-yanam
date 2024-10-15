import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../App'
import { indianStates } from './states'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'

const Order = () => {
  const api = import.meta.env.VITE_API;
  const { cart, setCart } = useContext(productsContext)
  const [totalAmount, setTotalAmount] = useState("")
  const [paymentImg, setPaymentImg] = useState("")
  const [file, setFile] = useState(null)
  const [uploadSpin, setUploadSpin] = useState(false)
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    orderedBooks: [],
    paymentScreenShot: "",

  });
  console.log(data);

  // products handling function 
  useEffect(() => {
    setData((prevData) => ({
      ...prevData, orderedBooks: cart
    }))
  }, [cart])

  // const input handling function 
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  // caluculating total amount of items 
  useEffect(() => {
    let total = 0
    const totalAm = cart.reduce((acc, item) => {
      return acc + parseInt(item.bookPrice * item.qty)
    }, 0)
    total += totalAm
    setTotalAmount(total)
  }, [cart])

  // payment file handling function 
  const fileHandling = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFile(file)
    }
  }
  // uploading image to cloudinary
  useEffect(() => {
    if (file) {
      uploadImage()
    }
  }, [file])


  const uploadImage = async () => {

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "hi1ox6r7");
    setUploadSpin(true)
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData
      );
      if (response) {
        setData((prevData) => ({ ...prevData, paymentScreenShot: response.data.secure_url }));
        setPaymentImg(response.data.secure_url);
        setUploadSpin(false)

      }
    } catch (error) {
      console.log(error);
      setUploadSpin(false)
      toast.error("please upload payment screenshot again")

    }
  }




  // order function 
  const formFunc = async (e) => {

    e.preventDefault();


    try {
      const response = await axios.post(`${api}/book/createbooks`, data);
      if (response) {

        setData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pin: "",
          orderedBooks: [],
          paymentScreenShot: "",
        });
        setPaymentImg("");
        toast.success("Product uploaded successfully");

      }
    } catch (error) {

      console.log(error);
      toast.success("Please try again");

    }

  };

  useEffect(() => {
    document.title = "Payment and Shipping Address"
  }, [])



  return (
    <>
      <ToastContainer position='top-center'
        theme='dark' />
      <div className="checkout-page mt-10 px-2  pt-10">
        <form className="checkout-container  rounded bg-white " >
          <div className="address-section  flex flex-wrap justify-between ">
            <div>
              <h2 className="font-bold text-orange-600 mb-3">
                PERSONAL DETAILS AND ADDRESS
              </h2>
              <div className="flex flex-col items-center justify-center pb-4">


                <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={data.fullName}
                        onChange={handleInputChange}
                        id="fullName"
                        autoComplete="family-name"
                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Phone"
                        value={data.phone}
                        onChange={handleInputChange}
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleInputChange}
                        type="email"
                        autoComplete="email"
                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent Email address you will receive order details to mail.
                    </p>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      state
                    </label>
                    <div className="mt-2">
                      <select
                        id="state"
                        name="state"
                        value={data.state}
                        onChange={handleInputChange}
                        autoComplete="state-name"
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="">Select a state</option>
                        {indianStates.map((state) => (
                          <option key={state.value} value={state.value}>
                            {state.name}
                          </option>
                        ))}
                      </select>

                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={data.address}
                        onChange={handleInputChange}
                        id="address"
                        autoComplete="street-address"
                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3 ">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={data.city}
                        onChange={handleInputChange}
                        id="city"
                        autoComplete="address-level2"
                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pin"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="pin"
                        placeholder="PIN"
                        value={data.pin}
                        onChange={handleInputChange}
                        id="pin"
                        autoComplete="postal-code"
                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="address-selection sm:flex sm:flex-col w-full sm:w-auto  sm:justify-start ">
              <div className="flex flex-col items-center sm:text-center">
                <h2 className="font-bold  text-orange-600">
                  PAYMENT UPI QR CODE
                </h2>
                {
                  paymentImg ? <img
                    src={paymentImg}
                    alt="receipt"
                    className="mt-5 h-52 w-52 rounded"
                  /> : <img
                    src="/qrcode.jpg"
                    alt="qr_code"
                    className="mt-5 h-52 w-52 rounded"
                  />
                }

                <div class="flex justify-between py-2 pt-4 border-b w-full px-5 ">
                  <span class="text-gray-900">Price ({cart.length} items)</span>
                  <span class="font-semibold text-gray-700">₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>

                <div class="flex justify-between py-4 border-b w-full px-5">
                  <span class="text-gray-900">Delivery Charges</span>
                  <div class="flex items-center">
                    <span class="font-semibold text-gray-700">₹{`${cart.length * 70}`}</span>

                  </div>
                </div>
                <div class="flex justify-between py-4 border-b w-full px-5">
                  <span class="text-gray-900">Packaging Fee</span>
                  <span class="font-semibold text-gray-700">₹{`${cart.length * 15}`}</span>
                </div>
                <h3 className="font-semibold mt-3 text-xl  ">
                  TOTAL COST :
                  <span className="text-black pl-1">₹{totalAmount + cart.length * 70 + cart.length * 15}</span>
                </h3>

                {uploadSpin ? <button
                  disabled
                  className="mt-4  bg-indigo-600 font-semibold text-lg flex justify-center items-center text-white w-36 h-10 rounded"
                >
                  Uploading...
                </button> : <label
                  htmlFor='file'
                  className="mt-4 cursor-pointer bg-indigo-600 font-semibold text-lg flex justify-center items-center text-white w-36 h-10 rounded"
                >
                  Upload
                </label>}
                <input type="file" name='file' id='file' className='hidden' onChange={fileHandling} />

                <div class=" py-3 lg:w-56 px-5">
                  <span className="font-semibold mb-1 mt-2 text-red-600">Please pay the above total amount and upload the payment screenshot to proceed with your order.</span>
                </div>

              </div>
            </div>
          </div>
          <div className="order-section pb-3">
            <h2 className="font-bold mb-4 text-orange-600">
              PRODUCT DETAILS
            </h2>
            <div className="order-section  w-full  border border-gray-400">
              {cart.map((bookItem) => (
                <div
                  key={bookItem._id}
                  className="flex gap-3 overflow-hidden border-b-2 py-3 border-gray-400"
                >
                  <img
                    src={bookItem.bookImage}
                    className="h-[10rem] w-[9rem] rounded"
                    alt="Book 1"
                  />
                  <div>
                    <p className="font-semibold w-full md:w-[10rem] overflow-x-auto">
                      <span className="font-medium hidden  lg:block  text-black pl-1">
                        {bookItem.bookName.substring(0, 20)}
                      </span>
                      <span className="font-medium block lg:hidden  text-black pl-1">
                        {bookItem.bookName.substring(0, 12)}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Price :
                      <span className="font-medium text-black pl-1">
                        ₹{bookItem.bookPrice}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Quantity :
                      <span className="font-medium text-black pl-1">
                        {bookItem.qty}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 mr-4 bg-orange-500 text-white w-full font-bold h-10 rounded"
            >
              PLACE ORDER
            </button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Order
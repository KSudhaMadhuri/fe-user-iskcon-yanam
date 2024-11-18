import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../App'

import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { FaCircleCheck, FaDownload, FaUpload } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import ShippingAddressFprm from './ShippingAddressFprm'

const Order = () => {
  const api = import.meta.env.VITE_API;
  const { cart, setCart } = useContext(productsContext)
  const [totalAmount, setTotalAmount] = useState("")
  // const [paymentImg, setPaymentImg] = useState("")
  // const [file, setFile] = useState(null)
  // const [uploadSpin, setUploadSpin] = useState(false)
  const [orderSpin, setOrderSpin] = useState(false)
  const [orderOk, setOrderOk] = useState(false)
  const [itemsAmount, setItemsAmount] = useState("")
  const [weightCharges, setWeightCharges] = useState("")
  const [gst, setGst] = useState("")
  const [otherWeightCharges, setOtherWeightCharges] = useState("")
  const [otherGst, setOtherGst] = useState("")
  const [payAmount, setPayAmount] = useState("")
  const [deliveryOption, setDeliveryOption] = useState('');
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    orderedBooks: [],
    paymentScreenShot: "0000",
    orderMode: ""
  });



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
    setItemsAmount(total.toFixed(2))

    // caluculating total grams 
    let totalGrams = 30
    const totalBookGrams = cart.reduce((acc, item) => {
      return acc + parseInt(item.bookWeight * item.qty)
    }, 0)

    totalGrams += totalBookGrams
    const gramsAmount = totalGrams / 100
    setWeightCharges(gramsAmount.toFixed(2))
    const postAndGrams = gramsAmount + 17
    const amountWithGst = postAndGrams * 1.18
    setGst((amountWithGst - postAndGrams).toFixed(2))
    const totalAmountWithCharges = total + amountWithGst + 16


    // calculating for book and other items charges 
    const baseGrams = 500
    const basePirce = 19
    const postCharges = 17
    const coverCharges = 16
    const extraCharges = 16

    const removedGrams = totalGrams > baseGrams ? totalGrams - baseGrams : false
    const remGrams = removedGrams === false ? 1 : removedGrams / 500
    const roundNum = remGrams <= 1 ? 1 : remGrams
    const roundedNumber = Math.ceil(roundNum);
    const multipleAmount = roundedNumber === 1 ? false : roundedNumber * extraCharges
    const addingAllPrices = multipleAmount === false ? basePirce + postCharges : multipleAmount + basePirce + postCharges
    setOtherWeightCharges((multipleAmount + basePirce).toFixed(2))
    const withGst = addingAllPrices * 1.18
    const showGst = withGst - addingAllPrices
    setOtherGst(showGst.toFixed(2))
    const finalAmount = (total + withGst + coverCharges).toFixed(2)
    const itemType = cart.some((item) => item.itemType === "other")

    if (itemType === true) {
      setTotalAmount(finalAmount)
    } else if (itemType === false) {
      setTotalAmount(totalAmountWithCharges.toFixed(2))
    }

  }, [cart])


  // // payment file handling function 
  // const fileHandling = (event) => {
  //   const file = event.target.files[0]
  //   if (file) {
  //     setFile(file)
  //   }
  // }

  // // uploading image to cloudinary
  // useEffect(() => {
  //   if (file) {
  //     uploadImage()
  //   }
  // }, [file])


  // const uploadImage = async () => {
  //   const formData = new FormData()
  //   formData.append("file", file)
  //   formData.append("upload_preset", "hi1ox6r7");
  //   setUploadSpin(true)
  //   try {
  //     const response = await axios.post(
  //       `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME
  //       }/image/upload`,
  //       formData
  //     );
  //     if (response) {
  //       setData((prevData) => ({ ...prevData, paymentScreenShot: response.data.secure_url }));
  //       setPaymentImg(response.data.secure_url);
  //       setUploadSpin(false)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setUploadSpin(false)
  //     toast.error("please upload payment screenshot again")
  //   }
  // }

  // order mode radio input handling function 
  const handleOptionChange = (event) => {
    const mode = event.target.value
    setData((prevData) => ({
      ...prevData, orderMode: mode
    }))

    setDeliveryOption(mode);
    if (mode === "takeaway") {
      toast("Pickup address will be sent via email and can also be found on the Contact Us page of our website")
    } else {
      toast("You Order will be delivered to your address")
    }
  };

  // razorepay script tag including dynamically in head tag 
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script)
  //   }

  // }, []);


  useEffect(() => {
    const totalAmountValue = deliveryOption === "takeaway" ? itemsAmount : totalAmount;
    const amountInPaisa = totalAmountValue * 100
    const exactAmountInPaisa = Math.round(amountInPaisa)
    setPayAmount(exactAmountInPaisa)
  }, [deliveryOption, cart])

  const totalAmountValue = deliveryOption === "takeaway" ? itemsAmount : totalAmount;

  const emailData = {
    to: `${data.email}, iskconyanamstores@gmail.com`,
    subject: "ISKCON YANAM STORES Order Placed Successfully",
    html: `
      <h3>Dear ${data.fullName},</h3>
      <p>Thank you for your order! Below are the details of your Shipping Address:</p>
      <h4>Address Details:</h4>
      <ul>
        <li><strong>City :</strong> ${data.city}</li>
        <li><strong>Phone :</strong> ${data.phone}</li>
        <li><strong>Address :</strong> ${data.address} ${data.pin}</li>
        <li><strong>State :</strong> ${data.state}</li>
      </ul>
      <h4 style="font-weight: bold; margin-bottom: 4px;">
        Product Details :
      </h4>
      <div style="width: 100%; border: 1px solid gray;">
        ${cart.map(bookItem => `
          <div key="${bookItem._id}" style="display: flex; gap: 12px; border-bottom: 2px solid gray; padding: 12px;">
            <img
              src="${bookItem.bookImage}"
              style="height: 10rem; width: 9rem; border-radius: 8px;"
              alt="Book"
            />
            <div style="padding-left:10px;">
              <p style="font-weight: 600; width: 100%; overflow-x: auto;">
                <span style="font-weight: 500; display: block; color: black;">
                  ${bookItem.bookName.substring(0, 20)}
                </span>
              </p>
              <p style="font-weight: 600;">
                Price :
                <span style="font-weight: 500; color: black; padding-left: 4px;">
                  ₹${bookItem.bookPrice}
                </span>
              </p>
              <p style="font-weight: 600;">
                Quantity :
                <span style="font-weight: 500; color: black; padding-left: 4px;">
                  ${bookItem.qty}
                </span>
              </p>
            </div>
          </div>
        `).join('')}
      </div>
      <h4>Payment Details</h4>
      <h3><strong>Total Amount :</strong> ₹${totalAmountValue}</h3>
      <ul>
        <li><strong>Total Items:</strong> ${cart.length}</li>
         <li><strong>Order Mode:</strong> ${deliveryOption}</li>
      </ul>

<h3>IskconYanamStores Address:</h3>
      <ul>
      <li><strong>Mobile :</strong> <a href="tel:+918500961256"> +918500961256</a></li>
      <li><strong>Address :</strong> Door No : 7-1-038,
                    Pydikondala Street,
                    YANAM, Puducherry 533464</li>
        <li><strong>Email :</strong> iskconyanamstores@gmail.com</li>
        <li><strong>Google Map Location :</strong> <a href="https://maps.app.goo.gl/XYBA4iZCu7dXdNMP6">Location</a></li>
      </ul>

      <h3>Customer Information:</h3>
      <ul>
      <li><strong>Name :</strong> ${data.fullName}</li>
      <li><strong>Email :</strong> ${data.email}</li>
      </ul>
      <p>If you have any questions, feel free to contact us at iskconyanamstores@gmail.com.</p>
      <p>Thank you for shopping with ISKCON YANAM STORES!</p>
      <a href="https://iskconyanamstores.netlify.app">Continue Shopping</a>
    `,
  };


  // // razorpay function 
  // const formFunc = async (e) => {
  //   e.preventDefault();
  //   const options = {
  //     key: import.meta.env.VITE_RAZOREPAY_API_KEY,
  //     amount: payAmount,
  //     currency: "INR",
  //     // name: "Your Company Name",
  //     // description: "Product Description",
  //     handler: function (response) {

  //       if (response) {
  //         setData((prev) => ({
  //           ...prev, paymentScreenShot: response.razorpay_payment_id
  //         }))
  //         setOrderSpin(true)

  //       }
  //     },
  //     modal: {
  //       ondismiss: function () {
  //         toast.error("Payment was not completed. Please try again.");
  //       },
  //     },
  //     prefill: {
  //       name: data.fullName,
  //       email: data.email,
  //       contact: data.phone,
  //     },

  //   };

  //   const razorpay = new window.Razorpay(options);
  //   razorpay.open();

  // };

  // // useEffect to trigger placeOrdersFunc after paymentScreenShot is set
  // useEffect(() => {
  //   if (data.paymentScreenShot) {
  //     placeOrdersFunc();
  //   }
  // }, [data.paymentScreenShot]);



  // order placing function
  const formFunc = async (e) => {
    e.preventDefault()
    const isOk = confirm("Order will be placed, are you sure ?")
    if (isOk) {
      setOrderSpin(true)

      try {
        const response = await axios.post(`${api}/order/placeorder`, data);
        if (response) {
          // calling mail function
          sendMailFunction()
        }
      } catch (error) {
        console.log(error);
        toast.error("Please try again");
        setOrderSpin(false)
      }
    }
  }

  // mail sending 
  const sendMailFunction = async () => {
    try {
      const res = await axios.post(`${api}/mail/sendmail`, emailData);
      if (res) {
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

        setCart([])
        localStorage.removeItem("cart")
        setOrderSpin(false)
        setOrderOk(true)
      }
    } catch (error) {
      console.log(error);
      toast.error("Please try again");
      setOrderSpin(false)
    }
  }

  useEffect(() => {
    document.title = "Payment and Shipping Address"
  }, [])

  return (
    <>
      <ToastContainer position='top-center'
        theme='dark' />
      <div className="checkout-page mt-10 px-2  pt-10">
        <form onSubmit={formFunc} className="checkout-container  rounded bg-white " >
          <div className="address-section order-2 flex flex-wrap lg:order-none justify-between ">

            <ShippingAddressFprm
              fullName={data.fullName}
              email={data.email}
              phone={data.phone}
              address={data.address}
              city={data.city}
              state={data.state}
              pin={data.pin}
              handleInputChange={handleInputChange}
              handleOptionChange={handleOptionChange} />

            <div className="address-selection  sm:flex sm:flex-col w-full sm:w-auto  sm:justify-start ">
              <div className="flex flex-col sm:w-[16rem] md:w-[17rem]  items-center sm:text-center">
                <h2 className="font-bold  text-orange-600">
                  PAYMENT DETAILS
                </h2>


                <img
                  src="/qrcode.jpg"
                  alt="qr_code"
                  className="mt-5 h-52 w-52 rounded"
                />

                <h6 className='text-blue-600 font-semibold'>PAY TO THIS NUMBER</h6>
                <span className='font-bold'>8500961256</span>
                <a href="/qrcode.jpg" className=' animate-bounce text-md font-semibold px-3 h-[2.5rem] mt-6 flex items-center gap-2 rounded-full text-white bg-orange-600' download="/qrcode.jpg"><FaDownload />Download QR Code</a>

                {/* both book and other items charges section  */}
                {cart.some((item) => item.itemType === "other") ? <>

                  <div class="flex justify-between  py-2 pt-4 border-b w-full px-5 ">
                    <span class="text-gray-900">Price ({cart.length} items)</span>
                    <span class="font-semibold text-gray-700">₹{itemsAmount.toLocaleString("en-IN")}</span>
                  </div>

                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">Weight Charges</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : `${otherWeightCharges.toLocaleString("en-IN")}`}</span>

                    </div>
                  </div>
                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">Post Charges</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : "17"}</span>

                    </div>
                  </div>
                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">GST 18%</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : `${otherGst.toLocaleString("en-IN")}`}</span>

                    </div>
                  </div>
                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">Packaging Charges</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : "16"}</span>

                    </div>
                  </div>
                  <h3 className="font-semibold mt-3 text-xl  ">
                    TOTAL COST :
                    <span className="text-black pl-1">₹{deliveryOption === "takeaway" ? `${itemsAmount.toLocaleString("en-IN")}` : `${totalAmount.toLocaleString("en-IN")}`}</span>
                  </h3>
                  <h5 className='mt-2'><span className='font-bold text-red-500'>Note : </span>Orders will be processed only after full payment. Please upload the payment receipt to WhatsApp at <a href='https://wa.me/8500961256
' className='text-green-700 font-bold'>8500961256</a> on the same day of the order.

                  </h5>
                  <button type='submit' className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white w-full font-bold h-12 rounded-full"
                  >
                    PLACE ORDER
                  </button>
                  {/* only book item charges section */}

                </> : <><div class="flex justify-between py-2 pt-4 border-b w-full px-5 ">
                  <span class="text-gray-900">Price ({cart.length} items)</span>
                  <span class="font-semibold text-gray-700">₹{itemsAmount.toLocaleString("en-IN")}</span>
                </div>

                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">Weight Charges</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : `${weightCharges.toLocaleString("en-IN")}`}</span>

                    </div>
                  </div>
                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">Post Charges</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : "17"}</span>

                    </div>
                  </div>
                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">GST 18%</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : `${gst.toLocaleString("en-IN")}`}</span>

                    </div>
                  </div>
                  <div class="flex justify-between py-3 border-b w-full px-5">
                    <span class="text-gray-900">Packaging Charges</span>
                    <div class="flex items-center">
                      <span class="font-semibold text-gray-700">₹{deliveryOption === "takeaway" ? "0" : "16"}</span>

                    </div>
                  </div>
                  <h3 className="font-semibold mt-3 text-xl  ">
                    TOTAL COST :
                    <span className="text-black pl-1">₹{deliveryOption === "takeaway" ? `${itemsAmount.toLocaleString("en-IN")}` : `${totalAmount.toLocaleString("en-IN")}`}</span>
                  </h3>

                  <button type='submit' className="mt-4  bg-yellow-500 hover:bg-yellow-700 text-white w-full font-bold h-12 rounded-full"
                  >
                    PLACE ORDER
                  </button>
                </>
                }

                {/* {uploadSpin ? <button
                  disabled
                  className="mt-4  bg-indigo-600 font-semibold text-lg flex justify-center items-center text-white w-36 h-10 rounded-full"
                >
                  Uploading...
                </button> : <label
                  htmlFor='file'
                  className="mt-4 cursor-pointer bg-indigo-600 font-semibold text-lg flex justify-center items-center gap-2 text-white w-[13rem] h-10 rounded-full"
                >
                  <FaUpload size={16} /> Upload ScreenShot
                </label>}
                <input type="file" name='file' id='file' className='hidden' onChange={fileHandling} />

                <div class=" py-3 lg:w-56 px-5">
                  <span className="font-semibold mb-1 mt-2 text-red-600">Please pay the above total amount and upload the payment screenshot to proceed with your order.</span>
                </div> */}

              </div>
            </div>
          </div>
          <div className="order-section order-1 lg:order-none pb-1">
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
                    <p className="font-semibold w-full md:w-[13rem] overflow-x-auto">
                      <span className="font-medium hidden  lg:block  text-black  ">
                        {bookItem.bookName.substring(0, 20)}
                      </span>
                      <span className="font-medium block lg:hidden  text-black  ">
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


          </div>
        </form>
      </div>


      {/* order  progress spinner  */}
      {orderSpin && <div className='fixed flex justify-center h-screen w-screen items-center top-0 left-0 bg-gray-800 opacity-85'>
        <div
          className="border-t-4 border-solid rounded-full w-12 h-12 animate-spin"
          style={{
            borderWidth: '7px',
            borderColor: 'white',
            borderTopColor: 'blue',
            borderStyle: 'solid',
          }}
        ></div>
      </div>}

      {/* order placed card  */}
      {orderOk && <div className='px-5 fixed flex justify-center h-screen w-screen items-center top-0 left-0 bg-white text-black'>
        <div className='text-center flex flex-col items-center justify-center'>
          <FaCircleCheck size={150} className='text-green-500' />
          <h2 className="text-black text-2xl mt-4">Order Placed Successfully!</h2>
          <p className="text-black text-lg mt-2">
            You will receive the order details in your email.
          </p>
          <Link to="/" className="text-blue-700 font-semibold">Continue Shopping</Link>
        </div>

      </div>}

    </>
  )
}

export default Order
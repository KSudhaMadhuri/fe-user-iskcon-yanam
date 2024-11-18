import React from 'react'
import { indianStates } from './states'


const ShippingAddressFprm = ({ fullName, email, phone, address, city, state, pin, handleInputChange, handleOptionChange }) => {


    return (
        <>
            <div className=''>
                <h2 className="font-bold text-orange-600 mb-2">
                    ORDER MODE
                </h2>
                <h5 className='font-semibold mb-2 mt-3'>How would you like to receive your books?</h5>
                <div className='pb-3 flex items-center justify-between flex-wrap'>
                    <div className='flex items-center  gap-2'>
                        <input required type="radio" onChange={handleOptionChange} id="takeaway" name="deliveryOption" className="form-radio  h-4 w-4 text-blue-600" value="takeaway" />
                        <label for="takeaway" className='font-semibold text-gray-600 mb-[0.12rem]'>Take Away (Pickup)</label><br />
                    </div>
                    <div className='flex items-center gap-2'>
                        <input required type="radio" onChange={handleOptionChange} id="delivery" name="deliveryOption" className="form-radio  h-4 w-4 text-blue-600" value="delivery" />
                        <label for="delivery" className='font-semibold text-gray-600 mb-[0.12rem]'>Order Delivery</label><br />
                    </div>
                </div>

                <h2 className="font-bold text-orange-600 mt-2 mb-3">
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
                                    required
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={fullName}
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
                                    required
                                    type="text"
                                    placeholder="Phone"
                                    value={phone}
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
                                    required
                                    placeholder="Email"
                                    value={email}
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
                                    required
                                    value={state}
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
                                    required
                                    placeholder="Address"
                                    value={address}
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
                                    required
                                    placeholder="City"
                                    value={city}
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
                                    required
                                    placeholder="PIN"
                                    value={pin}
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
        </>
    )
}

export default ShippingAddressFprm
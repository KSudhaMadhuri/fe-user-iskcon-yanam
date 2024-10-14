import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products (mock data in this example)
  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: "Product 1",
        price: 29.99,
        image: "krishna.jpg",
      },
      {
        id: 2,
        name: "Product 2",
        price: 39.99,
        image: "LifeDeath.jpg",
      },
      {
        id: 3,
        name: "Product 3",
        price: 19.99,
        image: "BG.jpg",
      },
      {
        id: 4,
        name: "Product 1",
        price: 29.99,
        image: "japakit.jpg",
      },
      {
        id: 5,
        name: "Product 2",
        price: 39.99,
        image: "parampara3.jpg",
      },
      {
        id: 6,
        name: "Product 3",
        price: 19.99,
        image: "sakhi.png",
      },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <>
      <Carousel />
      {/* <div className="mx-auto max-w-2xl px-4  sm:px-3  lg:max-w-7xl lg:px-10"> */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-l from-violet-800 to-yellow-600  ">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center my-8">Our Products</h1>

        {/* Products Grid */}
        <div className="bg-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="  mt-10 flex flex-col justify-center items-center gap-2   max-w-xs bg-gray-300 shadow-lg rounded-lg p-5 "
            >
            {/* <div className="bg-red-100 p-5 h-full w-full m-auto"> */}
              <div className=" p-5 bg-gradient-to-r from-violet-800 to-yellow-600   flex justify-center items-center aspect-w-26 aspect-h-6  ">
                {/* Product Image */}
                <img
                  className="  object-contain "
                  src={product.image}
                  alt={product.name}
                />
              {/* </div> */}
              </div>
              {/* Product Details */}
              <div className="bg-indigo-300 w-full p-4">
                <h3 className="text-gray-900 font-bold text-lg">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">${product.price}</p>
                <button className="mt-4 bg-gradient-to-r from-violet-800 to-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;

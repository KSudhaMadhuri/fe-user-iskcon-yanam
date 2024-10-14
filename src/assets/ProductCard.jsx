// ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-lg">{product.name}</h3>
        <p className="mt-2 text-gray-600">${product.price}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

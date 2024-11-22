import { TiDeleteOutline } from "react-icons/ti";
import React from 'react';

const Cart = ({ product, onRemove }) => {
  return (
    <div className='w-full md:w-5/6 mx-auto'>
      <div className="flex flex-col md:flex-row items-center p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50 p-4">
        <img className="w-36 h-28 md:w-36 md:h-28 rounded-lg mb-4 md:mb-0" src={product.product_image} alt="" />
        <div className="bg-gray-300 rounded-md mr-4 md:mr-4" />
        
        <div className="flex-1 text-center md:text-left">
          <p className="font-semibold text-gray-800 text-xl md:text-2xl mb-3">{product.product_title}</p>
          <p className="text-gray-500 text-sm">Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
          <p className="font-semibold text-gray-800 mt-3">Price: ${product.price}</p>
        </div>
        
        <button 
          onClick={onRemove} 
          className="text-red-500 hover:text-red-700 text-xl font-bold ml-4 md:ml-4 mt-4 md:mt-0"
        >
          <p className="text-4xl"><TiDeleteOutline /></p>
        </button>
      </div>
    </div>
  );
};

export default Cart;



import { TiDeleteOutline } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";
import { addToStoredCart, getStoredCart } from "../Utilities/AddToLocalStorage";
import { useEffect, useState } from "react";
const WishlistCard = ({ item, onRemove }) => {

  const [product, setProduct] = useState(null)

  useEffect(()=>{
    const singleProduct = item;
    setProduct(singleProduct);
  },[item])

  useEffect(() => {
    const storedCart = getStoredCart();
    setProduct(storedCart);
  }, []);

  const handleAddToCart = (product) =>{
    addToStoredCart(product);
    
  }

  return (
    <div className="w-5/6 mx-auto mt-10">
      <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50 p-4">
    <img className="w-36 h-28 rounded-lg" src={item.product_image} alt="" />
      <div className=" bg-gray-300 rounded-md mr-4" />
     
      <div className="flex-1">
        <p className="font-semibold text-gray-800 text-2xl mb-3">{item.product_title}</p>
        <p className="text-gray-500 text-sm">Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
        <p className="font-semibold text-gray-800 mt-3">Price: ${item.price}</p>
        <button onClick={()=>handleAddToCart(product)} className="bg-purple-500 btn text-white px-5 py-2 mt-4 rounded-full font-semibold hover:bg-purple-500">
              Add To Cart <BsCart4 />
            </button>
        
      </div>
      
 
      <button 
        onClick={onRemove} 
        className="text-red-500 hover:text-red-700 text-xl font-bold ml-4"
      >
        <p className="text-4xl"><TiDeleteOutline /></p>
      </button>
    </div>
    </div>
  );
};

export default WishlistCard;
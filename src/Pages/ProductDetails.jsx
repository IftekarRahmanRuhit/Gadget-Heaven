
import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { addToStoredCart, addToStoredWishList } from "../Utilities/AddToLocalStorage"
import { GiSelfLove } from "react-icons/gi";
import { BsCart4 } from "react-icons/bs";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isWishListDisabled, setIsWishListDisabled] = useState(false);
  useEffect(() => {
    const singleProduct = data.find((product) => product.id === id);
    setProduct(singleProduct);
  }, [data, id]);

  if (!product) return <p>Error 404</p>;

  const handleAddToCart = (product) =>{
    addToStoredCart(product);
    
  }


  const handleAddToWishList = (product) =>{
    addToStoredWishList(product);
    setIsWishListDisabled(true);
  }


  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-purple-500 p-5 relative">
        <p className="text-center font-bold text-white text-4xl">Product Details</p>
        <p className="text-center text-white mt-5 mb-36">
          Discover the latest gadgets designed to elevate your experience. From innovative smart devices <br /> 
          to must-have accessories, we offer everything you need to stay ahead!
        </p>
      </div>

      <div className="w-4/5 mx-auto p-5 bg-white rounded-lg shadow-xl mt-10 relative bottom-36">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full md:w-full p-3">
            <img src={product.product_image} alt='' className="rounded-lg h-[242px] w-[424px]" />
          </div>
          <div className="w-full p-3">
            <h2 className="text-3xl font-bold mb-2">{product.product_title}</h2>
            <p className="text-xl text-gray-700 font-semibold mb-2">Price: ${product.price}</p>
            <span className={`inline-block px-3 py-1 rounded-full text-white font-bold ${product.availability ? 'bg-green-500' : 'bg-red-500'}`}>
              {product.availability ? "In Stock" : "Out of Stock"}
            </span>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Specification:</h3>
              <ol className="list-decimal list-inside text-gray-600 mt-2">
                {product.specification && product.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ol>
            </div>

            <div className="flex items-center mt-4">
              <p className="text-gray-700 font-semibold mr-2 text-xl mb-1">Rating:</p>

              
            </div>
            <div>
            <span className="text-yellow-600 text-xl">&#9733;&#9733;&#9733;&#9733;&#9733; {product.rating}</span>
            </div>

            <button onClick={()=>handleAddToCart(product)} className="bg-purple-500 btn text-white px-5 py-2 mt-4 rounded-full font-semibold hover:bg-purple-500">
              Add To Cart <BsCart4 />
            </button>
            <button onClick={()=>handleAddToWishList(product)} className="ml-2 btn bg-purple-200 cursor-pointer  text-black px-5 py-2 mt-4 rounded-full font-bold" disabled={isWishListDisabled} >
             <GiSelfLove />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

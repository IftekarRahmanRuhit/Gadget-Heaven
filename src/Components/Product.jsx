import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, product_title, product_image, price } = product;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border space-y-3 transition hover:scale-105 overflow-hidden">
      <img className="w-full h-36 object-cover rounded-md" src={product_image} alt={product_title} />
      <p className="text-lg font-semibold">{product_title}</p>
      <p className="text-gray-500">Price: ${price}</p>
      <Link to ={`/product/${id}`}> <button className="px-4 py-2 mt-3 border-2 border-purple-500 text-purple-500 font-medium rounded-full hover:bg-purple-500 hover:text-white transition">
        View Details
      </button> 
      </Link>
    </div>
  );
}

export default Product;
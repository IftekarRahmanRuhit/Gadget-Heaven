import ModalImage from "../../public/Group.png";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  getStoredCart,
  getStoredWishList,
  removeCart,
  removeWishlist,
} from "../Utilities/AddToLocalStorage";
import { FiBarChart2 } from "react-icons/fi";
import Cart from "../Components/Cart";
import WishlistCard from "../Components/WishlistCard";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [modalTotal, setModalTotal] = useState(0);

  useEffect(() => {
    const storedCart = getStoredCart();
    setProduct(storedCart);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    setWishlistItems(storedWishList);
  }, []);

  const totalPrice = product.reduce((total, item) => total + item.price, 0);

  const clearCart = () => {
    setProduct([]);
    localStorage.removeItem("cart");
  };

  const removeCartItem = (id) => {
    const updatedProduct = product.filter((item) => item.id !== id);
    setProduct(updatedProduct);
    removeCart(id);

    toast.success("Item Removed From Cart");
  };

  const removeWishlistItem = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    removeWishlist(id);
    toast.success("Item Removed From Wishlist");
  };

  const sortByPrice = () => {
    const sortedProducts = [...product].sort((a, b) => b.price - a.price);
    setProduct(sortedProducts);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-[#9538E2] p-8">
        <h1 className="text-center font-bold text-3xl mt-3 text-white">
          Dashboard
        </h1>
        <p className="text-center mt-3 text-white">
          Discover cutting-edge gadgets to elevate your experience. From
          innovative smart devices to essential accessories, <br /> our
          collection offers everything you need to stay ahead!
        </p>

        <div className="flex justify-center gap-4 mt-5">
          <div>
            <button
              onClick={() => setShowWishlist(false)}
              className={`btn px-7 rounded-full hover:bg-white hover:text-purple-500  ${
                !showWishlist
                  ? "bg-white text-purple-600"
                  : "bg-[#9538E2] text-white font-bold"
              }`}
            >
              Cart
            </button>
          </div>

          <div>
            <button
              onClick={() => setShowWishlist(true)}
              className={`btn rounded-full px-7 hover:bg-white hover:text-purple-500  ${
                showWishlist
                  ? "bg-white text-purple-600"
                  : "bg-[#9538E2] text-white font-bold"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {!showWishlist && (
        <div className="w-full sm:w-5/6 mx-auto flex items-center justify-between py-4 mt-3 mb-3">
          <h2 className="font-semibold text-2xl sm:text-3xl">Cart</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Total cost: ${totalPrice}
            </h2>
            <button
              onClick={sortByPrice}
              className="px-4 py-2 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-100 transition font-bold"
            >
              <p className="flex items-center font-semibold text-purple-500 gap-1">
                Sort by Price <FiBarChart2 />
              </p>
            </button>

            <button
              onClick={() => {
                setModalTotal(totalPrice);
                document.getElementById("my_modal_5").showModal();
                clearCart();
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-b from-[#862eda] via-[#a33de4] to-[#e464e4] text-white"
            >
              Purchase
            </button>
          </div>
        </div>
      )}

      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img className="mx-auto mt-2" src={ModalImage} alt="" />
          <h3 className="font-bold text-2xl text-center mt-4">
            Payment Successfull
          </h3>
          <p className="w-4/5 mx-auto mt-5">
            <hr />
          </p>

          <p className="text-xl font-bold text-center mt-5">
            Thanks for pusrchasing
          </p>
          <p className="font-bold text-center mt-3 text-xl">
            Total : <span className="text-purple-600">${modalTotal}</span>
          </p>

          <div className="modal-action">
            <form className="w-full text-center" method="dialog">
              <Link to="/">
                <button className="btn w-4/5 bg-purple-600 text-white hover:bg-purple-500">
                  Close
                </button>
              </Link>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        {showWishlist
          ? wishlistItems.map((item) => (
              <WishlistCard
                key={item.id}
                item={item}
                onRemove={() => removeWishlistItem(item.id)}
              />
            ))
          : product.map((product) => (
              <Cart
                key={product.id}
                product={product}
                onRemove={() => removeCartItem(product.id)}
              />
            ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;

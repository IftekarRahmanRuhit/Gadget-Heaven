
import { useEffect, useState } from "react";
import { getStoredWishList } from "../Utilities/AddToLocalStorage";
import WishlistCard from "../Components/WishlistCard";

const Wishlist = () => {
  const [wp, setWp] = useState([]);  

  useEffect(() => {
    const storedWishList = getStoredWishList()
    setWp(storedWishList);
    console.log(storedWishList);

  },[])

  return (
    <div>
      {
        wp.map((item) => (
          <WishlistCard key={item.id} item={item} /> 
        ))
      }
    </div>
  );
};

export default Wishlist;





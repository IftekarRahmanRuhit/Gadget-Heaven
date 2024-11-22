
import toast from "react-hot-toast";

const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    } else {
        return [];
    }
};

const addToStoredCart = (product) => {
    const storedCart = getStoredCart();
    const existingProduct = storedCart.find(item => item.id === product.id);

    if (existingProduct) {
        toast.error('Item Already Exists');
    } else {
        storedCart.push(product);
        localStorage.setItem('cart', JSON.stringify(storedCart));
        toast.success('Item Added To Cart');
    }
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
};

const addToStoredWishList = (product) => {
    const storedWishList = getStoredWishList();
    const existingProduct = storedWishList.find(item => item.id === product.id);

    if (existingProduct) {
        toast.error('Item Already Exists');
    } else {
        storedWishList.push(product);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success('Item Added To Wishlist');
    }
};


const removeCart = (id) => {
    const storedCart = getStoredCart();
    const remainingCart = storedCart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(remainingCart));
    
};

const removeWishlist = (id) =>{
    const storedWishList = getStoredWishList();
    const remainingWishList = storedWishList.filter(product => product.id != id);
    localStorage.setItem('wish-list', JSON.stringify(remainingWishList));

}

export { addToStoredCart, addToStoredWishList, getStoredCart, getStoredWishList, removeCart, removeWishlist };
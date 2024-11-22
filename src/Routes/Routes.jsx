
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/DashBoard";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../Categories.json'),
        children: [
          {
            path: '/category/:category',
            element: <Products></Products>,
            loader: () => fetch('../Products.json')
          },
          {
            path: '/',
            element: <Products></Products>,
            loader: () => fetch('../Products.json')
          }
        ],
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('../Products.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
        
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'cart', 
            element: <Cart></Cart>
          },
          {
            path: 'wishlist', 
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../Products.json')
      }
    ],
  },
]);

export { routes };

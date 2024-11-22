import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Toaster } from 'react-hot-toast';



const Mainlayout = () => {
  return (
    <div>
      <Toaster />
        <Navbar></Navbar>

        <div className="min-h-[calc(100vh-268px)]">
        <Outlet></Outlet>
        </div>

        <Footer></Footer>

      


    </div>
  )
}

export default Mainlayout
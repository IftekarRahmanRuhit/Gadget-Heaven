import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import logo from '../../public/banner.jpg'
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const Titles = {
      "/": "Home | Gadget Heaven",
      "/Statistics": "Statistics | Gadget Heaven",
      "/dashboard": "Dashboard | Gadget Heaven",
      "/contact": "Contact | Gadget Heaven",
    };
    document.title = Titles[location.pathname] || "Gadget Heaven";
  }, [location.pathname]);


  return (
    <div className="w-11/12 mx-auto mt-4 max-w-screen-2xl">
      <div
        className={`navbar ${
          location.pathname === "/" 
            ? "bg-[#9538E2] text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-6 h-6 rounded-full" src={logo} alt="" />
            <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  location.pathname === "/" ? "text-white" : "text-black"
                } ${
                  isActive ? "bg-[#1f1f1f] text-white" : "text-black"
                } rounded-lg px-4 py-2 hover:bg-[#1f1f1f] hover:text-white`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Statistics"
              className={({ isActive }) =>
                `${
                  location.pathname === "/" ? "text-white" : "text-black"
                } ${
                  isActive ? "bg-[#1f1f1f] text-white" : "text-black"
                } rounded-lg px-4 py-2 hover:bg-[#1f1f1f] hover:text-white`
              }
            >
              Statistics
            </NavLink>
            <NavLink
            
              to="/dashboard"
              className={({ isActive }) =>
                `${
                  location.pathname === "/" ? "text-white" : "text-black"
                } ${
                  isActive ? "bg-[#1f1f1f] text-white" : "text-black"
                } rounded-lg px-4 py-2 hover:bg-[#1f1f1f] hover:text-white`
                
              }
              
            >
              Dashboard
            
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  location.pathname === "/" ? "text-white" : "text-black"
                } ${
                  isActive ? "bg-[#1f1f1f] text-white" : "text-black"
                } rounded-lg px-4 py-2 hover:bg-[#1f1f1f] hover:text-white`
              }
            >
              Contact Us
            
            </NavLink>

            


          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-[#9538E2]"> Items</span>
                <span className="font-bold text-[#9538E2]">Subtotal: </span>
                <div className="card-actions">
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="btn bg-[#9538E2] text-white btn-block hover:bg-[#9538E2] btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
              <p className="text-xl"><GiSelfLove /></p>
             
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-[#9538E2]"></span>
                <span className="font-bold text-[#9538E2]">Subtotal:</span>
                <div className="card-actions">
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="btn bg-[#9538E2] text-white btn-block hover:bg-[#9538E2]"
                  >
                    View Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

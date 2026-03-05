import { LucideSearch } from "lucide-react";
import DropDown from "./ui/DropDown";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
type user = {
  _id: string
  username: string
  email: string
  token: string
}
const Navbar = ({user,setUser}: {user: user | null, setUser: React.Dispatch<React.SetStateAction<user | null>>}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ added
  
  const navigate= useNavigate()
  const handleLogout = () => {
  localStorage.removeItem("token")
  setUser(null)
  navigate('/');
}
  return (
    <div className=" border-1 w-full fixed top-0 left-0 h-16 flex items-center bg-white z-50 px-6 ">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <img
          src="/assets/images/logo.svg"
          alt="Logo"
          className="hidden md:block h-8 cursor-pointer"
        />
        <img
          src="/assets/icons/logo.svg"
          alt="mobile_logo"
          className="w-10 h-10 cursor-pointer md:hidden"
        />
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-md">
            <LucideSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18} 
            />
            <input
              type="text"
              placeholder="Search in products..."
              className="w-full pl-10 pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-full bg-gray-100 shadow-sm outline-none text-xs sm:text-sm"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <div>
            {user ? (
              <button onClick={handleLogout} className="text-black">Logout</button>            ) : (
              <>
               <Link className="mx-2 hover:underline" to="/login">Login</Link>
               <Link className="mx-2 hover:underline" to="/register">Register</Link>
              </>
            )
          }
          </div>

      
          <div className="relative"
            onMouseEnter={() => !user && setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            <img
              src="/assets/icons/user-btn.svg"
              alt="user"
              className="h-6 w-6 cursor-pointer"
            />
            {showPopup && !user && (
              <div className="absolute right-0 top-8 w-52 bg-white border border-gray-200 rounded-xl shadow-lg p-4 flex flex-col gap-2 z-50">
                <p className="text-xs text-gray-500 text-center">Don't have an account?</p>
                <Link to="/register" className="w-full text-center bg-black text-white text-sm py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                  Register
                </Link>
                <Link to="/login" className="w-full text-center border border-gray-300 text-sm py-1.5 rounded-full hover:bg-gray-100 transition-colors">
                  Login
                </Link>
              </div>
            )}
          </div>
          

          <img
            src="/assets/icons/cart.svg"
            alt="cart"
            className="h-8 w-8 cursor-pointer"
          />
        </div>
        <div className="flex md:hidden ml-auto">
          <DropDown
          isOpen={isOpen}
           onOpenChange={setIsOpen}
            trigger={
              <button>
                <img
                 src={isOpen ? "/assets/icons/close.png" : "/assets/icons/hamburger-menu.svg"}
                  alt="menu"
                  className="h-8 w-8"
                />
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
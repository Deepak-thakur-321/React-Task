import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
   const cartItems = useSelector(state => state.cart.items);
   const cartCount = useSelector(state => state.cart.count);

   return (
      <nav className="bg-gray-900 text-white shadow-md">
         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide cursor-pointer">
               MyStore
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8 font-medium">
               <Link to={"/"}>Home</Link>
               <a href="#" className="hover:text-blue-400 transition">Shop</a>
               <a href="#" className="hover:text-blue-400 transition">About</a>
               <a href="#" className="hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="relative cursor-pointer">
               <FaShoppingCart className="w-7 h-7" />
               {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                     {cartCount}
                  </span>
               )}
            </Link>
         </div>
      </nav>
   );
};

export default Navbar;

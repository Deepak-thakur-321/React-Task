import React from "react";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { NavLink } from 'react-router';

const Navbar = () => {
   const cartItems = useSelector(state => state.cart.items);
   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

   return (
      <nav className="bg-gradient-to-r from-gray-500 via-gray-800 to-gray-500 text-white shadow-lg backdrop-blur-md border-b border-gray-700">
         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wide cursor-pointer">
               MyStore
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8 font-medium">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     `transition ${isActive ? "text-blue-400" : "hover:text-blue-400"}`
                  }
               >
                  Home
               </NavLink>

               <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                     `transition ${isActive ? "text-blue-400" : "hover:text-blue-400"}`
                  }
               >
                  Shop
               </NavLink>

               <NavLink
                  to="/new-arrivals"
                  className={({ isActive }) =>
                     `transition ${isActive ? "text-blue-400" : "hover:text-blue-400"}`
                  }
               >
                  New Arrivals
               </NavLink>

               <NavLink
                  to="/showcase"
                  className={({ isActive }) =>
                     `transition ${isActive ? "text-blue-400" : "hover:text-blue-400"}`
                  }
               >
                  Showcase
               </NavLink>

               <NavLink
                  to="/track-orders"
                  className={({ isActive }) =>
                     `transition ${isActive ? "text-blue-400" : "hover:text-blue-400"}`
                  }
               >
                  Track Orders
               </NavLink>
            </div>

            {/* Cart Icon */}
            <div className="flex items-center space-x-6">
               {/* Cart */}
               <NavLink to="/cart" className="relative cursor-pointer group">
                  <div className="w-9 h-9 bg-white border rounded-full flex items-center justify-center transition">
                     <FaShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition" />
                  </div>

                  {cartCount > 0 && (
                     <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold text-white">
                        {cartCount}
                     </span>
                  )}
               </NavLink>


               {/* Wishlist */}
               <NavLink to="/wishlist" className="relative cursor-pointer group">
                  <div className="w-9 h-9 bg-white border rounded-full flex items-center justify-center transition">
                     <FaHeart className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition" />
                  </div>
               </NavLink>


               {/* Profile */}
               <div className="w-9 h-9 bg-white border rounded-full flex items-center justify-center transition shadow-md hover:shadow-blue-400/40 hover:scale-105">
                  <FaUser className="w-6 h-6 text-gray-600 group-hover:text-blue-500 transition" />
               </div>

            </div>
         </div>
      </nav>
   );
};

export default Navbar;

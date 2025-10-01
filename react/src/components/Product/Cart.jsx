import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
   const cartSelector = useSelector((state) => state.cart.item);

   return (
      <div className="max-w-sm mt-6 bg-white rounded-2xl shadow-lg overflow-hidden p-5">
         <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>

         <div className="flex items-center gap-4">
            <img
               className="w-28 h-28 object-cover rounded-lg"
               src="https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg"
               alt="Product"
            />
            <div>
               <p className="text-lg font-semibold">Gaming Headset</p>
               <p className="text-gray-600">Price: $79.99</p>
               <p className="text-gray-900 font-bold mt-1">Quantity: {cartSelector}</p>
            </div>
         </div>
      </div>
   );
};

export default Cart;

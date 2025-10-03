import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
   const cartItems = useSelector((state) => state.cart.items);

   return (
      <div className="max-w-sm mt-6 bg-white rounded-2xl shadow-lg overflow-hidden p-5">
         <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>

         {cartItems.length > 0 ? (
            cartItems.map((product, index) => (
               <div key={index} className="flex items-center gap-4 mb-4">
                  <img
                     className="w-28 h-28 object-cover rounded-lg"
                     src={product.image}
                     alt={product.name}
                  />
                  <div>
                     <p className="text-lg font-semibold">{product.name}</p>
                     <p className="text-gray-600">Price: ${product.price}</p>
                     <p className="text-gray-900 font-bold mt-1">
                        Quantity: {product.quantity}
                     </p>
                  </div>
               </div>
            ))
         ) : (
            <p className="text-gray-600">Your cart is empty.</p>
         )}
      </div>
   );
};

export default Cart;

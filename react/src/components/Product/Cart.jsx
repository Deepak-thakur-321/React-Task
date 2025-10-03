import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/Slice";
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {

   const dispatch = useDispatch()
   const cartItems = useSelector((state) => state.cart.items);

   const handleIncrement = (item) => {
      dispatch(addItem(item)); // increase quantity
   };

   const handleDecrement = (item) => {
      if (item.quantity > 1) dispatch(removeItem(item.id)); // decrease quantity
   };

   const handleRemove = (id) => {
      dispatch(removeItem(id)); // remove completely
   };
   return (
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-3xl shadow-lg">
         <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

         {cartItems.length === 0 ? (
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
         ) : (
            <div className="space-y-6">
               {cartItems.map((product) => (
                  <div
                     key={product.id}
                     className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
                  >
                     {/* Product Image */}
                     <div className="flex-shrink-0 w-full sm:w-36 h-36 bg-gray-100 rounded-xl overflow-hidden">
                        <img
                           src={product.image}
                           alt={product.name}
                           className="w-full h-full object-contain"
                        />
                     </div>

                     {/* Product Details */}
                     <div className="flex-grow flex flex-col justify-between w-full">
                        <div className="flex justify-between items-start">
                           <div>
                              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                              <p className="text-gray-500 mt-1">Price: ${product.price}</p>
                           </div>
                           <button
                              onClick={() => handleRemove(product.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                           >
                              <FiTrash2 className="w-5 h-5" />
                           </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                           <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                              <button
                                 onClick={() => handleDecrement(product)}
                                 disabled={product.quantity <= 1}
                                 className="p-2 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                 <FiMinus className="w-4 h-4 text-gray-700" />
                              </button>
                              <span className="px-5 py-2 text-gray-900 font-bold">{product.quantity}</span>
                              <button
                                 onClick={() => handleIncrement(product)}
                                 className="p-2 hover:bg-gray-200 transition-colors"
                              >
                                 <FiPlus className="w-4 h-4 text-gray-700" />
                              </button>
                           </div>

                           <p className="text-xl font-bold text-gray-900">
                              ${(product.price * product.quantity).toFixed(2)}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}

               {/* Total Section */}
               <div className="flex justify-end mt-6">
                  <div className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-1/3">
                     <h3 className="text-lg font-semibold text-gray-700 mb-4">Total</h3>
                     <p className="text-2xl font-bold text-gray-900">
                        $
                        {cartItems
                           .reduce((sum, item) => sum + item.price * item.quantity, 0)
                           .toFixed(2)}
                     </p>
                     <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                        Checkout
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Cart;

import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/Slice";
import { fetchProducts } from "../redux/ProductSlice";

const Product = () => {
   const dispatch = useDispatch();

   // Cart State
   const cartCount = useSelector((state) => state.cart.count);

   // Products
   const productsItems = useSelector((state) => state.products.items);


   // Carts Items
   const cartItems = useSelector((state) => state.cart.items);

   useEffect(() => {
      dispatch(fetchProducts())
   },);

   const isInCart = (product) => {
      return cartItems.some((item) => item.id === product.id);
   };



   return (
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
         <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {productsItems && productsItems.map((product) => (
               <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
               >
                  {/* Product Image */}
                  <img
                     className="w-full h-56 object-contain"
                     src={product.image}
                     alt={product.title}
                  />

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                     <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                     <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description.substring(0, 100)}...</p>
                     <span className="text-xl font-semibold text-gray-900 mt-3">${product.price}</span>

                     {/* Buttons */}
                     <div className="mt-4 flex flex-col gap-2">
                        <button
                           onClick={() => dispatch(addItem(product))}
                           disabled={isInCart(product)} // ✅ now per-product check
                           className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition mt-3
                                 ${isInCart(product)
                                 ? "bg-gray-400 cursor-not-allowed"
                                 : "bg-blue-600 hover:bg-blue-700 text-white"
                              }`}
                        >
                           <FaShoppingCart />
                           {isInCart(product) ? "Added to Cart" : "Add"}
                        </button>



                        <button
                           onClick={() => {
                              if (isInCart(product)) {
                                 dispatch(removeItem(product.id)); // ✅ sirf tab remove hoga jab cart me hai
                              }
                           }}
                           className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition
      ${isInCart(product)
                                 ? "bg-red-600 hover:bg-red-700 text-white"
                                 : "bg-gray-300 cursor-not-allowed"} // ✅ disable style if not in cart
   `}
                           disabled={!isInCart(product)} // ✅ agar cart me nahi hai to disable button
                        >
                           <FaShoppingCart />
                           Remove
                        </button>

                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};


export default Product;

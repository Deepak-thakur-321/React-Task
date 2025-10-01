import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItem } from "../redux/Slice";
import { fetchProducts } from "../redux/ProductSlice";

const Product = () => {
   const dispatch = useDispatch();
   const cartCount = useSelector((state) => state.cart.count);
   const ProductsSelector = useSelector((state) => state.products.items);

   useEffect(() => {
      dispatch(fetchProducts())
   }, );

   return (
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
         <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {ProductsSelector && ProductsSelector.map((product) => (
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
                           onClick={() => dispatch(addItem(ProductsSelector.find(item => item.id === product.id)))}
                           className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                        >
                           <FaShoppingCart />
                           Add
                        </button>

                        <button
                           onClick={() => cartCount > 0 && dispatch(removeItem())}
                           className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                        >
                           <FaShoppingCart />
                           Remove
                        </button>

                        <button
                           onClick={() => cartCount > 0 && dispatch(clearItem())}
                           className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300"
                        >
                           Clear Cart
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

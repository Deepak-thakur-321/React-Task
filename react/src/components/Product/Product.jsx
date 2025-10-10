import React, { useEffect } from "react";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { GiShoppingBag, GiSparkles } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/Slice";
import { fetchProducts } from "../redux/ProductSlice";
// import FashionImage from "../Images/fashion-model.png"

const Product = () => {
   const dispatch = useDispatch();

   // Cart State
   const cartItems = useSelector((state) => state.cart.items);

   // Products
   const productsItems = useSelector((state) => state.products.items);

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   const isInCart = (product) => {
      return cartItems.some((item) => item.id === product.id);
   };

   return (
      <div>

         {/* Hero Section */}

         <div className="py-6  px-4 mt-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[500px]">

                  {/* Left Section- 8 columns */}
                  <div className="lg:col-span-8 bg-[rgb(222,231,236)] rounded-2xl px-5 ">
                     {/* Nested grid inside left section */}
                     <div className="grid grid-cols-7 gap-4 items-center w-full">

                        {/* Text Section */}
                        <div className="lg:col-span-4 md:col-span-4 col-span-12 p-3 lg:p-0 text-gray-900">
                           <div className="flex items-center gap-2 mb-2">
                              <GiSparkles className="w-5 h-5 text-yellow-400" />
                              <span className="text-sm font-medium tracking-wide">TRENDING NOW</span>
                           </div>

                           <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-snug">
                              Upgrade Your<br />
                              Everyday Essentials
                           </h1>

                           <p className="text-lg lg:text-base mb-4 max-w-md text-gray-700">
                              Explore thousands of trending products at unbeatable prices. Fast delivery. Trusted by over 500,000 happy customers worldwide.
                           </p>

                           <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800 transition shadow">
                              Shop Now
                              <FaArrowRight className="w-4 h-4" />
                           </button>
                        </div>

                        {/* Left Image Section */}
                        <div className="lg:col-span-3 md:col-span-3 col-span-12">
                           <div className="">
                              <img
                                 className="object-cover object-center"
                                 src="https://i.pinimg.com/1200x/15/31/b1/1531b16969b04db5a311ab379b609e51.jpg"
                                 alt="Fashion Models"
                              />
                           </div>
                        </div>

                     </div>
                  </div>

                  {/* Right Section - 4 columns */}
                  <div className="lg:col-span-4 p-">
                     <div className="flex flex-col items-center gap-3">
                        {/* Image */}
                        <img
                           src="https://i.pinimg.com/736x/6d/02/fe/6d02fe6adbe02dab6084d407f137850a.jpg"
                           alt="Fashion Model"
                           className="w-11/12 lg:w-full max-h-[300px] object-cover rounded-2xl shadow-xl"
                        />

                        {/* Heading */}
                        <h2 className="text-lg lg:text-xl font-bold text-center mt-2 leading-snug text-gray-900">
                           Discover a wide range of Fashion Options Including Clothing, Shoes, Accessories, and More
                        </h2>

                        {/* Button */}
                        <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition shadow">
                           Shop Now
                        </button>
                     </div>
                  </div>

               </div>
            </div>



            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
                                 disabled={isInCart(product)}
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
                                 onClick={() => dispatch(removeItem(product.id))}
                                 disabled={!isInCart(product)}
                                 className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition
                                    ${isInCart(product)
                                       ? "bg-red-600 hover:bg-red-700 text-white"
                                       : "bg-gray-300 cursor-not-allowed"
                                    }`}
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
         </div>
      </div>
   );
};

export default Product;

import React from 'react'
import { Star, ShoppingBag } from 'lucide-react'

const ShopBetter = () => {
   return (
      <section className="bg-gradient-to-b from-[#fffaf5] to-[#f5ebe0] py-6 md:py-14 ">
         <div className="max-w-7xl mx-auto px-6 lg:px-">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

               {/* Left: Image */}
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-200/10 blur-3xl rounded-3xl"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl h-[540px]">
                     <img
                        src="https://i.pinimg.com/736x/60/38/27/603827dc6da1d946b6e21860edb653e3.jpg"
                        alt="Stylish women shopping together"
                        className="w-full h-full object-cover object-center"
                     />

                     {/* Floating tag */}
                     <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 flex items-center gap-3">
                        <div className="bg-blue-600 p-3 rounded-full">
                           <ShoppingBag className="w-5 h-5 text-white" />
                        </div>
                        <div>
                           <p className="text-xs text-gray-500">Trusted by</p>
                           <p className="text-base font-semibold text-gray-900">50K+ Happy Shoppers</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right: Content */}
               <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                     Shop Smarter, 
                     <span className="text-blue-600">Live Better</span>
                  </h1>

                  <div className="flex items-center gap-2">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                     ))}
                     <span className="text-gray-600 text-sm ml-1">4.7 • 412  Reviews</span>
                  </div>

                  <div className="flex items-end gap-4">
                     <p className="text-4xl font-bold text-gray-900">₹3,499</p>
                     <p className="text-gray-400 line-through text-lg">₹4,299</p>
                     <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">20% OFF</span>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                     From statement outfits to timeless essentials — shop premium styles handpicked by top designers.
                     Enjoy fast delivery, secure checkout, and returns made effortless.
                  </p>

                  <div className="flex items-center gap-2 pt-3">
                     <img
                        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        alt="Verified"
                        className="w-10 h-10"
                     />
                     <div>
                        <p className="text-gray-800 font-medium">12,458</p>
                        <p className="text-sm text-gray-500">Verified happy customers</p>
                     </div>
                  </div>

                  <button className="group inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300">
                     <span>Shop Now</span>
                     <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ShopBetter

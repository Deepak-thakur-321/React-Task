import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function PremiumHero() {
   return (
      <div className="bg-gradient-to-b from-gray-50 to-white">
         <div className="px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

               {/* Main Hero - Left Section */}
               <div className="lg:col-span-8">
                  <div className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 rounded-3xl overflow-hidden h-full min-h-[400px] shadow-sm">

                     {/* Background Pattern */}
                     <div className="absolute inset-0 opacity-10">
                        <div
                           className="absolute inset-0"
                           style={{
                              backgroundImage:
                                 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                              backgroundSize: '40px 40px',
                           }}
                        ></div>
                     </div>

                     <div className="relative grid lg:grid-cols-2 h-full">
                        {/* Text Content */}
                        <div className="flex flex-col justify-center p-8 lg:p-12 z-10 space-y-5">
                           {/* Badge */}
                           <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full px-4 py-1.5 w-fit">
                              <span className="flex items-center gap-1 text-yellow-500 text-xs font-semibold">
                                 <Star className="w-3 h-3 fill-current" />
                                 <Star className="w-3 h-3 fill-current" />
                                 <Star className="w-3 h-3 fill-current" />
                                 <Star className="w-3 h-3 fill-current" />
                                 <Star className="w-3 h-3 fill-current" />
                              </span>
                              <span className="text-gray-800 text-xs font-medium">
                                 Rated 4.9/5 by 500K+ customers
                              </span>
                           </div>

                           <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                              Upgrade Your
                              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                 Everyday Style
                              </span>
                           </h1>

                           <p className="text-gray-700 text-base lg:text-lg max-w-md leading-relaxed">
                              Discover premium fashion and lifestyle products curated for the modern you. Free shipping on orders over $50.
                           </p>

                           <div className="flex flex-wrap gap-4 pt-1">
                              <button className="group bg-gray-900 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:scale-[1.03]">
                                 Shop Now
                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                              <button className="bg-white/80 backdrop-blur-sm border border-gray-300 text-gray-900 px-7 py-3 rounded-full font-semibold hover:bg-white transition-all">
                                 View Collection
                              </button>
                           </div>
                        </div>

                        {/* Image + Stats Section */}
                        {/* Image + Stats Section */}
                        <div className="relative hidden lg:flex flex-col justify-between p-6 h-full">
                           {/* Image */}
                           <div className="relative w-full flex-1">
                              <div className="absolute -inset-8 bg-gradient-to-br from-blue-200/20 via-slate-100/30 to-indigo-200/20 rounded-[2rem] blur-3xl"></div>

                              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/20 h-[73vh]">
                                 <img
                                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop"
                                    alt="Fashion"
                                    className="w-full h-full object-cover"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 mix-blend-overlay"></div>
                              </div>
                           </div>

                           {/* Stats Section */}
                           <div className="grid grid-cols-3 gap-4 pb-5 w-full">
                              <div className="text-center">
                                 <div className="text-2xl font-bold text-gray-900">500K+</div>
                                 <div className="text-sm text-gray-500">Happy Customers</div>
                              </div>
                              <div className="text-center">
                                 <div className="text-2xl font-bold text-gray-900">50K+</div>
                                 <div className="text-sm text-gray-500">Products</div>
                              </div>
                              <div className="text-center">
                                 <div className="text-2xl font-bold text-gray-900">24/7</div>
                                 <div className="text-sm text-gray-500">Support</div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>

               {/* Side Card - Right Section */}
               <div className="lg:col-span-4">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full min-h-[400px] flex flex-col">
                     {/* Image */}
                     <div className="relative h-64 lg:h-72 overflow-hidden group">
                        <img
                           src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop"
                           alt="New Collection"
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                           NEW
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>

                     {/* Content */}
                     <div className="flex-1 p-6 lg:p-7 flex flex-col justify-between">
                        <div>
                           <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                              SPRING COLLECTION
                           </div>

                           <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                              Fashion Essentials for Every Occasion
                           </h3>

                           <p className="text-gray-600 mb-6 leading-relaxed">
                              Explore our curated selection of clothing, shoes, and accessories designed for the modern lifestyle.
                           </p>
                        </div>

                        <button className="group w-full bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.03]">
                           Explore Collection
                           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Features Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
               {[
                  { title: 'Free Shipping', desc: 'On orders over $50' },
                  { title: 'Easy Returns', desc: '30-day return policy' },
                  { title: 'Secure Payment', desc: '100% secure checkout' },
                  { title: 'Premium Quality', desc: 'Guaranteed satisfaction' },
               ].map((feature, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                     <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                     <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

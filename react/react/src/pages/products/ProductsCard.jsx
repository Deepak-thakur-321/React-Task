// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem } from "../components/redux/Slice.js";
// import { fetchProducts } from "../components/redux/ProductSlice.js";
// import { FaShoppingCart, FaTrash } from "react-icons/fa";

// const ProductsCard = () => {
//    const dispatch = useDispatch();

//    const cartItems = useSelector((state) => state.cart.items);
//    const productsItems = useSelector((state) => state.products.items);

//    useEffect(() => {
//       dispatch(fetchProducts());
//    }, [dispatch]);

//    const isInCart = (product) => cartItems.some((item) => item.id === product.id);

//    return (
//       <div className="max-w-7xl mx-auto px-4 py-6">
//          <h1 className="text-3xl font-bold mb-6">Products</h1>
//          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
//             {productsItems.map((product) => (
//                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
//                   <img className="w-full h-56 object-contain" src={product.image} alt={product.title} />
//                   <div className="p-5 flex flex-col flex-grow">
//                      <h2 className="text-lg font-bold">{product.title}</h2>
//                      <p className="text-gray-600 text-sm mt-2 flex-grow">
//                         {product.description.substring(0, 100)}...
//                      </p>
//                      <span className="text-xl font-semibold mt-3">${product.price}</span>

//                      <div className="mt-4 flex flex-col gap-2">
//                         <button
//                            onClick={() => dispatch(addItem(product))}
//                            disabled={isInCart(product)}
//                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg mt-3 ${isInCart(product)
//                                  ? "bg-gray-400 cursor-not-allowed text-gray-700"
//                                  : "bg-blue-600 hover:bg-blue-700 text-white"
//                               }`}
//                         >
//                            <FaShoppingCart />
//                            {isInCart(product) ? "Added to Cart" : "Add to Cart"}
//                         </button>

//                         <button
//                            onClick={() => dispatch(removeItem(product.id))}
//                            disabled={!isInCart(product)}
//                            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${isInCart(product)
//                                  ? "bg-red-600 hover:bg-red-700 text-white"
//                                  : "bg-gray-300 cursor-not-allowed text-gray-500"
//                               }`}
//                         >
//                            <FaTrash />
//                            Remove
//                         </button>
//                      </div>
//                   </div>
//                </div>
//             ))}
//          </div>
//       </div>
//    );
// };

// export default ProductsCard;

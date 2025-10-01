import React from 'react'
import Navbar from './components/Product/Navbar'
import Product from './components/Product/Product'
import Cart from './components/Product/Cart'


const App = () => {

  return (
    <div>
      <Navbar></Navbar>
      

      <Product></Product>
      <Cart></Cart>


    </div>
  )
}

export default App